"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import {SiJavascript,SiTypescript,SiThreedotjs,SiNextdotjs,SiTailwindcss,SiBootstrap,SiFramer,
  SiNestjs,SiMongodb,SiNetlify,} from "react-icons/si";
import "../app/globals.css";

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

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center sm:ml-14 px-6 md:px-12 lg:px-20 py-5 md:py-24 bg-transparent">
      {/* === Heading === */}
      <div className="mb-16">
        <motion.h1
          className="text-5xl md:text-6xl font-fjalla-one font-bold tracking-tight text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[#60A5FA]">TECH</span>
          <br />
          <span className="text-white ml-4">STACK</span>
        </motion.h1>
      </div>

      {/* === Skills Layout === */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // <-- trigger every time in view
            className="flex flex-col gap-6"
          >
            {/* Section Title */}
            <h2 className="text-[#9ca3af] font-fjalla-one text-3xl md:text-4xl uppercase text-left tracking-wide mb-4">
              &lt;{section.title}/&gt;
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {section.skills.map(({ icon: Icon, color, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className={`w-12 h-12 ${color}`} />
                  <span className="text-white font-fjalla-one text-2xl font-normal">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
}
