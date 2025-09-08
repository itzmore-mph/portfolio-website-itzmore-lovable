import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BarChart3, Database, Code, Palette, Brain, Cog, TrendingUp } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Competencies",
      icon: BarChart3,
      color: "data-blue",
      skills: [
        { name: "Data Analytics", level: "Experienced" },
        { name: "Data Science", level: "Intermediate" },  
        { name: "Business Intelligence", level: "Experienced" },
        { name: "Data Visualization", level: "Experienced" },
        { name: "Dashboard Development", level: "Experienced" },
        { name: "Ad Tech", level: "Experienced" },
        { name: "Project Management", level: "Intermediate" },
        { name: "AI & Machine Learning", level: "Basic" },
        { name: "Football Analytics", level: "Intermediate" },
        { name: "Sports Technology", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      color: "pitch-green", 
      skills: [
        { name: "Python", level: "Experienced", link: "https://www.python.org/" },
        { name: "SQL", level: "Experienced", link: "https://dev.mysql.com/doc/" },
        { name: "R", level: "Basic", link: "https://www.r-project.org/" },
        { name: "Datorama", level: "Experienced", link: "https://www.salesforce.com/de/campaign/sem/marketing-cloud/" },
        { name: "Tableau", level: "Intermediate", link: "https://www.tableau.com/" },
        { name: "Power BI", level: "Intermediate", link: "https://www.microsoft.com/en-us/power-platform/products/power-bi" },
        { name: "Looker Studio", level: "Intermediate", link: "https://lookerstudio.google.com/" },
        { name: "Streamlit", level: "Basic", link: "https://streamlit.io/" },
        { name: "Git, GitHub", level: "Intermediate", link: "https://github.com/" }
      ]
    }
  ];

  const keyStrengths = [
    {
      icon: TrendingUp,
      title: "Corporate Analytics Excellence",
      description: "Leading international dashboard and automation projects at Publicis Media Austria, building real-time visualization tools and scalable workflows."
    },
    {
      icon: Brain,
      title: "Applied Football Analytics", 
      description: "Actively developing xG models, opponent analysis dashboards, and player comparison studies using StatsBomb and open-source data."
    },
    {
      icon: Cog,
      title: "Future AI Specialization",
      description: "Preparing for MSc in AI Applied to Sports (Oct 2025) to become a Football Data Scientist in professional clubs or federations."
    }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Experienced": return "bg-pitch-green/10 text-pitch-green border-pitch-green/20";
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
                      <CheckCircle className="w-4 h-4 text-pitch-green flex-shrink-0" />
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