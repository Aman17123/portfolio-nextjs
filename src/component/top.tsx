"use client";

import { useEffect, useState } from "react";

export default function Top() {
  const texts = [
    "Hi, I'm Aman Nakoti",
    "Front-End Developer",
    "React.js Developer",
    "aman@gmail.com",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 120);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setTextIndex((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      setTextIndex(0);
      setCharIndex(0);
    }
  }, [charIndex, textIndex, texts]);

  return (
    <div className="top ml-14">
      <div className="w-full bg-[#1E1E1E]  text-white h-10 flex items-center overflow-hidden">
        {/* File name section */}
        <div className="px-3 bg-[#3A3A3A] h-full flex items-center">
          <span className="text-sm font-fira-code">AMAN_Portfolio.jsx</span>
        </div> 

        {/* Typing effect box */}
        <div className="flex flex-1 justify-center items-center">
          <div className="px-3 bg-[#3A3A3A] h-[75%] w-[40%] flex justify-center items-center overflow-hidden rounded">
            <div className="flex items-center">
              <span className="text-sm font-fira-code">{displayedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
