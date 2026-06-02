'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  Calendar, 
  Users, 
  MapPin, 
  ShieldCheck, 
  PhoneCall, 
  Home, 
  Plane 
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

  const serviceBadges = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold" />,
      title: { EN: "Sovereign Escrow", FR: "Dépôt Sécurisé Escrow" },
      desc: { EN: "PGP & escrow secured funds for absolute peace of mind.", FR: "Fonds protégés par PGP & escrow pour une tranquillité totale." }
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-brand-gold" />,
      title: { EN: "24/7 Encrypted Channel", FR: "Canal Chiffré 24/7" },
      desc: { EN: "Permanent direct line to your dedicated concierge architect.", FR: "Ligne directe permanente vers votre architecte concierge dédié." }
    },
    {
      icon: <Home className="h-6 w-6 text-brand-gold" />,
      title: { EN: "Elite Sanctums", FR: "Sanctuaires d'Élite" },
      desc: { EN: "Ultra-luxury private riads, converted forts, and desert domes.", FR: "Riads privés d'exception, forts convertis et dômes du désert." }
    },
    {
      icon: <Plane className="h-6 w-6 text-brand-gold" />,
      title: { EN: "VIP Tarmac Protocol", FR: "Protocole Tarmac VIP" },
      desc: { EN: "Fast-track airport gate reception and private SUV chauffeur.", FR: "Accueil VIP à la sortie de l'avion et transfert SUV privé." }
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 bg-white text-zinc-900" id="itineraries">
      {/* Split Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Heading & Branding */}
        <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              className="h-10 w-auto object-contain filter brightness-0" 
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-4 transition-luxury shadow-md cursor-pointer hover:scale-105"
            >
              {lang === "FR" ? "TOUS LES ITINÉRAIRES" : "VIEW ALL DESTINATIONS"} &rarr;
            </Link>

            <Link
              href="/custom-trip"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-4 transition-luxury shadow-sm cursor-pointer hover:scale-105"
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
                className="group relative flex flex-col justify-end rounded-[1.8rem] overflow-hidden p-5 border border-zinc-200/60 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-brand-gold transition-luxury h-[440px] cursor-pointer"
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
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-zinc-200/80 my-16 w-full" />

      {/* Bottom Row: Premium Service Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceBadges.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-3">
            <div className="p-3 bg-zinc-50 border border-zinc-200/50 rounded-2xl shadow-sm">
              {badge.icon}
            </div>
            <div className="space-y-1">
              <h4 className="font-heading text-[12px] font-bold text-zinc-900 uppercase tracking-wider">
                {badge.title[lang]}
              </h4>
              <p className="font-body text-[12px] text-zinc-500 leading-relaxed font-light">
                {badge.desc[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
