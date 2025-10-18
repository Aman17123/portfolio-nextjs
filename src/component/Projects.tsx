"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import "../app/globals.css";
import React, { useState } from "react";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "GORAFTS",
      tech: "React.js · Tailwind CSS · EmailJS",
      description: "A modern website for a craft business with email integration.",
      image: "https://i.pinimg.com/1200x/e6/d8/4d/e6d84d46649b25499b3b9525bb142991.jpg",
      link: "https://gorafts.com/",
    },
    {
      number: "02",
      title: "AI RESUME ENHANCER",
      tech: "Next.js · OpenAI · Database",
      description: "Enhances resumes using AI-powered suggestions.",
      image: "https://i.pinimg.com/1200x/e4/6a/da/e46ada02712a96616a5ccec8c32911e0.jpg",
      link: "#",
    },
    {
      number: "03",
      title: "3D-PORTFOLIO",
      tech: "React.js · ThreeJS · TailwindCSS",
      description: "A 3D interactive portfolio built with Three.js.",
      image: "https://i.pinimg.com/736x/4f/a2/5f/4fa25f43d470ca223ac07112d64cc014.jpg",
      link: "#",
    },
    {
      number: "04",
      title: "AMAZON CLONE",
      tech: "HTML5 · CSS3 · JavaScript",
      description: "A functional clone of the Amazon website.",
      image: "https://i.pinimg.com/736x/10/b8/61/10b861f89ef8dbf8be4e98401889d3ae.jpg",
      link: "#",
    },
  ];

  const [hoveredImage, setHoveredImage] = useState(null);
  const [mouseY, setMouseY] = useState(0);

  return (
    <section
      id="proj"
      className="relative w-full flex flex-col justify-center sm:ml-14 px-6 md:px-12 lg:px-20 py-10 md:py-24 bg-transparent min-h-screen"
    >
      {/* ====== HEADING ====== */}
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

      <div className="flex flex-col md:flex-row md:space-x-10 relative flex-1">
        {/* ====== PROJECT LIST LEFT ====== */}
        <div className="flex flex-col space-y-12 w-full md:w-1/2 z-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredImage(proj.image)}
              onMouseLeave={() => setHoveredImage(null)}
              onMouseMove={(e) => setMouseY(e.clientY)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group bg-transparent hover:bg-white/5 transition-all duration-300 rounded-xl p-6 cursor-pointer"
            >
              {/* Number + Title */}
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

              {/* Tech Stack */}
              <p className="jetbrains-mono text-gray-400 text-sm md:text-base mt-2 ">
                {proj.tech}
              </p>

              {/* Small Description */}
              <p className="jetbrains-mono text-gray-500 text-xs mt-1">
                {proj.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ====== IMAGE PREVIEW RIGHT ====== */}
        <div className="hidden md:flex w-1/2 justify-end items-start relative">
          <AnimatePresence>
            {hoveredImage && (
              <motion.img
                key={hoveredImage}
                src={hoveredImage}
                alt="project preview"
                initial={{ opacity: 0, x: 150, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1.05,
                  y: mouseY - window.innerHeight / 2,
                }}
                exit={{ opacity: 0, x: 150, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-xl shadow-2xl max-w-full max-h-[600px] object-cover absolute top-1/2 -translate-y-1/2 right-0"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ====== EMAIL AT BOTTOM CENTER ====== */}
      <div className="absolute bottom-4 w-full -ml-4 flex justify-center">
        <a
          href="mailto:www.amannakoti@example.com"
          className="text-gray-400 font-fjalla-one sm:-ml-40  text-sm sm:text-sm md:text-xl lg:text-2xl hover:text-[#60A5FA] transition-colors"
        >
          www.amannakoti@example.com
        </a>
      </div>
    </section>
  );
}
