import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/layout/Section";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Button } from "@/components/ui/button";
import { Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import {
  contactCity,
  contactEmail,
  contactEmailSubject,
  contactHeading,
  contactIntro,
  contactWorkStyle,
  socialLinks
} from "@/data/contact";

const PRIMARY_SOCIALS = ["LinkedIn", "GitHub"] as const;

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  GitHub: Github
} as const;

const CONTACT_EMAIL_HREF = `mailto:${contactEmail}?subject=${encodeURIComponent(
  contactEmailSubject
)}`;

const ContactSection = () => {
  const primarySocials = socialLinks.filter((s) =>
    PRIMARY_SOCIALS.includes(s.name as (typeof PRIMARY_SOCIALS)[number])
  );

  const [workStyleLead, ...workStyleRest] = contactWorkStyle.split(" ");

  const [isCopied, setIsCopied] = useState(false);
  const copyTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch {
      const field = document.createElement("textarea");
      field.value = contactEmail;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }
    setIsCopied(true);
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Section id="contact" background="default" spacing="xl">
      <ParallaxSection fadeIn slideUp>
        <div className="mx-auto max-w-[720px]">
          <div className="bg-card border border-border/50 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl"
              aria-hidden="true"
            ></div>

            <div className="relative z-10">
              <h2 className="text-section-title mb-4 md:mb-6 font-semibold tracking-tight text-foreground">
                {contactHeading}
              </h2>

              <p className="text-body text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
                {contactIntro}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-14 px-4 sm:px-6 text-xs min-[360px]:text-sm lg:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] bg-primary hover:bg-primary-hover text-white"
                >
                  <a href={CONTACT_EMAIL_HREF}>
                    <Mail className="w-4 h-4 mr-1.5 sm:w-5 sm:h-5 sm:mr-2 flex-shrink-0" />
                    <span className="truncate">{contactEmail}</span>
                  </a>
                </Button>

                {primarySocials.map((social) => {
                  const Icon =
                    SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
                  return (
                    <Button
                      key={social.name}
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto h-14 px-4 sm:px-6 text-xs min-[360px]:text-sm lg:text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.name} profile (opens in new tab)`}
                      >
                        <Icon className="w-5 h-5 mr-2 flex-shrink-0" />
                        {social.name}
                      </a>
                    </Button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-center">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={copyEmail}
                  aria-label={`Copy email address ${contactEmail}`}
                  className="h-9 gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {isCopied ? "Email copied" : "Copy email address"}
                </Button>
                <span className="sr-only" aria-live="polite">
                  {isCopied ? "Email address copied to clipboard" : ""}
                </span>
              </div>

              <p className="mt-6 flex flex-col min-[360px]:flex-row items-center justify-center gap-1 min-[360px]:gap-2 text-xs min-[360px]:text-sm text-muted-foreground">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  {contactCity}
                </span>
                <span className="hidden min-[360px]:inline" aria-hidden="true">
                  ·
                </span>
                <span className="text-center">
                  <span className="whitespace-nowrap">{workStyleLead}</span>{" "}
                  {workStyleRest.join(" ")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </Section>
  );
};

export default ContactSection;
