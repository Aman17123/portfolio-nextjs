"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import "../app/globals.css";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/Aman17123",
    label: "GitHub",
    color: "#6e5494",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/aman-nakoti/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    Icon: SiLeetcode,
    href: "https://leetcode.com/u/amangate9897/",
    label: "LeetCode",
    color: "#FFA116",
  },
];

export default function HeroSection() {
  const handleScrollDown = () => {
    const next = document.getElementById("about-me");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen md:ml-14 px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden"
    >
      {/* Decorative glow blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 max-w-7xl w-full mx-auto">
        {/* ── LEFT: Text Content ── */}
        <div className="flex flex-col max-w-xl">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6 w-fit"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-green-400 text-sm font-mono tracking-widest uppercase">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Title — single H1 for the entire page */}
          <div className="mb-8">
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
                FRONTEND
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-[#E5E5E5] ml-4 sm:ml-14 inline-block"
              >
                DEVELOPER
              </motion.span>
            </motion.h1>
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-6 text-lg md:text-xl font-fira-code leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <span className="text-[#60A5FA] font-mono">&lt;student&gt;</span>{" "}
              <span className="text-gray-300">
                I&apos;m{" "}
                <span className="text-white font-semibold">Aman Nakoti</span>, a
                B.Tech CS student who loves exploring the latest web
                technologies to craft unique digital experiences.
              </span>{" "}
              <span className="text-[#60A5FA] font-mono">&lt;/student&gt;</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#60A5FA] font-mono">&lt;focus&gt;</span>{" "}
              <span className="text-gray-300">
                My focus is on clean code, performance, great UI/UX — and
                building end-to-end apps with the MERN stack.
              </span>{" "}
              <span className="text-[#60A5FA] font-mono">&lt;/focus&gt;</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              <span className="text-[#60A5FA] font-mono">&lt;projects&gt;</span>{" "}
              <span className="text-gray-300">
                Currently building projects with{" "}
              </span>
              <span className="text-[#FBBF24] font-semibold">Next.js</span>
              <span className="text-gray-300">, </span>
              <span className="text-[#FBBF24] font-semibold">Node.js</span>
              <span className="text-gray-300">, and </span>
              <span className="text-[#FBBF24] font-semibold">3D web</span>
              <span className="text-gray-300">
                {" "}
                experiences to stay ahead in the ever-evolving tech world.
              </span>{" "}
              <span className="text-[#60A5FA] font-mono">
                &lt;/projects&gt;
              </span>
            </motion.p>
          </div>

          {/* Personal Info Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              🎓 B.Tech CS Student
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              ⚙️ MERN Stack Dev
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <FaMapMarkerAlt className="text-blue-400" /> India
            </span>
          </motion.div>

          {/* CTA + Social Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            className="mt-10 flex items-center gap-5 flex-wrap"
          >
            {/* Resume button — /public/resume.pdf */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-bold text-lg px-8 py-3 rounded-full
                border border-[#3b82f6] hover:border-[#60a5fa]
                transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                font-fjalla-one uppercase cursor-pointer tracking-wide"
            >
              &lt; RESUME /&gt;
            </motion.a>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Aman Nakoti's ${label} profile`}
                  whileHover={{ scale: 1.2, color }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="flex-shrink-0 flex justify-center"
        >
          <div className="relative">
            {/* Outer rotating glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #60a5fa, #1d4ed8, transparent, #3b82f6)",
                padding: "2px",
                borderRadius: "50%",
              }}
            />
            {/* Static blue glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl scale-110" />
            {/* Photo container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-2 border-blue-500/50">
              <Image
                src="/avatar.png"
                alt="Aman Nakoti — Frontend Developer and MERN Stack Developer from Dehradun, India"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge 1 */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 bg-[#0f172a] border border-blue-500/40 rounded-xl px-3 py-1.5 text-xs font-mono text-blue-400 shadow-lg shadow-blue-500/10"
            >
              💻 Frontend Dev
            </motion.div>
            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-3 -left-3 bg-[#0f172a] border border-green-500/40 rounded-xl px-3 py-1.5 text-xs font-mono text-green-400 shadow-lg shadow-green-500/10"
            >
              ⚙️ MERN Stack
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-blue-400 transition-colors cursor-pointer"
        aria-label="Scroll down to About Me section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
