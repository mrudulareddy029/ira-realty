import React from 'react';

export interface ProjectCardProps {
  name: string;
  location: string;
  dimensions: string;
  unitSize: string;
  luxuryLevel: string;
  image: string;
  projectUrl: string;
  brochureUrl?: string;
  isBookable?: boolean;
  bookingUrl?: string;
  city?: string;
}

export const ProjectCard = ({ proj }: { proj: ProjectCardProps }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col">
      
      {/* Image Section */}
      <div className="relative">
        <div className="absolute top-0 right-0 z-10">
          <p className="bg-[#362A82] text-white text-[16px] px-4 py-2 font-medium tracking-wider rounded-lg">
            Ongoing
          </p>
        </div>

        <div className="w-full h-[250px] md:h-[360px] overflow-hidden bg-gray-100">
          <img 
            src={proj.image} 
            className="w-full h-full" 
            alt={proj.name} 
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-grow flex-col">
        
        {/* Title Section */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-sans text-[22px] font-bold text-[#212529] leading-tight tracking-[0.28px]">
            {proj.name}
          </h3>

          {proj.isBookable && (
            <a 
              href={proj.bookingUrl} 
              target="_blank" 
              className="bg-[#362A82] text-white text-[9px] px-3 py-1.5 rounded-full font-bold uppercase whitespace-nowrap"
            >
              Book Now
            </a>
          )}
        </div>

        {/*  FIXED ALIGNMENT SECTION (2x2 Grid Properly Aligned) */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-6 pt-2 text-[14px] mb-3">

          {/* Row 1 - Location */}
       <div className="flex items-center gap-2 text-[#383838]">
        <img src="/images/project-icons/location-icon.jpg" className="w-4 h-4" alt="" />
        <span className="text-[16px]  font-medium leading-[20px]">
        {proj.location}
      </span>
    </div>

  {/* Row 1 - Dimensions */}
  <div className="flex items-center gap-2 justify-end text-[#383838]">
  <img src="/images/project-icons/dimensions-icon.jpg" className="w-4 h-4" alt="" />
  <span className="text-[16px] leading-[20px] font-medium text-right">
  {proj.dimensions}
  </span>
  </div>

          {/* Row 2 - Unit Size */}
<div className="text-[15px] text-gray-600">
  {proj.unitSize?.trim() && (
    <>
      Unit Size :{" "}
      <span className="font-semibold text-[#383838]">
        {proj.unitSize}
      </span>
    </>
  )}
</div>

{/* Row 2 - Luxury Level */}
<div className="text-[15px] text-gray-600 text-right">
  {proj.luxuryLevel?.trim() && (
    <>
      Luxury Level :{" "}
      <span className="font-semibold text-[#383838]">
        {proj.luxuryLevel}
      </span>
    </>
  )}
</div>

        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-auto pt-5">
          <a 
            href={proj.projectUrl} 
            className="w-[220px] h-[42px] bg-[#362A82] text-white text-[16px] font-medium rounded-[4px] flex items-center justify-center transition-all hover:bg-opacity-90"
          >
            View Project Details
          </a>

          {proj.brochureUrl && (
            <a 
              href={proj.brochureUrl} 
              target="_blank" 
              className="w-[220px] h-[42px] bg-white border border-[#362A82] text-[#362A82] text-[16px] font-medium rounded-[4px] flex items-center justify-center gap-2 transition-all"
            >
              Download Brochure 
              <img src="/download.png" className="w-5.5 h-4.5" alt="" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};