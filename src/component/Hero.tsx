"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import { useLenis } from "./SmoothScrollProvider";
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

// ─── Magnetic button hook ─────────────────────────────────────────────────────
function useMagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 25 });
  const y = useSpring(0, { stiffness: 300, damping: 25 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave };
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const lenis = useLenis();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on avatar
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Magnetic resume button
  const magnetic = useMagneticButton();

  const handleScrollDown = () => {
    const next = document.getElementById("about-me");
    if (!next) return;
    if (lenis) {
      lenis.scrollTo(next, { offset: 0, duration: 1.2 });
    } else {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered title words
  const titleWords = [
    { text: "FULLSTACK", className: "text-[#60A5FA]" },
    { text: "DEVELOPER", className: "text-[#E5E5E5] ml-4 sm:ml-14" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative font-fjalla-one min-h-screen md:ml-14 px-6 md:px-12 lg:px-20 py-16 md:py-20 overflow-hidden flex items-center"
    >
      {/* Decorative glow blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-16 max-w-7xl w-full mx-auto"
      >
        {/* ── LEFT: Text Content ── */}
        <div className="flex flex-col max-w-xl lg:max-w-lg">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-fjalla-one font-black uppercase tracking-normal"
            >
              {titleWords.map((word, wi) => (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, y: 60, skewY: 3 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + wi * 0.18,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className={`inline-block ${word.className}`}
                >
                  {word.text}
                  {wi < titleWords.length - 1 && <br />}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-6 text-lg md:text-xl font-fira-code leading-relaxed">
            {[
              <>
                <span className="text-[#60A5FA] font-mono">
                  &lt;student&gt;
                </span>{" "}
                <span className="text-gray-300">
                  I&apos;m{" "}
                  <span className="text-white font-semibold">Aman Nakoti</span>,
                  a B.Tech CS student who loves exploring the latest web
                  technologies to craft unique digital experiences.
                </span>{" "}
                <span className="text-[#60A5FA] font-mono">
                  &lt;/student&gt;
                </span>
              </>,
              <>
                <span className="text-[#60A5FA] font-mono">&lt;focus&gt;</span>{" "}
                <span className="text-gray-300">
                  My focus is on clean code, performance, great UI/UX — and
                  building end-to-end apps with the MERN stack.
                </span>{" "}
                <span className="text-[#60A5FA] font-mono">&lt;/focus&gt;</span>
              </>,
              <>
                <span className="text-[#60A5FA] font-mono">
                  &lt;projects&gt;
                </span>{" "}
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
              </>,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.18,
                  ease: "easeOut",
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Personal Info Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["🎓 B.Tech CS Student", "⚙️ MERN Stack Dev", "💼 React Intern"].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
            <span className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <FaMapMarkerAlt className="text-blue-400" /> India
            </span>
          </motion.div>

          {/* CTA + Social Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            className="mt-10 flex items-center gap-5 flex-wrap"
          >
            {/* Magnetic Resume button */}
            <motion.a
              ref={magnetic.ref}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              style={{ x: magnetic.x, y: magnetic.y }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-bold text-lg px-8 py-3 rounded-full
                border border-[#3b82f6] hover:border-[#60a5fa]
                transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                font-fjalla-one uppercase cursor-pointer tracking-wide"
              aria-label="View Aman Nakoti's resume"
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

        {/* ── RIGHT: Profile Photo with parallax ── */}
        <motion.div
          style={{ y: avatarY, scale: avatarScale }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
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
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-2 border-blue-500/50">
              <Image
                src="/avatar.png"
                alt="Aman Nakoti — Frontend Developer and MERN Stack Developer from Dehradun, India"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 416px"
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
      </motion.div>

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
