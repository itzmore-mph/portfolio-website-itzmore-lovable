import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { contactMethods, socialLinks } from "@/data/contact";

const PRIMARY_SOCIALS = ["LinkedIn", "GitHub"];
const EMAIL_ADDRESS = "itzmore.dev@gmail.com";

const ContactSection = () => {
  const primarySocials = socialLinks.filter((s) => PRIMARY_SOCIALS.includes(s.name));

  return (
    <Section id="contact" background="default" spacing="xl">
      <ParallaxSection fadeIn slideUp>
        <SectionHeader
          title="Let's Work Together"
          subtitle="Open to football data roles and project work with clubs, federations and sports-tech in the EU and UK. Typical projects: set-piece analysis, tracking and video data pipelines, and recruitment data workflows."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Information */}
          <AnimatedSection animation="slide-right">
            <h3 className="text-subsection-title mb-8">Get In Touch</h3>

            <div className="space-y-6">
              {contactMethods.map((method) => (
                <Card
                  key={method.title}
                  className="portfolio-card-elevated border-0 bg-gradient-to-br from-card to-card-hover hover:from-card-hover hover:to-muted transition-all duration-300"
                >
                  <CardContent className="p-5 sm:p-8">
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-3 sm:gap-x-6">
                      <div className="p-2 sm:p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-md sm:row-span-2">
                        <method.icon className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold self-center text-xl text-card-title">{method.title}</h4>
                      <div className="col-span-2 min-w-0 sm:col-span-1 sm:col-start-2">
                        {method.title === "Email" ? (
                          <a
                            href={`mailto:${method.value}`}
                            className="font-medium text-primary mb-2 hover:text-accent transition-colors duration-200 underline decoration-dotted underline-offset-4 hover:decoration-solid block text-sm sm:text-lg whitespace-nowrap"
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
          </AnimatedSection>

          {/* Direct email + social links */}
          <AnimatedSection animation="slide-left" delay={200}>
            <Card className="shadow-2xl bg-card border-border/50">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-subsection-title mb-3">Write me directly</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The fastest way to reach me is email. Tell me about the role, project or analytics
                  need you have in mind and I will get back to you.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] bg-primary hover:bg-primary-hover text-white"
                >
                  <a href={`mailto:${EMAIL_ADDRESS}?subject=Football%20Data%20Science%20Opportunity`}>
                    <Mail className="w-5 h-5 mr-3" />
                    Email me
                  </a>
                </Button>

                <div className="mt-10">
                  <h4 className="font-semibold mb-6 text-lg">Connect With Me</h4>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {primarySocials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.name} profile (opens in new tab)`}
                        className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-muted/50 hover:bg-muted rounded-xl transition-all duration-200 group focus-ring shadow-sm hover:shadow-md border border-border/50 hover:border-primary/30"
                      >
                        <div className={`p-1.5 sm:p-4 rounded-xl ${social.color} flex-shrink-0 shadow-md`}>
                          <img
                            src={social.logo}
                            alt=""
                            className="w-5 h-5 sm:w-6 sm:h-6 invert"
                            width="20"
                            height="20"
                            loading="lazy"
                            fetchPriority="low"
                          />
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors text-xs sm:text-sm whitespace-nowrap">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>

                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Single site-wide CTA band */}
      <ParallaxSection fadeIn slideUp scale>
        <div className="mt-14 md:mt-24 text-center">
          <div className="bg-card border border-border/50 p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Let's talk football data</h3>
              <p className="text-muted-foreground mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
                Clubs, federations and sports-tech teams: I'm open to full-time roles and project-based work in Football Data Science across the EU and UK, remote-first or hybrid.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-primary hover:bg-primary-hover text-white"
                >
                  <a href={`mailto:${EMAIL_ADDRESS}?subject=Football%20Data%20Science%20Opportunity`}>
                    Get In Touch
                  </a>
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
      </ParallaxSection>
    </Section>
  );
};

export default ContactSection;
