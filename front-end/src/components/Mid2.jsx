import React, { useEffect, useRef, useState } from "react";

const missions = [
  { id: "01 / 05", title: "SOLAR RIDGE" },
  { id: "02 / 05", title: "SOLAR RIDGE" },
  { id: "03 / 05", title: "SOLAR RIDGE" },
  { id: "04 / 05", title: "SOLAR RIDGE" },
  { id: "05 / 05", title: "SOLAR RIDGE" },
];

export default function Mid2() {
  const refs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1); // 👈 NO CARD INITIALLY

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx - 1); // 👈 SHIFT INDEX
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-black">
      {/* TOTAL SCROLL HEIGHT */}
      <div className="relative h-[700vh]">

        {/* ================= STICKY BACKGROUND ================= */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* GRID */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* BIG TEXT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center leading-none font-extrabold text-[#f5f1e6]">
              <div className="text-[8rem] md:text-[10rem] lg:text-[12rem]">
                HIGHLIGHTED
              </div>
              <div className="text-[8rem] md:text-[10rem] lg:text-[12rem]">
                MISSIONS
              </div>
            </div>
          </div>

          {/* ================= CARD LAYER ================= */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {missions.map((mission, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <div
                  key={index}
                  className={`
                    absolute transition-all duration-700 ease-in-out
                    ${isActive ? "opacity-100 translate-y-0 scale-100" : ""}
                    ${isPast ? "opacity-0 -translate-y-40 scale-95" : ""}
                    ${index > activeIndex ? "opacity-0 translate-y-40 scale-95" : ""}
                  `}
                >
                  <div className="w-[420px] bg-[#9b998d] rounded-xl p-6 shadow-2xl">
                    <p className="text-center text-xs tracking-widest text-black/70 mb-2">
                      {mission.id}
                    </p>

                    <h2 className="text-center text-4xl font-extrabold tracking-tight text-black mb-4">
                      {mission.title}
                    </h2>

                    <div className="h-[230px] rounded-lg bg-gradient-to-r from-blue-200 via-orange-300 to-yellow-200" />

                    <p className="text-center text-xs tracking-widest text-black/70 mt-4">
                      [ FIELD REPORT ]
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SCROLL TRIGGERS ================= */}
        {/* FIRST EMPTY SCREEN (NO CARD) */}
        <div className="h-screen" />

        {/* CARD TRIGGERS */}
        {missions.map((_, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            data-index={index + 1} // 👈 OFFSET
            className="h-screen"
          />
        ))}
      </div>
    </section>
  );
}
