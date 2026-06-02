import type { Metadata } from "next";
import Navbar from "./components/navbar";
import GulfHeroScrubber from "./components/gulf-hero-scrubber";
import Tours from "./components/tours";
import Promotions from "./components/promotions";
import AboutUsSection from "./components/about-us-section";
import MapSection from "./components/map-section";
import TestimonialsSection from "./components/testimonials-section";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Majestic Experiences Voyages — Ultra-Luxury Travel to Morocco & the Arabian Gulf",
  description: "Bespoke luxury travel concierge for Morocco and the Arabian Gulf. Private helicopter transfers, riad buyouts, desert glamping, and 24/7 bilingual service. Based in Canada.",
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
        <Promotions />
        <div id="portfolios">
          <Tours />
        </div>
        <AboutUsSection />
        <MapSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}

