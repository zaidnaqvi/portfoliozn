import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Gradient Heading */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600 drop-shadow-md"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-4 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to say hi? Drop a message below —
          I’m always open to ideas, feedback, or a good coffee chat.
        </motion.p>
      </div>

      {/* Grid Container */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-8 text-white/80">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-cyan-400" />
            <span className="text-lg">naqvizaid451@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl text-pink-400" />
            <span className="text-lg">+91 88496 14140</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-indigo-400" />
            <span className="text-lg">Bhavnagar, Gujarat</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-4 text-white/80">
            <a
              href="https://github.com/zaidnaqvi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-all text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/naqvi-zaid-86142b279"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-all text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-all text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="bg-[#161616]/80 border border-[#2a2a2a] rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl p-8 flex flex-col gap-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#1f1f1f] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#1f1f1f] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 bg-[#1f1f1f] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <motion.button
            type="submit"
            className="w-full py-3 px-6 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600 text-white shadow-lg hover:shadow-[0_0_15px_#22d3ee,0_0_30px_#6366f1] hover:animate-pulse transition-all duration-300 ease-in-out"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
