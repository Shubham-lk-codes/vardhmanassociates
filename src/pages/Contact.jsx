import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Message sent successfully");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#0B1F3C]">Contact</h1>
            <p className="mt-4 text-lg text-gray-600">
              <span className="text-blue-600">Home</span> / Contact
            </p>
          </div>

          <div className="hidden md:flex justify-end">
            <img
              src="/images/contact-hero.png"
              alt="Contact"
              className="max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ===== GET IN TOUCH ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block px-4 py-1 border border-blue-300 rounded-full text-blue-600 text-sm">
            Contact
          </span>

          <h2 className="text-4xl font-bold text-[#0B1F3C] mt-6">
            Get in Touch
          </h2>

          <div className="mt-6 space-y-3 text-gray-700 leading-relaxed">
            <p className="font-semibold">Vardhman Associates</p>
            <p>(Group of CA, CS and Advocates)</p>
            <p>
              Office Address: Plot No. F-27B, Scheme, New Sanganer Rd,
              6D Engineers Colony, Manyawas, Mansarovar,
              Jaipur, Rajasthan 302020
            </p>

            <p className="mt-4">
              For expert guidance in CA, CS, Legal & Tax Consulting,
              reach out to us. Offices across Jaipur.
              Free 15-min consultation for business compliance.
            </p>

            <p className="text-blue-600 mt-4">
              ✉ Email: vardhman.assoiates8@gmail.com
            </p>
            <p className="text-blue-600">
              ☎ Phone: +91 9928857684
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3 w-full focus:outline-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3 w-full focus:outline-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 w-full focus:outline-blue-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 w-full focus:outline-blue-500"
            />

            <button
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* MAP */}
        <div className="w-full h-[520px] rounded-xl overflow-hidden shadow">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Vardhman%20Associates%20Jaipur&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-[#0B1F3C] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <details
              key={i}
              className="border rounded-lg p-5 cursor-pointer"
            >
              <summary className="font-medium text-blue-600">
                {faq.q}
              </summary>
              <p className="mt-3 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

const faqData = [
  {
    q: "What types of business registrations do you handle?",
    a: "We handle Private Limited, LLP, OPC, Nidhi, Section 8 companies and licenses like FSSAI, MSME, Shop Act.",
  },
  {
    q: "What tax services do you provide?",
    a: "Income Tax, GST registration & returns, audits, tax planning and compliance.",
  },
  {
    q: "What legal services do you offer?",
    a: "Corporate compliance, drafting agreements, legal advisory and litigation support.",
  },
  {
    q: "Where are your offices located?",
    a: "Our offices are located in Jaipur, Rajasthan.",
  },
  {
    q: "What are your payment terms?",
    a: "Payment terms depend on service type and scope. Contact us for details.",
  },
];

export default Contact;
