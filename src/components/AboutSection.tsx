import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      primary: "M.Sc. AI Applied to Sports",
      secondary: "M.A. Digital Media Management",
      third: "B.Sc. Business Administration",
    },
    {
      icon: Award,
      title: "Experience", 
      primary: "5+ Years",
      secondary: "Data & Analytics",
    },
    {
      icon: Users,
      title: "Specialization",
      primary: "Football Analytics",
      secondary: "Sports Technology",
    },
    {
      icon: Target,
      title: "Focus",
      primary: "Data-Driven",
      secondary: "Decision Making",
    }
  ];

  const expertise = [
    "Sports Data Analyst",
    "Data Science Expert", 
    "Football Analytics",
    "Dashboard Development",
    "Machine Learning",
    "Real-time Visualization",
    "International Projects",
    "Future AI Student"
  ];

  return (
    <Section id="about" background="power" spacing="xl">
      <SectionHeader 
        title="About Me"
        subtitle="Get to know more about my background, expertise, and passion for transforming complex data into actionable insights."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Profile Image */}
        <AnimatedSection animation="slide-right" className="flex justify-center">
          <div className="relative" style={{ width: 'clamp(18rem, 40vw, 24rem)', height: 'clamp(18rem, 40vw, 24rem)' }}>
            <OptimizedImage 
              src="/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png" 
              alt="Moritz Philipp Haaf - Professional portrait showing data analyst and football analytics expert in business attire" 
              className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-xl"
              containerClassName="rounded-full"
              width={384}
              height={384}
              lazy={true}
            />
          </div>
        </AnimatedSection>

        {/* About Content */}
        <div className="space-y-8 flex flex-col justify-center">
          {/* Highlight Cards */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="grid grid-cols-2 gap-4 mb-8">
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

          {/* About Text */}
          <AnimatedSection animation="slide-left" delay={400}>
            <div className="space-y-6">
              <h3 className="text-subsection-title text-center lg:text-left">Professional Background</h3>
              <div className="space-y-4 text-justify lg:text-left">
                <p className="text-body-sm text-muted-foreground">
                  I am a <strong className="text-foreground">Data Analyst with strong Data Science expertise</strong>, experienced in transforming complex datasets into actionable insights. My background spans <strong className="text-foreground">sports, media, and technology</strong>, giving me a unique perspective on how data can drive performance and decision-making.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  At <strong className="text-foreground">Publicis Media Austria</strong>, I lead international dashboard and automation projects, building real-time data visualization tools and scalable workflows. These skills translate directly into the demands of football analytics, where speed, accuracy, and clarity are critical.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  Alongside this, I actively develop <strong className="text-foreground">football analytics projects</strong> — including expected goals (xG) models, opponent analysis dashboards, and player comparison case studies using StatsBomb and other open-source data.
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-primary mb-3 text-body-sm">Future Academic Goals</h4>
                <p className="text-body-sm text-muted-foreground text-justify lg:text-left">
                  In <strong className="text-foreground">October 2025</strong>, I will begin the <strong className="text-foreground">MSc in Artificial Intelligence Applied to Sports</strong> at Sports Data Campus, to deepen my expertise in AI, machine learning, and applied football analytics. My goal is to combine corporate analytics experience, academic specialization, and applied football projects to contribute as a <strong className="text-foreground">Football Data Scientist</strong> in professional clubs, federations, or sports data companies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Core Expertise Tags */}
          <AnimatedSection animation="slide-left" delay={600}>
            <div className="text-center lg:text-left">
              <h4 className="font-bold mb-6 text-2xl text-foreground">Core Expertise</h4>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {expertise.map((skill, index) => (
                  <div
                    key={skill}
                    className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-foreground shadow-md border border-border bg-muted/50 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:border-primary/40 hover:bg-muted cursor-default"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="relative z-10">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
