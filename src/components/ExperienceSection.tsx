import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/experience";

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
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-4">Professional Journey</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From corporate dashboard development to football analytics innovation, with upcoming AI specialization — 
            building expertise across sports, media, and technology sectors.
          </p>
        </div>

        <div className="space-y-6 animate-slide-up">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                          {exp.current && (
                            <Badge variant="secondary" className="bg-pitch-green/10 text-pitch-green border-pitch-green/20">
                              Current Position
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-lg font-medium text-primary mb-2">{exp.position}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {exp.links && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.links.map((link, linkIndex) => (
                            <Button
                              key={linkIndex}
                              variant="outline"
                              size="sm"
                              className="h-7 text-xs"
                              onClick={() => window.open(link.url, '_blank')}
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
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
                      className="lg:self-start"
                    >
                      {expandedCards.includes(index) ? (
                        <>
                          Hide Details <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          Show Details <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {expandedCards.includes(index) && (
                  <div className="border-t bg-muted/30 p-6 animate-fade-in">
                    <h4 className="font-semibold mb-3">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-2">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;