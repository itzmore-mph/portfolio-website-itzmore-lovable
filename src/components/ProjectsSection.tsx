import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, TrendingUp, Users, Award } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
      {
        title: "Football Analytics Portfolio – Expected Goals (xG) & Passing Networks",
        description: "Interactive dashboard analyzing player performance metrics and tactical insights with advanced statistical modeling using StatsBomb data.",
        image: "/lovable-uploads/58741acb-2f0e-4f70-97e0-a1c20ca0bee8.png",
        tags: ["Python", "Streamlit", "xG Models", "Network Analysis"],
        metrics: ["XGBoost ML Model", "Passing Networks", "StatsBomb Data"],
        icon: BarChart3,
        color: "data-blue"
      },
      {
        title: "Bundesliga Performance & Valuation Analysis",
        description: "Comprehensive analysis of Bayer Leverkusen's historic unbeaten season using performance metrics, valuation trends, and machine learning models.",
        image: "/lovable-uploads/fcdfc32d-a94f-4445-b24b-ffbb89a5c8e6.png",
        tags: ["Python", "Machine Learning", "Bundesliga", "Performance Analysis"],
        metrics: ["Ridge & Random Forest", "Market Valuation", "Feature Analysis"],
        icon: TrendingUp,
        color: "analytics-purple"
      },
      {
        title: "Phoenix Firebirds Ticket Sales Analysis",
        description: "Strategic analysis of Minor League Baseball ticket sales data identifying key drivers of attendance and revenue optimization opportunities.",
        image: "/lovable-uploads/e1798b1e-2ff3-4c5c-98b4-8a94faf3b4b4.png",
        tags: ["Excel", "Power BI", "Sports Strategy", "Revenue Analysis"],
        metrics: ["3-Year Analysis", "Revenue Optimization", "Strategic Insights"],
        icon: Users,
        color: "pitch-green"
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