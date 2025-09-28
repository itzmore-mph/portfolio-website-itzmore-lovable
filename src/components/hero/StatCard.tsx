import { cn } from "@/lib/utils";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  // Extract numeric value for animation
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/\d/g, '');
  
  const { count, elementRef } = useCounterAnimation({ 
    end: numericValue,
    duration: 1800
  });

  return (
    <div 
      ref={elementRef}
      className={cn(
        "bg-gradient-to-br from-black/30 via-black/40 to-black/50 backdrop-blur-xl border border-white/25 rounded-3xl text-center shadow-2xl relative overflow-hidden group",
        "transition-all duration-500 hover:from-black/40 hover:via-black/50 hover:to-black/60 hover:scale-[1.08] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-white/40",
        "p-6 sm:p-8 interactive-element will-change-transform",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-400/10 before:to-purple-400/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
    >
      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 drop-shadow-2xl bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500">
          {count}{suffix}
        </div>
        <div className="text-white/90 text-sm sm:text-base lg:text-lg font-semibold drop-shadow-lg group-hover:text-white transition-colors duration-300">
          {label}
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
    </div>
  );
};