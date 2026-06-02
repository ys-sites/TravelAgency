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
      <div className="glass-nav flex h-[64px] items-center justify-between rounded-full px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-white font-heading font-semibold text-[16px] tracking-wider cursor-pointer decoration-none">
          <img src="/images/logo.png" className="h-7 w-auto object-contain brightness-0 invert" alt="logo" />
          <span className="font-serif tracking-[0.1em] text-xs uppercase sm:text-sm">Majestic Experiences <span className="text-brand-gold">Voyages</span></span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 font-body text-[13px] font-medium">
          <a href="/#portfolios" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full">
            {t.portfolios[lang]}
          </a>
          <Link href="/itineraries" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full">
            {t.itineraries[lang]}
          </Link>
          <Link href="/custom-trip" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full">
            {t.customTrip[lang]}
          </Link>
          <a href="/#about" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full">
            {t.about[lang]}
          </a>
          <a href="/#contacts" className="hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full">
            {t.contacts[lang]}
          </a>
        </div>

        {/* Language Toggle FR / EN */}
        <div className="flex items-center gap-2 bg-black/20 rounded-full p-1 border border-white/10">
          <button
            id="lang-fr"
            onClick={() => setLang("FR")}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 ${
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
            className={`flex h-8 items-center gap-1 rounded-full px-4 text-[11px] font-bold transition-all duration-300 ${
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

