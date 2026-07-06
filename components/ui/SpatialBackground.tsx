"use client";

import React from "react";

interface SpatialBackgroundProps {
  currentView?: "landing" | "dashboard";
}

export default function SpatialBackground({ currentView = "landing" }: SpatialBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#010103]">
      
      {currentView === "landing" ? (
        /* 1. LANDING PAGE: INTENSE DYNAMIC LIVING SPACE VORTEX */
        <>
          {/* Drifting & Pulsing Holographic Gradient Spheres */}
          <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-aether-cyan/30 via-purple-600/35 to-pink-500/25 rounded-full blur-[150px] animate-float opacity-90" />
          <div className="absolute bottom-1/4 right-1/4 w-[750px] h-[750px] bg-gradient-to-br from-blue-600/30 via-purple-500/30 to-aether-cyan/30 rounded-full blur-[160px] animate-float-medium opacity-80" style={{ animationDelay: "-3s" }} />

          {/* Animated Oblique Cyber Grid */}
          <div
            className="absolute inset-0 opacity-30 animate-pulse-slow"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(168, 85, 247, 0.25) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
              maskImage: "radial-gradient(circle at 50% 50%, white 15%, transparent 85%)",
              transform: "perspective(1000px) rotateX(65deg) translateY(-120px) scale(1.6)",
              transformOrigin: "center 60%",
            }}
          />

          {/* Animated Shooting Meteors & Floating Stardust */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white shadow-[0_0_12px_#06b6d4] animate-pulse"
                style={{
                  top: `${(i * 17) % 90}%`,
                  left: `${(i * 23) % 95}%`,
                  width: `${(i % 3) + 2}px`,
                  height: `${(i % 3) + 2}px`,
                  opacity: 0.4 + ((i % 5) * 0.15),
                  animationDuration: `${2 + (i % 3)}s`,
                  animationDelay: `-${i % 4}s`,
                }}
              />
            ))}
          </div>
        </>
      ) : (
        /* 2. DASHBOARD: HIGH-ENERGY CYBERNETIC MATRIX & LASER GRID */
        <>
          {/* Deep Cybernetic Plasma Glows */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-aether-cyan/20 rounded-full blur-[140px] opacity-80 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[140px] opacity-80 animate-pulse-slow" style={{ animationDelay: "-2s" }} />

          {/* Precision Horizontal & Vertical Laser Matrix Grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "45px 45px",
              maskImage: "radial-gradient(circle at center, white 35%, transparent 90%)",
            }}
          />

          {/* Glowing Neural Intersection Nodes */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-aether-cyan shadow-[0_0_18px_#06b6d4,0_0_6px_#fff]"
                style={{
                  top: `${(i * 29) % 85 + 5}%`,
                  left: `${(i * 37) % 90 + 5}%`,
                  opacity: 0.5 + ((i % 4) * 0.15),
                  animation: "pulse 1.5s infinite",
                  animationDelay: `-${i % 3}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Subtle Vignette Border */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-transparent to-[#010103]/70 pointer-events-none" />
    </div>
  );
}
