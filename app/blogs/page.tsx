import BlogsLayout from "@/components/BlogLayout";
import HeroSection from "@/components/HeroSection";

// This is a Server Component, so async is allowed here
async function getBlogs() {
  const res = await fetch(
    "https://irarealty.in/cms/api/getBlogList",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main>
      <HeroSection
        title="BLOGS"
        description="Curated articles of our thoughts and experiences on Real Estate and more"
        bgImage="https://irarealty.in/assets/Blogs-Background-Image.jpeg"
      />
      
      {/* Pass the data to your client component */}
      <BlogsLayout blogs={blogs} />
    </main>
  );
}