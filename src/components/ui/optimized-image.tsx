import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  lazy?: boolean;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  fallbackSrc,
  lazy = true,
  className,
  containerClassName,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null);
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy || priority) {
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  return (
    <div
      ref={imgRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      {!isLoaded && imageSrc && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          loading={lazy && !priority ? "lazy" : "eager"}
          {...props}
        />
      )}
      
      {imageError && !fallbackSrc && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};