import { cn } from "@/lib/utils";
import { useScrollParallax } from "@/hooks/useScrollParallax";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  fadeIn?: boolean;
  slideUp?: boolean;
  scale?: boolean;
  delay?: number;
}

export const ParallaxSection = ({
  children,
  className,
  speed = 0.15,
  fadeIn = true,
  slideUp = true,
  scale = false,
}: ParallaxSectionProps) => {
  const { ref, style } = useScrollParallax({ speed, fadeIn, slideUp, scale });

  return (
    <div ref={ref} style={style} className={cn(className)}>
      {children}
    </div>
  );
};
