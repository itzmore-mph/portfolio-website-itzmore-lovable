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
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                        {exp.current && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-medium">
                            Current Position
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-xl font-semibold text-primary mb-4">{exp.position}</p>
                    
                    <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>

                    {exp.links && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {exp.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            className="h-8 text-sm interactive-element focus-ring-primary"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
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
                        Hide Details <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Show Details <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {expandedCards.includes(index) && (
                <div className="border-t bg-gradient-to-r from-muted/30 to-muted/10 p-8 animate-fade-in">
                  <h4 className="font-bold text-lg mb-4 text-foreground">Key Responsibilities & Achievements</h4>
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