"use client";

import { motion, AnimatePresence } from "framer-motion";
export default function Top() {

  
  return (
    <div className="top ml-14">
      <div className="w-full bg-[#1E1E1E] text-white h-10 flex items-center overflow-hidden">
        {/* File name section */}
          <div className="px-3 bg-[#3A3A3A] h-full flex items-center">
            <span className="text-sm font-fira-code">AMAN_Portfolio.jsx</span>
          </div>

        
          <div className="flex flex-1 justify-center items-center">
            <div className="px-3 bg-[#3A3A3A] h-[75%] w-[60%] flex items-center overflow-hidden rounded">
              <div className="whitespace-nowrap animate-marquee text-sm font-fira-code">
                Hi, I'm Aman Nakoti / Front-End Developer / aman@email.com / 📍
                Rishikesh, India
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
