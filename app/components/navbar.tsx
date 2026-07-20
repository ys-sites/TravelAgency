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
    <nav className="absolute top-0 left-1/2 z-50 w-[calc(100%-48px)] max-w-[1200px] -translate-x-1/2">
      <div className="glass-nav flex h-[48px] sm:h-[56px] md:h-[62px] items-center justify-between rounded-full px-6 py-0.5">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center gap-2 lg:gap-2.5 xl:gap-3 cursor-pointer decoration-none group">
          <img 
            src="/images/logo.png?v=3" 
            className="h-[38px] sm:h-[44px] lg:h-[44px] xl:h-[48px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-90" 
            alt="Merveilles et Voyages" 
          />
          <div className="flex flex-col text-white">
            <span className="font-serif text-[10px] sm:text-[13px] lg:text-[12px] xl:text-[14px] uppercase tracking-[0.25em] font-bold leading-none">
              {translate(t.brandName1, lang)}
            </span>
            <span className="font-sans text-[7px] sm:text-[8px] lg:text-[8px] xl:text-[9px] uppercase tracking-[0.35em] text-white/95 font-semibold mt-1 lg:mt-1.5 leading-none">
              {translate(t.brandName2, lang)}
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-white/90 font-body text-[11px] xl:text-[13px] font-semibold tracking-wider uppercase">
          <Link href="/itineraries?type=Golf" className="whitespace-nowrap hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "Golf" : "Golf"}
          </Link>
          <Link href="/itineraries?type=Tours" className="whitespace-nowrap hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "Circuits" : "Tours"}
          </Link>
          <Link href="/mice" className="whitespace-nowrap hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "MICE" : "MICE"}
          </Link>
          <Link href="/#about" className="whitespace-nowrap hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
            {lang === "FR" ? "À Propos" : "About Us"}
          </Link>
          <Link href="/conditions" className="whitespace-nowrap hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full">
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
            className="whitespace-nowrap hover:text-brand-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-[width] after:duration-300 hover:after:w-full cursor-pointer"
          >
            {lang === "FR" ? "Contact" : "Contact"}
          </button>
        </div>

        {/* Language Toggle FR / EN */}
        <div className="flex items-center bg-black/40 rounded-full p-0.5 border border-white/10">
          <button
            id="lang-fr"
            onClick={() => setLang("FR")}
            className={`flex h-[28px] sm:h-[32px] items-center gap-1 rounded-full px-3.5 sm:px-4 text-[10px] sm:text-[11px] font-bold transition-all duration-300 cursor-pointer ${
              lang === "FR"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            <span>FR</span>
            {lang === "FR" && <ChevronDown className="h-3 w-3 text-zinc-950" />}
          </button>
          <button
            id="lang-en"
            onClick={() => setLang("EN")}
            className={`flex h-[28px] sm:h-[32px] items-center gap-1 rounded-full px-3.5 sm:px-4 text-[10px] sm:text-[11px] font-bold transition-all duration-300 cursor-pointer ${
              lang === "EN"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            <span>EN</span>
            {lang === "EN" && <ChevronDown className="h-3 w-3 text-zinc-950" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

