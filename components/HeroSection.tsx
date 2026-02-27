"use client";

import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  bgImage,
}) => {
  return (
    /* Adjusted outer height to be responsive: 300px on mobile, 400px on desktop */
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-900">
      
      {/* Background Image - Set to absolute to act as a true background layer */}
      <img
        src={bgImage}
        alt={`${title}-background`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Floating Dark Box */}
      <div className="
        absolute 
        /* Vertical alignment: centered on mobile, slightly lower on desktop */
        top-1/2 md:top-[120px] 
        -translate-y-1/2 md:translate-y-0
        
        /* Horizontal alignment: Centered on mobile, your 21% offset on desktop */
        left-1/2 -translate-x-1/2 
        md:left-[10%] lg:left-[21%] md:translate-x-0
        w-[90%] md:w-[50%] lg:w-[40%] 
        max-w-3xl 
        
        bg-black/60 backdrop-blur-sm text-white rounded-lg shadow-xl p-6 md:p-7
      ">
        <h1 className="text-[15px] md:text-[16px] font-medium mb-4 tracking-wide leading-tight">
          {title}
        </h1>

        <p 
          className="text-xs md:text-[16px] uppercase tracking-wider
           leading-normal" 
          style={{ fontFamily: "var(--font-times), serif" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;