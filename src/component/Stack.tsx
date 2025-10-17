"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
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
  SiNetlify,
} from "react-icons/si";
import '../app/globals.css'

export default function Stack() {
  const sections = [
    {
      title: "FRONTEND",
      skills: [
        { icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
        { icon: SiTypescript, color: "text-blue-500", label: "TypeScript" },
        { icon: FaReact, color: "text-cyan-400", label: "React" },
        { icon: SiNextdotjs, color: "text-white", label: "Next.js" },
        { icon: SiThreedotjs, color: "text-gray-300", label: "Three.js" },
        { icon: SiTailwindcss, color: "text-cyan-500", label: "Tailwind CSS" },
        { icon: SiFramer, color: "text-pink-400", label: "Framer Motion" },
        { icon: SiBootstrap, color: "text-purple-500", label: "Bootstrap" },
      ],
    },
    {
      title: "BACKEND",
      skills: [
        { icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
        { icon: SiNestjs, color: "text-red-500", label: "NestJS" },
      ],
    },
    {
      title: "DATABASE",
      skills: [{ icon: SiMongodb, color: "text-green-500", label: "MongoDB" }],
    },
    {
      title: "TOOLS",
      skills: [
        { icon: FaGitAlt, color: "text-orange-500", label: "Git" },
        { icon: FaFigma, color: "text-pink-500", label: "Figma" },
        { icon: SiNetlify, color: "text-green-400", label: "Netlify" },
      ],
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-20 bg-transparent">
      {/* === Heading === */}
      <div className="flex items-center gap-6 mb-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <FaReact className="w-14 h-14 text-cyan-400 drop-shadow-[0_0_15px_#00f0ff]" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-fjalla-one font-bold tracking-tight text-left">
          <span
            className="text-[#007ACC]"
          >
            MY
          </span>{" "}
          <span
            className="text-white"
            style={{
              WebkitTextStroke: "1.5px #00f0ff",
              paintOrder: "stroke fill",
            }}
          >
            STACK
          </span>
        </h1>
      </div>

      {/* === Skills Layout === */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-20">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-25"
          >
            {/* Left Side — Section Title */}
            <h2 className="text-[#9ca3af] font-extrabold text-3xl  md:text-4xl uppercase text-left tracking-wide mb-8">
              &lt;{section.title}/&gt;
            </h2>

            {/* Right Side — Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.skills.map(({ icon: Icon, color, label }, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  className="flex items-center gap-3"
                >
                  <Icon className={`w-12 h-12 ${color}`} />
                  <span className="text-white text-lg font-medium">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
