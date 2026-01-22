import React from "react";

export default function Mid3() {
  return (
    <div className="w-full py-16 relative overflow-hidden">
      {/* FULL GRID BACKGROUND (NO EMPTY BLACK) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#000",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          backgroundPosition: "0 0",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-56 md:h-64 rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-xl"
            />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-56 md:h-64 rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
