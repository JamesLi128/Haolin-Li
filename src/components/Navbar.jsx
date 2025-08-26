import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set initial scroll state
    setIsScrolled(window.scrollY > 50);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) => {
    if (isActive) {
      return "text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 shadow-lg";
    }
    return isScrolled
      ? "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
      : "text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-gradient-to-r from-gray-900 to-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              } whitespace-nowrap inline-block px-2 py-1 rounded-lg hover:scale-105 transform`}
            >
              <span className="gradient-text">Haolin Li</span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/publications" className={linkClass}>
              Publications
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/experience" className={linkClass}>
              Experience
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
