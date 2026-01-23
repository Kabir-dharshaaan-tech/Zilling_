

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Mid3() {
  const sectionRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={sectionRef}
      className="w-full py-24 relative overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#000",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          {[0, 1, 2].map((i) => {
            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [0, -300 - i * 120]
            );
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, -180 - i * 80]
            );

            return (
              <motion.div
                key={i}
                style={{ x, y }}
                className="h-56 md:h-64 rounded-2xl border border-neutral-700
                           bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900
                           shadow-xl"
              />
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8">
          {[0, 1, 2].map((i) => {
            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [0, 300 + i * 120]
            );
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, -180 - i * 80]
            );

            return (
              <motion.div
                key={i}
                style={{ x, y }}
                className="h-56 md:h-64 rounded-2xl border border-neutral-700
                           bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900
                           shadow-xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
