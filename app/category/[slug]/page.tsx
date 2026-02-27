import React from "react";
import { notFound } from "next/navigation";

import Hero from "@/components/eachpage/Hero";
import Highlights from "@/components/eachpage/Highlights";
import Plans from "@/components/eachpage/Plans";
import About from "@/components/eachpage/About";
import LiveProgress from "@/components/eachpage/LiveProgress";
import Amenities from "@/components/eachpage/Amenities";
import Specifications from "@/components/eachpage/Specifications";

function stripHtml(html: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectData(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | IRA Realty`,
    description:
      stripHtml(project.aboutDescription).slice(0, 160) ||
      "Explore IRA Realty Projects",
    openGraph: {
      images: project.heroSlides?.[0]?.image ? [project.heroSlides[0].image] : [],
    },
  };
}

function transformApiData(apiData: any, slug: string) {
  const details = apiData?.projectdetail || {};

  // --- HERO (section1) ---
  const rawSection1 = details.section1 || [];
  const heroList = Array.isArray(rawSection1)
    ? rawSection1
    : Object.values(rawSection1);

  const heroSlides = heroList
    .filter((slide: any) => slide && typeof slide === "object")
    .map((slide: any) => ({
      image: slide.largeimg_url || slide.image_url || "",
      title: slide.title || "",
      description: slide.description || "",
      slogan: stripHtml(slide.smalldescription || slide.subtitle || ""),
      enableEnquiry: slide.enable_enq_button === "yes",
    }));

  // --- HIGHLIGHTS (section2) ---
  const section2 = details.section2 || {};
  const rawHighlights = section2.section_card || [];
  const highlightsList = Array.isArray(rawHighlights)
    ? rawHighlights
    : Object.values(rawHighlights);

  const highlights = highlightsList.map((item: any) => ({
    label: item?.title || "",
    value: item?.description || "",
    icon: item?.icon_url || "",
  }));

  // --- PLANS (section3) ---
  const plansTitle = details.section3?.title || "PLANS";
  const plans = (details.section3?.section_card || []).map((p: any) => ({
    id: p.tab_id,
    title: p.tab_title,
    icon: p.tab_icon,
    url: p.tab_iframe_url, // ✅ can be image OR svg OR website
  }));

  // --- ABOUT (section4) ---
  const aboutSection = details.section4 || {};
  const downloadCards = aboutSection.section_card || [];
  const brochureCard = Array.isArray(downloadCards)
    ? downloadCards.find((c: any) =>
        (c.download_title || "").toLowerCase().includes("brochure")
      )
    : null;

  // --- AMENITIES (section5) ---
  const rawCategories = details.section5?.section_card?.category || [];
  const amenities = (Array.isArray(rawCategories) ? rawCategories : []).map(
    (cat: any) => ({
      category: cat.title || "",
      items: (cat.amenities || []).map((item: any) => ({
        name: item.title || "",
        icon: item.icon_url || "",
      })),
    })
  );

  // --- SPECIFICATIONS (section6) ---
  const specifications = (details.section6?.section_card || []).map(
    (spec: any) => ({
      title: spec.title || "",
      description: spec.description || "",
      icon: spec.icon_url || "",
    })
  );

  // --- LIVE PROGRESS (section7) ---
  const section7 = details.section7 || {};
  const liveProgress = {
    title: section7.title || "",
    description: section7.description || "",
    year: section7.finished || "",
    structuresPlan: Number(section7.str_plan || 0),
    structuresFinished: Number(section7.str_finished || 0),
    finishesPlan: Number(section7.fini_plan || 0),
    finishesFinished: Number(section7.fini_finished || 0),
    amenitiesPlan: Number(section7.ame_plan || 0),
    amenitiesFinished: Number(section7.ame_finished || 0),
    gallery: Array.isArray(section7.gallery) ? section7.gallery : [],
  };

  return {
    slug,
    name:
  heroSlides?.length > 0
    ? heroSlides[0]?.title
    : details?.project_name || slug,
    heroSlides,

    price: section2.price || "",
    rera_no: section2.rera_no || "",
    highlightDescription: section2.description || "",
    highlights,

    plansTitle,
    plans,

    aboutTitle: aboutSection.title || "",
    aboutDescription: aboutSection.description || "",
    aboutImage: aboutSection.image_url || "",
    brochureUrl: brochureCard?.download_link || null,

    amenities,
    specifications,

    liveProgress,
  };
}

async function getProjectData(slug: string) {
  const apiUrl = `https://irarealty.in/cms/api/Project/getProjectDetail/${slug}`;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) return null;

    const json = await res.json();
    if (json.status !== "success") return null;

    return transformApiData(json, slug);
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectData(slug);
  if (!project) return notFound();

   return (
  <main className="bg-white min-h-screen">
    {project.heroSlides?.length > 0 && (
  <Hero data={project} />
)}

    {project.highlights?.length > 0 && <Highlights data={project} />}

    {project.plans?.length > 0 && (
      <Plans title={project.plansTitle} plans={project.plans} />
    )}

    {project.aboutTitle && <About data={project} />}

    {/* ✅ M3: Live Progress HERE */}
    {slug === "m3" && project.liveProgress?.title && (
      <LiveProgress data={project} />
    )}

    {project.amenities?.length > 0 && <Amenities data={project.amenities} />}

    {project.specifications?.length > 0 && (
      <Specifications data={project.specifications} />
    )}

    {/* ✅ MIRACLE: Live Progress LAST */}
    {(slug === "miracle"|| slug === "aspiration" || slug === "elevate" || slug === "aerocity") && project.liveProgress?.title && (
      <LiveProgress data={project} />
    )}
  </main>
);
}