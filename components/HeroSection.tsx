"use client";

import React from "react";

interface HeroSectionProps {
  title: string;
  description?: string;
  bgImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  bgImage,
}) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-900">
      
      <img
        src={bgImage}
        alt={`${title}-background`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="
        absolute 
        top-1/2 md:top-[120px] 
        -translate-y-1/2 md:translate-y-0
        left-1/2 -translate-x-1/2 
        md:left-[10%] lg:left-[21%] md:translate-x-0
        w-[90%] md:w-[50%] lg:w-[40%] 
        max-w-3xl 
        bg-black/60 backdrop-blur-sm text-white rounded-lg shadow-xl p-6 md:p-7
      "
      >
        <h1 className="text-[15px] md:text-[16px] font-medium tracking-wide leading-tight">
          {title}
        </h1>

        {description && (
  <p
    className="
      mt-3
      text-[13px] md:text-[14px] lg:text-[17px]
      tracking-[1px]
      uppercase
      text-gray-200
      leading-snug
    "
    style={{ fontFamily: "var(--font-times), serif" }}
  >
    {description}
  </p>
)}
      </div>
    </div>
  );
};

export default HeroSection;