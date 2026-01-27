

import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/app1.jpeg";
import img2 from "../assets/app2.jpeg";
import img3 from "../assets/app3.jpeg";
import img4 from "../assets/app4.jpeg";
import img5 from "../assets/app5.jpeg";

const missions = [
  { id: "01 / 05", title: "SOLAR RIDGE", img: img1 },
  { id: "02 / 05", title: "SOLAR RIDGE", img: img2 },
  { id: "03 / 05", title: "SOLAR RIDGE", img: img3 },
  { id: "04 / 05", title: "SOLAR RIDGE", img: img4 },
  { id: "05 / 05", title: "SOLAR RIDGE", img: img5 },
];

export default function Mid2() {
  const refs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.dataset.index);
          setActiveIndex(idx - 1);
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full">
      <div className="relative h-[700vh]">
        {/* Sticky card container */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {missions.map((m, i) => {
            const active = i === activeIndex;
            return (
              <div
                key={i}
                className={`absolute transition-all duration-700 ${
                  active ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {/* Card */}
                <div className="w-[380px] h-[550px] bg-white rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col items-center">
                  <p className="text-xs text-center">{m.id}</p>
                  <h2 className="text-3xl font-extrabold text-center mb-3">
                    {m.title}
                  </h2>
                  <img
                    src={m.img}
                    alt=""
                    className="rounded-xl object-contain h-[450px] w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Invisible scroll triggers */}
        {missions.map((_, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            data-index={i + 1}
            className="h-screen"
          />
        ))}
      </div>
    </section>
  );
}






