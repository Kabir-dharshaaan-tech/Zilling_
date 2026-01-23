import { useEffect, useRef, useState } from "react";

const CARDS = [
  { id: 1, title: "CONVERGENCE RELAY" },
  { id: 2, title: "STELLAR PIVOT" },
  { id: 3, title: "FIELDWORK ROUTINE" },
  { id: 4, title: "MECHANICS CORE" },
  { id: 5, title: "FINAL TRANSMISSION" },
];

export function HorizontalScrollCards() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / scrollable, 0),
        1
      );

      const trackWidth =
        trackRef.current.scrollWidth - window.innerWidth;

      setX(-trackWidth * progress);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-black text-white"
    >
      {/* STICKY PIN */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* HORIZONTAL TRACK */}
        <div
          ref={trackRef}
          className="flex gap-12 px-24 transition-transform duration-100 ease-out"
          style={{
            transform: `translateX(${x}px)`,
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="flex h-[420px] w-[520px] shrink-0 items-end rounded-2xl border border-neutral-700 bg-neutral-900 p-10"
            >
              <h2 className="text-4xl font-extrabold tracking-tight">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
