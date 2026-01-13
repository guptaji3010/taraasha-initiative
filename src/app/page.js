"use client";
import NewsBar from "@/components/layout/NewsBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import InitiativesOverview from "@/components/sections/InitiativesOverview";
import Impact from "@/components/sections/Impact";
import ChildrenGallery from "@/components/sections/ChildrenGallery";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <NewsBar />
      <InitiativesOverview />
      <ChildrenGallery />
      <Impact />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
