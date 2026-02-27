import React from "react";
import Image from "next/image";

export default function About({ data }: { data: any }) {
  if (!data?.aboutTitle) return null;

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-xl mt-7 lg:mt-0">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-serif font-bold text-[#362A82] uppercase leading-tight mb-2"
            style={{ fontFamily: "var(--font-times), serif",
            letterSpacing: "1.5px"
           }}>
              {data.aboutTitle}
            </h2>

            {!!data?.aboutDescription && (
              <div
                className="text-black/45 text-[15px] md:text-[15px] leading-[1.8] mb-4 font-medium"
                style={{letterSpacing: "0.2px"}}
                dangerouslySetInnerHTML={{ __html: data.aboutDescription }}
              />
            )}

            {data?.brochureUrl && (
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={data.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#362a82] text-white px-5 py-2 rounded-md transition-all text-[16px] font-normal tracking-wide shadow-md"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                  Download Brochure
                </a>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2">
            {!!data?.aboutImage && (
             <div className="relative overflow-hidden group">
                <div className="relative w-[436px] h-[245px] mx-auto">
                  
                  
                  <Image
                    src={data.aboutImage}
                    alt={data.aboutTitle || "About Project"}
                    fill
                    className="object-content transform transition-transform duration-1000 object-cover rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                   
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
