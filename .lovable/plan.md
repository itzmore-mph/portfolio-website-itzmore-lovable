
The "Should have a queue" React error is caused by `useScrollParallax.tsx` calling `shouldDisableParallax()` (which calls `window.matchMedia`) inside the `useState` initializer. During Vite HMR, this can cause hook ordering inconsistencies between renders. Additionally, `FloatingOrb` instances each spin up their own scroll listener (15+ orbs across 5 sections = 15+ scroll handlers + RAF loops), which is heavy on mobile and contributes to jank/render issues.

## Root causes

1. **Hook crash**: `useState(() => { ... shouldDisableParallax() })` runs `window.matchMedia` during render. Combined with conditional logic deeper in the hook, HMR replays end up with a mismatched hook queue → blank screen.
2. **Performance**: Every `FloatingOrb` (5 sets × ~3 orbs) registers its own `scroll` + `resize` listener and RAF. On mobile this is wasteful and amplifies the bug.
3. **Layout**: Sections use `overflow-hidden` on `<section>` wrappers which can clip parallax transforms; ambient gradient + per-section orbs partly duplicate each other.

## Fix plan

**1. Rewrite `src/hooks/useScrollParallax.tsx`**
- Initialize `useState` with safe static defaults (`opacity: 1, translateY: 0, scale: 1`) — no `window` access during init.
- Detect disabled state inside `useEffect` only (SSR/HMR safe).
- If disabled, skip attaching listeners entirely and return static visible style.
- Use a single shared `IntersectionObserver`-driven progress instead of math-on-every-scroll for reliability.

**2. Slim down `src/components/ui/floating-background.tsx`**
- Replace `useScrollParallax` per-orb with a single lightweight CSS animation (`animate-pulse`/custom keyframe drift) — no JS scroll listeners.
- Keeps the visual orbs but removes 15 hook instances.

**3. Tighten `src/pages/Index.tsx`**
- Remove `overflow-hidden` from individual `<section>` wrappers (keep on the outer container) so transforms aren't clipped.
- Keep the global ambient gradient; reduce orb sets to avoid visual noise on mobile (`hidden md:block` on decor sets).

**4. Verify `ParallaxSection` usage**
- Ensure it always renders children (no conditional mount) and the wrapper has no `min-height: 0` collapse risk.

## Files to edit

- `src/hooks/useScrollParallax.tsx` — safe init + effect-only detection
- `src/components/ui/floating-background.tsx` — drop per-orb hook, use CSS drift
- `src/pages/Index.tsx` — remove section `overflow-hidden`, hide decor on mobile
- `src/index.css` — add small `@keyframes drift` for orbs

## Outcome

- No more "Should have a queue" crash.
- All sections render reliably on mobile and desktop.
- ~15 fewer scroll listeners → smoother scroll, lower CPU.
- Cleaner, more unified layout with subtle ambient motion.
