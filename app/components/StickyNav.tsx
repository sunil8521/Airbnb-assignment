"use client";

import { useEffect, useState } from "react";

interface StickyNavProps {
  price: { currency: string; total: number; totalNights: number };
  rating: number;
  reviewCount: number;
}

export default function StickyNav({ price, rating, reviewCount }: StickyNavProps) {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("photos");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 550);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["photos", "amenities", "reviews", "location"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { label: "Photos", href: "#photos", id: "photos" },
    { label: "Amenities", href: "#amenities", id: "amenities" },
    { label: "Reviews", href: "#reviews", id: "reviews" },
    { label: "Location", href: "#location", id: "location" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#EBEBEB] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-8 flex items-center justify-between h-[56px] gap-2">
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className={`text-[13px] sm:text-[14px] font-medium text-[#222222] pb-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                activeSection === tab.id ? "border-[#222222]" : "border-transparent"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden sm:flex flex-col items-end justify-center">
            <div className="text-[14px]">
              <span className="font-semibold">{price.currency}{price.total.toLocaleString("en-IN")}</span>
              <span className="text-[#222222]"> for {price.totalNights} nights</span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-[#222222]">
              <span>★</span>
              <span className="font-semibold">{rating}</span>
              <span className="text-[#717171]">· {reviewCount} reviews</span>
            </div>
          </div>
          <button className="px-4 py-2 sm:px-6 sm:py-2.5 text-white font-semibold text-[13px] sm:text-[14px] rounded-full bg-[#E51D53] hover:bg-[#D90B38] transition-colors cursor-pointer shrink-0">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
