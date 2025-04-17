import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    size: 0.9,
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    size: 0.9,
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    size: 1,
  },
  {
    name: "ReactJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    size: 1.2,
  },
  {
    name: "NodeJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    size: 1,
  },
  {
    name: "ExpressJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    size: 1,
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    size: 1,
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    size: 1,
  },
  {
    name: "Core Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    size: 1,
  },
  {
    name: "Advanced Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    size: 1,
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    size: 1,
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    size: 1,
  },
  {
    name: "Framer Motion",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg",
    size: 0.9,
  },
  {
    name: "Hostinger",
    src: "https://seeklogo.com/images/H/hostinger-logo-FAF1C23248-seeklogo.com.png",
    size: 0.9,
  },
  {
    name: "Learning More...",
    logo: "https://cdn-icons-png.flaticon.com/512/3134/3134880.png",
    size: 1.2,
    pulse: true,
  },
];

function SkillTag({ text, logo, size, pulse, position }) {
  return (
    <Html position={position} center>
      <motion.div
        whileHover={{ scale: 1.2 }}
        animate={pulse ? { scale: [1, 1.2, 1] } : {}}
        transition={pulse ? { duration: 1.5, repeat: Infinity } : {}}
        className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-br from-cyan-600 to-indigo-600 shadow-lg text-white font-medium cursor-pointer select-none backdrop-blur-md"
      >
        {logo && (
          <img
            src={logo}
            alt={text}
            className="object-contain"
            style={{ width: `${size * 20}px`, height: `${size * 20}px` }}
          />
        )}
        {text}
      </motion.div>
    </Html>
  );
}

function SkillsSphere() {
  const radius = 5;
  return (
    <>
      {skills.map((skill, i, arr) => {
        const phi = Math.acos(-1 + (2 * i) / arr.length);
        const theta = Math.sqrt(arr.length * Math.PI) * phi;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        return (
          <SkillTag
            key={i}
            text={skill.name}
            logo={skill.logo}
            size={skill.size || 1}
            pulse={skill.pulse}
            position={[x, y, z]}
          />
        );
      })}
    </>
  );
}

export default function InteractiveSkillsSection() {
  return (
    <section className="relative h-screen bg-black text-white" id="skills">
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
          My Skills
        </h2>
      </div>

      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <OrbitControls autoRotate enableZoom={false} />
        <Stars radius={30} depth={50} count={10000} factor={4} fade />
        <SkillsSphere />
      </Canvas>
    </section>
  );
}
