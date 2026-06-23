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

  // Auto-scale font so the longest values (e.g. "Finalist") still fit the card.
  const valueLen = value.length;
  const valueFontSize =
    valueLen <= 4
      ? 'clamp(1.75rem, 5vw, 2.75rem)'
      : valueLen <= 8
        ? 'clamp(1.25rem, 3.2vw, 1.85rem)'
        : 'clamp(1rem, 2.4vw, 1.4rem)';

  return (
    <div
      ref={elementRef}
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
          className="font-mono font-semibold text-primary mb-2 sm:mb-3 tracking-tight leading-none max-w-full px-1 truncate"
          style={{ fontSize: valueFontSize }}
        >
          {isAnimatable ? `${count}${suffix}` : value}
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