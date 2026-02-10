// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import LiveDemoSection from "../components/landing/LiveDemoSection";
import PricingSection from "../components/landing/PricingSection";
import Advantage from "../components/landing/Advantage";
import OrganizeTasksSection from "../components/landing/OrganizeTasksSection";
import Footer from "../components/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>

      <section id="features" className="scroll-mt-24">
        <FeaturesSection />
      </section>

      <section id="demo" className="scroll-mt-24">
        <LiveDemoSection />
      </section>

      <section id="pricing" className="scroll-mt-24">
        <PricingSection />
      </section>

      <OrganizeTasksSection />
      <Advantage />
      
      <Footer />
    </div>
  );
}