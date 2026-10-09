import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { projects, earlierWork } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/utils";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { ProjectThumbnail } from "@/components/ui/project-thumbnail";



const ProjectsSection = () => {
  return (
    <Section background="power" spacing="xl" containerSize="content">
      <ParallaxSection fadeIn slideUp>
      <SectionHeader
        title="Featured Projects"
        subtitle="Selected work on broadcast video, tracking and event data. Each project links to code or a write-up."
        size="default"
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => {
          const isLastAndOdd = index === projects.length - 1 && projects.length % 2 !== 0;
          const hasLiveDemo = Boolean(project.liveUrl);
          const primaryUrl = project.liveUrl ?? project.caseStudyUrl;
          const primaryLabel = hasLiveDemo ? "Live Demo" : project.caseStudyLabel ?? "View Case Study";
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
            {/* Project Thumbnail — standardized shared 16:9 wrapper */}
            {project.image && (
              <ProjectThumbnail
                src={project.image}
                alt={`${project.title} preview`}
              />
            )}


            {/* Project Header with Icon */}
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 transition-all duration-300 group-hover:scale-110 shrink-0">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-card-title group-hover:text-primary transition-colors break-words">
                    {project.title}
                  </CardTitle>
                </div>
              </div>
              {project.metricBadge && (
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/25 whitespace-nowrap">
                    {project.metricBadge}
                  </span>
                  {project.metricExplainer && (
                    <p className="text-[11px] text-muted-foreground leading-snug flex-1 min-w-[12rem]">
                      {project.metricExplainer}
                    </p>
                  )}
                </div>
              )}
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

              {/* Secondary video link, then Action Buttons , pinned to the card bottom */}
              <div className="mt-auto">
                {project.videoLink && (
                  <a
                    href={project.videoLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mb-3 w-full justify-start focus-ring-primary"
                    )}
                    aria-label={`${project.videoLink.label} (opens in new tab)`}
                  >
                    <PlayCircle className="w-4 h-4 shrink-0 text-primary" />
                    <span className="min-w-0 truncate">
                      <span className="sm:hidden">
                        {project.videoLink.shortLabel ?? project.videoLink.label}
                      </span>
                      <span className="hidden sm:inline">{project.videoLink.label}</span>
                      {project.videoLink.sublabel && (
                        <span className="hidden lg:inline text-muted-foreground">
                          {" "}
                          · {project.videoLink.sublabel}
                        </span>
                      )}
                    </span>
                  </a>
                )}

                <div className="flex gap-3">
                  project.isPlaceholder ? (
                    Button
                      ariant="outline"
                      ize="sm"
                      lassName="flex-1 focus-ring-primary opacity-50"
                      isabled
                    
                      ExternalLink className="w-4 h-4 mr-2" />
                      oming Soon
                    /Button>
                   : (
                    >
                      primaryUrl && (
                        Button
                          ariant="default"
                          ize="sm"
                          lassName="flex-1 focus-ring-primary interactive-element bg-primary hover:bg-primary-hover text-white"
                          nClick={() => window.open(primaryUrl, "_blank", "noopener,noreferrer")}
                          ria-label={`${primaryLabel}: ${project.title}`}
                        
                          PrimaryIcon className="w-4 h-4 mr-2" />
                          primaryLabel}
                        /Button>
                      }
                      project.githubUrl && (
                        Button
                          ariant="outline"
                          ize="sm"
                          lassName="flex-1 focus-ring-primary interactive-element"
                          nClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                          ria-label={`Source code: ${project.title}`}
                        
                          Github className="w-4 h-4 mr-2" />
                          ource Code
                        /Button>
                      }
                    />
                  }
                </div>
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>

      <div className="mt-10">
        <p className="text-body-sm text-muted-foreground mb-3">Earlier work</p>
        <div className="flex flex-wrap gap-3">
          {earlierWork.map((item) => (
            <a
              key={item.title}
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-body-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors focus-ring-primary"
              aria-label={`${item.title} on GitHub (opens in new tab)`}
            >
              <Github className="w-4 h-4 shrink-0" />
              {item.title}
            </a>
          ))}
        </div>
      </div>

      </ParallaxSection>
    </Section>
  );
};

export default ProjectsSection;
