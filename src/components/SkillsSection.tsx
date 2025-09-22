import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { skillCategories, keyStrengths } from "@/data/skills";

const SkillsSection = () => {
  const getLevelColor = (level: string) => {
    switch(level) {
      case "Experienced": return "bg-primary/10 text-primary border-primary/20";
      case "Intermediate": return "bg-data-blue/10 text-data-blue border-data-blue/20";
      case "Basic": return "bg-analytics-purple/10 text-analytics-purple border-analytics-purple/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-4">Technical Expertise</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning corporate dashboard development, football analytics, and upcoming AI specialization — 
            built through international projects at Publicis Media Austria and hands-on sports data analysis.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="animate-slide-up hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${category.color}/10`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {skill.link ? (
                        <a 
                          href={skill.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {skill.name}
                        </a>
                      ) : (
                        <span className="font-medium">{skill.name}</span>
                      )}
                    </div>
                    <Badge variant="secondary" className={getLevelColor(skill.level)}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {keyStrengths.map((strength, index) => (
              <Card 
                key={strength.title} 
                className="text-center border-0 bg-background hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                    <strength.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{strength.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;