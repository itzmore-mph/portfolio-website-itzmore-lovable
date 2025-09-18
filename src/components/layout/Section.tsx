import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "card";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const backgroundStyles = {
  default: "bg-background",
  muted: "bg-muted/50", 
  card: "bg-card"
};

const spacingStyles = {
  sm: "py-12",
  md: "py-16", 
  lg: "py-20",
  xl: "py-24"
};

export const Section = ({ 
  id, 
  children, 
  className,
  background = "default",
  spacing = "lg"
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        backgroundStyles[background],
        spacingStyles[spacing],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};