
import React, { useEffect, useRef, useState } from "react";

/* ================= ASSETS ================= */
import img1 from "../assets/APP_1.jpeg";
import img2 from "../assets/APP_2.jpeg";
import img3 from "../assets/APP_3.jpeg";
import img4 from "../assets/APP_4.jpeg";
import img5 from "../assets/APP_5.jpeg";

/* ================= CONFIG ================= */
const GRID_SIZE = 80;

const missions = [
  { id: "01 / 05", title: "SOLAR RIDGE", img: img1 },
  { id: "02 / 05", title: "SOLAR RIDGE", img: img2 },
  { id: "03 / 05", title: "SOLAR RIDGE", img: img3 },
  { id: "04 / 05", title: "SOLAR RIDGE", img: img4 },
  { id: "05 / 05", title: "SOLAR RIDGE", img: img5 },
];

/* ================= GRID + BLUE THUNDER ================= */
const GridLayer = ({ cell }) => (
  <>
    {/* GRID */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)
        `,
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
      }}
    />

    {/* SKY-BLUE GLOW */}
    {cell.col >= 0 &&
      cell.row >= 0 &&
      [-2, -1, 0, 1, 2].flatMap((dx) =>
        [-2, -1, 0, 1, 2].map((dy) => {
          const dist = Math.abs(dx) + Math.abs(dy);
          if (dist > 3) return null;

          const intensity = Math.max(0, 1 - dist * 0.25);

          return (
            <div
              key={`${dx}-${dy}`}
              className="absolute pointer-events-none"
              style={{
                left: (cell.col + dx) * GRID_SIZE,
                top: (cell.row + dy) * GRID_SIZE,
                width: GRID_SIZE,
                height: GRID_SIZE,
                boxShadow: `
                  inset 0 0 0 ${dx === 0 && dy === 0 ? 2 : 1}px rgba(0,200,255,${0.9 * intensity}),
                  0 0 ${22 * intensity}px rgba(0,200,255,${0.75 * intensity}),
                  0 0 ${55 * intensity}px rgba(0,200,255,${0.55 * intensity})
                `,
              }}
            />
          );
        })
      )}

    {/* VIGNETTE */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_40%,rgba(0,0,0,0.15))]" />
  </>
);

/* ================= MID2 ================= */
export default function Mid2() {
  const refs = useRef([]);
  const containerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [cell, setCell] = useState({ col: -1, row: -1 });

  /* ===== SCROLL LOGIC ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.dataset.index);
          setActiveIndex(idx === -1 ? -1 : idx - 1);
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===== MOUSE GRID TRACKING ===== */
  const onMouseMove = (e) => {
    const r = containerRef.current.getBoundingClientRect();
    setCell({
      col: Math.floor((e.clientX - r.left) / GRID_SIZE),
      row: Math.floor((e.clientY - r.top) / GRID_SIZE),
    });
  };

  return (
    <section className="relative w-full bg-white">
      <div className="relative h-[700vh]">

        {/* ================= STICKY CANVAS ================= */}
        <div
          ref={containerRef}
          className="sticky top-0 h-screen overflow-hidden"
          onMouseMove={onMouseMove}
          onMouseLeave={() => setCell({ col: -1, row: -1 })}
        >
          <GridLayer cell={cell} />

          {/* BACKGROUND TEXT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center leading-none font-extrabold text-[#d2d2d2]">
              <div className="text-[8rem] md:text-[10rem] lg:text-[12rem]">
                HIGHLIGHTED
              </div>
              <div className="text-[8rem] md:text-[10rem] lg:text-[12rem]">
                MISSIONS
              </div>
            </div>
          </div>

          {/* ================= CARDS ================= */}
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
                  <div className="max-w-[90vw] w-[420px] bg-white rounded-2xl p-5 border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                    <p className="text-center text-xs tracking-widest text-black/60 mb-2">
                      {mission.id}
                    </p>

                    <h2 className="text-center text-4xl font-extrabold text-black mb-4">
                      {mission.title}
                    </h2>

                    {/* IMAGE */}
                    <div className="w-full rounded-xl overflow-hidden flex justify-center bg-black/5">
                      <img
                        src={mission.img}
                        alt={mission.title}
                        className="
                          w-auto
                          max-h-[360px]
                          md:max-h-[420px]
                          object-contain
                        "
                      />
                    </div>

                    <p className="text-center text-xs tracking-widest text-black/60 mt-4">
                      [ FIELD REPORT ]
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SCROLL TRIGGERS ================= */}
        <div
          ref={(el) => (refs.current[0] = el)}
          data-index={-1}
          className="h-screen"
        />

        {missions.map((_, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i + 1] = el)}
            data-index={i + 1}
            className="h-screen"
          />
        ))}
      </div>
    </section>
  );
}
