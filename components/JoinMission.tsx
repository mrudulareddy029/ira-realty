"use client"; // <--- 1. Essential for onClick to work
import React from 'react';

export default function JoinMission() {
  
  // --- 2. THIS IS THE MISSING FUNCTION ---
  const handleOpenModal = () => {
    // This broadcasts the message to the Navbar to open the modal
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openEnquireModal'));
    }
  };

  return (
    // mt-[80px] matches your box model margin
    // bg-[#F3815C]/10 creates the peach background
    <section className="mt-[80px] py-[60px] bg-[#F3815C]/10">
      <div className="mx-auto max-w-[1000px] px-[15px] text-center">
        
        {/* Description Text */}
        <div className="mb-8">
          <p className="text-[#383838] text-[16px] md:text-[18px] leading-[1.8] font-normal font-poppins">
            Our common goal is prosperity backed by good intentions to break away from a 
            capitalistic society and move towards development for all. We are set on our path 
            to create a new reality for the industry by coming up with simple solutions to 
            complex problems, and as you join us on this path, you are now the revolution!
          </p>
        </div>

        {/* Tagline */}
        <p className="text-[#362A82] text-[20px] md:text-[24px] font-bold italic mb-8 font-times">
          “So as we grow, you grow too.”
        </p>

        {/* Join Button */}
        <div>
          <button 
            type="button" 
            onClick={handleOpenModal} // <--- Now this works because the function exists above
            className="bg-[#362A82] text-white text-[16px] font-bold px-8 py-3 rounded hover:bg-[#2a2066] transition-colors duration-300 shadow-md"
          >
            Join IRA Today
          </button>
        </div>

      </div>
    </section>
  );
}