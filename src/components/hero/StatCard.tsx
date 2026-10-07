import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  // Uniform font size across all cards so text values stay consistent and fit at 320px.
  const valueFontSize = 'clamp(0.9rem, 2.5vw, 1.4rem)';

  return (
    <div
      className={cn(
        "bg-black/30 border border-primary/20 rounded-2xl text-center shadow-lg relative overflow-hidden group",
        "transition-all duration-300 hover:border-primary/40 hover:scale-[1.02]",
        "p-5 sm:p-6 lg:p-8 interactive-element will-change-transform",
        "active:scale-[1.01] touch-manipulation",
        className
      )}
    >
      <div className="relative z-10">
        <div
          className="font-mono font-semibold text-primary mb-2 sm:mb-3 tracking-tight leading-none whitespace-nowrap"
          style={{ fontSize: valueFontSize }}
        >
          {value}
        </div>
        <div
          className="text-white/85 font-medium tracking-wide group-hover:text-white transition-colors duration-300"
          style={{ fontSize: 'clamp(0.75rem, 1.6vw, 0.95rem)' }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};
