"use client";

import { useState } from "react";
import AmenitiesModal from "./AmenitiesModal";
import { listingData } from "../data/listing";

interface AmenitiesProps {
  amenities: { icon: string; label: string }[];
  totalAmenities: number;
}

function AmenityIcon({ icon, isUnavailable }: { icon: string; isUnavailable?: boolean }) {
  const opacity = isUnavailable ? "opacity-40" : "";
  
  const iconMap: Record<string, string> = {
    kitchen: "/svg/kitchen.svg",
    wifi: "/svg/wifi.svg",
    workspace: "/svg/dec.svg",
    parking: "/svg/car.svg",
    pool: "/svg/pool.svg",
    hottub: "/svg/hot.svg",
    pets: "/svg/pet.svg",
    camera: "/svg/exterio.svg",
    carbon: "/svg/carbon.svg",
    smoke: "/svg/smoke.svg",
  };

  const src = iconMap[icon];
  if (!src) return <div className="w-6 h-6 rounded-full border border-[#222222]" />;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={icon} className={`w-6 h-6 shrink-0 ${opacity}`} />;
}

export default function Amenities({ amenities, totalAmenities }: AmenitiesProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="py-8 border-b border-[#EBEBEB]" id="amenities">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {amenities.map((a) => {
          const isUnavailable = a.icon === "carbon" || a.icon === "smoke";
          return (
            <div key={a.label} className="flex items-center gap-4 py-1">
              <div className="text-[#222222]">
                <AmenityIcon icon={a.icon} isUnavailable={isUnavailable} />
              </div>
              <span
                className={`text-[16px] font-normal ${
                  isUnavailable ? "line-through text-[#717171]" : "text-[#222222]"
                }`}
              >
                {a.label}
              </span>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setShowAll(true)}
        className="mt-8 px-6 py-3.5 border border-[#222222] rounded-lg text-[16px] font-semibold text-[#222222] hover:bg-gray-50 transition-colors cursor-pointer"
      >
        Show all {totalAmenities} amenities
      </button>

      {showAll && (
        <AmenitiesModal 
          onClose={() => setShowAll(false)} 
          categories={listingData.allAmenities} 
        />
      )}
    </div>
  );
}
