"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

interface LightboxProps {
  photos: { id: string; src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
    },
    [onPrev, onNext, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const photo = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col">
      
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <span className="text-sm font-medium">
          {currentIndex + 1} / {photos.length}
        </span>
        <div className="w-8" /> 
      </div>

      
      <div className="flex-1 flex items-center justify-center relative px-2 sm:px-16">
        
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="absolute left-2 sm:left-4 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10 shadow-md"
          aria-label="Previous photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        
        <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 95vw, 80vw"
            priority
          />
        </div>

        
        <button
          onClick={onNext}
          disabled={currentIndex === photos.length - 1}
          className="absolute right-2 sm:right-4 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10 shadow-md"
          aria-label="Next photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      
      <div className="text-center text-white text-sm py-3">
        {photo.alt}
      </div>
    </div>
  );
}
