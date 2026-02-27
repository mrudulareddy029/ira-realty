"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselItem = {
  largeimg_url: string;
  smalldescription: string;
};

export default function HomeCarousel({ data }: { data: CarouselItem[] }) {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(data) || data.length === 0) return null;

  const slides = data.map((item) => ({
    src: item.largeimg_url,
    title: item.smalldescription,
  }));

  const next = useCallback(() => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, [slides.length]);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] lg:h-screen overflow-hidden group">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Bar - Responsive Fixes */}
      <div className="absolute bottom-0 right-0 z-30 flex h-9 md:h-10 w-full sm:w-fit max-w-full">
        
        {/* Controls (Yellow Box) */}
        <div className="bg-[#ffc107] flex items-center px-4 md:px-8 space-x-3 shrink-0">
          <button 
            onClick={prev}
            className="hover:scale-110 transition-transform active:scale-90"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-sm md:text-base font-normal whitespace-nowrap">
            {current + 1} / {slides.length}
          </span>

          <button 
            onClick={next}
            className="hover:scale-110 transition-transform active:scale-90"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info Box (White Box) */}
        <div className="bg-white/95 flex items-center px-4 border-l border-gray-200 flex-1 sm:w-[250px] md:w-[390px] lg:w-[600px] overflow-hidden">
          <p className="truncate text-xs md:text-sm lg:text-base text-[#303030] font-normal w-full">
            {slides[current].title}
          </p>
        </div>
      </div>
    </section>
  );
}