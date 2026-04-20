import { useEffect, useRef, useState, useCallback } from "react";

interface ParallaxOptions {
  speed?: number; // 0-1, how much the element moves relative to scroll
  fadeIn?: boolean; // fade in as element enters viewport
  slideUp?: boolean; // slide up as element enters
  scale?: boolean; // subtle scale effect
  threshold?: number; // 0-1, when to start the animation
}

interface ParallaxState {
  opacity: number;
  translateY: number;
  scale: number;
}

export const useScrollParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.15,
    fadeIn = true,
    slideUp = true,
    scale = false,
    threshold = 0.05,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ParallaxState>({
    opacity: fadeIn ? 0 : 1,
    translateY: slideUp ? 60 : 0,
    scale: scale ? 0.95 : 1,
  });
  const hasAnimated = useRef(false);
  const rafId = useRef<number>(0);

  const updateParallax = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Progress based on element top entering viewport.
    // 0 = top is at bottom of viewport, 1 = top has moved up by 40% of viewport height.
    // Works for tall sections on mobile where center never reaches viewport middle.
    const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.4);
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    // Easing function for smoother animation
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

    if (progress > threshold) {
      hasAnimated.current = true;
    }

    const newOpacity = fadeIn ? Math.min(eased * 1.2, 1) : 1;
    const newTranslateY = slideUp ? (1 - eased) * 60 : -speed * (rect.top - windowHeight * 0.3) * 0.1;
    const newScale = scale ? 0.95 + eased * 0.05 : 1;

    setState({
      opacity: newOpacity,
      translateY: newTranslateY,
      scale: newScale,
    });
  }, [speed, fadeIn, slideUp, scale, threshold]);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateParallax);
    };

    // Initial calculation
    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateParallax]);

  const style: React.CSSProperties = {
    opacity: state.opacity,
    transform: `translateY(${state.translateY}px) scale(${state.scale})`,
    willChange: "transform, opacity",
    transition: "transform 0.1s linear, opacity 0.1s linear",
  };

  return { ref, style, progress: state.opacity };
};
