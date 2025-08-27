import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, Brain, Code, Trophy, Target } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      skills: ["Python", "R", "SQL", "Tableau", "Power BI", "Excel", "Pandas", "NumPy"],
      description: "Advanced statistical analysis and compelling data visualization"
    },
    {
      icon: Database,
      title: "Football Analytics Tools",
      skills: ["StatsBomb", "Opta", "Wyscout", "InStat", "ChyronHego", "SportsCode"],
      description: "Professional football data platforms and analysis software"
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["Scikit-learn", "TensorFlow", "Predictive Modeling", "Classification", "Clustering"],
      description: "Advanced algorithms for performance prediction and pattern recognition"
    },
    {
      icon: Code,
      title: "Programming & Development",
      skills: ["Python", "R", "JavaScript", "Git", "APIs", "Web Scraping"],
      description: "Full-stack development for custom analytics solutions"
    },
    {
      icon: Trophy,
      title: "Sports Expertise",
      skills: ["Tactical Analysis", "Performance Metrics", "Scout Reports", "Match Analysis"],
      description: "Deep understanding of football tactics and performance evaluation"
    },
    {
      icon: Target,
      title: "Business Intelligence",
      skills: ["KPI Development", "Dashboard Design", "Reporting", "Strategy Consulting"],
      description: "Translating data insights into actionable business strategies"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-4">Technical Expertise</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set covering all aspects of football analytics, from data collection 
            to strategic insights and performance optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="portfolio-card animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-title">{category.title}</CardTitle>
                </div>
                <p className="text-caption text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="skill-badge hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-data-blue to-analytics-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-muted-foreground">
              Complex statistical modeling and predictive analytics for performance optimization
            </p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-pitch-green to-pitch-green-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategic Insights</h3>
            <p className="text-muted-foreground">
              Translating complex data into actionable tactical and strategic recommendations
            </p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-data-orange to-destructive rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Focus</h3>
            <p className="text-muted-foreground">
              Dedicated to improving team and individual player performance through data-driven insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;