import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white rounded-2xl mx-5 my-5 px-6 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div
        className="flex items-center gap-2 text-lg font-semibold cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <FiLink className="text-white text-xl" />
        Mohammad.dev
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="cursor-pointer hover:bg-[#1a1a1a] px-3 py-1 rounded-lg"
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </li>
        ))}
      </ul>

      {/* Desktop Contact Button */}
      <div className="hidden md:inline-block">
        <a href="#contact">
          <AnimatedButton>Contact Me</AnimatedButton>
        </a>
      </div>

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

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-black text-white z-50 flex flex-col items-center justify-center gap-6 overflow-hidden border-b-[4px] border-white"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                className="list-none text-xl font-medium hover:bg-[#1a1a1a] border-b-4 border-white px-6 py-2 rounded-lg cursor-pointer"
                onClick={() => {
                  scrollToSection(link.id);
                  setMenuOpen(false);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {link.name}
              </motion.li>
            ))}

            {/* Mobile Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 + navLinks.length * 0.1 }}
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
            >
              <AnimatedButton>Contact Me</AnimatedButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
