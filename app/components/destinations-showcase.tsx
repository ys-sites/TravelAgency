'use client';

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang, translate } from "../context/lang-context";
import SmartVideo from "./smart-video";
import { videoSources } from "../../data/videoSources";

const destinations = [
  {
    id: "marrakech",
    source: videoSources.marrakech,
    title: { FR: "Marrakech", EN: "Marrakech" },
    queryParam: "Marrakech",
    gridClass: "md:col-span-2 md:row-span-2 h-[260px] md:h-full",
    delay: 0.1,
  },
  {
    id: "agadir",
    source: videoSources.agadir,
    title: { FR: "Agadir", EN: "Agadir" },
    queryParam: "Agadir",
    gridClass: "md:col-span-1 md:row-span-1 h-[260px] md:h-full",
    delay: 0.2,
  },
  {
    id: "rabat",
    source: videoSources.rabat,
    title: { FR: "Rabat", EN: "Rabat" },
    queryParam: "Rabat",
    gridClass: "md:col-span-1 md:row-span-1 h-[260px] md:h-full",
    delay: 0.3,
  },
  {
    id: "imperial",
    source: videoSources.imperial,
    title: { FR: "Villes Impériales", EN: "Imperial Cities" },
    queryParam: "Imperial",
    gridClass: "md:col-span-3 md:row-span-1 h-[260px] md:h-[300px]",
    delay: 0.4,
  },
];

export default function DestinationsShowcase() {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto bg-white text-zinc-900 overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-brand-gold font-serif italic text-lg capitalize block">
          {translate({ FR: "Destinations Royales", EN: "Royal Destinations" }, lang)}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
          {lang === "FR" ? "ÉVEILLEZ VOS SENS" : "AWAKEN YOUR SENSES"}
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-zinc-500 font-light max-w-xl mx-auto">
          {lang === "FR"
            ? "Parcourez nos portfolios exclusifs et laissez-vous transporter par l'essence unique de chaque région marocaine."
            : "Browse our exclusive portfolios and let yourself be transported by the unique essence of each Moroccan region."}
        </p>
      </div>

      {/* 1. Mobile Swipe Carousel (hidden on md screens and up) */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-6 w-full">
        {destinations.map((dest) => (
          <div key={dest.id} className="snap-center min-w-full flex-shrink-0">
            <Link href={`/itineraries?city=${dest.queryParam}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-zinc-200/50 shadow-md h-[380px]"
              >
                {/* Visual Ambient Video */}
                <div className="absolute inset-0 w-full h-full scale-[1.01]">
                  <SmartVideo source={dest.source} variant="tile" />
                </div>
                
                {/* Vignette bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase mb-1.5 font-bold">
                    {lang === "FR" ? "DÉCOUVRIR" : "EXPLORE"}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wider uppercase">
                    {translate(dest.title, lang)}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>

      {/* 2. Desktop Bento Grid (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[240px]">
        {destinations.map((dest) => (
          <Link
            key={dest.id}
            href={`/itineraries?city=${dest.queryParam}`}
            className={`${dest.gridClass} group block`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: dest.delay, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-zinc-200/50 shadow-md hover:shadow-xl transition-shadow duration-500 bg-black cursor-pointer"
            >
              {/* Visual Ambient Video Container with Hover Scale */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <SmartVideo source={dest.source} variant="tile" />
              </div>
              
              {/* Vignette bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 pointer-events-none" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase mb-1.5 font-bold block opacity-90">
                    {lang === "FR" ? "DÉCOUVRIR" : "EXPLORE"}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white tracking-wider uppercase group-hover:text-brand-gold transition-colors duration-300">
                    {translate(dest.title, lang)}
                  </h3>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
