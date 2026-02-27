"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Specifications({ data }: { data: any[] }) {
  const specs = useMemo(() => (Array.isArray(data) ? data : []), [data]);

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [overflowMap, setOverflowMap] = useState<Record<number, boolean>>({});
  
  const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const newOverflow: Record<number, boolean> = {};
    specs.forEach((_, index) => {
      const el = contentRefs.current.get(index);
      if (el) {
        newOverflow[index] = el.scrollHeight > 150;
      }
    });
    setOverflowMap(newOverflow);
  }, [specs]);

  if (!specs.length) return null;

  return (
    <section className="pt-[110px] pb-[120px] bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        
        {/* Header - Kept exactly as provided */}
        <div className="mb-[80px] text-center">
          <h2
            className="text-[40px] uppercase text-[#362A82]"
            style={{
              fontFamily: "var(--font-times), serif",
              letterSpacing: "1.8px",
              fontWeight: 700,
            }}
          >
            SPECIFICATIONS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[80px]">
          {specs.map((spec, index) => {
            // FORCE index 1 (2nd) and index 2 (3rd) to be open
            const isAlwaysOpen = index === 1 || index === 2;
            const isOpen = isAlwaysOpen || !!expanded[index];
            const html = spec?.description || "";

            return (
              <div
                key={index}
                className="flex flex-col items-start text-left"
              >
                {/* Icon */}
                <div className="w-[90px] h-[90px] flex items-center justify-center mb-[24px]">
                  <Image
                    src={spec.icon}
                    alt={spec?.title || "Specification"}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <div className="text-black font-medium uppercase text-[16px] tracking-[1.5px] mb-[16px]">
                  {spec.title}
                </div>

                {/* Description Container */}
                <div className="w-full">
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current.set(index, el);
                      else contentRefs.current.delete(index);
                    }}
                    className={`text-black text-[16px] leading-[29px] font-normal overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[1000px]" : "max-h-[150px]"
                    }`}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />

                  {/* Read More - Only show if it's NOT index 1 or 2 */}
                  {overflowMap[index] && !isAlwaysOpen && (
                    <button
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      className="text-[#362A82] text-[16px] font-medium mt-[10px]"
                    >
                      {isOpen ? "Read Less " : "Read More "}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}