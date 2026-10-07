import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Brain, Code2 } from "lucide-react";
import aboutPhoto from "@/assets/moritz-aws-finalist.jpeg.asset.json";

const AboutSection = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Industry",
      primary: "Sports & Media Tech",
      secondary: "Hawk-Eye · Sportradar · Publicis",
    },
    {
      icon: GraduationCap,
      title: "Education",
      primary: "M.Sc. AI Applied to Sports",
      secondary: "M.A. Digital Media Mgmt",
      third: "B.Sc. Business Administration",
    },
    {
      icon: Brain,
      title: "Methods",
      primary: "Computer Vision & ML",
      secondary: "Tracking data · xG · pitch control",
    },
    {
      icon: Code2,
      title: "Stack",
      primary: "Python · AWS · Streamlit",
      secondary: "pandas · scikit-learn · YOLO",
    },
  ];

  return (
    <Section id="about" background="power" spacing="xl">
      <ParallaxSection fadeIn slideUp>
        <SectionHeader
          title="About Me"
          subtitle="Get to know more about my background, expertise, and passion for transforming complex data into actionable insights."
        />

        {/* Band 1: Highlight cards full-width */}
        <AnimatedSection animation="slide-up" delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-12 lg:mb-16">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="card-power border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20 mb-3">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-caption text-muted-foreground">{highlight.title}</h3>
                  <p className="text-body-sm font-medium text-foreground">{highlight.primary}</p>
                  <p className="text-caption text-muted-foreground">{highlight.secondary}</p>
                  {highlight.third && (
                    <p className="text-caption text-muted-foreground">{highlight.third}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Band 2: Photo + Text, top-aligned */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection animation="slide-right" className="flex justify-center lg:sticky lg:top-24">
            <figure className="relative w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-xl bg-black/20">
                <OptimizedImage
                  src={aboutPhoto.url}
                  alt="Moritz Philipp Haaf holding the AWS World Sports Innovation Cup 2026 Finalist certificate at the DFB Campus in Frankfurt"
                  className="w-full h-auto object-cover saturate-[0.82] brightness-[0.93]"
                  width={800}
                  height={1067}
                  lazy={true}
                />
                {/* cool wash so the bright banner settles into the dark page */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/40" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 bg-primary/[0.07] mix-blend-soft-light" aria-hidden="true" />
              </div>
              <figcaption className="mt-3 text-caption text-muted-foreground text-center">
                AWS World Sports Innovation Cup 2026, Finalist at DFB Campus Frankfurt
              </figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-subsection-title text-center lg:text-left">Professional Background</h3>
              <div className="space-y-4 text-left">
                <p className="text-body-sm text-muted-foreground">
                  I build data pipelines and models that turn football video and tracking data into metrics for <strong className="text-foreground">recruitment and match analysis</strong>. My work focuses on <strong className="text-foreground">broadcast computer vision</strong>, <strong className="text-foreground">optical and skeletal tracking data</strong>, and <strong className="text-foreground">event data</strong> from StatsBomb and Wyscout.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  Recent work includes a broadcast pipeline that derives player positions and pitch control from single-camera match footage, the <strong className="text-foreground">Football Body Intelligence Platform</strong> on TRACAB 3D skeleton data (finalist, AWS World Sports Innovation Cup 2026), and a <strong className="text-foreground">scouting data pipeline for a professional club</strong>.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  At <strong className="text-foreground">Publicis Media</strong> I lead dashboard and data-pipeline work for international stakeholders: documented metric definitions, automated QA and reporting that non-technical teams rely on. The same standards apply to my football work.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-primary mb-3 text-body-sm">Academic Background</h4>
                <p className="text-body-sm text-muted-foreground text-left">
                  <strong className="text-foreground">MSc in Artificial Intelligence Applied to Sports</strong>, Sports Data Campus / UCAM. Projects covered computer vision, tracking-data analysis, predictive modelling and generative AI for football. Previously M.A. Digital Media Management and B.Sc. Business Administration.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ParallaxSection>
    </Section>
  );
};

export default AboutSection;
