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
    threshold: 0.2,
    triggerOnce: false,
    rootMargin: "50px"
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
      
      // Smooth easing function (ease-out-cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(startValue + (end - startValue) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [end, duration, hasAnimated]);

  useEffect(() => {
    if (isIntersecting && startOnView && !hasAnimated) {
      // Small delay to ensure smooth start
      const timeout = setTimeout(startAnimation, 100);
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