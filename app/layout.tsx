import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SpatialBackground from "@/components/ui/SpatialBackground";

export const metadata: Metadata = {
  title: "AetherOS — Autonomous AI Command Grid",
  description: "A spatial, intent-driven, zero-latency B2B AI Command Center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="font-sans bg-[#020205] text-[#f4f4f5] antialiased tracking-tight md:cursor-none min-h-screen overflow-x-hidden selection:bg-aether-cyan/20 selection:text-aether-cyan"
      >
        <SpatialBackground />
        <CustomCursor />
        <div className="relative min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
