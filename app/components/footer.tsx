'use client';

import { useLang } from "../context/lang-context";

const t = {
  description: {
    TN: "Мы организуем исключительные путешествия по России и диким приграничным территориям. Откройте для себя первозданную красоту с премиальным комфортом.",
    EN: "We curate exceptional journeys across Russia and neighboring wild frontiers. Discover the raw beauty with premium comfort."
  },
  destinations: {
    TN: "Направления",
    EN: "Destinations"
  },
  altai: {
    TN: "Алтайские горы",
    EN: "Altai Mountains"
  },
  kamchatka: {
    TN: "Полуостров Камчатка",
    EN: "Kamchatka Peninsula"
  },
  teriberka: {
    TN: "Баренцево море и Териберка",
    EN: "Barents Sea & Teriberka"
  },
  baikal: {
    TN: "Озеро Байкал",
    EN: "Lake Baikal"
  },
  company: {
    TN: "Компания",
    EN: "Company"
  },
  about: {
    TN: "О нас",
    EN: "About Us"
  },
  news: {
    TN: "Новости",
    EN: "News & Stories"
  },
  vacancies: {
    TN: "Вакансии",
    EN: "Careers"
  },
  contact: {
    TN: "Контакты",
    EN: "Contact"
  },
  copyright: {
    TN: "© 2026 WonderLand Tour. Все права защищены.",
    EN: "© 2026 WonderLand Tour. All rights reserved."
  }
};


export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="mt-20 border-t border-wonderland-cream bg-wonderland-cream/30 py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-wonderland-brown">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-heading font-semibold text-[18px] tracking-wider">
            <svg className="h-5 w-5 text-wonderland-brown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
            </svg>
            <span>WonderLand</span>
          </div>
          <p className="text-[12px] text-wonderland-gray leading-relaxed font-light max-w-[240px]">
            {t.description[lang]}
          </p>
        </div>

        {/* Column 2: Destinations */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-wonderland-brown/80">
            {t.destinations[lang]}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-wonderland-gray font-light">
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.altai[lang]}</a></li>
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.kamchatka[lang]}</a></li>
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.teriberka[lang]}</a></li>
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.baikal[lang]}</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-wonderland-brown/80">
            {t.company[lang]}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-wonderland-gray font-light">
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.about[lang]}</a></li>
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.news[lang]}</a></li>
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.vacancies[lang]}</a></li>
            <li><a href="#" className="hover:text-wonderland-brown transition-colors">{t.contact[lang]}</a></li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-wonderland-brown/80">
            {t.contact[lang]}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-wonderland-gray font-light">
            <li>+1 (800) 555-0199</li>
            <li>explore@wonderlandtours.ca</li>
            <li>1250 René-Lévesque Blvd W, Montreal, QC, Canada</li>
          </ul>
        </div>
      </div>

      {/* Copyright border */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-wonderland-cream/60 flex flex-col md:flex-row items-center justify-between text-[11px] text-wonderland-gray/80">
        <span>{t.copyright[lang]}</span>
        <div className="flex items-center gap-6 mt-4 md:mt-0 font-light">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
