'use client';

import React, { useRef, useEffect } from "react";
import { useLang, translate } from "../context/lang-context";
import { usePathname } from "next/navigation";

export default function CallFloatingButton() {
  const { lang } = useLang();
  const pathname = usePathname();
  
  const phoneNumber = "5149196381";
  const displayPhone = "514 919 6381";

  // Check if we are inside an itinerary detail page (starts with /itineraries/)
  const isItineraryPage = pathname?.includes("/itineraries/");

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isItineraryPage) {
      e.preventDefault();
      const element = document.getElementById("booking-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isItineraryPage) {
    return (
      <div className="fixed bottom-6 right-6 md:right-8 md:bottom-8 z-50 flex flex-col items-end gap-2 pointer-events-none">
        {/* Pulsing Hint Tooltip/Popup - Visible on all views */}
        <div className="bg-zinc-950/95 border border-brand-gold/40 text-brand-gold text-[9px] font-mono font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-lg uppercase animate-pulse select-none shrink-0 pointer-events-auto">
          {lang === "FR" ? "✨ Cliquez pour réserver" : "✨ Click to request booking"}
        </div>
        
        <a
          href="#booking-form"
          onClick={handleScrollToForm}
          aria-label={lang === "FR" ? "Aller au formulaire de contact" : "Go to contact form"}
          className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-[#cba358] text-zinc-950 border border-brand-gold p-3.5 px-4 md:px-5 md:py-3.5 rounded-full shadow-[0_12px_45px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 ease-out cursor-pointer group pointer-events-auto shrink-0 font-bold"
        >
          {/* Clipboard / Form Icon */}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5 text-zinc-950 transition-colors duration-300 shrink-0"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <line x1="9" y1="10" x2="15" y2="10" />
            <line x1="9" y1="14" x2="15" y2="14" />
            <line x1="9" y1="18" x2="13" y2="18" />
          </svg>

          {/* Button Text */}
          <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-zinc-950">
            {lang === "FR" ? "Soumettre Demande" : "Submit Request"}
          </span>
        </a>
      </div>
    );
  }

  // Default: Phone Call button on other pages
  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label={lang === "FR" ? "Nous appeler" : "Call us"}
      className="fixed bottom-6 right-6 md:right-8 md:bottom-8 z-50 flex items-center justify-center gap-2 bg-zinc-950/95 hover:bg-zinc-900 text-[#faf9f5] border border-brand-gold/30 hover:border-brand-gold/60 p-4 md:px-5 md:py-3.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 ease-out backdrop-blur-md cursor-pointer group"
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
        {lang === "FR" ? `NOUS APPELER (${displayPhone})` : `CALL US (${displayPhone})`}
      </span>
    </a>
  );
}
