import React from "react";
import { Check } from "lucide-react";

const HomeFour = () => {
  return (
    <section className="w-full bg-[#1f3a5f]">

      {/* =======================
          TOP HEADER
      ======================= */}
      <div className="w-full py-24 text-center">
        <span className="inline-block mb-6 px-6 py-2 border border-blue-300 text-blue-300 rounded-lg text-sm font-medium">
          Who We Are
        </span>

        <h2 className="text-5xl font-bold text-white">
          Meet Our Founder
        </h2>
      </div>

      {/* =======================
          MAIN CONTENT (PADDING FIX)
      ======================= */}
      <div className="w-full pb-28">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-end pl-6">
            <img
              src="/founder.jpg"
              alt="Manish Founder"
              className="w-full max-w-[460px] rounded-xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT BOX */}
          <div className="bg-[#243f63] rounded-xl p-10 text-white mr-6">

            <p className="text-base leading-relaxed mb-6 text-white/90">
              Manish is a distinguished Chartered Accountant and Company
              Secretary with over 18 years of extensive experience in finance,
              taxation, auditing, and corporate compliance. As a proud member
              of the Institute of Chartered Accountants of India (ICAI) and the
              Institute of Company Secretaries of India (ICSI), he brings a
              wealth of expertise in both financial and legal domains.
            </p>

            <p className="text-base leading-relaxed mb-6 text-white/90">
              With a passion for empowering businesses, Manish has dedicated his
              career to guiding clients through the complexities of financial
              management and legal compliance. His firm, Vardhman Associates,
              has successfully handled a wide range of services including
              Statutory Audits, Internal Audits, Tax Audits, GST Audits, Stock
              Audits, Due Diligence, and Corporate Advisory Services.
            </p>

            <p className="text-base leading-relaxed mb-10 text-white/90">
              His hands-on approach ensures that businesses not only meet
              regulatory requirements but also optimize their financial
              processes for sustainable growth. As a Company Secretary, he
              seamlessly bridges the gap between legal and financial services,
              providing businesses with end-to-end solutions under one roof.
            </p>

            {/* TAGS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Tag label="Chartered Accountant" />
              <Tag label="Company Secretary" />
              <Tag label="Tax Expert" />
              <Tag label="Legal Advisor" />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

/* =======================
   TAG
======================= */
const Tag = ({ label }) => (
  <div className="flex items-center gap-4 bg-[#2f4a6d] px-6 py-4 rounded-xl">
    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
      <Check size={18} className="text-white" />
    </div>
    <span className="text-white font-medium">{label}</span>
  </div>
);

export default HomeFour;
