"use client";

import React from "react";
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
  SiFramer,
  SiMongodb,
  SiNetlify,
  SiExpress,
  SiVercel,
} from "react-icons/si";

type TechItem = {
  icon: React.ElementType;
  label: string;
  color: string;
};

const TECH: TechItem[] = [
  { icon: FaReact, label: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: FaNodeJs, label: "Node.js", color: "#3C873A" },
  { icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
  { icon: SiExpress, label: "Express.js", color: "#CCCCCC" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiFramer, label: "Framer Motion", color: "#FF69B4" },
  { icon: FaHtml5, label: "HTML5", color: "#E34C26" },
  { icon: FaCss3Alt, label: "CSS3", color: "#264DE4" },
  { icon: SiThreedotjs, label: "Three.js", color: "#AAAAAA" },
  { icon: FaGitAlt, label: "Git", color: "#F05032" },
  { icon: FaGithub, label: "GitHub", color: "#FFFFFF" },
  { icon: FaFigma, label: "Figma", color: "#F24E1E" },
  { icon: SiVercel, label: "Vercel", color: "#FFFFFF" },
  { icon: SiNetlify, label: "Netlify", color: "#00C7B7" },
];

// Duplicate for seamless loop
const ITEMS = [...TECH, ...TECH];

export default function Marquee() {
  return (
    <div
      className="relative w-full overflow-hidden py-6 border-y border-white/5"
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#1e1e1e] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#1e1e1e] to-transparent pointer-events-none" />

      <div className="marquee-track flex gap-10 items-center whitespace-nowrap">
        {ITEMS.map(({ icon: Icon, label, color }, i) => (
          <div
            key={`${label}-${i}`}
            className="flex items-center gap-2.5 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            style={{ color }}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-mono text-white/70 font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
