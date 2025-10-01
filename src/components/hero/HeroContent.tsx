import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

interface HeroContentProps {
  onProjectsClick: () => void;
}

export const HeroContent = ({ onProjectsClick }: HeroContentProps) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1sKlbdaqoneWQ_vm0x7HKHWyceHQYhEid';
    link.download = 'Moritz_Philipp_Haaf_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center lg:text-left space-y-8 lg:space-y-10 animate-fade-in">
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 text-sm text-primary font-semibold shadow-lg">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        Football Analytics
      </div>
      
      {/* Main Heading */}
      <div className="space-y-4 lg:space-y-6">
        <h1 className="font-semibold text-white leading-[0.95] tracking-tight" 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
          Sports Data
          <br />
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Scientist
          </span>
        </h1>
        
        {/* Desktop Tagline */}
        <h2 className="hidden md:block text-white/90 font-normal leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
          Turning football data into insight.<br>
          One byte at a time.
        </h2>
        
        {/* Subline - Desktop */}
        <p className="hidden md:block text-white/80 font-normal leading-relaxed max-w-2xl" 
           style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)' }}>
          Transforming complex football data into clear, actionable insights for scouting, opponent analysis, and set-pieces.
        </p>
        
        {/* Subline - Mobile (shorter) */}
        <p className="md:hidden text-white/80 font-normal leading-relaxed" 
           style={{ fontSize: 'clamp(0.875rem, 3vw, 1rem)' }}>
          Actionable scouting, opponent & set-piece insights from football data.
        </p>
        
        {/* Role Meta Box */}
        <div className="inline-flex items-start text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-md">
          <p className="text-white/85 font-medium leading-snug" 
             style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>
            <span className="text-primary font-semibold">Currently:</span> Senior Digital Data & Dashboard Manager, Publicis Media Austria.
          </p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 lg:pt-4">
        <Button 
          onClick={onProjectsClick}
          size="lg" 
          className="bg-primary hover:bg-primary-hover text-white hover:scale-[1.03] transition-all duration-200 shadow-lg hover:shadow-glow px-8 py-3 rounded-xl font-semibold group h-auto"
          style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}
        >
          <span className="flex items-center">
            View My Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </Button>
        
        <Button 
          onClick={handleDownloadCV}
          variant="outline-light" 
          size="lg"
          className="hover:scale-[1.03] transition-all duration-200 px-8 py-3 rounded-xl font-semibold group h-auto"
          style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}
        >
          <span className="flex items-center">
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            Download CV
          </span>
        </Button>
      </div>
    </div>
  );
};
