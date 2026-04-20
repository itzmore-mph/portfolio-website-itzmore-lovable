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

const shouldDisableParallax = () => {
  if (typeof window === "undefined") return false;
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return isSmallScreen || prefersReduced;
};

export const useScrollParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.15,
    fadeIn = true,
    slideUp = true,
    scale = false,
    threshold = 0.05,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ParallaxState>(() => {
    const disabled = shouldDisableParallax();
    return {
      opacity: disabled || !fadeIn ? 1 : 0,
      translateY: disabled || !slideUp ? 0 : 60,
      scale: disabled || !scale ? 1 : 0.95,
    };
  });
  const rafId = useRef<number>(0);

  const updateParallax = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    if (shouldDisableParallax()) {
      setState((current) =>
        current.opacity === 1 && current.translateY === 0 && current.scale === 1
          ? current
          : { opacity: 1, translateY: 0, scale: 1 }
      );
      return;
    }

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.4);
    const progress = Math.min(Math.max(rawProgress, 0), 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    const nextState = {
      opacity: fadeIn ? Math.min(eased * 1.2, 1) : 1,
      translateY: slideUp ? (1 - eased) * 60 : -speed * (rect.top - windowHeight * 0.3) * 0.1,
      scale: scale ? 0.95 + eased * 0.05 : 1,
    };

    setState((current) =>
      current.opacity === nextState.opacity &&
      current.translateY === nextState.translateY &&
      current.scale === nextState.scale
        ? current
        : nextState
    );
  }, [speed, fadeIn, slideUp, scale]);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    const safety = window.setTimeout(() => {
      setState((current) =>
        current.opacity < threshold ? { opacity: 1, translateY: 0, scale: 1 } : current
      );
    }, 1200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId.current);
      window.clearTimeout(safety);
    };
  }, [threshold, updateParallax]);

  const disabled = shouldDisableParallax();
  const style: React.CSSProperties = disabled
    ? { opacity: 1, transform: "none" }
    : {
        opacity: state.opacity,
        transform: `translateY(${state.translateY}px) scale(${state.scale})`,
        willChange: "transform, opacity",
        transition: "transform 0.1s linear, opacity 0.1s linear",
      };

  return { ref, style, progress: state.opacity };
};
