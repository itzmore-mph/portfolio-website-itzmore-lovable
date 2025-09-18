import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center";
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  className,
  alignment = "center"
}: SectionHeaderProps) => {
  const alignmentStyles = alignment === "center" ? "text-center" : "text-left";
  
  return (
    <div className={cn(alignmentStyles, "mb-16 animate-fade-in", className)}>
      <h2 className="text-section-title mb-4">{title}</h2>
      {subtitle && (
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};