


import React, { useEffect, useRef, useState } from "react";

/* ================= ASSET IMAGES ================= */
import crew1 from "../assets/Kavi__.jpeg";
import crew2 from "../assets/Mahil___.jpeg";
import crew3 from "../assets/Jhon__.jpeg";
import crew4 from "../assets/Dhanush__.jpeg";
import crew5 from "../assets/billing_web_1.png";
import crew6 from "../assets/billing_web_2.png";

/* ================= TEXT LINES ================= */
const LINES = [
  "FROM REMOTE COLONIES TO DESERTED",
  "OUTPOSTS, EVERY LOCATION WE REACH",
  "REVEALS SIGNS OF STRUCTURES, MOTION",
  "AND PRESENCE THAT DO NOT EXIST",
];

/* ================= HORIZONTAL CARDS ================= */
const CARDS = [
  "CONVERGENCE RELAY",
  "STELLAR PIVOT",
  "FIELDWORK ROUTINE",
  "MECHANICS CORE",
  "FINAL TRANSMISSION",
];

/* ================= ARC IMAGES + NAMES ================= */
const ARC_ITEMS = [
  { img: crew1, name: "KAVI RAJA" },
  { img: crew2, name: "MAHIL MITHRAN" },
  { img: crew3, name: "JHON EBENEZER" },
  { img: crew4, name: "SELVA DHANUSH" },
  { img: crew5, name: "BALAJI" },
  { img: crew6, name: "ASWIN" },
];

export default function Observe() {
  /* ---------- TEXT SCROLL ---------- */
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [activeLine, setActiveLine] = useState(-1);

  useEffect(() => {
    const trigger = triggerRef.current;
    const section = sectionRef.current;
    if (!trigger || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const onScroll = () => {
          const rect = section.getBoundingClientRect();
          const progress = Math.min(
            Math.max(-rect.top / (window.innerHeight * 0.8), 0),
            1
          );
          setActiveLine(Math.floor(progress * LINES.length));
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
      },
      { threshold: 1 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  /* ---------- HORIZONTAL SCROLL ---------- */
  const horizontalRef = useRef(null);
  const trackRef = useRef(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!horizontalRef.current || !trackRef.current) return;

      const rect = horizontalRef.current.getBoundingClientRect();
      const scrollable =
        horizontalRef.current.offsetHeight - window.innerHeight;

      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const maxX = trackRef.current.scrollWidth - window.innerWidth;

      setX(-maxX * progress);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- ARC SCROLL IMAGES ---------- */
  const crewSectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!crewSectionRef.current) return;

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const scrollY = window.scrollY;

      imageRefs.current.forEach((el, i) => {
        if (!el) return;

        const offset =
          scrollY - crewSectionRef.current.offsetTop - i * 220;
        const progress = Math.min(Math.max(offset / vh, 0), 1);

        const radius = vh * 0.22;
        const angle = Math.PI * progress;
        const xPos = vw - (vw + 260) * progress;
        const yOffset = vh * 0.28;
        const yPos = yOffset + radius - Math.sin(angle) * radius;
        const scale = 0.85 + progress * 0.15;

        let opacity = progress > 0 ? 1 : 0;
        if (progress > 0.95) opacity = 1 - (progress - 0.95) * 20;

        el.style.transform = `translate(${xPos}px, ${yPos}px) scale(${scale})`;
        el.style.opacity = opacity;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= TEXT SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative min-h-[140vh] w-full overflow-hidden text-black"
      >
        {/* removed background → GlobalBackground visible */}

        <div ref={triggerRef} className="absolute top-[60vh] h-px w-full" />

        <div className="relative mx-auto flex max-w-7xl gap-20 px-12 pt-[60vh] pb-32">
          <div className="w-1/3">
            <p className="text-xs tracking-widest text-neutral-500">
              [ WE OBSERVE DISTANT WORLDS ]
            </p>
          </div>

          <div className="w-2/3 space-y-6">
            {LINES.map((line, i) => (
              <div
                key={i}
                className="relative overflow-hidden text-[3.2rem] font-extrabold leading-tight"
              >
                <span className="block text-neutral-300">{line}</span>
                <span
                  className="absolute left-0 top-0 block text-black transition-all duration-700 ease-out"
                  style={{
                    width: activeLine >= i ? "100%" : "0%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textShadow: "0 0 20px rgba(0,0,0,0.25)",
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STICKY HORIZONTAL CARDS ================= */}
      <section ref={horizontalRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-16 px-24 transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${x}px)` }}
          >
            {CARDS.map((title, i) => (
              <div
                key={i}
                className="flex h-[420px] w-[520px] shrink-0 items-end rounded-2xl border border-neutral-700 bg-neutral-900 p-10 text-white shadow-[0_0_40px_rgba(0,0,0,0.6)]"
              >
                <h2 className="text-4xl font-extrabold tracking-tight">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARC SCROLL IMAGES ================= */}
      <div
        ref={crewSectionRef}
        className="relative w-full h-[260vh] overflow-hidden"
      >
        {/* fixed but BELOW footer */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {ARC_ITEMS.map((item, i) => (
            <div
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              className="absolute w-64"
              style={{
                transform: `translate(${window.innerWidth}px, ${
                  window.innerHeight * 0.5
                }px) scale(0.8)`,
                opacity: 0,
              }}
            >
              <div className="h-64 w-64 bg-neutral-900 border border-neutral-700 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-4 text-center text-sm font-semibold tracking-widest text-neutral-800">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
