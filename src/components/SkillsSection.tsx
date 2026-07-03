import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories, keyStrengths } from "@/data/skills";
import { ParallaxSection } from "@/components/ui/parallax-section";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ParallaxSection fadeIn slideUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
              A data science toolkit built for football analytics, from statistical modeling and performance analysis to AI-driven insights,
              shaped by hands-on sports data projects and an ongoing MSc in AI Applied to Sports.
            </p>
          </div>
        </ParallaxSection>

        {/* Skills Categories */}
        <ParallaxSection fadeIn slideUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="animate-slide-up hover:shadow-lg transition-all duration-200 border-border/50 bg-card"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-muted/50 border border-border px-4 py-1.5 text-sm text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ParallaxSection>

        {/* Key Strengths */}
        <ParallaxSection fadeIn slideUp scale>
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
        </ParallaxSection>
      </div>
    </section>
  );
};

export default SkillsSection;
