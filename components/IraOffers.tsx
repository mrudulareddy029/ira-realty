import React from 'react';

const offersData = [
  {
    id: 1,
    icon: "https://irarealty.in/cms/assets/icons/Join-the-revolution-icon1.jpg",
    description: (
      <>
        <b>High potential</b> real estate <b>assets</b> for value investors
      </>
    )
  },
  {
    id: 2,
    icon: "https://irarealty.in/cms/assets/icons/Join-the-revolution-icon2.jpg",
    description: (
      <>
        Diversified portfolio by offerings <b>investors-friendly deals</b> and <b>custom solutions</b>
      </>
    )
  },
  {
    id: 3,
    icon: "https://irarealty.in/cms/assets/icons/Join-the-revolution-icon3.jpg",
    description: (
      <>
        Transparent structure and a <b>secure transaction</b> procedure
      </>
    )
  },
  {
    id: 4,
    icon: "https://irarealty.in/cms/assets/icons/Join-the-revolution-icon4.jpg",
    description: (
      <>
        <b>Product offerings</b> based on <b>investment objectives</b>
      </>
    )
  }
];

export default function IraOffers() {
  return (
    <section className="py-[60px] bg-white">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 
            className="text-[28px] md:text-[32px] font-bold text-[#362A82] uppercase"
            style={{ fontFamily: 'var(--font-times), serif' }}
          >
            WHAT IRA OFFERS TO INVESTORS
          </h1>
        </div>

        {/* Grid Container */}
        <div className="flex flex-wrap -mx-[15px]">
          {offersData.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4 px-[15px] mb-8 lg:mb-0">
              <div className="flex flex-col items-center text-center h-full">
                
                {/* Icon Box */}
                <div className="mb-4 flex items-center justify-center h-[80px]">
                  <img 
                    src={item.icon} 
                    alt="offer-icon" 
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                {/* Description */}
                <span className="text-[#383838] text-[15px] leading-[24px]">
                  {item.description}
                </span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}