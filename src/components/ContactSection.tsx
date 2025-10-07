import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { contactMethods, socialLinks } from "@/data/contact";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at itzmore.dev@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" background="default" spacing="xl">
      <SectionHeader 
        title="Let's Work Together"
        subtitle="Ready to transform your football data into winning insights? Let's discuss your analytics needs and how I can help drive your success."
      />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Contact Information */}
        <AnimatedSection animation="slide-right">
          <div className="lg:sticky lg:top-8">
            <h3 className="text-subsection-title mb-8">Get In Touch</h3>
            
            <div className="space-y-8 mb-12">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="portfolio-card-elevated border-0 bg-gradient-to-br from-card to-card-hover hover:from-card-hover hover:to-muted transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-md">
                        <method.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-xl text-card-title">{method.title}</h4>
                        {method.title === "Email" ? (
                          <a 
                            href={`mailto:${method.value}`}
                            className="font-medium text-primary mb-2 hover:text-accent transition-colors duration-200 underline decoration-dotted underline-offset-4 hover:decoration-solid block text-lg"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="font-medium text-primary mb-2 text-lg">{method.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Connect With Me</h4>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/50 hover:bg-muted rounded-xl transition-all duration-200 group focus-ring shadow-sm hover:shadow-md border border-border/50 hover:border-primary/30"
                >
                  <div className={`p-5 rounded-xl ${social.color} flex-shrink-0 shadow-md`}>
                    <img 
                      src={social.logo}
                      alt={`${social.name} logo`}
                      className="w-6 h-6 invert"
                      width="24"
                      height="24"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors text-sm">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection animation="slide-left" delay={200}>
          <Card className="shadow-2xl bg-card border-border/50">
            <CardHeader className="pb-6 bg-primary/5 rounded-t-3xl">
              <CardTitle className="text-section-title text-center">Send Message</CardTitle>
              <p className="text-muted-foreground text-center mt-2">Let's discuss your project</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">First Name</label>
                    <Input 
                      placeholder="John" 
                    className="focus-ring border-input h-12 px-4 text-base rounded-xl bg-muted/20 border-2 focus:border-primary/50 transition-all duration-200"
                      {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-error mt-2">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                    className="focus-ring border-input h-12 px-4 text-base rounded-xl bg-muted/20 border-2 focus:border-primary/50 transition-all duration-200"
                      {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-error mt-2">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold mb-3 block text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="focus-ring border-input h-12 px-4 text-base rounded-xl bg-muted/20 border-2 focus:border-primary/50 transition-all duration-200"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-xs text-error mt-2">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-semibold mb-3 block text-foreground">Subject</label>
                  <Input 
                    placeholder="Football Analytics Consultation" 
                    className="focus-ring border-input h-12 px-4 text-base rounded-xl bg-muted/20 border-2 focus:border-primary/50 transition-all duration-200" 
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="text-xs text-error mt-2">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-semibold mb-3 block text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project requirements, analytics needs, or any questions you have about football data analysis..."
                    rows={6}
                    className="focus-ring border-input px-4 py-3 text-base rounded-xl bg-muted/20 border-2 focus:border-primary/50 transition-all duration-200 resize-none"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-xs text-error mt-2">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] bg-primary hover:bg-primary-hover text-white" 
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-3" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Call to Action */}
      <AnimatedSection animation="fade" delay={400}>
        <div className="mt-24 text-center">
          <div className="bg-card border border-border/50 p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Ready to Elevate Your Football Analytics?</h3>
              <p className="text-muted-foreground mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
                Whether you're a football club, sports organization, or fellow analyst, 
                I'm always excited to collaborate on challenging projects that push the boundaries of football analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-primary hover:bg-primary-hover text-white"
                  onClick={() => window.open('https://calendly.com/itzmore-dev', '_blank')}
                >
                  Schedule a Call
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
};

export default ContactSection;