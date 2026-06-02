'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLang, translate } from "../context/lang-context";

// Detailed maps data configuration for each country
const mapsData: Record<string, {
  discoverRealm: { FR: string; EN: string };
  exploringRegions: { FR: string; EN: string };
  discoverTitle: { FR: string; EN: string };
  defaultDesc: { FR: string; EN: string };
  exploreBtn: { FR: string; EN: string };
  highlightsLabel: { FR: string; EN: string };
  hoverPrompt: { FR: string; EN: string };
  
  viewBox: string;
  oceanPath: string;
  oceanLabel: { FR: string; EN: string };
  oceanLabelPos: { x: number; y: number };
  
  landPath: string;
  spainLandPath?: string;
  spainLabel?: { FR: string; EN: string };
  spainLabelPos?: { x: number; y: number };
  
  extraLandPaths?: { path: string }[];
  extraLabels?: { text: string; x: number; y: number }[];
  
  regions: {
    id: string;
    name: { EN: string; FR: string };
    labelPos: { x: number; y: number; align: "start" | "end" | "middle" };
    pinPos: { x: number; y: number };
    hasLine: boolean;
    linePath?: string;
    path: string;
    highlights: { EN: string; FR: string };
    description: { EN: string; FR: string };
  }[];
}> = {
  // Morocco — ID "1"
  "1": {
    discoverRealm: { FR: "DÉCOUVREZ LE ROYAUME", EN: "DISCOVER THE REALM" },
    exploringRegions: { FR: "EXPLORATION DES RÉGIONS", EN: "EXPLORING REGIONS" },
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    defaultDesc: {
      FR: "Aventuriers dans l'âme, dévoiler les secrets du Maroc est notre spécialité. Découvrez ce que les régions du Maroc ont de plus exceptionnel à offrir.",
      EN: "We are adventurers at heart, so uncovering the secrets of Morocco is something we've had a lot of experience in. Find out more about what the regions of Morocco have to offer."
    },
    exploreBtn: { FR: "EXPLORER NOS PORTFOLIOS", EN: "EXPLORE PORTFOLIOS" },
    highlightsLabel: { FR: "POINTS FORTS DE LA RÉGION :", EN: "REGION HIGHLIGHTS:" },
    hoverPrompt: { FR: "Survolez les régions pour explorer le Royaume.", EN: "Hover over regions to explore the Kingdom." },
    
    viewBox: "0 0 500 500",
    oceanPath: "M 0 0 L 320 0 L 280 150 L 265 180 L 250 200 L 235 230 L 225 260 L 220 290 L 210 320 L 180 370 L 155 395 L 125 440 L 120 490 L 0 500 Z",
    oceanLabel: { FR: "Océan Atlantique Nord", EN: "North Atlantic Ocean" },
    oceanLabelPos: { x: 80, y: 220 },
    
    landPath: "M 320 60 L 350 70 L 390 85 L 410 110 L 410 220 L 360 260 L 330 270 L 330 310 L 290 340 L 270 340 L 260 420 L 180 480 L 120 490 L 125 440 L 155 395 L 180 370 L 210 320 L 220 290 L 225 260 L 235 230 L 250 200 L 265 180 L 280 150 L 305 95 Z",
    spainLandPath: "M 250 15 L 390 15 L 370 45 L 300 40 Z",
    spainLabel: { FR: "ESPAGNE", EN: "SPAIN" },
    spainLabelPos: { x: 320, y: 32 },
    
    extraLandPaths: [
      { path: "M 75 390 Q 80 385 85 392 T 75 390 Z" },
      { path: "M 95 397 Q 100 392 105 399 T 95 397 Z" },
      { path: "M 60 384 Q 65 379 70 386 T 60 384 Z" }
    ],
    extraLabels: [
      { text: "Canary Islands", x: 85, y: 415 }
    ],
    
    regions: [
      {
        id: "north",
        name: { EN: "The North", FR: "Le Nord" },
        labelPos: { x: 380, y: 100, align: "start" },
        pinPos: { x: 330, y: 95 },
        hasLine: true,
        linePath: "M 330 95 L 375 100",
        path: "M 320 60 L 350 70 L 390 85 L 370 120 L 330 135 L 305 95 Z",
        highlights: { EN: "Chefchaouen, Tangier & Rif Mountains", FR: "Chefchaouen, Tanger & les montagnes du Rif" },
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
        highlights: { EN: "Imperial Medinas & Cedar Forests", FR: "Médinas impériales & forêts de cèdres" },
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
        highlights: { EN: "Hassan II Mosque & Coastal Elegance", FR: "Mosquée Hassan II & élégance côtière" },
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
        highlights: { EN: "Vibrant Souks & Red City Walls", FR: "Souks vibrants & remparts rouges" },
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
        highlights: { EN: "Mount Toubkal & Berber Valleys", FR: "Mont Toubkal & vallées berbères" },
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
        highlights: { EN: "Ait Benhaddou & Desert Gates", FR: "Aït-Ben-Haddou & portes du désert" },
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
        highlights: { EN: "Argan Valleys & Sunny Coasts", FR: "Vallées d'arganiers & côtes ensoleillées" },
        description: {
          EN: "Unwind on the golden beaches of Agadir, see argan trees where goats climb, and hike through the bizarre red granite formations of Tafraout.",
          FR: "Détendez-vous sur les plages dorées d'Agadir, observez les chèvres grimper aux arganiers et explorez les formations rocheuses de Tafraout."
        }
      },
      {
        id: "sahara",
        name: { EN: "Sahara Desert", FR: "Désert du Sahara" },
        labelPos: { x: 200, y: 430, align: "middle" },
        pinPos: { x: 200, y: 430 },
        hasLine: false,
        path: "M 120 490 L 125 440 L 155 395 L 180 370 L 210 320 L 210 360 L 260 420 L 180 480 Z",
        highlights: { EN: "Erg Chebbi Dunes & Starry Nights", FR: "Dunes de l'Erg Chebbi & nuits étoilées" },
        description: {
          EN: "Journey deep into the golden dunes of Erg Chebbi on a camel, sleep in luxury desert camps, and stargaze under one of the world's clearest skies.",
          FR: "Voyagez au cœur des dunes dorées de l'Erg Chebbi à dos de chameau, dormez dans un camp de luxe et admirez le ciel étoilé du désert."
        }
      }
    ]
  },
  
  // United Arab Emirates (UAE) — ID "2"
  "2": {
    discoverRealm: { FR: "DÉCOUVREZ LES ÉMIRATS", EN: "DISCOVER THE EMIRATES" },
    exploringRegions: { FR: "EXPLORATION DES ÉMIRATS", EN: "EXPLORING EMIRATES" },
    discoverTitle: { FR: "Découvrir les E.A.U.", EN: "Discover UAE" },
    defaultDesc: {
      FR: "Découvrez le luxe contemporain, l'architecture futuriste et les déserts intemporels du golfe Arabique. Explorez les Émirats en détail.",
      EN: "Experience the contemporary luxury, futuristic architecture, and timeless deserts of the Arabian Gulf. Explore the Emirates in detail."
    },
    exploreBtn: { FR: "EXPLORER NOS PORTFOLIOS", EN: "EXPLORE PORTFOLIOS" },
    highlightsLabel: { FR: "POINTS FORTS DE L'ÉMIRAT :", EN: "EMIRATE HIGHLIGHTS:" },
    hoverPrompt: { FR: "Survolez les régions pour explorer les Émirats.", EN: "Hover over regions to explore the Emirates." },
    
    viewBox: "0 0 500 500",
    oceanPath: "M 0 0 L 500 0 L 395 160 L 360 210 L 340 180 L 280 210 L 180 250 L 80 330 L 0 350 Z",
    oceanLabel: { FR: "Golfe Persique", EN: "Persian Gulf" },
    oceanLabelPos: { x: 120, y: 150 },
    
    landPath: "M 80 330 L 180 250 L 280 210 L 340 180 L 380 150 L 395 160 L 360 210 L 385 240 L 340 320 L 150 350 Z",
    spainLandPath: "M 30 250 L 50 220 L 70 240 L 60 290 Z",
    spainLabel: { FR: "QATAR", EN: "QATAR" },
    spainLabelPos: { x: 35, y: 305 },
    
    extraLandPaths: [
      { path: "M 380 150 L 395 130 L 405 140 L 395 160 Z" }
    ],
    extraLabels: [
      { text: "Oman (exclave)", x: 410, y: 125 }
    ],
    
    regions: [
      {
        id: "dubai",
        name: { EN: "Dubai", FR: "Dubaï" },
        labelPos: { x: 230, y: 195, align: "end" },
        pinPos: { x: 310, y: 195 },
        hasLine: true,
        linePath: "M 235 195 L 310 195",
        path: "M 280 210 L 340 180 L 360 210 L 300 250 Z",
        highlights: { EN: "Burj Khalifa & Palm Yacht Cruise", FR: "Burj Khalifa & croisière yacht à Palm Jumeirah" },
        description: {
          EN: "Explore the futuristic skyscraper skyline, luxury dune dining, private yacht charters, and golden beach resorts of Dubai.",
          FR: "Explorez les gratte-ciel futuristes, les dîners de luxe dans les dunes, les yachts privés et les complexes de plage de Dubaï."
        }
      },
      {
        id: "abu-dhabi",
        name: { EN: "Abu Dhabi", FR: "Abou Dabi" },
        labelPos: { x: 120, y: 270, align: "end" },
        pinPos: { x: 200, y: 270 },
        hasLine: true,
        linePath: "M 125 270 L 200 270",
        path: "M 80 330 L 180 250 L 280 210 L 300 250 L 340 320 L 150 350 Z",
        highlights: { EN: "Sheikh Zayed Grand Mosque & Louvre", FR: "Grande Mosquée Cheikh Zayed & Musée du Louvre" },
        description: {
          EN: "Visit the cultural monuments of the Louvre Abu Dhabi, the spectacular Sheikh Zayed Grand Mosque, and the empty quarter desert.",
          FR: "Visitez les monuments culturels du Louvre Abou Dabi, la spectaculaire Grande Mosquée Cheikh Zayed et le désert de Liwa."
        }
      },
      {
        id: "northern-emirates",
        name: { EN: "Northern Emirates", FR: "Émirats du Nord" },
        labelPos: { x: 395, y: 220, align: "start" },
        pinPos: { x: 370, y: 175 },
        hasLine: true,
        linePath: "M 370 175 L 390 220",
        path: "M 340 180 L 380 150 L 395 160 L 360 210 Z",
        highlights: { EN: "Hajar Mountains & Sharjah Culture", FR: "Montagnes du Hajar & Musées de Charjah" },
        description: {
          EN: "Trek through the raw mountain valleys of Ras Al Khaimah, view historical museums in Sharjah, and relax on the beaches of Fujairah.",
          FR: "Randonnez dans les vallées de Ras Al Khaimah, visitez les musées de Charjah et détendez-vous sur les plages de Fujaïrah."
        }
      }
    ]
  },
  
  // Sultanate of Oman — ID "3"
  "3": {
    discoverRealm: { FR: "DÉCOUVREZ LE SULTANAT", EN: "DISCOVER THE SULTANATE" },
    exploringRegions: { FR: "EXPLORATION DE L'OMAN", EN: "EXPLORING OMAN" },
    discoverTitle: { FR: "Découvrir l'Oman", EN: "Discover Oman" },
    defaultDesc: {
      FR: "Explorez les wadis de montagne, les forts médiévaux et naviguez dans les fjords du Musandam. Découvrez l'âme de l'Arabie.",
      EN: "Explore mountain wadis, ancient converted forts, and cruise Musandam fjords. Experience the historic soul of Arabia."
    },
    exploreBtn: { FR: "EXPLORER NOS PORTFOLIOS", EN: "EXPLORE PORTFOLIOS" },
    highlightsLabel: { FR: "POINTS FORTS DE LA RÉGION :", EN: "REGION HIGHLIGHTS:" },
    hoverPrompt: { FR: "Survolez les régions pour explorer le Sultanat.", EN: "Hover over regions to explore the Sultanate." },
    
    viewBox: "0 0 500 500",
    oceanPath: "M 500 0 L 500 500 L 150 500 L 150 450 L 250 380 L 350 280 L 390 180 L 375 140 L 340 120 L 500 0 Z",
    oceanLabel: { FR: "Mer d'Arabie", EN: "Arabian Sea" },
    oceanLabelPos: { x: 380, y: 320 },
    
    landPath: "M 340 120 L 375 140 L 390 180 L 350 280 L 250 380 L 150 450 L 140 350 L 220 260 L 310 160 Z",
    
    regions: [
      {
        id: "muscat",
        name: { EN: "Muscat & Coast", FR: "Mascate & Côte" },
        labelPos: { x: 230, y: 145, align: "end" },
        pinPos: { x: 345, y: 145 },
        hasLine: true,
        linePath: "M 235 145 L 345 145",
        path: "M 310 160 L 340 120 L 375 140 L 340 180 Z",
        highlights: { EN: "Sultan Qaboos Mosque & Dhow Cruise", FR: "Mosquée Sultan Qaboos & croisière en boutre" },
        description: {
          EN: "Stroll through the Mutrah Souq, visit the Sultan Qaboos Grand Mosque, and sail along Muscat's dramatic volcanic coast.",
          FR: "Flânez dans le souk de Mutrah, visitez la Grande Mosquée du Sultan Qaboos et naviguez le long de la côte volcanique de Mascate."
        }
      },
      {
        id: "hajar",
        name: { EN: "Hajar Mountains & Wadis", FR: "Monts Hajar & Wadis" },
        labelPos: { x: 190, y: 190, align: "end" },
        pinPos: { x: 310, y: 190 },
        hasLine: true,
        linePath: "M 195 190 L 310 190",
        path: "M 280 200 L 310 160 L 340 180 L 320 220 Z",
        highlights: { EN: "Jebel Akhdar Canyons & Nizwa Fort", FR: "Canyons du Djebel Akhdar & Fort de Nizwa" },
        description: {
          EN: "Explore Nizwa's historic clay fort, trek through green mountain canyons of Jebel Akhdar, and swim in emerald turquoise wadi waters.",
          FR: "Explorez le fort historique de Nizwa, parcourez les canyons du Djebel Akhdar et baignez-vous dans les eaux turquoise des wadis."
        }
      },
      {
        id: "sharqiyah",
        name: { EN: "Wahiba Desert & Sur", FR: "Désert de Wahiba & Sur" },
        labelPos: { x: 395, y: 250, align: "start" },
        pinPos: { x: 360, y: 210 },
        hasLine: true,
        linePath: "M 360 210 L 390 250",
        path: "M 320 220 L 340 180 L 390 180 L 350 280 L 280 250 Z",
        highlights: { EN: "Desert Glamping & Sea Turtle Nesting", FR: "Glamping dans le désert & tortues marines" },
        description: {
          EN: "Spend a luxury night glamping under the stars in the Wahiba Sands desert, and watch green sea turtles nest at Sur's coast.",
          FR: "Passez une nuit de glamping sous les étoiles dans le désert de Wahiba et observez les tortues pondre sur la côte de Sur."
        }
      },
      {
        id: "dhofar",
        name: { EN: "Dhofar (Salalah)", FR: "Dhofar (Salalah)" },
        labelPos: { x: 110, y: 390, align: "end" },
        pinPos: { x: 180, y: 420 },
        hasLine: true,
        linePath: "M 115 390 L 180 420",
        path: "M 150 450 L 250 380 L 280 250 L 220 260 L 140 350 Z",
        highlights: { EN: "Khareef Green Monsoon & Frankincense", FR: "Mousson verte du Khareef & arbres à encens" },
        description: {
          EN: "Witness the unique green monsoon transformations of Salalah, walk through ancient frankincense trees, and explore the Empty Quarter desert.",
          FR: "Admirez la transformation verdoyante de Salalah lors de la mousson, découvrez les arbres à encens et explorez le désert du Dhofar."
        }
      }
    ]
  },
  
  // Saudi Arabia — ID "4"
  "4": {
    discoverRealm: { FR: "DÉCOUVREZ LE ROYAUME", EN: "DISCOVER THE KINGDOM" },
    exploringRegions: { FR: "EXPLORATION DU ROYAUME", EN: "EXPLORING KINGDOM" },
    discoverTitle: { FR: "Découvrir l'Arabie Saoudite", EN: "Discover Saudi Arabia" },
    defaultDesc: {
      FR: "Dévoilez les tombes de Hegra, plongez dans la Mer Rouge et explorez les châteaux de terre de Riyad. Découvrez une nouvelle frontière du voyage.",
      EN: "Unveil the sandstone tombs of Hegra, dive the pristine Red Sea, and explore Riyadh's ancient clay castles. Experience the new frontier of travel."
    },
    exploreBtn: { FR: "EXPLORER NOS PORTFOLIOS", EN: "EXPLORE PORTFOLIOS" },
    highlightsLabel: { FR: "POINTS FORTS DE LA RÉGION :", EN: "REGION HIGHLIGHTS:" },
    hoverPrompt: { FR: "Survolez les régions pour explorer le Royaume.", EN: "Hover over regions to explore the Kingdom." },
    
    viewBox: "0 0 500 500",
    oceanPath: "M 0 0 L 120 120 L 150 200 L 180 280 L 230 380 L 0 500 Z",
    oceanLabel: { FR: "Mer Rouge", EN: "Red Sea" },
    oceanLabelPos: { x: 70, y: 280 },
    
    landPath: "M 120 120 L 250 140 L 380 160 L 360 250 L 410 320 L 320 360 L 230 380 L 180 280 L 150 200 Z",
    
    regions: [
      {
        id: "alula",
        name: { EN: "AlUla & Hegra", FR: "AlUla & Hegra" },
        labelPos: { x: 230, y: 160, align: "start" },
        pinPos: { x: 170, y: 160 },
        hasLine: true,
        linePath: "M 170 160 L 225 160",
        path: "M 120 120 L 220 135 L 200 220 L 150 200 Z",
        highlights: { EN: "Sandstone Hegra Tombs & Maraya Hall", FR: "Tombes de grès à Hegra & Salle Maraya" },
        description: {
          EN: "Wander through the UNESCO ruins of Hegra, see Elephant Rock, and stand before the world's largest mirrored building, Maraya.",
          FR: "Parcourez les ruines de l'UNESCO à Hegra, admirez le Rocher de l'Éléphant et découvrez le bâtiment miroir de Maraya."
        }
      },
      {
        id: "hejaz",
        name: { EN: "Red Sea & Jeddah", FR: "Mer Rouge & Djeddah" },
        labelPos: { x: 100, y: 250, align: "end" },
        pinPos: { x: 190, y: 250 },
        hasLine: true,
        linePath: "M 105 250 L 190 250",
        path: "M 150 200 L 200 220 L 220 300 L 180 280 Z",
        highlights: { EN: "Jeddah Al-Balad & Luxury Yachting", FR: "Djeddah Al-Balad & Yachting de Luxe" },
        description: {
          EN: "Explore the coral-brick houses of historic Jeddah Al-Balad, dive pristine Red Sea reefs, and sail on an ultra-luxury private yacht.",
          FR: "Explorez les maisons en corail de Djeddah Al-Balad, plongez dans la Mer Rouge et naviguez sur un yacht de prestige."
        }
      },
      {
        id: "najd",
        name: { EN: "Riyadh & Diriyah", FR: "Riyad & Diriyah" },
        labelPos: { x: 385, y: 220, align: "start" },
        pinPos: { x: 300, y: 200 },
        hasLine: true,
        linePath: "M 300 200 L 380 220",
        path: "M 220 135 L 380 160 L 360 250 L 310 310 L 200 220 Z",
        highlights: { EN: "Clay Castle Diriyah & Edge of the World", FR: "Château d'argile de Diriyah & Edge of the World" },
        description: {
          EN: "Visit the clay palaces of Diriyah (the birthplace of the Saudi state), and look out from the dramatic 300m cliffs of the Edge of the World.",
          FR: "Visitez les palais en terre de Diriyah (berceau de l'État saoudien) et admirez les falaises de l'Edge of the World."
        }
      },
      {
        id: "asir",
        name: { EN: "Asir & Abha", FR: "Asir & Abha" },
        labelPos: { x: 140, y: 340, align: "end" },
        pinPos: { x: 240, y: 340 },
        hasLine: true,
        linePath: "M 145 340 L 240 340",
        path: "M 180 280 L 220 300 L 310 310 L 320 360 L 230 380 Z",
        highlights: { EN: "Cable Cars & Rijal Almaa Stone Village", FR: "Téléphériques & village en pierre de Rijal Almaa" },
        description: {
          EN: "Ascend the misty green mountains of Abha, ride cable cars over deep canyons, and explore the ancient gingerbread stone village of Rijal Almaa.",
          FR: "Montez dans les montagnes brumeuses d'Abha, survolez des canyons en téléphérique et explorez le village traditionnel de Rijal Almaa."
        }
      }
    ]
  }
};

