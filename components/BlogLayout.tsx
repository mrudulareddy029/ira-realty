"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Blog {
  slug: string;
  title: string;
  thumbimage: string;
  small_description?: string;
  cat_id: string | null;
  cat_name: string | null;
}

export default function BlogsLayout({ blogs = [] }: { blogs: Blog[] }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // 1. Process data to be unique by slug AND extract categories
  const { uniqueBlogs, categories } = useMemo(() => {
    const catMap = new Map<string, string>();
    const slugSet = new Set<string>();
    const cleanedBlogs: Blog[] = [];

    blogs.forEach((blog) => {
      if (blog.cat_id && blog.cat_name) {
        catMap.set(blog.cat_id, blog.cat_name);
      }

      if (!slugSet.has(blog.slug)) {
        slugSet.add(blog.slug);
        cleanedBlogs.push(blog);
      }
    });

    return {
      uniqueBlogs: cleanedBlogs,
      categories: Array.from(catMap.entries()).map(([id, name]) => ({ id, name })),
    };
  }, [blogs]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // 2. Filter the already cleaned blogs
  const filteredBlogs = selectedCategories.length > 0
    ? uniqueBlogs.filter((b) => b.cat_id && selectedCategories.includes(b.cat_id))
    : uniqueBlogs;

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start pt-8">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-[350px] shrink-0">
          {/* Changed 'sticky' to 'lg:sticky' so it only sticks when on the side */}
          <div className="bg-blog-bg p-6 lg:p-8 rounded-lg lg:sticky lg:top-28 shadow-sm">
<h3 className="text-[21px] font-semibold mb-6 text-dark-black tracking-wide font-sans">
  Categories
</h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:space-y-4">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blog-accent"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                  <span className={`text-[14px] lg:text-[15px] truncate ${
                      selectedCategories.includes(cat.id)
                        ? "text-blog-accent font-semibold"
                        : "text-gray-700"
                    }`}>
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>

            {selectedCategories.length > 0 && (
              <button
                onClick={() => setSelectedCategories([])}
                className="text-xs text-blog-accent underline mt-6 hover:text-black block"
              >
                Clear all filters
              </button>
            )}
          </div>
        </aside>

        {/* BLOG GRID */}
        <div className="flex-1 w-full">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredBlogs.map((blog) => (
                <Link 
                  key={blog.slug} 
                  href={`/blogs/${blog.slug}`} 
                  className="group block h-full"
                >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 flex flex-col ">
                    
                    {/* Adjusted height for mobile (h-48) vs desktop (h-56) */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={blog.thumbimage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 lg:p-6 flex flex-col flex-grow">
                      <p className="text-[#383838] text-xs lg:text-[16px] font-normal tracking-normal mb-2 ">
                        {blog.cat_name}
                      </p>

                      <h2 className="text-base lg:text-lg font-medium text-[#362a82] mb-3 line-clamp-2 tracking-normal">
                        {blog.title}
                      </h2>

                      <p className="text-[16px] text-black/40  line-clamp-3 mb-6 flex-grow leading-relaxed">
                        {blog.small_description?.replace(/<[^>]*>?/gm, "")}
                      </p>

                      <div className="flex items-center justify-end text-[#362a82] text-sm lg:text-sm font-normal">
                        Read More
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
              No blogs found.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}