import React from 'react';

const Revolution = () => {
  return (
    <section className="homeRevolution w-full flex justify-center bg-white overflow-hidden py-16">
      {/* Main Container: 1116px content width
          Margins: 150px Left and Right for 1440px screens
      */}
      <div 
        className="about_welcome section_margin flex flex-col lg:flex-row items-center"
        style={{ 
          width: '1116px', 
          marginLeft: '150px', 
          marginRight: '150px',
          boxSizing: 'border-box'
        }}
      >
        {/* Left Column: Text Content (col-lg-6) */}
        <div className="welcome_head_description w-full lg:w-1/2 pr-0 lg:pr-12">
          {/* Heading: 40px font-size and 49.2px line-height */}
          <h1 
            className="welcome_header text-[#362A82] font-bold uppercase mb-6"
            style={{ 
              fontFamily: '"MADE Coachella", serif',
              fontSize: '40px',
              lineHeight: '49.2px',
              letterSpacing: '1.76px'
            }}
          >
            JOIN THE REVOLUTION
          </h1>

          {/* Intro Description */}
          <div className="welcome_decription pb-4 join_revolution">
            <p className="text-[14px] leading-[27px] text-[#383838] mb-4" style={{ fontFamily: 'Poppins' }}>
              We believe what we did yesterday is not enough for tomorrow. As a customer, 
              your real investment should not be restricted to just the apartment, plot or property. 
              With IRA Realty, you get a share in the company too.
            </p>
          </div>

          {/* Main Content Body */}
          <div className="welcome_decription pb-4 join_revolution_data">
            <p className="text-[14px] leading-[27px] text-[#383838] mb-4" style={{ fontFamily: 'Poppins' }}>
              Investor Realty Army, what you know as IRA, aim to create a community of equal 
              individuals who live together and grow together as part of a revolutionary movement 
              that disrupts the norm. 
            </p>
            <p className="text-[14px] leading-[27px] text-[#383838]" style={{ fontFamily: 'Poppins' }}>
              When you pick IRA, you become part of our army. You don't just get your dream house, 
              you get a part of IRA's shares along with it.
            </p>
          </div>
        </div>

        {/* Right Column: Image/GIF Content (col-lg-6) */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <img 
              className="welcome_ira_img w-full h-auto object-cover" 
              src="https://irarealty.in/cms/assets/uploads/f8bef7b6bc99ba95530bb18557493351.gif" 
              alt="Join the Revolution" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;