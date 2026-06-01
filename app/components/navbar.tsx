'use client';

import { ChevronDown } from "lucide-react";
import { useLang } from "../context/lang-context";

const t = {
  tours:     { TN: "Туры", EN: "Tours" },
  directions:{ TN: "Направления", EN: "Directions" },
  about:     { TN: "О нас", EN: "About us" },
  news:      { TN: "Новости", EN: "News" },
  vacancies: { TN: "Вакансии", EN: "Vacancies" },
  contacts:  { TN: "Контакты", EN: "Contacts" },
};

export default function Navbar() {
  const { lang, setLang } = useLang();

  return (
    <nav className="absolute top-6 left-1/2 z-50 w-[calc(100%-48px)] max-w-[1100px] -translate-x-1/2">
      <div className="glass-nav flex h-[64px] items-center justify-between rounded-full px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-heading font-semibold text-[16px] tracking-wider cursor-pointer">
          <svg className="h-5 w-5 invert brightness-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
          </svg>
          <span>WonderLand</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 font-body text-[13px] font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {t.tours[lang]} <ChevronDown className="h-3 w-3" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {t.directions[lang]} <ChevronDown className="h-3 w-3" />
          </a>
          <a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {t.about[lang]}
          </a>
          <a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {t.news[lang]}
          </a>
          <a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {t.vacancies[lang]}
          </a>
          <a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {t.contacts[lang]}
          </a>
        </div>

        {/* Language Toggle TN / EN */}
        <div className="flex items-center gap-2 bg-black/20 rounded-full p-1 border border-white/10">
          <button
            id="lang-tn"
            onClick={() => setLang("TN")}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 ${
              lang === "TN"
                ? "bg-black/60 text-white shadow-sm"
                : "text-white/60 hover:text-white cursor-pointer"
            }`}
          >
            TN
          </button>
          <button
            id="lang-en"
            onClick={() => setLang("EN")}
            className={`flex h-8 items-center gap-1 rounded-full px-4 text-[11px] font-bold transition-all duration-300 ${
              lang === "EN"
                ? "bg-white text-wonderland-brown shadow-sm"
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
