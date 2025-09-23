import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <Section background="muted" spacing="xl" containerSize="content">
      <SectionHeader 
        title="Featured Projects"
        subtitle="A showcase of my football analytics projects, demonstrating expertise in data analysis, machine learning, and strategic insights across various aspects of the beautiful game."
        size="default"
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className={cn(
              "portfolio-card-elevated border-0 overflow-hidden group will-change-transform",
              project.isPlaceholder 
                ? "border-2 border-dashed border-muted-foreground/20 bg-muted/5" 
                : ""
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Project Header with Icon */}
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110",
                    `from-${project.color}/10 to-${project.color}/5 border border-${project.color}/20`
                  )}>
                    <project.icon className={`w-7 h-7 text-${project.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-card-title group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Project Description */}
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="stat-card">
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
                {project.isPlaceholder ? (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 focus-ring-primary"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 focus-ring-primary interactive-element"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.title.includes('Phoenix') ? 'Excel Analysis' : 'View Project'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 focus-ring-primary interactive-element"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {project.title.includes('Phoenix') ? 'Executive Summary' : 'Source Code'}
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Call to Action */}
      <div className="mt-20 lg:mt-24 animate-fade-in">
        <div className="hero-gradient rounded-3xl p-8 lg:p-12 text-white shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Interested in Collaboration?</h3>
            <p className="text-white/95 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to work on challenging football analytics projects. 
              Let's discuss how data can drive your team's success.
            </p>
            <Button 
              variant="secondary"
              size="lg"
               className="bg-white text-pitch-green hover:bg-white/90 font-semibold px-8 py-4 text-lg interactive-element focus-ring-accent"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;