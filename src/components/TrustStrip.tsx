import { trustLogos } from "@/data/trust";

/**
 * Compact trust strip: prior employers rendered grayscale with an emerald tint on hover,
 */
export const TrustStrip = () => {
  return (
    <section aria-label="Trusted collaborations and recognition" className="py-10 lg:py-14 border-y border-border/40 bg-card/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
          Experience across football, sports tech and media
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-6">
          {trustLogos.map((org) => (
            <div
              key={org.name}
              className="text-sm md:text-base font-semibold text-muted-foreground/80 grayscale hover:grayscale-0 hover:text-primary transition-colors duration-200"
            >
              {org.logo ? (
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  className="h-6 md:h-7 w-auto opacity-80 hover:opacity-100"
                  loading="lazy"
                />
              ) : (
                <span>{org.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
