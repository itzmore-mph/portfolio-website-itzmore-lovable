import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      primary: "M.Sc. AI Applied to Sports",
      secondary: "M.A. Digital Media Management",
      third: "B.Sc. Business Administration",
      colorClass: "accent"
    },
    {
      icon: Award,
      title: "Experience", 
      primary: "5+ Years",
      secondary: "Data & Analytics",
      colorClass: "success"
    },
    {
      icon: Users,
      title: "Specialization",
      primary: "Football Analytics",
      secondary: "Sports Technology",
      colorClass: "analytics-purple"
    },
    {
      icon: Target,
      title: "Focus",
      primary: "Data-Driven",
      secondary: "Decision Making",
      colorClass: "data-orange"
    }
  ];

  return (
    <Section id="about" background="muted" spacing="xl">
      <SectionHeader 
        title="About Me"
        subtitle="Get to know more about my background, expertise, and passion for transforming complex data into actionable insights."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Profile Image */}
        <AnimatedSection animation="slide-right" className="flex justify-center">
          <div className="relative">
            <OptimizedImage 
              src="/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png" 
              alt="Moritz Philipp Haaf - Professional portrait showing data analyst and football analytics expert in business attire" 
              className="w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 rounded-full object-cover border-4 border-white/80"
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
              {highlights.map((highlight, index) => (
                <Card key={highlight.title} className="portfolio-card-interactive">
                  <CardContent className="p-4 text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-${highlight.colorClass}/10 border border-${highlight.colorClass}/20 mb-3`}>
                      <highlight.icon className={`icon-lg text-${highlight.colorClass}`} />
                    </div>
                    <h3 className="font-semibold mb-1 text-caption">{highlight.title}</h3>
                    <p className="text-body-sm font-medium text-primary">{highlight.primary}</p>
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
                  I am a <strong>Data Analyst with strong Data Science expertise</strong>, experienced in transforming complex datasets into actionable insights. My background spans <strong>sports, media, and technology</strong>, giving me a unique perspective on how data can drive performance and decision-making.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  At <strong>Publicis Media Austria</strong>, I lead international dashboard and automation projects, building real-time data visualization tools and scalable workflows. These skills translate directly into the demands of football analytics, where speed, accuracy, and clarity are critical.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  Alongside this, I actively develop <strong>football analytics projects</strong> — including expected goals (xG) models, opponent analysis dashboards, and player comparison case studies using StatsBomb and other open-source data.
                </p>
              </div>
              
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mt-6">
                <h4 className="font-semibold text-accent mb-3 text-body-sm">Future Academic Goals</h4>
                <p className="text-body-sm text-muted-foreground text-justify lg:text-left">
                  In <strong>October 2025</strong>, I will begin the <strong>MSc in Artificial Intelligence Applied to Sports</strong> at Sports Data Campus, to deepen my expertise in AI, machine learning, and applied football analytics. My goal is to combine corporate analytics experience, academic specialization, and applied football projects to contribute as a <strong>Football Data Scientist</strong> in professional clubs, federations, or sports data companies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications/Skills Tags */}
          <AnimatedSection animation="slide-left" delay={600}>
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-6 text-card-title text-foreground">Core Expertise</h4>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  "Sports Data Analyst",
                  "Data Science Expert", 
                  "Football Analytics",
                  "Dashboard Development",
                  "Machine Learning",
                  "Real-time Visualization",
                  "International Projects",
                  "Future AI Student"
                ].map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant={index % 3 === 0 ? "expertise" : index % 3 === 1 ? "expertise-alt" : "modern"} 
                    className="px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-200 shadow-sm"
                  >
                    {skill}
                  </Badge>
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