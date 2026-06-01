'use client';

import * as React from "react";
import { motion } from "motion/react";
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/lang-context";

interface TourCard {
  id: number;
  image: string;
  category: { TN: string; EN: string };
  title: { TN: string; EN: string };
  description: { TN: string; EN: string };
  days: { TN: string; EN: string };
  people: { TN: string; EN: string };
  oldPrice: string;
  price: string;
  iconType: "mountain" | "water" | "lighthouse";
}

const toursList: TourCard[] = [
  {
    id: 1,
    image: "/images/tour-altai.png",
    category: {
      TN: "рафтинг по рекам - горные экскурсии - походы с палатками",
      EN: "river rafting - mountain excursions - hiking with tents"
    },
    title: {
      TN: "Алтайские горы — полное погружение",
      EN: "Altai mountains — full immersion"
    },
    description: {
      TN: "Лучшие достопримечательности Алтайского края за 2 недели",
      EN: "The best sights of the Altai Territory in 2 weeks"
    },
    days: {
      TN: "14 дней",
      EN: "14 days"
    },
    people: {
      TN: "2 человека",
      EN: "2 person"
    },
    oldPrice: "140 800 P",
    price: "120 800 P",
    iconType: "mountain"
  },
  {
    id: 2,
    image: "/images/tour-kamchatka.png",
    category: {
      TN: "горячие источники - горные экскурсии - гейзеры",
      EN: "hot springs - mountain excursions - geysers"
    },
    title: {
      TN: "Приключения на Камчатке",
      EN: "Adventures by Kamchatka"
    },
    description: {
      TN: "В поисках приключений. Тур на Камчатку без палаток и рюкзаков",
      EN: "In search of adventures. Tour to Kamchatka without tents and backpacks"
    },
    days: {
      TN: "7 дней",
      EN: "7 days"
    },
    people: {
      TN: "1 человек",
      EN: "1 person"
    },
    oldPrice: "98 600 P",
    price: "84 200 P",
    iconType: "water"
  },
  {
    id: 3,
    image: "/images/tour-teriberka.png",
    category: {
      TN: "арктический тур - круиз на корабле - северное сияние",
      EN: "arctic tour - cruise in ship - northern lights"
    },
    title: {
      TN: "Путешествие в Териберку",
      EN: "Journey to Teriberka"
    },
    description: {
      TN: "Перезагрузка на берегах Баренцева моря и знакомство с жизнью Русского Севера",
      EN: "Reboot on the shores of the Barents Sea and find out how the Russian North lives"
    },
    days: {
      TN: "4 дня",
      EN: "4 days"
    },
    people: {
      TN: "1 человек",
      EN: "1 person"
    },
    oldPrice: "68 800 P",
    price: "51 700 P",
    iconType: "lighthouse"
  }
];

const t = {
  title: {
    TN: "Специально для вас",
    EN: "Special for you"
  },
  allTours: {
    TN: "все туры",
    EN: "all tours"
  },
  book: {
    TN: "ЗАБРОНИРОВАТЬ",
    EN: "BOOK"
  }
};

export default function Tours() {
  const { lang } = useLang();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

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
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-58px] top-1/2 -translate-y-1/2 hidden xl:flex h-10 w-10 items-center justify-center rounded-full border border-wonderland-cream bg-white text-wonderland-brown hover:bg-wonderland-cream transition-colors shadow-sm cursor-pointer z-20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-[-58px] top-1/2 -translate-y-1/2 hidden xl:flex h-10 w-10 items-center justify-center rounded-full border border-wonderland-cream bg-white text-wonderland-brown hover:bg-wonderland-cream transition-colors shadow-sm cursor-pointer z-20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-none snap-x snap-mandatory pb-4 w-full"
        >
          {toursList.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col min-w-[280px] md:min-w-0 snap-center rounded-[1.5rem] bg-[#FFFFFF] p-3 border border-wonderland-cream/60 shadow-sm hover:shadow-card-soft transition-all duration-300 flex-1"
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  )}
                  {tour.iconType === "water" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20 Q 5 17 8 20 T 14 20 T 20 20 T 22 20" />
                      <path d="M6 16 L 10 8 L 14 13 L 17 9 L 21 16" />
                    </svg>
                  )}
                  {tour.iconType === "lighthouse" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 21h6" />
                      <path d="M10 21l1-12h2l1 12" />
                      <path d="M11 9V5a1 1 0 0 1 2 0v4" />
                      <path d="M9 5h6" />
                      <path d="M12 2v2" />
                      <path d="M8 12h8" />
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
                      {tour.oldPrice}
                    </span>
                    <span className="text-[20px] font-bold text-wonderland-red font-heading leading-none">
                      {tour.price}
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

