import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyBar from "@/components/PrivacyBar";

const poppins = localFont({
  src: "../fonts/poppins-v24-latin-regular.woff2",
  variable: "--font-poppins",
});

const timesNewRoman = localFont({
  src: [
    { path: "../fonts/times.woff2", weight: "400", style: "normal" },
    { path: "../fonts/timesbd.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-times",
});

// ✅ ADDING MADE COACHELLA HERE
const coachella = localFont({
  src: [
    { path: "../fonts/MADE Coachella Regular PERSONAL USE.otf", weight: "400", style: "normal" },
    { path: "../fonts/MADE Coachella Medium PERSONAL USE.otf", weight: "500", style: "normal" },
    { path: "../fonts/MADE Coachella Bold PERSONAL USE.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-coachella",
});

export const metadata: Metadata = {
  title: "IRA Realty - Real Estate & Construction Company in Hyderabad",
  description: "Real Estate & Construction Company in Hyderabad",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* ✅ Added coachella.variable to the body class */}
      <body className={`${poppins.variable} ${timesNewRoman.variable} ${coachella.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer/>
        <PrivacyBar/>
      </body>
    </html>
  );
}