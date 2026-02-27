"use client";

import React, { useMemo } from "react";
import Image from "next/image";

export default function Highlights({ data }: { data: any }) {
  const items = useMemo(() => {
    const raw = data?.highlights || [];
    return raw
      .filter((item: any) => (item?.label || item?.value) && typeof item === "object")
      .map((item: any) => ({
        label: item.label || "",
        value: item.value || "",
        icon: item.icon || "",
      }));
  }, [data]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[40px] font-serif text-[#362A82] uppercase font-bold mb-2"
          style={{ fontFamily: "var(--font-times), serif",
            letterSpacing: "1.5px"
           }}>
            PROJECT HIGHLIGHTS
          </h2>

          {!!data?.rera_no && (
            <p className="text-black text-[15px] md:text-[20px] mb-4 font-medium " 
            style={{ letterSpacing: "0.6px"}}>
              RERA No: {data.rera_no}
            </p>
          )}

          {!!data?.price && (
            <div className="inline-block bg-amber-400 text-white px-20 py-2.5 text-[16px] rounded-lg font-medium text-lg mb-8 shadow-lg  tracking-wider">
              {data.price}
            </div>
          )}

         <div
  className="max-w-4xl mx-auto text-center text-[rgba(0,0,0,0.6)] 
             text-[14px] font-light 
             leading-[1.9] tracking-[0.28px] 
             font-['Poppins'] mb-4 pb-7"
  dangerouslySetInnerHTML={{ __html: data.highlightDescription }}
/>
        </div>

        {/* GRID */}
        {items.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 ">
            {items.map((item: any, index: number) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Icon */}
                <div className="mb-1 flex items-center justify-center">
                  {item.icon ? (
                    <div className="relative w-16 h-16 md:w-20 md:h-">
                      <Image
                        src={item.icon}
                        alt={item.label || "Highlight icon"}
                        fill
                        className="object-contain transition-transform duration-300 "
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-full border border-gray-100" />
                  )}
                </div>

                {/* Text */}
                <div className="text-center">
                  <p className="text-[rgba(0,0,0,0.6)] font-normal text-[14px] md:text-[16px]  leading-tight">
                    {item.label}
                  </p>
                  <p className="text-[#7b5f18]  font-medium text-[15px] md:text-[17px] mt-2">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
