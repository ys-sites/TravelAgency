'use client';

import Link from "next/link";
import { useLang } from "../context/lang-context";

const t = {
  statement: {
    FR: "Votre voyage est votre signature. Rendez-le majestueux.",
    EN: "Your journey is your signature. Make it majestic."
  },
  copyright: {
    FR: "© 2026 Majestic Experiences Voyages Concierge. Tous droits réservés.",
    EN: "© 2026 Majestic Experiences Voyages Concierge. All rights reserved."
  },
  privacy: {
    FR: "Confidentialité",
    EN: "Privacy signoff"
  },
  escrowTerms: {
    FR: "Conditions de Dépôt Escrow",
    EN: "Security Escrow Terms"
  }
};

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-16 relative overflow-hidden select-none" id="contacts">
      <div className="max-w-[1200px] mx-auto px-6 space-y-16">
        
        {/* Large Brand Statement (Ft5 Statement Style) */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-brand-gold font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase block">
            {lang === "FR" ? "PASSAGE SOUVERAIN" : "SOVEREIGN PASSAGE"}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-light">
            {t.statement[lang]}
          </h2>
        </div>

        {/* Inline Navigation Links (Ft2 Style Hybrid) */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/50 pt-8 border-t border-white/5">
          <a href="/#portfolios" className="hover:text-brand-gold transition-colors duration-300">
            {lang === "FR" ? "Destinations" : "Destinations"}
          </a>
          <Link href="/itineraries" className="hover:text-brand-gold transition-colors duration-300">
            {lang === "FR" ? "Itinéraires" : "Itineraries"}
          </Link>
          <Link href="/custom-trip" className="hover:text-brand-gold transition-colors duration-300">
            {lang === "FR" ? "Voyage Sur Mesure" : "Custom Trip"}
          </Link>
          <a href="/#about" className="hover:text-brand-gold transition-colors duration-300">
            {lang === "FR" ? "À Propos" : "About Us"}
          </a>
          <a href="/#contacts" className="hover:text-brand-gold transition-colors duration-300">
            {lang === "FR" ? "Contacts" : "Contacts"}
          </a>
        </div>

        {/* Contact Monospace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] font-mono text-white/50 tracking-wider pt-4">
          <div className="space-y-2">
            <span className="text-white/30 uppercase text-[9px] block tracking-[0.2em]">{lang === "FR" ? "LIGNE DIRECTE" : "DIRECT LINE"}</span>
            <span className="text-white/80 block hover:text-brand-gold transition-colors duration-300">+212 524 456 789</span>
          </div>
          <div className="space-y-2">
            <span className="text-white/30 uppercase text-[9px] block tracking-[0.2em]">{lang === "FR" ? "CANAL CHIFFRÉ" : "ENCRYPTED CHANNEL"}</span>
            <span className="text-white/80 block hover:text-brand-gold transition-colors duration-300">concierge@majesticexperiences.ca</span>
          </div>
          <div className="space-y-2">
            <span className="text-white/30 uppercase text-[9px] block tracking-[0.2em]">{lang === "FR" ? "RÉSIDENCE CONCIERGE" : "CONCIERGE SANCTUM"}</span>
            <span className="text-white/80 block leading-relaxed">Rue du Temple, Hivernage, Marrakech 40000, Maroc</span>
          </div>
        </div>

        {/* Copyright & Meta Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-[11px] text-white/30">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src="/images/logo.png" className="h-6 w-auto object-contain brightness-0 invert" alt="logo" />
            <span className="font-serif uppercase tracking-[0.1em] text-xs">
              Majestic Experiences <span className="text-brand-gold">Voyages</span>
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-right">
            <span>{t.copyright[lang]}</span>
            <div className="flex items-center gap-4 font-light">
              <a href="#" className="hover:text-brand-gold transition-colors duration-300">{t.privacy[lang]}</a>
              <a href="#" className="hover:text-brand-gold transition-colors duration-300">{t.escrowTerms[lang]}</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
