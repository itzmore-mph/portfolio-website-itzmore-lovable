import { OptimizedImage } from "@/components/ui/optimized-image";
import { HeroContent } from "./hero/HeroContent";
import { ProfilePhoto } from "./hero/ProfilePhoto";
import { StatsGrid } from "./hero/StatsGrid";
import heroImage from "@/assets/stadium-hero-vertical.jpg";
import profilePhoto from "/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-[calc(env(safe-area-inset-top)+4rem)] lg:pt-0" role="banner" aria-label="Hero section introducing Moritz Philipp Haaf">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <OptimizedImage 
          src={heroImage} 
          alt="Realistic football stadium view showing pristine green pitch with proper field markings and stadium seating"
          className="w-full h-full object-cover object-center"
          priority={true}
          lazy={false}
          width={1920}
          height={1440}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pitch-green/90 via-pitch-green/70 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center min-h-dvh py-8 space-y-8 lg:hidden">
          {/* Profile Photo - Mobile */}
          <div className="flex-shrink-0">
            <ProfilePhoto 
              src={profilePhoto}
              alt="Moritz Philipp Haaf - Professional portrait of Sports Data Scientist specializing in football analytics"
            />
          </div>
          
          {/* Content - Mobile */}
          <div className="text-center max-w-lg mx-auto px-2">
            <HeroContent 
              onProjectsClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
          
          {/* Stats Grid - Mobile */}
          <div className="w-full max-w-md mx-auto px-2">
            <StatsGrid />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-dvh py-20">
          {/* Content - Desktop */}
          <div className="order-1">
            <HeroContent 
              onProjectsClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
          
          {/* Profile & Stats - Desktop */}
          <div className="space-y-6 animate-slide-up order-2">
            <ProfilePhoto 
              src={profilePhoto}
              alt="Moritz Philipp Haaf - Professional portrait of Sports Data Scientist specializing in football analytics"
            />
            <StatsGrid />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Better positioned for mobile */}
      <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/90 cursor-pointer group animate-pulse hover:animate-none transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <span className="text-sm mb-3 group-hover:text-white transition-colors duration-300 hidden sm:block font-medium">
            Scroll to explore
          </span>
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
            <ArrowDown className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;