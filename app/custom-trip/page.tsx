'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Shield, Lock, CreditCard, Send, CheckCircle2 } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang } from "../context/lang-context";

// ~20 Places/Experiences in the Gulf & Morocco
const DESTINATIONS = [
  { id: "marrakech", title: { EN: "Marrakech Medina", FR: "Médina de Marrakech" }, region: "Morocco" },
  { id: "sahara", title: { EN: "Sahara Dunes Glamping", FR: "Glamping Sahara Dunes" }, region: "Morocco" },
  { id: "atlas", title: { EN: "High Atlas Valleys", FR: "Vallées du Haut Atlas" }, region: "Morocco" },
  { id: "fes", title: { EN: "Fes El Bali", FR: "Fès El Bali" }, region: "Morocco" },
  { id: "dubai_marina", title: { EN: "Dubai Marina Penthouse", FR: "Marina Penthouse de Dubaï" }, region: "UAE" },
  { id: "dubai_safari", title: { EN: "Dubai Red Dunes Safari", FR: "Safari Dunes Rouges Dubaï" }, region: "UAE" },
  { id: "abu_dhabi_mosque", title: { EN: "Grand Mosque Private Tour", FR: "Grande Mosquée Abou Dabi" }, region: "UAE" },
  { id: "yas_links", title: { EN: "Yas Links Club", FR: "Yas Links Club" }, region: "UAE" },
  { id: "oman_canyons", title: { EN: "Jebel Akhdar Canyons", FR: "Canyons du Jebel Akhdar" }, region: "Oman" },
  { id: "oman_wadi", title: { EN: "Wadi Bani Khalid pools", FR: "Piscines du Wadi Bani Khalid" }, region: "Oman" },
  { id: "musandam", title: { EN: "Musandam Fjord Sailing", FR: "Voile aux Fjords de Musandam" }, region: "Oman" },
  { id: "alula_hegra", title: { EN: "AlUla Hegra Tombs", FR: "Tombes de Hegra à AlUla" }, region: "Saudi Arabia" },
  { id: "red_sea", title: { EN: "Red Sea Private Islands", FR: "Îles Privées Mer Rouge" }, region: "Saudi Arabia" },
  { id: "riyadh_diriyah", title: { EN: "Diriyah Historic Oasis", FR: "Oasis Historique de Diriyah" }, region: "Saudi Arabia" }
];

// Activities / Add-ons
const ACTIVITIES = [
  { id: "heli", title: { EN: "Private Helicopter Charter", FR: "Vol Privé en Hélicoptère" }, standard: true, premiumOnly: false, cost: 2400 },
  { id: "chef", title: { EN: "Michelin Private Chef", FR: "Chef Privé Étoilé Michelin" }, standard: true, premiumOnly: false, cost: 800 },
  { id: "yacht", title: { EN: "Luxury Superyacht (4 Hours)", FR: "Superyacht de Luxe (4h)" }, standard: true, premiumOnly: false, cost: 4800 },
  { id: "historian", title: { EN: "Private Historian Guide", FR: "Guide Historien Privé" }, standard: true, premiumOnly: false, cost: 500 },
  { id: "spa", title: { EN: "3-Hour Spa Hammam Buyout", FR: "Spa Hammam Privatisé (3h)" }, standard: true, premiumOnly: false, cost: 1200 },
  { id: "jet", title: { EN: "Gulfstream G650 Transit", FR: "Vol Privé Gulfstream G650" }, standard: false, premiumOnly: true, cost: 24000 },
  { id: "security", title: { EN: "Close Protection Security Detail", FR: "Sécurité & Protection Rapprochée" }, standard: false, premiumOnly: true, cost: 3500 },
  { id: "buyout", title: { EN: "Private Oasis Resort Buyout", FR: "Privatisation Complète d'Oasis" }, standard: false, premiumOnly: true, cost: 15000 }
];

