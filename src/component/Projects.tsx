"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";
import "../app/globals.css";

type Project = {
  number: string;
  title: string;
  category: string;
  categoryColor: string;
  tech: string;
  description: string;
  features: string[];
  impact: string;
  image: string;
  link: string;
  github: string;
  isExternal?: boolean; // false for external placeholder images
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

export default function Projects() {
  const projects: Project[] = [
    {
      number: "01",
      title: "IDE PORTFOLIO WEBSITE",
      category: "Next.js · Fullstack",
      categoryColor: "text-blue-400 border-blue-400/30 bg-blue-400/5",
      tech: "Next.js · Tailwind CSS · Framer Motion · TypeScript",
      description:
        "A premium developer portfolio themed after the VS Code editor interface. Features custom interactive elements, multi-file simulated navigation, and a customized command palette to display stack information.",
      features: [
        "Interactive files and folder tree navigation system",
        "Sub-second page rendering using Next.js static site generation",
        "Responsive styling with Tailwind CSS and custom glassmorphism components",
        "Rich UI micro-animations and physics-based custom cursor logic",
      ],
      impact:
        "Improves recruiter retention by presenting experience in a familiar and highly engaging workspace theme.",
      image: "/portfolio.png",
      link: "https://portfolio-nextjs-sable-one.vercel.app/",
      github: "https://github.com/Aman17123",
      isExternal: false,
    },
    {
      number: "02",
      title: "GORAFTS ADVENTURE",
      category: "Frontend · Freelance",
      categoryColor: "text-green-400 border-green-400/30 bg-green-400/5",
      tech: "React.js · Tailwind CSS · Framer Motion · EmailJS",
      description:
        "An SEO-optimized landing page designed for a local river rafting business in Rishikesh. Provides potential tourists with a dynamic tour catalog and instant booking options.",
      features: [
        "Optimized layout yielding high performance on mobile devices",
        "Dynamic booking inquiry system powered by EmailJS client integrations",
        "Custom SVG transition curves and interactive scroll-triggered UI cards",
      ],
      impact:
        "Boosted client's weekly online tourist inquiries by introducing automated booking paths.",
      image: "/rafts.png",
      link: "https://goraftsss.netlify.app/",
      github: "https://github.com/Aman17123",
      isExternal: false,
    },
    {
      number: "03",
      title: "3D WEBGL PORTFOLIO",
      category: "3D · WebGL",
      categoryColor: "text-purple-400 border-purple-400/30 bg-purple-400/5",
      tech: "React.js · Three.js · React Three Fiber · Tailwind CSS",
      description:
        "An immersive WebGL portfolio using React Three Fiber to display custom 3D developer assets. Built to demonstrate advanced browser graphics capabilities and dynamic responsive canvas scaling.",
      features: [
        "Complex 3D orbital path camera controls and object collision bounds",
        "Custom shaders, direct light setups, and particle system renders",
        "Integrated responsive design adapting the WebGL canvas dynamically to screens",
      ],
      impact:
        "Engaged technical visitors with rich visual animations, illustrating high proficiency in creative engineering.",
      image: "/3d.png",
      link: "https://threejsaman.netlify.app/",
      github: "https://github.com/Aman17123",
      isExternal: false,
    },
    {
      number: "04",
      title: "AMAZON INTERFACE CLONE",
      category: "Frontend · Practice",
      categoryColor: "text-orange-400 border-orange-400/30 bg-orange-400/5",
      tech: "HTML5 · CSS3 · Vanilla JavaScript",
      description:
        "A highly detailed vanilla frontend implementation of Amazon's shopping portal. Focuses on pixel-perfect component matching and responsive layout configurations without library assistance.",
      features: [
        "Functional e-commerce cart calculation and checkout form states",
        "Dynamic product grid with clean, custom vanilla CSS grid structures",
        "Optimized client-side search parsing and category navigation",
      ],
      impact:
        "Demonstrated strong foundational knowledge of HTML5 structure, CSS layout patterns, and clean DOM script handling.",
      image: "/amazon.png",
      link: "https://amazoncheckout.netlify.app/",
      github: "https://github.com/Aman17123",
      isExternal: false,
    },
    {
      number: "05",
      title: "AI ATS RESUME ENHANCER",
      category: "AI · Fullstack",
      categoryColor: "text-pink-400 border-pink-400/30 bg-pink-400/5",
      tech: "Next.js · OpenAI API · MongoDB · Tailwind CSS",
      description:
        "An automated SaaS product designed to audit resume texts against job descriptions, returning ATS score feedback and optimization tips. Built using the OpenAI API.",
      features: [
        "ATS parser scanning layout, key fields, and keyword frequency checks",
        "Real-time data synchronization utilizing MongoDB and secure backend API routes",
        "OpenAI API analysis yielding actionable feedback to match target job roles",
      ],
      impact:
        "Empowers B.Tech students and job seekers to instantly align their resumes with modern applicant tracking standards.",
      // Use a local placeholder for external image to avoid next/image domain issues
      image: "/portfolio.png",
      link: "#",
      github: "https://github.com/Aman17123",
      isExternal: false,
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const handleEnter = (proj: Project) => setHoveredProject(proj);
  const handleLeave = () => setHoveredProject(null);

  return (
    <section
      id="proj"
      className="relative w-full flex flex-col justify-center md:ml-14 px-6 md:px-12 lg:px-20 py-10 md:py-24 bg-transparent min-h-screen overflow-hidden z-20"
    >
      <div className="relative z-10 flex flex-col max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="relative flex flex-col mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-fjalla-one font-bold tracking-tight text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#60A5FA]">PROJECTS.</span>
            <span className="text-white ml-1">JSX</span>
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="flex w-full relative">
          {/* Project Text — staggered container */}
          <motion.div
            className="flex flex-col w-full md:w-3/4 relative z-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                onMouseEnter={() => handleEnter(proj)}
                onMouseLeave={handleLeave}
                className="group relative flex flex-col justify-between bg-transparent border-b border-white/5 hover:border-blue-500/20 transition-all duration-300 rounded-xl p-6 cursor-pointer hover:bg-white/2"
              >
                <div className="relative z-20">
                  {/* Top row: number + title + external link */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-white/40 text-2xl font-fjalla-one tracking-wider font-mono">
                      {`<${proj.number}/>`}
                    </span>
                    <a
                      href={proj.link}
                      target={proj.link === "#" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-white text-2xl md:text-3xl font-fjalla-one tracking-wider flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
                      aria-label={`View ${proj.title}${proj.link === "#" ? " (in development)" : " live"}`}
                    >
                      {proj.title}
                      <FiExternalLink className="w-5 h-5 text-white/40 group-hover:text-[#60A5FA] transition-colors" />
                    </a>
                    {/* Category badge */}
                    <span
                      className={`hidden sm:inline-flex items-center text-xs font-mono px-3 py-1 rounded-full border ${proj.categoryColor}`}
                    >
                      {proj.category}
                    </span>
                  </div>

                  {/* Tech stack */}
                  <p className="jetbrains-mono text-gray-400 text-sm md:text-base mt-2 font-medium">
                    <span className="text-[#60A5FA] font-mono">Stack:</span>{" "}
                    {proj.tech}
                  </p>

                  {/* Description */}
                  <p className="jetbrains-mono text-gray-300 text-xs md:text-sm mt-2 max-w-xl leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Mobile project image preview — next/image */}
                  <div className="mt-4 block md:hidden w-full h-48 sm:h-64 relative rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={proj.image}
                      alt={`${proj.title} project preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 640px"
                      className="object-cover"
                    />
                  </div>

                  {/* Key Features */}
                  <div className="mt-3 flex flex-col gap-1 max-w-xl text-[11px] md:text-xs text-gray-500 font-mono">
                    <span className="text-gray-400 font-semibold uppercase tracking-wider">
                      Key Features:
                    </span>
                    <ul className="list-none space-y-0.5 pl-1">
                      {proj.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-blue-500">▸</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <p className="jetbrains-mono text-emerald-400/90 text-xs mt-3 max-w-xl italic">
                    📈{" "}
                    <span className="font-semibold uppercase tracking-wider text-[11px]">
                      Impact:
                    </span>{" "}
                    {proj.impact}
                  </p>

                  {/* Bottom row: GitHub link */}
                  <div className="mt-4 flex items-center gap-4">
                    {proj.github && proj.github !== "#" && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.title} GitHub repository`}
                        className="flex items-center gap-1.5 text-gray-600 hover:text-white transition-colors text-xs font-mono"
                      >
                        <FaGithub className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    {proj.link === "#" && (
                      <span className="text-xs font-mono text-yellow-500/70 border border-yellow-500/20 bg-yellow-500/5 px-2 py-0.5 rounded-full">
                        🚧 In Development
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hovered Project Image — Desktop only, next/image */}
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                key={hoveredProject.image}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1.5, y: "10%", x: "-50%" }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                className="absolute left-[87.5%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl pointer-events-none z-10 hidden md:block overflow-hidden"
                style={{ width: "200px", height: "550px" }}
              >
                <Image
                  src={hoveredProject.image}
                  alt={`Screenshot of ${hoveredProject.title} project by Aman Nakoti`}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
