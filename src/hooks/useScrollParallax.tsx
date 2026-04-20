import { useEffect, useRef, useState, useCallback } from "react";

interface ParallaxOptions {
  speed?: number;
  fadeIn?: boolean;
  slideUp?: boolean;
  scale?: boolean;
  threshold?: number;
}

interface ParallaxState {
  opacity: number;
  translateY: number;
  scale: number;
}

const VISIBLE: ParallaxState = { opacity: 1, translateY: 0, scale: 1 };

const shouldDisableParallax = () => {
  if (typeof window === "undefined") return true;
  try {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return isSmallScreen || prefersReduced;
  } catch {
    return true;
  }
};

export const useScrollParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.15,
    fadeIn = true,
    slideUp = true,
    scale = false,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  // Safe static initial state — no window access during render to avoid HMR hook-queue mismatches.
  const [state, setState] = useState<ParallaxState>(VISIBLE);
  const [enabled, setEnabled] = useState(false);
  const rafId = useRef<number>(0);

  const updateParallax = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.4);
    const progress = Math.min(Math.max(rawProgress, 0), 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    const next: ParallaxState = {
      opacity: fadeIn ? Math.min(eased * 1.2, 1) : 1,
      translateY: slideUp ? (1 - eased) * 60 : -speed * (rect.top - windowHeight * 0.3) * 0.1,
      scale: scale ? 0.95 + eased * 0.05 : 1,
    };

    setState((current) =>
      current.opacity === next.opacity &&
      current.translateY === next.translateY &&
      current.scale === next.scale
        ? current
        : next
    );
  }, [speed, fadeIn, slideUp, scale]);

  useEffect(() => {
    // Detect disabled state only on the client, after mount.
    const disabled = shouldDisableParallax();
    if (disabled) {
      setEnabled(false);
      setState(VISIBLE);
      return;
    }

    setEnabled(true);

    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Safety: ensure content becomes visible even if scroll math stalls.
    const safety = window.setTimeout(() => {
      setState((current) => (current.opacity < 0.95 ? VISIBLE : current));
    }, 1200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId.current);
      window.clearTimeout(safety);
    };
  }, [updateParallax]);

  const style: React.CSSProperties = !enabled
    ? { opacity: 1, transform: "none" }
    : {
        opacity: state.opacity,
        transform: `translateY(${state.translateY}px) scale(${state.scale})`,
        willChange: "transform, opacity",
        transition: "transform 0.1s linear, opacity 0.1s linear",
      };

  return { ref, style, progress: state.opacity };
};
