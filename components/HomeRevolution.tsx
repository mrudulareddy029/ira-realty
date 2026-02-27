import React from "react";

export default function HomeRevolution({ data }: any) {
  if (!data) return null;

  // Cleaning HTML if it's coming from a CMS with tags
  const cleanDescription = data.description?.replace(/<[^>]*>/g, "") || "";

  return (
    <section className="bg-white pb-8 pt-2">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[150px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT CONTENT - Controlled width for identical text wrapping */}
          <div className="w-full lg:w-[55%] lg:pl-4">
            <div className="max-w-[520px] "> {/* This forces the breaks seen in the image */}
              <h2
                className="text-[#362A82] font-bold uppercase mb-5 text-[34px] md:text-[40px] leading-[1.1]"
                style={{
                  fontFamily: '"MADE Coachella", serif',
                  letterSpacing: "2px",
                }}
              >
                {data.title || "Join the Revolution"}
              </h2>

              <p className="text-[#383838] italic text-[18px] font-bold max-w-[420px] leading-[1.6] mb-8">
                "{data.sub_title}"
              </p>

              <p className="text-[14px] leading-[24px]  text-[15px] text-[#585858] mb-10 tracking-wide max-w-[480px]">
                {cleanDescription}
              </p>

              <a
                href={data.redirect_url}
                className="inline-flex items-center group text-[#362A82] font-normal  text-[16px]  pb-1 hover:text-[#4c3ba1] hover:border-[#4c3ba1] transition-all"
              >
                <span>Read More</span>
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
  </svg>
</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE & CAPTION */}
          <div className="w-full lg:w-[45%] flex flex-col items-center">
            <div className="relative w-full max-w-[520px] ">
              <img
                className="w-full h-auto object-contain"
                src={data.image_url}
                alt={data.title}
              />
              
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}