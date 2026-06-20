'use client';

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang, translate } from "../context/lang-context";

const t = {
  portfolios: { FR: "Forfaits Golf", EN: "Golf Packages" },
  agadirGolf: { FR: "Golf Agadir", EN: "Agadir Golf" },
  marrakechGolf: { FR: "Golf Marrakech", EN: "Marrakech Golf" },
  mice:       { FR: "MICE", EN: "MICE" },
  itineraries:{ FR: "Itinéraires", EN: "Itineraries" },
  about:      { FR: "À Propos", EN: "About Us" },
  customTrip: { FR: "Voyage Sur Mesure", EN: "Custom Trip" },
  contacts:   { FR: "Contacts", EN: "Contacts" },
  brandName1: { FR: "Majestic", EN: "Majestic" },
  brandName2: { FR: "Experiences Voyages", EN: "Experiences Voyages" },
};

export default function Navbar() {
  const { lang, setLang } = useLang();

  return (
    <nav className="absolute top-0 left-1/2 z-50 w-[calc(100%-48px)] max-w-[1100px] -translate-x-1/2">
      <div className="glass-nav flex h-[54px] sm:h-[64px] md:h-[74px] items-center justify-between rounded-full px-8 py-0.5">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 cursor-pointer decoration-none group">
          <img 
            src="/images/logo.png" 
            className="h-[46px] sm:h-[56px] md:h-[66px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-90" 
            alt="Majestic Experiences Voyages" 
          />
          <div className="flex flex-col text-white">
            <span className="font-serif text-[12px] sm:text-[15px] md:text-[18px] uppercase tracking-[0.25em] font-bold leading-none">
              {translate(t.brandName1, lang)}
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.35em] text-white font-light mt-1.5 leading-none">
              {translate(t.brandName2, lang)}
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 font-body text-[13px] font-medium">
          <Link href="/#portfolios" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.portfolios, lang)}
          </Link>
  <Link href="/golf-itineraries/agadir" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.agadirGolf, lang)}
          </Link>
          <Link href="/golf-itineraries/marrakech" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.marrakechGolf, lang)}
          </Link>
          <Link href="/mice" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.mice, lang)}
          </Link>
          <Link href="/itineraries" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.itineraries, lang)}
          </Link>
          <Link href="/custom-trip" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.customTrip, lang)}
          </Link>
          <Link href="/#about" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.about, lang)}
          </Link>
          <Link href="/#contacts" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {translate(t.contacts, lang)}
          </Link>
        </div>

        {/* Language Toggle FR / EN */}
        <div className="flex items-center gap-2 bg-black/20 rounded-full p-1 border border-white/10">
          <button
            id="lang-fr"
            onClick={() => setLang("FR")}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold transition-colors duration-300 ${
              lang === "FR"
                ? "bg-brand-gold text-brand-black shadow-sm"
                : "text-white/60 hover:text-white cursor-pointer"
            }`}
          >
            FR
          </button>
          <button
            id="lang-en"
            onClick={() => setLang("EN")}
            className={`flex h-8 items-center gap-1 rounded-full px-4 text-[11px] font-bold transition-colors duration-300 ${
              lang === "EN"
                ? "bg-white text-brand-black shadow-sm"
                : "text-white/60 hover:text-white cursor-pointer"
            }`}
          >
            EN <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </nav>
  );
}

