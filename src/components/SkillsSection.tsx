import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories, keyStrengths } from "@/data/skills";

const SkillsSection = () => {
  const getProgressPercentage = (level: string) => {
    const percentages = {
      "Experienced": 100,
      "Intermediate": 66,
      "Basic": 33
    };
    return percentages[level as keyof typeof percentages] || 0;
  };

  const getProgressColor = (level: string) => {
    const colors = {
      "Experienced": "bg-primary",
      "Intermediate": "bg-primary/70",
      "Basic": "bg-primary/40"
    };
    return colors[level as keyof typeof colors] || "bg-muted";
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            A comprehensive toolkit spanning corporate dashboard development, football analytics, and upcoming AI specialization — 
            built through international projects at Publicis Media Austria and hands-on sports data analysis.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="animate-slide-up hover:shadow-lg transition-all duration-200 border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      {skill.link ? (
                        <a 
                          href={skill.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors text-base"
                        >
                          {skill.name}
                        </a>
                      ) : (
                        <span className="font-medium text-base">{skill.name}</span>
                      )}
                      <span className="text-xs text-muted-foreground font-normal">{skill.level}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getProgressColor(skill.level)} transition-all duration-500 rounded-full`}
                        style={{ width: `${getProgressPercentage(skill.level)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-semibold text-center mb-8 tracking-tight">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {keyStrengths.map((strength) => (
              <Card 
                key={strength.title} 
                className="text-center border-border/50 bg-card hover:shadow-lg transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <strength.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{strength.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-normal">
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
