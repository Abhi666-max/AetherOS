"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Cpu, ShieldCheck, Activity, Play, Zap, Globe, Server, CheckCircle2 } from "lucide-react";

export default function CommandDeck() {
  const [intentInput, setIntentInput] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLogs, setExecutionLogs] = useState<string[]>([
    "System initialized. Spatial routing engine active.",
    "Connected to 6 global orbital hubs [0.18ms average latency].",
    "Aegis zero-trust firewall engaged. Listening for intents...",
  ]);

  const quickIntents = [
    "Deploy 500 Quantum Swarms to APAC-South",
    "Synthesize Neural Weights for LLM-V4",
    "Engage Zero-Trust Autonomous Firewall",
    "Optimize Spatial Routing across Orbital-1",
  ];

  const handleExecute = (cmd?: string) => {
    const targetCmd = cmd || intentInput;
    if (!targetCmd.trim() || isExecuting) return;

    setIsExecuting(true);
    setIntentInput("");
    setExecutionLogs((prev) => [
      `> EXECUTING INTENT: "${targetCmd}"...`,
      "  ├── Allocating 48.2 GB VRAM across APAC-South & US-East...",
      "  ├── Synchronizing 520 autonomous agent swarms...",
      "  └── Verifying SHA-512 cryptographic handshake...",
      ...prev,
    ]);

    setTimeout(() => {
      setExecutionLogs((prev) => [
        `✓ INTENT EXECUTED SUCCESSFULLY [0.18ms]: "${targetCmd}"`,
        "  └── All cluster topologies stabilized. Zero packet loss.",
        ...prev,
      ]);
      setIsExecuting(false);
    }, 1800);
  };

  const kpis = [
    { label: "Neural Cluster Load", value: "24.8%", change: "-2.4% vs last hour", status: "LIVE", icon: Cpu, color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-aether-cyan", sub: "10,800 PetaFLOPS Available" },
    { label: "Quantum Inference", value: "0.18ms", change: "Sub-Millisecond Routing", status: "LIVE", icon: Zap, color: "from-purple-500/20 to-pink-500/20 border-purple-500/50 text-purple-400", sub: "Ultra-Fast Nominal" },
    { label: "Active Agent Swarms", value: "1,420", change: "Autonomous DevOps & Security", status: "LIVE", icon: Globe, color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/50 text-emerald-400", sub: "100% Online" },
    { label: "Security Integrity", value: "99.999%", change: "Zero-Trust Cryptographic Shield", status: "LIVE", icon: ShieldCheck, color: "from-amber-500/20 to-orange-500/20 border-amber-500/50 text-amber-400", sub: "0 Threats Detected" },
  ];

  return (
    <div className="space-y-12 pb-16 max-w-7xl mx-auto">
      
      {/* 1. Natural Language Intent Execution Bar */}
      <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all duration-500 group">
        {/* Clockwise Rotating Beam */}
        <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 via-pink-500 to-transparent opacity-80 animate-rotate-beam pointer-events-none" />
        
        <div className="relative z-10 rounded-[22px] bg-[#010103]/95 p-6 sm:p-8 backdrop-blur-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <Terminal className="h-5 w-5 text-aether-cyan animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-aether-cyan">
                NATURAL LANGUAGE SPATIAL INTENT BAR
              </span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] text-zinc-500">
              PRESS ENTER OR CLICK EXECUTE
            </span>
          </div>

          {/* Input Box */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={intentInput}
                onChange={(e) => setIntentInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleExecute()}
                placeholder="Type your spatial intent (e.g., 'Deploy 500 Agent Swarms to APAC-South')..."
                className="w-full rounded-2xl bg-[#05050a] border border-white/15 px-5 py-4 font-mono text-sm text-white placeholder-zinc-500 focus:border-aether-cyan focus:outline-none focus:ring-1 focus:ring-aether-cyan transition-all shadow-inner"
              />
            </div>

            {/* Sci-Fi Tactical Execute Trigger */}
            <div className="w-full sm:w-auto relative overflow-hidden rounded-2xl p-[2px] shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 group/btn cursor-pointer">
              <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 to-transparent animate-rotate-beam-fast pointer-events-none" />
              
              <button
                onClick={() => handleExecute()}
                disabled={isExecuting || !intentInput.trim()}
                data-clickable="true"
                className="w-full sm:w-auto relative z-10 px-8 py-4 rounded-[14px] bg-[#010103] group-hover/btn:bg-[#080816] transition-colors flex items-center justify-center gap-3 text-white font-display text-xs font-extrabold uppercase tracking-widest backdrop-blur-xl disabled:opacity-50"
              >
                <Zap className={`h-4 w-4 text-aether-cyan fill-current ${isExecuting ? "animate-spin" : "animate-pulse"}`} />
                <span className="bg-gradient-to-r from-white via-aether-cyan to-white bg-clip-text text-transparent">
                  {isExecuting ? "SYNTHESIZING..." : "EXECUTE ⚡"}
                </span>
              </button>
            </div>
          </div>

          {/* Quick Intents Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-zinc-400 mr-1 font-bold">QUICK INTENTS:</span>
            {quickIntents.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleExecute(q)}
                data-clickable="true"
                className="rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/50 px-3.5 py-1.5 text-[11px] font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-aether-cyan" />
                <span>{q}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Real-Time KPI Telemetry Grid (Reverted card hover to clean scale-105) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl p-[2px] shadow-lg hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              {/* Clockwise Rotating Beam */}
              <div
                className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 via-pink-500 to-transparent opacity-70 animate-rotate-beam pointer-events-none"
                style={{ animationDelay: `-${idx * 1.5}s` }}
              />

              <div className="relative z-10 rounded-[22px] bg-[#010103]/95 p-6 flex flex-col justify-between space-y-4 h-full backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-extrabold">
                    {kpi.label}
                  </span>
                  <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${kpi.color} border shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white tracking-tight group-hover:text-aether-cyan transition-colors">
                    {kpi.value}
                  </div>
                  <div className="text-xs font-body text-zinc-400">
                    {kpi.change}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{kpi.sub}</span>
                  </span>
                  <span className="text-zinc-500 font-bold">{kpi.status}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Live Neural Execution Stream Console */}
      <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-xl group">
        <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-purple-500 via-aether-cyan to-transparent opacity-80 animate-rotate-beam pointer-events-none" />
        
        <div className="relative z-10 rounded-[22px] bg-[#010103]/95 p-6 sm:p-8 backdrop-blur-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-zinc-400 font-bold">
                aether-os@cluster-controller:~# tail -f /var/log/spatial_routing.log
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30 font-bold">
              ● SYNC NOMINAL
            </span>
          </div>

          <div className="font-mono text-xs sm:text-sm space-y-2 max-h-[220px] overflow-y-auto pr-2 text-left">
            <AnimatePresence>
              {executionLogs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-2 ${
                    log.startsWith("✓")
                      ? "text-emerald-400 font-bold"
                      : log.startsWith(">")
                      ? "text-aether-cyan font-bold"
                      : "text-zinc-400"
                  }`}
                >
                  <span className="text-zinc-600 select-none">&gt;</span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </div>
  );
}
