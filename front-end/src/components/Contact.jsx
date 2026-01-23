import React, { useState } from "react";

const faqs = [
  "HOW DO I OPEN A CHANNEL TO THE OBSERVATORY?",
  "WHAT TYPE OF MISSIONS ARE RECORDED IN THE ARCHIVE?",
  "CAN OUTSIDE UNITS COLLABORATE WITH ORBIT MATTER?",
  "WHERE CAN I VIEW THE COLLECTED DISCOVERIES?",
  "HOW LONG DOES MESSAGE VERIFICATION TAKE?",
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ================= CONTACT FORM ================= */}
      <section className="min-h-screen bg-[#242424] text-[#e8e3d6] px-8 md:px-20 py-20">
        <div className="flex justify-between items-center mb-16">
          <p className="text-xs tracking-widest uppercase opacity-70">
            Communication Form
          </p>
          <p className="text-xs tracking-widest uppercase opacity-70">
            Send a message to the station
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          INITIATE A TRANSMISSION
        </h1>

        <p className="max-w-3xl text-sm md:text-base leading-relaxed opacity-80 mb-20">
          Reach out to the observatory with any request or inquiry. We respond to
          all incoming transmissions once a stable link has been confirmed by
          the communication desk.
        </p>

        <p className="text-xs tracking-widest uppercase opacity-70 mb-6">
          Channel open for messages
        </p>

        <form className="space-y-6 max-w-4xl">
          <input
            type="text"
            placeholder="IDENTIFICATION"
            className="w-full bg-[#3a3a3a] text-sm tracking-widest placeholder:opacity-40 px-6 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e8e3d6]/30"
          />

          <input
            type="text"
            placeholder="UNIT ADDRESS"
            className="w-full bg-[#3a3a3a] text-sm tracking-widest placeholder:opacity-40 px-6 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e8e3d6]/30"
          />

          <textarea
            rows="6"
            placeholder="TRANSMISSION DETAILS"
            className="w-full bg-[#3a3a3a] text-sm tracking-widest placeholder:opacity-40 px-6 py-4 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-[#e8e3d6]/30"
          />

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

      {/* ================= FAQ SECTION ================= */}
      <section
        className="relative text-[#e8e3d6] px-8 md:px-20 py-32"
        style={{
          backgroundColor: "#0f0f0f",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            A COMPILED SET OF <br />
            FREQUENTLY RECEIVED <br />
            QUESTIONS IS RECORDED <br />
            FOR YOUR REFERENCE
          </h2>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((question, index) => (
              <div
                key={index}
                className="bg-[#242424] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-sm md:text-base font-semibold tracking-wide hover:bg-[#2e2e2e] transition"
                >
                  {question}
                  <span className="text-xl">
                    {openIndex === index ? "–" : "→"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-sm opacity-70 leading-relaxed">
                    Transmission details are classified. Authorized units will
                    receive further instructions once verification is complete.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
