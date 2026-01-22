import React from "react";

export default function Mid2() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* DARK OVERLAY FOR DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 text-center">
        <h1 className="text-[#f5f1e6] font-extrabold leading-none tracking-tight">
          <span className="block text-[8rem] md:text-[10rem] lg:text-[12rem]">
            HIGHLIGHTED
          </span>
          <span className="block text-[8rem] md:text-[10rem] lg:text-[12rem]">
            MISSIONS
          </span>
        </h1>
      </div>
    </section>
  );
}
