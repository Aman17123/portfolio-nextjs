"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaFolderOpen,
  FaGithub,
  FaLinkedin,
  FaInfoCircle,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useLenis } from "./SmoothScrollProvider";
import ThemeToggle from "./ThemeToggle";

type IconItem = {
  Icon: React.ElementType;
  id: string;
  tooltip: string;
};

type SocialItem = {
  Icon: React.ElementType;
  link: string;
  color: string;
  tooltip: string;
};

export default function Navbar() {
  const lenis = useLenis();
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const mainIcons: IconItem[] = useMemo(
    () => [
      { Icon: FaUser, id: "about", tooltip: "Hero" },
      { Icon: FaInfoCircle, id: "about-me", tooltip: "About Me" },
      { Icon: FaCode, id: "skills", tooltip: "Tech Stack" },
      { Icon: FaBriefcase, id: "experience", tooltip: "Experience" },
      { Icon: FaFolderOpen, id: "proj", tooltip: "Projects" },
    ],
    []
  );

  const socialIcons: SocialItem[] = useMemo(
    () => [
      {
        Icon: FaGithub,
        link: "https://github.com/Aman17123",
        color: "#6e5494",
        tooltip: "GitHub",
      },
      {
        Icon: SiLeetcode,
        link: "https://leetcode.com/u/amangate9897/",
        color: "#FFA116",
        tooltip: "LeetCode",
      },
      {
        Icon: FaLinkedin,
        link: "https://www.linkedin.com/in/aman-nakoti/",
        color: "#0A66C2",
        tooltip: "LinkedIn",
      },
    ],
    []
  );

  // Smooth scroll via Lenis (falls back to native if Lenis not available)
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    setActiveSection(id);
    if (lenis) {
      lenis.scrollTo(section, { offset: 0, duration: 1.2 });
    } else {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // IntersectionObserver to highlight active section
  useEffect(() => {
    const sections = mainIcons
      .map((s) => document.getElementById(s.id))
      .filter((s): s is HTMLElement => s !== null);

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          entries[0]
        );
        if (mostVisible?.isIntersecting)
          setActiveSection(mostVisible.target.id);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-10% 0px -40% 0px" }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, [mainIcons]);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-1/2 left-4 -translate-y-1/2 z-50 hidden md:flex"
        aria-label="Site navigation"
      >
        <div className="w-14 h-auto bg-black/60 dark:bg-black/60 bg-white/80 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center py-6 space-y-7">
          {mainIcons.map(({ Icon, id, tooltip }, i) => (
            <div key={i} className="relative flex items-center">
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredId === `nav-${id}` && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-full mr-3 whitespace-nowrap bg-[#0f172a] border border-white/10 text-gray-300 text-xs font-mono px-2.5 py-1 rounded-lg pointer-events-none"
                  >
                    {tooltip}
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleScroll(id)}
                onMouseEnter={() => setHoveredId(`nav-${id}`)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-sm"
                aria-label={`Navigate to ${tooltip}`}
              >
                <Icon
                  className={`w-7 h-7 ${activeSection === id ? "text-blue-400 dark:text-blue-400 text-blue-600" : "text-gray-900 dark:text-white"}`}
                />
                {activeSection === id && (
                  <motion.div
                    layoutId="dot"
                    className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
                  />
                )}
              </motion.button>
            </div>
          ))}
          <div className="w-8 border-t border-gray-500 dark:border-gray-500 border-gray-300 my-2" />
          <ThemeToggle />
          {socialIcons.map(({ Icon, link, color, tooltip }, i) => (
            <div key={i} className="relative flex items-center">
              <AnimatePresence>
                {hoveredId === `social-${i}` && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-full mr-3 whitespace-nowrap bg-[#0f172a] dark:bg-[#0f172a] bg-slate-100 border border-white/10 dark:border-white/10 border-black/10 text-gray-300 dark:text-gray-300 text-gray-600 text-xs font-mono px-2.5 py-1 rounded-lg pointer-events-none"
                  >
                    {tooltip}
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, color, textShadow: `0 0 10px ${color}` }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredId(`social-${i}`)}
                onMouseLeave={() => setHoveredId(null)}
                className="cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-sm"
                aria-label={`Visit Aman Nakoti's ${tooltip}`}
              >
                <Icon className="w-7 h-7 text-gray-900 dark:text-white" />
              </motion.a>
            </div>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex md:hidden"
        aria-label="Site navigation"
      >
        <div className="px-6 py-3 bg-black/60 dark:bg-black/60 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center space-x-6">
          {mainIcons.map(({ Icon, id, tooltip }, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll(id)}
              aria-label={`Navigate to ${tooltip}`}
              className="cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-sm"
            >
              <Icon
                className={`w-5 h-5 ${activeSection === id ? "text-blue-400 dark:text-blue-400 text-blue-600" : "text-gray-900 dark:text-white"}`}
              />
            </motion.button>
          ))}
          <ThemeToggle />
          <div className="w-px h-5 bg-gray-600 dark:bg-gray-600 bg-gray-300" />
          {socialIcons.map(({ Icon, link, color, tooltip }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, color }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-sm"
              aria-label={`Visit Aman Nakoti's ${tooltip}`}
            >
              <Icon className="w-5 h-5 text-gray-900 dark:text-white" />
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
