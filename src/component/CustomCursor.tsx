"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Track mouse position
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Detect hover on buttons/links
  useEffect(() => {
    const interactiveElements = document.querySelectorAll("a, button");
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Hide the default cursor */}
      <style>{`body { cursor: none !important; }`}</style>

      {/* Custom cursor */}
      <div
        style={{
          left: position.x,
          top: position.y,
        }}
        className={`
          pointer-events-none fixed z-50 
          w-8 h-8 md:w-10 md:h-10 
          rounded-full 
          bg-white 
          mix-blend-difference 
          transform -translate-x-1/2 -translate-y-1/2 
          transition-transform duration-75 
          ${hovering ? "scale-150 bg-[#60A5FA]" : "scale-100"}
        `}
      />
    </>
  );
}
