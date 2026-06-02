'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, MapPin } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang } from "../context/lang-context";

interface TourCard {
  id: number;
  image: string;
  category: { FR: string; EN: string };
  title: { FR: string; EN: string };
  description: { FR: string; EN: string };
  days: { FR: string; EN: string };
  people: { FR: string; EN: string };
  oldPrice: string;
  price: string;
  iconType: "mountain" | "water" | "lighthouse";
}

const toursList: TourCard[] = [
  {
    id: 1,
    image: "/images/morocco-sahara-dunes.png",
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
    days: {
      FR: "8 jours",
      EN: "8 days"
    },
    people: {
      FR: "2 personnes",
      EN: "2 people"
    },
    oldPrice: "C$ 14,800",
    price: "C$ 12,400",
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
    days: {
      FR: "10 jours",
      EN: "10 days"
    },
    people: {
      FR: "2 personnes",
      EN: "2 people"
    },
    oldPrice: "C$ 18,900",
    price: "C$ 16,500",
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
    days: {
      FR: "12 jours",
      EN: "12 days"
    },
    people: {
      FR: "2 personnes",
      EN: "2 people"
    },
    oldPrice: "C$ 16,500",
    price: "C$ 14,800",
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
    days: {
      FR: "14 jours",
      EN: "14 days"
    },
    people: {
      FR: "2 personnes",
      EN: "2 people"
    },
    oldPrice: "C$ 28,500",
    price: "C$ 24,900",
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
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-zinc-900 font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {lang === "FR" ? "Évasions de Prestige" : "Elite Collections"}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gradient-gold tracking-wide uppercase leading-tight font-bold">
              {lang === "FR" ? "Tous les Itinéraires" : "Curated Portfolios"}
            </h1>
          </div>
        </div>
      </section>

      {/* Grid of Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto z-20 relative bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursList.map((tour) => (
            <div
              key={tour.id}
              className="group relative flex flex-col justify-end rounded-[1.8rem] overflow-hidden p-5 border border-zinc-200/60 shadow-md hover:shadow-xl hover:border-brand-gold transition-luxury h-[440px] cursor-pointer"
            >
              {/* Full-bleed Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={tour.image}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  alt={tour.title[lang]}
                />
                {/* Luxury Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-95" />
              </div>

              {/* Top-Right Badge Overlay */}
              <div className="glass-tag absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full text-white z-20 shadow-md">
                {tour.iconType === "mountain" && (
                  <svg className="h-4.5 w-4.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                )}
                {tour.iconType === "water" && (
                  <svg className="h-4.5 w-4.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20 Q 5 17 8 20 T 14 20 T 20 20 T 22 20" />
                    <path d="M6 16 L 10 8 L 14 13 L 17 9 L 21 16" />
                  </svg>
                )}
                {tour.iconType === "lighthouse" && (
                  <svg className="h-4.5 w-4.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21h6" />
                    <path d="M10 21l1-12h2l1 12" />
                    <path d="M11 9V5a1 1 0 0 1 2 0v4" />
                    <path d="M9 5h6" />
                    <path d="M12 2v2" />
                    <path d="M8 12h8" />
                  </svg>
                )}
              </div>

              {/* Content Container */}
              <div className="relative z-20 flex flex-col justify-end h-full">
                <span className="text-[9px] font-mono uppercase font-semibold tracking-[0.2em] text-brand-gold mb-2 block">
                  {tour.category[lang]}
                </span>
                <h3 className="font-serif text-[18px] md:text-[20px] font-bold text-white tracking-wide leading-tight group-hover:text-brand-gold transition-colors">
                  {tour.title[lang]}
                </h3>
                <p className="text-[11px] text-white/70 mt-2.5 leading-relaxed font-light line-clamp-3">
                  {tour.description[lang]}
                </p>

                {/* Details Row */}
                <div className="flex items-center gap-4 py-3 border-b border-white/10 text-[10px] text-white/60 font-mono tracking-wider mt-3.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                    <span>{tour.days[lang]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-brand-gold" />
                    <span>{tour.people[lang]}</span>
                  </div>
                  <div className="ml-auto">
                    <MapPin className="h-3.5 w-3.5 text-brand-gold hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Booking Footer */}
                <div className="flex items-center justify-between pt-3.5 mt-1.5">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono line-through text-white/40 leading-none mb-1">
                      {tour.oldPrice}
                    </span>
                    <span className="text-[20px] font-bold text-brand-gold font-heading leading-none">
                      {tour.price}
                    </span>
                  </div>
                  <Link href={`/itineraries/${tour.id}`} className="rounded-full bg-brand-gold hover:bg-white text-black font-semibold text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 transition-luxury cursor-pointer hover:scale-105 shadow-md">
                    {t.book[lang]}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
