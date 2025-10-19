"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import "../app/globals.css";
import React, { useState, useRef } from "react";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "GORAFTS",
      tech: "React.js · Tailwind CSS · EmailJS",
      description:
        "A modern website for a craft business with email integration.",
      image:
        "https://i.pinimg.com/1200x/e6/d8/4d/e6d84d46649b25499b3b9525bb142991.jpg",
      link: "https://goraftts.netlify.app/#/",
    },
    {
      number: "02",
      title: "AI RESUME ENHANCER",
      tech: "Next.js · OpenAI · Database",
      description: ".work in process",
      image:
        "https://i.pinimg.com/1200x/e4/6a/da/e46ada02712a96616a5ccec8c32911e0.jpg",
      link: "#",
    },
    {
      number: "03",
      title: "3D-PORTFOLIO",
      tech: "React.js · ThreeJS · TailwindCSS",
      description: "A 3D interactive portfolio built with Three.js.",
      image:
        "https://i.pinimg.com/736x/4f/a2/5f/4fa25f43d470ca223ac07112d64cc014.jpg",
      link: "https://threejsaman.netlify.app/",
    },
    {
      number: "04",
      title: "AMAZON CLONE",
      tech: "HTML5 · CSS3 · JavaScript",
      description: "A functional clone of the Amazon website.",
      image:
        "https://i.pinimg.com/736x/10/b8/61/10b861f89ef8dbf8be4e98401889d3ae.jpg",
      link: "#",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const handleEnter = (proj) => setHoveredProject(proj);
  const handleLeave = () => setHoveredProject(null);

  const IMAGE_WIDTH_MD = "200px";
  const IMAGE_HEIGHT_MD = "330px";
  const IMAGE_WIDTH_SM = "170px";
  const IMAGE_HEIGHT_SM = "280px";

  return (
    <section
      ref={sectionRef}
      id="proj"
      className="relative w-full flex flex-col justify-center sm:ml-14 px-6 md:px-12 lg:px-20 py-10 md:py-24 bg-transparent min-h-screen overflow-hidden z-20"
    >
      <div className="relative flex flex-col mb-16">
        <motion.h1
          className="text-5xl md:text-6xl font-fjalla-one font-bold tracking-tight text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[#60A5FA]">PROJECTS.</span>
          <span className="text-white ml-1">JSX</span>
        </motion.h1>
      </div>

      <div className="flex w-full relative">
        <div className="flex flex-col space-y-10 w-full md:w-3/4 relative z-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => handleEnter(proj)}
              onMouseLeave={handleLeave}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between bg-transparent transition-all duration-300 rounded-xl p-6 cursor-pointer"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-4">
                  <span className="text-white/80 text-3xl font-fjalla-one tracking-wider">{`<${proj.number}/>`}</span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl md:text-3xl font-fjalla-one tracking-wider flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
                  >
                    {proj.title}
                    <FiExternalLink className="w-5 h-5 text-white group-hover:text-[#60A5FA] transition-colors" />
                  </a>
                </div>
                <p className="jetbrains-mono text-gray-400 text-sm md:text-base mt-2">
                  {proj.tech}
                </p>
                <p className="jetbrains-mono text-gray-500 text-xs mt-1">
                  {proj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredProject && (
            <motion.img
              key={hoveredProject.image}
              src={hoveredProject.image}
              alt="preview"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: "10%",
                x: "-50%",
                scale: 1.5,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="absolute left-[87.5%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl object-cover pointer-events-none z-30 hidden md:block"
              style={{
                width: IMAGE_WIDTH_MD,
                height: IMAGE_HEIGHT_MD,
                "@media (max-width: 768px)": {
                  width: IMAGE_WIDTH_SM,
                  height: IMAGE_HEIGHT_SM,
                },
              }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center">
        <a
          href="mailto:www.amannakoti@example.com"
          className="text-gray-400 font-fjalla-one text-sm sm:text-lg md:text-xl hover:text-[#60A5FA] transition-colors sm:-ml-50 -ml-15"
        >
          www.amannakoti103@gmail.com
        </a>
      </div>

    </section>
  );
}
