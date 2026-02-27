"use client";

import { useState, useEffect, use } from "react";
import ProjectHeroForAll from "@/components/ProjectHeroForAll";
import ProjectInfoBarForAll from "@/components/ProjectInfoBarForAll";
import ProjectGridForAll from "@/components/ProjectGridForAll";
import { notFound } from "next/navigation";

export default function ProjectTemplate({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // ✅ IMPORTANT FIX FOR FARMS
        const apiSlug = slug === "farms" ? "farm" : slug;

        const res = await fetch(
          `https://irarealty.in/cms/api/Project/getCategoryDetail/${apiSlug}`
        );

        if (!res.ok) {
          console.error("API failed with status:", res.status);
          setLoading(false);
          return;
        }

        const json = await res.json();

        if (json.status !== "success") {
          console.error("API returned error");
          setLoading(false);
          return;
        }

        setData(json.category_detail);

        // ✅ Safe default location
        if (json.category_detail?.location_list?.length > 0) {
          setSelectedLocationId(
            json.category_detail.location_list[0].location_id
          );
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  // ✅ Loading state
  if (loading) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  // ✅ If API failed completely
  if (!data) {
    return notFound();
  }

  const selectedCityName =
    data.location_list?.find(
      (loc: any) => loc.location_id === selectedLocationId
    )?.location_name || "";

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <ProjectHeroForAll
        title={data.category_name}
        description={data.description}
        imageSrc={data.bg_image}
      />

      {/* INFO BAR */}
      <ProjectInfoBarForAll
        location={data.key_points?.[0]?.message || ""}
        sizeInfo={data.key_points?.[1]?.message || ""}
      />

      {/* PROJECT SECTION */}
      <section className="max-w-[1898px] mx-auto mt-12 md:mt-[74px] px-4 md:px-6">
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
          
          <h2 className="text-2xl md:text-3xl xl:text-[40px] text-primary uppercase"  style={{ fontFamily: "var(--font-times), serif" }}>
            PROJECTS IN {selectedCityName}
          </h2>

          {/* Dropdown */}
          <div className="relative inline-block w-full md:w-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border px-6 py-2.5 rounded-lg bg-white"
            >
              {selectedCityName}
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg z-50">
                <ul>
                  {data.location_list?.map((loc: any) => (
                    <li
                      key={loc.location_id}
                      className="px-6 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedLocationId(loc.location_id);
                        setIsOpen(false);
                      }}
                    >
                      {loc.location_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="max-w-[1140px] mx-auto">
          <ProjectGridForAll
            projects={data.section_card || []}
            locationId={selectedLocationId}
            category={slug}
          />
        </div>
      </section>
    </main>
  );
}