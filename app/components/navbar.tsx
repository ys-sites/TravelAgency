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
  brandName1: { FR: "Merveilles", EN: "Merveilles" },
  brandName2: { FR: "et Voyages", EN: "et Voyages" },
};

export default function Navbar() {
  const { lang, setLang } = useLang();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 px-6 md:px-12 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group decoration-none">
          <img 
            src="/images/logo.png?v=3" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            alt="Merveilles et Voyages" 
          />
          <div className="flex flex-col text-white">
            <span className="font-serif text-sm sm:text-base uppercase tracking-[0.25em] font-bold leading-none">
              {translate(t.brandName1, lang)}
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#C5A880] font-semibold mt-1 leading-none">
              {translate(t.brandName2, lang)}
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-white/90 font-body text-xs xl:text-sm font-semibold tracking-wider uppercase">
          <Link href="/itineraries?type=Golf" className="hover:text-brand-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "Golf" : "Golf"}
          </Link>
          <Link href="/itineraries?type=Tours" className="hover:text-brand-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "Circuits" : "Tours"}
          </Link>
          <Link href="/mice" className="hover:text-brand-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "MICE" : "MICE"}
          </Link>
          <Link href="/#about" className="hover:text-brand-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "À Propos" : "About Us"}
          </Link>
          <Link href="/conditions" className="hover:text-brand-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "Conditions Générales" : "General Conditions"}
          </Link>
          <button
            onClick={() => {
              const el = document.getElementById("contact-form");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.location.href = "/#contact-form";
              }
            }}
            className="hover:text-brand-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full cursor-pointer"
          >
            {lang === "FR" ? "Contact" : "Contact"}
          </button>
        </div>

        {/* Language Toggle FR / EN */}
        <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/15">
          <button
            id="lang-fr"
            onClick={() => setLang("FR")}
            className={`flex h-7 items-center gap-1 rounded-full px-3 text-xs font-bold transition-all duration-300 cursor-pointer ${
              lang === "FR"
                ? "bg-[#C5A880] text-zinc-950 shadow-sm"
                : "text-white/70 hover:text-white"
            }`}
          >
            <span>FR</span>
            {lang === "FR" && <ChevronDown className="h-3 w-3 text-zinc-950" />}
          </button>
          <button
            id="lang-en"
            onClick={() => setLang("EN")}
            className={`flex h-7 items-center gap-1 rounded-full px-3 text-xs font-bold transition-all duration-300 cursor-pointer ${
              lang === "EN"
                ? "bg-[#C5A880] text-zinc-950 shadow-sm"
                : "text-white/70 hover:text-white"
            }`}
          >
            <span>EN</span>
            {lang === "EN" && <ChevronDown className="h-3 w-3 text-zinc-950" />}
          </button>
        </div>
      </div>
    </header>
  );
}
