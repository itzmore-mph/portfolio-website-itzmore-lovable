import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, MapPin, Calendar, Trophy } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import profilePhoto from "/lovable-uploads/0b867816-0a39-456f-9866-a42d58f5ccc5.png";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-analytics-navy via-analytics-navy/95 to-analytics-navy/90">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8 text-white order-2 lg:order-1">
              
              {/* Badge */}
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Trophy className="w-4 h-4 mr-2" />
                Football Analytics Expert
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Moritz Philipp
                  <span className="block bg-gradient-to-r from-analytics-blue via-analytics-green to-analytics-orange bg-clip-text text-transparent">
                    Haaf
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 font-light">
                  Sports Data Scientist & Football Analytics Specialist
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Transforming football data into winning strategies. Combining corporate analytics expertise 
                with advanced statistical modeling to unlock performance insights for the beautiful game.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4" />
                  Austria
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar className="w-4 h-4" />
                  5+ Years Experience
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Trophy className="w-4 h-4" />
                  50+ Matches Analyzed
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-analytics-blue hover:bg-analytics-blue/90 text-white rounded-lg font-semibold"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Analytics Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Profile Image & Stats */}
            <div className="space-y-8 order-1 lg:order-2">
              
              {/* Profile Photo */}
              <div className="relative mx-auto w-fit">
                <div className="relative">
                  <OptimizedImage 
                    src={profilePhoto}
                    alt="Moritz Philipp Haaf - Professional portrait of Sports Data Scientist"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-4 border-white/20"
                    width={384}
                    height={384}
                    priority={true}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-analytics-navy/20 to-transparent" />
                </div>
              </div>

              {/* Key Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-analytics-blue mb-2">15+</div>
                  <div className="text-sm text-white/80">Projects Created</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-analytics-green mb-2">10+</div>
                  <div className="text-sm text-white/80">Tools Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors group"
          aria-label="Scroll to next section"
        >
          <span className="text-sm mb-2 group-hover:mb-3 transition-all">Explore More</span>
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/20 transition-all border border-white/20 animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;