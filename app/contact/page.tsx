import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeContactForm from "../components/home-contact-form";

export const metadata: Metadata = {
  title: "Contact — Merveilles et Voyages | Agence de Voyage Maroc Montréal",
  description: "Contactez notre équipe pour planifier votre voyage sur mesure au Maroc. Forfaits golf, circuits culturels, MICE. Réponse sous 24h. +1 514 919 6381",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      {/* Dark header band — same pattern as heritage page */}
      <div className="relative bg-[#1C1A17]" style={{ height: "76px" }}>
        <Navbar />
      </div>

      <main>
        <HomeContactForm />
      </main>

      <Footer />
    </div>
  );
}
