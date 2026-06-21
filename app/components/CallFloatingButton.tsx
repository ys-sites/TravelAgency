'use client';

import React from "react";
import { useLang, translate } from "../context/lang-context";

export default function CallFloatingButton() {
  const { lang } = useLang();
  
  const phoneNumber = "5149196381";
  const displayPhone = "514 919 6381";

  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label={lang === "FR" ? "Appeler le Concierge" : "Call Concierge"}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:bottom-8 z-50 flex items-center justify-center gap-2 bg-zinc-950/95 hover:bg-zinc-900 text-[#faf9f5] border border-brand-gold/30 hover:border-brand-gold/60 p-4 md:px-5 md:py-3.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 ease-out backdrop-blur-md cursor-pointer group"
    >
      {/* Phone Icon */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300 shrink-0"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>

      {/* Button Text - Visible on Desktop only */}
      <span className="hidden md:inline text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-200 group-hover:text-white transition-colors duration-300 selection:bg-transparent">
        {lang === "FR" ? `APPELER LE CONCIERGE (${displayPhone})` : `CALL CONCIERGE (${displayPhone})`}
      </span>
    </a>
  );
}
