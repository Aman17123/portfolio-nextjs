"use client";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiThreedotjs, SiNextdotjs, SiTailwindcss, SiBootstrap, SiFramer, SiNestjs, SiMongodb , SiNetlify } from "react-icons/si";

export default function Stack() {
  return (
    <section className="sm:ml-14 ml-0 bg-[#1c1c1c] min-h-screen flex flex-col text-white items-start pt-10">  
      <div className="flex items-center ml-14 space-x-6">
        {/* Spinning React Icon */}
        <FaReact className="w-14 h-14 animate-spin-slow spin-slow drop-shadow-[0_0_15px_#00f0ff]" />

        <h1 className="text-5xl font-fira-condensed font-extrabold tracking-tighter flex space-x-5">
          <span
            className="text-[#007ACC] neon-text"
            style={{
              WebkitTextStroke: "1.5px #1e1e1e",
              paintOrder: "stroke fill",
            }}
          >
            MY
          </span>
          <span
            className="text-white"
            style={{
              WebkitTextStroke: "1.5px #00f0ff",
              paintOrder: "stroke fill",
            }}
          >
            STACK
          </span>
        </h1>
      </div>

      <div className="mt-16 ml-20 font-fira-condensed font-bold flex flex-col space-y-16 uppercase">

        {/* FRONTEND */}
        <div className="grid grid-cols-[250px_1fr] gap-40 items-center">
          <h2 className="text-[#007ACC] font-bold text-3xl text-right pr-6 whitespace-nowrap">
            &lt;FRONTEND/&gt;
          </h2>
          <div className="grid grid-cols-4 gap-x-12 gap-y-10 text-xl justify-items-start">
            <div className="flex items-center gap-4 skill-item"><SiJavascript className="text-yellow-400 w-16 h-16" /><span>JAVASCRIPT</span></div>
            <div className="flex items-center gap-4 skill-item"><SiTypescript className="text-blue-500 w-16 h-16" /><span>TYPESCRIPT</span></div>
            <div className="flex items-center gap-4 skill-item"><FaReact className="text-cyan-400 w-16 h-16" /><span>REACTJS</span></div>
            <div className="flex items-center gap-4 skill-item"><SiThreedotjs className="text-white w-16 h-16" /><span>THREEJS</span></div>
            <div className="flex items-center gap-4 skill-item"><SiNextdotjs className="text-white w-16 h-16" /><span>NEXTJS</span></div>
            <div className="flex items-center gap-4 skill-item"><SiTailwindcss className="text-cyan-500 w-16 h-16" /><span>TAILWINDCSS</span></div>
            <div className="flex items-center gap-4 skill-item"><SiBootstrap className="text-purple-500 w-16 h-16" /><span>BOOTSTRAP</span></div>
            <div className="flex items-center gap-4 skill-item"><SiFramer className="text-pink-400 w-16 h-16" /><span>FRAMER</span></div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="grid grid-cols-[250px_1fr] gap-40 items-center">
          <h2 className="text-[#007ACC] font-bold text-3xl text-right pr-6 whitespace-nowrap">
            &lt;BACKEND/&gt;
          </h2>
          <div className="grid grid-cols-4 gap-x-12 gap-y-10 text-xl justify-items-start">
            <div className="flex items-center gap-4 skill-item"><FaNodeJs className="text-green-500 w-16 h-16" /><span>NODEJS</span></div>
            <div className="flex items-center gap-4 skill-item"><SiNestjs className="text-red-500 w-16 h-16" /><span>NESTJS</span></div>
          </div>
        </div>

        {/* DATABASE */}
        <div className="grid grid-cols-[250px_1fr] gap-40 items-center">
          <h2 className="text-[#007ACC] font-bold text-3xl text-right pr-6 whitespace-nowrap">
            &lt;DATABASE/&gt;
          </h2>
          <div className="grid grid-cols-4 gap-x-12 gap-y-10 text-xl justify-items-start">
            <div className="flex items-center gap-4 skill-item"><SiMongodb className="text-green-500 w-16 h-16" /><span>MONGODB</span></div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="grid grid-cols-[250px_1fr] gap-40 items-center">
          <h2 className="text-[#007ACC] font-bold text-3xl text-right pr-6 whitespace-nowrap">
            &lt;TOOLS/&gt;
          </h2>
          <div className="grid grid-cols-4 gap-x-12 gap-y-10 text-xl justify-items-start">
            <div className="flex items-center gap-4 skill-item"><FaGitAlt className="text-orange-500 w-16 h-16" /><span>GIT</span></div>
            <div className="flex items-center gap-4 skill-item"><FaFigma className="text-pink-500 w-16 h-16" /><span>FIGMA</span></div>
            <div className="flex items-center gap-4 skill-item"><SiNetlify className="text-green-400 w-16 h-16" /><span>NETLIFY</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
