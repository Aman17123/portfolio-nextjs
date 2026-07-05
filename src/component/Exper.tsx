"use client";

import { motion } from "framer-motion";
import "../app/globals.css";

type Experience = {
  title: string;
  company: string;
  tech: string;
  period: string;
  type: "work" | "cert";
  bullets?: string[];
};

export default function Exper() {
  const experiences: Experience[] = [
    {
      title: "WEB-DEVELOPMENT INTERNSHIP",
      company: "Redsan × EDCINDIA × Redcubical Systems",
      tech: "Next.js · React.js · Tailwind CSS",
      period: "2024",
      type: "work",
      bullets: [
        "Built and shipped production-ready UI components using Next.js and Tailwind CSS",
        "Collaborated with a cross-functional team on a live client project",
        "Improved page performance and responsiveness across devices",
      ],
    },
    {
      title: "FREELANCE WEB DEVELOPMENT",
      company: "GORAFTS",
      tech: "React.js · Tailwind CSS · Framer Motion · EmailJS",
      period: "2024",
      type: "work",
      bullets: [
        "Designed and developed a modern website for a craft business from scratch",
        "Integrated EmailJS for seamless contact form functionality",
        "Delivered smooth animations with Framer Motion",
      ],
    },
    {
      title: "SOFTWARE ENGINEERING JOB SIMULATION",
      company: "J.P. Morgan (Forage)",
      tech: "Feature Proposal · OOP · Debugging · Inventory System",
      period: "2024",
      type: "cert",
      bullets: [
        "Completed a structured software engineering simulation program",
        "Worked on feature proposals, OOP design, and debugging challenges",
      ],
    },
    {
      title: "INTRODUCTION TO GENERATIVE AI",
      company: "Google",
      tech: "Machine Learning · Generative AI · Google Certification",
      period: "2024",
      type: "cert",
      bullets: [
        "Completed Google's official Generative AI learning path",
        "Gained foundational understanding of LLMs, diffusion models, and AI applications",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen md:ml-14 px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col space-y-1 max-w-6xl mx-auto w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-fjalla-one font-black uppercase tracking-normal mb-12"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block text-[#60A5FA]"
          >
            EXPERIENCE &amp;
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-[#E5E5E5] ml-5 inline-block"
          >
            CERTIFICATES
          </motion.span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-4">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent ml-3 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-blue-500 bg-[#0f172a] hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>

                {/* Card */}
                <div className="group bg-white/3 border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest mb-1 block">
                        {exp.type === "work" ? "💼 Work Experience" : "🏅 Certification"}
                      </span>
                      <h3 className="text-blue-400 text-xl sm:text-2xl font-semibold jetbrains-mono uppercase tracking-wide leading-tight">
                        {exp.title}
                      </h3>
                    </div>
                    <span className="text-gray-500 font-mono text-sm whitespace-nowrap mt-1 sm:mt-0 border border-white/10 rounded-full px-3 py-0.5 h-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 jetbrains-mono font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm jetbrains-mono mb-4">{exp.tech}</p>

                  {exp.bullets && (
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-gray-400 text-sm font-mono">
                          <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
