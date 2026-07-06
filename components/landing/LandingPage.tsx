"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

interface LandingPageProps {
  onLaunch: () => void;
}

export default function LandingPage({ onLaunch }: LandingPageProps) {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 relative z-10 py-12">
      
      {/* Absolute Center Minimalist Cinematic Reveal */}
      <div className="max-w-5xl mx-auto space-y-12 my-auto">
        
        {/* Floating Holographic Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-aether-cyan shadow-sm backdrop-blur-xl animate-float"
        >
          <Sparkles className="h-4 w-4 animate-spin" style={{ animationDuration: "6s" }} />
          <span className="tracking-widest uppercase font-extrabold">THE AUTONOMOUS SPATIAL AI OPERATING SYSTEM</span>
        </motion.div>

        {/* Clean, Elegant Title: AETHEROS AS ONE SINGLE WORD, NO CHEAP GLOWS OR DROP-SHADOWS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6 relative"
        >
          <h1 className="text-7xl sm:text-8xl md:text-[115px] font-display font-extrabold tracking-tighter leading-none select-none relative z-10 flex items-center justify-center gap-0">
            {/* AETHER: Clean Diamond White to Cool Silver/Cyan */}
            <span className="bg-gradient-to-r from-white via-zinc-100 to-[#00f2fe] bg-clip-text text-transparent">
              AETHER
            </span>
            {/* OS: Electric Purple to Laser Pink to Solar Gold - Zero margin/gap! */}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f59e0b] bg-clip-text text-transparent">
              OS
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-heading text-zinc-300 font-light max-w-3xl mx-auto tracking-tight leading-relaxed relative z-10">
            Intelligence. <span className="text-aether-cyan font-semibold">Spatialized.</span> Zero-latency neural cluster orchestration.
          </p>
        </motion.div>

        {/* Continuous Clockwise Moving Border Beam CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer">
            {/* Clockwise Rotating Beam that Accelerates on Hover */}
            <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 via-pink-500 to-transparent opacity-90 group-hover:opacity-100 animate-rotate-beam group-hover:animate-rotate-beam-fast pointer-events-none transition-all duration-300" />
            
            <button
              onClick={onLaunch}
              data-clickable="true"
              className="relative z-10 px-12 py-6 rounded-[22px] bg-[#010103] group-hover:bg-[#060614] transition-colors duration-300 flex items-center gap-4 text-white font-heading text-lg font-extrabold tracking-wider uppercase backdrop-blur-2xl"
            >
              <Zap className="h-6 w-6 text-aether-cyan fill-current animate-pulse" />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">
                Enter Command Grid
              </span>
              <ArrowRight className="h-6 w-6 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
