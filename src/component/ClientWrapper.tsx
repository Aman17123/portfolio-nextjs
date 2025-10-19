"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Preloader from "./Preloader";

// VS CODE THEME CONSTANTS
const BG_COLOR = "#1e1e1e"; // Official VS Code Dark Theme Background
const RULER_COLOR = "rgba(100, 100, 100, 0.05)"; // Even fainter gray for main lines
const MARGIN_RULER_COLOR = "rgba(255, 255, 255, 0.03)"; // Faint white for the margin line
const VSCODE_BLUE_GLOW = "rgba(0, 122, 204, 0.6)"; // VS Code Blue for the glow

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pulseRef = useRef(0); // For the subtle pulsing/shifting animation

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const drawVSCodeRulers = (ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
      // Calculate the horizontal shift based on time for a subtle motion
      const shift = Math.sin(time / 500) * 0.2; // Very slow, tiny horizontal oscillation

      // 1. Draw Faint Vertical Lines (Mimicking code structure lines)
      ctx.strokeStyle = RULER_COLOR;
      ctx.lineWidth = 1;
      const lineSpacing = 10; // 10px spacing for code characters

      for (let x = 0; x < w; x += lineSpacing) {
        ctx.beginPath();
        // Apply the subtle horizontal shift
        ctx.moveTo(x + shift, 0);
        ctx.lineTo(x + shift, h);
        ctx.stroke();
      }

      // 2. Draw the Margin Ruler (The 80-character column)
      const marginPosition = 800;
      
      const glowAlpha = 0.4 + Math.sin(time / 100) * 0.2; // Pulse the glow intensity slower
      
      // Apply the subtle VS Code blue glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(0, 122, 204, ${glowAlpha})`;
      
      // Draw the slightly thicker, glowing ruler line
      ctx.strokeStyle = MARGIN_RULER_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(marginPosition + shift, 0); // Apply the same shift
      ctx.lineTo(marginPosition + shift, h);
      ctx.stroke();
      
      // Clear shadow for subsequent drawing (like the actual content)
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      // 1. Clear with a semi-transparent layer for a "refreshing" effect
      // This subtly fades out old frames, adding depth to the dark theme.
      ctx.fillStyle = "rgba(30, 30, 30, 0.2)"; // Semi-transparent version of BG_COLOR
      ctx.fillRect(0, 0, width, height);

      // 2. Solid Background Layer (painted underneath the fade effect)
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      pulseRef.current += 1; // Increment time counter

      // Draw the grid and ruler
      drawVSCodeRulers(ctx, width, height, pulseRef.current);
      
      requestAnimationFrame(animate);
    };

    animate();

    // Standard resize handling (optimized for performance)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <Preloader>
      {/* Canvas remains the background */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
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