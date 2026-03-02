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
  /* Added state for mobile category toggle */
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  const filteredBlogs = selectedCategories.length > 0
    ? uniqueBlogs.filter((b) => b.cat_id && selectedCategories.includes(b.cat_id))
    : uniqueBlogs;

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start pt-8">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-[350px] shrink-0">
          <div className="bg-[#f3815c33] rounded-lg lg:sticky lg:top-28 shadow-sm font-sans overflow-hidden">
            <div 
              className="flex items-center justify-between  px-4 py-4 lg:px-8 lg:py-8 cursor-pointer lg:cursor-default"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#222] tracking-wide">
                Categories
              </h3>
              {/* Filter Icon for Mobile */}
              <div className="lg:hidden text-blog-accent">
                <svg className={`w-5 h-5 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
            </div>

            <div className={`${isMobileOpen ? "block" : "hidden"} lg:block px-6 pb-6 lg:px-8 lg:pb-24`}>
              <div className="grid grid-cols-1 gap-1 lg:space-y-1 font-sans">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer py-1">
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
                  onClick={(e) => { e.stopPropagation(); setSelectedCategories([]); }}
                  className="text-xs text-blog-accent underline mt-6 hover:text-black block"
                >
                  Clear all filters
                </button>
              )}
            </div>
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
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={blog.thumbimage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 "
                      />
                    </div>

                    <div className="p-5 lg:p-6 flex flex-col flex-grow">
                      <p className="text-[#383838] text-xs lg:text-[16px] font-normal mb-2">
                        {blog.cat_name}
                      </p>

                      <h2 className="text-base lg:text-lg font-medium text-[#362a82] mb-3 line-clamp-2">
                        {blog.title}
                      </h2>

                      <p className="text-[14px] lg:text-[16px] text-black/40 line-clamp-3 mb-6 flex-grow leading-relaxed">
                        {blog.small_description?.replace(/<[^>]*>?/gm, "")}
                      </p>

                      <div className="flex items-center justify-end text-[#362a82] text-[14px] font-sans font-normal mt-auto">
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