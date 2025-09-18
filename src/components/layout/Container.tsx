import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl", 
  lg: "max-w-7xl",
  xl: "max-w-8xl",
  full: "max-w-full"
};

export const Container = ({ 
  children, 
  className,
  size = "lg"
}: ContainerProps) => {
  return (
    <div className={cn(
      sizeStyles[size],
      "mx-auto px-6 lg:px-8",
      className
    )}>
      {children}
    </div>
  );
};