"use client";

import { motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaFolderOpen,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const mainIcons = [
    { Icon: FaUser, label: "About" },
    { Icon: FaCode, label: "Skills" },
    { Icon: FaBriefcase, label: "Work" },
    { Icon: FaFolderOpen, label: "Projects" },
  ];

  const socialIcons = [
    {
      Icon: FaGithub,
      link: "https://github.com/Aman17123",
      color: "#6e5494",
    },
    {
      Icon: SiLeetcode,
      link: "https://leetcode.com/u/amangate9897/",
      color: "#FFA116",
    },
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aman-nakoti/",
      color: "#0A66C2",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-1/2 left-4 -translate-y-1/2 z-50 hidden md:flex"
      >
        <div className="w-14 h-[70vh] bg-black/60 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center py-6 shadow-lg space-y-7">
          <motion.div
            className="flex flex-col items-center space-y-7 text-white"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.3, staggerChildren: 0.15 },
              },
            }}
          >
            {mainIcons.map(({ Icon }, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.button>
            ))}

            <div className="w-8 border-t border-gray-500 my-2" />

            {socialIcons.map(({ Icon, link, color }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.25,
                  color: color,
                  textShadow: `0 0 10px ${color}`,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="cursor-pointer"
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex md:hidden"
      >
        <div className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center space-x-8 shadow-md">
          {socialIcons.map(({ Icon, link, color }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.25,
                color: color,
                textShadow: `0 0 10px ${color}`,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="cursor-pointer"
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
