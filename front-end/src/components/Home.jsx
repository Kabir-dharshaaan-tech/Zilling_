
import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../assets/banner.png";

const clamp = (v) => Math.min(Math.max(v, 0), 1);

export default function Home() {
  const headlineRef = useRef(null);
  const wantSectionRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [wantProgress, setWantProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;

      if (headlineRef.current) {
        const r = headlineRef.current.getBoundingClientRect();
        setProgress(clamp((vh * 0.8 - r.top) / (vh * 0.4)));
      }

      if (wantSectionRef.current) {
        const r = wantSectionRef.current.getBoundingClientRect();
        setWantProgress(clamp((vh * 0.8 - r.top) / (vh * 0.45)));
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const line1 = clamp(progress * 2);
  const line2 = clamp((progress - 0.5) * 2);

  const want = [
    clamp(wantProgress * 3),
    clamp((wantProgress - 0.33) * 3),
    clamp((wantProgress - 0.66) * 3),
  ];

  return (
    <>
      {/* HEADER */}
      <section className="relative h-screen w-screen overflow-hidden">
        <img
          src={bannerImage}
          alt="Zilling"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* SECTION 1 — HEADLINE */}
      <section
        ref={headlineRef}
        className="relative min-h-[70vh] px-16 flex flex-col justify-center -mb-24"
      >
        {["BILLING,", " WITHOUT BARRIERS."].map((t, i) => {
          const p = i === 0 ? line1 : line2;
          return (
            <div key={t} className="relative w-fit">
              <h1 className="text-[6rem] font-extrabold uppercase text-[#cfcfcf]">
                {t}
              </h1>
              <h1
                className="absolute inset-0 text-[6rem] font-extrabold uppercase text-black overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - p * 100}% 0 0)` }}
              >
                {t}
              </h1>
            </div>
          );
        })}
      </section>

      {/* SECTION 2 — DESCRIPTION */}
      <section className="relative min-h-[65vh] px-16 flex items-center -mb-20">
        <div className="relative max-w-4xl">
          <p className="text-[2.8rem] font-extrabold uppercase text-[#bdbdbd]">
            A free, open-source billing system built for everyone — individuals,
            shops, startups, and organizations.
          </p>
          <p
            className="absolute inset-0 text-[2.8rem] font-extrabold uppercase text-black overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}
          >
            A free, open-source billing system built for everyone — individuals,
            shops, startups, and organizations.
          </p>
        </div>
      </section>

      {/* SECTION 3 — FEATURES */}
      <section
        ref={wantSectionRef}
        className="relative min-h-[60vh] px-16 flex flex-col justify-center gap-4"
      >
        {["Simple. Powerful", "Offline-ready", "Multi-platform."].map(
          (t, i) => (
            <div key={i} className="relative w-fit">
              <p className="text-[2.8rem] font-extrabold uppercase text-[#c0c0c0]">
                {t}
              </p>
              <p
                className="absolute inset-0 text-[2.8rem] font-extrabold uppercase text-black overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - want[i] * 100}% 0 0)` }}
              >
                {t}
              </p>
            </div>
          )
        )}
      </section>
    </>
  );
}
