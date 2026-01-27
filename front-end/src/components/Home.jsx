


import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../assets/banner.png";

const clamp = (v) => Math.min(Math.max(v, 0), 1);

export default function Home() {
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const wantSectionRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [wantProgress, setWantProgress] = useState(0);

  /* ================= DESCRIPTION STATE ================= */
  const [descFill, setDescFill] = useState([
    [0, 0], // paragraph 1 (2 lines)
    [0],    // paragraph 2 (1 line)
  ]);

  const descActiveRef = useRef(false);
  const rafRef = useRef(null);

  /* ================= SCROLL HANDLER ================= */
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;

      /* ---------- SECTION 1 ---------- */
      if (headlineRef.current) {
        const r = headlineRef.current.getBoundingClientRect();
        setProgress(clamp((vh * 0.8 - r.top) / (vh * 0.4)));
      }

      /* ---------- SECTION 2 (VIDEO LOGIC) ---------- */
      if (descRef.current) {
        const r = descRef.current.getBoundingClientRect();
        const sectionMid = r.top + r.height / 2;
        const inView = Math.abs(sectionMid - vh / 2) < vh * 0.3;

        if (inView && !descActiveRef.current) {
          descActiveRef.current = true;
          startDescAnimation();
        }

        if (!inView && descActiveRef.current) {
          cancelAnimationFrame(rafRef.current);
          descActiveRef.current = false;
          setDescFill([[0, 0], [0]]); // reset to grey
        }
      }

      /* ---------- SECTION 3 ---------- */
      if (wantSectionRef.current) {
        const r = wantSectionRef.current.getBoundingClientRect();
        setWantProgress(clamp((vh * 0.8 - r.top) / (vh * 0.45)));
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= DESCRIPTION ANIMATION ================= */
  const startDescAnimation = () => {
    let p = 0;
    let l = 0;
    let value = 0;

    const speed = 0.006; // 🔥 faster filling

    const animate = () => {
      value += speed;

      setDescFill((prev) => {
        const next = prev.map((para) => [...para]);
        if (next[p] && next[p][l] !== undefined) {
          next[p][l] = Math.min(value, 1);
        }
        return next;
      });

      if (value < 1) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      value = 0;
      l++;

      if (l >= descFill[p].length) {
        p++;
        l = 0;
      }

      if (p < descFill.length) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        descActiveRef.current = false; // stop cleanly
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  /* ================= SECTION 1 ================= */
  const line1 = clamp(progress * 2);
  const line2 = clamp((progress - 0.5) * 2);

  /* ================= TEXT ================= */
  const descParagraphs = [
    ["A FREE, OPEN-SOURCE BILLING SYSTEM", "BUILT FOR EVERYONE —"],
    ["INDIVIDUALS, SHOPS, STARTUPS, AND ORGANIZATIONS."],
  ];

  const want = [
    clamp(wantProgress * 3),
    clamp((wantProgress - 0.33) * 3),
    clamp((wantProgress - 0.66) * 3),
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative h-screen w-screen overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* ================= SECTION 1 ================= */}
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
                className="absolute inset-0 text-[6rem] font-extrabold uppercase text-black"
                style={{ clipPath: `inset(0 ${100 - p * 100}% 0 0)` }}
              >
                {t}
              </h1>
            </div>
          );
        })}
      </section>

      {/* ================= SECTION 2 ================= */}
      <section
        ref={descRef}
        className="relative min-h-[65vh] px-16 flex items-center -mb-20"
      >
        <div className="space-y-6 max-w-5xl">
          {descParagraphs.map((para, pi) => (
            <div key={pi} className="space-y-2">
              {para.map((line, li) => (
                <div key={li} className="relative overflow-hidden">
                  <p className="text-[2.8rem] font-extrabold uppercase text-[#bdbdbd]">
                    {line}
                  </p>
                  <p
                    className="absolute inset-0 text-[2.8rem] font-extrabold uppercase text-black"
                    style={{
                      clipPath: `inset(0 ${100 - descFill[pi][li] * 100}% 0 0)`,
                    }}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
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
                className="absolute inset-0 text-[2.8rem] font-extrabold uppercase text-black"
                style={{
                  clipPath: `inset(0 ${100 - want[i] * 100}% 0 0)`,
                }}
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





















