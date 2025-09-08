import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      primary: "M.A. Digital Media Management",
      secondary: "B.Sc. Business Administration",
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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-4">About Me</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, expertise, and passion for transforming complex data into actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start animate-slide-up">
            <div className="relative">
              <img 
                src="/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png" 
                alt="Moritz Philipp Haaf - Professional portrait" 
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pitch-green/10 to-data-blue/10"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={highlight.title} className="border-0 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-${highlight.color}/10 mb-3`}>
                      <highlight.icon className={`w-6 h-6 text-${highlight.color}`} />
                    </div>
                    <h3 className="font-semibold mb-1">{highlight.title}</h3>
                    <p className="text-sm font-medium text-primary">{highlight.primary}</p>
                    <p className="text-xs text-muted-foreground">{highlight.secondary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* About Text */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a <strong>Data Analyst with strong Data Science expertise</strong>, experienced in transforming complex datasets into actionable insights. My background spans <strong>sports, media, and technology</strong>, giving me a unique perspective on how data can drive performance and decision-making.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At <strong>Publicis Media Austria</strong>, I lead international dashboard and automation projects, building real-time data visualization tools and scalable workflows. These skills translate directly into the demands of football analytics, where speed, accuracy, and clarity are critical.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alongside this, I actively develop <strong>football analytics projects</strong> — including expected goals (xG) models, opponent analysis dashboards, and player comparison case studies using StatsBomb and other open-source data.
              </p>
              
              <div className="bg-pitch-green/10 border-l-4 border-pitch-green p-4 rounded-r-lg mt-6">
                <h4 className="font-semibold text-pitch-green mb-2">Future Academic Goals</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  In <strong>October 2025</strong>, I will begin the <strong>MSc in Artificial Intelligence Applied to Sports</strong> at Sports Data Campus, to deepen my expertise in AI, machine learning, and applied football analytics. My goal is to combine corporate analytics experience, academic specialization, and applied football projects to contribute as a <strong>Football Data Scientist</strong> in professional clubs, federations, or sports data companies.
                </p>
              </div>
            </div>

            {/* Certifications/Skills Tags */}
            <div>
              <h4 className="font-semibold mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Analyst",
                  "Data Science Expert", 
                  "Football Analytics",
                  "Dashboard Development",
                  "Machine Learning",
                  "Real-time Visualization",
                  "International Projects",
                  "Future AI Student"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;