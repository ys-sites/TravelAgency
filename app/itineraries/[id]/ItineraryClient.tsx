'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Hotel } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useLang, translate } from "../../context/lang-context";
import { itinerariesData, itineraryThemes } from "@/data/itineraries";

export default function ItineraryClient({ id }: { id: string }) {
  const { lang } = useLang();
  const itinerary = itinerariesData[id];

  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passengerCount, setPassengerCount] = useState(1);
  const [passengerAges, setPassengerAges] = useState<number[]>([0]);

  const updatePassengerCount = (delta: number) => {
    setPassengerCount(prev => {
      const next = Math.min(12, Math.max(1, prev + delta));
      setPassengerAges(ages => {
        const copy = [...ages];
        while (copy.length < next) copy.push(0);
        return copy.slice(0, next);
      });
      return next;
    });
  };

  const updatePassengerAge = (idx: number, val: number) => {
    setPassengerAges(ages => { const a = [...ages]; a[idx] = val; return a; });
  };

  // Parse default nights from itinerary duration string (e.g. "8 days / 7 nights" → 7)
  const defaultNights = (() => {
    const match = itinerary?.duration?.EN?.match(/(\d+)\s*night/);
    return match ? parseInt(match[1], 10) : 7;
  })();
  const [nights, setNights] = useState(defaultNights);

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center items-center">
        <h2 className="font-serif text-2xl mb-4 text-zinc-800">Itinerary Not Found</h2>
        <Link href="/" className="text-brand-gold hover:underline">Return to Home</Link>
      </div>
    );
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const theme = itineraryThemes[id];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Hero Header Section */}
      {theme ? (
        <section className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[500px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden bg-zinc-950 flex flex-col justify-end">
          <img
            src={theme.heroBg}
            alt={theme.heroTitle}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-24 max-w-7xl mx-auto z-10">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase mb-6 transition-colors font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
            </Link>
            <div className="max-w-2xl space-y-6">
              <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/30 px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase rounded-full inline-block">
                {translate(itinerary.duration, lang)}
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase leading-tight font-bold text-brand-gold">
                {theme.heroTitle}
              </h1>
              <p className="text-[14px] sm:text-[16px] leading-relaxed text-zinc-300 font-light max-w-lg">
                {theme.heroSub}
              </p>
              <a 
                href="#itinerary-details"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 font-semibold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
                style={{
                  backgroundColor: theme.themeColor,
                  color: "#faf9f5",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.themeColorHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.themeColor;
                }}
              >
                <span>{theme.heroBtn}</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Watercolor Divider Mask */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 select-none pointer-events-none">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[60px] md:h-[100px]"
              style={{ fill: "#faf9f5" }}
            >
              <path d="M0,0 C150,90 350,10 500,70 C650,110 850,20 1000,80 C1100,110 1150,90 1200,60 L1200,120 L0,120 Z" />
              <path d="M0,20 C180,70 320,30 480,90 C620,10 800,100 950,50 C1080,20 1150,80 1200,40 L1200,120 L0,120 Z" opacity="0.3" />
              <path d="M0,40 C200,30 380,80 520,40 C700,90 880,30 1020,70 C1120,40 1160,60 1200,50 L1200,120 L0,120 Z" opacity="0.15" />
            </svg>
          </div>
        </section>
      ) : (
        <section className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[400px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden bg-zinc-950 flex flex-col justify-end">
          <img
            src={itinerary.image}
            alt={translate(itinerary.title, lang)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
          
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-7xl mx-auto z-10">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase mb-6 transition-colors font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
            </Link>
            <div className="space-y-4">
              <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/30 px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase rounded-full inline-block">
                {translate(itinerary.duration, lang)}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase leading-tight font-bold text-brand-gold">
                {translate(itinerary.title, lang)}
              </h1>
            </div>
          </div>
        </section>
      )}

      {/* Discovery Section (with Map pins) */}
      {theme && (
        <div className="relative bg-[#faf9f5]">
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Map/Graphics Column */}
              <div className="lg:col-span-7 w-full z-10">
                {id === "1" ? (
                  /* ── SVG Styled Map of Morocco ── */
                  <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] w-full rounded-[2.5rem] border border-zinc-200/80 overflow-hidden shadow-luxury bg-white">
                    <svg viewBox="0 0 600 500" className="w-full h-full max-w-[560px]">
                      <defs>
                        <linearGradient id="mapGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fdfcfb" />
                          <stop offset="100%" stopColor="#f4f1ea" />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mapGradient)"/>
                      <path d="M50,150 Q120,80 220,120 T350,90 T480,180 T550,300 L550,450 L50,450 Z" fill="#e9e5db" opacity="0.45" stroke="#d5cebe" strokeWidth="1"/>
                      <path d="M50,150 Q120,80 220,120 T350,90 T480,180" fill="none" stroke="#c8bca6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"/>
                      
                      {/* Interactive pins */}
                      {theme.mapPins.map((pin, index) => (
                        <g key={index} transform={`translate(${parseFloat(pin.left)*6}, ${parseFloat(pin.top)*5})`} className="cursor-pointer group">
                          <circle cx="0" cy="0" r="12" fill="#8a7050" opacity="0.15" className="animate-ping"/>
                          <circle cx="0" cy="0" r="4.5" fill="#8a7050" stroke="#fff" strokeWidth="1.5" className="shadow-sm"/>
                          <rect x="-45" y="-30" width="90" height="18" rx="4" fill="#000" opacity="0.8" className="scale-0 group-hover:scale-100 origin-bottom transition-all duration-300"/>
                          <text x="0" y="-18" fontSize="8" fontFamily="sans-serif" fill="#fff" textAnchor="middle" className="scale-0 group-hover:scale-105 origin-bottom transition-all duration-300">
                            {translate(pin.name, lang)}
                          </text>
                        </g>
                      ))}
                      
                      {/* Scale Bar */}
                      <g transform="translate(115,393)">
                        <rect x="0" y="-2" width="70" height="4" rx="2" fill="#c8b080" opacity="0.35"/>
                        <rect x="0" y="-2" width="35" height="4" rx="2" fill="#c8b080" opacity="0.55"/>
                        <line x1="0" y1="-5" x2="0" y2="5" stroke="#8a7050" strokeWidth="1" opacity="0.55"/>
                        <line x1="70" y1="-5" x2="70" y2="5" stroke="#8a7050" strokeWidth="1" opacity="0.55"/>
                        <text x="18" y="-7" fontSize="7.5" fontFamily="Georgia,serif" fill="#8a7050" opacity="0.75">~300 km</text>
                      </g>
                    </svg>
                  </div>
                ) : (
                  /* ── Photo + Pins Map (all other destinations) ── */
                  <div className="relative flex items-center justify-center min-h-[400px] w-full rounded-[2rem] border border-zinc-200/80 overflow-hidden shadow-inner bg-white">
                    <img
                      src={theme.mapImage}
                      className="absolute inset-0 w-full h-full object-cover brightness-95 contrast-[1.05]"
                      alt={theme.discoverTitle}
                    />
                    {theme.mapPins.map((pin, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}
                        style={{ top: pin.top, left: pin.left }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-30"
                      >
                        <div className="relative flex h-6 w-6 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold/40 opacity-75"></span>
                          <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-black border border-brand-gold cursor-pointer shadow-sm">
                            <div className="h-1 w-1 rounded-full bg-brand-gold animate-pulse"></div>
                          </div>
                        </div>
                        <span className="mt-1 bg-black/90 border border-white/10 text-white text-[9px] px-2 py-0.5 rounded shadow-md pointer-events-none group-hover:scale-105 transition-transform duration-300 font-heading font-medium tracking-wide">
                          {translate(pin.name, lang)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Description on the right */}
              <div className="lg:col-span-5 flex flex-col items-start space-y-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]" style={{ color: theme.themeColor }}>
                  {lang === "FR" ? "DÉCOUVREZ LE ROYAUME" : "DISCOVER THE REALM"}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight uppercase">
                  {theme.discoverTitle}
                </h2>
                <p className="text-[14px] leading-relaxed text-zinc-600 font-light max-w-[460px]">
                  {theme.discoverDesc}
                </p>
              </div>
            </div>
          </section>

          {/* Experience Grid Section */}
          <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Text block */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start space-y-6">
                <span className="w-12 h-1 border-t-2" style={{ borderColor: theme.themeColor }} />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 leading-tight uppercase">
                  {theme.experienceTitle}
                </h2>
                <p className="text-[14px] leading-relaxed text-zinc-600 font-light">
                  {theme.experienceDesc}
                </p>
              </div>
              {/* Featured Experience Cover */}
              <div className="lg:col-span-8 rounded-[2rem] overflow-hidden relative group min-h-[300px] md:min-h-[400px] shadow-md border border-zinc-200/50">
                <img
                  src={theme.experienceGrid[0].img}
                  alt={theme.experienceGrid[0].label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide uppercase">
                    {theme.experienceGrid[0].label}
                  </h3>
                </div>
              </div>
            </div>

            {/* Other Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {theme.experienceGrid.slice(1).map((card, idx) => (
                <div key={idx} className="rounded-[1.5rem] overflow-hidden relative group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-sm border border-zinc-200/50">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
                      {card.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Main Content Layout */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 bg-white">
        
        {/* Left Side: Overview and Day-by-Day Timeline */}
        <div className="lg:col-span-8 space-y-16" id="itinerary-details">
          {!theme ? (
            <>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
                  {lang === "FR" ? "Aperçu de l'Itinéraire" : "Trip Overview"}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-zinc-600 font-light">
                  {translate(itinerary.overview, lang)}
                </p>
                <a 
                  href="#booking-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8B2635] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury hover:bg-[#72202b] shadow-md cursor-pointer mt-4"
                >
                  {lang === "FR" ? "Réserver ce voyage" : "Book this Journey"} &rarr;
                </a>
              </div>

              {/* Destination Showcase Image */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full rounded-2xl overflow-hidden border border-zinc-100 shadow-sm"
              >
                <img
                  src={itinerary.contentImage}
                  alt={translate(itinerary.title, lang)}
                  className="w-full h-[320px] md:h-[420px] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </motion.div>
            </>
          ) : null}

          {/* Day plans */}
          <div className="space-y-10">
            <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
              {lang === "FR" ? "Programme Jour par Jour" : "Day-by-Day Journey"}
            </h3>
            
            <div className="relative border-l border-zinc-200 pl-6 md:pl-10 ml-4 space-y-12">
              {itinerary.timeline.map((item, idx) => (
                <motion.div 
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-gold group-hover:bg-brand-gold transition-colors duration-300 z-10" />
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase font-semibold">
                      {lang === "FR" ? `JOUR ${item.day}` : `DAY ${item.day}`}
                    </span>
                    <h4 className="font-serif text-lg md:text-xl text-zinc-800 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                      {translate(item.title, lang)}
                    </h4>
                    <p className="text-[12px] md:text-[13px] leading-relaxed text-zinc-500 font-light pt-1">
                      {translate(item.desc, lang)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-10 border-t border-zinc-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{lang === "FR" ? "Ce qui est compris" : "What's Included"}</span>
                </h4>
                <ul className="space-y-3 pl-1">
                  {translate(itinerary.inclusions, lang).map((item, idx) => (
                    <li key={idx} className="text-zinc-600 text-[13px] md:text-[14px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl md:text-2xl text-red-600 flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full border border-red-400 flex items-center justify-center text-[10px] text-red-500 font-bold shrink-0">✕</span>
                  <span>{lang === "FR" ? "Non inclus" : "Not Included"}</span>
                </h4>
                <ul className="space-y-3 pl-1">
                  {translate(itinerary.exclusions, lang).map((item, idx) => (
                    <li key={idx} className="text-zinc-700 text-[13px] md:text-[14px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="text-zinc-400 mt-1 text-sm">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Premium Options */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 pt-10 border-t border-zinc-100"
          >
            <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
              <span className="bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded">$$$</span>
              <span>{lang === "FR" ? "Options à la carte" : "A La Carte Options"}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {translate(itinerary.options, lang).map((opt, idx) => (
                <div key={idx} className="p-5 bg-zinc-50/50 border border-zinc-200/60 rounded-2xl flex flex-col justify-between hover:border-brand-gold/40 transition-luxury duration-300">
                  <span className="text-zinc-800 text-[13px] font-medium leading-snug">{opt.name}</span>
                  <span className="text-brand-gold font-mono text-xs font-semibold mt-3 tabular-nums">{opt.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Accommodations */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-10 border-t border-zinc-100"
          >
            <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
              <Hotel className="w-5 h-5 text-brand-gold shrink-0" />
              <span>{lang === "FR" ? "Hébergements d'Exception" : "Featured Accommodations"}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itinerary.hotels.map((hotel, idx) => (
                <div key={idx} className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden hover:shadow-md transition-luxury duration-300 flex flex-col h-full">
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-900 font-serif text-[16px] font-bold leading-tight">{hotel.name}</span>
                        <div className="flex items-center gap-0.5 text-brand-gold text-[11px]">
                          {"★".repeat(hotel.stars)}
                        </div>
                      </div>
                      <p className="text-zinc-500 text-[13px] leading-relaxed font-light">
                        {translate(hotel.desc, lang)}
                      </p>
                    </div>
                    {/* Render link only if it is not '#' and not empty */}
                    {hotel.link && hotel.link !== "#" && (
                      <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-zinc-950 font-mono text-[9px] tracking-widest uppercase inline-flex items-center gap-1.5 transition-colors pt-2">
                        <span>{lang === "FR" ? "DÉCOUVRIR LE SITE" : "VIEW PROPERTY"}</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center pt-8 border-t border-zinc-100"
          >
            <a 
              href="#booking-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B2635] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-10 py-5 transition-luxury hover:bg-[#72202b] shadow-md cursor-pointer"
            >
              {lang === "FR" ? "RÉSERVER VOTRE PASSAGE" : "RESERVE YOUR JOURNEY"} &rarr;
            </a>
          </motion.div>

        </div>

        {/* Right Side: Video + Booking Panel */}
        <div className="lg:col-span-4 space-y-6">

          {/* Video Block — only for Marrakech & Sahara Expedition (ID 1) */}
          {itinerary.id === 1 && (
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-200/60 shadow-md bg-black">
              <video
                src="https://v1.pinimg.com/videos/iht/expMp4/81/24/b8/8124b8c7cd11c22123a7b75cfabf32fc_720w.mp4"
                className="w-full h-auto block bg-black"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          )}

          {/* Contact Form Block */}
          <motion.div 
            id="booking-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-50/50 p-6 md:p-8 border border-zinc-200/80 shadow-md rounded-[1.5rem] relative overflow-hidden lg:sticky lg:top-28"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="text-center md:text-left border-b border-zinc-200/60 pb-4">
                  <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase block mb-1">
                    {lang === "FR" ? "Frais de Voyage Estimés" : "Estimated Trip Cost"}
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-3xl font-bold text-zinc-900 font-serif tabular-nums">{itinerary.cost} <span className="text-[10px] font-mono text-zinc-400">CAD / pers.</span></h3>
                    <span className="text-[9px] font-mono text-[#faf9f5] uppercase bg-[#8B2635] px-2 py-0.5 rounded shadow-sm">
                      {lang === "FR" ? "Haut de Gamme" : "All Inclusive"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Votre nom" : "Your name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Sterling Hunt"
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Votre adresse courriel" : "Your email address"}
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="e.g. sterling@portfolio.com"
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500 text-wrap leading-tight">
                      {lang === "FR" ? "Vos souhaits particuliers, besoins alimentaires ou occasions spéciales ?" : "Any special wishes, dietary needs, or occasions we should know about?"}
                    </label>
                    <textarea
                      rows={4}
                      value={bookingMessage}
                      onChange={(e) => setBookingMessage(e.target.value)}
                      placeholder={lang === "FR" ? "Ex. Régimes alimentaires, hélicoptère privé..." : "e.g. Jet charter transfers, close protection, dietaries..."}
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Travelling party (Passengers) */}
                <div className="bg-white border border-zinc-200/80 rounded-2xl px-5 py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-brand-gold font-bold">
                      {lang === "FR" ? "Groupe de voyage" : "Travelling party"}
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updatePassengerCount(-1)}
                        className="w-7 h-7 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 font-bold text-sm transition-colors cursor-pointer"
                      >−</button>
                      <span className="text-[14px] font-bold text-zinc-900 font-heading tabular-nums w-5 text-center">{passengerCount}</span>
                      <button
                        type="button"
                        onClick={() => updatePassengerCount(1)}
                        className="w-7 h-7 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 font-bold text-sm transition-colors cursor-pointer"
                      >+</button>
                    </div>
                  </div>

                  {/* Per-passenger age inputs */}
                  <div className="grid grid-cols-2 gap-2">
                    {passengerAges.map((age, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider">
                          {lang === "FR" ? `Passager ${idx + 1}` : `Passenger ${idx + 1}`}
                        </span>
                        <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 rounded-lg px-2.5 py-1.5">
                          <input
                            type="number"
                            min={0}
                            max={120}
                            value={age === 0 ? "" : age}
                            onChange={(e) => updatePassengerAge(idx, parseInt(e.target.value) || 0)}
                            placeholder="Age"
                            className="w-full bg-transparent text-xs text-zinc-800 placeholder-zinc-300 focus:outline-none tabular-nums"
                          />
                          <span className="text-[9px] text-zinc-400 font-mono shrink-0">{lang === "FR" ? "ans" : "yrs"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nights Duration (Preferred duration) */}
                <div className="bg-white border border-zinc-200/80 rounded-2xl px-5 py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-brand-gold font-bold">
                      {lang === "FR" ? "Durée préférée" : "Preferred duration"}
                    </label>
                    <span className="text-[13px] font-bold text-zinc-900 font-heading tabular-nums">
                      {nights} {lang === "FR" ? "Nuits" : "Nights"}
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range"
                      min={5}
                      max={30}
                      step={1}
                      value={nights}
                      onChange={(e) => setNights(parseInt(e.target.value, 10))}
                      className="w-full h-[3px] appearance-none bg-zinc-200 rounded-full cursor-pointer accent-zinc-900"
                      style={{
                        background: `linear-gradient(to right, #1a1a1a ${((nights - 5) / 25) * 100}%, #e4e4e7 ${((nights - 5) / 25) * 100}%)`
                      }}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-[9px] font-mono text-zinc-400">5</span>
                      <span className="text-[9px] font-mono text-zinc-400">15</span>
                      <span className="text-[9px] font-mono text-zinc-400">30</span>
                    </div>
                  </div>
                </div>

                {/* Submit and Reassurance */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2 text-[10px] text-zinc-500 font-mono leading-relaxed">
                    <Shield className="text-brand-gold w-4 h-4 shrink-0 mt-0.5" />
                    <span>{lang === "FR" ? "Aucun paiement n'est effectué à ce stade. Notre conciergerie vous contactera dans les 24 heures pour commencer à concevoir votre passage." : "No payment is taken at this stage. Our concierge will contact you within 24 hours to begin crafting your passage."}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-luxury hover:-translate-y-0.5 border border-[#8B2635] shadow-md cursor-pointer"
                  >
                    {lang === "FR" ? "RÉSERVER LE SANCTUAIRE" : "RESERVE SANCTUARY"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                  <CheckCircle className="text-brand-gold w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-brand-gold font-mono text-[10px] tracking-[0.25em] uppercase block">
                    {lang === "FR" ? "Transmission Chiffrée" : "Transmission Secured"}
                  </span>
                  <h3 className="font-serif text-2xl text-zinc-900 tracking-wide uppercase">
                    {lang === "FR" ? "Réservation Initiée" : "Reservation Active"}
                  </h3>
                </div>
                <p className="text-zinc-600 text-xs leading-relaxed max-w-[240px] mx-auto font-light">
                  {lang === "FR"
                    ? `Merci, ${bookingName}. Votre conseiller en voyages prépare les protocoles pour ${itinerary.title.FR}.`
                    : `Thank you, ${bookingName}. Your dedicated travel architect is initiating protocols for ${itinerary.title.EN}.`
                  }
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-zinc-200 bg-white hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-700 font-mono text-[9px] tracking-[0.15em] uppercase px-6 py-2.5 transition-luxury rounded-full shadow-sm"
                >
                  {lang === "FR" ? "Modifier la requête" : "Modify inquiry"}
                </button>
              </div>
            )}

            {/* Conditions Disclaimer */}
            <div className="mt-8 pt-6 border-t border-zinc-200/60 text-center select-none">
              <h4 className="font-serif text-sm font-bold text-zinc-900 mb-3 uppercase tracking-wider">
                {lang === "FR" ? "Conditions" : "Terms & Conditions"}
              </h4>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 italic font-light mb-4">
                {lang === "FR" 
                  ? "Tarif calculé le 1 juin 2026, pour un séjour du 13 au 20 janvier 2027 (à destination). Les dates et composantes sont modifiables à votre guise. Les hôtels et activités proposés le sont à titre indicatif et peuvent être modifiés selon vos besoins."
                  : "Rate calculated on June 1, 2026, for a stay from January 13 to 20, 2027 (at destination). Dates and components can be modified at your convenience. Proposed hotels and activities are indicative and can be modified according to your needs."
                }
              </p>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 italic font-light mb-4">
                {lang === "FR"
                  ? "Les tarifs sont sujets à changement selon la tarification dynamique du jour. Aucune place n'est réservée d'avance et les disponibilités sont sujettes à changement selon les fournisseurs."
                  : "Rates are subject to change based on daily dynamic pricing. No spots are reserved in advance and availability is subject to change by suppliers."
                }
              </p>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 font-light">
                {lang === "FR" ? (
                  <>
                    Consultez nos conditions complètes au{" "}
                    <Link href="/conditions" className="text-brand-gold hover:underline font-semibold">
                      lien suivant
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Consult our full conditions at the{" "}
                    <Link href="/conditions" className="text-brand-gold hover:underline font-semibold">
                      following link
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
