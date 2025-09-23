import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp } from "lucide-react";

interface HeroContentProps {
  onProjectsClick: () => void;
}

export const HeroContent = ({ onProjectsClick }: HeroContentProps) => {
  return (
    <div className="text-left animate-fade-in">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 mb-4 sm:mb-6 text-xs sm:text-sm" role="banner">
        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
        <span className="text-white font-medium">Football Analytics</span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero text-white mb-4 sm:mb-6 leading-tight font-bold">
        <span className="block">Sports Data Scientist</span>
      </h1>
      
      <p className="text-sm sm:text-base lg:text-body text-white/90 mb-4 sm:mb-6 max-w-lg leading-relaxed">
        Reproducible Python/SQL (DuckDB) pipelines and Streamlit/Power BI tools for scouting, opponent & set-piece insights.
      </p>
      
      <p className="text-xs sm:text-sm text-white/70 mb-6 sm:mb-8 max-w-lg leading-relaxed">
        Currently: Senior Digital Data & Dashboard Manager, Publicis Media Austria.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Button 
          variant="white-on-dark" 
          size="lg"
          className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
          onClick={onProjectsClick}
        >
          View My Projects
          <TrendingUp className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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