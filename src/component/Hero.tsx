// app/components/HeroSection.jsx
"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen -mt-10 flex ml-14 flex-col justify-center items-start bg-[#1c1c1c] text-white px-6 md:px-16">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-fira-condensed font-extrabold tracking-tight leading-none">
        <span
          className="text-[#007ACC]"
          style={{
            WebkitTextStroke: "1.2px #1e1e1e",
            paintOrder: "stroke fill",
          }}
        >
          FRONTEND
        </span>
        <br />
        <span
          className="text-white block ml-6" 
          style={{
            WebkitTextStroke: "1.2px #007ACC",
            paintOrder: "stroke fill",
          }}
        >
          DEVELOPER
        </span>
      </h1>

      <p className="mt-8 text-lg md:text-xl font-mono">
        <span className="text-blue-500">&lt;student&gt;</span>{" "}
        I’m Aman Nakoti a B.Tech CS student who loves exploring the latest web
        technologies to craft unique digital experiences.{" "}
        <span className="text-blue-500">&lt;/student&gt;</span>
      </p>

      <p className="mt-6 text-lg md:text-xl font-mono">
        <span className="text-blue-500">&lt;focus&gt;</span>{" "}
        My focus is on clean code, performance, and user-friendly design.{" "}
        <span className="text-blue-500">&lt;/focus&gt;</span>
      </p>

      <p className="mt-6 text-lg md:text-xl font-mono">
        <span className="text-blue-500">&lt;projects&gt;</span>{" "}
        Currently building projects with{" "}
        <span className="text-orange-400">Next.js</span>,{" "}
        <span className="text-orange-400">animations</span>, and{" "}
        <span className="text-orange-400">3D web</span> experiences to stay
        ahead in the ever-evolving tech world.{" "}
        <span className="text-blue-500">&lt;/projects&gt;</span>
      </p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-block px-6 py-2 bg-blue-600 text-white font-bold font-mono rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        &lt; HIRE ME /&gt;
      </motion.a>
    </section>
  );
}
