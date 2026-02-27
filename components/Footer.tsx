"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] pt-10 pb-6 overflow-hidden font-sans">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className="flex flex-wrap -mx-[15px] lg:pl-24">
          
          {/* --- 1. CONTACT --- */}
          <div className="order-1 lg:order-1 w-full md:w-4/12 lg:w-3/12 px-[15px] mb-[30px] ">
            <h3 className="text-[#444] text-[14px] font-bold mb-4 uppercase tracking-wider">CONTACT</h3>
            <div className="text-[13px] leading-[24px] text-[#585858]">
              <p><strong>Email:</strong> <a href="mailto:info@irarealty.in" className="hover:text-[#362A82] transition-colors" style={{ color: 'rgb(56, 56, 56)' }}>info@irarealty.in</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919121777777" className="hover:text-[#362A82] transition-colors" style={{ color: 'rgb(56, 56, 56)' }}>+91 9121777777</a></p>
              <p className="mt-1"><strong>Location: </strong>IRA Realty Tech Pvt.Ltd,</p>
              <p><strong>H.No: </strong>4-49/2,</p>
              <p className="pt-2">Besides Anvaya Conventions Rd,</p>
              <p>Financial District, Vattinaguapally,</p>
              <p>Hyderabad, Telangana 500032</p>
            </div>

            <h3 className="text-[#444] text-[14px] font-bold mt-6 mb-4 uppercase tracking-wider">For USA & Canada Enquiries</h3>
            <div className="text-[13px] leading-[24px] text-[#585858]">
              <p><strong>Email:</strong> <a href="mailto:Sales.USA@irarealty.in" className="hover:text-[#362A82] transition-colors" style={{ color: 'rgb(56, 56, 56)' }}>Sales.USA@irarealty.in</a></p>
              <p><strong>Phone:</strong> <a href="tel:+1-904-504-1822" className="hover:text-[#362A82] transition-colors" style={{ color: 'rgb(56, 56, 56)' }}>+1-904-504-1822</a></p>
            </div>
          </div>

          {/* --- 2. PROJECTS --- */}
          <div className="order-2 lg:order-2 w-1/2 md:w-3/12 lg:w-2/12 px-[15px] mb-[30px]">
            <h3 className="text-[#444] text-[14px] font-bold mb-4 uppercase tracking-wider">PROJECTS</h3>
            <div className="text-[13px] leading-[28px] text-[#585858] flex flex-col">
              <a href="/project/apartments" className="hover:text-[#362A82] transition-colors">Apartments</a>
              <a href="/project/villas" className="hover:text-[#362A82] transition-colors">Villas</a>
              <a href="/project/townships" className="hover:text-[#362A82] transition-colors">Townships</a>
              <a href="/project/commercial" className="hover:text-[#362A82] transition-colors">Commercial</a>
              <a href="/project/farms" className="hover:text-[#362A82] transition-colors">Farms</a>
            </div>
          </div>

          {/* --- 3. IRA REALTY --- */}
          <div className="order-3 lg:order-3 w-1/2 md:w-3/12 lg:w-2/12 px-[15px] mb-[30px]">
            <h3 className="text-[#444] text-[14px] font-bold mb-4 uppercase tracking-wider">IRA REALTY</h3>
            <div className="text-[13px] leading-[28px] text-[#585858] flex flex-col">
              <a href="/about-ira" className="hover:text-[#362A82] transition-colors">About IRA</a>
              <a href="/join-the-revolution" className="hover:text-[#362A82] transition-colors">Brand Story</a>
              <div className="cursor-pointer hover:text-[#362A82] transition-colors">CP Registration</div>
              <a href="/career" className="hover:text-[#362A82] transition-colors">Careers</a>
            </div>
          </div>

          {/* --- 4. RESOURCES --- */}
          <div className="order-4 lg:order-4 w-1/2 md:w-2/12 lg:w-2/12 px-[15px] mb-[30px]">
            <h3 className="text-[#444] text-[14px] font-bold mb-4 uppercase tracking-wider">RESOURCES</h3>
            <div className="text-[13px] leading-[28px] text-[#585858] flex flex-col">
              <a href="/blogs" className="hover:text-[#362A82] transition-colors">Blogs</a>
              <a href="/media" className="hover:text-[#362A82] transition-colors">Media</a>
            </div>
          </div>

         {/* --- 5. ENQUIRE NOW --- */}
<div className="order-5 md:order-5 lg:order-5 w-full md:w-full lg:w-3/12 px-[15px] mb-[30px]">
  <h3 className="text-[#444] text-[14px] font-bold mb-4 uppercase tracking-wider">ENQUIRE NOW</h3>
  <div className="bg-[#ecedf3] w-[250px] h-[490px] p-6 rounded-[4px] shadow-sm">
    
    <div className="space-y-3">
      {/* Select Box - Matches bg-white */}
      <select className="w-full h-[38px] px-3 border border-gray-300 rounded text-[13px] bg-white text-[#444] focus:outline-none focus:ring-1 focus:ring-[#362A82] appearance-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`, 
          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '16px 12px' 
        }}>
        <option value="">Select Project</option>
        <option value="Aspiration">Aspiration</option>
        <option value="Miracle">Miracle</option>
        <option value="Miracle">M3</option>
        <option value="Miracle">IRA - Elevate</option>
        <option value="Miracle">Gateway Tower</option>
        <option value="Miracle">IRA - The Square</option>
        <option value="Miracle">MOONGLADE</option>
        <option value="Miracle">IRA - By The Banks</option>
        <option value="Miracle">IRA - Urban Ranch </option>
        <option value="Miracle">IRA Ripples </option>
        <option value="Miracle">IRA Nilay </option>
      </select>
      
      {/* Name - Added bg-white */}
      <input type="text" placeholder="Name" className="w-full h-[38px] px-3 border border-gray-300 rounded text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[#362A82]" />
      
      {/* Email - Added bg-white */}
      <input type="email" placeholder="Email" className="w-full h-[38px] px-3 border border-gray-300 rounded text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[#362A82]" />
      
      <div className="flex h-[38px] w-full">
  {/* Added flex-shrink-0 to prevent the flag area from getting squeezed */}
  <div className="relative flex flex-shrink-0 items-center gap-1 border border-gray-300 px-2 bg-white rounded-l border-r-0 min-w-[75px]">
    <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" alt="IN" className="w-5" />
    <span className="text-[10px] text-gray-400">▼</span>
    <span className="text-[13px] text-gray-600 pl-1 font-medium">+91</span>
  </div>

  {/* Added flex-1 and min-w-0 to force the input to stay inside the box */}
  <input 
    type="tel" 
    placeholder="Phone Number" 
    className="flex-1 min-w-0 px-3 border border-gray-300 rounded-r text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[#362A82]" 
  />
