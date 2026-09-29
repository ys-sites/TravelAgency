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
import { videoSources } from "@/data/videoSources";
import { homeFaqs } from "@/data/faqs";
import { SITE_NAME, pageMetadata } from "@/lib/seo";
import JsonLd from "./components/json-ld";

const HOME_TITLE = "Agence de Voyage Montréal — Golf au Maroc & Voyages de Prestige";

const homeSeo = pageMetadata({
  title: HOME_TITLE,
  description: "Agence de voyage du Grand Montréal : forfaits golf de prestige au Maroc, circuits impériaux, voyages de luxe sur mesure et MICE. Conciergerie bilingue 24/7.",
  path: "/",
  image: "/og/home.jpg",
});

// The layout's title template only applies to child segments, so the homepage sets its full title
export const metadata: Metadata = {
  ...homeSeo,
  title: { absolute: `${HOME_TITLE} | ${SITE_NAME}` },
};

// English copy matches what the FAQ section renders by default (LangProvider starts in EN)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q.EN,
    acceptedAnswer: { "@type": "Answer", text: faq.a.EN },
  })),
};

export default function Home() {
  // Kick off the hero poster fetch before hydration so the first paint isn't a blank/black frame
  preload(videoSources.hero.poster, { as: "image", fetchPriority: "high" });

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <JsonLd data={faqJsonLd} />
      <link
        rel="preload"
        as="image"
        href={videoSources.hero.poster}
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

