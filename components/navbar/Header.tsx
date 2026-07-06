"use client";

import React from "react";
import { Terminal, Network, Cpu, BarChart3, ArrowRight, Sparkles, Orbit } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  currentView: "landing" | "dashboard";
  setCurrentView: (view: "landing" | "dashboard") => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ currentView, setCurrentView, activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: "command", label: "Command Deck", icon: Terminal },
    { id: "mesh", label: "Spatial Mesh", icon: Network },
    { id: "swarms", label: "Swarm Manager", icon: Cpu },
    { id: "analytics", label: "Quantum Analytics", icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#010103]/80 backdrop-blur-2xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-8">
        
        {/* Left: Brand Logo & Title */}
        <div
          onClick={() => setCurrentView("landing")}
          data-clickable="true"
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aether-cyan via-purple-500 to-pink-500 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform">
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#010103]">
              <Orbit className="h-5 w-5 text-aether-cyan animate-spin" style={{ animationDuration: "12s" }} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-display text-lg font-extrabold tracking-tight text-white">
              <span>Aether<span className="bg-gradient-to-r from-aether-cyan to-purple-400 bg-clip-text text-transparent">OS</span></span>
              <span className="rounded bg-aether-cyan/10 px-1.5 py-0.5 text-[9px] font-mono font-extrabold text-aether-cyan border border-aether-cyan/30">
                v4.2 PRO
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
              Autonomous AI Command Grid
            </span>
          </div>
        </div>

        {/* Center: Vercel / Linear Tier Tab Switcher (ONLY IN DASHBOARD) */}
        {currentView === "dashboard" && (
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.04] p-1.5 border border-white/10 shadow-inner backdrop-blur-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-clickable="true"
                  className={`relative flex items-center gap-2 rounded-full px-5 py-2 font-heading text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-aether-cyan/30 via-purple-500/30 to-pink-500/30 border border-aether-cyan/50 -z-10" />
                  )}
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-aether-cyan animate-pulse" : "text-zinc-500"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right: Action Buttons & Competition Presentation Deck Link */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Competition 6-Slide Widescreen Presentation Link */}
          <Link
            href="/presentation"
            data-clickable="true"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-aether-cyan/15 hover:from-pink-500/30 hover:to-aether-cyan/30 border border-pink-500/40 text-xs font-mono font-extrabold text-white transition-all shadow-[0_0_15px_rgba(236,72,153,0.25)] hover:scale-105 active:scale-95"
            title="View 6-Slide Competition Presentation Deck"
          >
            <BarChart3 className="h-3.5 w-3.5 text-pink-400 animate-pulse" />
            <span className="hidden sm:inline">📊 VIEW 6-SLIDE DECK (PDF)</span>
            <span className="sm:hidden">📊 DECK</span>
          </Link>

          {currentView === "landing" ? (
            /* UPGRADED TOP-RIGHT HEADER BUTTON WITH CONTINUOUS CLOCKWISE MOVING BORDER BEAM */
            <div
              onClick={() => setCurrentView("dashboard")}
              data-clickable="true"
              className="relative overflow-hidden rounded-full p-[2px] shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 via-pink-500 to-transparent animate-rotate-beam-fast pointer-events-none" />
              
              <button className="relative z-10 px-5 sm:px-7 py-2.5 rounded-full bg-[#010103] flex items-center gap-2 font-heading text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-aether-cyan animate-spin" style={{ animationDuration: "8s" }} />
                <span className="bg-gradient-to-r from-white via-aether-cyan to-white bg-clip-text text-transparent">
                  Enter Grid
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-purple-400 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-bold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>GRID ONLINE</span>
              </span>
              <button
                onClick={() => setCurrentView("landing")}
                data-clickable="true"
                className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                Exit Grid
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Mobile Tab Switcher */}
      {currentView === "dashboard" && (
        <div className="flex md:hidden items-center justify-around border-t border-white/10 bg-[#010103] py-2 px-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                data-clickable="true"
                className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-heading font-bold transition-all ${
                  isActive ? "text-aether-cyan bg-white/[0.05]" : "text-zinc-400"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
