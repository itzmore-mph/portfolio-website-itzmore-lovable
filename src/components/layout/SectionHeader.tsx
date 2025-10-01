import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center";
  size?: "default" | "large";
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  className,
  alignment = "center",
  size = "default"
}: SectionHeaderProps) => {
  const alignmentStyles = alignment === "center" ? "text-center" : "text-left";
  const titleSize = size === "large" ? "text-hero" : "text-section-title";
  const subtitleMaxWidth = alignment === "center" ? "max-w-3xl mx-auto" : "max-w-3xl";
  
  return (
    <div className={cn(alignmentStyles, "mb-16 lg:mb-20 animate-fade-in", className)}>
      <h2 className={cn(titleSize, "mb-6 font-semibold tracking-tight text-foreground")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-body text-muted-foreground leading-relaxed",
          subtitleMaxWidth
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};