</div>
      
      {/* Message - Added bg-white */}
      <textarea placeholder="Message" className="w-full h-[60px] p-3 border border-gray-300 rounded text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[#362A82] resize-none" />
      
      <p className="text-[10.5px] leading-[1.4] text-[#444] pt-1 opacity-80">
        I authorize IRA Realty Tech Pvt Ltd and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC / NDNC
      </p>
      
      <button className="w-full h-[40px] bg-[#9e98bc] text-white font-bold uppercase text-[13px] rounded transition-all hover:bg-[#362A82]">
        Submit
      </button>
    </div>
  </div>
</div>

            </div>
          </div>
          {/* --- SOCIAL MEDIA ICONS (CENTERED) --- */}
<div className="w-full flex justify-center items-center gap-10 mt-10 mb-6 text-[#362A82]">
  <a href="https://www.facebook.com/IRARealtyIndia" target="_blank" rel="noreferrer" className="hover:text-[#BA934B] transition-all">
    <svg viewBox="0 0 320 512" className="w-7 h-7 fill-current">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
  </a>

  <a href="https://twitter.com/irarealtyindia" target="_blank" rel="noreferrer" className="hover:text-[#BA934B] transition-all">
    <svg viewBox="0 0 16 16" className="w-7 h-7 fill-current">
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
    </svg>
  </a>

  <a href="https://www.linkedin.com/company/irarealtyindia" target="_blank" rel="noreferrer" className="hover:text-[#BA934B] transition-all">
    <svg viewBox="0 0 448 512" className="w-7 h-7 fill-current">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
    </svg>
  </a>

  <a href="https://www.youtube.com/channel/UC7fWHYHpQhJzFTjtEBchDuQ" target="_blank" rel="noreferrer" className="hover:text-[#BA934B] transition-all">
    <svg viewBox="0 0 16 16" className="w-7 h-7 fill-current">
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
    </svg>
  </a>

  <a href="https://www.instagram.com/irarealtyindia/" target="_blank" rel="noreferrer" className="hover:text-[#BA934B] transition-all">
    <svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth="0"
  viewBox="0 0 1024 1024"
  className="w-7 h-7 text-[#362A82] hover:text-[#BA934B] transition-all"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
</svg>
  </a>
</div>
          
       
      
    </footer>
  );
}