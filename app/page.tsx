import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SearchBar from "./components/search-bar";
import Tours from "./components/tours";
import Stats from "./components/stats";
import MapSection from "./components/map-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-wonderland-brown font-body antialiased">
      {/* Upper Wrapper */}
      <div className="relative mx-auto max-w-[1440px] px-4 pt-4">
        <div className="relative overflow-visible rounded-[2.5rem] bg-wonderland-cream pb-12 md:pb-0">
          <Navbar />
          <Hero />
          {/* Overlapping SearchBar */}
          <div className="absolute left-1/2 bottom-0 w-[calc(100%-32px)] max-w-[1000px] -translate-x-1/2 translate-y-1/2 z-30">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Main Body content */}
      <main className="mt-24">
        <Tours />
        <Stats />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}
