"use client";

import Image from "next/image";

interface ReviewsProps {
  rating: number;
  reviewCount: number;
  ratingBreakdown: {
    cleanliness: number;
    accuracy: number;
    checkIn: number;
    communication: number;
    location: number;
    value: number;
  };
  reviewTags: {
    label: string;
    count: number;
    icon?: string;
    iconType?: string;
  }[];
  reviews: {
    id: string;
    name: string;
    avatar?: string | null;
    initial: string;
    timeOnAirbnb: string;
    rating: number;
    date: string;
    text: string;
  }[];
}

export default function Reviews({
  rating,
  reviewCount,
  ratingBreakdown,
  reviewTags,
  reviews,
}: ReviewsProps) {
  return (
    <div className="py-12 border-b border-[#EBEBEB]" id="reviews">
      
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-1">
          <div className="w-[72px] h-[108px] relative shrink-0">
            <Image
              src="/images/laurel-left.png"
              alt=""
              fill
              sizes="72px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-[76px] font-bold text-[#222222] tracking-tight leading-none select-none">
            {rating}
          </span>
          <div className="w-[72px] h-[108px] relative shrink-0">
            <Image
              src="/images/laurel-right.png"
              alt=""
              fill
              sizes="72px"
              className="object-contain"
              priority
            />
          </div>
        </div>
        <h2 className="text-[22px] font-bold text-[#222222]">Guest favourite</h2>
        <p className="text-[16px] text-[#717171] max-w-[360px] mx-auto mt-1 leading-snug">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a
          href="#"
          className="text-[14px] font-semibold text-[#222222] underline mt-3 inline-block hover:text-black"
        >
          How reviews work
        </a>
      </div>

      
      <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-4 scrollbar-none lg:grid lg:grid-cols-7 lg:gap-0 lg:overflow-visible py-2 mb-10">
        
        <div className="min-w-[140px] shrink-0 pr-4 sm:pr-6 border-r border-[#EBEBEB]">
          <p className="text-[14px] font-semibold text-[#222222] mb-3">Overall rating</p>
          <div className="space-y-1.5 w-full">
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#222222]">
              <span className="w-2.5">5</span>
              <div className="flex-1 h-[4px] bg-[#EBEBEB] rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#222222] rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#222222]">
              <span className="w-2.5">4</span>
              <div className="flex-1 h-[4px] bg-[#EBEBEB] rounded-full overflow-hidden">
                <div className="w-[12%] h-full bg-[#222222] rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#222222]">
              <span className="w-2.5">3</span>
              <div className="flex-1 h-[4px] bg-[#EBEBEB] rounded-full overflow-hidden">
                <div className="w-0 h-full bg-[#222222] rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#222222]">
              <span className="w-2.5">2</span>
              <div className="flex-1 h-[4px] bg-[#EBEBEB] rounded-full overflow-hidden">
                <div className="w-0 h-full bg-[#222222] rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#222222]">
              <span className="w-2.5">1</span>
              <div className="flex-1 h-[4px] bg-[#EBEBEB] rounded-full overflow-hidden">
                <div className="w-0 h-full bg-[#222222] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="min-w-[110px] shrink-0 px-4 sm:px-6 border-r border-[#EBEBEB]">
          <p className="text-[14px] font-semibold text-[#222222]">Cleanliness</p>
          <p className="text-[18px] font-semibold text-[#222222] mt-0.5">
            {ratingBreakdown.cleanliness.toFixed(1)}
          </p>
          <div className="w-8 h-8 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/spery.svg" alt="Cleanliness" className="w-8 h-8 object-contain" />
          </div>
        </div>

        
        <div className="min-w-[110px] shrink-0 px-4 sm:px-6 border-r border-[#EBEBEB]">
          <p className="text-[14px] font-semibold text-[#222222]">Accuracy</p>
          <p className="text-[18px] font-semibold text-[#222222] mt-0.5">
            {ratingBreakdown.accuracy.toFixed(1)}
          </p>
          <div className="w-8 h-8 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/righttick.svg" alt="Accuracy" className="w-8 h-8 object-contain" />
          </div>
        </div>

        
        <div className="min-w-[110px] shrink-0 px-4 sm:px-6 border-r border-[#EBEBEB]">
          <p className="text-[14px] font-semibold text-[#222222]">Check-in</p>
          <p className="text-[18px] font-semibold text-[#222222] mt-0.5">
            {ratingBreakdown.checkIn.toFixed(1)}
          </p>
          <div className="w-8 h-8 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/key.svg" alt="Check-in" className="w-8 h-8 object-contain" />
          </div>
        </div>

        
        <div className="min-w-[120px] shrink-0 px-4 sm:px-6 border-r border-[#EBEBEB]">
          <p className="text-[14px] font-semibold text-[#222222]">Communication</p>
          <p className="text-[18px] font-semibold text-[#222222] mt-0.5">
            {ratingBreakdown.communication.toFixed(1)}
          </p>
          <div className="w-8 h-8 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/messsaagae.svg" alt="Communication" className="w-8 h-8 object-contain" />
          </div>
        </div>

        
        <div className="min-w-[110px] shrink-0 px-4 sm:px-6 border-r border-[#EBEBEB]">
          <p className="text-[14px] font-semibold text-[#222222]">Location</p>
          <p className="text-[18px] font-semibold text-[#222222] mt-0.5">
            {ratingBreakdown.location.toFixed(1)}
          </p>
          <div className="w-8 h-8 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/map.svg" alt="Location" className="w-8 h-8 object-contain" />
          </div>
        </div>

        
        <div className="min-w-[110px] shrink-0 pl-4 sm:pl-6">
          <p className="text-[14px] font-semibold text-[#222222]">Value</p>
          <p className="text-[18px] font-semibold text-[#222222] mt-0.5">
            {ratingBreakdown.value.toFixed(1)}
          </p>
          <div className="w-8 h-8 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/dis.svg" alt="Value" className="w-8 h-8 object-contain" />
          </div>
        </div>
      </div>

      
      <div className="flex gap-3 mb-10 overflow-x-auto pb-3 scrollbar-none">
        {reviewTags.map((tag) => (
          <button
            key={tag.label}
            className="flex items-center gap-2.5 px-5 py-3 h-[52px] border border-[#DDDDDD] bg-white hover:border-[#222222] rounded-[16px] text-[15px] font-semibold text-[#222222] transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
          >
            {tag.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tag.icon} alt="" className="w-6 h-6 object-contain shrink-0" />
            )}
            <span>{tag.label}</span>
            <span className="text-[#717171] font-normal">{tag.count}</span>
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center gap-3 mb-3">
              {review.avatar ? (
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 bg-[#FFE7D6] text-[#717171] rounded-full flex items-center justify-center font-semibold text-sm shrink-0">
                  {review.initial}
                </div>
              )}
              <div>
                <p className="font-semibold text-[15px] text-[#222222] leading-tight">
                  {review.name}
                </p>
                <p className="text-[13px] text-[#717171]">{review.timeOnAirbnb}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#222222">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[13px] text-[#222222] font-semibold">·</span>
              <span className="text-[13px] text-[#222222] font-semibold">{review.date}</span>
            </div>
            <p className="text-[15px] text-[#222222] leading-relaxed">{review.text}</p>
            {review.text.length > 150 && (
              <button className="text-[14px] font-semibold underline text-[#222222] mt-1 block hover:text-black cursor-pointer">
                Show more
              </button>
            )}
          </div>
        ))}
      </div>

      
      <button className="mt-10 px-6 py-3 border border-[#222222] rounded-lg text-[16px] font-semibold text-[#222222] hover:bg-gray-50 transition-colors cursor-pointer">
        Show all {reviewCount} reviews
      </button>
    </div>
  );
}
