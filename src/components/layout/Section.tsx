import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "gradient" | "card" | "power";
  spacing?: "sm" | "md" | "lg" | "xl";
  containerSize?: "content" | "narrow" | "text";
}

const backgroundStyles = {
  default: "section-background-default",
  muted: "section-background-muted", 
  gradient: "section-background-gradient",
  card: "bg-card",
  power: "section-background-power"
};

const spacingStyles = {
  sm: "section-padding-sm",
  md: "section-padding-md", 
  lg: "section-padding-lg",
  xl: "section-padding-xl"
};

const containerStyles = {
  content: "container-content",
  narrow: "container-narrow",
  text: "container-text"
};

export const Section = ({ 
  id, 
  children, 
  className,
  background = "default",
  spacing = "lg",
  containerSize = "content"
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "relative w-full",
        backgroundStyles[background],
        spacingStyles[spacing],
        className
      )}
    >
      <div className={containerStyles[containerSize]}>
        {children}
      </div>
    </section>
  );
};