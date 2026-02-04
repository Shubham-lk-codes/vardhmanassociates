import React from "react";
import { Check } from "lucide-react";

const HomeThree = () => {
  return (
    <section className="w-full bg-white">

      {/* =======================
          SECTION 1 : OUR SERVICES HEADING
      ======================= */}
      <div className="w-full py-24 text-center">
        <span className="inline-block mb-6 px-5 py-2 border border-blue-300 text-blue-500 rounded-lg text-sm font-medium">
          Our Services
        </span>

        <h2 className="text-5xl font-bold text-[#0b1c39] leading-tight">
          Comprehensive Business <br /> Solutions
        </h2>
      </div>

      {/* =======================
          SECTION 2 : CA SERVICES
      ======================= */}
      <ServiceBlock
        title="Chartered Accountant (CA) Services"
        image="/ca-india.png"
        button="Explore CA Services"
        desc="Comprehensive financial and taxation services delivered by qualified Chartered Accountants. We provide expert guidance in all aspects of financial management, compliance, and business advisory."
        footer="Our CA services ensure your business maintains financial integrity while optimizing tax efficiency."
        list={[
          "Start A Business",
          "Business Registration & Licence",
          "Income-Tax Services",
          "GST Services",
          "TDS Services",
          "ESI & PF Services",
          "Income Tax Notice & Appeal",
          "Accounting & Auditing",
          "Society & NGO Services",
          "CMA Data And Project Report",
          "Loan & Project Finance",
        ]}
      />

      {/* =======================
          SECTION 3 : CS SERVICES
      ======================= */}
      <ServiceBlock
        reverse
        title="Company Secretaries (CS) Services"
        image="/cs.png"
        button="Explore CS Services"
        desc="Expert corporate governance and compliance services by qualified Company Secretaries. We ensure your business adheres to all corporate laws and regulatory requirements."
        footer="Our CS services provide comprehensive corporate compliance solutions ensuring transparency and good governance practices."
        list={[
          "Annual Compliances",
          "Corporate & Financial Restructuring",
          "Due Diligence",
          "Company Incorporation & Amendment",
          "Company Strike off & Closer",
          "Winding Up & Dissolution",
          "Secretarial Audit",
          "Insolvency and Bankruptcy Matters",
          "XBRL Filing",
          "NCLT Appeal",
          "Appointment & Resignation",
          "RBI & FEMA Overseas Law Compliance",
          "Minutes & Resolutions",
          "XML Data Conversion",
          "Share Certificate & Transfer",
        ]}
      />

      {/* =======================
          SECTION 4 : ADVOCATE SERVICES
      ======================= */}
      <ServiceBlock
        title="Advocate (Law) Services"
        image="/law.png"
        button="Explore Legal Services"
        desc="Expert legal services provided by qualified advocates. We offer comprehensive legal solutions to protect your rights across various legal domains."
        footer="We ensure your legal rights are protected and guide you through complex legal procedures."
        list={[
          "Civil Law",
          "Banking & Finance Law",
          "Legal Advisory",
          "Consumer Law & Protection",
          "Corporate Law & Advisory",
          "Family Law",
          "Deed Making & Drafting",
          "Debt Recovery & Suit",
          "Labour & Employment Law",
          "NIA Matter",
          "Property Valuation Services",
          "Real Estate & Regulatory Act (RERA)",
          "Appeal",
          "SARFAESI Law",
        ]}
      />

      {/* =======================
          SECTION 5 : LOAN & FINANCE SERVICES
      ======================= */}
      <ServiceBlock
        reverse
        title="Loan and Finance Services"
        image="/finance.png"
        button="Explore Finance Services"
        desc="Comprehensive financial solutions to meet your diverse funding needs. We provide expert guidance for individuals and businesses."
        footer="We ensure you get the best financial solutions tailored to your specific needs."
        list={[
          "Business Loan Processing",
          "Home Loan & Mortgage Services",
          "Personal Loan Advisory",
          "Vehicle Loan Processing",
          "Education Loan Services",
          "Credit Score Analysis & Improvement",
          "Investment Planning & Advisory",
          "Insurance & Risk Management",
          "Financial Planning & Consultation",
          "CMA Data And Project Report",
          "Loan & Project Finance",
          "Debt Restructuring Services",
        ]}
      />

      {/* =======================
          SECTION 6 : WHY CHOOSING US
      ======================= */}
      <div className="w-full bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <span className="inline-block mb-5 px-4 py-2 border border-blue-300 text-blue-500 rounded-lg text-sm font-medium">
              Why Choosing Us!
            </span>

            <h2 className="text-5xl font-bold text-[#0b1c39] leading-tight mb-6">
              Few Reasons Why People <br /> Choosing Us!
            </h2>

            <p className="text-gray-600 max-w-xl leading-relaxed mb-10">
              We provide comprehensive financial and legal services to help your
              business thrive. Our expert team ensures compliance, offers
              strategic guidance, and delivers tailored solutions.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-lg font-medium">
              Explore More
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <WhyCard
              title="Fast Executions"
              text="Quick turnaround time for all compliance and legal matters, ensuring your business stays ahead of deadlines"
            />

            <WhyCard
              title="Financial Security"
              text="Comprehensive financial planning and compliance services to ensure your business's financial health"
            />

            <WhyCard
              title="Expert Guidance"
              text="Professional advice from experienced CA, CS, and legal experts to navigate complex business challenges"
            />

          </div>
        </div>
      </div>

    </section>
  );
};

/* =======================
   REUSABLE COMPONENTS
======================= */

const ServiceBlock = ({
  title,
  desc,
  footer,
  list,
  image,
  button,
  reverse,
}) => (
  <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    {!reverse && <ServiceImage image={image} />}

    <div>
      <h2 className="text-4xl font-bold text-[#0b1c39] mb-5">{title}</h2>
      <p className="text-gray-600 mb-8 max-w-2xl">{desc}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8 text-gray-700">
        {list.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <Check size={18} className="text-blue-500 mt-1" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-600 mb-8 max-w-2xl">{footer}</p>

      <button className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-lg font-medium">
        {button}
      </button>
    </div>

    {reverse && <ServiceImage image={image} />}
  </div>
);

const ServiceImage = ({ image }) => (
  <div className="flex justify-center">
    <img src={image} alt="" className="max-w-[420px] w-full object-contain" />
  </div>
);

const WhyCard = ({ title, text }) => (
  <div className="border border-blue-200 rounded-xl p-8">
    <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-blue-100">
      <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <h3 className="text-xl font-semibold text-[#0b1c39] mb-3">{title}</h3>

    <p className="text-gray-600 mb-6">{text}</p>

    <span className="text-blue-500 font-medium inline-flex items-center gap-1 cursor-pointer">
      Read More →
    </span>
  </div>
);

export default HomeThree;
