import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  icon: LucideIcon;
}

export const StatCard = ({ value, label, className, icon: Icon }: StatCardProps) => {
  return (
    <div
      className={cn(
        "bg-card/60 backdrop-blur-sm border border-border rounded-2xl text-left shadow-lg relative overflow-hidden",
        "p-5 min-w-0 transition-colors duration-300",
        className
      )}
    >
      <div className="relative z-10">
        <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
        <h2 className="font-sans font-semibold text-foreground text-lg mb-2 leading-snug">
          {value}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {label}
        </p>
      </div>
    </div>
  );
};
