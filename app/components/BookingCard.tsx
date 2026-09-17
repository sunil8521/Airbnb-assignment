"use client";

interface BookingCardProps {
  price: { currency: string; total: number; totalNights: number };
  checkIn: string;
  checkOut: string;
  defaultGuests: number;
  freeCancellationDate: string;
  rating: number;
  reviewCount: number;
}

export default function BookingCard({
  price,
  checkIn,
  checkOut,
  defaultGuests,
  freeCancellationDate,
}: BookingCardProps) {
  return (
    <div className="sticky top-28">
      
      <div className="flex items-center justify-between border border-[#DDDDDD] rounded-xl px-5 py-4 mb-6 bg-white">
        <div className="flex items-center gap-3.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svg/discount.svg" alt="Discount tag" className="w-8 h-8 shrink-0 object-contain" />
          <div className="text-[14px] leading-tight text-[#222222]">
            <p className="font-normal">Get 10% off your next stay.</p>
            <a href="#" className="underline font-semibold cursor-pointer mt-0.5 inline-block text-[#222222]">
              Terms apply
            </a>
          </div>
        </div>
        <button className="text-[14px] font-semibold bg-[#F7F7F7] hover:bg-[#EBEBEB] text-[#222222] rounded-lg px-4 py-2 transition-colors shrink-0 cursor-pointer">
          Claim
        </button>
      </div>

      
      <div className="border border-[#DDDDDD] rounded-[24px] p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-white">
        
        <div className="flex items-baseline gap-1.5 mb-6">
          <span className="text-[22px] font-bold text-[#222222] underline underline-offset-2 decoration-1 tracking-tight">
            {price.currency}{price.total.toLocaleString("en-IN")}
          </span>
          <span className="text-[15px] text-[#222222] font-normal">
            for {price.totalNights} nights
          </span>
        </div>

        
        <div className="border border-[#B0B0B0] rounded-xl overflow-hidden">
          
          <div className="grid grid-cols-2">
            <div className="p-3 border-r border-[#B0B0B0] cursor-pointer hover:bg-gray-50/60 transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#222222] block leading-none">
                CHECK-IN
              </label>
              <p className="text-[14px] text-[#222222] mt-1 font-normal leading-normal">
                {checkIn}
              </p>
            </div>
            <div className="p-3 cursor-pointer hover:bg-gray-50/60 transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#222222] block leading-none">
                CHECKOUT
              </label>
              <p className="text-[14px] text-[#222222] mt-1 font-normal leading-normal">
                {checkOut}
              </p>
            </div>
          </div>

          
          <div className="border-t border-[#B0B0B0] p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50/60 transition-colors">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#222222] block leading-none">
                GUESTS
              </label>
              <p className="text-[14px] text-[#222222] mt-1 font-normal leading-normal">
                {defaultGuests} guests
              </p>
            </div>
            
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="w-4 h-4 mr-1 text-[#222222] shrink-0"
              style={{
                display: "block",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 3,
                overflow: "visible",
              }}
            >
              <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932" />
            </svg>
          </div>
        </div>

        
        <div className="bg-[#F7F7F7] rounded-xl py-3 px-4 text-center mt-4">
          <p className="text-[13.5px] text-[#717171] font-normal">
            Free cancellation before <span className="font-semibold text-[#222222]">{freeCancellationDate}</span>
          </p>
        </div>

        
        <button
          className="w-full mt-4 py-3.5 text-white font-semibold text-[16px] rounded-xl bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:brightness-95 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
        >
          Reserve
        </button>

        <p className="text-center text-[13.5px] text-[#717171] mt-3 font-normal">
          You won&apos;t be charged yet
        </p>
      </div>

      
      <div className="mt-6 text-center">
        <a
          href="#"
          className="text-[13px] text-[#717171] underline inline-flex items-center gap-2 hover:text-[#222222] transition-colors font-medium"
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="w-3.5 h-3.5 text-[#717171] shrink-0"
            style={{ display: "block", fill: "currentColor" }}
          >
            <path d="m28 6h-11v-2c0-1.1045695-.8954305-2-2-2h-11c-1.1045695 0-2 .8954305-2 2v26h2v-12h11v2c0 1.1045695.8954305 2 2 2h11c1.1045695 0 2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z" />
          </svg>
          Report this listing
        </a>
      </div>
    </div>
  );
}
