import Navbar from "./components/navbar";
import GulfHeroScrubber from "./components/gulf-hero-scrubber";
import Tours from "./components/tours";
import Promotions from "./components/promotions";
import Footer from "./components/footer";

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
      </main>

      <Footer />
    </div>
  );
}

