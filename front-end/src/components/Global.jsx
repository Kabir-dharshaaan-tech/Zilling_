


import React, { useEffect, useRef, useState } from "react";

const GRID_SIZE = 40;
const SMOOTH = 0.18;
const TRAIL_LENGTH = 6;
const IDLE_DELAY = 120; // ms before fade starts
const FADE_SPEED = 0.08;

function GridLayer({ activeCell, trail, fade }) {
  if (fade <= 0) return null;

  return (
    <>
      {/* BASE GRID */}
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

      {/* GLOW CELLS */}
      {[activeCell, ...trail].map((cell, index) => {
        if (!cell) return null;

        const intensity =
          Math.max(0, 1 - index / (TRAIL_LENGTH + 1)) * fade;

        if (intensity <= 0.01) return null;

        return (
          <div
            key={`${cell.col}-${cell.row}-${index}`}
            className="absolute pointer-events-none"
            style={{
              left: cell.col * GRID_SIZE,
              top: cell.row * GRID_SIZE,
              width: GRID_SIZE,
              height: GRID_SIZE,
              boxShadow: `
                inset 0 0 0 2px rgba(0,180,255,${0.9 * intensity}),
                0 0 ${25 * intensity}px rgba(0,180,255,${0.7 * intensity}),
                0 0 ${60 * intensity}px rgba(0,180,255,${0.5 * intensity})
              `,
            }}
          />
        );
      })}

      {/* VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_35%,rgba(0,0,0,0.18))]" />
    </>
  );
}

export default function GlobalBackground({ children }) {
  const target = useRef({ col: -1, row: -1 });
  const current = useRef({ col: -1, row: -1 });
  const trailRef = useRef([]);

  const lastMoveTime = useRef(0);
  const fadeRef = useRef(0);

  const [, force] = useState(0);

  useEffect(() => {
    const animate = () => {
      const now = performance.now();
      const isMoving = now - lastMoveTime.current < IDLE_DELAY;

      // Fade in / out
      fadeRef.current += (isMoving ? 1 : 0 - fadeRef.current) * FADE_SPEED;
      fadeRef.current = Math.max(0, Math.min(1, fadeRef.current));

      // Smooth grid interpolation
      current.current.col +=
        (target.current.col - current.current.col) * SMOOTH;
      current.current.row +=
        (target.current.row - current.current.row) * SMOOTH;

      const snapped = {
        col: Math.round(current.current.col),
        row: Math.round(current.current.row),
      };

      // Update trail ONLY while moving
      if (isMoving) {
        const last = trailRef.current[0];
        if (
          !last ||
          last.col !== snapped.col ||
          last.row !== snapped.row
        ) {
          trailRef.current.unshift(snapped);
          trailRef.current = trailRef.current.slice(0, TRAIL_LENGTH);
        }
      } else {
        // Clear trail gradually
        if (trailRef.current.length > 0) {
          trailRef.current.pop();
        }
      }

      force((n) => n + 1);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const onMouseMove = (e) => {
    lastMoveTime.current = performance.now();
    target.current = {
      col: Math.floor((e.clientX + window.scrollX) / GRID_SIZE),
      row: Math.floor((e.clientY + window.scrollY) / GRID_SIZE),
    };
  };

  return (
    <div
      className="relative min-h-screen bg-white"
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        fadeRef.current = 0;
        trailRef.current = [];
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <GridLayer
          activeCell={{
            col: Math.round(current.current.col),
            row: Math.round(current.current.row),
          }}
          trail={trailRef.current}
          fade={fadeRef.current}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}





























