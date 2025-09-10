import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

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
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "itzmore.dev@gmail.com",
      description: "Send me an email anytime",
      color: "data-blue"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Austria",
      description: "Available for remote work worldwide",
      color: "analytics-purple"
    }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/moritz-philipp-haaf/", 
      logo: "/lovable-uploads/3dbf94c1-8b1e-4164-9b4e-66b876fb1c55.png",
      color: "bg-blue-600" 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/itzmore-mph", 
      logo: "/lovable-uploads/34ef4087-06b0-4169-8894-d784144a83d3.png",
      color: "bg-gray-800"
    },
    { 
      name: "Upwork", 
      href: "https://www.upwork.com/freelancers/~01924c4b6089ef56d8", 
      logo: "/lovable-uploads/3b9fdfb7-6fd1-4f4e-9f7a-ba9320d49e93.png",
      color: "bg-green-600"
    },
    { 
      name: "Malt", 
      href: "https://www.malt.de/profile/moritzphilipphaaf", 
      logo: "/lovable-uploads/c315e1c6-6753-46ba-a8d5-cf8fdfd50248.png",
      color: "bg-purple-600"
    }
  ];

  return (
    <Section id="contact" background="default" spacing="xl">
      <SectionHeader 
        title="Let's Work Together"
        subtitle="Ready to transform your football data into winning insights? Let's discuss your analytics needs and how I can help drive your success."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information */}
        <AnimatedSection animation="slide-right">
          <h3 className="text-subsection-title mb-6">Get In Touch</h3>
          
          <div className="space-y-6 mb-8">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300 portfolio-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-${method.color}/10`}>
                      <method.icon className={`w-6 h-6 text-${method.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="font-medium text-primary mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted/30 hover:bg-muted/50 rounded-lg transition-all duration-300 group focus-ring"
                >
                  <div className={`p-2 rounded-lg ${social.color} flex-shrink-0`}>
                    <img 
                      src={social.logo}
                      alt={social.name}
                      className="w-4 h-4 invert"
                    />
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection animation="slide-left" delay={200}>
          <Card className="border-0 shadow-lg portfolio-card">
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="focus-ring" 
                      {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="focus-ring" 
                      {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="focus-ring" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    placeholder="Football Analytics Consultation" 
                    className="focus-ring" 
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project requirements, analytics needs, or any questions you have about football data analysis..."
                    rows={6}
                    className="focus-ring"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Call to Action */}
      <AnimatedSection animation="fade" delay={400}>
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-pitch-green to-pitch-green-light p-8 lg:p-12 rounded-2xl text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Elevate Your Football Analytics?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
              Whether you're a football club, sports organization, or fellow analyst, 
              I'm always excited to collaborate on challenging projects that push the boundaries of football analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-pitch-green hover:bg-white/90 font-semibold"
              >
                Schedule a Call
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
};

export default ContactSection;