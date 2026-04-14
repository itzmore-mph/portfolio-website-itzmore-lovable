import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  SectionDecorSet1,
  SectionDecorSet2,
  SectionDecorSet3,
  SectionDecorSet4,
  SectionDecorSet5,
  SectionGradientDivider,
} from "@/components/ui/floating-background";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative" id="main-content">
        <section id="home" className="relative">
          <HeroSection />
        </section>

        <SectionGradientDivider variant="accent" />

        <section id="about" className="relative overflow-hidden">
          <SectionDecorSet1 />
          <AboutSection />
        </section>

        <SectionGradientDivider variant="default" />

        <section id="experience" className="relative overflow-hidden">
          <SectionDecorSet2 />
          <ExperienceSection />
        </section>

        <SectionGradientDivider variant="reverse" />

        <section id="skills" className="relative overflow-hidden">
          <SectionDecorSet3 />
          <SkillsSection />
        </section>

        <SectionGradientDivider variant="accent" />

        <section id="projects" className="relative overflow-hidden">
          <SectionDecorSet4 />
          <ProjectsSection />
        </section>

        <SectionGradientDivider variant="default" />

        <section id="contact" className="relative overflow-hidden">
          <SectionDecorSet5 />
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
