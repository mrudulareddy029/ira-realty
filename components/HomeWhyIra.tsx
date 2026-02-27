"use client";

import React, { useEffect } from "react";

function stripHtml(html: string) {
  return html?.replace(/<[^>]*>/g, "").trim();
}

/**
 * Helper to force the last word of a string onto a new line
 */
const FormattedTitle = ({ title }: { title: string }) => {
  const words = title.split(" ");
  if (words.length <= 1) return <>{title}</>;

  const lastWord = words.pop();
  const leadingText = words.join(" ");

  return (
    <>
      {leadingText} <br className="hidden md:block" /> {lastWord}
    </>
  );
};

export default function HomeWhyIra({ data }: any) {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 300,
        once: false,
        easing: "ease-in-out",
      });
      AOS.refresh();
    };
    initAOS();
  }, []);

  if (!data) return null;

  return (
    <section className="bg-white pt-0 pb-10 md:pt-14 md:pb-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-[150px]">
        
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center md:text-left lg:pl-4">
          <h2
            className="text-[22px] md:text-[40px] font-medium text-[#362A82] uppercase tracking-[2px]"
            style={{ fontFamily: '"MADE Coachella", serif' }}
          >
            {data.title}
          </h2>
        </div>

        {/* Grid Container - Decreased gap from 8 to 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:pl-4">
          {data.section_card.map((item: any, index: number) => (
            <div
              key={index}
              data-aos="flip-left"
              /* Decreased padding from p-8 to p-6 for a tighter look */
              className="bg-white border border-gray-100 rounded-[20px] md:rounded-[15px] p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col h-full text-center md:text-left transition-all hover:shadow-md"
            >
              {/* Icon */}
              <div className="md:mx-0 mb-4 md:mb-6">
                <img
                  src={item.icon_url}
                  alt={item.title}
                  className=" object-contain"
                />
              </div>

              {/* Title - Logic to wrap last word */}
              <h3 className="text-[#2E2E2E] text-[18px] md:text-[26px] font-bold mb-3 md:mb-4 tracking-wide leading-tight">
                <FormattedTitle title={item.title} />
              </h3>

              {/* Description */}
              <p className="text-[#383838] text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] opacity-90">
                {stripHtml(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}