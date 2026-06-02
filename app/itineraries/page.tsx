'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang } from "../context/lang-context";

interface TourCard {
  id: number;
  image: string;
  category: { FR: string; EN: string };
  badge: { FR: string; EN: string };
  title: { FR: string; EN: string };
  description: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  flight: { FR: string; EN: string };
  meals: { FR: string; EN: string };
  oldPrice: string;
  price: string;
  tag: string;
  promoText?: { FR: string; EN: string };
  iconType: "mountain" | "water" | "lighthouse";
}

const toursList: TourCard[] = [
  {
    id: 1,
    image: "/images/moroco.webp",
    category: {
      FR: "désert du sahara - hébergement de riad - survol en hélicoptère",
      EN: "sahara desert - riad buyouts - helicopter transfers"
    },
    title: {
      FR: "Expédition Marrakech & Sahara",
      EN: "Marrakech & Sahara Expedition"
    },
    description: {
      FR: "Séjournez dans un riad privé, explorez le Sahara en hélicoptère et profitez d'une nuit exclusive sous les étoiles.",
      EN: "Stay in an exclusive private riad, fly over the Atlas in a helicopter, and camp under the starry desert sky."
    },
    duration: {
      FR: "8 jours / 7 nuits",
      EN: "8 days / 7 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Pension complète",
      EN: "Full board"
    },
    oldPrice: "C$ 7,400",
    price: "C$ 6,200",
    tag: "SAVE C$ 1,200",
    badge: {
      FR: "SIGNATURE",
      EN: "SIGNATURE"
    },
    promoText: {
      FR: "Réservez avant le 15 août 2026 et économisez 1 200 $ / pers.",
      EN: "Book before August 15, 2026 and save 1,200 $ / pers."
    },
    iconType: "mountain"
  },
  {
    id: 2,
    image: "/images/gulf-desert-sunset.png",
    category: {
      FR: "safari de dunes - suites burj khalifa - yacht privé",
      EN: "sand dune safari - burj khalifa suites - private yacht charter"
    },
    title: {
      FR: "Oasis Moderne de Dubaï & Abou Dabi",
      EN: "Dubai & Abu Dhabi Modern Oasis"
    },
    description: {
      FR: "Découvrez le summum du luxe moderne : suites exclusives à Dubaï, et dîners gastronomiques dans le désert.",
      EN: "Experience the pinnacle of modern luxury: exclusive suites in Dubai, and fine dining under the dunes of Abu Dhabi."
    },
    duration: {
      FR: "10 jours / 9 nuits",
      EN: "10 days / 9 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Dîners gourmands",
      EN: "Gourmet dinners"
    },
    oldPrice: "C$ 9,450",
    price: "C$ 8,250",
    tag: "SAVE C$ 1,200",
    badge: {
      FR: "EXCLUSIVE",
      EN: "EXCLUSIVE"
    },
    promoText: {
      FR: "Réservez avant le 20 sept 2026 et économisez 1 200 $ / pers.",
      EN: "Book before Sept 20, 2026 and save 1,200 $ / pers."
    },
    iconType: "water"
  },
  {
    id: 3,
    image: "/images/oman-wadi-canyon.png",
    category: {
      FR: "wadis de montagne - forts médiévaux - fjords de musandam",
      EN: "mountain wadis - medieval forts - musandam fjord cruise"
    },
    title: {
      FR: "Héritage du Sultanat d'Oman",
      EN: "Sultanate of Oman Heritage"
    },
    description: {
      FR: "Explorez les canyons du Jebel Akhdar, logez dans des forts convertis et naviguez dans les fjords en yacht privé.",
      EN: "Explore the canyons of Jebel Akhdar, lodge in historic converted forts, and cruise the fjords by private yacht."
    },
    duration: {
      FR: "12 jours / 11 nuits",
      EN: "12 days / 11 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Pension complète",
      EN: "Full board"
    },
    oldPrice: "C$ 8,250",
    price: "C$ 7,400",
    tag: "SAVE C$ 850",
    badge: {
      FR: "SOVEREIGN",
      EN: "SOVEREIGN"
    },
    promoText: {
      FR: "Réservez avant le 10 oct 2026 et économisez 850 $ / pers.",
      EN: "Book before Oct 10, 2026 and save 850 $ / pers."
    },
    iconType: "lighthouse"
  },
  {
    id: 4,
    image: "/images/saudi-alula-canyon.png",
    category: {
      FR: "tombes de hegra - glamping de prestige - yacht mer rouge",
      EN: "hegra tombs - luxury desert glamping - red sea yacht"
    },
    title: {
      FR: "Merveilles d'AlUla & Mer Rouge",
      EN: "AlUla & Red Sea Wonders"
    },
    description: {
      FR: "Découvrez les anciennes tombes de Hegra, profitez d'un pavillon de miroir de luxe et naviguez sur la Mer Rouge.",
      EN: "Explore the ancient sandstone tombs of Hegra, check-in to a luxury mirrored canyon villa, and cruise the Red Sea."
    },
    duration: {
      FR: "14 jours / 13 nuits",
      EN: "14 days / 13 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Majordome privé",
      EN: "Private butler"
    },
    oldPrice: "C$ 14,250",
    price: "C$ 12,450",
    tag: "SAVE C$ 1,800",
    badge: {
      FR: "SIGNATURE",
      EN: "SIGNATURE"
    },
    promoText: {
      FR: "Réservez avant le 30 nov 2026 et économisez 1 800 $ / pers.",
      EN: "Book before Nov 30, 2026 and save 1,800 $ / pers."
    },
    iconType: "mountain"
  }
];

const t = {
  book: {
    FR: "DÉCOUVRIR",
    EN: "DISCOVER"
  }
};

export default function ItinerariesPage() {
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
                  alt={tour.title[lang]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                
                  {/* Promo Badge */}
                  <div className="absolute top-5 left-5 bg-[#8B2635] text-[#faf9f5] font-mono text-[9px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full shadow-md">
                    {tour.tag}
                  </div>

                  <div className={`absolute top-5 right-5 px-3 py-1.5 rounded-full font-mono text-[8px] tracking-wider uppercase font-semibold ${
                    tour.badge.EN === "EXCLUSIVE"
                      ? "bg-[#8B2635] text-[#faf9f5] shadow-md"
                      : "glass-tag text-white"
                  }`}>
                    {tour.badge[lang]}
                  </div>

                {/* Booking Deadline Banner */}
                {tour.promoText && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#8B2635]/90 backdrop-blur-xs text-[#faf9f5] text-[8px] font-mono py-1.5 px-3 tracking-wider text-center uppercase font-bold">
                    {tour.promoText[lang]}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] text-zinc-400 font-mono tracking-wider">
                    <span>{tour.duration[lang]}</span>
                    <span>•</span>
                    <span>{tour.flight[lang]}</span>
                    <span>•</span>
                    <span>{tour.meals[lang]}</span>
                  </div>

                  <h3 className="font-serif text-base md:text-lg font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {tour.title[lang]}
                  </h3>

                  <p className="text-[12px] leading-relaxed text-zinc-500 font-light pt-1 border-t border-zinc-100 line-clamp-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-gold block mb-1">
                      {lang === "FR" ? "INCLUSIONS EXCLUSIVES" : "EXCLUSIVE INCLUSIONS"}
                    </span>
                    {tour.category[lang]}
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
                    {t.book[lang]}
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
