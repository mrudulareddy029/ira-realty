"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HomeGlimpse({ data }: any) {
  if (!data) return null;

  return (
    /* Added pt-12 (top padding) and pb-10 (bottom padding) for mobile */
    /* lg:pt-0 and lg:pb-0 reset these for desktop where margins handle the spacing */
    <section className="bg-white px-3 pt-12 pb-10 lg:pt-0 lg:pb-0 lg:mt-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[150px] ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[570px] lg:flex-none pt-6 lg:pl-5">
            {/* Removed lg:h-[500px] fixed height to prevent spacing issues on mobile */}
            <div className="flex flex-col justify-center text-center lg:text-left lg:pr-[24px]">

             <h3
  className="text-[#362A82] text-3xl md:text-4xl lg:text-[40px] font-bold uppercase mb-6 md:mb-8 leading-tight"
  style={{ fontFamily: "var(--font-times), serif" }}
>
  {data.title?.replace(/IRA/i, "").trim()}
  <br />
  IRA
</h3>

              {/* Removed fixed h-[244px] to allow height to adjust based on text length */}
              <div className="max-w-[500px] lg:max-w-[453px] mx-auto lg:mx-0">
                <p className="text-gray-500 text-[14px] sm:text-[16px] leading-[26px] font-normal">
                  {data.description}
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:pl-10 lg:-mr-[40px] ">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[110%] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-contain bg-no-repeat bg-center "
            
              style={{
                backgroundImage: `url('${data.image_url}')`,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}