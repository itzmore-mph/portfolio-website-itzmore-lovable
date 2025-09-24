import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp } from "lucide-react";

interface HeroContentProps {
  onProjectsClick: () => void;
}

export const HeroContent = ({ onProjectsClick }: HeroContentProps) => {
  return (
    <div className="text-left animate-fade-in">
      <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 mb-4 sm:mb-6 text-xs sm:text-sm border border-white/50 shadow-lg" role="banner">
        <BarChart3 className="icon-sm text-white drop-shadow-sm" aria-hidden="true" />
        <span className="text-white font-semibold drop-shadow-sm">Football Analytics</span>
      </div>
      
      <h1 className="text-hero text-white mb-4 sm:mb-6 font-bold drop-shadow-lg">
        <span className="block">Sports Data Scientist</span>
      </h1>
      
      <p className="text-body text-white mb-4 sm:mb-6 max-w-lg leading-relaxed drop-shadow-md font-medium">
        Reproducible Python/SQL (DuckDB) pipelines and Streamlit/Power BI tools for scouting, opponent & set-piece insights.
      </p>
      
      <p className="text-caption text-white/95 mb-6 sm:mb-8 max-w-lg leading-relaxed drop-shadow-sm font-medium">
        Currently: Senior Digital Data & Dashboard Manager, Publicis Media Austria.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Button 
          variant="secondary-solid" 
          size="lg"
          className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
          onClick={onProjectsClick}
        >
          View My Projects
          <TrendingUp className="ml-2 icon-sm" />
        </Button>
        
        <Button 
          variant="outline-light" 
          size="lg"
          className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
          asChild
        >
          <a 
            href="https://drive.google.com/uc?export=download&id=1sKlbdaqoneWQ_vm0x7HKHWyceHQYhEid"
            download="Moritz_Philipp_Haaf_CV.pdf"
            aria-label="Download Moritz Philipp Haaf's CV as PDF"
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};