const t = {
  headerWelcome: {
    EN: "ORCHESTRATE YOUR PASSAGE",
    FR: "ORCHESTREZ VOTRE PASSAGE"
  },
  headerTitle: {
    EN: "Bespoke Custom Trip",
    FR: "Voyage Sur Mesure"
  },
  standardTab: {
    EN: "Bespoke Passage",
    FR: "Passage Sur Mesure"
  },
  premiumTab: {
    EN: "Sovereign Prestige",
    FR: "Souverain de Prestige"
  },
  stepDestinations: {
    EN: "1. Select Destinations / Experiences",
    FR: "1. Sélectionnez les Destinations / Expériences"
  },
  stepActivities: {
    EN: "2. Premium Activities & Charters",
    FR: "2. Activités & Chartes de Prestige"
  },
  stepDuration: {
    EN: "3. Duration & Escrow Parameters",
    FR: "3. Paramètres de Durée & Escrow"
  },
  stepContact: {
    EN: "4. Contact & Selected Itineraries",
    FR: "4. Contact & Itinéraires Sélectionnés"
  },
  estimateCost: {
    EN: "Estimated Package Value",
    FR: "Valeur Estimée du Package"
  },
  estimateCostVal: {
    EN: "On Request",
    FR: "Sur demande"
  },
  submitInquiry: {
    EN: "Transmit Secured Inquiry",
    FR: "Transmettre l'Enquête Sécurisée"
  },
  moroccoLabel: { EN: "Morocco", FR: "Maroc" },
  uaeLabel: { EN: "United Arab Emirates", FR: "Émirats Arabes Unis" },
  omanLabel: { EN: "Oman", FR: "Oman" },
  saudiLabel: { EN: "Saudi Arabia", FR: "Arabie Saoudite" }
};

