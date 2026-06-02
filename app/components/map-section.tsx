'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLang, translate } from "../context/lang-context";

// Localized UI strings
const t = {
  discoverRealm: {
    FR: "DÉCOUVREZ LE ROYAUME",
    EN: "DISCOVER THE REALM"
  },
  exploringRegions: {
    FR: "EXPLORATION DES RÉGIONS",
    EN: "EXPLORING REGIONS"
  },
  discoverMorocco: {
    FR: "Découvrir le Maroc",
    EN: "Discover Morocco"
  },
  defaultDesc: {
    FR: "Aventuriers dans l'âme, dévoiler les secrets du Maroc est notre spécialité. Découvrez ce que les régions du Maroc ont de plus exceptionnel à offrir.",
    EN: "We are adventurers at heart, so uncovering the secrets of Morocco is something we've had a lot of experience in. Find out more about what the regions of Morocco have to offer."
  },
  attractions: {
    FR: "itinéraires",
    EN: "itineraries"
  },
  customTrip: {
    FR: "voyage sur mesure",
    EN: "custom trips"
  },
  exploreBtn: {
    FR: "EXPLORER NOS PORTFOLIOS",
    EN: "EXPLORE PORTFOLIOS"
  },
  highlightsLabel: {
    FR: "POINTS FORTS DE LA RÉGION :",
    EN: "REGION HIGHLIGHTS:"
  },
  hoverPrompt: {
    FR: "Survolez les régions de la carte pour explorer les secrets du Royaume.",
    EN: "Hover over the map regions to explore the secrets of the Kingdom."
  }
};

