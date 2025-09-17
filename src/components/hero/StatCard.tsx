import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  className?: string;
}

export const StatCard = ({ value, suffix = "", label, delay = 0, className }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const startTime = Date.now();
        const startValue = 0;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart);
          
          setCount(currentValue);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        animate();
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, value, delay]);

  return (
    <div 
      ref={elementRef}
      className={cn(
        "bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 rounded-lg border text-center",
        "transition-all duration-300 hover:bg-white/15 hover:scale-105",
        className
      )}
    >
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/80 text-xs sm:text-sm">
        {label}
      </div>
    </div>
  );
};