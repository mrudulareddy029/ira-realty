"use client"; 

import React from 'react';

interface InfoBarProps {
  location: string;
  sizeInfo?: string;
}

const ProjectInfoBarForAll = ({ location, sizeInfo }: InfoBarProps) => {
  const hasSize = sizeInfo && sizeInfo.trim() !== "";

  return (
    <div className="relative z-30 w-full flex justify-center px-4 font-poppins">
      <div 
        className="bg-white shadow-xl rounded-lg -mt-[48px] overflow-hidden flex items-center w-full md:max-w-[90%] lg:max-w-[59%]"
        style={{ 
          minHeight: '96px',
          height: 'auto',
          padding: '0px'
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-6 md:gap-12 lg:gap-16 xl:gap-22 py-6 md:py-0 px-6">
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <img 
                src="https://irarealty.in/cms/assets/icons/category-icon1.jpg" 
                alt="Location Icon" 
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-[#212529] font-normal text-[15px] md:text-[16px] tracking-tight">
              {location}
            </span>
          </div>

          {hasSize && (
            <>
              <div className="w-20 h-[1px] md:w-[1px] md:h-10" />

              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://irarealty.in/cms/assets/icons/category-icon2.jpg" 
                    alt="Size Icon" 
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-[#212529] font-normal text-[14px] md:text-[15px] text-center md:text-left leading-tight whitespace-pre-line">
                  {sizeInfo}
                </span>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectInfoBarForAll;