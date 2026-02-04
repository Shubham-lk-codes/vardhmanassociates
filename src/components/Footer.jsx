import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#031b3a] text-white relative">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* OUR OFFICE */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Our Office</h3>

          <ul className="space-y-4 text-[15px] text-gray-200 leading-relaxed">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-1" />
              <span>
                Office Address: Plot No. F-27B, Scheme, New Sanganer Rd,
                6D Engineers Colony, Manyawas, Mansarovar,
                Jaipur, Rajasthan 302020
              </span>
            </li>

            <li className="flex gap-3">
              <Phone size={18} />
              <span>+91 9928857684</span>
            </li>

            <li className="flex gap-3">
              <Mail size={18} />
              <span>vardhman.assoiates8@gmail.com</span>
            </li>

            <li className="flex gap-3">
              <Clock size={18} />
              <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Our Services</h3>

          <ul className="space-y-4 text-[15px] text-gray-200">
            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/services/ca">CA Services</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/services/cs">CS Services</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/services/advocate">Advocate Services</Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>

          <ul className="space-y-4 text-[15px] text-gray-200">
            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/about">About Us</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/contact">Contact Us</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/services">Our Services</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/careers">Careers</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <ChevronRight size={18} />
              <Link to="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black text-gray-300 text-center py-4 text-sm">
        © Vardhman Associates, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
