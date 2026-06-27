import type { Metadata } from "next";
import Navbar from "./components/navbar";
import GulfHeroScrubber from "./components/gulf-hero-scrubber";
import Tours from "./components/tours";
import Promotions from "./components/promotions";
import AboutUsSection from "./components/about-us-section";
import TestimonialsSection from "./components/testimonials-section";
import DestinationsShowcase from "./components/destinations-showcase";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Majestic Experiences Voyages — Séjours de Golf & Voyage de Prestige au Maroc | Premium Golf & Exclusive Travel Morocco",
  description: "Explore premium golf experiences and exclusive luxury travel in Morocco with Majestic Experiences Voyages. 24/7 bilingual concierge services based in Canada.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      {/* Header & Navbar */}
      <Navbar />

      {/* Cinematic Scroll Hero Canvas Scrubber */}
      <GulfHeroScrubber />

      {/* Main Body content */}
      <main className="relative z-10 bg-white">
        <AboutUsSection />
        <DestinationsShowcase />
        <Promotions />
        <div id="portfolios">
          <Tours />
        </div>
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}

