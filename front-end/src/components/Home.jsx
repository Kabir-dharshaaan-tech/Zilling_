


import React, { useEffect, useRef, useState } from "react";

const GRID_SIZE = 80;
const clamp = (v) => Math.min(Math.max(v, 0), 1);

const GridLayer = ({ cell }) => (
  <>
    {/* GRID (for white background) */}
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

    {/* SKY-BLUE THUNDER */}
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

    {/* VIGNETTE FOR WHITE */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_40%,rgba(0,0,0,0.15))]" />
  </>
);

const Home = () => {
  const headlineRef = useRef(null);
  const wantSectionRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [wantProgress, setWantProgress] = useState(0);
  const [cell, setCell] = useState({ col: -1, row: -1 });

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

  const mouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setCell({
      col: Math.floor((e.clientX - r.left) / GRID_SIZE),
      row: Math.floor((e.clientY - r.top) / GRID_SIZE),
    });
  };

  return (
    <>
      {/* HEADER */}
      <section className="h-screen bg-white flex items-center px-16">
        <h1 className="text-black text-[5rem] font-extrabold uppercase">
          INTERPLANETARY <br /> OBSERVATORY
        </h1>
      </section>

      {/* SECTION 1 */}
      <section
        ref={headlineRef}
        className="relative h-screen bg-white px-16 pt-48 overflow-hidden"
        onMouseMove={mouse}
        onMouseLeave={() => setCell({ col: -1, row: -1 })}
      >
        <GridLayer cell={cell} />
        <div className="relative z-10 space-y-2">
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
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="relative h-screen bg-white px-16 flex items-center overflow-hidden"
        onMouseMove={mouse}
        onMouseLeave={() => setCell({ col: -1, row: -1 })}
      >
        <GridLayer cell={cell} />
        <div className="relative z-10 max-w-4xl">
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
      <section
        ref={wantSectionRef}
        className="relative h-screen bg-white px-16 pt-32 overflow-hidden"
        onMouseMove={mouse}
        onMouseLeave={() => setCell({ col: -1, row: -1 })}
      >
        <GridLayer cell={cell} />
        <div className="relative z-10 space-y-2">
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
        </div>
      </section>
    </>
  );
};

export default Home;
