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

// Detect mobile / reduced-motion / coarse-pointer environments where the parallax
// math is unreliable (tall stacked sections, iOS scroll quirks). On those, we
// skip the effect entirely and render content fully visible.
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
  const [disabled, setDisabled] = useState<boolean>(() => shouldDisableParallax());
  const [state, setState] = useState<ParallaxState>({
    // If parallax is disabled (mobile / reduced motion), start fully visible
    // so content always renders even if scroll handlers never fire correctly.
    opacity: disabled || !fadeIn ? 1 : 0,
    translateY: disabled || !slideUp ? 0 : 60,
    scale: disabled || !scale ? 1 : 0.95,
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
    // Re-evaluate on resize in case viewport crosses the breakpoint.
    const updateDisabled = () => {
      const next = shouldDisableParallax();
      setDisabled((prev) => (prev !== next ? next : prev));
    };

    if (disabled) {
      // Ensure content is fully visible and skip all scroll work.
      setState({ opacity: 1, translateY: 0, scale: 1 });
      window.addEventListener("resize", updateDisabled, { passive: true });
      return () => window.removeEventListener("resize", updateDisabled);
    }

    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateParallax);
    };

    // Initial calculation
    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("resize", updateDisabled, { passive: true });

    // Safety net: if for any reason content stays hidden after mount,
    // force it visible after a short delay so users never see a blank section.
    const safety = window.setTimeout(() => {
      setState((s) => (s.opacity < 0.05 ? { opacity: 1, translateY: 0, scale: 1 } : s));
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("resize", updateDisabled);
      cancelAnimationFrame(rafId.current);
      window.clearTimeout(safety);
    };
  }, [updateParallax, disabled]);

  const style: React.CSSProperties = disabled
    ? { opacity: 1 }
    : {
        opacity: state.opacity,
        transform: `translateY(${state.translateY}px) scale(${state.scale})`,
        willChange: "transform, opacity",
        transition: "transform 0.1s linear, opacity 0.1s linear",
      };

  return { ref, style, progress: state.opacity };
};
