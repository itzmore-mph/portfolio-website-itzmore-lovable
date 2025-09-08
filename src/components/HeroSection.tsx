import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-analytics.jpg";
import profilePhoto from "/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png";
import { ArrowDown, BarChart3, TrendingUp } from "lucide-react";

const HeroSection = () => {
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Data Analyst • Football Analytics</span>
            </div>
            
            <h1 className="text-hero text-white mb-6 leading-tight">
              Hello, I'm <span className="block text-data-blue">Moritz Philipp Haaf</span>
            </h1>
            
            <p className="text-body text-white/90 mb-8 max-w-lg">
              Data Analyst with strong Data Science expertise, experienced in transforming complex datasets into actionable insights. Currently leading international dashboard and automation projects at Publicis Media Austria while developing cutting-edge football analytics solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-pitch-green hover:bg-white/90 font-semibold"
              >
                View My Projects
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Profile Photo & Stats Cards */}
          <div className="space-y-6 animate-slide-up">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Moritz Philipp Haaf - Data Analyst" 
                  className="w-48 h-48 rounded-full border-4 border-white/30 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-data-blue/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-white/80 text-sm">Matches Analyzed</div>
              </div>
              
              <div className="stat-card bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;