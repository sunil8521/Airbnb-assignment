"use client";

import { useState } from "react";
import Image from "next/image";

interface StayCard {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: string;
}

const PAGE_1_STAYS: StayCard[] = [
  {
    id: "stay-1",
    image: "/last/s1.jpeg",
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
  },
  {
    id: "stay-2",
    image: "/last/s2.jpeg",
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,216",
    rating: "4.95",
  },
  {
    id: "stay-3",
    image: "/last/s3.jpeg",
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
  },
  {
    id: "stay-4",
    image: "/last/s4.jpeg",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
  },
  {
    id: "stay-5",
    image: "/last/s5.jpeg",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
  },
];

const PAGE_2_STAYS: StayCard[] = [
  {
    id: "stay-6",
    image: "/last/s6.jpeg",
    title: "Romantic Jacuzzi Suite with Forest View",
    price: "₹28,499",
    rating: "4.95",
  },
  {
    id: "stay-7",
    image: "/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg",
    title: "Candolim Luxury Villa with Private Pool",
    price: "₹34,500",
    rating: "4.92",
  },
  {
    id: "stay-8",
    image: "/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg",
    title: "Boho Chic Apartment with Private Balcony",
    price: "₹21,800",
    rating: "4.89",
  },
  {
    id: "stay-9",
    image: "/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg",
    title: "Modern Minimalist Penthouse with Sea View",
    price: "₹38,200",
    rating: "4.97",
  },
  {
    id: "stay-10",
    image: "/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg",
    title: "Serene Palms Haven near Fort Aguada",
    price: "₹26,900",
    rating: "4.93",
  },
];

export default function MoreStaysNearby() {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [slideOffset, setSlideOffset] = useState(0);

  const handleNext = () => {
    if (containerEl) {
      setSlideOffset(containerEl.clientWidth + 14);
      setCurrentPage(2);
    }
  };

  const handlePrev = () => {
    setSlideOffset(0);
    setCurrentPage(1);
  };

  return (
    <div className="pt-10 pb-16" id="more-stays">
      
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[22px] font-semibold text-[#222222]">
          More stays nearby
        </h2>

        
        <div className="flex items-center gap-3">
          <span className="text-[14px] text-[#222222] select-none font-normal">
            {currentPage} / 2
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center transition-all duration-200 ${
                currentPage === 1
                  ? "opacity-30 cursor-not-allowed text-[#B0B0B0]"
                  : "hover:border-[#222222] hover:scale-105 text-[#222222] active:scale-90 cursor-pointer shadow-sm"
              }`}
              aria-label="Previous stays"
            >
              <svg
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <polyline points="11 3 5 9 11 15" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === 2}
              className={`w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center transition-all duration-200 ${
                currentPage === 2
                  ? "opacity-30 cursor-not-allowed text-[#B0B0B0]"
                  : "hover:border-[#222222] hover:scale-105 text-[#222222] active:scale-90 cursor-pointer shadow-sm"
              }`}
              aria-label="Next stays"
            >
              <svg
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <polyline points="7 3 13 9 7 15" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <div
        ref={setContainerEl}
        className="overflow-hidden w-full"
      >
        <div
          className="flex w-full will-change-transform"
          style={{
            transform: `translateX(-${slideOffset}px)`,
            transition: "transform 0.6s cubic-bezier(0.2, 0, 0, 1)",
          }}
        >
          
          <div className="w-full shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3.5">
            {PAGE_1_STAYS.map((stay) => (
              <div key={stay.id} className="group cursor-pointer">
                
                <div className="relative aspect-4/3 w-full rounded-[14px] overflow-hidden mb-2 bg-gray-100">
                  <Image
                    src={stay.image}
                    alt={stay.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </div>

                
                <h3 className="text-[13px] sm:text-[14px] text-[#222222] font-semibold leading-tight line-clamp-2 min-h-8 sm:min-h-9">
                  {stay.title}
                </h3>

                
                <div className="flex items-center gap-2 mt-1 text-[13px] sm:text-[14px]">
                  <span className="font-semibold text-[#222222]">{stay.price}</span>
                  <span className="flex items-center gap-1 text-[12px] sm:text-[13px] text-[#222222]">
                    <span className="text-[11px]">★</span>
                    <span>{stay.rating}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          
          <div className="w-[14px] shrink-0" aria-hidden="true" />

          
          <div className="w-full shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3.5">
            {PAGE_2_STAYS.map((stay) => (
              <div key={stay.id} className="group cursor-pointer">
                
                <div className="relative aspect-4/3 w-full rounded-[14px] overflow-hidden mb-2 bg-gray-100">
                  <Image
                    src={stay.image}
                    alt={stay.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </div>

                
                <h3 className="text-[13px] sm:text-[14px] text-[#222222] font-semibold leading-tight line-clamp-2 min-h-8 sm:min-h-9">
                  {stay.title}
                </h3>

                
                <div className="flex items-center gap-2 mt-1 text-[13px] sm:text-[14px]">
                  <span className="font-semibold text-[#222222]">{stay.price}</span>
                  <span className="flex items-center gap-1 text-[12px] sm:text-[13px] text-[#222222]">
                    <span className="text-[11px]">★</span>
                    <span>{stay.rating}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
