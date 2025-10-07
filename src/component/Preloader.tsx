"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1e1e1e]">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }} 
            transition={{
              duration: 1.1,
              ease: [0.83, 0, 0.17, 1], 
            }}
            className="fixed inset-0 z-50 bg-[#1e1e1e] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Accent line that moves with the slide */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0.8 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="absolute top-0 left-0 h-1 bg-[#0078d7] origin-left shadow-[0_0_10px_#0078d7]"
            />

            {/* Main text */}
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
              className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#d4d4d4] tracking-[0.05em] leading-none 
                        flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0"
            >
              <span className="text-[#9CDCFE] font-margarine">Hi/</span>
              <span className="text-[#C586C0] font-noto-jp">こんにちは</span>
            </motion.h1>

            {/* Loading dots (soft glow) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-[#0078d7] shadow-[0_0_6px_#0078d7]"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ delay: loading ? 0 : 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-0"
      >
        {children}
      </motion.main>
    </div>
  );
}
