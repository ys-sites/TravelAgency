'use client';

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { useLang, translate } from "../context/lang-context";

const t = {
  getKnow: {
    FR: "DÉCOUVREZ LE ROYAUME",
    EN: "GET TO KNOW THE KINGDOM"
  },
  title: {
    FR: "Merveilles du Maroc",
    EN: "Wonders of Morocco"
  },
  description: {
    FR: "Des souks animés de Marrakech aux dunes spectaculaires du Sahara en passant par les sommets enneigés de l'Atlas, vivez un dépaysement total.",
    EN: "From the bustling souks of Marrakech to the majestic Sahara dunes and the high Atlas peaks, experience a sensory immersion."
  },
  attractions: {
    FR: "itinéraires",
    EN: "itineraries"
  },
  similarDestinations: {
    FR: "voyage sur mesure",
    EN: "custom trips"
  },
  chooseTour: {
    FR: "EXPLORER",
    EN: "EXPLORE"
  }
};

export default function MapSection() {
  const { lang } = useLang();

  const locations = [
    { name: { FR: "Palais de Marrakech", EN: "Marrakech Palace" }, top: "65%", left: "32%" },
    { name: { FR: "Dunes du Sahara", EN: "Sahara Dunes" }, top: "78%", left: "75%" },
    { name: { FR: "Mont Toubkal (Atlas)", EN: "Mount Toubkal" }, top: "52%", left: "45%" },
    { name: { FR: "Aït-Ben-Haddou", EN: "Ait Benhaddou Kasbah" }, top: "45%", left: "58%" },
    { name: { FR: "Chefchaouen la Bleue", EN: "Chefchaouen Blue City" }, top: "18%", left: "62%" }
  ];

  return (
    <div className="relative max-w-[1200px] mx-auto my-20 px-8 py-16 rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-zinc-200/80 shadow-card-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-zinc-900">
      {/* Sepia landscape background mask */}
      <img
        src="/images/moroco.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
        alt="Map background"
      />

      {/* Left content description */}
      <div className="lg:col-span-5 flex flex-col items-start z-10">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-brand-gold">
          {translate(t.getKnow, lang)}
        </span>
        <h2 className="flex items-center gap-3 font-serif text-[42px] font-bold text-zinc-900 mt-2 leading-tight uppercase">
          <svg className="h-8 w-8 text-brand-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          {translate(t.title, lang)}
        </h2>
        <p className="text-[13px] leading-relaxed text-zinc-600 mt-6 max-w-[420px] font-light">
          {translate(t.description, lang)}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 mt-8 font-mono text-[11px] tracking-wider uppercase">
          <a href="/#portfolios" className="text-brand-gold hover:text-zinc-900 hover:underline transition-colors font-semibold">
            {translate(t.attractions, lang)} &rarr;
          </a>
          <a href="/custom-trip" className="text-brand-gold hover:text-zinc-900 hover:underline transition-colors font-semibold">
            {translate(t.similarDestinations, lang)} &rarr;
          </a>
        </div>

        {/* CTA Button */}
        <a href="/#portfolios" className="mt-8 rounded-full border border-brand-gold bg-brand-gold/10 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 px-8 py-3 text-[11px] font-bold uppercase tracking-wider text-zinc-800 transition-luxury cursor-pointer inline-block shadow-sm">
          {translate(t.chooseTour, lang)}
        </a>
      </div>

      {/* Right Map illustration */}
      <div className="lg:col-span-7 relative flex items-center justify-center z-10 min-h-[400px] w-full rounded-[2rem] border border-zinc-200 overflow-hidden shadow-inner">
        {/* Map image base */}
        <img
          src="/images/moroco.webp"
          className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-[1.05]"
          alt={translate(t.title, lang)}
        />

        {/* Interactive Location Pins */}
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}
            style={{ top: loc.top, left: loc.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-30"
          >
            {/* Interactive Pulse Pin */}
            <div className="relative flex h-6 w-6 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold/40 opacity-75"></span>
              <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-black border border-brand-gold cursor-pointer shadow-sm">
                <div className="h-1 w-1 rounded-full bg-brand-gold animate-pulse"></div>
              </div>
            </div>

            {/* Label box */}
            <span className="mt-1 bg-black/90 border border-white/10 text-white text-[9px] px-2 py-0.5 rounded shadow-md pointer-events-none group-hover:scale-105 transition-transform duration-300 font-heading font-medium tracking-wide">
              {translate(loc.name, lang)}
            </span>
          </motion.div>
        ))}

        {/* Slider dots pagination */}
        <div className="absolute bottom-4 left-6 flex items-center gap-1.5 z-20">
          <span className="h-2 w-2 rounded-full bg-brand-gold" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}

