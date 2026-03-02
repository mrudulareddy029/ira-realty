import Image from "next/image";

async function getAboutData() {
  try {
    const res = await fetch(
      "https://irarealty.in/cms/api/AboutUs/getAboutUsSections",
      {
        cache: "no-store",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        },
      }
    );

    if (!res.ok) {
      console.error("About Fetch Status:", res.status);
      return null;
    }

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      console.error("About API did not return JSON");
      return null;
    }

    return await res.json();

  } catch (error) {
    console.error("About Fetch Error:", error);
    return null;
  }
}

export default async function AboutUsPage() {
  const data = await getAboutData()

if (!data) {
  return (
    <main className="bg-white w-full overflow-x-hidden p-20 text-center">
      Failed to load content.
    </main>
  );
}

const sections = data.aboutussections;

  return (
    <main className="bg-white w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={sections.section1.img_url}
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Floating Box Responsive */}
        <div
          className="
            absolute top-1/2 
            left-1/2 top-[45%] -translate-y-1/2
            lg:left-[21%] lg:translate-x-0
          "
        >
          <div className="bg-black/60 backdrop-blur-md text-white
                          px-6 md:px-8 py-12 md:py-8
                          rounded-lg shadow-2xl
                          w-[90vw] md:w-[700px] lg:w-[760px]">

            <h1 className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
              {sections.section1.title}
            </h1>

            <h2 className="w-full text-sm md:text-[16px] font-normal uppercase
             leading-[1.7] tracking-[1.2px] " 
             style={{ fontFamily: "var(--font-times), serif" }}>
              {sections.section1.descriptison}
            </h2>

          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
<section className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
  
  {/* Left Column: Image with Decorative Shape */}
  <div className="relative order-2 md:order-1">
    {/* Decorative Background Blob */}
    <div className="absolute -top-12 -left-12 w-[80%] h-[120%] bg-[#FDF0E9] rounded-full blur-3xl opacity-60 -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#FDF0E9]/50 rounded-[40%] rotate-12 -z-10" />

    
    <div className="relative w-full max-w-[436px] h-[200px] md:h-[245px] mx-auto">
      <Image
        src={sections.section2.image_url}
        alt="Welcome to IRA"
        fill
        className="object-cover rounded-lg"
      />
    </div>
  </div>

  {/* Right Column: Text Content */}
  <div className="order-1 md:order-2">
    <h2 
      className="text-[32px] md:text-[40px] font-bold text-[#362A82] mb-8 tracking-[0.02em] uppercase leading-tight"
      style={{ fontFamily: "var(--font-times), serif" }}
    >
      {sections.section2.title}
    </h2>

    <div
      className="text-black text-[15px] md:text-[16px] leading-[1.8] text-justify md:text-left font-normal"
      dangerouslySetInnerHTML={{
        __html: sections.section2.description,
      }}
    />
  </div>
</section>
      {/* ================= JOIN THE REVOLUTION ================= */}
<section className="bg-white py-12 md:py-24 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* LEFT CONTENT */}
    <div className="order-1">
      {/* Heading */}
      <h2
        className="
          text-[28px]
          sm:text-[32px]
          md:text-[38px]
          font-bold
          text-[#2E247A]
          mb-6
          uppercase
          tracking-[0.04em]
          leading-tight
        "
        style={{ fontFamily: "var(--font-times), serif" }}
      >
        {sections.section3.title}
      </h2>

      {/* Description */}
      <div
        className="
          text-[#4A4A4A]
          text-[14px]
          md:text-[15px]
          leading-[1.8]
          max-w-full
          md:max-w-[520px]
          [&>p]:mb-4
          [&>p:last-child]:mb-0
        "
        dangerouslySetInnerHTML={{
          __html: sections.section3.description,
        }}
      />

      {/* Tagline */}
      <p className="italic font-bold mt-6 md:mt-8 text-black text-[16px] md:text-[18px]">
        {sections.section3.tag_line}
      </p>

      {/* Read More */}
      {sections.section3.redirect_url && (
        <a
          href={sections.section3.redirect_url}
          className="
            inline-block
            mt-5
            text-[#2E247A]
            font-normal 
            transition
            text-[16px]
            hover:underline"
        >
          Read More →
        </a>
      )}
    </div>

    {/* RIGHT IMAGE */}
    {/* - aspect-square ensures the illustration remains perfectly circular/balanced on mobile.
        - max-w-[400px] prevents it from becoming massive on tablets.
    */}
    <div className="order-2 relative w-full aspect-square max-w-[320px] md:max-w-full h-auto mx-auto md:h-[360px]">
      <Image
        src={sections.section3.image_url}
        alt="Join the Revolution"
        fill
        className="object-contain"
        unoptimized
      />
    </div>

  </div>
</section>

      {/* ================= VISION & MISSION ================= */}
      {/* ================= VISION & MISSION ================= */}
<section className="relative mt-16 md:mt-20 pt-10 md:pt-0 pb-0 px-6 bg-[#F3815C]/10 overflow-visible ">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

   {/* IMAGE */}
<div className="relative w-full max-w-[546px] aspect-square">

  <div className="absolute -top-8 md:-top-12 left-0 w-full h-full">
    <Image
      src={sections.section4.image_url}
      alt="Vision"
      fill
      className="object-contain "
    />
  </div>

</div>

    {/* CONTENT */}
    <div>
      <h2 
        className="text-[32px] md:text-[40px] font-bold text-[#362A82] mb-8 tracking-[0.02em] uppercase leading-tight"
        style={{ fontFamily: "var(--font-times), serif" }}
      >
        {sections.section4.title}
      </h2>

      <div
        className="text-gray-700 text-sm leading-6 [&>p]:mb-4 [&>p:last-child]:mb-0"
        dangerouslySetInnerHTML={{
          __html: sections.section4.description,
        }}
      />

      <p className="italic font-bold text-[20px] mt-4">
        {sections.section4.tag_line}
      </p>
    </div>

  </div>
</section>

      {/* ================= WHAT SETS IRA APART ================= */}
{/* ================= WHAT SETS IRA APART ================= */}
<section className="py-12 md:py-16 px-6 bg-white">
  
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 
      className="text-[32px] md:text-[40px] font-bold text-[#362A82] mb-4 tracking-[0.02em] uppercase leading-tight"
      style={{ fontFamily: "var(--font-times), serif" }}
    >
      {sections.section5.title}
    </h2>

    <div
      className="font-poppins antialiased mx-auto"
      style={{
        color: 'black',
        fontSize: '15px',
        fontWeight: '400',
        letterSpacing: '0.28px',
        lineHeight: '27px',
        maxWidth: '900px'
      }}
      dangerouslySetInnerHTML={{
        __html: sections.section5.description,
      }}
    />
  </div>

  {/* Reduced grid gaps */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
    {sections.section5.section_card.map((feature: any) => (
      <div
        key={feature.order}
        className="flex flex-col items-center text-center"
      >
        {/* Reduced icon spacing */}
        <div className="w-[110px] h-[110px] bg-white shadow-[0px_8px_25px_rgba(0,0,0,0.05)] rounded-[10px] flex items-center justify-center mb-6 transition-transform duration-300 hover:-translate-y-1">
          <img
            src={feature.icon_url}
            alt="icon"
            className="w-16 h-16 object-contain"
          />
        </div>

        <div
          className="font-poppins antialiased"
          style={{
            color: 'rgb(56, 56, 56)',
            fontSize: '15px',
            fontWeight: '400',
            letterSpacing: '0.28px',
            lineHeight: '24px',
            textAlign: 'center'
          }}
          dangerouslySetInnerHTML={{
            __html: feature.description,
          }}
        />
      </div>
    ))}
  </div>
</section>
      {/* ================= TEAM SECTION ================= */}
{/* ================= TEAM SECTION ================= */}
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 
        className="text-[#362A82] font-bold uppercase text-[32px] md:text-[40px] tracking-[2px]"
        style={{ fontFamily: '"MADE Coachella", serif' }}
      >
        {sections.section6.title || "THE TEAM"}
      </h2>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sections.section6.section_card.map((member: any) => (

        <div
          key={member.order}
          className="group h-[520px] [perspective:1200px]"
        >
          <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* ================= FRONT SIDE ================= */}
            <div className="absolute inset-0 bg-white rounded-sm overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.08)] [backface-visibility:hidden]">
              <div className="flex flex-col h-full">

                {/* Image */}
                <div className="relative w-full h-[400px]">
                  <Image
                    src={member.image_url}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="p-6 text-center">
                  <h3 className="text-[#362A82] font-bold uppercase text-[15px] tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-[#585858] uppercase text-[11px] font-bold tracking-widest mt-2">
                    {member.designation}
                  </p>
                </div>

              </div>
            </div>

            {/* ================= BACK SIDE ================= */}
<div className="absolute inset-0 bg-[#362A82] text-white rounded-lg p-10 flex flex-col justify-between shadow-[0_5px_25px_rgba(0,0,0,0.1)] [transform:rotateY(180deg)] [backface-visibility:hidden]">

  {/* Description with exact Poppins 14px/22px flow */}
  <div className="overflow-y-auto pr-2 custom-scrollbar">
    <p 
      className="font-poppins antialiased text-[14.6px] leading-[26px] font-normal tracking-[0.01em]"
      style={{ color: 'rgba(255, 255, 255, 0.95)' }}
    >
      {member.smalldescription}
    </p>
  </div>

  {/* Footer with increased tracking to match Image 12 */}
  <div className="mt-6 border-t border-white/10 pt-4">
    <h4 className="font-semibold uppercase text-[13px] tracking-[0.15em] leading-tight">
      {member.name}
    </h4>
    <p className="uppercase text-[11px] tracking-[0.2em] mt-2 font-medium text-white/80">
      {member.designation}
    </p>
  </div>

</div>
          </div>
        </div>

      ))}
    </div>

  </div>
</section>

    </main>
  );
}