"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Preloader from "./Preloader";

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  vx: number;
  vy: number;
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Adjust star count based on screen size
    const STAR_COUNT = Math.floor((width * height) / 5000); // auto scaling
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
    }));

    const mouse = { x: width / 2, y: height / 2 };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      const radiusInfluence = 150 * 150; // squared distance

      // Draw stars
      for (let i = 0; i < STAR_COUNT; i++) {
        const star = stars[i];

        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Cursor attraction (squared distance)
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < radiusInfluence) {
          star.x += dx * 0.002;
          star.y += dy * 0.002;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14,165,233,${star.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#0ea5e9";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Resize handler (throttled)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <Preloader>
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
      >
        {children}
      </motion.div>
    </Preloader>
  );
}
