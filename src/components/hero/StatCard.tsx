import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white/15 backdrop-blur-md border border-white/25 rounded-xl text-center",
      "transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg",
      "p-4 sm:p-6 interactive-element will-change-transform",
      className
    )}>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
        {value}
      </div>
      <div className="text-white/90 text-sm sm:text-base font-medium">
        {label}
      </div>
    </div>
  );
};