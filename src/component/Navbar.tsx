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
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 hidden md:flex h-screen z-50"
    >
      {/* Sidebar background with vibrant gradient */}
      <div className="relative w-16 bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#333333] flex flex-col items-center py-5 space-y-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        
        {/* Floating glow behind profile */}
        <div className="absolute top-6 w-10 h-10 bg-gradient-to-r from-blue-600/30 via-purple-500/20 to-pink-500/20 blur-2xl rounded-full animate-pulse" />

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 6 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-10 h-10 rounded-full overflow-hidden border border-blue-400/60 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Icon Buttons */}
        <motion.div
          className="flex flex-col items-center space-y-7 text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.4, staggerChildren: 0.15 },
            },
          }}
        >
          {[
            { Icon: FaUser, color: "#60A5FA" }, // blue
            { Icon: FaCode, color: "#34D399" }, // green
            { Icon: FaBriefcase, color: "#FBBF24" }, // yellow
            { Icon: FaFolderOpen, color: "#A78BFA" }, // purple
          ].map(({ Icon, color }, i) => (
            <motion.button
              key={i}
              whileHover={{
                scale: 1.25,
                color,
                textShadow: `0 0 15px ${color}`,
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Icon className="w-7 h-7" />
            </motion.button>
          ))}

          {/* Social Links */}
          {[
            { Icon: FaGithub, color: "#6e5494", link: "https://github.com/Aman17123" },
            { Icon: FaLinkedin, color: "#0A66C2", link: "https://www.linkedin.com/in/aman-nakoti/" },
            { Icon: SiLeetcode, color: "#FFA116", link: "https://leetcode.com/u/amangate9897/" },
          ].map(({ Icon, color, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                color,
                textShadow: `0 0 15px ${color}`,
                rotate: -5,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="cursor-pointer"
            >
              <Icon className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>

        {/* Glowing bottom bar */}
        <div className="absolute bottom-5 w-8 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
      </div>
    </motion.nav>
  );
}
