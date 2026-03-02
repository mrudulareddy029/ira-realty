"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";

interface MediaItem {
  media_id: number;
  description: string;
  sub_description: string;
  backgroud_image: string;
  redirect_url: string;
  date: string;
  language: string;
}

export default function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const [header, setHeader] = useState({
    title: "MEDIA",
    subtitle:
      "STAY UP-TO-DATE WITH THE LATEST NEWS, STORIES AND HAPPENINGS FROM IRA REALTY",
    img_url:
      "https://irarealty.in/cms/assets/uploads/97b61475b8bab3773df0b2aedaf3aba4.jpg",
  });

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch(
          "https://irarealty.in/cms/api/getMediaDetails",
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("API did not return JSON");
        }

        const data = await res.json();

        setMedia(data?.header?.section2?.media || []);

        setHeader({
          title: data?.header?.section1?.title || "MEDIA",
          subtitle:
            data?.header?.section1?.description ||
            "STAY UP-TO-DATE WITH THE LATEST NEWS, STORIES AND HAPPENINGS FROM IRA REALTY",
          img_url:
            data?.header?.section1?.img_url ||
            "https://irarealty.in/cms/assets/uploads/97b61475b8bab3773df0b2aedaf3aba4.jpg",
        });
      } catch (err) {
        console.error("Media Fetch Error:", err);
        setMedia([]); // prevents crash
      }
    };

    fetchMedia();
  }, []);

  // Filter logic
  const filteredMedia =
    selectedLanguage === "All"
      ? media
      : media.filter(
          (item) =>
            item.language?.toLowerCase() ===
            selectedLanguage.toLowerCase()
        );

  return (
    <div className="bg-white">
      <HeroSection
        title={header.title}
        description={header.subtitle}
        bgImage={header.img_url}
      />

      <div className="max-w-[1140px] mx-auto px-6 py-10 lg:py-16">
        {/* Heading + Dropdown Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-6">
          <h2
            className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#362A82] uppercase ml-0 md:ml-10 lg:ml-34"
            style={{
              fontFamily: "var(--font-times), serif",
              letterSpacing: "2px",
            }}
          >
            FEATURED MEDIA
          </h2>

          {/* Language Dropdown */}
          <div className="relative inline-block w-full sm:w-[110px] md:mr-4 lg:mr-32">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded-lg px-4 pr-10 py-2 text-[15px] md:text-[17px] bg-white focus:outline-none focus:ring-1 focus:ring-[#03b2cb] cursor-pointer"
            >
              <option value="All">All</option>
              <option value="English">English</option>
              <option value="Telugu">Telugu</option>
            </select>

            <ChevronDown
              size={22}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
            />
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {filteredMedia.map((item) => (
            <a
              key={item.media_id}
              href={item.redirect_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="relative aspect-[356/292] bg-white overflow-hidden">
                <img
                  src={item.backgroud_image}
                  alt={item.description}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#6c757d]/80 flex flex-col items-start justify-end text-left p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-[13px] md:text-normal font-normal leading-tight ">
                    {item.description}
                  </p>

                  {item.sub_description && (
                    <p className="text-white/80 text-[14px] ">
                      {item.sub_description}
                    </p>
                  )}

                  <p className="text-white/80 text-[14px] mb-1 ">
                    {item.date}
                  </p>

                  <span className="px-6 py-2 bg-[#362a82] text-white text-[14px] font-normal rounded tracking-wider">
                    View Article
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No media items found for the selected language.
          </div>
        )}
      </div>
    </div>
  );
}