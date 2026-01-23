import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1f1f1f] text-[#e8e3d6] overflow-hidden">
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between gap-16">
          {/* Heading */}
          <h2 className="text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-extrabold uppercase tracking-tight">
            Send a signal if you want
            <br />
            to connect
          </h2>

          {/* Input + Button */}
          <div className="flex items-center max-w-md">
            <input
              type="text"
              placeholder="UNIT ADDRESS"
              className="flex-1 bg-[#3a3a3a] text-sm tracking-widest uppercase
                         px-5 py-4 outline-none placeholder:text-neutral-500"
            />
            <button
              className="ml-3 px-6 py-4 border border-neutral-500
                         text-xs tracking-widest uppercase hover:bg-neutral-800
                         transition"
            >
              Transmit Message
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10">
          {/* Description */}
          <p className="max-w-md text-sm leading-relaxed text-neutral-300">
            Orbit Matter is an independent observatory lab devoted to quiet study
            and creative exploration. Every discovery is recorded, decoded and
            shared with those who wander through our outpost.
          </p>

          {/* Links */}
          <div className="text-xs tracking-widest uppercase text-neutral-400 leading-loose">
            <div>[ Instagram ] [ YouTube Signals ] [ Twitter ] [ LinkedIn ]</div>
            <div>
              [ Github Repository ] [ Discord Hub ] [ Dribbble ] [ Behance Archive ]
            </div>
            <div>[ Homebase ]</div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          
          {/* Left Meta */}
          <div className="text-xs tracking-widest uppercase text-neutral-400">
            [ Constructed by Codegrid ]
          </div>

          {/* Center Meta */}
          <div className="text-xs tracking-widest uppercase text-neutral-500">
            [ Template Release / Nov 2025 ]
          </div>

          {/* Brand */}
          <div className="text-[4rem] md:text-[6rem] font-extrabold uppercase leading-none">
            Orbit Matter<span className="align-top text-sm">©</span>
          </div>
        </div>
      </div>

      {/* CORNER CUT (optional aesthetic) */}
      <div className="absolute bottom-0 left-0 w-10 h-10 bg-black clip-path-polygon" />
    </footer>
  );
};

export default Footer;
