import React from "react";

const HomeOne = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/h1.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* TOP BADGE */}
        <div className="mb-8">
          <span className="inline-block px-5 py-2 text-sm font-medium text-[#6bb6ff] border border-[#6bb6ff] rounded-md bg-white/10 backdrop-blur-sm">
            Jaipur's Leading Legal Experts
          </span>
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-white font-bold leading-tight
                       text-4xl md:text-5xl lg:text-6xl mb-10 drop-shadow-lg">
          Expert Legal Guidance to <br />
          <span className="block mt-2">
            Navigate Business Compliance
          </span>
        </h1>

        {/* CTA BUTTON */}
        <div className="mt-6">
          <button className="px-10 py-4 text-lg font-semibold text-white
                             bg-[#6bb6ff] rounded-lg
                             hover:bg-[#5aa8f5]
                             transition-all duration-300 shadow-lg">
            Our Services
          </button>
        </div>
      </div>

      {/* SLIDER ARROWS (visual only) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex">
        <div className="w-10 h-10 rounded-full bg-[#6bb6ff]/80 flex items-center justify-center text-white text-xl cursor-pointer">
          ‹
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex">
        <div className="w-10 h-10 rounded-full bg-[#6bb6ff]/80 flex items-center justify-center text-white text-xl cursor-pointer">
          ›
        </div>
      </div>

    </section>
  );
};

export default HomeOne;
