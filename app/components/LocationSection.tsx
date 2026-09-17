"use client";

import { useState } from "react";

interface LocationSectionProps {
  location?: string;
  neighbourhoodDescription?: string;
}

export default function LocationSection({
  location = "Candolim, Goa, India",
  neighbourhoodDescription = "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
}: LocationSectionProps) {
  const [zoom, setZoom] = useState(1);
  const [showFullNeighbourhood, setShowFullNeighbourhood] = useState(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.8));

  return (
    <div className="py-12 border-b border-[#EBEBEB]" id="location">
      <h2 className="text-[22px] font-semibold text-[#222222]">
        Where you&apos;ll be
      </h2>
      <p className="text-[16px] text-[#222222] font-normal mt-1 mb-6">
        {location}
      </p>

      
      <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] rounded-[16px] sm:rounded-[24px] overflow-hidden border border-[#EBEBEB] shadow-sm bg-gray-100 mt-2">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            location
          )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      
      <div className="mt-5">
        <p className="text-[16px] font-semibold text-[#222222] mb-6">
          Exact location will be provided after booking.
        </p>

        <h3 className="text-[18px] font-semibold text-[#222222] mb-2">
          Neighbourhood highlights
        </h3>
        <p className="text-[16px] text-[#717171] leading-relaxed max-w-4xl font-normal">
          {neighbourhoodDescription}
          {showFullNeighbourhood && (
            <span className="block mt-2">
              The Candolim beach is merely a few minutes away, known for watersports, beach shacks, vibrant flea markets, and exquisite sunset views. Quiet surroundings yet close to nightlife and top Goa dining spots.
            </span>
          )}
        </p>
        <button
          onClick={() => setShowFullNeighbourhood((prev) => !prev)}
          className="text-[16px] font-semibold underline text-[#222222] mt-3 inline-flex items-center gap-1 hover:text-black cursor-pointer"
        >
          {showFullNeighbourhood ? "Show less" : "Show more"}
          <svg
            className={`w-3.5 h-3.5 transition-transform ${showFullNeighbourhood ? "-rotate-90" : ""}`}
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 3 12 9 6 15" />
          </svg>
        </button>
      </div>
    </div>
  );
}