export default function CustomTripBuilder() {
  const { lang } = useLang();
  
  // Custom states
  const [isPremium, setIsPremium] = useState(false);
  const [selectedDests, setSelectedDests] = useState<string[]>([]);
  const [selectedActs, setSelectedActs] = useState<string[]>([]);
  const [nights, setNights] = useState(7);
  
  // Contact details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");

  // Passenger details
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

  // Submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Toggle handlers
  const toggleDest = (id: string) => {
    setSelectedDests(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleAct = (id: string) => {
    setSelectedActs(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Cost calculations in CAD
  const calculateTotalCost = () => {
    const destsCount = selectedDests.length;
    const baseCostPerNight = isPremium ? 4500 : 1200;
    const destCost = destsCount * 800; // C$800 premium per destination
    
    // Sum activities
    const actCost = selectedActs.reduce((acc, actId) => {
      const act = ACTIVITIES.find(a => a.id === actId);
      return acc + (act ? act.cost : 0);
    }, 0);

    return (baseCostPerNight * nights) + destCost + actCost;
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Compile payload
    const payload = {
      isPremium,
      destinations: selectedDests,
      activities: selectedActs,
      nights,
      contact: { fullName, email, phone },
      payment: cardNumber ? { cardNumber: "**** **** **** " + cardNumber.slice(-4), expiry: cardExpiry } : null,
      totalCostCAD: calculateTotalCost()
    };

    try {
      // API request to trigger simulated/SMTP email
      const response = await fetch("/api/send-custom-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        // Confetti burst
        if (typeof window !== "undefined" && (window as any).confetti) {
          (window as any).confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#FFFFFF', '#FFDF73']
          });
        }
      }
    } catch (err) {
      console.error("API error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen font-body antialiased transition-colors duration-1000 ${isPremium ? 'bg-[#060606] text-white' : 'bg-white text-zinc-900'}`}>
      <Navbar />

      {/* Parallax Header */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        {/* Background image */}
        <img
          src="/images/custom_trip_hero_bg.png"
          alt="Bespoke Custom Trip"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className={`absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none transition-colors duration-1000 ${isPremium ? 'from-[#060606]' : 'from-white'}`} />
        {/* Extra top darkening so navbar text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className={`inline-flex items-center space-x-2 text-brand-gold font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold ${isPremium ? 'hover:text-white' : 'hover:text-zinc-900'}`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {t.headerWelcome[lang]}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold">
              {t.headerTitle[lang]}
            </h1>
          </div>
        </div>
      </section>


      {/* Main Form Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto z-20 relative">
        
        {/* Step Toggler (Standard vs. Premium) */}
        <div className="flex justify-center mb-16">
          <div className={`border p-1.5 rounded-full flex items-center relative overflow-hidden max-w-sm w-full transition-colors duration-1000 ${isPremium ? 'bg-zinc-900/60 border-white/10' : 'bg-zinc-100 border-zinc-200'}`}>
            <button
              onClick={() => setIsPremium(false)}
              className={`flex-1 text-center py-3 text-[11px] font-mono tracking-widest uppercase font-bold rounded-full transition-all duration-500 cursor-pointer ${!isPremium ? 'bg-white text-zinc-900 shadow-sm' : 'text-white/60 hover:text-white'}`}
            >
              {t.standardTab[lang]}
            </button>
            <button
              onClick={() => setIsPremium(true)}
              className={`flex-1 text-center py-3 text-[11px] font-mono tracking-widest uppercase font-bold rounded-full transition-all duration-500 cursor-pointer ${isPremium ? 'bg-white text-zinc-900 shadow-sm' : isPremium ? 'text-white/60 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              {t.premiumTab[lang]}
            </button>
          </div>
        </div>

        {/* Form Wizard */}
        {!isSuccess ? (
          <form onSubmit={handleCustomSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Steps Panel (Span 8) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Step 1: Destinations */}
              <div className="space-y-6">
                <h3 className={`font-serif text-xl md:text-2xl border-b pb-4 transition-colors duration-1000 ${isPremium ? 'text-white border-white/10' : 'text-zinc-900 border-zinc-200'}`}>
                  {t.stepDestinations[lang]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DESTINATIONS.map((dest) => {
                    const active = selectedDests.includes(dest.id);
                    return (
                      <div
                        key={dest.id}
                        onClick={() => toggleDest(dest.id)}
                        className={`p-4 border rounded-[1.2rem] flex items-center justify-between cursor-pointer transition-luxury ${
                          active
                            ? isPremium
                              ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                              : 'border-zinc-800 bg-zinc-800/5'
                            : isPremium
                              ? 'border-white/10 bg-zinc-950/20 hover:border-white/35'
                              : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <span className={`text-[9px] font-mono uppercase tracking-wider transition-colors duration-1000 ${isPremium ? 'text-white/40' : 'text-zinc-400'}`}>
                            {dest.region}
                          </span>
                          <h4 className={`text-xs md:text-sm font-semibold transition-colors duration-1000 ${isPremium ? 'text-white' : 'text-zinc-800'}`}>
                            {dest.title[lang]}
                          </h4>
                        </div>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 ${active ? 'border-brand-gold bg-brand-gold text-black' : isPremium ? 'border-white/20 bg-transparent' : 'border-zinc-200 bg-transparent'}`}>
                          {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Activities */}
              <div className="space-y-6">
                <h3 className={`font-serif text-xl md:text-2xl border-b pb-4 transition-colors duration-1000 ${isPremium ? 'text-white border-white/10' : 'text-zinc-900 border-zinc-200'}`}>
                  {t.stepActivities[lang]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ACTIVITIES.map((act) => {
                    const active = selectedActs.includes(act.id);
                    const disabled = act.premiumOnly && !isPremium;
                    return (
                      <div
                        key={act.id}
                        onClick={() => !disabled && toggleAct(act.id)}
                        className={`p-4 border rounded-[1.2rem] flex items-center justify-between transition-luxury ${
                          disabled
                            ? 'opacity-30 border-white/5 bg-transparent cursor-not-allowed'
                            : active
                              ? isPremium
                                ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.1)] cursor-pointer'
                                : 'border-zinc-800 bg-zinc-800/5 cursor-pointer'
                              : isPremium
                                ? 'border-white/10 bg-zinc-950/20 hover:border-white/35 cursor-pointer'
                                : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300 cursor-pointer'
                        }`}
                      >
                        <div className="space-y-1 pr-4">
                          {act.premiumOnly && (
                            <span className="text-[8px] font-mono uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/25 px-1.5 py-0.5 rounded">
                              {lang === "FR" ? "PRESTIGE UNIQUEMENT" : "PREMIUM ONLY"}
                            </span>
                          )}
                          <h4 className={`text-xs md:text-sm font-semibold pt-1 transition-colors duration-1000 ${isPremium ? 'text-white' : 'text-zinc-800'}`}>
                            {act.title[lang]}
                          </h4>
                        </div>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 ${active ? 'border-brand-gold bg-brand-gold text-black' : isPremium ? 'border-white/20 bg-transparent' : 'border-zinc-200 bg-transparent'}`}>
                          {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Duration & Budget */}
              <div className="space-y-6">
                <h3 className={`font-serif text-xl md:text-2xl border-b pb-4 transition-colors duration-1000 ${isPremium ? 'text-white border-white/10' : 'text-zinc-900 border-zinc-200'}`}>
                  {t.stepDuration[lang]}
                </h3>
                <div className={`p-6 md:p-8 border rounded-[1.5rem] space-y-6 transition-colors duration-1000 ${isPremium ? 'bg-zinc-950/50 border-white/10' : 'bg-zinc-50/50 border-zinc-200'}`}>
                  <div className="space-y-2">
                    <div className={`flex justify-between items-baseline font-mono text-xs transition-colors duration-1000 ${isPremium ? 'text-white/60' : 'text-zinc-500'}`}>
                      <span>{lang === "FR" ? "DURÉE DES NUITS" : "NIGHTS DURATION"}</span>
                      <span className={`text-lg font-bold transition-colors duration-1000 ${isPremium ? 'text-white' : 'text-zinc-900'}`}>{nights} {lang === "FR" ? "Nuits" : "Nights"}</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={30}
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    <div className={`flex justify-between font-mono text-[9px] transition-colors duration-1000 ${isPremium ? 'text-white/30' : 'text-zinc-300'}`}>
                      <span>5</span>
                      <span>15</span>
                      <span>30</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Booking Sidebar Panel (Span 4) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
              
              <div className={`p-6 md:p-8 border rounded-[1.5rem] relative overflow-hidden space-y-6 transition-colors duration-1000 ${isPremium ? 'bg-zinc-950/60 border-white/10 shadow-glass text-white' : 'bg-zinc-50/50 border-zinc-200 shadow-md text-zinc-900'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />
                
                <div className={`pb-4 space-y-1 border-b transition-colors duration-1000 ${isPremium ? 'border-white/5' : 'border-zinc-200'}`}>
                  <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase block">
                    {t.estimateCost[lang]}
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className={`text-2xl font-bold font-serif uppercase tracking-wide transition-colors duration-1000 ${isPremium ? 'text-brand-gold' : 'text-zinc-900'}`}>
                      {t.estimateCostVal[lang]}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className={`font-mono text-[10px] tracking-widest uppercase border-b pb-2 transition-colors duration-1000 ${isPremium ? 'border-white/5' : 'border-zinc-200'}`}>
                    {t.stepContact[lang]}
                  </h4>
                  
                  <div>
                    <label className={`block text-[9px] font-mono tracking-widest uppercase mb-1.5 transition-colors duration-1000 ${isPremium ? 'text-white/60' : 'text-zinc-500'}`}>
                      {lang === "FR" ? "Nom Complet" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sterling Hunt"
                      className={`w-full px-4 py-3 text-xs focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 ${isPremium ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-400'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[9px] font-mono tracking-widest uppercase mb-1.5 transition-colors duration-1000 ${isPremium ? 'text-white/60' : 'text-zinc-500'}`}>
                      {lang === "FR" ? "Adresse Courriel" : "Secure Email"}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sterling@portfolio.com"
                      className={`w-full px-4 py-3 text-xs focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 ${isPremium ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-400'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[9px] font-mono tracking-widest uppercase mb-1.5 transition-colors duration-1000 ${isPremium ? 'text-white/60' : 'text-zinc-500'}`}>
                      {lang === "FR" ? "Numéro de Téléphone" : "Secure Phone"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (514) 555-0199"
                      className={`w-full px-4 py-3 text-xs focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 ${isPremium ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-400'}`}
                    />
                  </div>

                  {/* Passenger Count & Ages */}
                  <div className={`pt-4 border-t space-y-3 transition-colors duration-1000 ${isPremium ? 'border-white/5' : 'border-zinc-200'}`}>
                    <div className="flex items-center justify-between">
                      <label className="text-[9px] font-mono tracking-widest uppercase text-brand-gold font-bold">
                        {lang === "FR" ? "PASSAGERS" : "PASSENGERS"}
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updatePassengerCount(-1)}
                          className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold text-sm transition-colors cursor-pointer ${
                            isPremium ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white' : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700'
                          }`}
                        >−</button>
                        <span className={`text-[14px] font-bold font-heading tabular-nums w-5 text-center ${isPremium ? 'text-white' : 'text-zinc-900'}`}>{passengerCount}</span>
                        <button
                          type="button"
                          onClick={() => updatePassengerCount(1)}
                          className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold text-sm transition-colors cursor-pointer ${
                            isPremium ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white' : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700'
                          }`}
                        >+</button>
                      </div>
                    </div>

                    {/* Per-passenger age inputs */}
                    <div className="grid grid-cols-2 gap-2">
                      {passengerAges.map((age, idx) => (
                        <div key={idx} className="flex flex-col gap-0.5">
                          <span className={`text-[8px] font-mono uppercase tracking-wider ${isPremium ? 'text-white/40' : 'text-zinc-400'}`}>
                            {lang === "FR" ? `Passager ${idx + 1}` : `Passenger ${idx + 1}`}
                          </span>
                          <div className={`flex items-center gap-1.5 border rounded-lg px-2.5 py-1.5 ${
                            isPremium ? 'bg-white/5 border-white/10' : 'bg-zinc-50 border-zinc-200'
                          }`}>
                            <input
                              type="number"
                              min={0}
                              max={120}
                              value={age === 0 ? "" : age}
                              onChange={(e) => updatePassengerAge(idx, parseInt(e.target.value) || 0)}
                              placeholder="Age"
                              className={`w-full bg-transparent text-xs focus:outline-none tabular-nums ${
                                isPremium ? 'text-white placeholder-white/20' : 'text-zinc-800 placeholder-zinc-300'
                              }`}
                            />
                            <span className={`text-[9px] font-mono shrink-0 ${isPremium ? 'text-white/30' : 'text-zinc-400'}`}>
                              {lang === "FR" ? "ans" : "yrs"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selected Itineraries / Experiences */}
                  {selectedDests.length > 0 && (
                    <div className={`pt-4 border-t space-y-2 transition-colors duration-1000 ${isPremium ? 'border-white/5' : 'border-zinc-200'}`}>
                      <label className={`block text-[9px] font-mono tracking-widest uppercase transition-colors duration-1000 ${isPremium ? 'text-white/60' : 'text-zinc-500'}`}>
                        {lang === "FR" ? "Destinations sélectionnées" : "Selected Itineraries"}
                      </label>
                      <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                        {selectedDests.map(id => {
                          const dest = DESTINATIONS.find(d => d.id === id);
                          return dest ? (
                            <span key={id} className={`text-[9px] font-medium border px-2.5 py-1 rounded-full transition-colors duration-1000 ${isPremium ? 'bg-white/5 border-white/10 text-white/80' : 'bg-zinc-100 border-zinc-200 text-zinc-700'}`}>
                              {dest.title[lang]}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Selected Activities */}
                  {selectedActs.length > 0 && (
                    <div className={`pt-4 border-t space-y-2 transition-colors duration-1000 ${isPremium ? 'border-white/5' : 'border-zinc-200'}`}>
                      <label className={`block text-[9px] font-mono tracking-widest uppercase transition-colors duration-1000 ${isPremium ? 'text-white/60' : 'text-zinc-500'}`}>
                        {lang === "FR" ? "Activités sélectionnées" : "Selected Activities"}
                      </label>
                      <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                        {selectedActs.map(id => {
                          const act = ACTIVITIES.find(a => a.id === id);
                          return act ? (
                            <span key={id} className={`text-[9px] font-medium border px-2.5 py-1 rounded-full transition-colors duration-1000 ${isPremium ? 'bg-brand-gold/10 border-brand-gold/25 text-brand-gold' : 'bg-brand-gold/15 border-brand-gold/30 text-brand-gold-dark'}`}>
                              {act.title[lang]}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-2">
                  <div className={`flex items-center space-x-2 text-[9px] font-mono transition-colors duration-1000 ${isPremium ? 'text-white/40' : 'text-zinc-500'}`}>
                    <Lock className="text-brand-gold w-3.5 h-3.5" />
                    <span>256-Bit Encrypted Concierge Channel</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-luxury hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${isPremium ? 'bg-white hover:bg-transparent text-zinc-950 hover:text-white border border-white' : 'bg-zinc-950 hover:bg-transparent text-white hover:text-zinc-950 border border-zinc-950'}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'TRANSMITTING...' : t.submitInquiry[lang]}</span>
                  </button>
                </div>

              </div>

            </div>

          </form>
        ) : (
          <div className={`text-center py-20 flex flex-col items-center justify-center space-y-6 max-w-lg mx-auto border p-12 rounded-[2rem] transition-colors duration-1000 ${isPremium ? 'bg-zinc-950/60 border-white/10 shadow-glass text-white' : 'bg-zinc-50/50 border-zinc-200 shadow-md text-zinc-900'}`}>
            <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
              <CheckCircle2 className="text-brand-gold w-9 h-9" />
            </div>
            <div className="space-y-2">
              <span className="text-brand-gold font-mono text-[10px] tracking-[0.3em] uppercase block">
                {lang === "FR" ? "Transmission Sécurisée" : "PGP Transmission Secured"}
              </span>
              <h2 className={`font-serif text-3xl tracking-wide uppercase font-bold transition-colors duration-1000 ${isPremium ? 'text-white' : 'text-zinc-900'}`}>
                {lang === "FR" ? "Demande Enregistrée" : "Inquiry Active"}
              </h2>
            </div>
            <p className={`text-xs md:text-sm leading-relaxed font-light transition-colors duration-1000 ${isPremium ? 'text-white/60' : 'text-zinc-600'}`}>
              {lang === "FR"
                ? `Merci, ${fullName}. Les détails de votre passage de prestige de ${nights} nuits ont été encryptés et envoyés. Votre architecte de voyage exclusif vous répondra dans 15 minutes.`
                : `Thank you, ${fullName}. Your customized package parameters for ${nights} nights are encrypted and transmitted. Your private travel architect will verify booking conditions within 15 minutes.`
              }
            </p>
            
            {/* Package Recap summary */}
            <div className={`w-full text-left p-6 rounded-2xl border transition-colors duration-1000 ${isPremium ? 'bg-white/5 border-white/10 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'} space-y-4`}>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-gold">
                {lang === "FR" ? "Itinéraire Personnalisé" : "Custom Package Recap"}
              </h4>
              <div className="text-[11px] font-mono space-y-1">
                <div>
                  <span className={`${isPremium ? 'text-white/40' : 'text-zinc-400'}`}>{lang === "FR" ? "Durée:" : "Duration:"}</span>{" "}
                  <span className="font-bold text-brand-gold">{nights} {lang === "FR" ? "Nuits" : "Nights"}</span>
                </div>
                <div>
                  <span className={`${isPremium ? 'text-white/40' : 'text-zinc-400'}`}>{lang === "FR" ? "Catégorie:" : "Tier:"}</span>{" "}
                  <span className="font-bold text-brand-gold">{isPremium ? (lang === "FR" ? "Souverain de Prestige" : "Sovereign Prestige") : (lang === "FR" ? "Passage Sur Mesure" : "Bespoke Passage")}</span>
                </div>
              </div>
              
              {selectedDests.length > 0 && (
                <div className="space-y-1">
                  <span className={`block text-[10px] font-mono uppercase ${isPremium ? 'text-white/40' : 'text-zinc-400'}`}>{lang === "FR" ? "Destinations:" : "Selected Itineraries:"}</span>
                  <ul className={`list-disc pl-4 text-xs font-light space-y-1 ${isPremium ? 'text-white/80' : 'text-zinc-700'}`}>
                    {selectedDests.map(id => {
                      const dest = DESTINATIONS.find(d => d.id === id);
                      return dest ? <li key={id}>{dest.title[lang]}</li> : null;
                    })}
                  </ul>
                </div>
              )}

              {selectedActs.length > 0 && (
                <div className="space-y-1">
                  <span className={`block text-[10px] font-mono uppercase ${isPremium ? 'text-white/40' : 'text-zinc-400'}`}>{lang === "FR" ? "Activités de Prestige:" : "Activities selected:"}</span>
                  <ul className={`list-disc pl-4 text-xs font-light space-y-1 ${isPremium ? 'text-white/80' : 'text-zinc-700'}`}>
                    {selectedActs.map(id => {
                      const act = ACTIVITIES.find(a => a.id === id);
                      return act ? <li key={id}>{act.title[lang]}</li> : null;
                    })}
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                setSelectedDests([]);
                setSelectedActs([]);
                setFullName("");
                setEmail("");
                setPhone("");
                setCardNumber("");
                setCardExpiry("");
              }}
              className={`border font-mono text-[9px] tracking-[0.15em] uppercase px-8 py-3 transition-all duration-500 rounded-full ${isPremium ? 'border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white text-white' : 'border-zinc-200 bg-white hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-700'}`}
            >
              {lang === "FR" ? "Créer un autre itinéraire" : "Build another passage"}
            </button>
          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}
