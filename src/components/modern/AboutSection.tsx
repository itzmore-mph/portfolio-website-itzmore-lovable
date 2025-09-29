import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { GraduationCap, Award, Users, Target, Calendar, MapPin } from "lucide-react";
import profilePhoto from "/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Journey",
      items: ["M.Sc. AI Applied to Sports (2025)", "M.A. Digital Media Management", "B.Sc. Business Administration"],
      color: "analytics-blue"
    },
    {
      icon: Award,
      title: "Professional Experience", 
      items: ["5+ Years Analytics", "Publicis Media Austria", "International Projects"],
      color: "analytics-green"
    },
    {
      icon: Users,
      title: "Specialization",
      items: ["Football Analytics", "Sports Technology", "Data Science"],
      color: "analytics-purple"
    },
    {
      icon: Target,
      title: "Future Goals",
      items: ["Football Data Scientist", "Professional Clubs", "AI in Sports"],
      color: "analytics-orange"
    }
  ];

  const coreSkills = [
    "Sports Analytics Expert", "Data Science Professional", "Football Specialist", 
    "Dashboard Developer", "Machine Learning", "Real-time Visualization",
    "International Projects", "Future AI Student"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-analytics-blue/20 text-analytics-blue">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Data Into
            <span className="block bg-gradient-to-r from-analytics-blue to-analytics-green bg-clip-text text-transparent">
              Football Intelligence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging corporate analytics excellence with football passion to deliver data-driven insights 
            that shape the future of sports performance and strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="portfolio-card-elevated overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <OptimizedImage 
                    src={profilePhoto}
                    alt="Moritz Philipp Haaf - Professional portrait"
                    className="w-full h-80 object-cover"
                    width={400}
                    height={320}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-analytics-navy/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Moritz Philipp Haaf</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Austria
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Since 2019
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-analytics-blue/5 rounded-lg">
                      <div className="text-2xl font-bold text-analytics-blue">5+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-3 bg-analytics-green/5 rounded-lg">
                      <div className="text-2xl font-bold text-analytics-green">50+</div>
                      <div className="text-xs text-muted-foreground">Matches Analyzed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Highlight Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={highlight.title} className="portfolio-card-interactive group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-${highlight.color}/10 group-hover:bg-${highlight.color}/15 transition-colors`}>
                        <highlight.icon className={`w-6 h-6 text-${highlight.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-foreground">{highlight.title}</h3>
                        <ul className="space-y-1">
                          {highlight.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1 h-1 bg-analytics-blue rounded-full mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Background */}
            <Card className="portfolio-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Background</h3>
                <div className="space-y-6">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      I am a <strong className="text-foreground">Data Analyst with strong Data Science expertise</strong>, 
                      experienced in transforming complex datasets into actionable insights. My background spans 
                      <strong className="text-foreground"> sports, media, and technology</strong>, giving me a unique 
                      perspective on how data can drive performance and decision-making.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      At <strong className="text-foreground">Publicis Media Austria</strong>, I lead international 
                      dashboard and automation projects, building real-time data visualization tools and scalable workflows. 
                      These skills translate directly into the demands of football analytics, where speed, accuracy, and clarity are critical.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Alongside this, I actively develop <strong className="text-foreground">football analytics projects</strong> 
                      — including expected goals (xG) models, opponent analysis dashboards, and player comparison case studies 
                      using StatsBomb and other open-source data.
                    </p>
                  </div>
                  
                  {/* Future Goals Highlight */}
                  <div className="bg-analytics-blue/5 border-l-4 border-analytics-blue p-6 rounded-r-lg">
                    <h4 className="font-semibold text-analytics-blue mb-3">Future Academic Goals</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      In <strong className="text-foreground">October 2025</strong>, I will begin the 
                      <strong className="text-foreground"> MSc in Artificial Intelligence Applied to Sports</strong> at Sports Data Campus, 
                      to deepen my expertise in AI, machine learning, and applied football analytics. My goal is to combine 
                      corporate analytics experience, academic specialization, and applied football projects to contribute as a 
                      <strong className="text-foreground"> Football Data Scientist</strong> in professional clubs, federations, or sports data companies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Expertise */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-analytics-blue/10 text-analytics-blue border-analytics-blue/20 hover:bg-analytics-blue/15 transition-colors"
                  >
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