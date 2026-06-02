'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { useLang } from "../context/lang-context";

const t = {
  heading: {
    EN: "Who We Are",
    FR: "Qui Sommes-Nous"
  },
  subheading: {
    EN: "A boutique concierge born from a passion for the Arab world and its hospitality.",
    FR: "Un concierge boutique né d'une passion pour le monde arabe et son hospitalité."
  },
  paragraph1: {
    EN: "Majestic Experiences Voyages was founded by travellers who believed that true luxury is not about opulence alone — it is about meaning, privacy, and connection. We specialize exclusively in the Arabian Gulf and Morocco because we know these destinations deeply: their hidden riads, their desert silences, their royal traditions of hospitality.",
    FR: "Majestic Experiences Voyages a été fondée par des voyageurs qui croyaient que le vrai luxe n'est pas seulement une opulence — c'est une question de sens, de confidentialité et de connexion. Nous nous spécialisons exclusivement dans le Golfe Arabique et le Maroc car nous connaissons profondément ces destinations : leurs riads cachés, leurs silences désertiques, leurs traditions royales d'hospitalité."
  },
  paragraph2: {
    EN: "Every journey we design is entirely bespoke. We handle nothing in volume. Our team is bilingual, available 24/7, and works with a curated network of private properties, aviation partners, and local guides that are never available through conventional booking platforms.",
    FR: "Chaque voyage que nous concevons est entièrement sur mesure. Nous ne traitons rien en volume. Notre équipe est bilingue, disponible 24h/24 et 7j/7, et travaille avec un réseau soigneusement sélectionné de propriétés privées, de partenaires aériens et de guides locaux qui ne sont jamais disponibles par les plateformes de réservation conventionnelles."
  },
  credential1Label: {
    EN: "15+",
    FR: "15+"
  },
  credential1Desc: {
    EN: "Years of combined regional expertise",
    FR: "Années d'expertise régionale combinée"
  },
  credential2Label: {
    EN: "100%",
    FR: "100%"
  },
  credential2Desc: {
    EN: "Private, tailor-made itineraries — no group tours, ever",
    FR: "Itinéraires privés et sur mesure — jamais de voyages en groupe"
  },
  credential3Label: {
    EN: "24/7",
    FR: "24h/24"
  },
  credential3Desc: {
    EN: "Bilingual concierge — FR & EN, always reachable",
    FR: "Concierge bilingue — FR & EN, toujours joignable"
  },
  cta: {
    EN: "Begin Your Consultation →",
    FR: "Commencez Votre Consultation →"
  }
};

export default function AboutUsSection() {
  const { lang } = useLang();

  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Grid: Left column (story) + Right column (credentials) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                {t.heading[lang]}
              </h2>
              <p className="text-brand-gold font-serif italic text-[18px]">
                {t.subheading[lang]}
              </p>
            </div>

            <div className="space-y-4 text-zinc-600 leading-relaxed font-light">
              <p className="text-[16px]">
                {t.paragraph1[lang]}
              </p>
              <p className="text-[16px]">
                {t.paragraph2[lang]}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Credential Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Credential Card 1 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
                {t.credential1Label[lang]}
              </div>
              <p className="text-zinc-700 font-light text-[15px]">
                {t.credential1Desc[lang]}
              </p>
            </div>

            {/* Credential Card 2 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
                {t.credential2Label[lang]}
              </div>
              <p className="text-zinc-700 font-light text-[15px]">
                {t.credential2Desc[lang]}
              </p>
            </div>

            {/* Credential Card 3 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
                {t.credential3Label[lang]}
              </div>
              <p className="text-zinc-700 font-light text-[15px]">
                {t.credential3Desc[lang]}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/custom-trip"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-luxury shadow-md cursor-pointer hover:-translate-y-0.5"
          >
            {t.cta[lang]}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
