import React from "react";
import { CheckCircle, Users, Handshake } from "lucide-react";

const HomeTwo = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src="/about-law.jpg"   // image public folder me
            alt="Legal Consulting"
            className="w-full h-[520px] object-cover  shadow-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="pt-2">

          {/* ABOUT US BADGE */}
          <div className="mb-6">
            <span className="inline-block px-6 py-2 text-sm font-medium text-[#3b82f6] border border-[#c7dcff] rounded-lg">
              About Us
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[44px] leading-[1.2] font-extrabold text-[#0b1c39] mb-8">
            18 Years of Trusted Legal <br />
            Consulting in Jaipur
          </h2>

          {/* DESCRIPTION */}
          <div className="max-h-[230px] overflow-y-auto pr-4 text-[16px] leading-[1.9] text-[#5b5b5b] mb-14 scrollbar-thin scrollbar-thumb-gray-300">
            <p>
              Vardhman Associates is one of the leading professional services
              organization established in 2008, having its corporate office in
              Jaipur. Vardhman Associates is a top player in the category of
              Income-tax, ROC and GST Consultants in Jaipur.
            </p>
            <p className="mt-4">
              Over the course of its journey, this business has established a
              firm foothold in its industry. The belief that customer
              satisfaction is as important as their services, have helped this
              establishment garner a vast base of customers, which continues
              to grow by the day.
            </p>
            <p className="mt-4">
              It is known to provide top service in the following categories:
              Corporate Taxation, Legal & Corporate Advisor, Tax Planner,
              Income-Tax & GST Consultant and Company Secretarial services.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* Expert Team */}
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0b1c39] flex items-center justify-center text-white mb-4">
                <CheckCircle size={26} />
              </div>
              <h4 className="font-bold text-lg text-[#0b1c39] mb-2">
                Expert Team
              </h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Qualified professionals with extensive experience
              </p>
            </div>

            {/* Client Focus */}
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0b1c39] flex items-center justify-center text-white mb-4">
                <Users size={26} />
              </div>
              <h4 className="font-bold text-lg text-[#0b1c39] mb-2">
                Client Focus
              </h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Dedicated to understanding and meeting client needs
              </p>
            </div>

            {/* Trusted Partnership */}
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0b1c39] flex items-center justify-center text-white mb-4">
                <Handshake size={26} />
              </div>
              <h4 className="font-bold text-lg text-[#0b1c39] mb-2">
                Trusted Partnership
              </h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Long-term relationship building with personalized attention
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwo;
