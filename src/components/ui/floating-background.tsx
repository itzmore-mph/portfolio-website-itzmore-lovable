interface FloatingOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "accent" | "muted";
  position: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
}

const sizeMap = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-72 h-72",
  xl: "w-96 h-96",
};

const colorMap = {
  primary: "bg-primary/[0.04]",
  accent: "bg-primary/[0.06]",
  muted: "bg-muted-foreground/[0.03]",
};

const FloatingOrb = ({ size = "md", color = "primary", position, delay = 0 }: FloatingOrbProps) => {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none animate-orb-drift ${sizeMap[size]} ${colorMap[color]}`}
      style={{
        ...position,
        animationDelay: `${delay}s`,
      }}
      aria-hidden="true"
    />
  );
};

// Predefined section background decoration sets — pure CSS, no scroll listeners.
export const SectionDecorSet1 = () => (
  <>
    <FloatingOrb size="xl" color="primary" position={{ top: "-10%", right: "-8%" }} delay={0} />
    <FloatingOrb size="md" color="muted" position={{ bottom: "10%", left: "-5%" }} delay={2} />
    <FloatingOrb size="sm" color="accent" position={{ top: "40%", right: "15%" }} delay={4} />
  </>
);

export const SectionDecorSet2 = () => (
  <>
    <FloatingOrb size="lg" color="accent" position={{ top: "5%", left: "-10%" }} delay={1} />
    <FloatingOrb size="md" color="primary" position={{ bottom: "-5%", right: "-6%" }} delay={3} />
    <FloatingOrb size="sm" color="muted" position={{ top: "60%", left: "20%" }} delay={5} />
  </>
);

export const SectionDecorSet3 = () => (
  <>
    <FloatingOrb size="xl" color="muted" position={{ top: "-5%", left: "50%" }} delay={0} />
    <FloatingOrb size="lg" color="primary" position={{ bottom: "0%", left: "-8%" }} delay={2} />
    <FloatingOrb size="sm" color="accent" position={{ top: "30%", right: "5%" }} delay={4} />
  </>
);

export const SectionDecorSet4 = () => (
  <>
    <FloatingOrb size="lg" color="primary" position={{ top: "10%", right: "-5%" }} delay={1} />
    <FloatingOrb size="xl" color="muted" position={{ bottom: "-8%", left: "30%" }} delay={3} />
  </>
);

export const SectionDecorSet5 = () => (
  <>
    <FloatingOrb size="md" color="accent" position={{ top: "0%", left: "10%" }} delay={0} />
    <FloatingOrb size="lg" color="primary" position={{ bottom: "5%", right: "-10%" }} delay={2} />
    <FloatingOrb size="sm" color="muted" position={{ top: "50%", left: "-3%" }} delay={4} />
  </>
);

export const SectionGradientDivider = ({ variant = "default" }: { variant?: "default" | "reverse" | "accent" }) => {
  const gradients = {
    default: "from-transparent via-primary/[0.03] to-transparent",
    reverse: "from-transparent via-muted/30 to-transparent",
    accent: "from-transparent via-primary/[0.05] to-transparent",
  };

  return (
    <div className={`h-px w-full bg-gradient-to-r ${gradients[variant]}`} aria-hidden="true" />
  );
};
