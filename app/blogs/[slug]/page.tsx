import BlogDetailContent from "@/components/BlogDetailContent";

async function getBlog(slug: string) {
  const res = await fetch(
    `https://irarealty.in/cms/api/getBlogDetail/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return <div className="pt-[120px] text-center">Invalid Slug</div>;
  }

  const data = await getBlog(slug);

  if (!data?.result) {
    return <div className="pt-[120px] text-center">Blog Not Found</div>;
  }

  return <BlogDetailContent data={data} />;
}