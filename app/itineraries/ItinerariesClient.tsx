'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang, translate } from "../context/lang-context";
import { toursList } from "@/data/itineraries";
import { getTierStyle } from "../utils/tier-styles";

const t = {
  book: {
    FR: "DÉCOUVRIR",
    EN: "DISCOVER"
  }
};

export default function ItinerariesClient() {
  const { lang } = useLang();
  const [activeType, setActiveType] = React.useState("All"); // All, Golf, Tours
  const [activeCity, setActiveCity] = React.useState("All"); // All, Marrakech, Agadir, Rabat, Imperial

  const typePills = [
    { id: "All", FR: "Tous les Types", EN: "All Travel Types" },
    { id: "Golf", FR: "Forfaits Golf", EN: "Golf Packages" },
    { id: "Tours", FR: "Tours & Circuits", EN: "Tours & Discovery" }
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
      default:
        return "Other";
    }
  };

  const filteredTours = toursList.filter((tour) => {
    // 1. Filter by Type
    if (activeType !== "All") {
      if (activeType === "Golf" && tour.tag !== "golf") return false;
      if (activeType === "Tours" && tour.tag !== "tour") return false;
    }
    // 2. Filter by City
    if (activeCity !== "All") {
      const tourCity = getCityKey(tour.id);
      if (tourCity !== activeCity) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <Navbar />

      {/* Header Section */}
      <section className="relative h-[48vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        {/* Hero background image */}
        <img
          src="/images/moroco.webp"
          alt="Curated Moroccan Portfolios"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {lang === "FR" ? "Évasions de Prestige" : "Elite Collections"}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold">
              {lang === "FR" ? "Tous les Itinéraires" : "Curated Portfolios"}
            </h1>
          </div>
        </div>
      </section>

      {/* Build-to-Order Custom Passage Banner */}
      <section className="pt-12 pb-6 px-6 max-w-4xl mx-auto text-center z-20 relative bg-white">
        <div className="bg-zinc-50 border border-zinc-200/60 p-8 rounded-[1.8rem] space-y-5 shadow-sm">
          <p className="text-zinc-700 text-sm md:text-base font-light italic leading-relaxed max-w-2xl mx-auto">
            {lang === "FR"
              ? "Tous nos itinéraires sont construits sur mesure selon votre demande."
              : "All our itineraries are built to order based on your request."}
          </p>
          <div>
            <Link
              href="/custom-trip"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury shadow-md cursor-pointer"
            >
              {lang === "FR" ? "Créer Mon Voyage" : "Build My Trip"} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Grid of Cards */}
      <section className="pb-24 pt-6 px-6 max-w-6xl mx-auto z-20 relative bg-white">
        
        {/* Combined Filter Section */}
        <div className="flex flex-col items-center space-y-6 mb-12 max-w-3xl mx-auto">
          {/* Row 1: Travel Types */}
          <div className="w-full text-center">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#C5A880] uppercase block mb-3 font-semibold">
              {lang === "FR" ? "1. Catégorie de Voyage" : "1. Travel Category"}
            </span>
            <div className="flex flex-wrap justify-center gap-2.5">
              {typePills.map((pill) => {
                const label = lang === "FR" ? pill.FR : pill.EN;
                const isActive = activeType === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setActiveType(pill.id)}
                    className={`px-5 py-2.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer ${
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
          <div className="w-24 h-[1px] bg-zinc-200" />

          {/* Row 2: Cities/Regions */}
          <div className="w-full text-center">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#C5A880] uppercase block mb-3 font-semibold">
              {lang === "FR" ? "2. Sélectionner une Ville / Région" : "2. Select a City / Region"}
            </span>
            <div className="flex flex-wrap justify-center gap-2.5">
              {cityPills.map((pill) => {
                const label = lang === "FR" ? pill.FR : pill.EN;
                const isActive = activeCity === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setActiveCity(pill.id)}
                    className={`px-5 py-2.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col rounded-[2.2rem] overflow-hidden border border-zinc-200/55 shadow-md hover:shadow-xl bg-white h-full transition-shadow duration-300"
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

                  <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {translate(tour.title, lang)}
                  </h3>

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
                      tour.id === 11 || tour.id === 12 || tour.id === 13
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
      </section>

      <Footer />
    </div>
  );
}
