import HomeCarousel from "@/components/HomeCarousel";
import HomeGlimpse from "@/components/HomeGlimpse";
import FeaturedProjects from "@/components/HomeFeaturedProjects";
import HomeWhyIra from "@/components/HomeWhyIra";
import HomeRevolution from "@/components/HomeRevolution";

export default async function Home() {
  let sections: any = {};

  try {
    const res = await fetch(
      "https://irarealty.in/cms/api/home/getHomeSections",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch home sections");
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }

    const json = await res.json();
    sections = json?.homesections || {};

  } catch (error) {
    console.error("Home Fetch Error:", error);
  }

  return (
    <main className="min-h-screen bg-white">
      <HomeCarousel data={sections?.section1} />
      <HomeGlimpse data={sections?.section2} />
      <FeaturedProjects data={sections?.section3} />
      <HomeWhyIra data={sections?.section4} />
      <HomeRevolution data={sections?.section5} />
    </main>
  );
}