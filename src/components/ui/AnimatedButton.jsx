// src/components/ui/AnimatedButton.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative inline-block px-6 py-3 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-indigo-500 to-sky-400 shadow-[0_10px_25px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(99,102,241,0.5)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
