import { useState } from "react";
import {
  ShieldCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

const ImageBox = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200">
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-white relative">
        <div className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-2 items-center">
          <div>
            <h1 className="text-6xl font-bold text-[#0b1f3c]">About</h1>
            <p className="mt-4 text-blue-600">
              Home <span className="text-gray-400">/</span> About
            </p>
          </div>

          <div className="flex justify-end">
            <div className="w-[420px] h-[280px] bg-gray-200 rounded-xl" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-2 gap-16 items-center">
        <div className="h-[520px]">
          <ImageBox src="/images/about-main.jpg" alt="About" />
        </div>

        <div>
          <span className="inline-block border border-blue-300 text-blue-600 px-5 py-2 rounded-full mb-6">
            About Us
          </span>

          <h2 className="text-5xl font-bold text-[#0b1f3c] leading-tight">
            About Vardhman Associates
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Vardhman Associates is a knowledge-driven consulting firm delivering
            excellent advisory in finance, tax, and corporate law tailored to
            client-specific challenges. With 15+ years of experience, 500+
            satisfied clients, and a 4.9/5 star rating, we are Jaipur's trusted
            partner for CA, CS, Legal & Tax Consulting.
          </p>

          {/* Tabs */}
          <div className="mt-8 border rounded-xl p-6">
            <div className="flex gap-8 border-b pb-3 mb-4 text-blue-600 font-medium">
              <span className="text-gray-800">Mission</span>
              <span>Vision</span>
              <span>Core Team</span>
            </div>

            <p className="text-gray-600">
              To be a knowledge-driven consulting firm, delivering excellent
              advisory in finance, tax, and corporate law tailored to
              client-specific challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-10 py-12">
        <div className="grid grid-cols-3 border rounded-xl overflow-hidden">

          <div className="p-8 flex gap-4">
            <ShieldCheck className="text-[#0b1f3c]" size={42} />
            <div>
              <h3 className="text-xl font-bold text-[#0b1f3c]">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 mt-2">
                Clear and upfront pricing with no hidden charges
              </p>
            </div>
          </div>

          <div className="p-8 flex gap-4 border-l">
            <Users className="text-[#0b1f3c]" size={42} />
            <div>
              <h3 className="text-xl font-bold text-[#0b1f3c]">
                Expert Team
              </h3>
              <p className="text-gray-600 mt-2">
                Qualified professionals with extensive experience
              </p>
            </div>
          </div>

          <div className="p-8 flex gap-4 border-l">
            <BadgeCheck className="text-[#0b1f3c]" size={42} />
            <div>
              <h3 className="text-xl font-bold text-[#0b1f3c]">
                Compliance Assurance
              </h3>
              <p className="text-gray-600 mt-2">
                Expert guidance to ensure your business stays compliant
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="max-w-7xl mx-auto px-10 py-24 text-center">
        <span className="inline-block border border-blue-300 text-blue-600 px-5 py-2 rounded-full mb-6">
          Our Team
        </span>

        <h2 className="text-5xl font-bold text-[#0b1f3c] mb-16">
          Exclusive Team
        </h2>

        {/* COMPANY SECRETARIES */}
        <h3 className="text-3xl font-bold text-[#0b1f3c] mb-10">
          Company Secretaries
        </h3>

        <div className="grid grid-cols-3 gap-10 mb-24">
          {["CS Manish Jain", "CS Parv Tholia", "CS Raj Saini"].map(
            (name, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 shadow-sm"
              >
                <div className="h-[320px] mb-6">
                  <ImageBox src={`/images/cs-${i}.jpg`} alt={name} />
                </div>
                <h4 className="text-xl font-bold text-[#0b1f3c]">
                  {name}
                </h4>
              </div>
            )
          )}
        </div>

        {/* ADVOCATES */}
        <h3 className="text-3xl font-bold text-[#0b1f3c] mb-10">
          Advocates
        </h3>

        <div className="grid grid-cols-3 gap-10 mb-24">
          {[
            "Advocate Taruna Jain",
            "Pooja Kanwar",
            "Pallavi Khan",
          ].map((name, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 shadow-sm"
            >
              <div className="h-[320px] mb-6">
                <ImageBox src={`/images/adv-${i}.jpg`} alt={name} />
              </div>
              <h4 className="text-xl font-bold text-[#0b1f3c]">
                {name}
              </h4>
            </div>
          ))}
        </div>

        {/* CHARTERED ACCOUNTANTS */}
        <h3 className="text-3xl font-bold text-[#0b1f3c] mb-10">
          Chartered Accountants
        </h3>

        <div className="grid grid-cols-3 gap-10">
          {[
            "CA Manu Jain",
            "CA Abhishek Jain",
            "CA Arun Sharma",
          ].map((name, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 shadow-sm"
            >
              <div className="h-[320px] mb-6">
                <ImageBox src={`/images/ca-${i}.jpg`} alt={name} />
              </div>
              <h4 className="text-xl font-bold text-[#0b1f3c]">
                {name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
