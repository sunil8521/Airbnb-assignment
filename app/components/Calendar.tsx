"use client";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

interface CalendarProps {
  checkInDate: string;
  checkOutDate: string;
  location: string;
  nights: number;
}

export default function Calendar({ nights }: CalendarProps) {
  const octoberDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const octoberBlanks = Array.from({ length: 4 }, () => null);

  const novemberDays = Array.from({ length: 30 }, (_, i) => i + 1);

  const isNovUnavailable = (day: number) =>
    (day >= 18 && day <= 24) || day === 29 || day === 30;

  return (
    <div className="py-8 border-b border-[#EBEBEB]" id="calendar">
      <h2 className="text-[22px] font-semibold text-[#222222]">
        {nights} nights in Candolim
      </h2>
      <p className="text-[14px] text-[#717171] mt-1 mb-6">
        18 Oct 2026 - 23 Oct 2026
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <div>
          <div className="flex items-center justify-between mb-4 h-8">
            
            <button
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-[#222222] cursor-pointer"
              aria-label="Previous month"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <polyline points="11 3 5 9 11 15" />
              </svg>
            </button>
            <h3 className="text-[16px] font-semibold text-[#222222]">
              October 2026
            </h3>
            <div className="w-8" />
          </div>

          <div className="grid grid-cols-7 text-center">
            {DAYS.map((d, i) => (
              <div key={i} className="text-[12px] font-normal text-[#717171] py-1">
                {d}
              </div>
            ))}

            {octoberBlanks.map((_, i) => (
              <div key={`blank-${i}`} className="h-9 sm:h-11" />
            ))}

            {octoberDays.map((day) => {
              const isCheckIn = day === 18;
              const isCheckOut = day === 23;
              const isInRange = day > 18 && day < 23;

              return (
                <div
                  key={`oct-${day}`}
                  className={`h-9 sm:h-11 flex items-center justify-center relative ${isInRange ? "bg-[#F7F7F7]" : ""
                    } ${isCheckIn ? "bg-gradient-to-r from-transparent 50% to-[#F7F7F7] 50%" : ""} ${isCheckOut ? "bg-gradient-to-l from-transparent 50% to-[#F7F7F7] 50%" : ""
                    }`}
                >
                  <span
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-[12px] sm:text-[14px] ${isCheckIn || isCheckOut
                        ? "bg-[#222222] text-white font-semibold z-10"
                        : "text-[#222222] font-normal"
                      }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        
        <div>
          <div className="flex items-center justify-between mb-4 h-8">
            <div className="w-8" />
            <h3 className="text-[16px] font-semibold text-[#222222]">
              November 2026
            </h3>
            
            <button
              className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors text-[#222222] cursor-pointer"
              aria-label="Next month"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <polyline points="7 3 13 9 7 15" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 text-center">
            {DAYS.map((d, i) => (
              <div key={i} className="text-[12px] font-normal text-[#717171] py-1">
                {d}
              </div>
            ))}

            {novemberDays.map((day) => {
              const isUnavailable = isNovUnavailable(day);

              return (
                <div
                  key={`nov-${day}`}
                  className="h-9 sm:h-11 flex items-center justify-center text-[12px] sm:text-[14px]"
                >
                  <span
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${isUnavailable
                        ? "text-[#D0D0D0] cursor-not-allowed"
                        : "text-[#222222] font-normal"
                      }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-between mt-6 pt-2">
        <button
          className="p-1 text-[#222222] hover:bg-gray-100 rounded transition-colors cursor-pointer"
          aria-label="Keyboard shortcuts"
        >
          
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-5 stroke-[#222222] fill-none stroke-[2]"
            aria-hidden="true"
          >
            <rect x="3" y="9" width="26" height="14" rx="3" />
            <line x1="8" y1="18" x2="24" y2="18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button className="text-[14px] font-semibold underline text-[#222222] hover:text-black cursor-pointer">
          Clear dates
        </button>
      </div>
    </div>
  );
}
