import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BarChart3, Code, TrendingUp, Brain, Cog, Star } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Analytics Competencies",
      icon: BarChart3,
      color: "analytics-blue",
      skills: [
        { name: "Data Analytics", level: "Expert", proficiency: 95 },
        { name: "Business Intelligence", level: "Expert", proficiency: 90 },
        { name: "Data Visualization", level: "Expert", proficiency: 92 },
        { name: "Dashboard Development", level: "Expert", proficiency: 88 },
        { name: "Data Science", level: "Advanced", proficiency: 85 },
        { name: "Football Analytics", level: "Advanced", proficiency: 82 },
        { name: "AI & Machine Learning", level: "Intermediate", proficiency: 75 }
      ]
    },
    {
      title: "Technical Tools & Platforms",
      icon: Code,
      color: "analytics-green", 
      skills: [
        { name: "Python", level: "Expert", proficiency: 90, link: "https://www.python.org/" },
        { name: "SQL", level: "Expert", proficiency: 92, link: "https://dev.mysql.com/doc/" },
        { name: "Tableau", level: "Expert", proficiency: 88, link: "https://www.tableau.com/" },
        { name: "Power BI", level: "Expert", proficiency: 85, link: "https://powerbi.microsoft.com/" },
        { name: "Datorama", level: "Expert", proficiency: 90, link: "https://www.salesforce.com/" },
        { name: "Streamlit", level: "Advanced", proficiency: 80, link: "https://streamlit.io/" },
        { name: "Git, GitHub", level: "Advanced", proficiency: 78, link: "https://github.com/" }
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
      case "Expert": return "bg-analytics-blue/10 text-analytics-blue border-analytics-blue/20";
      case "Advanced": return "bg-analytics-green/10 text-analytics-green border-analytics-green/20";
      case "Intermediate": return "bg-analytics-orange/10 text-analytics-orange border-analytics-orange/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-analytics-blue/20 text-analytics-blue">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-analytics-blue to-analytics-green bg-clip-text text-transparent">
              Competencies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning corporate dashboard development, football analytics, and upcoming AI specialization — 
            built through international projects at Publicis Media Austria and hands-on sports data analysis.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="portfolio-card-elevated group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/15 transition-colors`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle className={`w-4 h-4 text-${category.color} flex-shrink-0`} />
                        {skill.link ? (
                          <a 
                            href={skill.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium hover:text-analytics-blue transition-colors"
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
                    {/* Proficiency Bar */}
                    <div className="ml-7">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block">{skill.proficiency}% proficiency</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Key Strengths</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets me apart in the competitive field of sports analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {keyStrengths.map((strength, index) => (
              <Card 
                key={strength.title} 
                className="portfolio-card text-center group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-analytics-blue/10 mb-6 group-hover:bg-analytics-blue/15 transition-colors">
                    <strength.icon className="w-8 h-8 text-analytics-blue" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground group-hover:text-analytics-blue transition-colors">
                    {strength.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Certifications Teaser */}
        <div className="mt-16">
          <Card className="portfolio-card-elevated bg-analytics-blue/5 border-analytics-blue/20">
            <CardContent className="p-8 text-center">
              <Star className="w-12 h-12 text-analytics-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Constantly expanding expertise through hands-on projects, industry certifications, 
                and academic advancement in AI and sports analytics.
              </p>
              <Badge variant="secondary" className="bg-analytics-blue/10 text-analytics-blue border-analytics-blue/20">
                MSc AI Applied to Sports - Starting October 2025
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;