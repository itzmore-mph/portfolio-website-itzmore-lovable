import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}

/**
 * Shared 16:9 thumbnail wrapper used by all featured project cards.
 * Guarantees consistent framing regardless of source image dimensions.
 */
export const ProjectThumbnail = ({
  src,
  alt,
  className,
  fit = "cover",
}: ProjectThumbnailProps) => {
  return (
    <div
      className={cn(
        "w-full bg-background/60 border-b border-border/50 overflow-hidden rounded-t-xl",
        className
      )}
    >
      <AspectRatio ratio={16 / 9}>
        <OptimizedImage
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full",
            fit === "cover" ? "object-cover" : "object-contain"
          )}
          containerClassName="w-full h-full"
          lazy
        />
      </AspectRatio>
    </div>
  );
};
