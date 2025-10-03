"use client";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiThreedotjs, SiNextdotjs, SiTailwindcss, SiBootstrap, SiFramer, SiNestjs, SiMongodb , SiNetlify } from "react-icons/si";

export default function Stack(){


  return(
    <section className="ml-14 bg-[#1c1c1c] min-h-screen flex flex-col text-white items-start pt-10">
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
            className="text-white "
            style={{
              WebkitTextStroke: "1.5px #00f0ff",
              paintOrder: "stroke fill",
            }}
          >
            STACK
          </span>
        </h1>


      </div>

     <div className="ml-28 mt-16 flex flex-col space-y-10">

        {/* FRONTEND */}
        <div>
          <h2 className="text-[#007ACC] font-bold text-xl mb-4">&lt;FRONTEND/&gt;</h2>
          <div className="flex flex-wrap gap-10 text-lg">
            <div className="flex items-center space-x-2"><SiJavascript className="text-yellow-400 w-7 h-7" /><span>Javascript</span></div>
            <div className="flex items-center space-x-2"><SiTypescript className="text-blue-500 w-7 h-7" /><span>Typescript</span></div>
            <div className="flex items-center space-x-2"><FaReact className="text-cyan-400 w-7 h-7" /><span>Reactjs</span></div>
            <div className="flex items-center space-x-2"><SiThreedotjs className="text-white w-7 h-7" /><span>Threejs</span></div>
            <div className="flex items-center space-x-2"><SiNextdotjs className="text-white w-7 h-7" /><span>Nextjs</span></div>
            <div className="flex items-center space-x-2"><SiTailwindcss className="text-cyan-500 w-7 h-7" /><span>TailwindCSS</span></div>
            <div className="flex items-center space-x-2"><SiBootstrap className="text-purple-500 w-7 h-7" /><span>Bootstrap</span></div>
            <div className="flex items-center space-x-2"><SiFramer className="text-pink-400 w-7 h-7" /><span>Framer</span></div>
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h2 className="text-[#007ACC] font-bold text-xl mb-4">&lt;BACKEND/&gt;</h2>
          <div className="flex flex-wrap gap-10 text-lg">
            <div className="flex items-center space-x-2"><FaNodeJs className="text-green-500 w-7 h-7" /><span>Nodejs</span></div>
            <div className="flex items-center space-x-2"><SiNestjs className="text-red-500 w-7 h-7" /><span>Nestjs</span></div>
          </div>
        </div>

        {/* DATABASE */}
        <div>
          <h2 className="text-[#007ACC] font-bold text-xl mb-4">&lt;DATABASE/&gt;</h2>
          <div className="flex flex-wrap gap-10 text-lg">
            <div className="flex items-center space-x-2">
              <SiMongodb  className="text-green-500 w-7 h-7" /><span>MongoDB</span></div>
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <h2 className="text-[#007ACC] font-bold text-xl mb-4">&lt;TOOLS/&gt;</h2>
          <div className="flex flex-wrap gap-10 text-lg">
            <div className="flex items-center space-x-2"><FaGitAlt className="text-orange-500 w-7 h-7" /><span>Git</span></div>
            <div className="flex items-center space-x-2"><FaFigma className="text-pink-500 w-7 h-7" /><span>Figma</span></div>
            <div className="flex items-center space-x-2"><SiNetlify className="text-green-400 w-7 h-7" /><span>Netlify</span></div>
          </div>
        </div>

      </div>
    </section>

  )
}