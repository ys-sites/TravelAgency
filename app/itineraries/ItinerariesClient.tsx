'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang, translate } from "../context/lang-context";
import { toursList } from "@/data/itineraries";

const t = {
  book: {
    FR: "DÉCOUVRIR",
    EN: "DISCOVER"
  }
};

export default function ItinerariesClient() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Header Section */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        
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

      {/* Grid of Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto z-20 relative bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursList.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col rounded-[2rem] overflow-hidden border border-zinc-200/55 shadow-md hover:shadow-xl bg-white h-full transition-shadow duration-300"
            >
              {/* Image Header with Tags */}
              <div className="h-[200px] w-full relative overflow-hidden">
                <img
                  src={tour.image}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  alt={translate(tour.title, lang)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                
                  {/* Promo Badge */}
                  <div className="absolute top-5 left-5 bg-[#8B2635] text-[#faf9f5] font-mono text-[9px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full shadow-md">
                    {tour.tag}
                  </div>

                  <div className={`absolute top-5 right-5 px-3 py-1.5 rounded-full font-mono text-[8px] tracking-wider uppercase font-semibold shadow-md ${
                    tour.id === 1
                      ? "bg-[#a8c8e8] text-[#1a3a5c] border border-[#7aaed4]/40"
                      : tour.id === 2
                      ? "bg-[#8B2635] text-[#faf9f5] border border-[#8B2635]"
                      : tour.id === 3
                      ? "bg-[#8fada4] text-[#1a3530] border border-[#6e9990]/40"
                      : "bg-[#c4a882] text-[#3d2410] border border-[#a8896a]/40"
                  }`}>
                    {translate(tour.badge, lang)}
                  </div>

                {/* Booking Deadline Banner */}
                {tour.promoText && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#8B2635]/90 backdrop-blur-xs text-[#faf9f5] text-[8px] font-mono py-1.5 px-3 tracking-wider text-center uppercase font-bold">
                    {translate(tour.promoText, lang)}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] text-zinc-400 font-mono tracking-wider">
                    <span>{translate(tour.duration, lang)}</span>
                    <span>•</span>
                    <span>{translate(tour.flight, lang)}</span>
                    <span>•</span>
                    <span>{translate(tour.meals, lang)}</span>
                  </div>

                  <h3 className="font-serif text-base md:text-lg font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {translate(tour.title, lang)}
                  </h3>

                  <p className="text-[12px] leading-relaxed text-zinc-500 font-light pt-1 border-t border-zinc-100 line-clamp-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-gold block mb-1">
                      {lang === "FR" ? "INCLUSIONS EXCLUSIVES" : "EXCLUSIVE INCLUSIONS"}
                    </span>
                    {translate(tour.category, lang)}
                  </p>
                </div>

                {/* Footer / Pricing */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono line-through text-zinc-400 leading-none mb-1">
                      {tour.oldPrice}
                    </span>
                    <span className="text-[17px] font-bold text-zinc-900 font-heading leading-none">
                      {tour.price} <span className="text-[9px] font-mono text-zinc-400">CAD / pers.</span>
                    </span>
                  </div>

                  <Link 
                    href={`/itineraries/${tour.id}`}
                    className="bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 rounded-full border border-[#8B2635] hover:border-[#72202b] transition-luxury cursor-pointer shadow-sm"
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
