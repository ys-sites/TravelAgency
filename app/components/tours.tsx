'use client';

import { motion } from "motion/react";
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/lang-context";

interface TourCard {
  id: number;
  image: string;
  category: { FR: string; EN: string };
  title: { FR: string; EN: string };
  description: { FR: string; EN: string };
  days: { FR: string; EN: string };
  people: { FR: string; EN: string };
  oldPrice: { FR: string; EN: string };
  price: { FR: string; EN: string };
  iconType: "mountain" | "water" | "lighthouse";
}

const toursList: TourCard[] = [
  {
    id: 1,
    image: "/images/tour-altai.png",
    category: {
      FR: "rafting sur rivière - excursions en montagne - randonnée sous tente",
      EN: "river rafting - mountain excursions - hiking with tents"
    },
    title: {
      FR: "Monts Altaï — immersion totale",
      EN: "Altai mountains — full immersion"
    },
    description: {
      FR: "Les plus beaux paysages du territoire de l'Altaï en 2 semaines",
      EN: "The best sights of the Altai Territory in 2 weeks"
    },
    days: {
      FR: "14 jours",
      EN: "14 days"
    },
    people: {
      FR: "2 personnes",
      EN: "2 people"
    },
    oldPrice: {
      FR: "2 150 $ CAD",
      EN: "$2,150 CAD"
    },
    price: {
      FR: "1 850 $ CAD",
      EN: "$1,850 CAD"
    },
    iconType: "mountain"
  },
  {
    id: 2,
    image: "/images/tour-kamchatka.png",
    category: {
      FR: "sources chaudes - excursions en montagne - geysers",
      EN: "hot springs - mountain excursions - geysers"
    },
    title: {
      FR: "Aventures au Kamtchatka",
      EN: "Adventures by Kamchatka"
    },
    description: {
      FR: "À la recherche d'aventures. Circuit au Kamtchatka sans tente ni sac à dos",
      EN: "In search of adventures. Tour to Kamchatka without tents and backpacks"
    },
    days: {
      FR: "7 jours",
      EN: "7 days"
    },
    people: {
      FR: "1 personne",
      EN: "1 person"
    },
    oldPrice: {
      FR: "1 500 $ CAD",
      EN: "$1,500 CAD"
    },
    price: {
      FR: "1 290 $ CAD",
      EN: "$1,290 CAD"
    },
    iconType: "water"
  },
  {
    id: 3,
    image: "/images/tour-teriberka.png",
    category: {
      FR: "circuit arctique - croisière en bateau - aurores boréales",
      EN: "arctic tour - cruise in ship - northern lights"
    },
    title: {
      FR: "Voyage à Teriberka",
      EN: "Journey to Teriberka"
    },
    description: {
      FR: "Ressourcez-vous sur les rives de la mer de Barents et découvrez la vie dans le Grand Nord russe",
      EN: "Reboot on the shores of the Barents Sea and find out how the Russian North lives"
    },
    days: {
      FR: "4 jours",
      EN: "4 days"
    },
    people: {
      FR: "1 personne",
      EN: "1 person"
    },
    oldPrice: {
      FR: "1 050 $ CAD",
      EN: "$1,050 CAD"
    },
    price: {
      FR: "790 $ CAD",
      EN: "$790 CAD"
    },
    iconType: "lighthouse"
  }
];

const t = {
  title: {
    FR: "Spécialement pour vous",
    EN: "Special for you"
  },
  allTours: {
    FR: "tous les circuits",
    EN: "all tours"
  },
  book: {
    FR: "RÉSERVER",
    EN: "BOOK"
  }
};

export default function Tours() {
  const { lang } = useLang();

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 mt-12">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-serif text-[38px] font-bold text-wonderland-brown">
          {t.title[lang]}
        </h2>
        <a href="#" className="font-body text-[13px] font-semibold text-wonderland-brown/85 hover:underline cursor-pointer">
          {t.allTours[lang]} &rarr;
        </a>
      </div>

      {/* Grid of Cards */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button className="absolute left-[-58px] top-1/2 -translate-y-1/2 hidden xl:flex h-10 w-10 items-center justify-center rounded-full border border-wonderland-cream bg-white text-wonderland-brown hover:bg-wonderland-cream transition-colors shadow-sm cursor-pointer">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button className="absolute right-[-58px] top-1/2 -translate-y-1/2 hidden xl:flex h-10 w-10 items-center justify-center rounded-full border border-wonderland-cream bg-white text-wonderland-brown hover:bg-wonderland-cream transition-colors shadow-sm cursor-pointer">
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toursList.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col rounded-[1.5rem] bg-[#FFFFFF] p-3 border border-wonderland-cream/60 shadow-sm hover:shadow-card-soft transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-[1.2rem]">
                <img
                  src={tour.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={tour.title[lang]}
                />
                {/* Top-Right Badge Overlay */}
                <div className="glass-tag absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-white">
                  {tour.iconType === "mountain" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 12h3v8h14v-8h3L12 3z" />
                    </svg>
                  )}
                  {tour.iconType === "water" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-9v14" />
                    </svg>
                  )}
                  {tour.iconType === "lighthouse" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M8 5h8M9 9h6M10 13h4M11 17h2" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-wonderland-gray/80 mb-2 block">
                  {tour.category[lang]}
                </span>
                <h3 className="font-heading text-[16px] font-bold text-wonderland-brown leading-snug group-hover:text-wonderland-brown-dark transition-colors">
                  {tour.title[lang]}
                </h3>
                <p className="text-[12px] text-wonderland-gray mt-2 leading-relaxed flex-1">
                  {tour.description[lang]}
                </p>

                {/* Details Row */}
                <div className="flex items-center gap-4 py-4 border-b border-wonderland-cream/60 text-[11px] text-wonderland-gray/90">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{tour.days[lang]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>{tour.people[lang]}</span>
                  </div>
                  <div className="ml-auto">
                    <MapPin className="h-3.5 w-3.5 cursor-pointer text-wonderland-brown hover:text-wonderland-red" />
                  </div>
                </div>

                {/* Booking Footer */}
                <div className="flex items-center justify-between pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[11px] line-through text-wonderland-gray/60 leading-none mb-1">
                      {tour.oldPrice[lang]}
                    </span>
                    <span className="text-[20px] font-bold text-wonderland-red font-heading leading-none">
                      {tour.price[lang]}
                    </span>
                  </div>
                  <button className="rounded-full bg-wonderland-brown px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-wonderland-brown-dark transition-colors cursor-pointer">
                    {t.book[lang]}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
