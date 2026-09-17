"use client";

import Image from "next/image";

interface PhotoGalleryProps {
  heroImages: { id: string; src: string; alt: string }[];
  onShowAllPhotos: () => void;
  onPhotoClick: (index: number) => void;
}

export default function PhotoGallery({ heroImages, onShowAllPhotos, onPhotoClick }: PhotoGalleryProps) {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[260px] sm:h-[380px] md:h-[430px] lg:h-[480px] cursor-pointer">
      
      <div
        className="col-span-1 sm:col-span-2 sm:row-span-2 relative overflow-hidden hover:brightness-90 transition-all h-full w-full"
        onClick={() => onPhotoClick(0)}
      >
        <Image
          src={heroImages[0].src}
          alt={heroImages[0].alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      
      <div
        className="hidden sm:block relative overflow-hidden hover:brightness-90 transition-all"
        onClick={() => onPhotoClick(1)}
      >
        <Image
          src={heroImages[1].src}
          alt={heroImages[1].alt}
          fill
          className="object-cover"
          sizes="25vw"
        />
      </div>
      <div
        className="hidden sm:block relative overflow-hidden hover:brightness-90 transition-all"
        onClick={() => onPhotoClick(2)}
      >
        <Image
          src={heroImages[2].src}
          alt={heroImages[2].alt}
          fill
          className="object-cover"
          sizes="25vw"
        />
      </div>

      
      <div
        className="hidden sm:block relative overflow-hidden hover:brightness-90 transition-all"
        onClick={() => onPhotoClick(3)}
      >
        <Image
          src={heroImages[3].src}
          alt={heroImages[3].alt}
          fill
          className="object-cover"
          sizes="25vw"
        />
      </div>
      <div
        className="hidden sm:block relative overflow-hidden hover:brightness-90 transition-all"
        onClick={() => onPhotoClick(4)}
      >
        <Image
          src={heroImages[4].src}
          alt={heroImages[4].alt}
          fill
          className="object-cover"
          sizes="25vw"
        />
      </div>

      
      <button
        onClick={(e) => { e.stopPropagation(); onShowAllPhotos(); }}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white text-[var(--text-primary)] text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg border border-[var(--text-primary)] flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="3" cy="3" r="1.5" />
          <circle cx="8" cy="3" r="1.5" />
          <circle cx="13" cy="3" r="1.5" />
          <circle cx="3" cy="8" r="1.5" />
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="13" cy="8" r="1.5" />
          <circle cx="3" cy="13" r="1.5" />
          <circle cx="8" cy="13" r="1.5" />
          <circle cx="13" cy="13" r="1.5" />
        </svg>
        Show all photos
      </button>
    </div>
  );
}
