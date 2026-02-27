import React from 'react';

export default function JoinContent() {
  return (
    <section className="py-[60px] md:py-[80px]">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className="flex flex-wrap items-center -mx-[15px]">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-1/2 px-[15px] mb-10 lg:mb-0">
            <h1 
              className="text-[32px] md:text-[40px] font-bold text-[#362A82] uppercase mb-6"
              style={{ fontFamily: 'var(--font-times), serif' }}
            >
              JOIN THE REVOLUTION
            </h1>
            
            <div className="text-[#383838] text-[16px] leading-[28px] font-normal space-y-6 text-justify lg:text-left font-poppins">
              <p>
                We believe what we did yesterday is not enough for tomorrow. As a customer, 
                your real investment should not be restricted to just the apartment, plot or property. 
                With IRA Realty, you get a share in the company too.
              </p>
              <p>
                Investor Realty Army, what you know as IRA, aims to create a community of equal 
                individuals who live together and grow together as part of a revolutionary movement 
                that disrupts the norm. When you pick IRA, you become part of our army. You don't 
                just get your dream house, you get a part of IRA's shares along with it.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: GIF Image */}
          <div className="w-full lg:w-1/2 px-[15px]">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/about/join-revolution.gif" 
                alt="Join the Revolution"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}