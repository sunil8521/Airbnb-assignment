"use client";

import Image from "next/image";

interface CoHost {
  name: string;
  avatar?: string;
  initial?: string;
  initialBg?: string;
  initialText?: string;
}

const CO_HOSTS: CoHost[] = [
  { name: "Sharath", avatar: "/review/rev1.jpeg" },
  { name: "Aman Dev Pahwa", avatar: "/review/co1.jpg" },
  { name: "Maria Karen Priyanka", avatar: "/review/rev2.jpeg" },
  { name: "Simran", avatar: "/review/rev3.jpeg" },
  { name: "Pallavi", avatar: "/review/rev4.jpeg" },
  { name: "Sanyukta", avatar: "/review/rev5.jpeg" },
  {
    name: "Shruti",
    initial: "S",
    initialBg: "bg-[#FFDFEB]",
    initialText: "text-[#E00B41]",
  },
  {
    name: "Amisha",
    initial: "A",
    initialBg: "bg-[#EBE5FF]",
    initialText: "text-[#6C38CC]",
  },
];

export default function MeetYourHost() {
  return (
    <div className="py-12 border-b border-[#EBEBEB]" id="host-details">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        Meet your host
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-12 xl:gap-20">
        
        <div className="w-full lg:w-[400px] shrink-0">
          
          <div className="rounded-[24px] sm:rounded-[32px] bg-white border border-[#EBEBEB] p-4 sm:p-8 shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3 sm:gap-6">
            
            <div className="flex flex-col items-center flex-1">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/host.jpeg"
                    alt="Mirashya Homes"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 bg-[#E00B41] rounded-full flex items-center justify-center text-white border-[2.5px] border-white shadow-sm">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-[18px] sm:text-[22px] font-bold text-[#222222] leading-tight mt-3 text-center">
                Mirashya
                <br />
                Homes
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#717171] text-center mt-1">Host</p>
            </div>

            
            <div className="flex flex-col justify-center border-l border-[#EBEBEB] pl-4 sm:pl-8 py-1 min-w-[100px] sm:min-w-[125px]">
              <div>
                <p className="text-[22px] font-bold text-[#222222] leading-none">
                  1,463
                </p>
                <p className="text-[11px] text-[#222222] font-semibold mt-1">
                  Reviews
                </p>
              </div>
              <div className="h-px bg-[#EBEBEB] my-3 w-full" />
              <div>
                <p className="text-[22px] font-bold text-[#222222] leading-none flex items-center gap-0.5">
                  4.68<span className="text-[16px]">★</span>
                </p>
                <p className="text-[11px] text-[#222222] font-semibold mt-1">
                  Rating
                </p>
              </div>
              <div className="h-px bg-[#EBEBEB] my-3 w-full" />
              <div>
                <p className="text-[22px] font-bold text-[#222222] leading-none">
                  2
                </p>
                <p className="text-[11px] text-[#222222] font-semibold mt-1">
                  Years hosting
                </p>
              </div>
            </div>
          </div>

          
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/born.svg"
                  alt=""
                  className="w-5 h-5 text-[#222222]"
                />
              </div>
              <p className="text-[16px] text-[#222222]">Born in the 80s</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/school.svg"
                  alt=""
                  className="w-5 h-5 text-[#222222]"
                />
              </div>
              <p className="text-[16px] text-[#222222]">
                Where I went to school: NICMAR GOA
              </p>
            </div>
          </div>
        </div>

        
        <div className="flex-1 w-full min-w-0">
          
          <div>
            <h3 className="text-[18px] font-semibold text-[#222222] mb-4">
              Co-Hosts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
              {CO_HOSTS.map((ch) => (
                <div key={ch.name} className="flex items-center gap-3">
                  {ch.avatar ? (
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={ch.avatar}
                        alt={ch.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0 ${ch.initialBg} ${ch.initialText}`}
                    >
                      {ch.initial}
                    </div>
                  )}
                  <span className="text-[14px] text-[#222222] font-normal truncate">
                    {ch.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          
          <div className="mt-8">
            <h3 className="text-[18px] font-semibold text-[#222222] mb-3">
              Host details
            </h3>
            <p className="text-[15px] text-[#222222]">Response rate: 100%</p>
            <p className="text-[15px] text-[#222222] mt-1">
              Responds within an hour
            </p>

            <button className="mt-5 px-6 py-3 bg-[#F7F7F7] hover:bg-[#EBEBEB] text-[#222222] rounded-xl font-semibold text-[15px] transition-colors cursor-pointer border border-[#DDDDDD] shadow-sm">
              Message host
            </button>

            
            <div className="flex items-start gap-3 mt-7 pt-1 max-w-xl">
              <div className="w-4 h-4 shrink-0 mt-0.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/protect.svg"
                  alt=""
                  className="w-4 h-4 text-[#717171]"
                />
              </div>
              <p className="text-[12px] text-[#717171] leading-relaxed">
                To help protect your payment, always use Airbnb to send money and
                communicate with hosts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
