"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Preloader from "./Preloader";

const BG_COLOR = "#1e1e1e";
const RULER_COLOR = "rgba(100, 100, 100, 0.05)";
const MARGIN_RULER_COLOR = "rgba(255, 255, 255, 0.03)";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pulseRef = useRef(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { margin: "-50px 0px", once: true });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isInView) setHasBeenVisible(true);
  }, [isInView]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const drawRulers = (ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
      const shift = Math.sin(time / 500) * 0.2;

      ctx.strokeStyle = RULER_COLOR;
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x + shift, 0);
        ctx.lineTo(x + shift, h);
        ctx.stroke();
      }

      const marginPos = 800;
      const glowAlpha = 0.4 + Math.sin(time / 100) * 0.2;

      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(0, 122, 204, ${glowAlpha})`;
      ctx.strokeStyle = MARGIN_RULER_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(marginPos + shift, 0);
      ctx.lineTo(marginPos + shift, h);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      // Mobile throttling
      if (window.innerWidth < 768) {
        setTimeout(() => requestAnimationFrame(animate), 100);
        return;
      }

      ctx.fillStyle = "rgba(30, 30, 30, 0.2)";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      pulseRef.current += 1;
      drawRulers(ctx, width, height, pulseRef.current);

      requestAnimationFrame(animate);
    };

    animate();

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
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
      <div ref={wrapperRef}>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={hasBeenVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </Preloader>
  );
}
