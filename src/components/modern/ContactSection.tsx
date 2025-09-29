import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Mail, MapPin, ExternalLink, Send } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "itzmore.dev@gmail.com", 
      description: "Send me an email anytime",
      href: "mailto:itzmore.dev@gmail.com",
      color: "analytics-blue"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Austria",
      description: "Available for remote work worldwide",
      color: "analytics-green"
    }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/moritz-philipp-haaf/", 
      logo: "/lovable-uploads/3dbf94c1-8b1e-4164-9b4e-66b876fb1c55.png",
      description: "Professional network"
    },
    { 
      name: "GitHub", 
      href: "https://github.com/itzmore-mph", 
      logo: "/lovable-uploads/34ef4087-06b0-4169-8894-d784144a83d3.png",
      description: "Code repositories"
    },
    { 
      name: "Upwork", 
      href: "https://www.upwork.com/freelancers/~01924c4b6089ef56d8", 
      logo: "/lovable-uploads/3b9fdfb7-6fd1-4f4e-9f7a-ba9320d49e93.png",
      description: "Freelance projects"
    },
    { 
      name: "Malt", 
      href: "https://www.malt.de/profile/moritzphilipphaaf", 
      logo: "/lovable-uploads/c315e1c6-6753-46ba-a8d5-cf8fdfd50248.png",
      description: "European network"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-analytics-blue/20 text-analytics-blue">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Discuss Your
            <span className="block bg-gradient-to-r from-analytics-blue to-analytics-green bg-clip-text text-transparent">
              Analytics Needs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your football data into competitive advantages? 
            Let's collaborate on your next analytics project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="portfolio-card-interactive group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-${method.color}/10 group-hover:bg-${method.color}/15 transition-colors`}>
                        <method.icon className={`w-6 h-6 text-${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-analytics-blue hover:text-analytics-blue/80 font-medium transition-colors block mb-2"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground mb-2">{method.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <Card className="portfolio-card-elevated bg-analytics-blue/5 border-analytics-blue/20">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-analytics-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Drop me a line and let's discuss how football analytics can drive your success.
                </p>
                <Button 
                  size="lg"
                  className="bg-analytics-blue hover:bg-analytics-blue/90 text-white font-semibold"
                  onClick={() => window.open("mailto:itzmore.dev@gmail.com", '_blank')}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <Card key={social.name} className="portfolio-card-interactive group">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                        <OptimizedImage 
                          src={social.logo}
                          alt={`${social.name} logo`}
                          className="w-8 h-8 object-contain"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-analytics-blue transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-analytics-blue transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Status */}
            <Card className="portfolio-card mt-6 bg-analytics-green/5 border-analytics-green/20">
              <CardContent className="p-6 text-center">
                <div className="w-3 h-3 bg-analytics-green rounded-full mx-auto mb-3 animate-pulse" />
                <h4 className="font-semibold text-foreground mb-2">Available for Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new football analytics and data science projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;