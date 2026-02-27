"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

function clamp(n: number) {
  return Math.max(0, Math.min(100, n));
}

function ProgressRow({
  label,
  plan,
  finished,
  showYear,
  year,
}: {
  label: string;
  plan: number;
  finished: number;
  showYear?: boolean;
  year?: string | number;
}) {
  const p = clamp(plan);
  const f = clamp(finished);

  return (
    <div className="mb-8">
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-[14px] font-medium text-[#1f1f1f]">{label}</p>
          {showYear && !!year && (
            <p className="text-[13px] text-[#9A7B73] mt-1">{year}</p>
          )}
        </div>

        <div className="flex items-center gap-6 text-[13px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F2B705]" />
            <span className="text-[#1f1f1f]">{p}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1FA85B]" />
            <span className="text-[#1f1f1f]">{f}%</span>
          </div>
        </div>
      </div>

      {/* bar */}
      <div className="relative h-[10px] w-full rounded-full bg-white overflow-hidden">
        {/* Plan (yellow) */}
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#F2B705]"
          style={{ width: `${p}%` }}
        />
        {/* Finished (green) on top */}
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#1FA85B]"
          style={{ width: `${f}%` }}
        />
      </div>
    </div>
  );
}

export default function LiveProgress({ data }: { data: any }) {
  const lp = data?.liveProgress;

  const gallery = useMemo(
    () => (Array.isArray(lp?.gallery) ? lp.gallery : []),
    [lp]
  );

  const [active, setActive] = useState(0);

  // ✅ Auto slide every 3 seconds
  useEffect(() => {
    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % gallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  if (!lp?.title) return null;

  const goPrev = () =>
    setActive((prev) => (prev - 1 + gallery.length) % gallery.length);

  const goNext = () => setActive((prev) => (prev + 1) % gallery.length);

  return (
    <section className="py-16 section_margin">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* ✅ background block like website */}
        <div className="relative bg-[#F6ECE7] rounded-md px-10 py-16 overflow-hidden">
          {/* ✅ white blob behind image (right side) */}
          <div className="hidden lg:block absolute right-[60px] top-1/2 -translate-y-1/2 w-[520px] h-[380px] bg-white rounded-[999px] opacity-90" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* LEFT */}
            <div>
              <h2 className="text-[30px] md:text-[40px] font-serif font-bold uppercase text-[#362A82] leading-[1.1]">
  {lp.title}
</h2>

              {/* legend */}
              <div className="flex items-center gap-6 mt-8 mb-10 lg:justify-center">
                <div className="flex items-center gap-2 text-[13px] text-[#1f1f1f]">
                  <span className="h-2 w-2 rounded-full bg-[#F2B705]" />
                  <span>Plan</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#1f1f1f]">
                  <span className="h-2 w-2 rounded-full bg-[#1FA85B]" />
                  <span>Finished</span>
                </div>
              </div>

              <ProgressRow
                label="Structures"
                plan={lp.structuresPlan}
                finished={lp.structuresFinished}
                showYear
                year={lp.year}
              />

              <ProgressRow
                label="Finishes"
                plan={lp.finishesPlan}
                finished={lp.finishesFinished}
              />

              <ProgressRow
                label="Amenities"
                plan={lp.amenitiesPlan}
                finished={lp.amenitiesFinished}
              />
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full">
              <div className="relative w-full h-[320px] md:h-[360px] lg:h-[360px] rounded-[12px] overflow-hidden bg-white shadow-sm">
                {gallery.length > 0 && (
                  <Image
                    src={gallery[active]}
                    alt={`Progress ${active + 1}`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                )}

                {/* ✅ Left Arrow */}
                {gallery.length > 1 && (
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-xl"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                )}

                {/* ✅ Right Arrow */}
                {gallery.length > 1 && (
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-xl"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                )}
              </div>

              {/* dots */}
              {gallery.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {gallery.map((_: any, i: number) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`h-2 w-2 rounded-full transition ${
                        active === i ? "bg-[#BB5439]" : "bg-[#D7D7D7]"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}