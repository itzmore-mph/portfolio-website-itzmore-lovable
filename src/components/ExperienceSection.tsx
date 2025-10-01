import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/experience";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

const ExperienceSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  
  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Section background="muted" spacing="xl" containerSize="content">
      <SectionHeader 
        title="Professional Journey"
        subtitle="From corporate dashboard development to football analytics innovation, with upcoming AI specialization — building expertise across sports, media, and technology sectors."
        size="default"
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="portfolio-card-elevated overflow-hidden group will-change-transform">
            <CardContent className="p-0">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl border border-primary/20">
                      <Briefcase className="icon-lg text-primary" />
                    </div>
                      <div>
                        <h3 className="text-card-title text-foreground mb-2">{exp.company}</h3>
                        {exp.current && (
                          <Badge variant="secondary" className="skill-badge-accent font-medium">
                            Current Position
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-body text-primary mb-4 font-semibold">{exp.position}</p>
                    
                    <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="icon-md" />
                        <span className="font-medium text-body-sm">{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="icon-md" />
                        <span className="font-medium text-body-sm">{exp.location}</span>
                      </div>
                    </div>

                    {exp.links && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {exp.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            className="interactive-element focus-ring-primary"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            <ExternalLink className="icon-sm mr-2" />
                            {link.name}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCard(index)}
                    className="lg:self-start interactive-element focus-ring-primary"
                  >
                    {expandedCards.includes(index) ? (
                      <>
                        Hide Details <ChevronUp className="icon-sm ml-2" />
                      </>
                    ) : (
                      <>
                        Show Details <ChevronDown className="icon-sm ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {expandedCards.includes(index) && (
                <div className="border-t bg-gradient-to-r from-muted/30 to-muted/10 p-8 animate-fade-in">
                  <h4 className="font-bold text-body mb-4 text-foreground">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;