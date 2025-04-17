import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "../home/AnimatedSphere";
import Button from "../ui/Button";
import { FiChevronRight } from "react-icons/fi";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";
import CursorFollower from "../ui/CursorFollower";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TetheredLogo = ({ icon: Icon, pos, label, delay = 0 }) => (
  <motion.div
    className="absolute group flex flex-col items-center pointer-events-auto"
    style={{ top: pos.top, left: pos.left }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {/* Tooltip */}
    <div className="relative mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
      <div className="relative bg-gradient-to-br from-cyan-400 to-indigo-500 text-white text-xs font-semibold px-4 py-1.5 rounded-xl shadow-xl ring-2 ring-white/30 ring-offset-2 ring-offset-cyan-500">
        {label}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-md z-[-1]" />
      </div>
    </div>

    <motion.div
      className="text-white text-4xl sm:text-5xl cursor-pointer drop-shadow-lg"
      animate={{ y: [0, -8, 0], rotateY: [0, 10, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.2 }}
    >
      <Icon />
    </motion.div>
  </motion.div>
);

function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // loader sync
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <CursorFollower />

      <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full h-full px-4 lg:px-12 py-8 lg:py-16">
        {/* Left Side - Hero Text */}
        {show && (
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center justify-center md:justify-start space-x-2"
              variants={childVariants}
            >
              <span className="text-xl md:text-3xl font-light">Hi, I'm</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600"
              variants={childVariants}
            >
              Mohammad Zaid
            </motion.h1>

            <motion.div
              className="flex items-center justify-center md:justify-start space-x-2"
              variants={childVariants}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-medium">
                Full Stack Developer
              </span>
              <FiChevronRight className="text-2xl md:text-3xl animate-bounce" />
            </motion.div>

            <motion.div variants={childVariants}>
              <Button className="bg-transparent text-white border border-cyan-400 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Right Side - Sphere + Logos */}
        {show && (
          <motion.div
            className="w-full lg:w-1/2 h-[400px] md:h-full relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Canvas
              shadows
              camera={{ position: [0, 0, 5], fov: 60 }}
              className="absolute w-full h-full z-0"
            >
              <AnimatedSphere />
            </Canvas>

            <div className="absolute inset-0 z-10 pointer-events-none">
              <TetheredLogo
                icon={FaGithub}
                pos={{ top: "20%", left: "15%" }}
                label="GitHub"
                delay={0.2}
              />
              <TetheredLogo
                icon={FaReact}
                pos={{ top: "25%", left: "80%" }}
                label="React.js"
                delay={0.4}
              />
              <TetheredLogo
                icon={SiJavascript}
                pos={{ top: "75%", left: "20%" }}
                label="JavaScript"
                delay={0.6}
              />
              <TetheredLogo
                icon={SiHtml5}
                pos={{ top: "80%", left: "65%" }}
                label="HTML5"
                delay={0.8}
              />
              <TetheredLogo
                icon={SiCss3}
                pos={{ top: "-1%", left: "55%" }}
                label="CSS3"
                delay={1}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
