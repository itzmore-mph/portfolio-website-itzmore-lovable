import { Button } from "@/components/ui/button";
import { ArrowRight, Download, GraduationCap, Trophy } from "lucide-react";
import cvAsset from "@/assets/CV_Moritz-Philipp-Haaf.pdf.asset.json";

interface HeroContentProps {
  onProjectsClick: () => void;
}

export const HeroContent = ({ onProjectsClick }: HeroContentProps) => {
  const handleDownloadCV = () => {
    window.open(cvAsset.url, '_blank');
  };

  return (
    <div className="text-center lg:text-left space-y-8 lg:space-y-10 animate-fade-in">
      {/* Availability */}
      <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-xs sm:text-sm text-white/85 font-medium">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true" />
          Open to Football Data Science roles at clubs (EU)
        </div>
      </div>
      
      {/* Main Heading */}
      <div className="space-y-4 lg:space-y-6">
        <h1 className="font-semibold text-white leading-[0.95] tracking-tight" 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
          <span className="block font-semibold text-white tracking-tight mb-4 sm:mb-6"
                style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.875rem)', lineHeight: 1.2 }}>
            Moritz Philipp Haaf
          </span>
          Football Data
          <br />
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Scientist
          </span>
        </h1>
        
        {/* Desktop Tagline */}
        <div className="hidden md:block space-y-1">
          <h2 className="text-white/90 font-normal leading-tight"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
            From broadcast video to pitch control.
          </h2>
        </div>
        
        {/* Subline - Desktop */}
        <p className="hidden md:block text-white/80 font-normal leading-relaxed max-w-2xl" 
           style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)' }}>
          I build computer-vision and tracking-data pipelines that turn match footage into player positions and spatial metrics, validated against ground truth, for recruitment and match analysis where optical tracking isn't available.
        </p>
        
        {/* Subline - Mobile (shorter) */}
        <p className="md:hidden text-white/80 font-normal leading-relaxed" 
           style={{ fontSize: 'clamp(0.875rem, 3vw, 1rem)' }}>
          Broadcast video to player positions and pitch control, validated against ground truth.
        </p>
        
        {/* Proof strip: two credentials, aligned to the text column */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-3 sm:px-4 shadow-md">
          <ul className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-left">
            <li className="flex items-center gap-2 sm:gap-2.5 text-white/85 font-medium leading-snug"
                style={{ fontSize: 'clamp(0.79rem, 1vw, 1rem)' }}>
              <Trophy className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              <span className="text-balance">Finalist, AWS World Sports Innovation Cup 2026</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-2.5 text-white/85 font-medium leading-snug"
                style={{ fontSize: 'clamp(0.79rem, 1vw, 1rem)' }}>
              <GraduationCap className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              <span className="text-balance">MSc AI Applied to Sports</span>
            </li>
          </ul>
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
