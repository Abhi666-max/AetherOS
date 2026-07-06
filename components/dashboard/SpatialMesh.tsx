"use client";

import React, { useState } from "react";
import { Network, RefreshCw, Activity, ShieldCheck, Cpu, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SpatialMesh() {
  const [selectedNode, setSelectedNode] = useState(0);
  const [isSurging, setIsSurging] = useState(false);
  const [surgeCount, setSurgeCount] = useState(1420);

  const nodes = [
    { id: 0, name: "US-East Hub (Virginia)", status: "ONLINE", vram: "84.2%", latency: "0.18ms", throughput: "4.2 TB/s", swarms: 2450, x: 220, y: 160 },
    { id: 1, name: "EU-Central Vault (Frankfurt)", status: "ONLINE", vram: "72.5%", latency: "0.24ms", throughput: "3.8 TB/s", swarms: 1890, x: 480, y: 130 },
    { id: 2, name: "APAC-South Matrix (Mumbai)", status: "ONLINE", vram: "91.0%", latency: "0.31ms", throughput: "5.1 TB/s", swarms: 3100, x: 720, y: 220 },
    { id: 3, name: "Orbital-1 Satellite Link (LEO)", status: "QUANTUM", vram: "45.1%", latency: "0.09ms", throughput: "1.2 TB/s", swarms: 640, x: 500, y: 50 },
    { id: 4, name: "LATAM Relay (São Paulo)", status: "ONLINE", vram: "61.8%", latency: "0.42ms", throughput: "2.1 TB/s", swarms: 1120, x: 300, y: 320 },
    { id: 5, name: "APAC-East Node (Tokyo)", status: "ONLINE", vram: "78.4%", latency: "0.22ms", throughput: "4.5 TB/s", swarms: 2200, x: 840, y: 160 },
  ];

  const connections = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 0, to: 3 }, { from: 1, to: 3 },
    { from: 2, to: 5 }, { from: 0, to: 4 }, { from: 1, to: 5 }, { from: 3, to: 5 },
  ];

  const handleSurge = () => {
    setIsSurging(true);
    setSurgeCount((prev) => prev + 500);
    setTimeout(() => setIsSurging(false), 2500);
  };

  return (
    <div className="space-y-12 pb-16 max-w-7xl mx-auto">
      
      {/* 1. Module Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/40 text-[11px] font-mono font-extrabold text-purple-400 uppercase tracking-wider">
            <Network className="h-3.5 w-3.5 animate-pulse" />
            <span>MODULE 02 // SPATIAL TOPOLOGY MESH</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white">
            Spatial <span className="bg-gradient-to-r from-purple-400 via-aether-cyan to-pink-500 bg-clip-text text-transparent">Mesh</span>
          </h1>
          <p className="text-sm md:text-base font-body text-zinc-400 font-light max-w-2xl leading-relaxed">
            Real-time interactive SVG node map visualizing global neural cluster topology, VRAM saturation, and autonomous quantum routing transmissions.
          </p>
        </div>

        {/* SCI-FI TACTICAL SURGE BUTTON (Clean minimal, no cheap glow box) */}
        <button
          onClick={handleSurge}
          disabled={isSurging}
          data-clickable="true"
          className="px-7 py-4 rounded-[14px] bg-gradient-to-r from-purple-600 via-aether-cyan to-pink-600 hover:opacity-95 transition-all flex items-center gap-3 text-white font-display text-xs font-extrabold tracking-widest uppercase shadow-md"
        >
          <RefreshCw className={`h-4 w-4 text-white ${isSurging ? "animate-spin" : ""}`} />
          <span>{isSurging ? "TRANSMITTING SURGE..." : "SIMULATE QUANTUM SURGE ⚡"}</span>
        </button>
      </div>

      {/* 2. Interactive SVG Map & Telemetry Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Col 1 & 2: SVG Interactive Node Topology Map (Reverted: Clean minimal glassmorphism without cheap glows or rotating beams) */}
        <div className="lg:col-span-2 rounded-[24px] bg-[#05050a]/80 border border-white/10 hover:border-white/20 p-6 sm:p-8 overflow-hidden min-h-[460px] flex flex-col justify-between h-full backdrop-blur-xl transition-all duration-300 shadow-sm cursor-pointer group">
          <div className="absolute top-4 left-6 z-10 flex items-center gap-3 text-xs font-mono text-zinc-400 bg-[#010103]/90 px-4 py-2 rounded-xl border border-white/15 backdrop-blur-md shadow-lg">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>GLOBAL TOPOLOGY MATRIX // 6 HOPS ACTIVE</span>
          </div>

          {/* SVG Viewport */}
          <div className="relative w-full h-[360px] my-auto flex items-center justify-center">
            <svg viewBox="0 0 1000 400" className="w-full h-full max-h-[380px] overflow-visible select-none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connection Lines */}
              {connections.map((conn, idx) => {
                const fromNode = nodes[conn.from];
                const toNode = nodes[conn.to];
                return (
                  <g key={idx}>
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="url(#lineGrad)"
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                      className="transition-all duration-500"
                    />
                    {/* Animated Data Packets */}
                    <circle r="4.5" fill="#06b6d4" filter="url(#glow)">
                      <animateMotion
                        path={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                        dur={`${2 + (idx % 3)}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    {isSurging && (
                      <circle r="6" fill="#ec4899" filter="url(#glow)">
                        <animateMotion
                          path={`M ${toNode.x} ${toNode.y} L ${fromNode.x} ${fromNode.y}`}
                          dur="0.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className="cursor-pointer group/node"
                    data-clickable="true"
                  >
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="32"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                        className="animate-spin"
                        style={{ transformOrigin: `${node.x}px ${node.y}px`, animationDuration: "8s" }}
                      />
                    )}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="18"
                      fill={isSelected ? "#06b6d4" : "#18181b"}
                      stroke={isSelected ? "#fff" : "#a855f7"}
                      strokeWidth="3.5"
                      filter="url(#glow)"
                      className="transition-all duration-300 group-hover/node:scale-125"
                    />
                    <text
                      x={node.x}
                      y={node.y + 38}
                      textAnchor="middle"
                      fill={isSelected ? "#06b6d4" : "#f4f4f5"}
                      fontSize="13"
                      fontFamily="monospace"
                      fontWeight="bold"
                      className="tracking-wider select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                    >
                      {node.name.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-4 border-t border-white/10">
            <span>CLICK ANY NODE TO INSPECT LIVE TELEMETRY</span>
            <span className="text-aether-cyan font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-aether-cyan animate-pulse" />
              <span>TOTAL SURGE PACKETS: {surgeCount}</span>
            </span>
          </div>
        </div>

        {/* Col 3: Selected Node Deep Inspection Card (Reverted: Clean minimal glassmorphism without cheap glows or rotating beams) */}
        <div className="rounded-[24px] bg-[#05050a]/80 border border-white/10 hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between space-y-6 h-full backdrop-blur-xl transition-all duration-300 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-aether-cyan uppercase font-bold tracking-widest">
                NODE TELEMETRY INSPECTOR
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 font-bold shadow-sm">
                {nodes[selectedNode].status}
              </span>
            </div>

            <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
              {nodes[selectedNode].name}
            </h3>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span>VRAM Saturation</span>
                  <span className="text-white font-bold">{nodes[selectedNode].vram}</span>
                </div>
                <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-aether-cyan via-purple-500 to-pink-500 h-full w-4/5 rounded-full shadow-[0_0_10px_#06b6d4]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Latency</span>
                  <div className="text-xl font-mono font-extrabold text-aether-cyan">{nodes[selectedNode].latency}</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Throughput</span>
                  <div className="text-xl font-mono font-extrabold text-purple-400">{nodes[selectedNode].throughput}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <span className="text-xs font-body text-zinc-400 font-bold">Allocated Agent Swarms</span>
                <span className="text-lg font-mono font-extrabold text-emerald-400">{nodes[selectedNode].swarms} Units</span>
              </div>
            </div>
          </div>

          {/* RECALIBRATE BUTTON (Clean minimal, no cheap glow box) */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={handleSurge}
              data-clickable="true"
              className="w-full py-4 px-6 rounded-[14px] bg-gradient-to-r from-aether-cyan via-purple-600 to-pink-600 hover:opacity-95 transition-opacity flex items-center justify-center gap-3 text-white font-display text-xs font-extrabold uppercase tracking-widest shadow-md"
            >
              <Zap className="h-4 w-4 text-white fill-current animate-pulse" />
              <span>RECALIBRATE NODE WEIGHTS ⚡</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
