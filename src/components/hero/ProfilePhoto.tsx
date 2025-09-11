import { OptimizedImage } from "@/components/ui/optimized-image";

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
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white/30 shadow-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          width={192}
          height={192}
          priority={true}
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-data-blue/20 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
      </div>
    </div>
  );
};