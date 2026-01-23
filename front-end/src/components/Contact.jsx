import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#242424] text-[#e8e3d6] px-8 md:px-20 py-20">
      {/* Top labels */}
      <div className="flex justify-between items-center mb-16">
        <p className="text-xs tracking-widest uppercase opacity-70">
          Communication Form
        </p>
        <p className="text-xs tracking-widest uppercase opacity-70">
          Send a message to the station
        </p>
      </div>

      {/* Main heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
        INITIATE A TRANSMISSION
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-sm md:text-base leading-relaxed opacity-80 mb-20">
        Reach out to the observatory with any request or inquiry. We respond to
        all incoming transmissions once a stable link has been confirmed by the
        communication desk.
      </p>

      {/* Section label */}
      <p className="text-xs tracking-widest uppercase opacity-70 mb-6">
        Channel open for messages
      </p>

      {/* Form */}
      <form className="space-y-6 max-w-4xl">
        {/* Identification */}
        <input
          type="text"
          placeholder="IDENTIFICATION"
          className="w-full bg-[#3a3a3a] text-sm tracking-widest placeholder:opacity-40 px-6 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e8e3d6]/30"
        />

        {/* Unit Address */}
        <input
          type="text"
          placeholder="UNIT ADDRESS"
          className="w-full bg-[#3a3a3a] text-sm tracking-widest placeholder:opacity-40 px-6 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e8e3d6]/30"
        />

        {/* Transmission Details */}
        <textarea
          rows="6"
          placeholder="TRANSMISSION DETAILS"
          className="w-full bg-[#3a3a3a] text-sm tracking-widest placeholder:opacity-40 px-6 py-4 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-[#e8e3d6]/30"
        />

        {/* Send button */}
        <div className="pt-8">
          <button
            type="submit"
            className="w-full border border-[#e8e3d6]/30 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#e8e3d6] hover:text-[#242424] transition-all duration-300"
          >
            Send Transmission
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
