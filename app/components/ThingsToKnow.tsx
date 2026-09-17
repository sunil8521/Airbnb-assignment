"use client";

export default function ThingsToKnow() {
  return (
    <div className="pt-12 pb-6" id="things-to-know">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        Things to know
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        <div>
          <div className="w-6 h-6 mb-3 text-[#222222]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/cal.svg" alt="Calendar" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="font-semibold text-[16px] text-[#222222] mb-2">
            Cancellation policy
          </h3>
          <p className="text-[15px] text-[#222222] leading-relaxed">
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className="text-[15px] text-[#222222] leading-relaxed mt-2">
            Review this host&apos;s full policy for details.
          </p>
          <a
            href="#"
            className="font-semibold underline text-[14px] text-[#222222] mt-4 inline-block hover:text-black cursor-pointer"
          >
            Learn more
          </a>
        </div>

        
        <div>
          <div className="w-6 h-6 mb-3 text-[#222222]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/key.svg" alt="House rules" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="font-semibold text-[16px] text-[#222222] mb-2">
            House rules
          </h3>
          <ul className="space-y-2 text-[15px] text-[#222222]">
            <li>Check-in after 2:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>3 guests maximum</li>
          </ul>
          <a
            href="#"
            className="font-semibold underline text-[14px] text-[#222222] mt-4 inline-block hover:text-black cursor-pointer"
          >
            Learn more
          </a>
        </div>

        
        <div>
          <div className="w-6 h-6 mb-3 text-[#222222]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/protect.svg" alt="Safety" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="font-semibold text-[16px] text-[#222222] mb-2">
            Safety &amp; property
          </h3>
          <ul className="space-y-2 text-[15px] text-[#222222]">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
          <a
            href="#"
            className="font-semibold underline text-[14px] text-[#222222] mt-4 inline-block hover:text-black cursor-pointer"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
