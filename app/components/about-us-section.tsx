'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { useLang, translate } from "../context/lang-context";

const t = {
  heading: {
    EN: "Our Mission",
    FR: "Notre Mission"
  },
  subheading: {
    EN: "Morocco Specialists & Passionate Golfers",
    FR: "Spécialistes du Maroc & Golfeurs Passionnés"
  },
  paragraph1: {
    EN: "At Majestic Experiences Voyages, we specialize exclusively in Morocco. Because we focus on a single destination, we know it more deeply than anyone else—from its most prestigious royal golf courses to its finest hidden gems. As passionate golfers ourselves, we understand exactly what players expect: perfect tee times, seamless logistics, and exceptional service on and off the course.",
    FR: "Chez Majestic Experiences Voyages, nous nous spécialisons exclusivement au Maroc. En nous concentrant sur une seule destination, nous la connaissons plus profondément que quiconque—de ses parcours de golf royaux les plus prestigieux à ses joyaux cachés. En tant que golfeurs passionnés, nous comprenons exactement ce que les joueurs attendent : des départs parfaits, une logistique fluide et un service exceptionnel sur le parcours et en dehors."
  },
  paragraph2: {
    EN: "Driven by our deep knowledge of Morocco and our commitment to excellence, we accompany you throughout your journey with personalized guidance and local expertise. We take you beyond the guidebooks, beyond the landmarks, and beyond expectations. From breathtaking landscapes to authentic cultural encounters, our goal is not simply to show you Morocco—it is to make you feel it, live it, and return home forever changed.",
    FR: "Guidés par notre connaissance approfondie du Maroc et notre engagement envers l'excellence, nous vous accompagnons tout au long de votre voyage avec des conseils personnalisés et une expertise locale. Nous vous emmenons au-delà des guides, au-delà des monuments et au-delà des attentes. Des paysages à couper le souffle aux rencontres culturelles authentiques, notre but n'est pas seulement de vous faire découvrir le Maroc—c'est de vous le faire ressentir, vivre et de vous faire revenir transformé à jamais."
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
    EN: "Elite",
    FR: "Élite"
  },
  credential2Desc: {
    EN: "Curated golf packages designed and played by golfers",
    FR: "Séjours de golf conçus et joués par des golfeurs"
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
    EN: "Explore Our Packages →",
    FR: "Explorer Nos Forfaits →"
  }
};

export default function AboutUsSection() {
  const { lang } = useLang();

  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* Main Grid: Left column (story) + Right column (explainer video slot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                {translate(t.heading, lang)}
              </h2>
              <p className="text-brand-gold font-serif italic text-[18px]">
                {translate(t.subheading, lang)}
              </p>
            </div>

            <div className="space-y-4 text-zinc-600 leading-relaxed font-light">
              <p className="text-[16px]">
                {translate(t.paragraph1, lang)}
              </p>
              <p className="text-[16px]">
                {translate(t.paragraph2, lang)}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/itineraries"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-luxury shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                {translate(t.cta, lang)}
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Explainer Video Slot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-200/80 bg-zinc-950 flex items-center justify-center group shadow-md animate-pulse hover:animate-none">
              {/* Overlay with play button */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 transition-colors duration-300 group-hover:bg-black/55">
                <div className="h-16 w-16 rounded-full bg-white/95 text-zinc-900 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white text-xs font-mono tracking-[0.25em] uppercase mt-4 select-none opacity-80 group-hover:opacity-100 transition-opacity">
                  {lang === "FR" ? "Vidéo Explicative (Bientôt)" : "Explainer Video (Coming Soon)"}
                </span>
              </div>
              
              {/* Placeholder Background Image */}
              <img 
                src="/images/tgz_course_hotel.jpg" 
                alt="Explainer Video Placeholder" 
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Real iframe placeholder ready for client URL */}
              {/* 
                // TODO: Replace src with the animated/illustrated explainer video link provided by client
                <iframe
                  src="YOUR_ANIMATED_EXPLAINER_VIDEO_URL_HERE"
                  className="absolute inset-0 w-full h-full border-none hidden"
                  allow="autoplay; fullscreen; encrypted-media"
                />
              */}
            </div>
          </motion.div>
        </div>

        {/* Credentials Row below: 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-zinc-100"
        >
          {/* Credential Card 1 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
              {translate(t.credential1Label, lang)}
            </div>
            <p className="text-zinc-700 font-light text-[15px]">
              {translate(t.credential1Desc, lang)}
            </p>
          </div>

          {/* Credential Card 2 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
              {translate(t.credential2Label, lang)}
            </div>
            <p className="text-zinc-700 font-light text-[15px]">
              {translate(t.credential2Desc, lang)}
            </p>
          </div>

          {/* Credential Card 3 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
              {translate(t.credential3Label, lang)}
            </div>
            <p className="text-zinc-700 font-light text-[15px]">
              {translate(t.credential3Desc, lang)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
