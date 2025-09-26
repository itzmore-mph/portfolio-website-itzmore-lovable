import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";

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
    <div className="text-center lg:text-left space-y-10 animate-fade-in">
      {/* Enhanced Badge */}
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/25 rounded-full px-6 py-3 text-sm text-white font-semibold shadow-xl">
        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Football Analytics Expert
      </div>
      
      {/* Enhanced Main Heading */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight">
          Sports Data
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse bg-[length:200%_100%]">
            Scientist
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-2xl leading-relaxed font-medium">
          Reproducible Python/SQL (DuckDB) pipelines and Streamlit/Power BI tools for scouting, 
          opponent & set-piece insights.
        </p>
        
        <p className="text-base sm:text-lg text-white/85 font-medium bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 inline-block">
          Currently: Senior Digital Data & Dashboard Manager, Publicis Media Austria.
        </p>
      </div>
      
      {/* Enhanced Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
        <Button 
          onClick={onProjectsClick}
          size="lg" 
          className="bg-gradient-to-r from-white via-white/95 to-white text-black hover:from-white/90 hover:to-white/85 hover:scale-[1.05] transition-all duration-500 shadow-2xl px-10 py-4 rounded-2xl font-bold group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative flex items-center">
            View My Projects
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </Button>
        
        <Button 
          onClick={handleDownloadCV}
          variant="outline" 
          size="lg"
          className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 hover:scale-[1.05] transition-all duration-500 px-10 py-4 rounded-2xl font-bold backdrop-blur-xl shadow-xl group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative flex items-center">
            <Download className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            Download CV
          </span>
        </Button>
      </div>
    </div>
  );
};