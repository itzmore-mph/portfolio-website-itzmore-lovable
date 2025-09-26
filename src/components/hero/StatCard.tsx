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
    duration: 2000
  });

  return (
    <div 
      ref={elementRef}
      className={cn(
        "bg-black/40 backdrop-blur-md border border-white/30 rounded-xl text-center shadow-lg",
        "transition-all duration-300 hover:bg-black/50 hover:scale-105 hover:shadow-xl",
        "p-4 sm:p-6 interactive-element will-change-transform",
        className
      )}
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
        {count}{suffix}
      </div>
      <div className="text-white text-sm sm:text-base font-medium drop-shadow-md">
        {label}
      </div>
    </div>
  );
};