// Region definitions and their coordinate paths (viewport: 0 0 500 500)
const regions = [
  {
    id: "north",
    name: { EN: "The North", FR: "Le Nord" },
    labelPos: { x: 380, y: 100, align: "start" },
    pinPos: { x: 330, y: 95 },
    hasLine: true,
    linePath: "M 330 95 L 375 100",
    path: "M 320 60 L 350 70 L 390 85 L 370 120 L 330 135 L 305 95 Z",
    highlights: {
      EN: "Chefchaouen, Tangier & Rif Mountains",
      FR: "Chefchaouen, Tanger & les montagnes du Rif"
    },
    description: {
      EN: "Discover the breathtaking blue streets of Chefchaouen, the historic coastal fortress of Tangier, and the dramatic pine forests of the Rif Mountains.",
      FR: "Découvrez les ruelles bleues de Chefchaouen, la forteresse côtière historique de Tanger et les forêts de pins spectaculaires du Rif."
    }
  },
  {
    id: "fes-meknes",
    name: { EN: "Fes, Meknes & The Middle Atlas", FR: "Fès, Meknès & le Moyen Atlas" },
    labelPos: { x: 120, y: 130, align: "end" },
    pinPos: { x: 330, y: 160 },
    hasLine: true,
    linePath: "M 130 130 L 330 160",
    path: "M 280 150 L 330 135 L 370 120 L 410 110 L 410 200 L 340 230 L 290 200 Z",
    highlights: {
      EN: "Imperial Medinas & Cedar Forests",
      FR: "Médinas impériales & forêts de cèdres"
    },
    description: {
      EN: "Explore the ancient medieval streets of Fes El Bali, the Roman ruins of Volubilis, and the majestic Barbary macaque cedar forests of Ifrane.",
      FR: "Explorez les ruelles médiévales de Fès El Bali, les ruines romaines de Volubilis et les forêts de cèdres peuplées de macaques de barbarie à Ifrane."
    }
  },
  {
    id: "casablanca",
    name: { EN: "Casablanca", FR: "Casablanca" },
    labelPos: { x: 170, y: 180, align: "end" },
    pinPos: { x: 265, y: 180 },
    hasLine: true,
    linePath: "M 180 180 L 265 180",
    path: "M 235 230 L 250 200 L 265 180 L 280 150 L 290 200 L 260 250 Z",
    highlights: {
      EN: "Hassan II Mosque & Coastal Elegance",
      FR: "Mosquée Hassan II & élégance côtière"
    },
    description: {
      EN: "Experience the grand architecture of Casablanca's Hassan II Mosque and the royal heritage sites of Rabat along the breezy Atlantic shores.",
      FR: "Découvrez la grande architecture de la mosquée Hassan II à Casablanca et l'héritage royal de Rabat le long des rivages de l'Atlantique."
    }
  },
  {
    id: "marrakech",
    name: { EN: "Marrakech & The Coastal Plain", FR: "Marrakech & la Plaine Côtière" },
    labelPos: { x: 120, y: 240, align: "end" },
    pinPos: { x: 250, y: 250 },
    hasLine: true,
    linePath: "M 130 240 L 250 250",
    path: "M 220 290 L 225 260 L 235 230 L 260 250 L 260 280 L 240 290 Z",
    highlights: {
      EN: "Vibrant Souks & Red City Walls",
      FR: "Souks vibrants & remparts rouges"
    },
    description: {
      EN: "Lose yourself in the bustling spice markets of Jemaa el-Fnaa, visit historic palaces, and wander through lush botanical gardens.",
      FR: "Perdez-vous dans les marchés d'épices animés de Jemaa el-Fnaa, visitez des palais historiques et flânez dans de somptueux jardins botaniques."
    }
  },
  {
    id: "high-atlas",
    name: { EN: "High Atlas Mountains", FR: "Montagnes du Haut Atlas" },
    labelPos: { x: 380, y: 270, align: "start" },
    pinPos: { x: 305, y: 265 },
    hasLine: true,
    linePath: "M 305 265 L 375 270",
    path: "M 260 250 L 290 200 L 340 230 L 350 250 L 310 280 L 260 280 Z",
    highlights: {
      EN: "Mount Toubkal & Berber Valleys",
      FR: "Mont Toubkal & vallées berbères"
    },
    description: {
      EN: "Trek through high altitude mountain passes, summit Mount Toubkal (4,167m), and experience warm hospitality in remote clay Berber villages.",
      FR: "Randonnez à travers des cols d'altitude, atteignez le sommet du Mont Toubkal (4 167 m) et découvrez l'hospitalité légendaire des villages berbères."
    }
  },
  {
    id: "ouarzazate",
    name: { EN: "Ouarzazate", FR: "Ouarzazate" },
    labelPos: { x: 370, y: 310, align: "start" },
    pinPos: { x: 310, y: 310 },
    hasLine: true,
    linePath: "M 310 310 L 365 310",
    path: "M 260 280 L 310 280 L 350 250 L 410 200 L 410 220 L 360 260 L 330 270 L 330 310 L 290 340 Z",
    highlights: {
      EN: "Ait Benhaddou & Desert Gates",
      FR: "Aït-Ben-Haddou & portes du désert"
    },
    description: {
      EN: "Marvel at the UNESCO clay fortress of Kasbah Ait Benhaddou, traverse the Dades Gorges, and see the gateways of Morocco's film capital.",
      FR: "Émerveillez-vous devant la kasbah fortifiée d'Aït-Ben-Haddou, traversez les gorges du Dadès et découvrez les portes de la capitale du cinéma."
    }
  },
  {
    id: "agadir",
    name: { EN: "Agadir & Anti-Atlas", FR: "Agadir & l'Anti-Atlas" },
    labelPos: { x: 130, y: 330, align: "end" },
    pinPos: { x: 230, y: 330 },
    hasLine: true,
    linePath: "M 140 330 L 230 330",
    path: "M 210 320 L 220 290 L 240 290 L 260 280 L 290 340 L 270 340 L 260 420 L 210 360 Z",
    highlights: {
      EN: "Argan Valleys & Sunny Coasts",
      FR: "Vallées d'arganiers & côtes ensoleillées"
    },
    description: {
      EN: "Unwind on the golden beaches of Agadir, see argan trees where goats climb, and hike through the bizarre red granite formations of Tafraout.",
      FR: "Détendez-vous sur les plages dorées d'Agadir, observez les chèvres grimper aux arganiers et explorez les formations rocheuses de Tafraout."
    }
  },
  {
    id: "sahara",
    name: { EN: "Sahara", FR: "Sahara" },
    labelPos: { x: 200, y: 430, align: "middle" },
    pinPos: { x: 200, y: 430 },
    hasLine: false,
    path: "M 120 490 L 125 440 L 155 395 L 180 370 L 210 320 L 210 360 L 260 420 L 180 480 Z",
    highlights: {
      EN: "Erg Chebbi Dunes & Starry Nights",
      FR: "Dunes de l'Erg Chebbi & nuits étoilées"
    },
    description: {
      EN: "Journey deep into the golden dunes of Erg Chebbi on a camel, sleep in luxury desert camps, and stargaze under one of the world's clearest skies.",
      FR: "Voyagez au cœur des dunes dorées de l'Erg Chebbi à dos de chameau, dormez dans un camp de luxe et admirez le ciel étoilé du désert."
    }
  }
];

// Unified outline path of Morocco for background mapping
const moroccoLandPath = "M 320 60 L 350 70 L 390 85 L 410 110 L 410 220 L 360 260 L 330 270 L 330 310 L 290 340 L 270 340 L 260 420 L 180 480 L 120 490 L 125 440 L 155 395 L 180 370 L 210 320 L 220 290 L 225 260 L 235 230 L 250 200 L 265 180 L 280 150 L 305 95 Z";

// Spain land outline at the top for context
const spainLandPath = "M 250 15 L 390 15 L 370 45 L 300 40 Z";

