'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Users, Percent, Sparkles, Flame } from "lucide-react";
import { useLang } from "../context/lang-context";

interface DealCard {
  id: number;
  image: string;
  badge: { FR: string; EN: string };
  title: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  inclusions: { FR: string; EN: string };
  oldPrice: string;
  newPrice: string;
  tag: string;
}

const dealsList: DealCard[] = [
  {
    id: 1,
    image: "/images/morocco-marrakech-riad.png",
    badge: { FR: "OFFRE SAISONNIÈRE", EN: "SEASONAL PRESTIGE" },
    title: { FR: "Évasion Marrakech & Sahara", EN: "Marrakech & Sahara Escape" },
    duration: { FR: "8 Jours", EN: "8 Days" },
    inclusions: { FR: "Hélicoptère Privé & Riad Exclusif", EN: "Private Heli-flight & Riad Buyouts" },
    oldPrice: "C$ 14,800",
    newPrice: "C$ 12,400",
    tag: "15% OFF"
  },
  {
    id: 2,
    image: "/images/gulf-city-skyline.png",
    badge: { FR: "OFFRE EXCLUSIVE", EN: "EXCEPTIONAL RATE" },
    title: { FR: "Oasis Moderne Dubaï & Abou Dabi", EN: "Dubai & Abu Dhabi Oasis" },
    duration: { FR: "10 Jours", EN: "10 Days" },
    inclusions: { FR: "Penthouse Marina & Superyacht Privé", EN: "Marina Penthouse & Private Yacht" },
    oldPrice: "C$ 18,900",
    newPrice: "C$ 16,500",
    tag: "12% OFF"
  },
  {
    id: 3,
    image: "/images/oman-wadi-canyon.png",
    badge: { FR: "OFFRE PRIVILÈGE", EN: "SOVEREIGN PRIVILEGE" },
    title: { FR: "Héritage du Sultanat d'Oman", EN: "Oman Sultanate Heritage" },
    duration: { FR: "12 Jours", EN: "12 Days" },
    inclusions: { FR: "Suites Jebel Akhdar & Dhow Privé", EN: "Mountain Suites & Private Dhow" },
    oldPrice: "C$ 16,800",
    newPrice: "C$ 14,800",
    tag: "SPECIAL"
  }
];

export default function Promotions() {
  const { lang } = useLang();

  return (
    <div className="w-full bg-zinc-50/50 py-24 relative overflow-hidden border-y border-zinc-200/40">
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
          {dealsList.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-zinc-200/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-luxury flex flex-col group"
            >
              {/* Image Header with Tags */}
              <div className="h-[240px] w-full relative overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title[lang]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                
                {/* Promo Badge */}
                <div className="absolute top-5 left-5 bg-brand-gold text-black font-mono text-[9px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full shadow-md">
                  {deal.tag}
                </div>

                <div className="absolute top-5 right-5 glass-tag px-3 py-1.5 rounded-full text-white font-mono text-[8px] tracking-wider uppercase font-semibold">
                  {deal.badge[lang]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{deal.duration[lang]}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-brand-gold" />
                      <span>2 {lang === "FR" ? "Invités" : "Guests"}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {deal.title[lang]}
                  </h3>

                  <p className="text-[12px] leading-relaxed text-zinc-500 font-light pt-1 border-t border-zinc-100">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-gold block mb-1">
                      {lang === "FR" ? "INCLUSIONS EXCLUSIVES" : "EXCLUSIVE INCLUSIONS"}
                    </span>
                    {deal.inclusions[lang]}
                  </p>
                </div>

                {/* Footer / Pricing */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono line-through text-zinc-400 leading-none mb-1">
                      {deal.oldPrice}
                    </span>
                    <span className="text-[20px] font-bold text-zinc-900 font-heading leading-none">
                      {deal.newPrice} <span className="text-[10px] font-mono text-zinc-400">CAD</span>
                    </span>
                  </div>

                  <Link 
                    href={`/itineraries/${deal.id}`}
                    className="bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[10px] tracking-[0.15em] uppercase px-5 py-3 rounded-full transition-luxury cursor-pointer shadow-sm"
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
