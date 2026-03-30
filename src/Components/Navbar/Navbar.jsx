import React, { useState } from "react";
import logo from "../Assets/forge.webp";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  const navTheme = isHomePage
    ? "bg-white/70 text-black"
    : "bg-black/70 text-white";

  const buttonTheme = isHomePage
    ? "bg-black text-white"
    : "bg-white text-black";

  const mobileMenuTheme = isHomePage
    ? "bg-white bg-opacity-95"
    : "bg-black bg-opacity-95";



  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300 font-sh-ad-grotesk ${navTheme}`}
    >
      {/* Navbar Content */}
      <div className="relative flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <HashLink smooth to="/#hero">
          <img src={logo} alt="Think Forge Global" className="h-14 w-auto" />
        </HashLink>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center text-xs gap-2 z-30">
          <HashLink to="/connect#connect">
            <button className={`${buttonTheme} rounded py-1 px-2 text-xs`}>
              Contact Us
            </button>
          </HashLink>
          <button
            onClick={toggleMenu}
            className="focus:outline-none transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium z-30">
          <HashLink
            smooth
            to="/#hero"
            className="hover:text-red-500 transition"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="hover:text-red-500 transition"
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/#services"
            className="hover:text-red-500 transition"
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/#team"
            className="hover:text-red-500 transition"
          >
            Our Team
          </HashLink>
          <Link to="/careers" className="hover:text-red-500 transition">
            Careers
          </Link>
          <Link to="/blog" className="hover:text-red-500 transition">
            Blog
          </Link>

            <HashLink to="/connect#connect">
              <button
                className={`${buttonTheme} px-4 py-2 rounded hover:opacity-90 transition duration-300`}
              >
                Contact Us
              </button>
            </HashLink>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden px-6 pb-4 pt-2 space-y-4 flex flex-col font-medium z-20 relative backdrop-blur-xl rounded-b-xl shadow ${mobileMenuTheme}`}
        >
          <HashLink
            smooth
            to="/#hero"
            className="hover:text-red-500 transition"
            onClick={handleLinkClick}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="hover:text-red-500 transition"
            onClick={handleLinkClick}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/#services"
            className="hover:text-red-500 transition"
            onClick={handleLinkClick}
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/#team"
            className="hover:text-red-500 transition"
            onClick={handleLinkClick}
          >
            Our Team
          </HashLink>
          <Link
            to="/careers"
            className="hover:text-red-500 transition"
            onClick={handleLinkClick}
          >
            Careers
          </Link>
          <Link
            to="/blog"
            className="hover:text-red-500 transition"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
