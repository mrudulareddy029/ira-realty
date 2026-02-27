"use client";
import React, { useState } from 'react';

export default function Amenities({ data }: { data: any }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  const [activeCategory, setActiveCategory] = useState(0);
  const currentCategory = data[activeCategory];
  const currentItems = currentCategory?.items || [];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-serif text-[#362A82] uppercase font-bold tracking-wide"
           style={{ fontFamily: "var(--font-times), serif",
            letterSpacing: "1.5px"
           }}>
            AMENITIES
          </h2>
        </div>

        <div className="relative mt-6">

  {/* Peach Background Box */}
  <div className="bg-[#fcf3ef] rounded-md p-8 min-h-[14px]">

    {/* Content pushed right to make space for sidebar */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6 lg:ml-[310px]">
      {currentItems.map((item: any, index: number) => (
        <div key={index} className="flex items-center gap-3">
          {item.icon && (
            <img
              src={item.icon}
              alt=""
              className="w-[22px] h-[22px] object-contain opacity-80"
            />
          )}
          <span className="text-[#444] text-[15px] font-medium leading-tight">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/*  Floating Sidebar */}
  <div className="absolute top-0 bottom-0 left-3 w-[260px] hidden lg:block">
    <div className="bg-white  rounded-md overflow-hidden">
      {data.map((cat: any, index: number) => (
        <div key={index}>
          <button
            onClick={() => setActiveCategory(index)}
            className={`w-full py-6 px-8 text-lg transition-all duration-300 capitalize
              ${activeCategory === index
                ? "text-[#362A82] font-normal"
                : "text-gray-400 font-normal "}`}
          >
            {cat.category}
          </button>
          {index < data.length - 1 && (
            <hr className="mx-6 border-gray-200" />
          )}
        </div>
      ))}
    </div>
  </div>

  {/* 📱 Mobile Sidebar (Stacked) */}
  <div className="lg:hidden mt-6">
    <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
      {data.map((cat: any, index: number) => (
        <div key={index}>
          <button
            onClick={() => setActiveCategory(index)}
            className={`w-full py-5 px-6 text-base transition text-left capitalize
              ${activeCategory === index
                ? "text-[#362A82] font-bold"
                : "text-gray-400 hover:text-[#362A82]"}`}
          >
            {cat.category}
          </button>
          {index < data.length - 1 && (
            <hr className="mx-6 border-gray-100" />
          )}
        </div>
      ))}
    </div>
  </div>

</div>
</div>
    </section>
  );
}