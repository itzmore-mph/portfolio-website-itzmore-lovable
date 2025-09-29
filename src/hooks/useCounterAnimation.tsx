import { useEffect, useState, useRef, useCallback } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCounterAnimation = ({ 
  end, 
  duration = 1800, 
  startOnView = true 
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationFrameRef = useRef<number>();
  
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1, // Lower threshold for mobile
    triggerOnce: true, // Only trigger once for better performance
    rootMargin: "20px" // Smaller margin for mobile
  });

  const startAnimation = useCallback(() => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    setCount(0);
    
    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Enhanced easing for mobile - more dramatic effect
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.round(startValue + (end - startValue) * easeOutExpo);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // Immediate start for better mobile experience
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [end, duration, hasAnimated]);

  useEffect(() => {
    if (isIntersecting && startOnView && !hasAnimated) {
      // Reduced delay for faster mobile response
      const timeout = setTimeout(startAnimation, 50);
      return () => clearTimeout(timeout);
    } else if (!startOnView && !hasAnimated) {
      startAnimation();
    }
  }, [isIntersecting, startOnView, hasAnimated, startAnimation]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return { count, elementRef };
};