"use client";

import { useEffect } from "react";

import {
  Wind, Sparkles, Droplets, Thermometer, Shirt, BedDouble, Archive,
  Tv, Fan, Video, BellRing, Bell, Wifi, MonitorSmartphone,
  Utensils, Refrigerator, Microwave, Flame, Coffee, DoorOpen, Trees,
  Car, Waves, Bath
} from "lucide-react";

interface AmenityItem {
  name: string;
  icon: string;
  isUnavailable?: boolean;
}

interface AmenityCategory {
  category: string;
  items: AmenityItem[];
}

interface AmenitiesModalProps {
  onClose: () => void;
  categories: AmenityCategory[];
}

function ModalAmenityIcon({ icon, isUnavailable }: { icon: string; isUnavailable?: boolean }) {
  const colorClass = isUnavailable ? "text-[#717171]" : "text-[#222222]";
  const iconProps = { className: `w-6 h-6 shrink-0 ${colorClass}`, strokeWidth: 1.5 };

  const renderIcon = () => {
    switch (icon) {
      case "hairdryer": return <Wind {...iconProps} />;
      case "cleaning": return <Sparkles {...iconProps} />;
      case "shampoo": return <Droplets {...iconProps} />;
      case "hotwater": return <Thermometer {...iconProps} />;
      case "showergel": return <Bath {...iconProps} />;
      
      case "washingmachine": return <Shirt {...iconProps} />;
      case "hangers": return <Shirt {...iconProps} />;
      case "bedlinen": return <BedDouble {...iconProps} />;
      case "blinds": return <Archive {...iconProps} />;
      case "iron": return <Wind {...iconProps} />;
      case "storage": return <Archive {...iconProps} />;
      case "cot": return <BedDouble {...iconProps} />;

      case "tv": return <Tv {...iconProps} />;

      case "ac": return <Wind {...iconProps} />;
      case "fan": return <Fan {...iconProps} />;

      case "camera": return <Video {...iconProps} />;
      case "carbon": return <Bell {...iconProps} />;
      case "smoke": return <BellRing {...iconProps} />;

      case "wifi": return <Wifi {...iconProps} />;
      case "workspace": return <MonitorSmartphone {...iconProps} />;

      case "kitchen": return <Utensils {...iconProps} />;
      case "fridge": return <Refrigerator {...iconProps} />;
      case "freezer": return <Refrigerator {...iconProps} />;
      case "microwave": return <Microwave {...iconProps} />;
      case "cooking": return <Flame {...iconProps} />;
      case "cutlery": return <Utensils {...iconProps} />;
      case "kettle": return <Coffee {...iconProps} />;
      case "coffee": return <Coffee {...iconProps} />;
      case "toaster": return <Microwave {...iconProps} />;
      case "blender": return <Wind {...iconProps} />;
      case "cooker": return <Flame {...iconProps} />;

      case "entrance": return <DoorOpen {...iconProps} />;

      case "patio": return <Trees {...iconProps} />;
      case "outdoordining": return <Utensils {...iconProps} />;

      case "parking": return <Car {...iconProps} />;
      case "pool": return <Waves {...iconProps} />;
      case "hottub": return <Bath {...iconProps} />;

      default: return <div className={`w-6 h-6 rounded-full border border-current ${colorClass}`} />;
    }
  };

  return renderIcon();
}

export default function AmenitiesModal({ onClose, categories }: AmenitiesModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4">
      <div 
        className="w-full max-w-[780px] bg-white rounded-xl shadow-2xl flex flex-col relative overflow-hidden" 
        style={{ maxHeight: "88vh", height: "auto" }}
      >
        <div className="sticky top-0 z-10 bg-white px-4 sm:px-6 py-3 sm:py-4 flex items-center border-b border-[#EBEBEB]">
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-[#222222] -ml-1"
            aria-label="Close"
          >
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M26 6 6 26M6 6l20 20" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 pb-12">
          <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#222222] mb-6 sm:mb-8">What this place offers</h2>
          
          <div className="flex flex-col gap-8">
            {categories.map((category) => (
              <div key={category.category}>
                <h3 className="text-[18px] font-semibold text-[#222222] mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-col">
                  {category.items.map((item, index) => (
                    <div 
                      key={item.name} 
                      className={`flex items-center gap-4 py-5 ${index !== category.items.length - 1 ? 'border-b border-[#EBEBEB]' : ''}`}
                    >
                      <ModalAmenityIcon icon={item.icon} isUnavailable={item.isUnavailable} />
                      <span className={`text-[16px] font-normal ${item.isUnavailable ? "text-[#717171] line-through" : "text-[#222222]"}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
