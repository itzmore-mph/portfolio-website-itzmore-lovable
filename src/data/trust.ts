import { TrustLogo } from "./types";

/**
 * Compact trust strip. Rendered grayscale with a subtle emerald tint on hover.
 * TODO: replace text fallbacks with real logo assets when available (SVG preferred, monochrome).
 */
export const trustLogos: TrustLogo[] = [
  { name: "Hawk-Eye" }, // TODO: add hawk-eye logo asset
  { name: "Sportradar" }, // TODO: add sportradar logo asset
  { name: "Red Bull Media House" }, // TODO: add red bull media house logo asset
  { name: "Publicis Media" }, // TODO: add publicis media logo asset
];

export const trustBadge =
  "Finalist, AWS World Sports Innovation Cup 2026 (DFL Campus Frankfurt)";
