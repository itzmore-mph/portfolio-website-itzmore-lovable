import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

// Helper: basic HTML escaping to prevent HTML injection in emails
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Helper: sanitize strings (trim and length limit)
function sanitize(input: unknown, max = 500): string {
  const str = typeof input === "string" ? input.trim() : "";
  return str.slice(0, max);
}

// Helper: simple email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    const payload: ContactFormData = await req.json();

    const firstName = sanitize(payload.firstName, 100);
    const lastName = sanitize(payload.lastName, 100);
    const email = sanitize(payload.email, 320);
    const subject = sanitize(payload.subject, 150);
    const message = sanitize(payload.message, 5000);

    if (!firstName || !lastName || !subject || !message || !email) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client with service role to bypass RLS for safe server-side checks
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Enhanced rate limiting: email-based (3 per 15 min) + IP-based (5 per 15 min)
    const windowMs = 15 * 60 * 1000;
    const windowStartIso = new Date(Date.now() - windowMs).toISOString();
    
    // Check email-based rate limit (3 submissions per 15 minutes per email)
    const { count: emailCount, error: emailRateError } = await supabase
      .from("contact_messages")
      .select("id", { count: "exact", head: true })
      .gte("created_at", windowStartIso)
      .eq("email", email);

    if (emailRateError) {
      console.error("Email rate limit check error:", emailRateError);
      return new Response(
        JSON.stringify({ error: "Internal error" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if ((emailCount ?? 0) >= 3) {
      console.warn(`Email rate limit exceeded for ${email} from IP ${ip}, UA: ${userAgent}`);
      return new Response(
        JSON.stringify({ error: "Too many submissions from this email. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check IP-based rate limit (5 submissions per 15 minutes per IP) - only if IP is known
    if (ip !== "unknown") {
      const { count: ipCount, error: ipRateError } = await supabase
        .from("contact_messages")
        .select("id", { count: "exact", head: true })
        .gte("created_at", windowStartIso)
        .eq("ip_address", ip);

      if (ipRateError) {
        console.error("IP rate limit check error:", ipRateError);
        // Continue processing if IP rate limit check fails (degraded mode)
      } else if ((ipCount ?? 0) >= 5) {
        console.warn(`IP rate limit exceeded for IP ${ip}, email: ${email}, UA: ${userAgent}`);
        return new Response(
          JSON.stringify({ error: "Too many submissions from your network. Please try again later." }),
          { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    // Store the contact message in the database (server-side controlled)
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        subject: subject,
        message: message,
        ip_address: ip !== "unknown" ? ip : null,
        user_agent: userAgent !== "unknown" ? userAgent : null,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store contact message");
    }

    // Prepare safe HTML content
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessageHtml = escapeHtml(message).replace(/\n/g, '<br>');

    // Send notification email to you
    const emailResponse = await resend.emails.send({
      from: "Contact Form <contact@itzmore.dev>",
      to: ["itzmore.dev@gmail.com"],
      subject: `New Contact Form Submission: ${safeSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${safeFirstName} ${safeLastName} (${safeEmail})</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${safeMessageHtml}
        </div>
        <p style="color:#666; font-size:12px;">IP: ${escapeHtml(ip)} | User-Agent: ${escapeHtml(userAgent)}</p>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Contact form submitted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
