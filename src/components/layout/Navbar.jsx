// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Projects", "Skills", "Experience"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white rounded-2xl mx-5 my-5 px-6 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <FiLink className="text-white text-xl" />
        Mohammad.dev
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:bg-[#1a1a1a] px-3 py-1 rounded-lg"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Desktop Contact Button */}
      <button className="hidden md:inline-block bg-white text-black font-semibold text-sm px-5 py-2 rounded-full hover:bg-gray-200 transition-all">
        Contact Me
      </button>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-6 h-4 cursor-pointer z-[60]"
        >
          {/* Top Line */}
          <span
            className={`absolute left-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "top-2 rotate-0" : "top-0"
            }`}
          ></span>
          {/* Bottom Line */}
          <span
            className={`absolute left-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : "top-3"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Fullscreen Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }} // Initial height starts at 0
            animate={{ height: "100vh" }} // Expand to full height of the screen
            exit={{ height: 0 }} // Collapse back to 0 height when exiting
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-black text-white z-50 flex flex-col items-center justify-center gap-6 overflow-hidden"
          >
            {/* Mobile Menu Links */}
            {navLinks.map((link, index) => (
              <motion.li
                key={link}
                className="list-none text-xl font-medium hover:bg-[#1a1a1a] border-b-4 border-white px-6 py-2 rounded-lg cursor-pointer"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {link}
              </motion.li>
            ))}

            {/* Contact Button */}
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="bg-white text-black font-semibold text-sm px-6 py-2 rounded-full hover:bg-gray-200 transition-all mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 + navLinks.length * 0.1 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
