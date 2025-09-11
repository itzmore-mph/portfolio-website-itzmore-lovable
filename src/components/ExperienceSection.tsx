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
        "Lead dashboard development and analytics engineering in Salesforce Marketing Intelligence (Datorama) for international stakeholders; build Data Streams/Transformations pipelines and create efficient reporting.",
        "Implement scalable metrics and dimensions using Datorama's JS-style expression language.",
        "Design cross-source data models and reusable components; maintain a metric dictionary, naming conventions, and QA/alerting for consistent reporting."
      ],
      current: true
    },
    {
      date: "04/2024 – current", 
      company: "Freelance",
      position: "Sports Data Scientist & Analyst (Football)",
      location: "Remote",
      details: [
        "Build end-to-end football analytics prototypes on open data (FBref, StatsBomb): data ingestion/cleaning in Python + SQL/DuckDB, analysis, and publication via Streamlit and Power BI/Tableau.",
        "Train and evaluate a baseline xG model; derive player/team metrics (passing networks, shot maps, possession-adjusted comparisons) with methods documented in README files.",
        "Produce season case studies (e.g., Bundesliga 2023/24) to demonstrate workflow and reporting style.",
        "Portfolio: itzmore.dev - Upwork - Malt."
      ],
      current: true,
      links: [
        { name: "GitHub", url: "https://github.com/itzmore-mph" },
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
        "Analyzing traffic and user flow assessments using Google Analytics & Piano Analytics.",
        "Supported development of internal Looker KPI dashboards.",
        "Responsible for Data Management Platform to build and maintain user segments."
      ]
    },
    {
      date: "08/2022 – 04/2024",
      company: "Red Bull Media Brand Network | Red Bull Media House",
      position: "Digital Competence Specialist",
      location: "Austria", 
      details: [
        "Optimization of advertising monetization and analysis of digital user data.",
        "Management of advertising campaigns in Google Ad Manager for YouTube & Red Bull platforms.",
        "Implementation of new ad formats & technical solutions in/with internal teams."
      ]
    },
    {
      date: "10/2021 – 09/2022",
      company: "Sportradar AG | Sportradar Media Services GmbH", 
      position: "Media Advertising Manager",
      location: "Austria",
      details: [
        "Development of audience segmentation models to improve advertising strategies.",
        "Optimization of programmatic advertising through data analysis & machine learning.",
        "Execution of A/B testing and performance analysis for digital campaigns."
      ]
    },
    {
      date: "06/2021 – 08/2022",
      company: "Hawk-Eye Innovations Ltd",
      position: "Football Systems Operator",
      location: "Remote",
      details: [
        "Operated VAR/replay systems for Austrian Bundesliga & UEFA fixtures for the Austrian Bundesliga & UEFA competitions.",
        "Replay Operator for professional football matches; supporting decision-making through video technology.",
        "Application of project management skills to optimize sports technology processes."
      ]
    },
    {
      date: "02/2019 – 09/2022", 
      company: "E2 Communications GmbH",
      position: "Addserve & Ad Operations Manager",
      location: "Austria",
      details: [
        "Managed ad campaign setups and operations across platforms like Adition, Epom, and Adform, using data analytics to optimize performance.",
        "Developed and maintained client websites using WordPress, integrating analytics to enhance user engagement.",
        "Created comprehensive tracking and conversion tracking.",
        "Supported key account management and project execution, implementing data-driven reporting mechanisms to increase business efficiency."
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