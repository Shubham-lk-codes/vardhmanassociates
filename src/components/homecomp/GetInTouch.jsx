import { useState } from "react";
import axios from "axios";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", formData);
    alert("Message sent successfully");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="w-full bg-[#1c3557] py-20 px-6 font-[Inter]">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block px-6 py-1 text-sm border border-blue-400 text-blue-300 rounded-md mb-4">
          Contact Us
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Get In Touch
        </h2>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1c3557] space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#203f66] text-white placeholder:text-gray-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#203f66] text-white placeholder:text-gray-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 rounded-xl bg-[#203f66] text-white placeholder:text-gray-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 rounded-xl bg-[#203f66] text-white placeholder:text-gray-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-[#e6ecff] text-[#1c3557] py-4 rounded-xl font-semibold hover:bg-white transition"
          >
            Send Message
          </button>
        </form>

        {/* Right Image Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-[#1c3557]/80 backdrop-blur-sm text-white text-center px-6 py-5">
            <p className="text-lg font-medium">
              "Your Success is Our Priority - Let's Build Something Great Together"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
