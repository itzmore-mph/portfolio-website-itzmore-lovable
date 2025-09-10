// Safari WebKit Feature Flag Compatibility Utils
export const safariCompat = {
  // Detect Safari and WebKit versions
  isSafari: () => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent;
    return /Safari/.test(ua) && !/Chrome|Chromium|Edge/.test(ua);
  },

  isSafariMobile: () => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(ua) && /Safari/i.test(ua);
  },

  // Check for problematic WebKit feature flag combinations
  hasProblematicFlags: () => {
    if (typeof window === "undefined") return false;
    
    // Test for common WebKit flag issues
    const tests = {
      intersectionObserver: 'IntersectionObserver' in window,
      cssNesting: CSS.supports && CSS.supports('selector(:is(a))'),
      cssOverscroll: CSS.supports && CSS.supports('overscroll-behavior: contain'),
      cssMotionPath: CSS.supports && CSS.supports('motion-path: path("M 0 0")'),
      requestAnimationFrame: 'requestAnimationFrame' in window
    };

    // If any critical feature is missing, return true
    return !tests.intersectionObserver || !tests.requestAnimationFrame;
  },

  // Force immediate visibility for problematic configurations
  shouldSkipAnimations: () => {
    return safariCompat.isSafari() && (
      safariCompat.hasProblematicFlags() ||
      // Additional heuristics for problematic configurations
      window.devicePixelRatio > 2.5 || // High DPI displays often have flag issues
      navigator.hardwareConcurrency < 4 // Lower performance devices
    );
  },

  // Enhanced animation detection
  supportsAnimations: () => {
    if (typeof window === "undefined") return false;
    
    try {
      // Test CSS animations
      const testEl = document.createElement('div');
      testEl.style.animation = 'none';
      const hasAnimationProperty = testEl.style.animation === 'none';
      
      // Test CSS transitions
      testEl.style.transition = 'all 0.1s';
      const hasTransitionProperty = testEl.style.transition.includes('0.1s');
      
      return hasAnimationProperty && hasTransitionProperty && 'requestAnimationFrame' in window;
    } catch {
      return false;
    }
  },

  // WebKit flag compatibility wrapper for animations
  safeAnimate: (element: HTMLElement, styles: Record<string, string>, duration: number = 300) => {
    if (!element) return;

    if (safariCompat.shouldSkipAnimations()) {
      // Apply styles immediately
      Object.assign(element.style, styles);
      return;
    }

    try {
      // Use Web Animations API if available
      if ('animate' in element && typeof element.animate === 'function') {
        element.animate([styles], {
          duration,
          fill: 'forwards',
          easing: 'ease-out'
        });
      } else {
        // Fallback to CSS transitions
        element.style.transition = `all ${duration}ms ease-out`;
        Object.assign(element.style, styles);
      }
    } catch {
      // Ultimate fallback - apply immediately
      Object.assign(element.style, styles);
    }
  },

  // Enhanced intersection observer wrapper
  createSafeObserver: (
    callback: (entries: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit
  ) => {
    if (safariCompat.shouldSkipAnimations()) {
      // Return a mock observer that immediately triggers
      return {
        observe: (element: Element) => {
          setTimeout(() => {
            callback([{
              isIntersecting: true,
              intersectionRatio: 1,
              target: element,
              boundingClientRect: element.getBoundingClientRect(),
              rootBounds: null,
              intersectionRect: element.getBoundingClientRect(),
              time: Date.now()
            } as IntersectionObserverEntry]);
          }, 16);
        },
        unobserve: () => {},
        disconnect: () => {}
      };
    }

    try {
      return new IntersectionObserver(callback, options);
    } catch {
      // Fallback mock observer
      return {
        observe: (element: Element) => {
          setTimeout(() => {
            callback([{
              isIntersecting: true,
              intersectionRatio: 1,
              target: element,
              boundingClientRect: element.getBoundingClientRect(),
              rootBounds: null,
              intersectionRect: element.getBoundingClientRect(),
              time: Date.now()
            } as IntersectionObserverEntry]);
          }, 100);
        },
        unobserve: () => {},
        disconnect: () => {}
      };
    }
  },

  // CSS feature detection and fallbacks
  applySafeCss: (element: HTMLElement, property: string, value: string, fallback?: string) => {
    if (!element) return;

    try {
      if (CSS.supports && CSS.supports(property, value)) {
        element.style.setProperty(property, value);
      } else if (fallback) {
        element.style.setProperty(property, fallback);
      }
    } catch {
      if (fallback) {
        try {
          element.style.setProperty(property, fallback);
        } catch {
          // Silent fail for unsupported properties
        }
      }
    }
  }
};

// Global Safari compatibility initialization
export const initSafariCompat = () => {
  if (typeof window === "undefined") return;

  // Add CSS class for Safari-specific styling
  if (safariCompat.isSafari()) {
    document.documentElement.classList.add('is-safari');
    
    if (safariCompat.isSafariMobile()) {
      document.documentElement.classList.add('is-safari-mobile');
    }
    
    if (safariCompat.shouldSkipAnimations()) {
      document.documentElement.classList.add('safari-no-animations');
    }
  }

  // Add viewport height fix for Safari mobile
  if (safariCompat.isSafariMobile()) {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
  }
};