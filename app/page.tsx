"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/landing/LandingPage";
import CommandDeck from "@/components/dashboard/CommandDeck";
import SpatialMesh from "@/components/dashboard/SpatialMesh";
import SwarmManager from "@/components/dashboard/SwarmManager";
import QuantumAnalytics from "@/components/dashboard/QuantumAnalytics";
import SpatialBackground from "@/components/ui/SpatialBackground";

export default function Home() {
  const [currentView, setCurrentView] = useState<"landing" | "dashboard">("landing");
  const [activeTab, setActiveTab] = useState<string>("command");

  return (
    <div className="min-h-screen flex flex-col bg-[#010103] text-[#f4f4f5] relative selection:bg-aether-cyan/30 selection:text-white overflow-x-hidden">
      
      {/* Dynamic Dual Spatial Background: Deep Space Nebula vs Cybernetic Laser Grid */}
      <SpatialBackground currentView={currentView} />

      {/* Sleek Header Navigation */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Viewport */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 relative z-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentView === "landing" ? (
            <motion.div
              key="landing-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col justify-center"
            >
              <LandingPage onLaunch={() => setCurrentView("dashboard")} />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 pt-4"
            >
              {activeTab === "command" && <CommandDeck />}
              {activeTab === "mesh" && <SpatialMesh />}
              {activeTab === "swarms" && <SwarmManager />}
              {activeTab === "analytics" && <QuantumAnalytics />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer ONLY Renders on Landing Page! No Footer on Dashboard! */}
      {currentView === "landing" && <Footer />}
      
    </div>
  );
}
