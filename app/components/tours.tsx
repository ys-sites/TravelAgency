'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang, translate } from "../context/lang-context";
import { toursList } from "@/data/itineraries";
import { getTierStyle } from "../utils/tier-styles";

const t = {
  book: {
    FR: "DÉCOUVRIR",
    EN: "DISCOVER"
  }
};

const getNightsLabel = (duration: { FR: string; EN: string }, lang: "FR" | "EN") => {
  const text = lang === "FR" ? duration.FR : duration.EN;
  const match = text.match(/(\d+)\s*(nuit|night)s?/i);
  if (match) {
    const num = match[1];
    return lang === "FR" ? `- ${num} NUITS` : `- ${num} NIGHTS`;
  }
  if (text.toLowerCase().includes("mesure") || text.toLowerCase().includes("custom")) {
    return lang === "FR" ? "- SUR MESURE" : "- CUSTOM";
  }
  return `- ${text.toUpperCase()}`;
};

const cleanTitle = (title: string) => {
  return title.replace(/\s*\(\d+N\)\s*$/i, "");
};


export default function Tours() {
  const { lang } = useLang();
  const [activeType, setActiveType] = React.useState("All"); // All, Golf, Tours
  const [activeCity, setActiveCity] = React.useState("All"); // All, Marrakech, Agadir, Rabat, Imperial

  const typePills = [
    { id: "All", FR: "Tous les Types", EN: "All Travel Types" },
    { id: "Golf", FR: "Forfaits Golf", EN: "Golf Packages" },
    { id: "Tours", FR: "Tours & Circuits", EN: "Tours & Discovery" },
    { id: "Mice", FR: "MICE & Corporatif", EN: "MICE & Corporate" }
  ];

  const cityPills = [
    { id: "All", FR: "Toutes les Villes", EN: "All Cities" },
    { id: "Marrakech", FR: "Marrakech", EN: "Marrakech" },
    { id: "Agadir", FR: "Agadir", EN: "Agadir" },
    { id: "Rabat", FR: "Rabat", EN: "Rabat" },
    { id: "Imperial", FR: "Villes Impériales", EN: "Imperial Cities" }
  ];

  const getCityKey = (id: number) => {
    switch (id) {
      case 11:
      case 12:
      case 13:
        return "Agadir";
      case 14:
      case 15:
      case 16:
      case 8: // Toubkal trekking & Marrakech
        return "Marrakech";
      case 10:
        return "Rabat";
      case 6:
      case 7:
      case 9:
        return "Imperial";
      case 99:
        return activeCity;
      default:
        return "Other";
    }
  };

  const filteredTours = toursList.filter((tour) => {
    // 1. Filter by Type
    if (activeType !== "All") {
      if (activeType === "Golf" && tour.tag !== "golf") return false;
      if (activeType === "Tours" && tour.tag !== "tour") return false;
      if (activeType === "Mice" && tour.tag !== "mice") return false;
    }
    // 2. Filter by City
    if (activeCity !== "All") {
      const tourCity = getCityKey(tour.id);
      if (tourCity !== activeCity) return false;
    }
    return true;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 bg-white text-zinc-900" id="itineraries">
      {/* Shimmer animation styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Split Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Heading & Branding */}
        <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              className="h-16 w-auto object-contain" 
              alt="logo" 
            />
          </div>
          
          <div className="space-y-4 pt-2">
            <span className="text-brand-gold font-serif italic text-[17px] capitalize block">
              {translate({ FR: "Top Destinations", EN: "Top Destinations" }, lang)}
            </span>
            <h2 className="font-serif text-3xl font-bold text-zinc-900 tracking-tight uppercase leading-none">
              {lang === "FR" ? "EXPLOREZ DES LIEUX DE RÊVE" : "EXPLORE DREAM PLACES"}
            </h2>
            <p className="text-[13px] leading-relaxed text-zinc-500 font-light">
              {lang === "FR"
                ? "Où voulez-vous aller ensuite ? Trouvez les meilleurs endroits où séjourner, les choses à faire et à voir."
                : "Where do you want to go next? Find the best places to stay, things to do, and see."
              }
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/itineraries"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-4 transition-luxury shadow-md cursor-pointer hover:-translate-y-0.5"
            >
              {lang === "FR" ? "TOUS LES ITINÉRAIRES" : "VIEW ALL DESTINATIONS"}{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {translate({ FR: "→", EN: "→" }, lang)}
              </span>
            </Link>

            <Link
              href="/custom-trip"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-4 transition-luxury shadow-sm cursor-pointer hover:-translate-y-0.5"
            >
              {lang === "FR" ? "VOYAGE SUR MESURE" : "BUILD CUSTOM PASSAGE"}
            </Link>
          </div>
        </div>

        {/* Right Column: Curated Itineraries in a balanced 2x2 grid */}
        <div className="lg:col-span-9 w-full relative space-y-8">
          
          {/* Combined Filter Section */}
          <div className="flex flex-col space-y-5 w-full bg-zinc-50/50 p-6 rounded-3xl border border-zinc-200/50">
            {/* Row 1: Travel Types */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#C5A880] uppercase block mb-2.5 font-semibold">
                {lang === "FR" ? "1. Catégorie de Voyage" : "1. Travel Category"}
              </span>
              <div className="flex flex-wrap gap-2">
                {typePills.map((pill) => {
                  const label = lang === "FR" ? pill.FR : pill.EN;
                  const isActive = activeType === pill.id;
                  return (
                    <button
                      key={pill.id}
                      onClick={() => setActiveType(pill.id)}
                      className={`px-4 py-2.5 text-[9px] font-mono tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? "bg-brand-gold text-white shadow-sm border border-brand-gold"
                          : "border border-zinc-300 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 bg-white"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-zinc-200/60" />

            {/* Row 2: Cities/Regions */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#C5A880] uppercase block mb-2.5 font-semibold">
                {lang === "FR" ? "2. Sélectionner une Ville / Région" : "2. Select a City / Region"}
              </span>
              <div className="flex flex-wrap gap-2">
                {cityPills.map((pill) => {
                  const label = lang === "FR" ? pill.FR : pill.EN;
                  const isActive = activeCity === pill.id;
                  return (
                    <button
                      key={pill.id}
                      onClick={() => setActiveCity(pill.id)}
                      className={`px-4 py-2.5 text-[9px] font-mono tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? "bg-brand-gold text-white shadow-sm border border-brand-gold"
                          : "border border-zinc-300 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 bg-white"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
                className="group relative flex flex-col rounded-[2.2rem] overflow-hidden border border-zinc-200/50 shadow-md hover:shadow-xl bg-white h-full transition-shadow duration-300"
              >
                {/* Image Header with Tags */}
                <div className="h-[240px] w-full relative overflow-hidden">
                  <img
                    src={tour.image}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    alt={translate(tour.title, lang)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Star Rating Overlay */}
                  <div className="absolute top-6 right-6 z-10 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded-full flex gap-0.5 shadow-md border border-white/10 select-none">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C5A880] text-[11px] leading-none">★</span>
                    ))}
                  </div>

                  {/* Badge container to prevent horizontal overlap on laptop/mobile screens */}
                  <div className="absolute top-6 left-6 right-6 flex flex-col items-start gap-2.5 z-10 pointer-events-none select-none">
                    {/* Styled Tier Badge with Framer Motion and Shimmer */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                      style={getTierStyle(translate(tour.badge, lang))}
                      className="relative overflow-hidden px-3.5 py-1.5 rounded-full font-sans text-[11px] tracking-wider uppercase font-semibold shadow-md pointer-events-auto cursor-default"
                    >
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.5s_infinite]" />
                      <span className="relative z-10">{translate(tour.badge, lang)}</span>
                    </motion.div>
                  </div>

                  {/* Booking Deadline Banner */}
                  {tour.promoText && (
                    <div className="absolute bottom-0 left-0 right-0 bg-[#8B2635]/95 backdrop-blur-xs text-[#faf9f5] text-[10px] font-mono py-2.5 px-4 tracking-wider text-center uppercase font-bold">
                      {translate(tour.promoText, lang)}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 font-sans font-medium tracking-wide">
                      <span>{translate(tour.duration, lang)}</span>
                      <span>{translate({ FR: "•", EN: "•" }, lang)}</span>
                      <span>{translate(tour.flight, lang)}</span>
                      <span>{translate({ FR: "•", EN: "•" }, lang)}</span>
                      <span>{translate(tour.meals, lang)}</span>
                    </div>

                    <div className="space-y-1.5">
                      {tour.title && (
                        <span className="text-[14px] md:text-[15px] font-mono tracking-[0.25em] uppercase font-bold text-[#8B2635] block">
                          {cleanTitle(translate(tour.title, lang))}
                        </span>
                      )}
                      <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug uppercase">
                        {translate(tour.city, lang)} {getNightsLabel(tour.duration, lang)}
                      </h3>
                    </div>

                    <p className="text-[13.5px] leading-relaxed text-zinc-600 font-light pt-2.5 border-t border-zinc-100 line-clamp-2">
                      <span className="font-heading text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark block mb-1">
                        {lang === "FR" ? "INCLUSIONS EXCLUSIVES" : "EXCLUSIVE INCLUSIONS"}
                      </span>
                      {translate(tour.category, lang)}
                    </p>
                  </div>

                  {/* Footer / Pricing */}
                  <div className="flex items-center justify-between pt-5 border-t border-zinc-100">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono line-through text-zinc-400 leading-none mb-1">
                        {tour.oldPrice}
                      </span>
                      {(() => {
                        const priceText = translate(tour.price, lang);
                        const isRequest = priceText.toLowerCase().includes("devis") || priceText.toLowerCase().includes("request");
                        return (
                          <span className="text-[19px] font-bold text-zinc-900 font-heading leading-none">
                            {priceText}
                            {!isRequest && (
                              <span className="text-[10px] font-mono text-zinc-400 ml-1">
                                {lang === "FR" ? "CAD / pers." : "CAD / guest"}
                              </span>
                            )}
                          </span>
                        );
                      })()}
                    </div>

                    <Link 
                      href={
                        tour.id === 99
                          ? "/mice"
                          : tour.id === 11 || tour.id === 12 || tour.id === 13
                          ? "/golf-itineraries/agadir"
                          : tour.id === 14 || tour.id === 15 || tour.id === 16
                          ? "/golf-itineraries/marrakech"
                          : `/itineraries/${tour.id}`
                      }
                      className="bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-full border border-[#8B2635] hover:border-[#72202b] transition-luxury cursor-pointer shadow-sm"
                    >
                      {translate(t.book, lang)}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
