"use client";
import { motion } from "framer-motion";
import "../app/globals.css";

export default function Exper() {
  const experiences = [
    {
      title: "WEB-DEVELOPMENT INTERNSHIP",
      company: "Redsan × EDCINDIA × Redcubical Systems",
      tech: "Next.js · React.js · Tailwind CSS",
    },
    {
      title: "FREELANCE WEB DEVELOPMENT PROJECT",
      company: "GORAFTS",
      tech: "React.js · Tailwind CSS · Framer Motion · EmailJS",
    },
    {
      title: "SOFTWARE ENGINEERING JOB SIMULATION",
      company: "J.P. Morgan (Forage)",
      tech: "Feature Proposal · OOP · Debugging · Inventory System",
    },
    {
      title: "INTRODUCTION TO GENERATIVE AI",
      company: "Google",
      tech: "Machine Learning · Generative AI · Google Certification",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen sm:ml-14 px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col space-y-1">
        {/* ===== HEADING ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-fjalla-one font-black uppercase tracking-normal"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block text-[#60A5FA]"
          >
            EXPERIENCE &
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
        </motion.h1>

        {/* ===== EXPERIENCE LIST ===== */}
        <div className="mt-10 space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              className="text-gray-200 text-lg leading-relaxed"
            >
              <div className="flex items-start space-x-2">
                <span className="text-blue-400 text-2xl">•</span>
                <div>
                  <h3 className="text-blue-400 sm:text-3xl font-semibold jetbrains-mono uppercase tracking-wide">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 ml-1 jetbrains-mono">{exp.company}</p>
                  <p className="text-gray-400 ml-1 text-sm jetbrains-mono">{exp.tech}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
