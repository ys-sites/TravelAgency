import type { Metadata } from "next";
import { preload } from "react-dom";
import Navbar from "./components/navbar";
import GulfHeroScrubber from "./components/gulf-hero-scrubber";
import Tours from "./components/tours";
import Promotions from "./components/promotions";
import AboutUsSection from "./components/about-us-section";
import TestimonialsSection from "./components/testimonials-section";
import Footer from "./components/footer";
import { videoAsset } from "@/data/videoSources";

export const metadata: Metadata = {
  title: "Merveilles et Voyages — Séjours de Golf & Voyage de Prestige au Maroc | Premium Golf & Exclusive Travel Morocco",
  description: "Explore premium golf experiences and exclusive luxury travel in Morocco with Merveilles et Voyages. 24/7 bilingual concierge services based in Canada.",
};

export default function Home() {
  // Kick off the hero poster fetch before hydration so the first paint isn't a blank/black frame
  preload(videoAsset("Golf_in_Morocco_ssfati").poster, { as: "image", fetchPriority: "high" });

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <link
        rel="preload"
        as="image"
        href="https://cdn.mevoyages.com/MEvoyages/Golf_in_Morocco_ssfati.jpg"
        // @ts-ignore
        fetchPriority="high"
      />
      {/* Header & Navbar */}
      <Navbar />

      {/* Cinematic Scroll Hero Canvas Scrubber */}
      <GulfHeroScrubber />

      {/* Main Body content */}
      <main className="relative z-10 bg-white">
        <AboutUsSection />
        <Promotions />
        <div id="portfolios">
          <Tours />
        </div>
        {/* <TestimonialsSection /> */}{/* Hidden: re-enable when client confirms testimonials copy */}
      </main>

      <Footer />
    </div>
  );
}

