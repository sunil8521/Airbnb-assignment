"use client";

import Image from "next/image";

interface SleepSectionProps {
  arrangements: { room: string; image: string; details: string }[];
}

export default function SleepSection({ arrangements }: SleepSectionProps) {
  return (
    <div className="py-8 border-b border-[var(--border-light)]">
      <h2 className="text-[22px] font-semibold mb-4">Where you&apos;ll sleep</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {arrangements.map((a) => (
          <div key={a.room} className="w-full sm:flex-1 max-w-full sm:max-w-[300px]">
            <div className="relative h-[200px] w-full rounded-xl overflow-hidden mb-3">
              <Image src={a.image} alt={a.room} fill className="object-cover" sizes="(max-width: 640px) 100vw, 300px" />
            </div>
            <h3 className="font-semibold text-base">{a.room}</h3>
            <p className="text-sm text-[var(--text-primary)]">{a.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
