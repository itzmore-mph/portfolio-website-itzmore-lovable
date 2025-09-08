import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "muted" | "gradient" | "transparent";
  spacing?: "sm" | "md" | "lg" | "xl";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

const backgroundStyles = {
  default: "bg-background",
  muted: "bg-muted/30",
  gradient: "bg-gradient-to-br from-background to-muted/20",
  transparent: "bg-transparent"
};

const spacingStyles = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20", 
  lg: "py-20 sm:py-24",
  xl: "py-24 sm:py-32"
};

export const Section = ({ 
  children, 
  className, 
  containerClassName,
  id,
  background = "default",
  spacing = "lg",
  containerSize = "xl"
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        backgroundStyles[background],
        spacingStyles[spacing],
        "relative",
        className
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};