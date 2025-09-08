import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  className,
  alignment = "center"
}: SectionHeaderProps) => {
  const alignmentStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={cn(
      alignmentStyles[alignment],
      "mb-12 lg:mb-16 animate-fade-in",
      className
    )}>
      <h2 className="text-section-title mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};