import React, { useState } from "react";
import { motion } from "framer-motion";
import mersi from "../projects/images/Capture.JPG";
import havra from "../projects/images/havra.JPG";
import onion from "../projects/images/onion.JPG";
import project1 from "../projects/images/project1.JPG";
import project2 from "../projects/images/project2.JPG";
import video from "../projects/vid.mp4";

const projects = [
  {
    title: "E-commerce Marine Store",
    type: "Freelance",
    img: havra,
    video: "/videos/marine.mp4",
    tech: ["MERN", "JWT", "Tailwind"],
  },
  {
    title: "Onion Dehydration Website",
    type: "Freelance",
    img: onion,
    tech: ["React", "Tailwind"],
  },
  {
    title: "Incense Sticks – MersIncense.com",
    type: "Freelance",
    img: mersi,
    video: video,
    tech: ["React", "Tailwind", "Animations"],
  },
  {
    title: "Real Estate Website – Project 1",
    type: "Internship",
    img: project1,
    tech: ["Html", "Css", "JavaScript"],
  },
  {
    title: "Real Estate Website – Project 2",
    type: "Internship",
    img: project2,
    tech: ["Html", "Css", "JavaScript"],
  },
];

const ProjectSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        From freelance gigs to internship collabs, I bring product ideas to life
        through clean design and powerful tech stacks.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#141414]/60 backdrop-blur-md rounded-2xl shadow-xl border border-[#222] hover:border-white transform transition-transform"
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="h-56 overflow-hidden relative rounded-t-2xl">
              <img
                src={project.img}
                alt={project.title}
                className={`w-full h-full object-cover transition duration-500 ${
                  hoveredIndex === index && project.video
                    ? "blur-sm scale-105"
                    : ""
                }`}
              />
              {hoveredIndex === index && project.video && (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
                />
              )}
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-xs px-2 py-1 bg-[#333] text-gray-300 rounded-full">
                  {project.type}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap text-sm text-gray-400">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-[#1f1f1f] rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
