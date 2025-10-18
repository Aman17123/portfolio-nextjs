"use client";
import { motion } from "framer-motion";
import '../app/globals.css'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen sm:ml-14 px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">


      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:mt-15 max-w-6xl text-white">
        {/* Title */}
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
            className="text-white font-bold text-lg px-8 py-3 rounded-full 
            border border-[#3b82f6] hover:border-[#60a5fa]
            transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
            font-fjalla-one uppercase cursor-pointer tracking-wide" 
          >
            &lt; RESUME /&gt;
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
