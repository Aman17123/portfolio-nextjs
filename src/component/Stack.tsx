"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiThreedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiMongodb,
  SiNetlify,
  SiExpress,
  SiMongoose,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import "../app/globals.css";

// ─── Stagger variants ─────────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type SkillItem = {
  icon: React.ElementType;
  color: string;
  label: string;
  highlight?: boolean;
};

export default function Stack() {
  const sections: { title: string; skills: SkillItem[] }[] = [
    {
      title: "FRONTEND",
      skills: [
        { icon: FaHtml5, color: "text-orange-500", label: "HTML5" },
        { icon: FaCss3Alt, color: "text-blue-400", label: "CSS3" },
        { icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
        { icon: SiTypescript, color: "text-blue-500", label: "TypeScript" },
        { icon: FaReact, color: "text-cyan-400", label: "React.js" },
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
        { icon: SiExpress, color: "text-gray-300", label: "Express.js" },
        { icon: SiSupabase, color: "text-emerald-400", label: "Supabase" },
      ],
    },
    {
      title: "DATABASE",
      skills: [
        {
          icon: SiMongodb,
          color: "text-green-400",
          label: "MongoDB",
          highlight: true,
        },
        { icon: SiMongoose, color: "text-red-400", label: "Mongoose" },
        // Fixed: removed duplicate Supabase that was here before
      ],
    },
    {
      title: "TOOLS",
      skills: [
        { icon: FaGitAlt, color: "text-orange-500", label: "Git" },
        { icon: FaGithub, color: "text-white", label: "GitHub" },
        { icon: FaFigma, color: "text-pink-500", label: "Figma" },
      ],
    },
    {
      title: "DEPLOYMENT",
      skills: [
        { icon: SiVercel, color: "text-white", label: "Vercel" },
        { icon: SiNetlify, color: "text-green-400", label: "Netlify" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex flex-col justify-center md:ml-14 px-6 md:px-12 lg:px-20 py-5 md:py-24 bg-transparent"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        {/* Heading */}
        <div className="mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-fjalla-one font-bold tracking-tight text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#60A5FA]">TECH</span>
            <br />
            <span className="text-white ml-4">STACK</span>
          </motion.h2>
        </div>

        {/* Skills Layout — staggered per section */}
        <div className="flex flex-col gap-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Section Title */}
              <h3 className="text-[#9ca3af] font-fjalla-one text-3xl md:text-4xl uppercase text-left tracking-wide mb-4">
                &lt;{section.title}/&gt;
              </h3>

              {/* Skills Grid with stagger */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {section.skills.map(({ icon: Icon, color, label, highlight }, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{ y: -4, scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                    className={`skill-item group relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                      highlight
                        ? "bg-green-500/10 border border-green-500/50 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                        : "bg-white/3 border border-white/8 hover:border-blue-500/30"
                    }`}
                  >
                    {highlight && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Primary
                      </span>
                    )}
                    <Icon className={`w-8 h-8 flex-shrink-0 ${color}`} />
                    <span className="text-white font-fjalla-one text-lg font-normal">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
