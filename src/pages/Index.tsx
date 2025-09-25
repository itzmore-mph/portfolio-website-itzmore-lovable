import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-25 to-muted">
      <Navigation />
      <main className="relative" id="main-content">
        <section id="home" className="relative">
          <HeroSection />
        </section>
        <section id="about" className="relative">
          <AboutSection />
        </section>
        <section id="experience" className="relative">
          <ExperienceSection />
        </section>
        <section id="skills" className="relative">
          <SkillsSection />
        </section>
        <section id="projects" className="relative">
          <ProjectsSection />
        </section>
        <section id="contact" className="relative">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
