import React, { useEffect, useRef, useState } from "react";

const clamp = (v) => Math.min(Math.max(v, 0), 1);

const Home = () => {
  const headlineRef = useRef(null);
  const wantSectionRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [wantProgress, setWantProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;

      // ===== HEADLINE =====
      if (headlineRef.current) {
        const rect = headlineRef.current.getBoundingClientRect();
        const start = vh * 0.85;
        const end = vh * 0.35;
        setProgress(clamp((start - rect.top) / (start - end)));
      }

      // ===== WANT =====
      if (wantSectionRef.current) {
        const rect = wantSectionRef.current.getBoundingClientRect();
        const start = vh * 0.85;
        const end = vh * 0.3;
        setWantProgress(clamp((start - rect.top) / (start - end)));
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Headline timing
  const line1 = clamp(progress * 2);
  const line2 = clamp((progress - 0.5) * 2);

  // Want timing
  const want1 = clamp(wantProgress * 3);
  const want2 = clamp((wantProgress - 0.33) * 3);
  const want3 = clamp((wantProgress - 0.66) * 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="h-screen bg-black flex items-center px-16">
        <h1 className="text-white text-[5rem] font-extrabold uppercase leading-none">
          INTERPLANETARY <br /> OBSERVATORY
        </h1>
      </section>

      {/* ================= SCROLL SECTION ================= */}
      <section
        className="relative min-h-[200vh] px-16 pt-48 overflow-hidden"
        style={{
          backgroundColor: "#0b0b0b",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)
          `,
          backgroundSize: "64px 64px, 64px 64px, 100% 100%",
          backgroundPosition: "center",
        }}
      >
        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.65))]" />

        {/* ===== HEADLINE ===== */}
        <div ref={headlineRef} className="relative space-y-2">
          {/* LINE 1 */}
          <div className="relative w-fit">
            <h1 className="text-[6rem] font-extrabold uppercase text-[#2a2a2a]">
              WE OBSERVE
            </h1>
            <h1
              className="absolute inset-0 text-[6rem] font-extrabold uppercase text-white overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - line1 * 100}% 0 0)`,
              }}
            >
              WE OBSERVE
            </h1>
          </div>

          {/* LINE 2 */}
          <div className="relative w-fit">
            <h1 className="text-[6rem] font-extrabold uppercase text-[#2a2a2a]">
              DISTANT WORLDS
            </h1>
            <h1
              className="absolute inset-0 text-[6rem] font-extrabold uppercase text-white overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - line2 * 100}% 0 0)`,
              }}
            >
              DISTANT WORLDS
            </h1>
          </div>
        </div>

        {/* ===== PARAGRAPH ===== */}
        <div className="relative mt-24 max-w-4xl">
          <p className="text-[2.8rem] font-extrabold uppercase text-[#2a2a2a]">
            FROM REMOTE COLONIES TO DESERTED OUTPOSTS, EVERY LOCATION WE REACH
            REVEALS SIGNS OF STRUCTURES AND PRESENCE.
          </p>

          <p
            className="absolute inset-0 text-[2.8rem] font-extrabold uppercase text-white overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - progress * 100}% 0 0)`,
            }}
          >
            FROM REMOTE COLONIES TO DESERTED OUTPOSTS, EVERY LOCATION WE REACH
            REVEALS SIGNS OF STRUCTURES AND PRESENCE.
          </p>
        </div>

        {/* ===== WANT ===== */}
        <div ref={wantSectionRef} className="relative mt-32 space-y-2">
          {["WANT", "WANT", "WANT"].map((text, i) => {
            const p = [want1, want2, want3][i];
            return (
              <div key={i} className="relative w-fit">
                <p className="text-[2.8rem] font-extrabold uppercase text-[#4a4a4a]">
                  {text}
                </p>
                <p
                  className="absolute inset-0 text-[2.8rem] font-extrabold uppercase text-white overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - p * 100}% 0 0)`,
                  }}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
