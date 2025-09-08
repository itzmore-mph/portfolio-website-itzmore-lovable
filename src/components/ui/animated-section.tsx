import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
}

const animationStyles = {
  fade: {
    initial: "opacity-0 translate-y-4",
    animate: "opacity-100 translate-y-0"
  },
  "slide-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0"
  },
  "slide-left": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0"
  },
  "slide-right": {
    initial: "opacity-0 -translate-x-8", 
    animate: "opacity-100 translate-x-0"
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100"
  }
};

export const AnimatedSection = ({ 
  children, 
  className,
  animation = "fade",
  delay = 0,
  duration = 600
}: AnimatedSectionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const styles = animationStyles[animation];

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all ease-out",
        isIntersecting ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};