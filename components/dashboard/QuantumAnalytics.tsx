"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Sparkles, Zap, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";

export default function QuantumAnalytics() {
  const [timeframe, setTimeframe] = useState<"1H" | "24H" | "7D" | "30D">("24H");
  const [userScale, setUserScale] = useState(250000);

  // Dynamically change calculation multipliers, growth metrics, AND SVG graph curves/coordinates based on timeframe!
  const timeframeMultipliers = {
    "1H": { 
      factor: 3.2, growth: "+520%", nominal: "0.12ms", legacy: "38.0ms", qLive: "1H Peak",
      chart1: { path: "M 0 185 Q 100 180, 200 150 T 350 90 T 500 15", circleY: 15 },
      chart2: { path: "M 0 40 Q 150 120, 300 150 T 500 165", circleY: 165 }
    },
    "24H": { 
      factor: 14.8, growth: "+64.2%", nominal: "0.18ms", legacy: "45.0ms", qLive: "24H Avg",
      chart1: { path: "M 0 180 Q 120 160, 240 100 T 500 45", circleY: 45 },
      chart2: { path: "M 0 30 Q 150 140, 300 170 T 500 185", circleY: 185 }
    },
    "7D": { 
      factor: 42.5, growth: "+440%", nominal: "0.15ms", legacy: "42.0ms", qLive: "7D Trend",
      chart1: { path: "M 0 170 Q 140 150, 260 110 T 380 60 T 500 25", circleY: 25 },
      chart2: { path: "M 0 20 Q 140 100, 280 150 T 500 175", circleY: 175 }
    },
    "30D": { 
      factor: 180.0, growth: "+610%", nominal: "0.14ms", legacy: "48.5ms", qLive: "30D Total",
      chart1: { path: "M 0 190 Q 150 185, 280 150 T 400 70 T 500 10", circleY: 10 },
      chart2: { path: "M 0 50 Q 160 150, 320 180 T 500 192", circleY: 192 }
    },
  };

  const currentMeta = timeframeMultipliers[timeframe];

  // Smart number formatting to prevent ANY box overflow!
  const calculateSavingsFormatted = (users: number) => {
    const rawVal = (users / 1000) * currentMeta.factor;
    if (rawVal >= 1000) {
      return `$${(rawVal / 1000).toFixed(1)}B`; // e.g. $45.0B instead of $45000.0M!
    }
    return `$${rawVal.toFixed(1)}M`;
  };

  const calculateHoursFormatted = (users: number) => {
    const base = Math.round((users / 50) * 12);
    const totalHours = timeframe === "1H" ? Math.round(base / 24) : timeframe === "7D" ? base * 7 : timeframe === "30D" ? base * 30 : base;
    if (totalHours >= 1000000) {
      return `${(totalHours / 1000000).toFixed(1)}M Hrs`; // e.g. 1.8M Hrs instead of 1,800,000!
    }
    if (totalHours >= 10000) {
      return `${Math.round(totalHours / 1000)}K Hrs`;
    }
    return `${totalHours.toLocaleString()} Hrs`;
  };

  return (
    <div className="space-y-12 pb-16 max-w-7xl mx-auto">
      
      {/* 1. Module Title & Interactive Timeframe Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/40 text-[11px] font-mono font-extrabold text-pink-400 uppercase tracking-wider">
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

        {/* Timeframe Pills (Clicking now dynamically recalculates all charts and savings!) */}
        <div className="flex items-center gap-1 bg-[#05050a] p-1.5 rounded-xl border border-white/15 self-start md:self-auto">
          {(["1H", "24H", "7D", "30D"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              data-clickable="true"
              className={`px-5 py-2 rounded-lg text-xs font-mono font-extrabold transition-all cursor-pointer ${
                timeframe === t
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-aether-cyan text-white shadow-md scale-105"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Interactive Enterprise Scale ROI Simulator (With Continuous 1px Traveling Border Line, Zero Glow!) */}
      <div className="relative overflow-hidden rounded-[24px] p-[1px] transition-all duration-300">
        {/* Continuous 1px Traveling Border Line (No Box-Shadow Glow!) */}
        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-pink-500 via-purple-500 via-aether-cyan to-transparent animate-rotate-beam pointer-events-none opacity-80" />

        <div className="relative z-10 rounded-[23px] bg-[#05050a] p-8 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-pink-400 uppercase font-extrabold tracking-widest block">
                // ENTERPRISE SCALE ROI SIMULATOR [{timeframe} FORECAST] //
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Simulate Your Autonomous Cloud Savings
              </h2>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-mono text-aether-cyan font-bold self-start md:self-auto flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-aether-cyan animate-ping" />
              <span>● {timeframe} REAL-TIME FORECAST</span>
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
                  <span>AetherOS Autonomous Optimization Factor ({timeframe})</span>
                </div>
                <p className="text-xs font-body text-zinc-400 leading-relaxed font-light">
                  By replacing manual DevOps tickets with {currentMeta.nominal} spatial routing and autonomous swarm regulation, enterprise infrastructure efficiency scales exponentially without linear headcount growth.
                </p>
              </div>
            </div>

            {/* Projected ROI Results Cards (Smart formatting prevents ANY text overflow!) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={timeframe}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 space-y-2 relative overflow-hidden group/card shadow-lg min-w-0">
                  <div className="absolute top-0 right-0 p-3 text-pink-500/20 group-hover/card:text-pink-500/40 transition-colors pointer-events-none">
                    <ArrowUpRight className="h-12 w-12" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 uppercase font-bold block truncate">{timeframe} Compute Savings</span>
                  <div className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-mono font-extrabold text-white tracking-tight truncate">
                    {calculateSavingsFormatted(userScale)}
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold block pt-1 truncate">
                    ↑ {currentMeta.growth} vs Legacy Cloud
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-aether-cyan/10 to-blue-500/10 border border-aether-cyan/30 space-y-2 relative overflow-hidden group/card shadow-lg min-w-0">
                  <div className="absolute top-0 right-0 p-3 text-aether-cyan/20 group-hover/card:text-aether-cyan/40 transition-colors pointer-events-none">
                    <Zap className="h-12 w-12" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 uppercase font-bold block truncate">{timeframe} DevOps Saved</span>
                  <div className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-mono font-extrabold text-white tracking-tight truncate">
                    {calculateHoursFormatted(userScale)}
                  </div>
                  <span className="text-xs font-mono text-aether-cyan font-bold block pt-1 truncate">
                    ⚡ {currentMeta.nominal} Autonomous Hops
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* 3. Bloomberg / Palantir Tier Dynamically Animating Charts (With Continuous 1px Traveling Border Line, Zero Glow!) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Chart 1: YoY Productivity Velocity (SVG curve dynamically morphs on timeframe switch!) */}
        <div className="relative overflow-hidden rounded-[24px] p-[1px] transition-transform duration-300 hover:scale-[1.01] cursor-pointer group">
          <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-purple-500 via-pink-500 via-aether-cyan to-transparent animate-rotate-beam pointer-events-none opacity-80" />
          
          <div className="relative z-10 rounded-[23px] bg-[#05050a] p-6 sm:p-8 space-y-6 h-full">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-purple-400 uppercase font-extrabold tracking-wider">
                PRODUCTIVITY VELOCITY ({timeframe})
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">{currentMeta.growth} GROWTH</span>
            </div>

            <div className="relative h-60 w-full flex items-end justify-between pt-8 pb-4 px-2">
              <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible select-none">
                <defs>
                  <linearGradient id="areaGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="50" x2="500" y2="50" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                
                <motion.path
                  key={`area1-${timeframe}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, d: `${currentMeta.chart1.path} L 500 200 L 0 200 Z` }}
                  transition={{ duration: 0.5 }}
                  fill="url(#areaGrad1)"
                />
                
                <motion.path
                  key={`line1-${timeframe}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1, d: currentMeta.chart1.path }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  strokeDasharray="8 4"
                  className="animate-pulse"
                />
                
                <motion.g
                  key={`dot1-${timeframe}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, y: currentMeta.chart1.circleY - 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ transformOrigin: "500px 0px" }}
                >
                  <circle cx="500" cy="20" r="7" fill="#06b6d4" className="animate-ping" />
                  <circle cx="500" cy="20" r="6" fill="#fff" />
                </motion.g>
              </svg>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/10">
              <span>T-3 Period</span>
              <span>T-2 Period</span>
              <span>T-1 Period</span>
              <span className="text-white font-bold">{currentMeta.qLive} (Live)</span>
            </div>
          </div>
        </div>

        {/* Chart 2: Sub-Millisecond Latency Reduction (SVG curve dynamically morphs on timeframe switch!) */}
        <div className="relative overflow-hidden rounded-[24px] p-[1px] transition-transform duration-300 hover:scale-[1.01] cursor-pointer group">
          <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 to-transparent animate-rotate-beam-reverse pointer-events-none opacity-80" />
          
          <div className="relative z-10 rounded-[23px] bg-[#05050a] p-6 sm:p-8 space-y-6 h-full">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-aether-cyan uppercase font-extrabold tracking-wider">
                LATENCY REDUCTION ({timeframe})
              </span>
              <span className="text-xs font-mono text-aether-cyan font-bold">{currentMeta.nominal} NOMINAL</span>
            </div>

            <div className="relative h-60 w-full flex items-end justify-between pt-8 pb-4 px-2">
              <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible select-none">
                <defs>
                  <linearGradient id="areaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="50" x2="500" y2="50" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
                
                <motion.path
                  key={`area2-${timeframe}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, d: `${currentMeta.chart2.path} L 500 200 L 0 200 Z` }}
                  transition={{ duration: 0.5 }}
                  fill="url(#areaGrad2)"
                />
                
                <motion.path
                  key={`line2-${timeframe}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1, d: currentMeta.chart2.path }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="4"
                  strokeDasharray="8 4"
                  className="animate-pulse"
                />
                
                <motion.g
                  key={`dot2-${timeframe}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, y: currentMeta.chart2.circleY - 185 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ transformOrigin: "500px 0px" }}
                >
                  <circle cx="500" cy="185" r="7" fill="#ec4899" className="animate-ping" />
                  <circle cx="500" cy="185" r="6" fill="#fff" />
                </motion.g>
              </svg>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/10">
              <span>{currentMeta.legacy} (Legacy)</span>
              <span>12.4ms</span>
              <span>2.1ms</span>
              <span className="text-aether-cyan font-bold">{currentMeta.nominal} (AetherOS)</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
