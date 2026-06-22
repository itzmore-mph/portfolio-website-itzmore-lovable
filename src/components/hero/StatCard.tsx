import { cn } from "@/lib/utils";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  // Only animate clean numeric values like "5+", "700" or "700M+". Otherwise show as-is.
  const isAnimatable = /^\d+\+?$/.test(value);
  const numericValue = isAnimatable ? parseInt(value, 10) : 0;
  const suffix = isAnimatable ? value.replace(/\d/g, '') : '';

  const { count, elementRef } = useCounterAnimation({
    end: numericValue,
    duration: 1500,
  });

  // Auto-scale font for longer values so non-numeric labels stay legible.
  const valueLen = value.length;
  const valueFontSize =
    valueLen <= 5
      ? 'clamp(2.25rem, 7vw, 4rem)'
      : valueLen <= 9
        ? 'clamp(1.5rem, 4.5vw, 2.5rem)'
        : 'clamp(1.125rem, 3.5vw, 1.875rem)';

  return (
    <div
      ref={elementRef}
      className={cn(
        "bg-gradient-to-br from-black/40 via-black/50 to-black/60 backdrop-blur-xl border border-primary/20 rounded-2xl text-center shadow-2xl relative overflow-hidden group",
        "transition-all duration-500 hover:from-black/50 hover:via-black/60 hover:to-black/70 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:border-primary/40",
        "p-5 sm:p-6 lg:p-8 interactive-element will-change-transform",
        "active:scale-[1.02] touch-manipulation",
        className
      )}
    >
      <div className="relative z-10">
        <div
          className="font-mono font-semibold text-white mb-2 sm:mb-3 tracking-tight leading-none"
          style={{ fontSize: valueFontSize }}
        >
          <span className="bg-gradient-to-br from-primary via-primary-light to-white bg-clip-text text-transparent drop-shadow-2xl">
            {isAnimatable ? `${count}${suffix}` : value}
          </span>
        </div>
        <div
          className="text-white/85 font-medium tracking-wide drop-shadow-lg group-hover:text-white transition-colors duration-300"
          style={{ fontSize: 'clamp(0.75rem, 1.6vw, 0.95rem)' }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};