'use client';

import { motion } from "motion/react";
import { useLang } from "../context/lang-context";

const t = {
  welcome: {
    TN: "ДОБРО ПОЖАЛОВАТЬ В",
    EN: "WELCOME TO YOUR",
  },
  subtext: {
    TN: "Мы организуем туры по России и ближнему зарубежью. Откройте для себя красоту родной страны с WonderLand Tour.",
    EN: "We organize tours in Russia and neighboring countries. Discover the beauty of your home country with WonderLand Tour.",
  },
};


export default function Hero() {
  const { lang } = useLang();

  return (
    <div className="relative w-full h-[680px] overflow-hidden rounded-[2rem]">
      {/* Background Volcano Image */}
      <img
        src="/images/hero-volcano-bg.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Volcano landscape"
      />
      {/* Dark gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Small mountain peaks icon */}
          <svg className="h-6 w-6 text-white/70 invert brightness-0 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
          </svg>
          <span className="text-white/70 font-heading text-[11px] font-medium tracking-[0.25em] uppercase">
            {t.welcome[lang]}
          </span>

          <h1 className="font-heading text-[64px] font-bold text-white tracking-[0.02em] mt-3 md:text-[76px] leading-none">
            WonderLand
          </h1>

          <p className="mt-6 max-w-[520px] text-white/80 font-body text-[13px] leading-relaxed font-light">
            {t.subtext[lang]}
          </p>
        </motion.div>
      </div>

      {/* Pagination Slider Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        <span className="h-2.5 w-2.5 rounded-full bg-white transition-all duration-300 cursor-pointer" />
        <span className="h-2 w-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 cursor-pointer" />
        <span className="h-2 w-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 cursor-pointer" />
        <span className="h-2 w-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 cursor-pointer" />
      </div>
    </div>
  );
}
