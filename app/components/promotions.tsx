'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Users, Percent, Sparkles, Flame } from "lucide-react";
import { useLang, translate } from "../context/lang-context";
import { dealsList } from "@/data/itineraries";
import { getTierStyle } from "../utils/tier-styles";

export default function Promotions() {
  const { lang } = useLang();

  const selectedDeals = [
    dealsList.find(d => d.id === 10),
    dealsList.find(d => d.id === 11),
    dealsList.find(d => d.id === 14)
  ].filter((d): d is typeof dealsList[0] => !!d);

  return (
    <div className="w-full bg-zinc-50/50 py-24 relative overflow-hidden border-y border-zinc-200/40">
      {/* Shimmer animation styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Decorative Flight Path Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M-50,250 Q 250,50 600,200 T 1200,100 T 1500,300" 
            stroke="#c8a2c8" 
            strokeWidth="2" 
            strokeDasharray="8 8" 
          />
          <path 
            d="M100,500 Q 400,200 800,450 T 1500,200" 
            stroke="#d4af37" 
            strokeWidth="1.5" 
            strokeDasharray="6 6" 
          />
          {/* Animated Airplane */}
          <motion.g
            animate={{
              offsetDistance: ["0%", "100%"]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              motionPath: "M-50,250 Q 250,50 600,200 T 1200,100 T 1500,300"
            }}
          >
            <path 
              d="M21 16V14L13 9V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" 
              fill="#d4af37" 
              transform="scale(0.8) translate(-10, -10)"
            />
          </motion.g>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 text-brand-gold font-mono text-[10px] tracking-[0.2em] uppercase">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            <span>{lang === "FR" ? "OFFRES PRESTIGE" : "EXCLUSIVE PROMOTIONS"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight uppercase leading-tight">
            {lang === "FR" ? "ÉDITIONS LIMITÉES & PRIVILÈGES" : "HOT DEALS & PRIVILEGES"}
          </h2>
          <p className="text-zinc-500 font-light text-[13px] md:text-sm leading-relaxed">
            {lang === "FR" 
              ? "Profitez d'avantages exclusifs, de tarifs de réservation anticipée et de privilèges de vol privé sur nos plus beaux voyages."
              : "Discover limited-time pricing, early reservation privileges, and complimentary private transfers on our signature itineraries."
            }
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white rounded-[2rem] overflow-hidden border border-zinc-200/50 shadow-md hover:shadow-xl flex flex-col group transition-shadow duration-300"
            >
              {/* Image Header with Tags */}
              <div className="h-[240px] w-full relative overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={translate(deal.title, lang)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
                
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
                    style={getTierStyle(translate(deal.badge, lang))}
                    className="relative overflow-hidden px-3.5 py-1.5 rounded-full font-sans text-[11px] tracking-wider uppercase font-semibold shadow-md pointer-events-auto cursor-default"
                  >
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.5s_infinite]" />
                    <span className="relative z-10">{translate(deal.badge, lang)}</span>
                  </motion.div>
                </div>

                {/* Booking Deadline Banner */}
                {deal.promoText && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#8B2635]/95 backdrop-blur-xs text-[#faf9f5] text-[11px] font-sans py-2 px-4 tracking-wider text-center uppercase font-bold">
                    {translate(deal.promoText, lang)}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 font-sans font-medium tracking-wide">
                    <span>{translate(deal.duration, lang)}</span>
                    <span>{translate({ FR: "•", EN: "•" }, lang)}</span>
                    <span>{translate(deal.flight, lang)}</span>
                    <span>{translate({ FR: "•", EN: "•" }, lang)}</span>
                    <span>{translate(deal.meals, lang)}</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-[14px] md:text-[15px] font-mono tracking-[0.25em] uppercase font-bold text-[#8B2635] block mb-1.5">
                      {translate(deal.city, lang)}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                      {translate(deal.title, lang)}
                    </h3>
                  </div>

                  <p className="text-[13.5px] leading-relaxed text-zinc-600 font-light pt-2.5 border-t border-zinc-100">
                    <span className="font-heading text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark block mb-1">
                      {lang === "FR" ? "INCLUSIONS EXCLUSIVES" : "EXCLUSIVE INCLUSIONS"}
                    </span>
                    {translate(deal.inclusions, lang)}
                  </p>
                </div>

                {/* Footer / Pricing */}
                <div className="flex items-center justify-between pt-5 border-t border-zinc-100">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono line-through text-zinc-400 leading-none mb-1">
                      {deal.oldPrice}
                    </span>
                      {(() => {
                        const priceText = translate(deal.newPrice, lang);
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
                    href={`/itineraries/${deal.id}`}
                    className="bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-full border border-[#8B2635] hover:border-[#72202b] transition-luxury cursor-pointer shadow-sm"
                  >
                    {lang === "FR" ? "EN SAVOIR PLUS" : "BOOK OFFER"}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
