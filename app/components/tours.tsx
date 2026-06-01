'use client';

import { motion } from "motion/react";
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface TourCard {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  days: string;
  people: string;
  oldPrice: string;
  price: string;
  iconType: "mountain" | "water" | "lighthouse";
}

const toursList: TourCard[] = [
  {
    id: 1,
    image: "/images/tour-altai.png",
    category: "river rafting - mountain excursions - hiking with tents",
    title: "Altai mountains — full immersion",
    description: "The best sights of the Altai Territory in 2 weeks",
    days: "14 days",
    people: "2 person",
    oldPrice: "140 800 P",
    price: "120 800 P",
    iconType: "mountain"
  },
  {
    id: 2,
    image: "/images/tour-kamchatka.png",
    category: "hot springs - mountain excursions - geysers",
    title: "Adventures by Kamchatka",
    description: "In search of adventures. Tour to Kamchatka without tents and backpacks",
    days: "7 days",
    people: "1 person",
    oldPrice: "98 600 P",
    price: "84 200 P",
    iconType: "water"
  },
  {
    id: 3,
    image: "/images/tour-teriberka.png",
    category: "arctic tour - cruise in ship - northern lights",
    title: "Journey to Teriberka",
    description: "Reboot on the shores of the Barents Sea and find out how the Russian North lives",
    days: "4 days",
    people: "1 person",
    oldPrice: "68 800 P",
    price: "51 700 P",
    iconType: "lighthouse"
  }
];

export default function Tours() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 mt-12">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-serif text-[38px] font-bold text-wonderland-brown">
          Special for you
        </h2>
        <a href="#" className="font-body text-[13px] font-semibold text-wonderland-brown/85 hover:underline cursor-pointer">
          all tours &rarr;
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
                  alt={tour.title}
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
                  {tour.category}
                </span>
                <h3 className="font-heading text-[16px] font-bold text-wonderland-brown leading-snug group-hover:text-wonderland-brown-dark transition-colors">
                  {tour.title}
                </h3>
                <p className="text-[12px] text-wonderland-gray mt-2 leading-relaxed flex-1">
                  {tour.description}
                </p>

                {/* Details Row */}
                <div className="flex items-center gap-4 py-4 border-b border-wonderland-cream/60 text-[11px] text-wonderland-gray/90">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{tour.days}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>{tour.people}</span>
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
                    BOOK
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
