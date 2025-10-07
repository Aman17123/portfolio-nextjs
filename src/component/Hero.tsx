"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen sm:ml-14 px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
      {/* Background gradient matching Navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#333333] z-0" />

      {/* Neon radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl text-white">
        {/* Title */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-fira-condensed font-black uppercase tracking-tighter"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-block text-[#60A5FA]" // neon blue
              style={{ WebkitTextStroke: "1px #FFFFFF" }}
            >
              FRONTEND
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[#E5E5E5] ml-0 sm:ml-4 md:ml-14 inline-block" // soft white
            >
              DEVELOPER
            </motion.span>
          </motion.h1>
        </div>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-lg md:text-xl font-fira-code leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <span className="text-[#60A5FA] font-mono">&lt;student&gt;</span>{" "}
            <span className="text-gray-300">
              I'm Aman Nakoti, a B.Tech CS student who loves exploring the latest web
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
              My focus is on clean code, performance, and user-friendly design.
            </span>{" "}
            <span className="text-[#60A5FA] font-mono">&lt;/focus&gt;</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            <span className="text-[#60A5FA] font-mono">&lt;projects&gt;</span>{" "}
            <span className="text-gray-300">Currently building projects with </span>
            <span className="text-[#FBBF24] font-semibold">Next.js</span>
            <span className="text-gray-300">, </span>
            <span className="text-[#FBBF24] font-semibold">animations</span>
            <span className="text-gray-300">, and </span>
            <span className="text-[#FBBF24] font-semibold">3D web</span>
            <span className="text-gray-300"> experiences to stay ahead in the ever-evolving tech world.</span>{" "}
            <span className="text-[#60A5FA] font-mono">&lt;/projects&gt;</span>
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          className="mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white font-bold text-lg px-8 py-3 rounded-full 
              transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
              font-mono uppercase cursor-pointer tracking-wide"
          >
            &lt; HIRE ME /&gt;
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
