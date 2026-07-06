"use client";

import React, { useState } from "react";
import { Cpu, RefreshCcw, ShieldCheck, Activity, CheckCircle2, Sliders, Zap, Lock } from "lucide-react";

export default function SwarmManager() {
  const [swarms, setSwarms] = useState([
    { id: "SW-01", name: "Aegis Security Swarm", units: 520, status: "ENGAGED", task: "Zero-trust DDoS Neutralization", efficiency: 99.9, load: 45 },
    { id: "SW-02", name: "Chronos Predictive Engine", units: 840, status: "ENGAGED", task: "Quantum Route Optimization", efficiency: 98.4, load: 78 },
    { id: "SW-03", name: "Synapse Research Crawler", units: 1100, status: "ENGAGED", task: "Vector DB Indexing & Synthesis", efficiency: 97.2, load: 88 },
    { id: "SW-04", name: "Valkyrie Threat Neutralizer", units: 580, status: "STANDBY", task: "Autonomous Firewall Regulation", efficiency: 99.9, load: 12 },
  ]);

  const [globalEfficiency, setGlobalEfficiency] = useState(98.8);

  const toggleStatus = (id: string) => {
    setSwarms((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: s.status === "ENGAGED" ? "STANDBY" : "ENGAGED" } : s))
    );
  };

  const handleSliderChange = (id: string, newLoad: number) => {
    setSwarms((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const newEff = Math.min(99.9, Math.max(85.0, 99.9 - (newLoad > 80 ? (newLoad - 80) * 0.4 : 0)));
          return { ...s, load: newLoad, efficiency: Number(newEff.toFixed(1)) };
        }
        return s;
      })
    );
  };

  return (
    <div className="space-y-12 pb-16 max-w-7xl mx-auto">
      
      {/* 1. Module Title & Summary Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[11px] font-mono font-extrabold text-emerald-400 uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Cpu className="h-3.5 w-3.5 animate-pulse" />
            <span>MODULE 03 // AUTONOMOUS SWARM REGULATION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white">
            Swarm <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-aether-cyan bg-clip-text text-transparent">Manager</span>
          </h1>
          <p className="text-sm md:text-base font-body text-zinc-400 font-light max-w-2xl leading-relaxed">
            Orchestrate 3,040+ self-healing AI agents dedicated to zero-trust DDoS neutralization, automated DevOps, and predictive vector indexing.
          </p>
        </div>

        {/* Global Stats Pill */}
        <div className="flex items-center gap-6 bg-white/[0.04] border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl shadow-lg">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block">Active Agents</span>
            <span className="text-2xl font-mono font-extrabold text-emerald-400">3,040 Units</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block">Swarm Efficiency</span>
            <span className="text-2xl font-mono font-extrabold text-aether-cyan">{globalEfficiency}%</span>
          </div>
        </div>
      </div>

      {/* 2. Swarm Grid (Reverted card hover to clean scale-105) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {swarms.map((swarm, idx) => {
          const isEngaged = swarm.status === "ENGAGED";
          return (
            <div
              key={swarm.id}
              className="relative overflow-hidden rounded-3xl p-[2px] shadow-lg hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] hover:scale-[1.02] transition-all duration-500 group cursor-pointer"
            >
              {/* Clockwise Rotating Beam */}
              <div
                className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-emerald-500 via-aether-cyan via-purple-500 to-transparent opacity-80 animate-rotate-beam pointer-events-none"
                style={{ animationDelay: `-${idx * 1.2}s` }}
              />

              <div className="relative z-10 rounded-[22px] bg-[#010103]/95 p-6 sm:p-8 flex flex-col justify-between space-y-6 h-full backdrop-blur-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${isEngaged ? "bg-emerald-400 animate-ping" : "bg-zinc-500"}`} />
                    <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">{swarm.id}</span>
                  </div>
                  <button
                    onClick={() => toggleStatus(swarm.id)}
                    data-clickable="true"
                    className={`px-3.5 py-1 rounded-full text-xs font-mono font-extrabold tracking-wider transition-all shadow-sm ${
                      isEngaged
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/30"
                        : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-zinc-700 hover:text-white"
                    }`}
                  >
                    ● {swarm.status}
                  </button>
                </div>

                {/* Swarm Info */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {swarm.name}
                  </h3>
                  <div className="text-xs font-mono text-aether-cyan flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5" />
                    <span>TASK: {swarm.task}</span>
                  </div>
                </div>

                {/* Interactive Compute Slider */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400 flex items-center gap-1.5 font-bold">
                      <Sliders className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Compute Load Allocation</span>
                    </span>
                    <span className="text-white font-extrabold">{swarm.load}%</span>
                  </div>

                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={swarm.load}
                    onChange={(e) => handleSliderChange(swarm.id, Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                    <span>5% (Standby)</span>
                    <span>100% (Overdrive)</span>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">Allocated Units</span>
                    <span className="text-lg font-mono font-extrabold text-white">{swarm.units} Agents</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">Swarm Efficiency</span>
                    <span className="text-lg font-mono font-extrabold text-emerald-400">{swarm.efficiency}%</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
