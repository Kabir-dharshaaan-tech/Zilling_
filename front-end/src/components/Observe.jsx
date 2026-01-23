

import React, { useEffect, useRef, useState } from "react";

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

  /* ---------- ARC SCROLL IMAGES ABOVE CREW REGISTRY ---------- */
  const crewSectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!crewSectionRef.current) return;

      const sectionTop = crewSectionRef.current.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // Start animation only when section enters viewport
      if (sectionTop < vh && sectionTop > -crewSectionRef.current.offsetHeight) {
        const scrollY = window.scrollY;

        imageRefs.current.forEach((el, i) => {
          if (!el) return;

          const offset = scrollY - crewSectionRef.current.offsetTop - i * 200; // stagger images
          const progress = Math.min(Math.max(offset / vh, 0), 1);

          const radius = vh * 0.4;
          const angle = Math.PI * progress;

          const xPos = vw - (vw + 200) * progress;
          const yPos = radius - Math.sin(angle) * radius;
          const scale = 0.7 + progress * 0.3;

          let opacity = 0;
          if (progress > 0) opacity = 1;
          if (progress > 0.95) opacity = 1 - (progress - 0.95) * 20;

          el.style.transform = `translate(${xPos}px, ${yPos}px) scale(${scale})`;
          el.style.opacity = opacity;
        });
      }
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
        className="relative min-h-[140vh] w-full overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div ref={triggerRef} className="absolute top-[60vh] h-px w-full" />

        <div className="relative mx-auto flex max-w-7xl gap-20 px-12 pt-[60vh] pb-32">
          <div className="w-1/3">
            <p className="text-xs tracking-widest text-neutral-300">
              [ WE OBSERVE DISTANT WORLDS ]
            </p>
          </div>

          <div className="w-2/3 space-y-6">
            {LINES.map((line, i) => (
              <div
                key={i}
                className="relative overflow-hidden text-[3.2rem] font-extrabold leading-tight"
              >
                <span className="block text-neutral-700">{line}</span>
                <span
                  className="absolute left-0 top-0 block text-[#f4f1e8] transition-all duration-700 ease-out"
                  style={{
                    width: activeLine >= i ? "100%" : "0%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
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
      <section ref={horizontalRef} className="relative h-[300vh] bg-black">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-16 px-24 transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${x}px)` }}
          >
            {CARDS.map((title, i) => (
              <div
                key={i}
                className="flex h-[420px] w-[520px] shrink-0 items-end rounded-2xl border border-neutral-700 bg-neutral-900 p-10"
              >
                <h2 className="text-4xl font-extrabold tracking-tight">{title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARC SCROLL IMAGES ================= */}
      <div ref={crewSectionRef} className="relative w-full h-[250vh] overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          {[1, 2, 3, 4, 5, 6].map((img, i) => (
            <div
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              className="absolute w-44 h-44 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl"
              style={{
                transform: `translate(${window.innerWidth}px, ${
                  window.innerHeight * 0.5
                }px) scale(0.7)`,
                opacity: 0,
              }}
            >
              <img
                src={`https://picsum.photos/400/400?random=${img}`}
                alt="scroll"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
