"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    // 0.000ms Hardware-Accelerated Tracking - ZERO CSS transform transition!
    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement;
      const clickable = target.closest(
        "a, button, input, select, textarea, [role='button'], [data-clickable='true']"
      );
      setIsHovered(!!clickable);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Layer 2: Instant Orbiting Ring (Zero transform delay) */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border cursor-ring-instant backdrop-blur-[1px] ${
          isHovered
            ? "w-14 h-14 border-purple-400 bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.9)] scale-110"
            : "w-9 h-9 border-aether-cyan/80 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Layer 1: ZERO-LATENCY Core Dot (Zero transform delay) */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full cursor-dot-instant ${
          isHovered
            ? "w-1.5 h-1.5 bg-white shadow-[0_0_12px_#fff]"
            : "w-2 h-2 bg-aether-cyan shadow-[0_0_15px_#06b6d4,0_0_5px_#fff]"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
