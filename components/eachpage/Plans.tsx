"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

function isImageUrl(url: string) {
  const u = (url || "").toLowerCase();
  return (
    u.endsWith(".png") ||
    u.endsWith(".jpg") ||
    u.endsWith(".jpeg") ||
    u.endsWith(".webp") ||
    u.endsWith(".gif")
  );
}

export default function Plans({
  title,
  plans,
}: {
  title?: string;
  plans: Array<{ id: number; title: string; icon: string; url: string }>;
}) {
  const items = useMemo(() => plans?.filter((p) => p?.title && p?.url) || [], [plans]);
  const [active, setActive] = useState(0);

  if (!items.length) return null;

  const current = items[active];
  const showImage = isImageUrl(current.url);

  return (
    <section className="py-16 bg-white section_margin">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-serif text-[#362A82] uppercase font-bold mb-10">
          {title || "PLANS"}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT */}
          <div className="w-full lg:w-[280px]">
            <div className="bg-[#F6D6CE] rounded-lg overflow-hidden">
              {items.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.id ?? index}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`w-full flex flex-col items-center justify-center py-10 transition
                      ${isActive ? "bg-[#F3C7BC]" : "bg-transparent"}
                      ${index !== items.length - 1 ? "border-b border-white/60" : ""}
                    `}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 object-contain mb-3"
                    />
                    <p
                      className={`text-[14px] font-medium ${
                        isActive ? "text-[#BB5439]" : "text-[#7A7A7A]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[520px] md:h-[560px] bg-white rounded-sm overflow-hidden">
              {showImage ? (
                <Image
                  src={current.url}
                  alt={current.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 820px"
                />
              ) : (
                <iframe
                  src={current.url}
                  className="w-full h-full"
                  title={current.title}
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}