"use client";

import { useState } from "react";

interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      
      <div className="bg-[#F7F7F7] rounded-xl px-4 py-3 mb-6">
        <p className="text-[14px] text-[#222222]">
          Some info has been automatically translated.{" "}
          <a href="#" className="font-medium underline underline-offset-2 text-[#222222] cursor-pointer">
            Show original
          </a>
        </p>
      </div>

      
      <div
        className={`text-[16px] text-[#222222] leading-[24px] font-normal transition-all duration-300 ${
          !expanded
            ? "max-h-[96px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_50%,rgba(0,0,0,0.15)_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,rgba(0,0,0,0.15)_95%,transparent_100%)]"
            : ""
        }`}
      >
        <p className="whitespace-pre-line">{description}</p>
      </div>

      
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-[16px] font-semibold text-[#222222] inline-flex items-center gap-1.5 hover:text-[#717171] transition-colors cursor-pointer"
      >
        <span className="underline underline-offset-2">
          {expanded ? "Show less" : "Show more"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 shrink-0"
        >
          <polyline points="6 3 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
