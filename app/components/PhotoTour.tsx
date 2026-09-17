"use client";

import Image from "next/image";

export interface RoomSection {
  id: string;
  name: string;
  amenities: string;
  thumbnail: string;
  photos: {
    id: string;
    src: string;
    alt: string;
    isHalf?: boolean;
  }[];
}

import { listingData } from "../data/listing";

export interface RoomSection {
  id: string;
  name: string;
  amenities: string;
  thumbnail: string;
  photos: {
    id: string;
    src: string;
    alt: string;
    isHalf?: boolean;
  }[];
}

export const PHOTO_TOUR_ROOMS: RoomSection[] = [
  {
    id: "living-room-1",
    name: "Living room 1",
    amenities: "Sofa · Air conditioning · Ceiling fan · TV",
    thumbnail: "/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg",
    photos: [
      {
        id: "lr1-1",
        src: "/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg",
        alt: "Living room with orange sofa and Persian carpet",
        isHalf: false,
      },
      {
        id: "lr1-2",
        src: "/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg",
        alt: "Living room TV and dining perspective",
        isHalf: true,
      },
      {
        id: "lr1-3",
        src: "/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg",
        alt: "Living room open plan view",
        isHalf: true,
      },
    ],
  },
  {
    id: "living-room-2",
    name: "Living room 2",
    amenities: "Ceiling fan · Hot tub",
    thumbnail: "/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg",
    photos: [
      {
        id: "lr2-1",
        src: "/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg",
        alt: "Outdoor lounge area with seating and ambient lighting",
        isHalf: false,
      },
      {
        id: "lr2-2",
        src: "/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg",
        alt: "Jacuzzi with hot tub jets",
        isHalf: true,
      },
      {
        id: "lr2-3",
        src: "/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg",
        alt: "Double height atrium and lounge",
        isHalf: true,
      },
      {
        id: "lr2-4",
        src: "/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg",
        alt: "Wicker seating and patio plants",
        isHalf: false,
      },
      {
        id: "lr2-5",
        src: "/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg",
        alt: "Jacuzzi lounge overview",
        isHalf: false,
      },
    ],
  },
  {
    id: "full-kitchen",
    name: "Full kitchen",
    amenities:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    thumbnail: "/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
    photos: [
      {
        id: "k-1",
        src: "/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
        alt: "Kitchen with appliances and wooden cabinetry",
        isHalf: true,
      },
      {
        id: "k-2",
        src: "/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg",
        alt: "Kitchen dining angle",
        isHalf: true,
      },
    ],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    amenities: "Double bed · Air conditioning · Room-darkening blinds · Wifi",
    thumbnail: listingData.allPhotos.filter(p => p.category === "Bedroom")[0].src,
    photos: listingData.allPhotos
      .filter(p => p.category === "Bedroom")
      .map((p, i) => ({
        id: p.id,
        src: p.src,
        alt: p.alt,
        isHalf: i > 0,
      })),
  },
  {
    id: "kitchen",
    name: "Kitchen",
    amenities: "Fridge · Microwave · Cooking basics · Kettle",
    thumbnail: listingData.allPhotos.filter(p => p.category === "Kitchen")[0].src,
    photos: listingData.allPhotos
      .filter(p => p.category === "Kitchen")
      .map((p) => ({
        id: p.id,
        src: p.src,
        alt: p.alt,
        isHalf: false,
      })),
  },
  {
    id: "bathroom",
    name: "Full bathroom",
    amenities: "Hot water · Shower gel · Shampoo · Hair dryer",
    thumbnail: listingData.allPhotos.filter(p => p.category === "Bathroom")[0].src,
    photos: listingData.allPhotos
      .filter(p => p.category === "Bathroom")
      .map((p) => ({
        id: p.id,
        src: p.src,
        alt: p.alt,
        isHalf: false,
      })),
  },
  {
    id: "amenities",
    name: "Amenities",
    amenities: "Exercise equipment · Treadmill · Shared outdoor pool",
    thumbnail: listingData.allPhotos.filter(p => p.category === "Amenities")[0].src,
    photos: listingData.allPhotos
      .filter(p => p.category === "Amenities")
      .map((p, i) => ({
        id: p.id,
        src: p.src,
        alt: p.alt,
        isHalf: i < 2,
      })),
  },
  {
    id: "exterior",
    name: "Exterior",
    amenities: "Building exterior · Resort grounds",
    thumbnail: listingData.allPhotos.filter(p => p.category === "Exterior")[0].src,
    photos: listingData.allPhotos
      .filter(p => p.category === "Exterior")
      .map((p) => ({
        id: p.id,
        src: p.src,
        alt: p.alt,
        isHalf: false,
      })),
  },
  {
    id: "additional-photos",
    name: "Additional photos",
    amenities: "Other amenities and property details",
    thumbnail: listingData.allPhotos.filter(p => p.category === "Other")[0].src,
    photos: listingData.allPhotos
      .filter(p => p.category === "Other")
      .map((p, i) => ({
        id: p.id,
        src: p.src,
        alt: p.alt,
        isHalf: i % 3 !== 0,
      })),
  },
];

export const ALL_PHOTO_TOUR_PHOTOS = listingData.allPhotos;

interface PhotoTourProps {
  onClose: () => void;
  onPhotoClick: (index: number) => void;
  isSaved?: boolean;
  onSave?: () => void;
  onShare?: () => void;
}

