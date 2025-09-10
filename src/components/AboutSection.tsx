import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
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
      color: "data-blue"
    },
    {
      icon: Award,
      title: "Experience", 
      primary: "5+ Years",
      secondary: "Data & Analytics",
      color: "pitch-green"
    },
    {
      icon: Users,
      title: "Specialization",
      primary: "Football Analytics",
      secondary: "Sports Technology",
      color: "analytics-purple"
    },
    {
      icon: Target,
      title: "Focus",
      primary: "Data-Driven",
      secondary: "Decision Making",
      color: "data-orange"
    }
  ];

  return (
    <Section id="about" background="muted" spacing="xl" className="relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pitch-green/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-data-blue/10 to-transparent rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-analytics-purple/10 to-transparent rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-data-orange/10 to-transparent rounded-full blur-md"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 left-12 animate-pulse">
          <div className="w-8 h-8 bg-pitch-green/5 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-pitch-green/20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-2/3 right-16 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="w-8 h-8 bg-data-blue/5 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-data-blue/20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
        </div>
      </div>

      <SectionHeader 
        title="About Me"
        subtitle="Get to know more about my background, expertise, and passion for transforming complex data into actionable insights."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Profile Image */}
        <AnimatedSection animation="slide-right" className="flex justify-center relative">
          <div className="relative">
            <img 
              src="/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png" 
              alt="Moritz Philipp Haaf - Professional portrait" 
              className="w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white/80 img-responsive relative z-10"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pitch-green/10 to-data-blue/10"></div>
            
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-full border-2 border-pitch-green/10 animate-pulse"></div>
            <div className="absolute -inset-8 rounded-full border border-data-blue/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </AnimatedSection>

        {/* About Content */}
        <div className="space-y-8 flex flex-col justify-center">
          {/* Highlight Cards */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <Card key={highlight.title} className="border-0 bg-background hover:bg-card-hover transition-all duration-300 portfolio-card">
                  <CardContent className="p-4 text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-${highlight.color}/10 mb-3`}>
                      <highlight.icon className={`w-6 h-6 text-${highlight.color}`} />
                    </div>
                    <h3 className="font-semibold mb-1 text-sm">{highlight.title}</h3>
                    <p className="text-sm font-medium text-primary">{highlight.primary}</p>
                    <p className="text-xs text-muted-foreground">{highlight.secondary}</p>
                    {highlight.third && (
                      <p className="text-xs text-muted-foreground">{highlight.third}</p>
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
              
              <div className="bg-pitch-green/5 border-l-4 border-pitch-green p-6 rounded-r-lg mt-6">
                <h4 className="font-semibold text-pitch-green mb-3">Future Academic Goals</h4>
                <p className="text-body-sm text-muted-foreground text-justify lg:text-left">
                  In <strong>October 2025</strong>, I will begin the <strong>MSc in Artificial Intelligence Applied to Sports</strong> at Sports Data Campus, to deepen my expertise in AI, machine learning, and applied football analytics. My goal is to combine corporate analytics experience, academic specialization, and applied football projects to contribute as a <strong>Football Data Scientist</strong> in professional clubs, federations, or sports data companies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications/Skills Tags */}
          <AnimatedSection animation="slide-left" delay={600}>
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-4">Core Expertise</h4>
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
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-sm py-1">
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