import HomeCarousel from "@/components/HomeCarousel";
import HomeGlimpse from "@/components/HomeGlimpse";
import FeaturedProjects from "@/components/HomeFeaturedProjects";
import HomeWhyIra from "@/components/HomeWhyIra";
import HomeRevolution from "@/components/HomeRevolution";

export default async function Home() {
  const res = await fetch(
    "https://irarealty.in/cms/api/home/getHomeSections",
    { cache: "no-store" }
  );

  const json = await res.json();
  const sections = json.homesections;

  return (
    <main className="min-h-screen bg-white">
      <HomeCarousel data={sections.section1} />
      <HomeGlimpse data={sections.section2} />
      <FeaturedProjects data={sections.section3} />
      <HomeWhyIra data={sections.section4} />
      <HomeRevolution data={sections.section5} />
    </main>
  );
}