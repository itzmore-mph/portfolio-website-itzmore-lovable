import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/utils";
import { ParallaxSection } from "@/components/ui/parallax-section";

const ProjectsSection = () => {
  return (
    <Section background="power" spacing="xl" containerSize="content">
      <ParallaxSection fadeIn slideUp>
      <SectionHeader
        title="Featured Projects"
        subtitle="A showcase of my football analytics projects, demonstrating expertise in data analysis, machine learning, and strategic insights across various aspects of the beautiful game."
        size="default"
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => {
          const isLastAndOdd = index === projects.length - 1 && projects.length % 2 !== 0;
          return (
           <Card 
            key={project.title} 
            className={cn(
              "card-power border-0 overflow-hidden group will-change-transform h-full flex flex-col",
              project.isPlaceholder 
                ? "border-2 border-dashed border-muted-foreground/20 bg-muted/5" 
                : "",
              isLastAndOdd ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Project Thumbnail */}
            {project.image && (
              <div className="w-full h-48 bg-background/60 border-b border-border/50 flex items-center justify-center overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Project Header with Icon */}
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 transition-all duration-300 group-hover:scale-110">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-card-title group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                {project.metricBadge && (
                  <span className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/25 whitespace-nowrap shrink-0">
                    {project.metricBadge}
                  </span>
                )}
              </div>
            </CardHeader>


            <CardContent className="flex flex-col h-full">
              {/* Project Description */}
              <div className="mb-6">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="stat-card p-3 min-h-[60px] flex items-center justify-center">
                      <div className="font-mono text-[11px] sm:text-xs font-semibold text-foreground text-center leading-tight">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8 flex-grow">
              <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="emerald"
                      className="text-xs px-2.5 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.isPlaceholder ? (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 focus-ring-primary opacity-50"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                ) : (
                  <>
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 focus-ring-primary interactive-element"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.title.includes('StatsBomb') ? 'View Report' : 'View Project'}
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 focus-ring-primary interactive-element"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>

      </ParallaxSection>

      {/* Enhanced Call to Action */}
      <ParallaxSection fadeIn slideUp scale>
      <div className="mt-20 lg:mt-24">
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to work on challenging football analytics projects. 
              Let's discuss how data can drive your team's success.
            </p>
            <Button 
              variant="default"
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-glow"
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
      </ParallaxSection>
    </Section>
  );
};

export default ProjectsSection;