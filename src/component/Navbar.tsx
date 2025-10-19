"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaBriefcase, FaFolderOpen, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const mainIcons = [
    { Icon: FaUser, id: "about" },
    { Icon: FaCode, id: "skills" },
    { Icon: FaBriefcase, id: "experience" },
    { Icon: FaFolderOpen, id: "proj" },
  ];

  const socialIcons = [
    { Icon: FaGithub, link: "https://github.com/Aman17123", color: "#6e5494" },
    { Icon: SiLeetcode, link: "https://leetcode.com/u/amangate9897/", color: "#FFA116" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/aman-nakoti/", color: "#0A66C2" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  useEffect(() => {
    const sections = mainIcons.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        , entries[0]);
        if (mostVisible?.isIntersecting) setActiveSection(mostVisible.target.id);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-10% 0px -40% 0px" }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-1/2 left-4 -translate-y-1/2 z-50 hidden md:flex"
      >
        <div className="w-14 h-[70vh] bg-black/60 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center py-6 space-y-7">
          {mainIcons.map(({ Icon, id }, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll(id)}
              className="relative"
            >
              <Icon className={`w-7 h-7 ${activeSection === id ? "text-blue-400" : "text-white"}`} />
              {activeSection === id && (
                <motion.div
                  layoutId="dot"
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
                />
              )}
            </motion.button>
          ))}
          <div className="w-8 border-t border-gray-500 my-2" />
          {socialIcons.map(({ Icon, link, color }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, color, textShadow: `0 0 10px ${color}` }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex md:hidden"
      >
        <div className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center space-x-6">
          {socialIcons.map(({ Icon, link, color }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, color, textShadow: `0 0 10px ${color}` }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
