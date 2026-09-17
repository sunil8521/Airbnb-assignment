"use client";

export default function Header() {
  return (
    <header className="relative bg-white border-b border-[#EBEBEB] w-full">
      <div className="max-w-[1745px] w-full mx-auto px-4 sm:px-10 lg:px-20 flex items-center justify-between h-[72px] sm:h-[88px]">
        
        <div className="flex-1 flex items-center justify-start">
          <a href="/" className="flex items-center shrink-0" aria-label="Airbnb homepage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/svg/logo.svg"
              alt="Airbnb"
              width={103}
              height={32}
              className="h-7 sm:h-8 w-auto"
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>

        
        <div className="flex items-center justify-center shrink-0">
          <div className="hidden md:flex items-center border border-[#DDDDDD] rounded-full shadow-sm hover:shadow-md transition-shadow h-12 min-w-0 bg-white pl-3.5 pr-1.5">
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/searchbar-house.png"
              alt="Stays"
              className="h-[50px] w-auto object-contain shrink-0"
            />

            
            <button className="pl-1 pr-3 py-1.5 text-sm font-semibold text-[#222222] whitespace-nowrap hover:opacity-80 transition-opacity">
              Anywhere
            </button>

            
            <div className="h-6 w-[1px] bg-[#DDDDDD]" />

            
            <button className="px-4 py-1.5 text-sm font-semibold text-[#222222] whitespace-nowrap hover:opacity-80 transition-opacity">
              Anytime
            </button>

            
            <div className="h-6 w-[1px] bg-[#DDDDDD]" />

            
            <button className="px-4 py-1.5 text-sm text-[#717171] whitespace-nowrap hover:opacity-80 transition-opacity">
              Add guests
            </button>

            
            <button
              className="bg-[#FF385C] text-white rounded-full w-8 h-8 flex items-center justify-center ml-1 shrink-0 hover:brightness-95 active:scale-95 transition-all"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        
        <div className="flex-1 flex items-center justify-end gap-2 shrink-0">
          <button className="hidden md:block text-[14px] font-semibold text-[#222222] px-4 py-2.5 rounded-full bg-transparent hover:bg-[#F2F2F2] transition-colors whitespace-nowrap cursor-pointer">
            Become a host
          </button>
          <button
            className="hidden sm:flex w-10 h-10 rounded-full bg-[#F2F2F2] hover:bg-[#E5E5E5] items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Choose a language and currency"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/globe.svg" alt="Globe" className="w-[18px] h-[18px]" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-[#F2F2F2] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Main navigation menu"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/burger.svg" alt="Menu" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
