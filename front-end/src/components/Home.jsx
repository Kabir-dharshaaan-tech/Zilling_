

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
        setProgress(clamp((vh * 0.85 - r.top) / (vh * 0.5)));
      }

      if (wantSectionRef.current) {
        const r = wantSectionRef.current.getBoundingClientRect();
        setWantProgress(clamp((vh * 0.85 - r.top) / (vh * 0.55)));
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

      {/* SECTION 1 */}
      <section ref={headlineRef} className="relative h-screen px-16 pt-48">
        {["WE OBSERVE", "DISTANT WORLDS"].map((t, i) => {
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

      {/* SECTION 2 */}
      <section className="relative h-screen px-16 flex items-center">
        <div className="relative max-w-4xl">
          <p className="text-[2.8rem] font-extrabold uppercase text-[#bdbdbd]">
            FROM REMOTE COLONIES TO DESERTED OUTPOSTS, EVERY LOCATION WE REACH
            REVEALS SIGNS OF STRUCTURES AND PRESENCE.
          </p>
          <p
            className="absolute inset-0 text-[2.8rem] font-extrabold uppercase text-black overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}
          >
            FROM REMOTE COLONIES TO DESERTED OUTPOSTS, EVERY LOCATION WE REACH
            REVEALS SIGNS OF STRUCTURES AND PRESENCE.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section ref={wantSectionRef} className="relative h-screen px-16 pt-32">
        {["WANT", "WANT", "WANT"].map((t, i) => (
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
        ))}
      </section>
    </>
  );
}




