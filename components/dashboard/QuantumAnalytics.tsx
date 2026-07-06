"use client";

import React, { useState } from "react";
import { BarChart3, Sparkles, Zap, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";

export default function QuantumAnalytics() {
  const [timeframe, setTimeframe] = useState<"1H" | "24H" | "7D" | "30D">("24H");
  const [userScale, setUserScale] = useState(250000);

  const calculateSavings = (users: number) => {
    return ((users / 1000) * 14.8).toFixed(1);
  };

  const calculateHours = (users: number) => {
    return Math.round((users / 50) * 12);
  };

  return (
    <div className="space-y-12 pb-16 max-w-7xl mx-auto">
      
      {/* 1. Module Title & Timeframe Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/40 text-[11px] font-mono font-extrabold text-pink-400 uppercase tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            <BarChart3 className="h-3.5 w-3.5 animate-pulse" />
            <span>MODULE 04 // QUANTUM ANALYTICS & TELEMETRY</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white">
            Quantum <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-aether-cyan bg-clip-text text-transparent">Analytics</span>
          </h1>
          <p className="text-sm md:text-base font-body text-zinc-400 font-light max-w-2xl leading-relaxed">
            Real-time interactive financial ROI forecasting, sub-millisecond latency reduction graphs, and autonomous productivity gains.
          </p>
        </div>

        {/* Timeframe Pills */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-xl border border-white/10 backdrop-blur-xl self-start md:self-auto">
          {(["1H", "24H", "7D", "30D"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              data-clickable="true"
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-extrabold transition-all ${
                timeframe === t
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Interactive Enterprise Scale ROI Simulator with Dynamic Hover Acceleration & Shift */}
      <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_70px_rgba(236,72,153,0.8)] transition-all duration-500 group cursor-pointer">
        <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-pink-500 via-purple-500 via-aether-cyan to-transparent opacity-80 group-hover:opacity-100 animate-rotate-beam group-hover:animate-rotate-beam-fast pointer-events-none transition-all duration-300" />
        
        <div className="relative z-10 rounded-[22px] bg-[#010103]/95 group-hover:bg-[#060614]/95 transition-colors duration-300 p-8 sm:p-10 backdrop-blur-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-pink-400 uppercase font-extrabold tracking-widest block">
                // ENTERPRISE SCALE ROI SIMULATOR //
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Simulate Your Autonomous Cloud Savings
              </h2>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-mono text-aether-cyan font-bold self-start md:self-auto">
              ● REAL-TIME FORECASTING ENGINE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Slider Controls */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono font-bold">
                  <span className="text-zinc-300">Simulated Cluster Workload (Users)</span>
                  <span className="text-pink-400 text-lg font-extrabold">{userScale.toLocaleString()} Users</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={userScale}
                  onChange={(e) => setUserScale(Number(e.target.value))}
                  className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-pink-500 focus:outline-none shadow-inner"
                />
                <div className="flex justify-between text-xs font-mono text-zinc-500">
                  <span>10K (Startup)</span>
                  <span>1M (Scale-Up)</span>
                  <span>10M (Global Enterprise)</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span>AetherOS Autonomous Optimization Factor</span>
                </div>
                <p className="text-xs font-body text-zinc-400 leading-relaxed font-light">
                  By replacing manual DevOps tickets with 0.18ms spatial routing and autonomous swarm regulation, enterprise infrastructure efficiency scales exponentially without linear headcount growth.
                </p>
              </div>
            </div>

            {/* Projected ROI Results Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 space-y-2 relative overflow-hidden group/card shadow-lg">
                <div className="absolute top-0 right-0 p-3 text-pink-500/20 group-hover/card:text-pink-500/40 transition-colors">
                  <ArrowUpRight className="h-12 w-12" />
                </div>
                <span className="text-xs font-mono text-zinc-400 uppercase font-bold block">Annual Compute Savings</span>
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-tight drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                  ${calculateSavings(userScale)}M
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold block pt-1">
                  ↑ +64.2% vs Legacy Cloud
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-aether-cyan/10 to-blue-500/10 border border-aether-cyan/30 space-y-2 relative overflow-hidden group/card shadow-lg">
                <div className="absolute top-0 right-0 p-3 text-aether-cyan/20 group-hover/card:text-aether-cyan/40 transition-colors">
                  <Zap className="h-12 w-12" />
                </div>
                <span className="text-xs font-mono text-zinc-400 uppercase font-bold block">DevOps Hours Saved</span>
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  {calculateHours(userScale).toLocaleString()}
                </div>
                <span className="text-xs font-mono text-aether-cyan font-bold block pt-1">
                  ⚡ 0.18ms Autonomous Hops
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Bloomberg / Palantir Tier Animated Charts with Dynamic Hover Acceleration & Shift */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Chart 1: YoY Productivity Velocity */}
        <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-lg hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] transition-all duration-500 group cursor-pointer">
          <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-purple-500 via-pink-500 via-aether-cyan to-transparent opacity-80 group-hover:opacity-100 animate-rotate-beam group-hover:animate-rotate-beam-fast pointer-events-none transition-all duration-300" />
          
          <div className="relative z-10 rounded-[22px] bg-[#010103]/95 group-hover:bg-[#060614]/95 transition-colors duration-300 p-6 sm:p-8 space-y-6 h-full backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-purple-400 uppercase font-extrabold tracking-wider">
                YOY PRODUCTIVITY VELOCITY
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">+480% GROWTH</span>
            </div>

            <div className="relative h-60 w-full flex items-end justify-between pt-8 pb-4 px-2">
              <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible select-none">
                <defs>
                  <linearGradient id="areaGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Reference Grid Lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                {/* Area Fill Under Curve */}
                <path d="M 0 180 Q 120 160, 240 100 T 500 20 L 500 200 L 0 200 Z" fill="url(#areaGrad1)" />
                {/* Glowing Curve */}
                <path
                  d="M 0 180 Q 120 160, 240 100 T 500 20"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  strokeDasharray="8 4"
                  className="animate-pulse"
                />
                <circle cx="500" cy="20" r="7" fill="#06b6d4" className="animate-ping" />
                <circle cx="500" cy="20" r="6" fill="#fff" />
              </svg>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/10">
              <span>Q1 2025</span>
              <span>Q2 2025</span>
              <span>Q3 2025</span>
              <span>Q4 2025</span>
              <span className="text-white font-bold">Q1 2026 (Live)</span>
            </div>
          </div>
        </div>

        {/* Chart 2: Sub-Millisecond Latency Reduction */}
        <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-lg hover:shadow-[0_0_60px_rgba(6,182,212,0.7)] transition-all duration-500 group cursor-pointer">
          <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 to-transparent opacity-80 group-hover:opacity-100 animate-rotate-beam-reverse group-hover:animate-rotate-beam-fast pointer-events-none transition-all duration-300" />
          
          <div className="relative z-10 rounded-[22px] bg-[#010103]/95 group-hover:bg-[#060614]/95 transition-colors duration-300 p-6 sm:p-8 space-y-6 h-full backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-aether-cyan uppercase font-extrabold tracking-wider">
                SUB-MILLISECOND LATENCY REDUCTION
              </span>
              <span className="text-xs font-mono text-aether-cyan font-bold">0.18ms NOMINAL</span>
            </div>

            <div className="relative h-60 w-full flex items-end justify-between pt-8 pb-4 px-2">
              <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible select-none">
                <defs>
                  <linearGradient id="areaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Reference Grid Lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                {/* Area Fill Under Curve */}
                <path d="M 0 30 Q 150 140, 300 170 T 500 185 L 500 200 L 0 200 Z" fill="url(#areaGrad2)" />
                {/* Glowing Curve */}
                <path
                  d="M 0 30 Q 150 140, 300 170 T 500 185"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="4"
                  strokeDasharray="8 4"
                  className="animate-pulse"
                />
                <circle cx="500" cy="185" r="7" fill="#ec4899" className="animate-ping" />
                <circle cx="500" cy="185" r="6" fill="#fff" />
              </svg>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/10">
              <span>45.0ms (Legacy)</span>
              <span>12.4ms</span>
              <span>2.1ms</span>
              <span>0.45ms</span>
              <span className="text-aether-cyan font-bold">0.18ms (AetherOS)</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
