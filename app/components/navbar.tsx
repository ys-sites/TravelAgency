'use client';

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang } from "../context/lang-context";

const t = {
  portfolios: { FR: "Portefeuilles", EN: "Portfolios" },
  itineraries:{ FR: "Itinéraires", EN: "Itinéraires" },
  about:      { FR: "À Propos", EN: "About Us" },
  customTrip: { FR: "Voyage Sur Mesure", EN: "Custom Trip" },
  contacts:   { FR: "Contacts", EN: "Contacts" },
};

export default function Navbar() {
  const { lang, setLang } = useLang();

  return (
    <nav className="absolute top-6 left-1/2 z-50 w-[calc(100%-48px)] max-w-[1100px] -translate-x-1/2">
      <div className="glass-nav flex h-[100px] md:h-[118px] items-center justify-between rounded-full px-8 py-3">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 cursor-pointer decoration-none group">
          <img 
            src="/images/logo.png" 
            className="h-[72px] sm:h-[86px] md:h-[98px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-90" 
            alt="Majestic Experiences Voyages" 
          />
          <div className="flex flex-col text-white">
            <span className="font-serif text-[12px] sm:text-[15px] md:text-[18px] uppercase tracking-[0.25em] font-bold leading-none">
              Majestic
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.35em] text-white font-light mt-1.5 leading-none">
              Experiences Voyages
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 font-body text-[13px] font-medium">
          <a href="/#portfolios" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {t.portfolios[lang]}
          </a>
          <Link href="/itineraries" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {t.itineraries[lang]}
          </Link>
          <Link href="/custom-trip" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {t.customTrip[lang]}
          </Link>
          <a href="/#about" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {t.about[lang]}
          </a>
          <a href="/#contacts" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {t.contacts[lang]}
          </a>
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

