import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, TrendingUp, Users, Award } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Premier League Performance Dashboard",
      description: "Interactive dashboard analyzing player performance metrics across the 2023/24 season with advanced statistical modeling and predictive analytics.",
      image: "/placeholder-project1.jpg",
      tags: ["Python", "Tableau", "Premier League", "Performance Analysis"],
      metrics: ["500+ Players Analyzed", "20 Teams Covered", "38 Match Weeks"],
      icon: BarChart3,
      color: "data-blue"
    },
    {
      title: "Expected Goals (xG) Model",
      description: "Machine learning model predicting goal probability from shot data, achieving 85% accuracy in goal prediction across major European leagues.",
      image: "/placeholder-project2.jpg",
      tags: ["Machine Learning", "Python", "Statistical Modeling", "xG"],
      metrics: ["85% Accuracy", "50,000+ Shots", "5 Leagues Covered"],
      icon: TrendingUp,
      color: "analytics-purple"
    },
    {
      title: "Team Tactical Analysis System",
      description: "Comprehensive tactical analysis tool examining formations, pressing patterns, and defensive structures using video analysis and tracking data.",
      image: "/placeholder-project3.jpg",
      tags: ["Tactical Analysis", "Video Analysis", "Formation Study"],
      metrics: ["100+ Matches", "15 Formations", "Tactical Insights"],
      icon: Users,
      color: "pitch-green"
    },
    {
      title: "Transfer Market Valuation Model",
      description: "Data-driven player valuation system using performance metrics, age, contract length, and market factors to predict transfer values.",
      image: "/placeholder-project4.jpg",
      tags: ["Market Analysis", "Valuation", "Transfer Insights"],
      metrics: ["€2B+ Valuations", "1000+ Players", "Market Trends"],
      icon: Award,
      color: "data-orange"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-4">Featured Projects</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            A showcase of my football analytics projects, demonstrating expertise in data analysis, 
            machine learning, and strategic insights across various aspects of the beautiful game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="portfolio-card animate-scale-in border-0 overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header with Icon */}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${project.color}/10`}>
                      <project.icon className={`w-6 h-6 text-${project.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-card-title group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Description */}
                <p className="text-body text-muted-foreground">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-sm font-semibold text-foreground">{metric}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="secondary"
                      className="skill-badge"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-pitch-green to-pitch-green-light p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging football analytics projects. 
              Let's discuss how data can drive your team's success.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-pitch-green hover:bg-white/90"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;