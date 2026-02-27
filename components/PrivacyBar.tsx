"use client";
import React from 'react';

export default function PrivacyBar() {
  return (
    <div className="w-full bg-white border-t border-gray-200 py-3">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#383838]">
          
          {/* Left Side: Policies */}
          <div className="mb-2 md:mb-0 space-x-1 flex flex-wrap justify-center md:justify-start">
            <a href="/privacy-policy" className="hover:text-[#362A82] transition-colors decoration-transparent">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-and-conditions" className="hover:text-[#362A82] transition-colors decoration-transparent">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/refund-and-cancelation-conditions" className="hover:text-[#362A82] transition-colors decoration-transparent">
              Refund & Cancellation Policy
            </a>
          </div>

          {/* Right Side: Powered By */}
          <div>
            <p>
              Powered By{' '}
              <strong>
                <a 
                  href="https://www.irax.in/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#FF9933] hover:underline decoration-transparent"
                >
                  Irax
                </a>
              </strong>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}