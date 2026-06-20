'use client';

import Link from "next/link";
import { useLang, translate } from "../context/lang-context";

const t = {
  description: {
    FR: "Nous organisons des voyages de golf sur mesure et d'ultra-luxe au Maroc. Vivez l'expérience d'une intimité absolue et d'un voyage souverain.",
    EN: "We curate ultra-luxury bespoke golf journeys across Morocco. Experience absolute privacy and sovereign travel."
  },
  destinations: {
    FR: "Destinations",
    EN: "Destinations"
  },
  morocco: {
    FR: "Rabat — Royal Golf Dar Es Salam",
    EN: "Rabat — Royal Golf Dar Es Salam"
  },
  agadirGolf: {
    FR: "Golf Agadir",
    EN: "Agadir Golf"
  },
  marrakechGolf: {
    FR: "Golf Marrakech",
    EN: "Marrakech Golf"
  },
  mice: {
    FR: "MICE & Corporatif",
    EN: "MICE & Corporate"
  },
  saudi: {
    FR: "Forfaits Personnalisés",
    EN: "Bespoke Packages"
  },
  company: {
    FR: "Conciergerie",
    EN: "Concierge"
  },
  about: {
    FR: "À Propos",
    EN: "About Us"
  },
  news: {
    FR: "Récits de Voyage",
    EN: "Travel Stories"
  },
  customTrip: {
    FR: "Voyage Sur Mesure",
    EN: "Custom Trip Builder"
  },
  contact: {
    FR: "Contacts",
    EN: "Contact"
  },
  copyright: {
    FR: "© 2026 Majestic Experiences Voyages Concierge. Tous droits réservés.",
    EN: "© 2026 Majestic Experiences Voyages Concierge. All rights reserved."
  },
  privacySignoff: {
    FR: "Politique de Confidentialité",
    EN: "Privacy signoff"
  },
  escrowTerms: {
    FR: "Conditions de Dépôt Fiduciaire",
    EN: "Security Escrow Terms"
  },
  brandName1: { FR: "Majestic", EN: "Majestic" },
  brandName2: { FR: "Experiences Voyages", EN: "Experiences Voyages" },
  phone: { FR: "514 919 6381", EN: "514 919 6381" },
  email: { FR: "info@mevoyages.com", EN: "info@mevoyages.com" }
};

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 relative overflow-hidden select-none" id="contacts">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white/70 px-6">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img 
              src="/footer logo.jpeg" 
              className="h-24 md:h-28 w-auto object-contain hover:opacity-90 transition-opacity duration-300" 
              alt="Majestic Experiences Voyages Logo" 
            />
          </div>
          <p className="text-[12px] text-white/50 leading-relaxed font-light max-w-[240px]">
            {translate(t.description, lang)}
          </p>
        </div>

        {/* Column 2: Destinations */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {translate(t.destinations, lang)}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li><Link href="/itineraries/10" className="hover:text-brand-gold transition-colors">{translate(t.morocco, lang)}</Link></li>
            <li><Link href="/golf-itineraries/agadir" className="hover:text-brand-gold transition-colors">{translate(t.agadirGolf, lang)}</Link></li>
            <li><Link href="/golf-itineraries/marrakech" className="hover:text-brand-gold transition-colors">{translate(t.marrakechGolf, lang)}</Link></li>
            <li><Link href="/mice" className="hover:text-brand-gold transition-colors">{translate(t.mice, lang)}</Link></li>
            <li><Link href="/custom-trip" className="hover:text-brand-gold transition-colors">{translate(t.saudi, lang)}</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {translate(t.company, lang)}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li><Link href="/#about" className="hover:text-brand-gold transition-colors">{translate(t.about, lang)}</Link></li>
            <li><Link href="/custom-trip" className="hover:text-brand-gold transition-colors">{translate(t.customTrip, lang)}</Link></li>
            <li><Link href="/travel-stories" className="hover:text-brand-gold transition-colors">{translate(t.news, lang)}</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="flex flex-col gap-4" id="about">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {translate(t.contact, lang)}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li>
              <a href={`tel:${translate(t.phone, lang).replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors">
                {translate(t.phone, lang)}
              </a>
            </li>
            <li>
              <a href={`mailto:${translate(t.email, lang)}`} className="hover:text-brand-gold transition-colors">
                {translate(t.email, lang)}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright border */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center text-[11px] text-white/30 px-6">
        {/* Left: Copyright */}
        <span className="text-center md:text-left order-3 md:order-none">{translate(t.copyright, lang)}</span>
        
        {/* Center: YS Marketing Solutions Signature */}
        <div className="flex justify-center items-center order-1 md:order-none">
          <a 
            href="https://www.instagram.com/ys.sites/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/0 border border-white/5 hover:bg-[#ea580c]/5 hover:border-[#ea580c]/20 transition-all duration-300 group"
          >
            <img 
              src="/YS.png" 
              alt="YS Logo" 
              className="h-4 w-auto object-contain brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300" 
            />
            <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 leading-none font-light">
              Made by <strong className="font-semibold text-white group-hover:text-[#ea580c] transition-colors duration-300">YS Marketing Solutions</strong> <span className="text-white/10 mx-1">|</span> Marketing Agency
            </span>
          </a>
        </div>

        {/* Right: Legal links */}
        <div className="flex justify-center md:justify-end items-center gap-6 font-light order-2 md:order-none">
          <Link href="/conditions" className="hover:text-brand-gold transition-colors">{translate(t.privacySignoff, lang)}</Link>
          <Link href="/conditions" className="hover:text-brand-gold transition-colors">{translate(t.escrowTerms, lang)}</Link>
        </div>
      </div>
    </footer>
  );
}
