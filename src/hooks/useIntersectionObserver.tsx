import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Safari compatibility check
const isSafari = () => {
  if (typeof window === "undefined") return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Safari fallback - immediately show content
    if (isSafari() && !('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      setHasIntersected(true);
      return;
    }

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const isCurrentlyIntersecting = entry.isIntersecting;
          setIsIntersecting(isCurrentlyIntersecting);
          
          if (isCurrentlyIntersecting && !hasIntersected) {
            setHasIntersected(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);

      return () => {
        if (observer && element) {
          observer.unobserve(element);
        }
      };
    } catch (error) {
      console.warn('IntersectionObserver failed, showing content immediately:', error);
      setIsIntersecting(true);
      setHasIntersected(true);
    }
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return {
    elementRef,
    isIntersecting: triggerOnce ? hasIntersected : isIntersecting,
    hasIntersected
  };
};