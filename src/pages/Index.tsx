import Navigation from "@/components/Navigation";
import HeroSection from "@/components/modern/HeroSection";
import AboutSection from "@/components/modern/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/modern/SkillsSection";
import ProjectsSection from "@/components/modern/ProjectsSection";
import ContactSection from "@/components/modern/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative" id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
