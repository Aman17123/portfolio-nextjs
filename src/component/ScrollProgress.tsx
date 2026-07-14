"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3b82f6, #60a5fa, #a78bfa)",
        boxShadow: "0 0 8px rgba(96,165,250,0.6)",
      }}
      aria-hidden="true"
    />
  );
}