// Canary Islands shape details
const canaryIslands = [
  { path: "M 75 390 Q 80 385 85 392 T 75 390 Z" },
  { path: "M 95 397 Q 100 392 105 399 T 95 397 Z" },
  { path: "M 60 384 Q 65 379 70 386 T 60 384 Z" }
];

export default function MapSection() {
  const { lang } = useLang();
  const [activeRegion, setActiveRegion] = useState<typeof regions[number] | null>(null);

  // Determine current active text elements
  const currentTitle = activeRegion ? translate(activeRegion.name, lang) : translate(t.discoverMorocco, lang);
  const currentDesc = activeRegion ? translate(activeRegion.description, lang) : translate(t.defaultDesc, lang);
  const currentSubtitle = activeRegion ? translate(t.exploringRegions, lang) : translate(t.discoverRealm, lang);

  return (
    <div className="relative max-w-[1200px] mx-auto my-20 px-6 sm:px-12 py-16 rounded-[2.5rem] overflow-hidden bg-[#faf9f5] border border-zinc-200/80 shadow-card-soft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-zinc-900 select-none">
      
      {/* Absolute Soft Watercolor Blots for visual layout depth */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A880]/15 rounded-full filter blur-[55px] pointer-events-none -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/10 rounded-full filter blur-[70px] pointer-events-none -translate-x-20 translate-y-20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C5A880]/15 rounded-full filter blur-[60px] pointer-events-none translate-x-12 -translate-y-12" />

      {/* Map Column (lg:col-span-7) - Placed first to match the second reference image */}
      <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[520px] bg-white rounded-3xl border border-zinc-200/40 p-4 shadow-sm overflow-hidden flex items-center justify-center z-10">
        
        {/* Interactive SVG Morocco Map */}
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions: Dotted background pattern for ocean water */}
          <defs>
            <pattern id="ocean-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#C5A880" opacity="0.25" />
            </pattern>
            
            {/* Shadow filter for highlighted regions */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#C5A880" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Ocean area filled with dotted grid */}
          <rect width="500" height="500" fill="url(#ocean-grid)" opacity="0.8" />
          
          {/* North Atlantic Ocean Label */}
          <text
            x="80"
            y="220"
            className="font-serif italic text-[11px] fill-[#8c827a]/60 font-semibold tracking-wider"
          >
            {lang === "FR" ? "Océan Atlantique Nord" : "North Atlantic Ocean"}
          </text>

          {/* Europe / Spain Outlines */}
          <path
            d={spainLandPath}
            fill="#F4EFE6"
            stroke="#e4e4e7"
            strokeWidth="0.75"
            opacity="0.85"
          />
          <text
            x="320"
            y="32"
            className="font-sans text-[8px] tracking-[0.2em] fill-[#8c827a]/70 font-semibold uppercase"
          >
            {lang === "FR" ? "ESPAGNE" : "SPAIN"}
          </text>

          {/* Canary Islands Shapes & Labels */}
          {canaryIslands.map((island, idx) => (
            <path
              key={idx}
              d={island.path}
              fill="#F4EFE6"
              stroke="#e4e4e7"
              strokeWidth="0.75"
            />
          ))}
          <text
            x="85"
            y="415"
            className="font-sans text-[8px] tracking-wider fill-[#8c827a]/70 font-medium"
          >
            {lang === "FR" ? "Îles Canaries" : "Canary Islands"}
          </text>

          {/* Morocco Base Landmass (Sand cream) */}
          <path
            d={moroccoLandPath}
            fill="#F3EEE3"
            stroke="#d4d4d8"
            strokeWidth="1"
            className="transition-colors duration-500"
          />

          {/* Regional Interactive Layer Paths */}
          {regions.map((reg) => {
            const isActive = activeRegion?.id === reg.id;
            return (
              <path
                key={reg.id}
                d={reg.path}
                fill={isActive ? "#C5A880" : "transparent"}
                fillOpacity={isActive ? "0.6" : "0"}
                stroke={isActive ? "#A3835B" : "#e4e4e7"}
                strokeWidth={isActive ? "1.5" : "0.5"}
                filter={isActive ? "url(#glow)" : undefined}
                className="cursor-pointer transition-all duration-300 ease-in-out hover:fill-[#C5A880]/30"
                onMouseEnter={() => setActiveRegion(reg)}
                onMouseLeave={() => setActiveRegion(null)}
              />
            );
          })}

          {/* Sahara interior text label */}
          <text
            x="200"
            y="435"
            pointerEvents="none"
            className="font-heading font-semibold text-[10px] tracking-[0.3em] fill-[#6B5335]/70 uppercase text-center"
            style={{ textAnchor: "middle" }}
          >
            {lang === "FR" ? "SAHARA" : "SAHARA"}
          </text>

          {/* Connection Lines from Label to Pin */}
          {regions.map((reg) => {
            if (!reg.hasLine || !reg.linePath) return null;
            const isActive = activeRegion?.id === reg.id;
            return (
              <path
                key={`line-${reg.id}`}
                d={reg.linePath}
                fill="none"
                stroke={isActive ? "#A3835B" : "#C5A880"}
                strokeWidth={isActive ? "1.25" : "0.75"}
                strokeDasharray={isActive ? "none" : "2,2"}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Interactive Pointer Text Labels */}
          {regions.map((reg) => {
            if (reg.id === "sahara") return null; // Placed inside the map directly
            const isActive = activeRegion?.id === reg.id;
            return (
              <text
                key={`label-${reg.id}`}
                x={reg.labelPos.x}
                y={reg.labelPos.y}
                className={`font-sans text-[9px] tracking-widest font-semibold uppercase cursor-pointer transition-colors duration-300 ${
                  isActive ? "fill-[#8B2635] font-bold" : "fill-[#6B5335]/90 hover:fill-[#8B2635]"
                }`}
                style={{ textAnchor: reg.labelPos.align }}
                onMouseEnter={() => setActiveRegion(reg)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {translate(reg.name, lang)}
              </text>
            );
          })}

          {/* Animated Cities / Regions Pin Nodes */}
          {regions.map((reg) => {
            const isActive = activeRegion?.id === reg.id;
            return (
              <g
                key={`pin-${reg.id}`}
                className="cursor-pointer"
                onMouseEnter={() => setActiveRegion(reg)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {/* Ping Pulse ring for active location */}
                {isActive && (
                  <circle
                    cx={reg.pinPos.x}
                    cy={reg.pinPos.y}
                    r="8"
                    fill="#8B2635"
                    className="animate-ping"
                    style={{
                      transformOrigin: `${reg.pinPos.x}px ${reg.pinPos.y}px`
                    }}
                  />
                )}
                {/* Outer Ring */}
                <circle
                  cx={reg.pinPos.x}
                  cy={reg.pinPos.y}
                  r={isActive ? "5" : "3.5"}
                  fill={isActive ? "#8B2635" : "#FAF8F5"}
                  stroke={isActive ? "#FAF8F5" : "#A3835B"}
                  strokeWidth="1.25"
                  className="transition-all duration-300"
                />
                {/* Inner center dot */}
                <circle
                  cx={reg.pinPos.x}
                  cy={reg.pinPos.y}
                  r="1.2"
                  fill={isActive ? "#FAF8F5" : "#A3835B"}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* Hover/Tap Hint Badge */}
        <div className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white font-sans text-[8px] sm:text-[9px] tracking-wider uppercase font-semibold">
          {translate(t.hoverPrompt, lang)}
        </div>
      </div>

      {/* Content Column (lg:col-span-5) */}
      <div className="lg:col-span-5 flex flex-col items-start z-10 lg:pl-4">
        
        {/* Dynamic Title and descriptions */}
        <div className="min-h-[220px] flex flex-col justify-center">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#A3835B]">
            {currentSubtitle}
          </span>
          
          <h2 className="font-serif text-[36px] sm:text-[42px] font-bold text-zinc-900 mt-2 leading-none uppercase tracking-wide">
            {currentTitle}
          </h2>

          <p className="text-[13px] leading-relaxed text-zinc-600 mt-6 font-light">
            {currentDesc}
          </p>
        </div>

        {/* Show Region Highlights if active, else list of regions */}
        <div className="w-full mt-6 pt-6 border-t border-zinc-200/60 min-h-[140px]">
          <AnimatePresence mode="wait">
            {activeRegion ? (
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <h4 className="font-mono text-[9.5px] font-bold tracking-widest text-[#A3835B]">
                  {translate(t.highlightsLabel, lang)}
                </h4>
                <div className="flex items-center gap-2 bg-[#8B2635]/5 border border-[#8B2635]/10 rounded-xl px-4 py-3 text-zinc-800 font-sans text-[12px] font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#8B2635] shrink-0" />
                  {translate(activeRegion.highlights, lang)}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 gap-x-4 gap-y-2.5"
              >
                {regions.map((reg) => (
                  <div
                    key={reg.id}
                    className="flex items-center gap-2 cursor-pointer group"
                    onMouseEnter={() => setActiveRegion(reg)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 group-hover:bg-[#8B2635] transition-colors shrink-0" />
                    <span className="font-sans text-[11px] font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">
                      {translate(reg.name, lang)}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button Links */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full mt-8">
          <a
            href="/#portfolios"
            className="w-full sm:w-auto border border-zinc-900 bg-zinc-900 text-white hover:bg-transparent hover:text-zinc-900 font-semibold text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury rounded-full shadow-sm text-center cursor-pointer"
          >
            {translate(t.exploreBtn, lang)}
          </a>
        </div>
      </div>

    </div>
  );
}
