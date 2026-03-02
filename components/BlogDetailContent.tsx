import HeroSection from "./HeroSection";

export default function BlogDetailContent({ data }: any) {
  const blog = data?.result;
  const bannerImage = data?.banner?.img_url;

  // ✅ Clean & decode CMS HTML
  const decodedBody = blog?.body
    ?.replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/style="[^"]*"/g, "")   // remove inline styles
    .replace(/class="[^"]*"/g, "") 
     .replace(/<\/?em>/g, "");  

  if (!blog) return null;

  return (
    <div className="bg-white">
      <HeroSection
  title={blog.title}
  bgImage={bannerImage}
/>

      {/* Blog Content */}
      <section className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-0 pt-20 sm:pt-24 lg:pt-28 pb-16">
        
        <div
          className="
            prose
            max-w-none

            /* Typography */
            text-[16px] sm:text-[17px] lg:text-[20px]
            leading-[1.8] sm:leading-[1.9] lg:leading-[2]
            text-[#595959] 

            /* Headings */
            prose-headings:text-black
            prose-headings:font-semibold
            prose-headings:mt-10
            prose-headings:mb-4
            
            /* Paragraph spacing */
            prose-p:mb-8
            
            prose-p:text-left lg:prose-p:text-justify

            /* Strong text */
            prose-strong:text-black
            prose-strong:font-semibold

            /* Lists */
            prose-ul:pl-6
            prose-ul:mb-6
            prose-li:mb-2
            prose-p:first:mb-16
[&>div:first-child]:mb-16
            /* Blockquotes */
            prose-blockquote:border-l-4
            prose-blockquote:border-black
            prose-blockquote:pl-4
            
            prose-blockquote:text-[#444]
          "
          dangerouslySetInnerHTML={{ __html: decodedBody }}
        />
      </section>
    </div>
  );
}