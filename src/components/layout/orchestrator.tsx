"use client";
import { Navbar } from "@/components/molecules/navbar";
import { Footer } from "@/components/molecules/footer";

export function Orchestrator({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
