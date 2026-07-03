"use client";

import { motion } from "framer-motion";
import "../app/globals.css";

const stats = [
  { value: "5+", label: "Projects Deployed" },
  { value: "1", label: "Internship" },
  { value: "2+", label: "Certifications" },
  { value: "3+", label: "Years Coding" },
];

const funFacts = [
  { emoji: "⚡", text: "I write code faster than I make coffee" },
  { emoji: "🎮", text: "Gamer who turned pixels into passion" },
  { emoji: "🌐", text: "Always exploring bleeding-edge web tech" },
  { emoji: "🎯", text: "Obsessed with pixel-perfect UI" },
  { emoji: "🚀", text: "Shipping MERN apps, one feature at a time" },
  { emoji: "⚽", text: "State-level football player — discipline & teamwork" },
];

const personalHighlights = [
  { icon: "🎓", label: "College", value: "Uttaranchal University, Dehradun" },
  { icon: "🏠", label: "Hometown", value: "Rishikesh, Uttarakhand" },
  {
    icon: "💼",
    label: "Internship",
    value: "MERN Stack Intern @ DevBhoomi Infotech",
    link: "https://www.devbhoomiinfotech.com/",
  },
  { icon: "💻", label: "Experience", value: "3+ Years of Coding" },
];

const whatIDo = [
  {
    icon: "🖥️",
    title: "Frontend Development",
    desc: "Building responsive, performant UIs with React, Next.js, and Tailwind CSS — with buttery smooth Framer Motion animations.",
  },
  {
    icon: "⚙️",
    title: "MERN Stack",
    desc: "End-to-end web apps with Node.js, Express.js, MongoDB & Mongoose. RESTful APIs, auth flows, and clean backend architecture.",
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    desc: "Designing interfaces that feel intuitive and look stunning — from wireframes to pixel-perfect, production-ready components.",
  },
];

export default function About() {
  return (
    <section
      id="about-me"
      className="relative w-full sm:ml-14 px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden"
    >
      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-fjalla-one font-black uppercase tracking-normal mb-12"
        >
          <span className="text-[#60A5FA]">ABOUT</span>
          <br />
          <span className="text-[#E5E5E5] ml-4 sm:ml-14">ME.</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <p className="text-gray-300 font-fira-code text-lg leading-relaxed">
              Hey! I&apos;m{" "}
              <span className="text-white font-semibold">Aman Nakoti</span> — a
              passionate Frontend Developer and MERN Stack enthusiast pursuing
              B.Tech in Computer Science at{" "}
              <span className="text-blue-400 font-semibold">
                Uttaranchal University, Dehradun
              </span>
              . Originally from the spiritual city of{" "}
              <span className="text-blue-300 font-semibold">Rishikesh</span>, I
              love turning ideas into clean, functional, and beautiful digital
              products.
            </p>

            <p className="text-gray-400 font-fira-code text-base leading-relaxed">
              With <span className="text-blue-400">3+ years of coding</span>{" "}
              experience, I&apos;m currently interning as a{" "}
              <span className="text-blue-400">MERN Stack Developer</span> at{" "}
              <a
                href="https://www.devbhoomiinfotech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
              >
                DevBhoomi Infotech
              </a>
              , building high-performance web applications using React, Next.js,
              Node.js, Express.js, and MongoDB. I care deeply about clean code,
              great UX, and writing software that scales.
            </p>

            <p className="text-gray-400 font-fira-code text-base leading-relaxed">
              I&apos;m also a state-level football player — the discipline and
              teamwork from the field carry right into how I approach
              development. When I&apos;m not coding, you&apos;ll find me solving
              LeetCode challenges, exploring Three.js 3D experiences, or diving
              into AI tooling.
            </p>

            {/* Fun Facts */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {funFacts.map(({ emoji, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/3 border border-white/8 rounded-xl p-4 hover:border-blue-500/30 transition-colors"
                >
                  <span className="text-2xl">{emoji}</span>
                  <span className="text-gray-400 font-mono text-sm">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Personal Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center gap-6 w-full lg:w-[360px]"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5 w-full">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(96,165,250,0.5)",
                  }}
                  className="flex flex-col items-center justify-center text-center bg-white/3 border border-white/10 rounded-2xl p-6 cursor-default"
                >
                  <span className="text-4xl md:text-5xl font-fjalla-one text-[#60A5FA] mb-1">
                    {value}
                  </span>
                  <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Personal Highlights */}
            <div className="w-full flex flex-col gap-3">
              {personalHighlights.map(({ icon, label, value, link }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(96,165,250,0.4)",
                  }}
                  className="flex items-center gap-4 bg-white/3 border border-white/10 rounded-xl px-5 py-3 cursor-default"
                >
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div className="flex flex-col">
                    <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                      {label}
                    </span>
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 font-fira-code text-sm font-medium hover:text-blue-300 transition-colors underline underline-offset-2"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-gray-200 font-fira-code text-sm font-medium">
                        {value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20"
        >
          <h3 className="text-2xl font-fjalla-one text-gray-400 uppercase tracking-widest mb-8">
            &lt;what_i_do /&gt;
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatIDo.map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4, borderColor: "rgba(96,165,250,0.4)" }}
                className="group bg-white/3 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
              >
                <span className="text-3xl mb-4 block">{icon}</span>
                <h4 className="text-white font-fjalla-one text-lg uppercase tracking-wide mb-2 group-hover:text-blue-400 transition-colors">
                  {title}
                </h4>
                <p className="text-gray-500 font-mono text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
