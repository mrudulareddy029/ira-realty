"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  const slides = useMemo(
    () => (data?.heroSlides?.length ? data.heroSlides : []),
    [data]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const active = slides[currentIndex] || {};

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[912px] overflow-hidden bg-[#212529]">
      {/* --- BACKGROUND IMAGES --- */}
      {slides.map((slide: any, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {!!slide?.image && (
            <Image
              src={slide.image}
              alt={slide?.title || "Project Banner"}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          )}
        </div>
      ))}

      {/* --- FIXED OVERLAY BOX --- */}
{/* Wrap the div in this check: */}
{(active?.title || active?.description) && (
  <div 
    className="absolute z-20 w-full px-4 md:px-0 transition-all duration-300
               bottom-[140px] left-0 
               md:top-[15%] md:left-[2%] md:max-w-[444px]"
  >
    <div className="bg-black/55 backdrop-blur-md p-6 md:p-10  shadow-2xl">
      {/* Title - Only render if it exists */}
      {active?.title && (
        <h1 className="text-[28px] md:text-[32px] font-serif font-normal text-white mb-3 md:mb-6 uppercase leading-normal"
        style={{ fontFamily: "var(--font-times), serif" }}>

          {active.title}
        </h1>
      )}

      {/* Description - Only render if it exists */}
      {active?.description && (
        <div
          className="text-white text-xs md:text-sm lg:text-[15px] mb-6 md:mb-10 leading-relaxed font-normal opacity-95 line-clamp-4 md:line-clamp-none"
          dangerouslySetInnerHTML={{ __html: active.description }}
        />
      )}

      {active?.enableEnquiry && (
        <button className="bg-[#362A82] hover:bg-[#2c226e] text-white px-6 md:px-3 py-2.5 md:py-2 rounded-sm text-[14px] md:text-[16px] tracking-normal font-normal transition-all shadow-xl">
          Enquire Now
        </button>
      )}
    </div>
  </div>
)}

      {/* --- BOTTOM CONTROLS --- */}
<div className="absolute bottom-0 right-0 z-30 flex h-9 md:h-10 w-full sm:w-fit max-w-full">

  {/* Yellow Controls Box */}
  <div className="bg-[#ffc107] flex items-center px-4 md:px-8 space-x-3 shrink-0">
    
    <button
      onClick={prevSlide}
      className="hover:scale-110 transition-transform active:scale-90"
    >
      <ChevronLeft size={20} />
    </button>

    <span className="text-sm md:text-base font-normal whitespace-nowrap">
      {currentIndex + 1} / {slides.length}
    </span>

    <button
      onClick={nextSlide}
      className="hover:scale-110 transition-transform active:scale-90"
    >
      <ChevronRight size={20} />
    </button>

  </div>

  {/* White Info Box */}
  {!!active?.slogan && (
    <div className="bg-white/95 flex items-center px-4 border-l border-gray-200 flex-1 sm:w-[250px] md:w-[390px] lg:w-[600px] overflow-hidden">
      <p className="truncate text-xs md:text-sm lg:text-base text-[#303030] font-normal w-full">
        {active.slogan}
      </p>
    </div>
  )}

</div>
    </section>
  );
}