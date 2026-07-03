import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import {
  SectionDecorSet1,
  SectionDecorSet2,
  SectionDecorSet3,
  SectionDecorSet4,
  SectionDecorSet5,
} from "@/components/ui/floating-background";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative" id="main-content">
        <section id="home" className="relative">
          <HeroSection />
        </section>

        <TrustStrip />



        {/* Unified continuous surface for all content sections */}
        <div className="relative bg-background">
          {/* Global ambient gradient layer spanning all sections */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 60% 30% at 80% 10%, hsl(var(--primary) / 0.06), transparent 70%),
                radial-gradient(ellipse 70% 35% at 10% 40%, hsl(var(--primary) / 0.04), transparent 70%),
                radial-gradient(ellipse 60% 30% at 90% 70%, hsl(var(--primary) / 0.05), transparent 70%),
                radial-gradient(ellipse 70% 35% at 20% 95%, hsl(var(--primary) / 0.04), transparent 70%)
              `,
            }}
          />

          <div className="relative z-10 overflow-hidden">
            <section id="about" className="relative">
              <div className="hidden md:block" aria-hidden="true">
                <SectionDecorSet1 />
              </div>
              <AboutSection />
            </section>

            <section id="projects" className="relative">
              <div className="hidden md:block" aria-hidden="true">
                <SectionDecorSet2 />
              </div>
              <ProjectsSection />
            </section>

            <section id="experience" className="relative">
              <div className="hidden md:block" aria-hidden="true">
                <SectionDecorSet3 />
              </div>
              <ExperienceSection />
            </section>

            <section id="skills" className="relative">
              <div className="hidden md:block" aria-hidden="true">
                <SectionDecorSet4 />
              </div>
              <SkillsSection />
            </section>

            <section id="contact" className="relative">
              <div className="hidden md:block" aria-hidden="true">
                <SectionDecorSet5 />
              </div>
              <ContactSection />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
