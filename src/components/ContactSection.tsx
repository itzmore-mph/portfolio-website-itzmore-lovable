import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "analytics@example.com",
      description: "Send me an email anytime",
      color: "data-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+44 7XXX XXX XXX",
      description: "Available Mon-Fri, 9AM-6PM GMT",
      color: "pitch-green"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "London, United Kingdom",
      description: "Available for remote work worldwide",
      color: "analytics-purple"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", href: "#", color: "data-blue" },
    { icon: Twitter, name: "Twitter", href: "#", color: "data-blue" },
    { icon: Github, name: "GitHub", href: "#", color: "slate-700" },
    { icon: Mail, name: "Email", href: "#", color: "pitch-green" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-4">Let's Work Together</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your football data into winning insights? 
            Let's discuss your analytics needs and how I can help drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="border-0 bg-slate-50 hover:bg-slate-100 transition-colors">
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
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className="hover:scale-105 transition-transform"
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="Football Analytics Consultation" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project requirements, analytics needs, or any questions you have about football data analysis..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-pitch-green to-pitch-green-light p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Football Analytics?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're a football club, sports organization, or fellow analyst, 
              I'm always excited to collaborate on challenging projects that push the boundaries of football analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-pitch-green hover:bg-white/90"
              >
                Schedule a Call
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;