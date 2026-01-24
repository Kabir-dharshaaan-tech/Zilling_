
// import React, { useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// /* ================= GRID CONFIG (SAME AS HOME) ================= */
// const GRID_SIZE = 80;

// /* ================= GRID LAYER ================= */
// const GridLayer = ({ cell }) => (
//   <>
//     {/* GRID */}
//     <div
//       className="absolute inset-0 pointer-events-none"
//       style={{
//         backgroundImage: `
//           linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
//           linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)
//         `,
//         backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
//       }}
//     />

//     {/* SKY-BLUE GLOW */}
//     {cell.col >= 0 &&
//       cell.row >= 0 &&
//       [-2, -1, 0, 1, 2].flatMap((dx) =>
//         [-2, -1, 0, 1, 2].map((dy) => {
//           const dist = Math.abs(dx) + Math.abs(dy);
//           if (dist > 3) return null;

//           const intensity = Math.max(0, 1 - dist * 0.25);

//           return (
//             <div
//               key={`${dx}-${dy}`}
//               className="absolute pointer-events-none"
//               style={{
//                 left: (cell.col + dx) * GRID_SIZE,
//                 top: (cell.row + dy) * GRID_SIZE,
//                 width: GRID_SIZE,
//                 height: GRID_SIZE,
//                 boxShadow: `
//                   inset 0 0 0 ${dx === 0 && dy === 0 ? 2 : 1}px rgba(0,200,255,${0.9 * intensity}),
//                   0 0 ${22 * intensity}px rgba(0,200,255,${0.75 * intensity}),
//                   0 0 ${55 * intensity}px rgba(0,200,255,${0.55 * intensity})
//                 `,
//               }}
//             />
//           );
//         })
//       )}

//     {/* VIGNETTE */}
//     <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_40%,rgba(0,0,0,0.15))]" />
//   </>
// );

// /* ================= MID3 ================= */
// export default function Mid3() {
//   const sectionRef = useRef(null);
//   const [cell, setCell] = useState({ col: -1, row: -1 });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const strength = [1, 0.65, 0.35];

//   const mouseMove = (e) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     setCell({
//       col: Math.floor((e.clientX - r.left) / GRID_SIZE),
//       row: Math.floor((e.clientY - r.top) / GRID_SIZE),
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full py-40 bg-white overflow-hidden"
//       onMouseMove={mouseMove}
//       onMouseLeave={() => setCell({ col: -1, row: -1 })}
//     >
//       {/* GRID + GLOW */}
//       <GridLayer cell={cell} />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
        
//         {/* LEFT COLUMN */}
//         <div className="flex flex-col gap-12">
//           {strength.map((s, i) => {
//             const x = useTransform(
//               scrollYProgress,
//               [0, 0.35, 0.6, 1],
//               [0, -120 * s, -620 * s, -760 * s]
//             );

//             const y = useTransform(scrollYProgress, [0, 1], [0, -260]);

//             return (
//               <motion.div
//                 key={i}
//                 style={{ x, y }}
//                 className="
//                   h-56 md:h-64 rounded-2xl
//                   border border-neutral-300
//                   bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100
//                   shadow-xl
//                 "
//               />
//             );
//           })}
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col gap-12">
//           {strength.map((s, i) => {
//             const x = useTransform(
//               scrollYProgress,
//               [0, 0.35, 0.6, 1],
//               [0, 120 * s, 620 * s, 760 * s]
//             );

//             const y = useTransform(scrollYProgress, [0, 1], [0, -260]);

//             return (
//               <motion.div
//                 key={i}
//                 style={{ x, y }}
//                 className="
//                   h-56 md:h-64 rounded-2xl
//                   border border-neutral-300
//                   bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100
//                   shadow-xl
//                 "
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ================= GRID CONFIG ================= */
const GRID_SIZE = 80;

/* ================= GRID LAYER ================= */
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

/* ================= MID3 ================= */
export default function Mid3() {
  const sectionRef = useRef(null);
  const [cell, setCell] = useState({ col: -1, row: -1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const strength = [1, 0.65, 0.35];

  const mouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setCell({
      col: Math.floor((e.clientX - r.left) / GRID_SIZE),
      row: Math.floor((e.clientY - r.top) / GRID_SIZE),
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-40 bg-white overflow-hidden"
      onMouseMove={mouseMove}
      onMouseLeave={() => setCell({ col: -1, row: -1 })}
    >
      {/* GRID BACKGROUND */}
      <GridLayer cell={cell} />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-12">
          {strength.map((s, i) => {
            const x = useTransform(
              scrollYProgress,
              [0, 0.35, 0.6, 1],
              [0, -120 * s, -620 * s, -760 * s]
            );

            const y = useTransform(scrollYProgress, [0, 1], [0, -260]);

            return (
              <motion.div
                key={i}
                style={{ x, y }}
                className="
                  h-56 md:h-64 rounded-2xl
                  border border-neutral-300
                  bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100
                  shadow-xl
                "
              />
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12">
          {strength.map((s, i) => {
            const x = useTransform(
              scrollYProgress,
              [0, 0.35, 0.6, 1],
              [0, 120 * s, 620 * s, 760 * s]
            );

            const y = useTransform(scrollYProgress, [0, 1], [0, -260]);

            return (
              <motion.div
                key={i}
                style={{ x, y }}
                className="
                  h-56 md:h-64 rounded-2xl
                  border border-neutral-300
                  bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100
                  shadow-xl
                "
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
