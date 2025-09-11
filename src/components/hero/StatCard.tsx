import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 rounded-lg border text-center",
      "transition-all duration-300 hover:bg-white/15 hover:scale-105",
      className
    )}>
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
        {value}
      </div>
      <div className="text-white/80 text-xs sm:text-sm">
        {label}
      </div>
    </div>
  );
};