import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProfilePhoto = ({ src, alt, className }: ProfilePhotoProps) => {
  return (
    <div className="flex justify-center">
      <div className="relative group">
        <OptimizedImage 
          src={src} 
          alt={alt}
          className={cn("w-32 h-32 sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] lg:w-80 lg:h-80 rounded-full border-2 border-primary/60 object-cover transition-transform duration-300 group-hover:scale-105", className)}
          containerClassName="rounded-full"
          width={320}
          height={320}
          priority={true}
        />
      </div>
    </div>
  );
};