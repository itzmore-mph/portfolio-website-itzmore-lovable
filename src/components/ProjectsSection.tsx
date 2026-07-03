import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/utils";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
          const hasLiveDemo = Boolean(project.liveUrl);
          const primaryUrl = project.liveUrl ?? project.caseStudyUrl;
          const primaryLabel = hasLiveDemo ? "Live Demo" : "View Case Study";
          const PrimaryIcon = hasLiveDemo ? PlayCircle : ExternalLink;
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
            {/* Project Thumbnail — standardized 16:9, lazy-loaded */}
            {project.image && (
              <div className="w-full bg-background/60 border-b border-border/50 overflow-hidden rounded-t-xl">
                <AspectRatio ratio={16 / 9}>
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain"
                    containerClassName="w-full h-full"
                    lazy
                  />
                </AspectRatio>
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
                  <div className="flex flex-col items-end gap-1 shrink-0 max-w-[45%]">
                    <span className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/25 whitespace-nowrap">
                      {project.metricBadge}
                    </span>
                    {project.metricExplainer && (
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground text-right leading-snug">
                        {project.metricExplainer}
                      </p>
                    )}
                  </div>
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

              {/* Action Buttons — standardized: primary case study / live demo, secondary source code */}
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
                    {primaryUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 focus-ring-primary interactive-element bg-primary hover:bg-primary-hover text-white"
                        onClick={() => window.open(primaryUrl, "_blank", "noopener,noreferrer")}
                        aria-label={`${primaryLabel}: ${project.title}`}
                      >
                        <PrimaryIcon className="w-4 h-4 mr-2" />
                        {primaryLabel}
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 focus-ring-primary interactive-element"
                        onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                        aria-label={`Source code: ${project.title}`}
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
    </Section>
  );
};

export default ProjectsSection;
