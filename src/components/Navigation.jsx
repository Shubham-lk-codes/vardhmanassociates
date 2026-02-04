import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/services", label: "SERVICES" },
    { path: "/blogs", label: "BLOGS" },
    { path: "/careers", label: "CAREERS" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1f3b63]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[78px]">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Vardhman Associates Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-white font-bold text-xl tracking-wide">
                VARDHMAN ASSOCIATES
              </h1>
              <p className="text-sm text-gray-200">
                Group of CA, CS & Advocates
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === item.path
                    ? "text-[#4ea3ff]"
                    : "text-white hover:text-[#4ea3ff]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* PHONE */}
            <div className="ml-6 bg-[#203f6f] px-4 py-2 rounded-md">
              <a
                href="tel:+919928857684"
                className="text-white font-semibold whitespace-nowrap"
              >
                +91 99288 57684
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1f3b63] border-t border-blue-900">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-semibold ${
                  location.pathname === item.path
                    ? "text-[#4ea3ff]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:+919928857684"
              className="block text-white font-semibold pt-3 border-t border-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              +91 99288 57684
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
