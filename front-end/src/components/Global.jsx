import React, { useState } from "react";

const GRID_SIZE = 80;

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

    {/* BLUE THUNDER */}
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

export default function GlobalBackground({ children }) {
  const [cell, setCell] = useState({ col: -1, row: -1 });

  const onMouseMove = (e) => {
    setCell({
      col: Math.floor(e.clientX / GRID_SIZE),
      row: Math.floor(e.clientY / GRID_SIZE),
    });
  };

  return (
    <div
      className="relative min-h-screen bg-white"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setCell({ col: -1, row: -1 })}
    >
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <GridLayer cell={cell} />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
