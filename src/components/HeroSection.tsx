import { OptimizedImage } from "@/components/ui/optimized-image";
import { HeroContent } from "./hero/HeroContent";
import { ProfilePhoto } from "./hero/ProfilePhoto";
import { StatsGrid } from "./hero/StatsGrid";
import heroImage from "@/assets/stadium-hero-mobile-optimized.jpg";
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
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section introducing Moritz Philipp Haaf">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <OptimizedImage 
          src={heroImage} 
          alt="Realistic football stadium view showing pristine green pitch with proper field markings and stadium seating"
          className="w-full h-full object-cover object-center"
          priority={true}
          lazy={false}
          width={1536}
          height={1152}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pitch-green/90 via-pitch-green/70 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100dvh-8rem)] sm:min-h-[calc(100dvh-12rem)] lg:min-h-[calc(100dvh-20rem)]">
          {/* Content */}
          <div className="order-2 lg:order-1 px-2 sm:px-0">
            <HeroContent 
              onProjectsClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
          
          {/* Profile & Stats */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 animate-slide-up order-1 lg:order-2 px-2 sm:px-0">
            <ProfilePhoto 
              src={profilePhoto}
              alt="Moritz Philipp Haaf - Professional portrait of Sports Data Scientist specializing in football analytics"
            />
            <StatsGrid />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Improved mobile positioning */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/90 cursor-pointer group animate-pulse hover:animate-none transition-all duration-500 ease-out bg-black/20 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-black/30"
          aria-label="Scroll to next section"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 group-hover:text-white transition-all duration-300 group-hover:scale-105 hidden sm:block font-medium">
            Scroll to explore
          </span>
          <div className="relative">
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:text-white transition-all duration-500 ease-out group-hover:translate-y-1" />
            <div className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/10 scale-150 opacity-0 group-hover:opacity-30 group-hover:scale-200 transition-all duration-700 ease-out"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;