"use client";

import React from "react";
import { Sparkles, ExternalLink } from "lucide-react";

// Custom Inline SVGs for 1000% Brand Precision
const LinkedinIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abhijeet-kangane/", icon: LinkedinIcon, color: "hover:border-blue-500/80 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]" },
    { name: "X (Twitter)", url: "https://x.com/abhijeet_037", icon: TwitterIcon, color: "hover:border-cyan-500/80 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]" },
    { name: "Instagram", url: "https://www.instagram.com/abhijeet.037/", icon: InstagramIcon, color: "hover:border-pink-500/80 hover:text-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]" },
    { name: "GitHub", url: "https://github.com/abhi666-max", icon: GithubIcon, color: "hover:border-purple-500/80 hover:text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]" },
  ];

  return (
    <footer className="w-full py-12 px-4 sm:px-8 relative z-20">
      <div className="mx-auto max-w-2xl">
        
        {/* Compact, Sleek, Minimalist Founder Box with Clockwise Moving Border Beam */}
        <div className="relative overflow-hidden rounded-3xl p-[1px] shadow-[0_15px_50px_rgba(0,0,0,0.8)] group">
          {/* Clockwise Rotating Beam */}
          <div className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-aether-cyan via-purple-500 via-pink-500 to-transparent opacity-100 animate-rotate-beam pointer-events-none" />
          
          <div className="relative z-10 rounded-[23px] bg-[#010103]/95 p-6 sm:p-8 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left: Founder Info */}
            <div className="flex items-center gap-4 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-aether-cyan via-purple-500 to-pink-500 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#010103]">
                  <Sparkles className="h-5 w-5 text-aether-cyan animate-spin" style={{ animationDuration: "10s" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-display font-extrabold text-white tracking-tight">
                    Abhijeet Kangane
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 font-bold uppercase">
                    Founder
                  </span>
                </div>
                <p className="text-xs font-body text-zinc-400 font-light mt-0.5">
                  Lead UI/UX Architect // AetherOS Enterprise
                </p>
              </div>
            </div>

            {/* Right: Sleek Minimal Social Media Buttons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    data-clickable="true"
                    className={`p-3 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${social.color}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
