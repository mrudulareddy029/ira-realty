import React from 'react';

export default function JoinTheRevolutionPage() {
  return (
    <main className="w-full bg-white">
      
      {/* --- HERO SECTION (from your HTML) --- */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://irarealty.in/cms/assets/uploads/121592830c41ff1f959d2999338eb28d.jpg" 
          alt="blogs-background-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Overlay (Essential for text readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content (child2) */}
        <div className="relative z-10 container mx-auto px-[15px] text-center">
          <h1 
            className="text-white text-[32px] md:text-[56px] font-bold uppercase tracking-wider mb-2 md:mb-4 drop-shadow-md"
            style={{ fontFamily: 'var(--font-times), serif' }}
          >
            GROW WITH IRA
          </h1>
          <h3 
            className="text-white text-[14px] md:text-[20px] font-medium uppercase tracking-wide max-w-[800px] mx-auto drop-shadow-md"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            A REVOLUTIONARY IDEA TO GROW YOUR INVESTMENT WITH IRA
          </h3>
        </div>
      </div>

      {/* --- CONTENT SECTION (Paragraphs & Details) --- */}
      <section className="py-[60px] md:py-[80px]">
        <div className="mx-auto max-w-[1000px] px-[15px]">
          
          {/* Main Paragraph */}
          <div className="mb-8 text-center">
            <h2 className="text-[#362A82] text-[24px] md:text-[32px] font-bold mb-6">
              Invest in the Future
            </h2>
            <p className="text-[#383838] text-[16px] md:text-[18px] leading-[1.8] text-justify md:text-center">
              We believe what we did yesterday is not enough for tomorrow. As a customer, your real investment should not be restricted to just the apartment, plot, or property. With IRA Realty, you get a share in the company too.
            </p>
          </div>

          {/* Placeholder for Additional Paragraphs - Paste your extra content here */}
          <div className="space-y-6 text-[#555] text-[15px] md:text-[16px] leading-[1.8] text-justify">
             <p>
               At IRA Realty, we are redefining the real estate landscape by offering opportunities that go beyond traditional ownership. Our revolutionary model ensures that as we grow, our stakeholders and customers grow with us.
             </p>
             <p>
               Transparency, integrity, and innovation are the pillars of our revolution. We invite you to be a part of this journey, securing not just a home, but a future that appreciates in value and community spirit.
             </p>
          </div>

        </div>
      </section>

    </main>
  );
}