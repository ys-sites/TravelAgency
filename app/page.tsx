import type { Metadata } from "next";
import { preload } from "react-dom";
import Navbar from "./components/navbar";
import GulfHeroScrubber from "./components/gulf-hero-scrubber";
import Tours from "./components/tours";
import Promotions from "./components/promotions";
import AboutUsSection from "./components/about-us-section";
import TestimonialsSection from "./components/testimonials-section";
import Footer from "./components/footer";
import HomeFaqSection from "./components/home-faq-section";
import HomeContactForm from "./components/home-contact-form";
import { videoAsset } from "@/data/videoSources";

export const metadata: Metadata = {
  title: "Agence de Voyage Montréal — Golf au Maroc & Voyages de Prestige | Merveilles et Voyages",
  description: "Agence de voyage à Mirabel au service du Grand Montréal : forfaits golf au Maroc, voyages de luxe sur mesure (Dubaï, Oman, AlUla) et services MICE. Conciergerie bilingue 24/7. ✆ 514 919 6381",
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
        <HomeContactForm />
        <HomeFaqSection />
      </main>

      <Footer />
    </div>
  );
}

