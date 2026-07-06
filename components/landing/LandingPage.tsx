"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

interface LandingPageProps {
  onLaunch: () => void;
}

export default function LandingPage({ onLaunch }: LandingPageProps) {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-10 overflow-hidden select-none">
      
      {/* Subtle Background Spatial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Spacer */}
      <div className="w-full max-w-7xl flex justify-between items-center opacity-0 pointer-events-none">
        <span>Spacer</span>
      </div>

      {/* CENTERSTAGE HERO CONTENT (Clean, Minimal, Zero Latency Pills Removed!) */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto max-w-5xl mx-auto space-y-10">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-aether-cyan animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-300">
            AUTONOMOUS SPATIAL OS // VER 4.2 PRO
          </span>
        </motion.div>

        {/* ONE-WORD BRAND TITLE: AETHEROS (Zero Cheap Glows, Distinct Cool Gradients) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl sm:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter uppercase select-none"
        >
          <span className="bg-gradient-to-r from-[#00f2fe] via-white to-[#00f2fe] bg-clip-text text-transparent">
            AETHER
          </span>
          <span className="bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f59e0b] bg-clip-text text-transparent">
            OS
          </span>
        </motion.h1>

        {/* Executive Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-2xl lg:text-3xl font-body font-light text-zinc-300 max-w-3xl leading-relaxed tracking-wide"
        >
          Intelligence. <span className="text-aether-cyan font-normal font-mono">Spatialized.</span> Zero-latency neural cluster orchestration.
        </motion.p>

        {/* CENTERSTAGE CTA BUTTON (With 1px Continuous Traveling Border Line, No Glow) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="pt-4"
        >
          <div className="relative overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer group">
            {/* Continuous 1px Traveling Border Line (Zero Glow!) */}
            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 to-transparent animate-rotate-beam-fast pointer-events-none opacity-90" />

            <button
              onClick={onLaunch}
              data-clickable="true"
              className="relative z-10 px-10 py-5 rounded-full bg-[#05050a] group-hover:bg-[#080814] transition-colors flex items-center gap-4 text-white font-display text-sm sm:text-base font-extrabold uppercase tracking-[0.2em]"
            >
              <Zap className="h-5 w-5 text-aether-cyan fill-current animate-pulse" />
              <span>ENTER COMMAND GRID</span>
              <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* FOOTER: SINGLE HIGH-LEGIBILITY FOUNDER SPOTLIGHT (With Real Social Links & 1px Traveling Border Line, No Glow) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full max-w-2xl mx-auto mt-16"
      >
        <div className="relative overflow-hidden rounded-2xl p-[1px] transition-all duration-300">
          {/* Continuous 1px Traveling Border Line (Zero Glow!) */}
          <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 via-pink-500 to-transparent animate-rotate-beam pointer-events-none opacity-80" />

          <div className="relative z-10 rounded-[15px] bg-[#05050a] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Founder Identity with Ultra-Crisp Legibility */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aether-cyan via-purple-600 to-pink-600 flex items-center justify-center shadow-inner shrink-0">
                <Sparkles className="h-5 w-5 text-white animate-pulse" />
              </div>
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="font-display text-base md:text-lg font-extrabold text-white tracking-wide">
                    Abhijeet Kangane
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-[10px] font-mono font-extrabold text-emerald-400 uppercase tracking-widest">
                    FOUNDER
                  </span>
                </div>
                <div className="font-mono text-xs text-zinc-300 font-medium">
                  Lead UI/UX Architect // AetherOS Enterprise
                </div>
              </div>
            </div>

            {/* Right: Real Social Links (Clean Inline SVGs with Authentic URLs) */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/abhijeet-kangane/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.75a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/>
                </svg>
              </a>
              <a
                href="https://x.com/abhijeet_037"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="X (Twitter)"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/abhijeet.037/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://github.com/abhi666-max"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </motion.div>

    </div>
  );
}
