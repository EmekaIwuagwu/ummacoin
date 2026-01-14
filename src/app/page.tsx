"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tokenomics from "@/components/sections/Tokenomics";
import Roadmap from "@/components/sections/Roadmap";
import HowToBuy from "@/components/sections/HowToBuy";
import Community from "@/components/sections/Community";
import FAQ from "@/components/sections/FAQ";
import HajjPopup from "@/components/sections/HajjPopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <Community />
      <FAQ />
      <Footer />
      <HajjPopup />
    </main>
  );
}
