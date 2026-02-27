"use client";
import { useState, useEffect, useRef, memo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

/* =========================
   Memoized Nav Link
========================= */
const NavLink = memo(({ link }: { link: { name: string; href: string } }) => (
  <Link
    href={link.href}
    className="h-[40px] flex items-center font-medium text-[16px] text-[#222222] px-[12px] transition-colors hover:text-[#362A82] whitespace-nowrap"
  >
    {link.name}
  </Link>
));
NavLink.displayName = "NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMedia, setShowMedia] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  /* =========================
     Auto Toggle Media/Blogs
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setShowMedia((prev) => !prev);
        setIsAnimating(false);
      }, 250); // timing sync with animation
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     Scroll Shadow
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     Modal Open Event
  ========================= */
  useEffect(() => {
    const handleEvent = () => setIsModalOpen(true);
    window.addEventListener("openEnquireModal", handleEvent);
    return () => window.removeEventListener("openEnquireModal", handleEvent);
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  /* =========================
     Static Data
  ========================= */
  const navLinks = useRef([
    { name: "About Us", href: "/about-ira" },
    { name: "Apartments", href: "/project/apartments" },
    { name: "Villas", href: "/project/villas" },
    { name: "Townships", href: "/project/townships" },
    { name: "Commercial", href: "/project/commercial" },
    { name: "Farms", href: "/project/farms" },
  ]).current;

  const projects = useRef([
    "Aspiration",
    "Miracle",
    "M3",
    "IRA - Elevate",
    "Aerocity",
    "Gateway Tower",
    "Farm Life",
    "IRA - The Square",
    "MOONGLADE",
    "IRA - By the Banks",
    "IRA - Urban Ranch",
    "IRA Ripples",
    "IRA Nilay",
  ]).current;

  return (
    <>
      {/* =========================
         Global Animation Styles
      ========================= */}
      <style jsx global>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }

        @keyframes slideOutUp {
          0% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .slide-in {
          animation: slideInUp 0.4s ease forwards;
        }

        .slide-out {
          animation: slideOutUp 0.4s ease forwards;
        }
      `}</style>

      {/* =========================
           NAVBAR
      ========================= */}
      <nav
        className={`fixed top-0 z-[100] w-full transition-all duration-300 antialiased font-sans ${
          isScrolled || isOpen ? "bg-white shadow-sm" : "bg-white/80"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-[61px] px-4 xl:px-[8%] flex items-center relative z-[110]">
          <div className="w-full h-full flex items-center justify-between px-[12px]">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[106px] h-[51px]">
                <Image
                  src="/images/Logo.png"
                  alt="Ira Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center flex-1 pr-6 xl:pr-0">
              <div className="flex items-center ml-[8%] xl:ml-[19%]">
                {navLinks.map((link) => (
                  <NavLink key={link.name} link={link} />
                ))}

                {/* Animated Media/Blogs */}
<div className="relative w-[100px] h-[40px] flex items-center">
  <Link
    href={showMedia ? "/media" : "/blogs"}
    className="relative w-full h-full flex items-center font-medium text-[16px] text-[#222222] px-[12px]"
  >
    {/* Media Text */}
    <span
      className={`absolute transition-opacity duration-300 ${
        showMedia ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      Media
    </span>

    {/* Blogs Text */}
    <span
      className={`absolute transition-opacity duration-300 ${
        !showMedia ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      Blogs
    </span>
  </Link>
</div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#362A82] text-white w-[114px] h-[40px] rounded-[6px] text-[14px] ml-auto active:scale-95"
              >
                Enquire Now
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 flex flex-col gap-[5px]"
            >
              <span className={`block w-[22px] h-[2px] bg-black ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
              <span className={`block w-[22px] h-[2px] bg-black ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-[22px] h-[2px] bg-black ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* =========================
           MODAL
      ========================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-[#EFF1FF] rounded-[4px] w-full max-w-[380px] p-6"
          >
            <div className="text-[#362A82] text-[20px] font-bold text-center mb-6 uppercase">
              ENQUIRE NOW
            </div>

            <select className="w-full mb-4 p-3 border rounded">
              <option>Select Project</option>
              {projects.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>

            <input className="w-full mb-4 p-3 border rounded" placeholder="Name" />
            <input className="w-full mb-4 p-3 border rounded" placeholder="Email" />
            <input className="w-full mb-4 p-3 border rounded" placeholder="Phone" />
            <textarea className="w-full mb-4 p-3 border rounded" placeholder="Message" />

            <div className="flex justify-between">
              <button onClick={() => setIsModalOpen(false)} className="border px-4 py-2">
                Cancel
              </button>
              <button className="bg-[#362A82] text-white px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}