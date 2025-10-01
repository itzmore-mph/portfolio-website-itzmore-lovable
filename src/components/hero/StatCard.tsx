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
    duration: 1500 // Slightly faster for mobile
  });

  return (
    <div 
      ref={elementRef}
      className={cn(
        "bg-gradient-to-br from-black/40 via-black/50 to-black/60 backdrop-blur-xl border border-primary/20 rounded-2xl text-center shadow-2xl relative overflow-hidden group",
        "transition-all duration-500 hover:from-black/50 hover:via-black/60 hover:to-black/70 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:border-primary/40",
        "p-6 sm:p-8 lg:p-10 interactive-element will-change-transform",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-primary-light/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        "active:scale-[1.02] touch-manipulation",
        className
      )}
    >
      <div className="relative z-10">
        <div className="font-black text-white mb-2 sm:mb-3 lg:mb-4 tracking-tight leading-none" 
             style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
          <span className="bg-gradient-to-br from-primary via-primary-light to-white bg-clip-text text-transparent drop-shadow-2xl group-hover:from-primary-light group-hover:to-primary transition-all duration-500">
            {count}{suffix}
          </span>
        </div>
        <div className="text-white/90 font-bold tracking-wide drop-shadow-lg group-hover:text-white transition-colors duration-300" 
             style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
          {label}
        </div>
      </div>
      
      {/* Subtle emerald glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </div>
  );
};