import { Section } from "@/components/layout/Section";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import {
  contactEmail,
  contactHeading,
  contactIntro,
  contactLocation,
  socialLinks
} from "@/data/contact";

const PRIMARY_SOCIALS = ["LinkedIn", "GitHub"] as const;

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  GitHub: Github
} as const;

const ContactSection = () => {
  const primarySocials = socialLinks.filter((s) =>
    PRIMARY_SOCIALS.includes(s.name as (typeof PRIMARY_SOCIALS)[number])
  );

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
                  className="w-full sm:w-auto h-14 px-6 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] bg-primary hover:bg-primary-hover text-white"
                >
                  <a href={`mailto:${contactEmail}`}>
                    <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
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
                      className="w-full sm:w-auto h-14 px-6 text-sm sm:text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
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

              <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{contactLocation}</span>
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </Section>
  );
};

export default ContactSection;
