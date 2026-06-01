'use client';

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { useLang } from "../context/lang-context";

const t = {
  getKnow: {
    FR: "DÉCOUVREZ LES",
    EN: "GET TO KNOW"
  },
  title: {
    FR: "Monts Altaï",
    EN: "Altai Mountains"
  },
  description: {
    FR: "Des lacs turquoise et des rivières tumultueuses, des plaines steppiques et des sommets montagneux, ainsi que les plus belles routes du monde et une vallée semblable à Mars vous attendent.",
    EN: "Turquoise lakes and turbulent rivers, steppe expanses and mountain peaks, and the most beautiful roads in the world and a valley similar to Mars are waiting for you."
  },
  attractions: {
    FR: "attractions",
    EN: "attractions"
  },
  similarDestinations: {
    FR: "destinations similaires",
    EN: "similar destinations"
  },
  chooseTour: {
    FR: "CHOISIR UN CIRCUIT",
    EN: "CHOOSE A TOUR"
  }
};

export default function MapSection() {
  const { lang } = useLang();

  const locations = [
    { name: { FR: "Mont Béloukh", EN: "Mount Belukha" }, top: "15%", left: "75%" },
    { name: { FR: "Lac Teletskoïe", EN: "Lake Teletskoye" }, top: "45%", left: "82%" },
    { name: { FR: "Grottes de Tavdinsky", EN: "Tavdinsky Caves" }, top: "65%", left: "70%" },
    { name: { FR: "Cascade de Korbu", EN: "Korbu Waterfall" }, top: "52%", left: "48%" },
    { name: { FR: "Katu-Yaryk", EN: "Katu-Yaryk" }, top: "78%", left: "55%" }
  ];

  return (
    <div className="relative max-w-[1200px] mx-auto my-20 px-8 py-16 rounded-[2.5rem] overflow-hidden bg-wonderland-cream/30 border border-wonderland-cream/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Sepia landscape background mask */}
      <img
        src="/images/altai-map-bg.png"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-multiply pointer-events-none"
        alt="Map background"
      />

      {/* Left content description */}
      <div className="lg:col-span-5 flex flex-col items-start z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-wonderland-gray">
          {t.getKnow[lang]}
        </span>
        <h2 className="flex items-center gap-3 font-serif text-[42px] font-bold text-wonderland-brown mt-2 leading-tight">
          <svg className="h-8 w-8 text-wonderland-brown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
          </svg>
          {t.title[lang]}
        </h2>
        <p className="text-[13px] leading-relaxed text-wonderland-gray/90 mt-6 max-w-[420px] font-light">
          {t.description[lang]}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 mt-8">
          <a href="#" className="text-[12px] font-bold uppercase tracking-wider text-wonderland-brown/85 hover:text-wonderland-brown hover:underline">
            {t.attractions[lang]} &rarr;
          </a>
          <a href="#" className="text-[12px] font-bold uppercase tracking-wider text-wonderland-brown/85 hover:text-wonderland-brown hover:underline">
            {t.similarDestinations[lang]} &rarr;
          </a>
        </div>

        {/* CTA Button */}
        <button className="mt-8 rounded-full border-2 border-wonderland-brown bg-transparent px-8 py-3 text-[11px] font-bold uppercase tracking-wider text-wonderland-brown hover:bg-wonderland-brown hover:text-white transition-all duration-300 cursor-pointer">
          {t.chooseTour[lang]}
        </button>
      </div>

      {/* Right Map illustration */}
      <div className="lg:col-span-7 relative flex items-center justify-center z-10 min-h-[400px] w-full bg-black/5 rounded-[2rem] border border-wonderland-cream/30 overflow-hidden">
        {/* Map image base */}
        <img
          src="/images/altai-map-bg.png"
          className="absolute inset-0 w-full h-full object-cover brightness-95 contrast-105"
          alt={t.title[lang]}
        />

        {/* Hiker transparent overlay */}
        <img
          src="/images/people-cliff.png"
          className="absolute bottom-0 right-0 w-[280px] object-contain pointer-events-none z-20"
          alt="Hikers cliff"
        />

        {/* Dotted paths SVG overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
          {/* Path linking locations: Katu-Yaryk -> Korbu -> Caves -> Belukha -> Teletskoye */}
          <path
            d="M 280 320 Q 230 260 250 210 T 360 110 T 420 80"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <path
            d="M 250 210 Q 300 230 330 270"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70"
          />
        </svg>

        {/* Interactive Location Pins */}
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}
            style={{ top: loc.top, left: loc.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-30"
          >
            {/* Interactive Pulse Pin */}
            <div className="relative flex h-6 w-6 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75"></span>
              <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-white border border-wonderland-brown cursor-pointer shadow-sm">
                <div className="h-1 w-1 rounded-full bg-wonderland-red"></div>
              </div>
            </div>

            {/* Label box */}
            <span className="mt-1 bg-wonderland-brown-dark/95 border border-white/10 text-white text-[10px] px-2 py-0.5 rounded shadow-md pointer-events-none group-hover:scale-105 transition-transform duration-300 font-heading font-medium tracking-wide">
              {loc.name[lang]}
            </span>
          </motion.div>
        ))}

        {/* Slider dots pagination */}
        <div className="absolute bottom-4 left-6 flex items-center gap-1.5 z-20">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
