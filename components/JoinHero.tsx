import React from 'react';

export default function JoinHero() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://irarealty.in/cms/assets/uploads/121592830c41ff1f959d2999338eb28d.jpg')` 
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 
          className="text-white text-[36px] md:text-[56px] font-bold uppercase tracking-wider mb-4"
          style={{ fontFamily: 'var(--font-times), serif' }}
        >
          GROW WITH IRA
        </h1>
        <h3 
          className="text-white text-[14px] md:text-[20px] font-medium uppercase tracking-wide max-w-[800px] mx-auto"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          A REVOLUTIONARY IDEA TO GROW YOUR INVESTMENT WITH IRA
        </h3>
      </div>
    </div>
  );
}