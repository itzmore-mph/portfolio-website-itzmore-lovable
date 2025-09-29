import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, TrendingUp, Users, Award } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Football Analytics Portfolio – Expected Goals (xG) & Passing Networks",
      description: "Interactive dashboard analyzing player performance metrics and tactical insights with advanced statistical modeling using StatsBomb data.",
      image: "/lovable-uploads/58741acb-2f0e-4f70-97e0-a1c20ca0bee8.png",
      tags: ["Python", "Streamlit", "xG Models", "Network Analysis"],
      metrics: ["XGBoost ML Model", "Passing Networks", "StatsBomb Data"],
      icon: BarChart3,
      color: "analytics-blue",
      liveUrl: "https://football-analytics-dashboard.streamlit.app/",
      githubUrl: "https://github.com/itzmore-mph/football-analytics-portfolio"
    },
    {
      title: "Bundesliga Performance & Valuation Analysis",
      description: "Comprehensive analysis of Bayer Leverkusen's historic unbeaten season using performance metrics, valuation trends, and machine learning models.",
      image: "/lovable-uploads/fcdfc32d-a94f-4445-b24b-ffbb89a5c8e6.png",
      tags: ["Python", "Machine Learning", "Bundesliga", "Performance Analysis"],
      metrics: ["Ridge & Random Forest", "Market Valuation", "Feature Analysis"],
      icon: TrendingUp,
      color: "analytics-green",
      liveUrl: "https://itzmore-mph.github.io/bundesliga-performance-analysis/",
      githubUrl: "https://github.com/itzmore-mph/BundesligaPerformanceAnalysis"
    },
    {
      title: "Phoenix Firebirds Ticket Sales Analysis",
      description: "Strategic analysis of Minor League Baseball ticket sales data identifying key drivers of attendance and revenue optimization opportunities.",
      image: "/lovable-uploads/e1798b1e-2ff3-4c5c-98b4-8a94faf3b4b4.png",
      tags: ["Excel", "Power BI", "Sports Strategy", "Revenue Analysis"],
      metrics: ["3-Year Analysis", "Revenue Optimization", "Strategic Insights"],
      icon: Users,
      color: "analytics-orange",
      liveUrl: "https://docs.google.com/spreadsheets/d/1mPcusY0ESo4krszRta6Yul3MsqbyMYKV/export?format=xlsx",
      githubUrl: "https://drive.google.com/uc?export=download&id=1DQgAIAjWY7UDYFkX2LIfXYARIH57JuER"
    },
    {
      title: "More Projects Coming Soon",
      description: "Additional football analytics projects and data visualizations are currently in development. Contact me to discuss custom analytics solutions.",
      image: null,
      tags: ["Python", "Machine Learning", "Analytics", "Custom Solutions"],
      metrics: ["On Request", "Custom Analytics", "Data Solutions"],
      icon: Award,
      color: "muted-foreground",
      isPlaceholder: true
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-analytics-blue/20 text-analytics-blue">
            Featured Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Football Analytics
            <span className="block bg-gradient-to-r from-analytics-blue to-analytics-green bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my football analytics projects, demonstrating expertise in data analysis, 
            machine learning, and strategic insights across various aspects of the beautiful game.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`project-card group h-full flex flex-col ${
                project.isPlaceholder ? 'border-dashed border-2 border-muted-foreground/20 bg-muted/5' : ''
              }`}
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-56 overflow-hidden">
                  <OptimizedImage 
                    src={project.image}
                    alt={`${project.title} - Project showcase`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-6 right-6 p-3 rounded-lg bg-white shadow-lg">
                    <project.icon className="w-6 h-6 text-analytics-blue" />
                  </div>
                </div>
              )}

              {/* Project Header */}
              <CardHeader className="project-card-header">
                <div className="flex items-start justify-between gap-4">
                  {!project.image && (
                    <div className="p-4 rounded-xl bg-analytics-blue/10 border border-analytics-blue/20 group-hover:scale-110 transition-transform">
                      <project.icon className="w-8 h-8 text-analytics-blue" />
                    </div>
                  )}
                  <div className="flex-1">
                    <CardTitle className="text-xl leading-tight text-foreground group-hover:text-analytics-blue transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="project-card-content flex flex-col flex-1">
                {/* Description */}
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4 text-foreground">Key Features</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center p-3 rounded-lg bg-analytics-blue/5 border border-analytics-blue/10">
                        <div className="w-2 h-2 bg-analytics-blue rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold mb-4 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1 bg-analytics-blue/10 text-analytics-blue border-analytics-blue/20 hover:bg-analytics-blue/15 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

              </CardContent>
              
              {/* Action Buttons */}
              <div className="project-card-footer">
                <div className="flex gap-4">
                  {project.isPlaceholder ? (
                    <Button 
                      variant="outline" 
                      size="default"
                      className="flex-1 py-3"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        size="default"
                        className="flex-1 py-3 hover:bg-analytics-blue/5 hover:border-analytics-blue/30 hover:text-analytics-blue transition-colors"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.title.includes('Phoenix') ? 'Excel Analysis' : 'View Live'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="default"
                        className="flex-1 py-3 hover:bg-analytics-blue/5 hover:border-analytics-blue/30 hover:text-analytics-blue transition-colors"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {project.title.includes('Phoenix') ? 'Summary' : 'Source'}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="portfolio-card-elevated bg-gradient-to-r from-analytics-blue to-analytics-green text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Ready to Collaborate?</h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                  I'm always excited to work on challenging football analytics projects. 
                  Let's discuss how data can drive your team's success.
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-analytics-blue hover:bg-white/90 font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Conversation
                </Button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;