import { Check } from "lucide-react";

const WHATSAPP_NUMBER = "919928857684"; // +91 without +

const Careers = () => {
  const openWhatsApp = (message) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="w-full">

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-2 items-center">
          <div>
            <h1 className="text-6xl font-bold text-[#5b8edc]">Careers</h1>
            <p className="mt-4 text-white uppercase tracking-wider">
              Home / <span className="text-[#5b8edc]">Careers</span>
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src="/images/career-hero.png"
              alt="Careers"
              className="max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ===== HEADING ===== */}
      <section className="text-center py-20">
        <span className="inline-block border border-blue-300 text-blue-600 px-6 py-2 rounded-full mb-6">
          Join Our Team
        </span>

        <h2 className="text-5xl font-bold text-[#0b1f3c]">
          Build Your Career With Us
        </h2>
      </section>

      {/* ===== CARDS ===== */}
      <section className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-10">

        {/* FULL TIME */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#1c3557] text-white px-8 py-6 text-2xl font-semibold">
            Full-Time Positions
          </div>

          <div className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-[#0b1f3c]">
              Current Openings
            </h3>

            <ul className="space-y-3 text-gray-700">
              {[
                "Chartered Accountant (CA)",
                "Company Secretary (CS)",
                "Legal Consultant",
                "Tax Consultant",
                "Business Development Executive",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-[#0b1f3c] pt-4">
              Benefits
            </h3>

            <ul className="space-y-3 text-gray-700">
              {[
                "Competitive salary package",
                "Health insurance coverage",
                "Professional development opportunities",
                "Work-life balance",
                "Growth-oriented environment",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                openWhatsApp("Hello, I want to apply for a full-time position.")
              }
              className="mt-6 bg-[#4f8fe0] text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* INTERNSHIP */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#1c3557] text-white px-8 py-6 text-2xl font-semibold">
            Internship Program
          </div>

          <div className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-[#0b1f3c]">
              Available Internships
            </h3>

            <ul className="space-y-3 text-gray-700">
              {[
                "CA Articleship",
                "CS Internship",
                "Legal Internship",
                "Tax & Compliance Internship",
                "Business Development Internship",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-[#0b1f3c] pt-4">
              Program Benefits
            </h3>

            <ul className="space-y-3 text-gray-700">
              {[
                "Hands-on experience",
                "Mentorship from industry experts",
                "Stipend based on performance",
                "Potential for full-time employment",
                "Professional networking opportunities",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                openWhatsApp(
                  "Hello, I want to apply for an internship program."
                )
              }
              className="mt-6 bg-[#4f8fe0] text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Apply for Internship
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY JOIN ===== */}
      <section className="max-w-7xl mx-auto px-10 py-24 text-center">
        <h2 className="text-4xl font-bold text-[#0b1f3c] mb-14">
          Why Join Vardhman Associates?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Professional Growth",
              desc: "Continuous learning and development opportunities in a dynamic work environment.",
            },
            {
              title: "Work Culture",
              desc: "A supportive and collaborative work environment that values innovation and teamwork.",
            },
            {
              title: "Career Progression",
              desc: "Clear career paths and opportunities for advancement within the organization.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-8 text-left hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-[#0b1f3c] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