export default function PhotoTour({
  onClose,
  onPhotoClick,
  isSaved = false,
  onSave,
  onShare,
}: PhotoTourProps) {
  const allFlattenedPhotos = ALL_PHOTO_TOUR_PHOTOS;

  const scrollToRoom = (id: string) => {
    const el = document.getElementById(`tour-room-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      
      <div className="sticky top-0 bg-white z-40 px-4 sm:px-10 h-14 sm:h-16 flex items-center justify-between border-b border-[#EBEBEB]">
        
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-[#DDDDDD] hover:border-[#222222] transition-all cursor-pointer text-[#222222]"
          aria-label="Back to listing"
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="w-3.5 h-3.5"
          >
            <path d="m20 28-12-12 12-12" />
          </svg>
        </button>

        
        <h1 className="text-[15px] sm:text-[16px] font-semibold text-[#222222]">
          Photo tour
        </h1>

        
        <div className="flex items-center gap-2">
          {onShare && (
            <button
              onClick={onShare}
              className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[#DDDDDD] hover:border-[#222222] transition-colors cursor-pointer text-[#222222]"
              aria-label="Share"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
          )}

          {onSave && (
            <button
              onClick={onSave}
              className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[#DDDDDD] hover:border-[#222222] transition-colors cursor-pointer"
              aria-label="Save"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill={isSaved ? "#FF385C" : "none"}
                stroke={isSaved ? "#FF385C" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-200 ${isSaved ? "scale-115 text-[#FF385C]" : "text-[#222222]"
                  }`}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      
      <div className="max-w-[950px] mx-auto px-4 sm:px-6 pt-6 pb-24">
        
        <div className="flex overflow-x-auto gap-3 pb-3 sm:pb-0 mb-8 sm:mb-10 w-full sm:grid sm:grid-cols-8 sm:gap-x-2 sm:gap-y-3 scrollbar-none">
          {PHOTO_TOUR_ROOMS.map((room) => (
            <button
              key={room.id}
              onClick={() => scrollToRoom(room.id)}
              className="flex flex-col items-start group cursor-pointer text-left w-[72px] sm:w-full shrink-0"
            >
              <div className="relative w-full aspect-square rounded-[12px] sm:rounded-[14px] overflow-hidden bg-gray-100 border border-[#EBEBEB] group-hover:shadow-sm transition-all">
                <Image
                  src={room.thumbnail}
                  alt={room.name}
                  fill
                  sizes="72px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
              <span className="text-[11px] sm:text-[14px] font-light text-[#222222] mt-1 leading-[1.15] line-clamp-2">
                {room.name}
              </span>
            </button>
          ))}
        </div>

        
        <div className="space-y-16">
          {PHOTO_TOUR_ROOMS.map((room) => {
            const photoBlocks: Array<
              | { type: "full"; photo: (typeof room.photos)[0] }
              | { type: "pair"; photos: typeof room.photos }
            > = [];
            for (let i = 0; i < room.photos.length; i++) {
              const current = room.photos[i];
              if (
                current.isHalf &&
                i + 1 < room.photos.length &&
                room.photos[i + 1].isHalf
              ) {
                photoBlocks.push({
                  type: "pair",
                  photos: [current, room.photos[i + 1]],
                });
                i++;
              } else {
                photoBlocks.push({ type: "full", photo: current });
              }
            }

            return (
              <section
                key={room.id}
                id={`tour-room-${room.id}`}
                className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-6 sm:gap-7 items-start w-full"
              >
                
                <div className="md:sticky md:top-20 self-start pr-2">
                  <h2 className="text-[22px] font-semibold text-[#222222] leading-tight mb-1">
                    {room.name}
                  </h2>
                  <p className="text-[13px] text-[#717171] leading-relaxed">
                    {room.amenities}
                  </p>
                </div>

                
                <div className="space-y-2 w-full">
                  {photoBlocks.map((block, bIdx) => {
                    if (block.type === "pair") {
                      return (
                        <div
                          key={`block-pair-${bIdx}`}
                          className="grid grid-cols-2 gap-2"
                        >
                          {block.photos.map((photo) => {
                            const globalIndex = allFlattenedPhotos.findIndex(
                              (p) => p.id === photo.id
                            );
                            return (
                              <div
                                key={photo.id}
                                onClick={() =>
                                  onPhotoClick(
                                    globalIndex !== -1 ? globalIndex : 0
                                  )
                                }
                                className="relative aspect-4/3 rounded-[12px] overflow-hidden cursor-pointer group bg-gray-100"
                              >
                                <Image
                                  src={photo.src}
                                  alt={photo.alt}
                                  fill
                                  sizes="(max-width: 768px) 50vw, 170px"
                                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                                />
                              </div>
                            );
                          })}
                        </div>
                      );
                    }

                    const globalIndex = allFlattenedPhotos.findIndex(
                      (p) => p.id === block.photo.id
                    );
                    return (
                      <div
                        key={block.photo.id}
                        onClick={() =>
                          onPhotoClick(globalIndex !== -1 ? globalIndex : 0)
                        }
                        className="relative w-full aspect-16/10 rounded-[14px] overflow-hidden cursor-pointer group bg-gray-100"
                      >
                        <Image
                          src={block.photo.src}
                          alt={block.photo.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 350px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                          priority={room.id === "living-room-1" && bIdx === 0}
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
