"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiThreedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiNestjs,
  SiMongodb,
  SiNetlify
} from "react-icons/si";

export default function Stack() {
  const sections = [
    {
      title: "<FRONTEND/>",
      skills: [
        { icon: SiJavascript, color: "text-yellow-400", label: "JAVASCRIPT" },
        { icon: SiTypescript, color: "text-blue-500", label: "TYPESCRIPT" },
        { icon: FaReact, color: "text-cyan-400", label: "REACT" },
        { icon: SiNextdotjs, color: "text-gray-200", label: "NEXT.JS" },
        { icon: SiTailwindcss, color: "text-cyan-500", label: "TAILWIND" },
        { icon: SiBootstrap, color: "text-purple-400", label: "BOOTSTRAP" },
        { icon: SiThreedotjs, color: "text-white", label: "THREE.JS" },
        { icon: SiFramer, color: "text-pink-400", label: "FRAMER" },
      ],
    },
    {
      title: "<BACKEND/>",
      skills: [
        { icon: FaNodeJs, color: "text-green-500", label: "NODE.JS" },
        { icon: SiNestjs, color: "text-red-500", label: "NEST.JS" },
      ],
    },
    {
      title: "<DATABASE/>",
      skills: [{ icon: SiMongodb, color: "text-green-400", label: "MONGODB" }],
    },
    {
      title: "<TOOLS/>",
      skills: [
        { icon: FaGitAlt, color: "text-orange-500", label: "GIT" },
        { icon: FaFigma, color: "text-pink-500", label: "FIGMA" },
        { icon: SiNetlify, color: "text-green-400", label: "NETLIFY" },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background that adapts to theme */}
      <div className="absolute inset-0 bg-[var(--bg)] transition-colors duration-500" />

      {/* Subtle motion glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center mb-20"
      >
        <div className="flex items-center justify-center space-x-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <FaReact className="text-cyan-400 w-10 h-10 drop-shadow-[0_0_15px_#00f0ff]" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text)]">
            MY <span className="text-cyan-400">STACK</span>
          </h1>
        </div>
      </motion.div>

      {/* Skills sections */}
      <div className="relative z-10 w-full max-w-6xl space-y-24">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: idx * 0.15 }}
            className="flex flex-col md:grid md:grid-cols-[200px_1fr] gap-10 md:gap-20"
          >
            {/* Section Title */}
            <h2 className="text-cyan-400 font-bold text-2xl sm:text-3xl text-center md:text-right">
              {section.title}
            </h2>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
              {section.skills.map(({ icon: Icon, color, label }, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    boxShadow: "0 0 20px rgba(96,165,250,0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <Icon
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${color} transition-all duration-300`}
                  />
                  <span className="text-[var(--text)] text-base sm:text-lg font-medium tracking-wide">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
