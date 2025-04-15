import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "../home/AnimatedSphere";
import Button from "../ui/Button";
import { FiChevronRight } from "react-icons/fi";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";

const FloatingLogo = ({ icon: Icon, style }) => (
  <motion.div
    style={style}
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="absolute"
  >
    <Icon className="text-white text-3xl sm:text-4xl md:text-5xl" />
  </motion.div>
);

const TetheredLogo = ({ icon, pos }) => (
  <div className="absolute pointer-events-none" style={pos}>
    <svg className="absolute w-full h-full">
      <line
        x1="50%"
        y1="50%"
        x2={pos.left || pos.right}
        y2={pos.top || pos.bottom}
        stroke="cyan"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
    </svg>
    <FloatingLogo icon={icon} />
  </div>
);

function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full h-full px-4 lg:px-12 py-8 lg:py-16">
        {/* Left: Hero Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white space-y-6">
          {show && (
            <>
              {/* Greeting */}
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-xl md:text-3xl font-light">Hi, I'm</span>
              </div>

              {/* Name */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
                Mohammad Zaid
              </h1>

              {/* Role */}
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-medium">
                  Full Stack Developer
                </span>
                <FiChevronRight className="text-xl md:text-3xl animate-bounce" />
              </div>

              {/* Button */}
              <Button className="bg-transparent text-white border border-cyan-400 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                View My Work
              </Button>
            </>
          )}
        </div>

        {/* Right: Animated Sphere + Floating Icons */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-full relative flex justify-center items-center">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 60 }}
            className="absolute w-full h-full z-0"
          >
            <AnimatedSphere />
          </Canvas>

          {/* Floating Icons */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <TetheredLogo icon={FaGithub} pos={{ top: "20%", left: "15%" }} />
            <TetheredLogo icon={FaReact} pos={{ top: "25%", left: "80%" }} />
            <TetheredLogo
              icon={SiJavascript}
              pos={{ top: "75%", left: "20%" }}
            />
            <TetheredLogo icon={SiHtml5} pos={{ top: "80%", left: "65%" }} />
            <TetheredLogo icon={SiCss3} pos={{ top: "5%", left: "55%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