export default function MapSection({ countryId = "1" }: { countryId?: string }) {
  const { lang } = useLang();
  
  // Safe lookup of map configuration based on prop
  const mapConfig = mapsData[countryId] || mapsData["1"];
  const [activeRegion, setActiveRegion] = useState<typeof mapConfig.regions[number] | null>(null);

  // Determine current active text elements
  const currentTitle = activeRegion ? translate(activeRegion.name, lang) : translate(mapConfig.discoverTitle, lang);
  const currentDesc = activeRegion ? translate(activeRegion.description, lang) : translate(mapConfig.defaultDesc, lang);
  const currentSubtitle = activeRegion ? translate(mapConfig.exploringRegions, lang) : translate(mapConfig.discoverRealm, lang);

  return (
    <div className="relative max-w-[1200px] mx-auto my-20 px-6 sm:px-12 py-16 rounded-[2.5rem] overflow-hidden bg-[#faf9f5] border border-zinc-200/80 shadow-card-soft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-zinc-900 select-none">
      
      {/* Absolute Soft Watercolor Blots for visual layout depth */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A880]/15 rounded-full filter blur-[55px] pointer-events-none -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/10 rounded-full filter blur-[70px] pointer-events-none -translate-x-20 translate-y-20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C5A880]/15 rounded-full filter blur-[60px] pointer-events-none translate-x-12 -translate-y-12" />

      {/* Map Column (lg:col-span-7) */}
      <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[520px] bg-white rounded-3xl border border-zinc-200/40 p-4 shadow-sm overflow-hidden flex items-center justify-center z-10">
        
        {/* Interactive SVG Map */}
        <svg
          viewBox={mapConfig.viewBox}
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
          
          {/* Ocean Label */}
          <text
            x={mapConfig.oceanLabelPos.x}
            y={mapConfig.oceanLabelPos.y}
            className="font-serif italic text-[11px] fill-[#8c827a]/60 font-semibold tracking-wider"
          >
            {translate(mapConfig.oceanLabel, lang)}
          </text>

          {/* Neighbor Landmass Decoration (like Spain for Morocco or Qatar/Oman exclave for UAE) */}
          {mapConfig.spainLandPath && (
            <path
              d={mapConfig.spainLandPath}
              fill="#F4EFE6"
              stroke="#e4e4e7"
              strokeWidth="0.75"
              opacity="0.85"
            />
          )}
          {mapConfig.spainLabel && mapConfig.spainLabelPos && (
            <text
              x={mapConfig.spainLabelPos.x}
              y={mapConfig.spainLabelPos.y}
              className="font-sans text-[8px] tracking-[0.2em] fill-[#8c827a]/70 font-semibold uppercase"
            >
              {translate(mapConfig.spainLabel, lang)}
            </text>
          )}

          {/* Extra neighbor lands */}
          {mapConfig.extraLandPaths?.map((island, idx) => (
            <path
              key={idx}
              d={island.path}
              fill="#F4EFE6"
              stroke="#e4e4e7"
              strokeWidth="0.75"
            />
          ))}
          {mapConfig.extraLabels?.map((label, idx) => (
            <text
              key={idx}
              x={label.x}
              y={label.y}
              className="font-sans text-[8px] tracking-wider fill-[#8c827a]/70 font-medium"
            >
              {label.text}
            </text>
          ))}

          {/* Base Country Landmass (Sand cream) */}
          <path
            d={mapConfig.landPath}
            fill="#F3EEE3"
            stroke="#d4d4d8"
            strokeWidth="1"
          />

          {/* Regional Interactive Layer Paths */}
          {mapConfig.regions.map((reg) => {
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

          {/* Sahara special text overlay (for Morocco map) */}
          {countryId === "1" && (
            <text
              x="200"
              y="435"
              pointerEvents="none"
              className="font-heading font-semibold text-[10px] tracking-[0.3em] fill-[#6B5335]/70 uppercase text-center"
              style={{ textAnchor: "middle" }}
            >
              SAHARA
            </text>
          )}

          {/* Connection Lines from Label to Pin */}
          {mapConfig.regions.map((reg) => {
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
          {mapConfig.regions.map((reg) => {
            const isActive = activeRegion?.id === reg.id;
            return (
              <text
                key={`label-${reg.id}`}
                x={reg.labelPos.x}
                y={reg.labelPos.y}
                className={`font-sans text-[9px] tracking-widest font-semibold uppercase cursor-pointer transition-colors duration-300 ${
                  isActive ? "fill-[#8B2635] font-bold" : "fill-[#6B5335]/90 hover:fill-[#8B2635]"
                }`}
                style={{ textAnchor: reg.labelPos.align as "start" | "end" | "middle" }}
                onMouseEnter={() => setActiveRegion(reg)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {translate(reg.name, lang)}
              </text>
            );
          })}

          {/* Animated Cities / Regions Pin Nodes */}
          {mapConfig.regions.map((reg) => {
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
          {translate(mapConfig.hoverPrompt, lang)}
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
                  {translate(mapConfig.highlightsLabel, lang)}
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
                {mapConfig.regions.map((reg) => (
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
            {translate(mapConfig.exploreBtn, lang)}
          </a>
        </div>
      </div>

    </div>
  );
}
