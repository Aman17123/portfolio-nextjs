"use client";

import { useEffect, useRef } from "react";
import Preloader from "./Preloader";
import SmoothScrollProvider from "./SmoothScrollProvider";
import ScrollProgress from "./ScrollProgress";

const BG_COLOR = "#1e1e1e";
const RULER_COLOR = "rgba(100, 100, 100, 0.05)";
const MARGIN_RULER_COLOR = "rgba(255, 255, 255, 0.03)";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pulseRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);  // ← Fix: track RAF ID for cleanup
  const frameCountRef = useRef(0);               // ← Fix: frame skipping for mobile

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = () => window.innerWidth < 768;

    const drawRulers = (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      time: number
    ) => {
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
      frameCountRef.current++;

      // On mobile, render only every 6th frame (~10 FPS) to save battery
      if (isMobile() && frameCountRef.current % 6 !== 0) {
        rafIdRef.current = requestAnimationFrame(animate);
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

      rafIdRef.current = requestAnimationFrame(animate); // ← Fix: store the ID
    };

    rafIdRef.current = requestAnimationFrame(animate);

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // ← Fix: cancel RAF on unmount — no more memory leak
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <SmoothScrollProvider>
      <Preloader>
        <ScrollProgress />
        <canvas ref={canvasRef} className="fixed inset-0 -z-10" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </Preloader>
    </SmoothScrollProvider>
  );
}
