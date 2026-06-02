'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  Calendar, 
  Users, 
  MapPin 
} from "lucide-react";
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
  }
];

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
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="group relative flex flex-col rounded-[2rem] overflow-hidden border border-zinc-200/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-luxury bg-white h-full"
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
                  <div className="absolute top-5 left-5 bg-brand-gold text-black font-mono text-[9px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full shadow-md">
                    {tour.id === 1 ? "15% OFF" : tour.id === 2 ? "12% OFF" : tour.id === 3 ? "10% OFF" : "SPECIAL"}
                  </div>

                  <div className="absolute top-5 right-5 glass-tag px-3 py-1.5 rounded-full text-white font-mono text-[8px] tracking-wider uppercase font-semibold">
                    {tour.iconType === "mountain" ? "SIGNATURE" : tour.iconType === "water" ? "EXCLUSIVE" : "SOVEREIGN"}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{tour.days[lang]}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{tour.people[lang]}</span>
                      </div>
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
                      <span className="text-[18px] font-bold text-zinc-900 font-heading leading-none">
                        {tour.price} <span className="text-[10px] font-mono text-zinc-400">CAD</span>
                      </span>
                    </div>

                    <Link 
                      href={`/itineraries/${tour.id}`}
                      className="bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 rounded-full transition-luxury cursor-pointer shadow-sm"
                    >
                      {t.book[lang]}
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
