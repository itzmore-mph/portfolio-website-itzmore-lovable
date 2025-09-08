import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl", 
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none"
};

export const Container = ({ children, className, size = "xl" }: ContainerProps) => {
  return (
    <div className={cn(
      containerSizes[size],
      "mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}>
      {children}
    </div>
  );
};