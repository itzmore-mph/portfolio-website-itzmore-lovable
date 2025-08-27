import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Twitter, MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react";

const AboutSection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Football Analyst",
      company: "Premier League Data Solutions",
      description: "Leading advanced analytics projects for top-tier football clubs",
      type: "work"
    },
    {
      year: "2023",
      title: "MSc Sports Analytics",
      company: "University College London",
      description: "Specialized in football performance analysis and predictive modeling",
      type: "education"
    },
    {
      year: "2022",
      title: "Data Analyst",
      company: "Championship Analytics Ltd",
      description: "Developed tactical analysis tools and performance dashboards",
      type: "work"
    },
    {
      year: "2021",
      title: "BSc Mathematics & Statistics",
      company: "University of Bath",
      description: "First-class honors with focus on statistical modeling",
      type: "education"
    }
  ];

  const achievements = [
    "Published research on xG models in Journal of Sports Analytics",
    "Consultant for 3 professional football clubs",
    "Speaker at Football Analytics Conference 2024",
    "Certified in Advanced Sports Analytics (BISA)",
    "Developed predictive models with 85%+ accuracy"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Information */}
          <div className="animate-fade-in">
            <h2 className="text-section-title mb-6">About Me</h2>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="text-body mb-4">
                I'm a passionate Sports Data Enthusiast with over 5 years of experience in football analytics. 
                My journey began with a deep love for the beautiful game and evolved into a career dedicated 
                to uncovering insights that drive performance and success.
              </p>
              
              <p className="text-body mb-4">
                Specializing in advanced statistical analysis, machine learning, and tactical evaluation, 
                I help football organizations make data-driven decisions that enhance player performance, 
                optimize team strategies, and identify emerging talent.
              </p>
              
              <p className="text-body">
                When I'm not analyzing match data, you'll find me at local football matches, staying current 
                with the latest analytics trends, or contributing to the football analytics community through 
                research and open-source projects.
              </p>
            </div>

            {/* Key Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="border-0 bg-background">
                <CardContent className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">London, UK</div>
                  <div className="text-sm text-muted-foreground">Available Worldwide</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-background">
                <CardContent className="p-4 text-center">
                  <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">5+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </CardContent>
              </Card>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-wrap gap-3">
              <Button variant="default" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Timeline & Achievements */}
          <div className="space-y-8">
            {/* Career Timeline */}
            <div className="animate-slide-up">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Career Journey
              </h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="absolute left-1.5 top-6 w-0.5 h-full bg-border"></div>
                    
                    <div className="bg-background rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        {item.type === 'work' ? (
                          <Briefcase className="w-4 h-4 text-primary" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-accent" />
                        )}
                        <span className="text-sm font-medium text-primary">{item.year}</span>
                      </div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-accent font-medium">{item.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
              
              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;