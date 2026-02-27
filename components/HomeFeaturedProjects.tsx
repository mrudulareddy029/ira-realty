"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function stripHtml(input: string) {
  if (!input) return "";
  return input.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function normalizeFeaturedProjects(section3: any, selectedLocation: string) {
  const cards = section3?.section_card ?? [];

  const selectedCard =
    cards.find(
      (c: any) =>
        (c.location || "").toLowerCase() === selectedLocation.toLowerCase()
    ) || cards[0];

  const categories = selectedCard?.category ?? [];
  const result: Record<string, any[]> = {};

  for (const cat of categories) {
    const categoryName = cat.category_name || cat.title;
    const projects = cat.projects ?? [];

    result[categoryName] = projects.map((p: any) => ({
      id: p.slug || p.project_id,
      title: p.title || "",
      location: p.location || "",
      specs: p.smalldescription || "",
      description: stripHtml(p.description || ""),
      image: p.image_url || "",
      link:
        p.slug === "aspiration"
          ? "https://aspiration.irarealty.in/"
          : p.slug
          ? `/project/${p.slug}`
          : "#",
    }));
  }

  return result;
}

export default function FeaturedProjects({ data }: { data: any }) {
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [projectsData, setProjectsData] =
    useState<Record<string, any[]> | null>(null);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeProject, setActiveProject] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // INIT LOCATIONS
  useEffect(() => {
    if (!data?.section_card) return;
    const locs = data.section_card.map((c: any) => c.location);
    setLocations(locs);
    if (locs.length > 0) setSelectedLocation(locs[0]);
  }, [data]);

  // NORMALIZE DATA
  useEffect(() => {
    if (!selectedLocation || !data) return;

    const normalized = normalizeFeaturedProjects(data, selectedLocation);
    const categoryKeys = Object.keys(normalized);

    if (categoryKeys.length > 0) {
      const firstCat = categoryKeys[0];
      setProjectsData(normalized);
      setActiveCategory(firstCat);
      setActiveProject(normalized[firstCat][0] || null);
    } else {
      setProjectsData({});
      setActiveProject(null);
    }
  }, [selectedLocation, data]);

  if (!projectsData) return null;

  return (
    <section className="bg-white pt-10 pb-4 md:pt-16 md:pb-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[150px]">
        
        {/* HEADER */}
        <div className="mb-8 lg:mb-12 lg:pl-4">
          <h2
            className="text-[28px] md:text-[40px] font-bold text-[#362A82] uppercase"
            style={{ fontFamily: "serif" }}
          >
            {data.title}
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-stretch lg:pl-4">
          
          {/* SIDEBAR */}
          <div className="w-full bg-[#f3815c33] pt-8 pb-[30px] px-6 md:px-[35px] rounded-lg flex flex-col h-full">
            
            {/* Dropdown */}
            <div className="relative mb-6">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center bg-white text-black w-full py-3 px-4 rounded-lg "
              >
                <span className="truncate">{selectedLocation}</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white  rounded-md  z-30">
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-[#362A82] hover:text-white cursor-pointer"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-9 flex-grow overflow-y-auto">
              {Object.keys(projectsData).map((cat) => (
                <div key={cat} className="pb-4 border-b border-[#D9CFC8]">
                  <h3
                    onClick={() => {
                      setActiveCategory(activeCategory === cat ? "" : cat);
                      if (activeCategory !== cat)
                        setActiveProject(projectsData[cat][0]);
                    }}
                    className={`cursor-pointer text-[20px] md:text-[30px] font-medium uppercase ${
                      activeCategory === cat
                        ? "text-[#362A82]"
                        : "text-[#D1D1D1]"
                    }`}
                  >
                    {cat}
                  </h3>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeCategory === cat
                        ? "max-h-[500px] mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-1 space-y-2">
                      {projectsData[cat].map((proj) => (
                        <p
                          key={proj.id}
                          onClick={() => setActiveProject(proj)}
                          className={`cursor-pointer text-[15px] md:text-[18px] ${
                            activeProject?.id === proj.id ? "font-bold" : ""
                          }`}
                        >
                          {proj.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col relative h-full">
            {activeProject ? (
              <>
                {/* RESPONSIVE IMAGE */}
                <div
                  className="relative w-full max-w-[831px] 
                             h-[300px] sm:h-[420px] md:h-[520px] lg:h-[615px] 
                             rounded-xl overflow-hidden"
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 831px"
                    priority
                  />
                </div>

                {/* INFO CARD */}
                <div className="relative lg:absolute lg:top-0 lg:left-0 w-full lg:w-[340px] bg-[#FFC107] p-6 md:p-8 shadow-2xl z-20 mt-[-20px] lg:mt-0 rounded-xl">
                  <h4 className="text-[#303030] text-[20px] font-bold uppercase">
                    {activeProject.title}
                  </h4>

                  <p className="text-[#303030] text-[16px]">
                    {activeProject.location}
                  </p>

                  <p className="text-[#303030] text-[16px]">
                    {activeProject.specs}
                  </p>

                  <p className="text-[#303030] text-[15px] leading-relaxed">
                    {activeProject.description}
                  </p>

                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block bg-[#362A82] text-white px-4 py-2 rounded-sm text-[13px] uppercase tracking-widest hover:bg-[#2a1f63]"
                  >
                    Enquire Now
                  </a>
                </div>
              </>
            ) : (
              <div className="flex-grow flex items-center justify-center bg-gray-50 text-gray-400 rounded-lg border-2 border-dashed">
                Select a project to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}