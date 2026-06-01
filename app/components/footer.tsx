'use client';

import Link from "next/link";
import { useLang } from "../context/lang-context";

const t = {
  description: {
    FR: "Nous organisons des voyages sur mesure d'ultra-luxe à travers le Golfe et le Maroc. Vivez l'expérience d'une intimité absolue et d'un voyage souverain.",
    EN: "We curate ultra-luxury bespoke journeys across the Arabian Gulf and Morocco. Experience absolute privacy and sovereign travel."
  },
  destinations: {
    FR: "Destinations",
    EN: "Destinations"
  },
  morocco: {
    FR: "Royaume du Maroc",
    EN: "Morocco Kingdom"
  },
  dubai: {
    FR: "Dubaï & Abou Dabi",
    EN: "Dubai & Abu Dhabi"
  },
  oman: {
    FR: "Sultanat d'Oman",
    EN: "Sultanate of Oman"
  },
  saudi: {
    FR: "Royaume d'Arabie Saoudite",
    EN: "Kingdom of Saudi Arabia"
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
    FR: "© 2026 WonderLand Gulf Concierge. Tous droits réservés.",
    EN: "© 2026 WonderLand Gulf Concierge. All rights reserved."
  }
};

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 relative overflow-hidden select-none" id="contacts">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white/70 px-6">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white font-heading font-semibold text-[18px] tracking-wider">
            <svg className="h-5 w-5 text-brand-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="font-serif uppercase tracking-[0.1em] text-sm">WonderLand <span className="text-brand-gold">Gulf</span></span>
          </div>
          <p className="text-[12px] text-white/50 leading-relaxed font-light max-w-[240px]">
            {t.description[lang]}
          </p>
        </div>

        {/* Column 2: Destinations */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {t.destinations[lang]}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li><a href="/#portfolios" className="hover:text-brand-gold transition-colors">{t.morocco[lang]}</a></li>
            <li><a href="/#portfolios" className="hover:text-brand-gold transition-colors">{t.dubai[lang]}</a></li>
            <li><a href="/#portfolios" className="hover:text-brand-gold transition-colors">{t.oman[lang]}</a></li>
            <li><a href="/#portfolios" className="hover:text-brand-gold transition-colors">{t.saudi[lang]}</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {t.company[lang]}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li><a href="/#about" className="hover:text-brand-gold transition-colors">{t.about[lang]}</a></li>
            <li><Link href="/custom-trip" className="hover:text-brand-gold transition-colors">{t.customTrip[lang]}</Link></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">{t.news[lang]}</a></li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="flex flex-col gap-4" id="about">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {t.contact[lang]}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li>+212 524 456 789</li>
            <li>concierge@wonderlandgulf.ca</li>
            <li className="leading-relaxed">Rue du Temple, Hivernage,<br />Marrakech 40000, Maroc</li>
          </ul>
        </div>
      </div>

      {/* Copyright border */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/30 px-6">
        <span>{t.copyright[lang]}</span>
        <div className="flex items-center gap-6 mt-4 md:mt-0 font-light">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy signoff</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Security Escrow Terms</a>
        </div>
      </div>
    </footer>
  );
}

