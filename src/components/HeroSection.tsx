import { HeroContent } from "./hero/HeroContent";
import { ProfilePhoto } from "./hero/ProfilePhoto";
import { HeroDataMotif } from "./hero/HeroDataMotif";
import profilePhotoAsset from "@/assets/moritz-profile-hero.jpg.asset.json";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20" role="banner" aria-label="Hero section introducing Moritz Philipp Haaf, Football Data Scientist">
      {/* Abstract data-viz motif (pitch-control + passing network), replaces stadium photo */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <HeroDataMotif />
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/60" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center py-8 pb-12 space-y-8 md:hidden">
          {/* Profile Photo - Mobile */}
          <div className="flex-shrink-0">
            <ProfilePhoto 
              src={profilePhotoAsset.url}
              alt="Moritz Philipp Haaf, Football Data Scientist, professional portrait"
            />
          </div>
          
          {/* Content - Mobile */}
          <div className="text-center w-full max-w-lg mx-auto px-2">
            <HeroContent 
              onProjectsClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
          
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-20">
          {/* Content - Desktop */}
          <div className="order-1 min-w-0">
            <HeroContent 
              onProjectsClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
          
          {/* Profile & Stats - Desktop */}
          <div className="flex items-center justify-center animate-slide-up order-2 min-w-0">
            <ProfilePhoto 
              src={profilePhotoAsset.url}
              alt="Moritz Philipp Haaf, Football Data Scientist, professional portrait"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;