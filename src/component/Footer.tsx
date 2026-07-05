"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";
import "../app/globals.css";

const socials = [
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
  {
    Icon: FaEnvelope,
    href: "mailto:www.amannakoti103@gmail.com",
    label: "Email",
    color: "#60A5FA",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full md:ml-14 px-6 md:px-12 lg:px-20 pt-20 pb-10 overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-10">
        {/* CTA Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fjalla-one font-black uppercase text-white mb-4">
            LET&apos;S <span className="text-[#60A5FA]">WORK</span>
            <br />
            TOGETHER.
          </h2>
          <p className="text-gray-400 font-mono text-base max-w-2xl mx-auto leading-relaxed">
            I am actively looking for **Internships**, **Frontend Developer roles**, and **MERN Stack Developer opportunities**. Whether you are a recruiter, a business seeking a freelance solution, or a fellow developer wanting to collaborate, feel free to reach out. Let&apos;s build something high-performance together!
          </p>
        </motion.div>

        {/* CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Say Hello */}
          <motion.a
            href="mailto:www.amannakoti103@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-4 rounded-full
              border border-[#3b82f6] hover:border-[#60a5fa]
              transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
              font-fjalla-one uppercase tracking-wide"
          >
            <FaEnvelope className="w-5 h-5" />
            SAY HELLO
          </motion.a>

          {/* Download Resume — /public/resume.pdf */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 text-blue-400 font-bold text-lg px-10 py-4 rounded-full
              border border-blue-400/30 hover:border-blue-400/70 bg-blue-400/5
              transition-all duration-300 hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]
              font-fjalla-one uppercase tracking-wide"
            aria-label="Download Aman Nakoti's Resume"
          >
            <FaDownload className="w-4 h-4" />
            RESUME
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-6"
        >
          {socials.map(({ Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={`Visit Aman Nakoti's ${label}`}
              whileHover={{
                scale: 1.25,
                color,
                filter: `drop-shadow(0 0 8px ${color})`,
              }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Icon className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer SEO Paragraph */}
        <p className="text-[11px] md:text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2 font-mono">
          Aman Nakoti — B.Tech Computer Science student at Uttaranchal University, Dehradun (8.3 CGPA). Specializing as a Frontend Developer in India and MERN Stack Developer building responsive, animated, and high-performance Web Developer Portfolios and custom e-commerce web applications.
        </p>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-sm font-mono text-center sm:text-left">
          <span>
            Designed &amp; Built by{" "}
            <span className="text-gray-400">Aman Nakoti</span> ©{" "}
            {new Date().getFullYear()}
          </span>
          <span className="text-gray-600">
            Made with <span className="text-blue-500">Next.js</span> &amp;{" "}
            <span className="text-pink-500">Framer Motion</span>
          </span>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <FiArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
