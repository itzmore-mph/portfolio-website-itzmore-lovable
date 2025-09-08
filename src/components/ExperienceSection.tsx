import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      date: "01/2025 – current",
      company: "Publicis Media Austria",
      position: "Senior Digital Data & Dashboard Manager",
      location: "Austria",
      details: [
        "Develop and implement dashboards and automation for digital campaigns.",
        "Consult on AI-driven data strategy and product development.",
        "Facilitate cross-functional collaboration within the agency and network.",
        "Lead data visualization and automation initiatives."
      ],
      current: true
    },
    {
      date: "04/2024 – current", 
      company: "Freelance",
      position: "Football Data Scientist & Analyst",
      location: "Remote",
      details: [
        "Build end-to-end football analytics prototypes on open data (FBref, StatsBomb) using Python and SQL/DuckDB for ingestion and cleaning, run analyses, and publish results in Streamlit and Power BI/Tableau.",
        "Train and evaluate a baseline xG model and derive player/team metrics (passing networks, shot maps, possession-adjusted comparisons); document methods and evaluation in README files.",
        "Produce season case studies (e.g., Bundesliga 2023/24 — Bayer 04 Leverkusen) to demonstrate workflow and reporting style.",
        "Standardize metric definitions and implement QA checks for reproducibility across competitions; use Git/GitHub for version control.",
        "Maintain portfolio at itzmore.dev and client presence on Upwork and Malt."
      ],
      current: true,
      links: [
        { name: "Portfolio", url: "https://itzmore.dev" },
        { name: "Upwork", url: "https://www.upwork.com/freelancers/~01924c4b6089ef56d8" },
        { name: "Malt", url: "https://www.malt.de/profile/moritzphilipphaaf" }
      ]
    },
    {
      date: "07/2024 – 12/2024",
      company: "Regionalmedien Austria AG",
      position: "Analytics & Ad Tech Development Manager", 
      location: "Austria",
      details: [
        "Optimized RMA's Ad-Tech-Stack and implemented data-driven strategies.",
        "Analyzed user flow with Google Analytics & Piano Analytics.",
        "Managed data platforms and Looker dashboard development."
      ]
    },
    {
      date: "08/2022 – 04/2024",
      company: "Red Bull Media House",
      position: "Digital Competence & Ad Tech Specialist",
      location: "Austria", 
      details: [
        "Analyzed digital user data and optimized monetization.",
        "Managed YouTube & Red Bull campaign operations.",
        "Introduced technical ad solutions with internal teams."
      ]
    },
    {
      date: "10/2021 – 09/2022",
      company: "Sportradar Media Services GmbH", 
      position: "Manager Digital Advertising",
      location: "Austria",
      details: [
        "Optimized programmatic ads using data analysis & ML.",
        "Built audience segmentation models.",
        "Ran A/B tests for digital performance insights."
      ]
    },
    {
      date: "06/2021 – 08/2022",
      company: "Hawk-Eye Innovations Ltd",
      position: "Football Systems Operator",
      location: "Remote",
      details: [
        "Operated VAR and video replay systems for UEFA & Bundesliga.",
        "Supported match decisions via replay technology.",
        "Improved processes with project management skills."
      ]
    },
    {
      date: "02/2019 – 09/2022", 
      company: "E2 Communications GmbH",
      position: "Oddsserve & Ad Operations Manager",
      location: "Austria",
      details: [
        "Managed ad operations across platforms like Adform & Epom.",
        "Built client websites with analytics in WordPress.",
        "Enhanced campaign reporting with data-driven tools."
      ]
    },
    {
      date: "08/2016",
      company: "TorAlarm GmbH",
      position: "Internship", 
      location: "Germany",
      details: [
        "Improved database structures for better efficiency.",
        "Contributed to user growth & sales initiatives.",
        "Helped integrate Alexa skills into products."
      ]
    }
  ];

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