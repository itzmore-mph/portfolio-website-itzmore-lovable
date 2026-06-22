/**
 * Abstract data-viz motif used as the hero backdrop.
 * Stylised pitch-control surface + a passing-network overlay,
 * rendered as inline SVG so there is no stadium stock imagery.
 */
export const HeroDataMotif = () => {
  return (
    <svg
      viewBox="0 0 1600 1200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="ctrlA" cx="32%" cy="42%" r="42%">
          <stop offset="0%" stopColor="hsl(142 76% 45%)" stopOpacity="0.55" />
          <stop offset="55%" stopColor="hsl(142 76% 36%)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(222 47% 9%)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ctrlB" cx="72%" cy="62%" r="46%">
          <stop offset="0%" stopColor="hsl(160 84% 39%)" stopOpacity="0.45" />
          <stop offset="55%" stopColor="hsl(173 80% 40%)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="hsl(222 47% 9%)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bgFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(222 47% 7%)" />
          <stop offset="100%" stopColor="hsl(222 47% 11%)" />
        </linearGradient>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(210 40% 98% / 0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* base */}
      <rect width="1600" height="1200" fill="url(#bgFade)" />
      <rect width="1600" height="1200" fill="url(#grid)" />

      {/* pitch outline (stylised, no stadium) */}
      <g stroke="hsl(142 76% 45% / 0.18)" strokeWidth="2" fill="none">
        <rect x="120" y="180" width="1360" height="840" rx="6" />
        <line x1="800" y1="180" x2="800" y2="1020" />
        <circle cx="800" cy="600" r="120" />
        <rect x="120" y="380" width="220" height="440" />
        <rect x="1260" y="380" width="220" height="440" />
      </g>

      {/* pitch-control surfaces */}
      <rect width="1600" height="1200" fill="url(#ctrlA)" />
      <rect width="1600" height="1200" fill="url(#ctrlB)" />

      {/* passing network */}
      <g stroke="hsl(142 76% 60% / 0.35)" strokeWidth="1.25" fill="none">
        <path d="M260,820 L520,640 L780,540 L1060,460 L1340,380" />
        <path d="M260,820 L460,520 L780,540" />
        <path d="M520,640 L780,540 L1060,460" />
        <path d="M460,520 L740,360 L1060,460" />
        <path d="M780,540 L900,760 L1180,720 L1340,380" />
        <path d="M900,760 L1180,720" />
        <path d="M740,360 L1340,380" />
      </g>
      <g fill="hsl(142 76% 50%)">
        {[
          [260, 820], [460, 520], [520, 640], [740, 360],
          [780, 540], [900, 760], [1060, 460], [1180, 720], [1340, 380],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="10" opacity="0.85" />
            <circle cx={x} cy={y} r="22" fill="none" stroke="hsl(142 76% 50% / 0.35)" />
          </g>
        ))}
      </g>
    </svg>
  );
};

export default HeroDataMotif;
