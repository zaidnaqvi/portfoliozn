import React from "react";
import { motion } from "framer-motion";
import img from "./img.jpg";

function AboutSection() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-24 flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center gap-16 max-w-6xl w-full">
        {/* Left - Blob shape rotates, image stays static */}
        <motion.div
          className="w-full md:w-1/2  relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <svg
            viewBox="0 0 500 500"
            className="w-[300px] md:w-[450px] drop-shadow-xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blobClip">
                <path d="M250,20 C370,50 460,160 450,280 C440,400 330,480 210,460 C90,440 20,330 40,210 C60,90 130,-10 250,20 Z" />
              </clipPath>

              <linearGradient
                id="blobGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="100%" stopColor="#8A2BE2" />
              </linearGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <image
              href={img}
              width="500"
              height="500"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#blobClip)"
            />

            <motion.g
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              style={{ transformOrigin: "center" }}
            >
              <motion.path
                d="M250,20 C370,50 460,160 450,280 C440,400 330,480 210,460 C90,440 20,330 40,210 C60,90 130,-10 250,20 Z"
                stroke="url(#blobGradient)"
                strokeWidth="3"
                fill="transparent"
                filter="url(#glow)"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </motion.g>
          </svg>
        </motion.div>

        {/* Right - Text Content with Framer Animation */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Journey
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I'm{" "}
            <span className="text-cyan-400 font-semibold">Mohammad Zaid</span>,
            a B.Tech student and Full Stack Developer passionate about building
            immersive digital experiences. I specialize in the MERN stack and
            have 6+ months of industry experience crafting scalable web
            solutions.
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I'm constantly exploring new technologies and eager to grow in this
            ever-evolving field. Whether it's front-end finesse or back-end
            logic, I love creating smooth, impactful, and future-ready digital
            products.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
