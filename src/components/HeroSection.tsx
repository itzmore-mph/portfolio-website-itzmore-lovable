import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-analytics.jpg";
import profilePhoto from "/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png";
import { ArrowDown, BarChart3, TrendingUp } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Football analytics stadium view with data visualizations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pitch-green/90 via-pitch-green/70 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 mb-4 sm:mb-6 text-xs sm:text-sm">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-white font-medium">Data Analyst • Football Analytics</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero text-white mb-4 sm:mb-6 leading-tight font-bold">
              <span className="block">Hello, I'm</span>
              <span className="block text-data-blue">Moritz Philipp Haaf</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-body text-white/90 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Data Analyst with strong Data Science expertise, experienced in transforming complex datasets into actionable insights. Currently leading international dashboard and automation projects at Publicis Media Austria while developing cutting-edge football analytics solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-pitch-green hover:bg-white/90 font-semibold w-full sm:w-auto"
              >
                View My Projects
                <TrendingUp className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1sKlbdaqoneWQ_vm0x7HKHWyceHQYhEid"
                  download="Moritz_Philipp_Haaf_CV.pdf"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Photo & Stats Cards */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up order-1 lg:order-2">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Moritz Philipp Haaf - Data Analyst" 
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white/30 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-data-blue/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto">
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 rounded-lg border text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">5+</div>
                <div className="text-white/80 text-xs sm:text-sm">Years Experience</div>
              </div>
              
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 rounded-lg border text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">25+</div>
                <div className="text-white/80 text-xs sm:text-sm">Projects Completed</div>
              </div>
              
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 rounded-lg border text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">150+</div>
                <div className="text-white/80 text-xs sm:text-sm">Matches Analyzed</div>
              </div>
              
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 rounded-lg border text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">100%</div>
                <div className="text-white/80 text-xs sm:text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/80 cursor-pointer group animate-pulse hover:animate-none transition-all duration-500 ease-out"
          aria-label="Scroll to next section"
        >
          <span className="text-sm mb-3 group-hover:text-white transition-all duration-300 group-hover:scale-105">
            Scroll to explore
          </span>
          <div className="relative">
            <ArrowDown className="w-6 h-6 group-hover:scale-110 group-hover:text-white transition-all duration-500 ease-out group-hover:translate-y-1" />
            <div className="absolute inset-0 w-6 h-6 rounded-full bg-white/10 scale-150 opacity-0 group-hover:opacity-30 group-hover:scale-200 transition-all duration-700 ease-out"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;