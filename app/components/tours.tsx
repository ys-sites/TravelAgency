'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang, translate } from "../context/lang-context";
import { toursList } from "@/data/itineraries";

const t = {
  book: {
    FR: "DÉCOUVRIR",
    EN: "DISCOVER"
  }
};

export default function Tours() {
  const { lang } = useLang();


  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 bg-white text-zinc-900" id="itineraries">
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
              {lang === "FR" ? "Top Destinations" : "Top Destinations"}
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
              {lang === "FR" ? "TOUS LES ITINÉRAIRES" : "VIEW ALL DESTINATIONS"} <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>

            <Link
              href="/custom-trip"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-4 transition-luxury shadow-sm cursor-pointer hover:-translate-y-0.5"
            >
              {lang === "FR" ? "VOYAGE SUR MESURE" : "BUILD CUSTOM PASSAGE"}
            </Link>
          </div>
        </div>

        {/* Right Column: 3 Shown Itineraries in a clean static grid */}
        <div className="lg:col-span-9 w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {toursList.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="group relative flex flex-col rounded-[2rem] overflow-hidden border border-zinc-200/50 shadow-md hover:shadow-xl bg-white h-full transition-shadow duration-300"
              >
                {/* Image Header with Tags */}
                <div className="h-[200px] w-full relative overflow-hidden">
                  <img
                    src={tour.image}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    alt={translate(tour.title, lang)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Badge container to prevent horizontal overlap on laptop/mobile screens */}
                  <div className="absolute top-5 left-5 right-5 flex flex-col items-start gap-2 z-10 pointer-events-none select-none">
                    <div className="bg-[#8B2635] text-[#faf9f5] font-mono text-[9px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full shadow-md">
                      {tour.tag}
                    </div>

                    <div className={`px-3 py-1.5 rounded-full font-mono text-[8px] tracking-wider uppercase font-semibold shadow-md ${
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
                        {tour.price} <span className="text-[9px] font-mono text-zinc-400">{lang === "FR" ? "CAD / pers." : "CAD / guest"}</span>
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
        </div>

      </div>

    </div>
  );
}
