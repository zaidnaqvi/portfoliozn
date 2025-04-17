import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

function StarfieldBackground() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <Stars
        radius={130} // radius of the inner sphere
        depth={10} // depth of area where stars appear
        count={10000} // number of stars
        factor={5} // size factor of stars
        saturation={0.5}
        speed={2}
        color="#ffffff" // Change star color to white for better visibility
      />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
}

function Footer() {
  return (
    <footer className="relative bg-black border-b-2 border-t-2 text-gray-300 py-10 px-6 overflow-hidden">
      {/* Animated Starfield */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <StarfieldBackground />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Mohammad Zaid</h2>
          <p className="text-sm text-gray-400">
            Full Stack Developer crafting clean, scalable, and engaging digital
            experiences.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-cyan-400 transition text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-cyan-400 transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-400 transition text-xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Mohammad Zaid. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
