'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useLang, translate } from "../context/lang-context";
import { itineraryThemes, MapPinDetail } from "@/data/itineraries";

const MAP_BACKGROUND_IMAGE = "/images/moroco.webp"; // Current map aspect ratio: 830 x 553 (approx 3:2)

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
  extraLabels?: { text: { FR: string; EN: string }; x: number; y: number }[];
  
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
      { text: { EN: "Canary Islands", FR: "Îles Canaries" }, x: 85, y: 415 }
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
    
    viewBox: "0 0 600 480",
    oceanPath: "M 0 0 L 600 0 L 600 240 L 0 240 Z",
    oceanLabel: { FR: "Golfe Persique", EN: "Persian Gulf" },
    oceanLabelPos: { x: 180, y: 110 },
    
    landPath: "M 60 280 C 80 270, 100 260, 120 260 C 160 255, 200 250, 240 250 C 270 240, 290 230, 310 235 C 330 230, 350 210, 375 185 C 390 170, 400 155, 410 145 C 425 125, 440 100, 450 90 L 465 50 L 485 90 L 490 220 L 450 280 L 380 410 L 140 410 L 140 340 L 60 340 Z",
    spainLandPath: "M 0 480 L 0 250 L 35 250 L 68 255 L 60 280 L 60 340 L 140 340 L 140 410 L 380 410 L 450 280 L 420 380 L 400 480 L 0 480 Z",
    spainLabel: { FR: "ARABIE SAOUDITE", EN: "SAUDI ARABIA" },
    spainLabelPos: { x: 120, y: 440 },
    
    extraLandPaths: [
      { path: "M 450 280 L 490 220 L 520 230 L 530 350 L 480 440 L 380 410 Z" }, // Oman Mainland
      { path: "M 15 240 C 10 200, 15 170, 25 160 C 35 150, 42 165, 40 195 C 38 215, 45 235, 48 245 Z" }, // Qatar Peninsula
      { path: "M 110 245 C 105 240, 120 235, 125 242 C 122 248, 113 250, 110 245 Z" }, // Sir Baniyas
      { path: "M 190 238 C 185 236, 205 230, 208 236 C 200 242, 192 243, 190 238 Z" }, // Marawah
      { path: "M 245 242 C 240 239, 260 235, 263 241 C 255 247, 247 245, 245 242 Z" }, // Abu Al Abyad
      { path: "M 465 50 L 472 25 L 480 20 L 488 35 L 480 90 Z" } // Musandam (Oman exclave)
    ],
    extraLabels: [
      { text: { EN: "Oman (exclave)", FR: "Oman (exclave)" }, x: 505, y: 45 },
      { text: { EN: "Gulf of Oman", FR: "Golfe d'Oman" }, x: 525, y: 150 },
      { text: { EN: "QATAR", FR: "QATAR" }, x: 25, y: 285 },
      { text: { EN: "OMAN", FR: "OMAN" }, x: 510, y: 340 }
    ],
    
    regions: [
      {
        id: "dubai",
        name: { EN: "Dubai", FR: "Dubaï" },
        labelPos: { x: 320, y: 155, align: "end" },
        pinPos: { x: 400, y: 155 },
        hasLine: true,
        linePath: "M 325 155 L 395 155",
        path: "M 375 185 C 390 170, 400 155, 410 145 C 420 165, 430 185, 440 210 C 410 235, 385 220, 375 185 Z",
        highlights: { EN: "Burj Khalifa & Palm Yacht Cruise", FR: "Burj Khalifa & croisière yacht à Palm Jumeirah" },
        description: {
          EN: "Explore the futuristic skyscraper skyline, luxury dune dining, private yacht charters, and golden beach resorts of Dubai.",
          FR: "Explorez les gratte-ciel futuristes, les dîners de luxe dans les dunes, les yachts privés et les complexes de plage de Dubaï."
        }
      },
      {
        id: "abu-dhabi",
        name: { EN: "Abu Dhabi", FR: "Abou Dabi" },
        labelPos: { x: 230, y: 230, align: "end" },
        pinPos: { x: 310, y: 235 },
        hasLine: true,
        linePath: "M 235 230 L 305 235",
        path: "M 60 280 C 80 270, 100 260, 120 260 C 160 255, 200 250, 240 250 C 270 240, 290 230, 310 235 C 330 230, 350 210, 375 185 C 385 220, 410 235, 440 210 L 450 280 L 380 410 L 140 410 L 140 340 L 60 340 Z",
        highlights: { EN: "Sheikh Zayed Grand Mosque & Louvre", FR: "Grande Mosquée Cheikh Zayed & Musée du Louvre" },
        description: {
          EN: "Visit the cultural monuments of the Louvre Abu Dhabi, the spectacular Sheikh Zayed Grand Mosque, and the empty quarter desert.",
          FR: "Visitez les monuments culturels du Louvre Abou Dabi, la spectaculaire Grande Mosquée Cheikh Zayed et le désert de Liwa."
        }
      },
      {
        id: "northern-emirates",
        name: { EN: "Northern Emirates", FR: "Émirats du Nord" },
        labelPos: { x: 510, y: 100, align: "start" },
        pinPos: { x: 445, y: 100 },
        hasLine: true,
        linePath: "M 450 100 L 505 100",
        path: "M 410 145 C 425 125, 440 100, 450 90 L 465 50 L 485 90 L 490 220 L 450 280 L 440 210 C 430 185, 420 165, 410 145 Z",
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
    oceanPath: "M 0 0 L 500 0 L 500 500 L 0 500 Z",
    oceanLabel: { FR: "Mer d'Arabie", EN: "Arabian Sea" },
    oceanLabelPos: { x: 320, y: 380 },
    
    landPath: "M 240 100 L 330 135 C 360 145, 380 155, 400 170 C 410 190, 390 230, 360 270 C 350 280, 335 300, 320 330 C 290 360, 240 400, 180 440 L 110 460 L 70 400 L 210 170 L 225 140 L 240 140 Z",
    spainLandPath: "M 0 500 L 0 0 L 220 0 L 210 170 L 70 400 L 110 460 L 0 500 Z",
    spainLabel: { FR: "ARABIE SAOUDITE", EN: "SAUDI ARABIA" },
    spainLabelPos: { x: 80, y: 260 },
    
    extraLandPaths: [
      { path: "M 390 290 C 385 285, 400 280, 405 288 C 402 295, 393 295, 390 290 Z" }, // Masirah Island
      { path: "M 240 100 L 240 140 L 225 140 L 210 170 L 180 150 L 200 80 L 240 100 Z" }, // UAE land decoration
      { path: "M 240 30 L 245 15 L 250 10 L 255 18 L 250 45 Z" } // Musandam (Oman exclave)
    ],
    extraLabels: [
      { text: { EN: "Musandam (Oman)", FR: "Musandam (Oman)" }, x: 265, y: 35 },
      { text: { EN: "UNITED ARAB EMIRATES", FR: "ÉMIRATS ARABES UNIS" }, x: 130, y: 120 },
      { text: { EN: "YEMEN", FR: "YÉMEN" }, x: 40, y: 450 },
      { text: { EN: "Gulf of Oman", FR: "Golfe d'Oman" }, x: 390, y: 100 }
    ],
    
    regions: [
      {
        id: "muscat",
        name: { EN: "Muscat & Coast", FR: "Mascate & Côte" },
        labelPos: { x: 415, y: 140, align: "start" },
        pinPos: { x: 355, y: 155 },
        hasLine: true,
        linePath: "M 355 155 L 410 140",
        path: "M 240 100 L 330 135 C 360 145, 380 155, 400 170 L 300 180 Z",
        highlights: { EN: "Sultan Qaboos Mosque & Dhow Cruise", FR: "Mosquée Sultan Qaboos & croisière en boutre" },
        description: {
          EN: "Stroll through the Mutrah Souq, visit the Sultan Qaboos Grand Mosque, and sail along Muscat's dramatic volcanic coast.",
          FR: "Flânez dans le souk de Mutrah, visitez la Grande Mosquée du Sultan Qaboos et naviguez le long de la côte volcanique de Mascate."
        }
      },
      {
        id: "hajar",
        name: { EN: "Hajar Mountains & Wadis", FR: "Monts Hajar & Wadis" },
        labelPos: { x: 195, y: 185, align: "end" },
        pinPos: { x: 265, y: 165 },
        hasLine: true,
        linePath: "M 200 185 L 260 165",
        path: "M 240 100 L 300 180 L 250 270 L 160 260 L 210 170 L 225 140 L 240 140 Z",
        highlights: { EN: "Jebel Akhdar Canyons & Nizwa Fort", FR: "Canyons du Djebel Akhdar & Fort de Nizwa" },
        description: {
          EN: "Explore Nizwa's historic clay fort, trek through green mountain canyons of Jebel Akhdar, and swim in emerald turquoise wadi waters.",
          FR: "Explorez le fort historique de Nizwa, parcourez les canyons du Djebel Akhdar et baignez-vous dans les eaux turquoise des wadis."
        }
      },
      {
        id: "sharqiyah",
        name: { EN: "Wahiba Desert & Sur", FR: "Désert de Wahiba & Sur" },
        labelPos: { x: 415, y: 265, align: "start" },
        pinPos: { x: 355, y: 235 },
        hasLine: true,
        linePath: "M 360 235 L 410 265",
        path: "M 400 170 C 410 190, 390 230, 360 270 C 350 280, 335 300, 320 330 L 250 270 L 300 180 Z",
        highlights: { EN: "Desert Glamping & Sea Turtle Nesting", FR: "Glamping dans le désert & tortues marines" },
        description: {
          EN: "Spend a luxury night glamping under the stars in the Wahiba Sands desert, and watch green sea turtles nest at Sur's coast.",
          FR: "Passez une nuit de glamping sous les étoiles dans le désert de Wahiba et observez les tortues pondre sur la côte de Sur."
        }
      },
      {
        id: "dhofar",
        name: { EN: "Dhofar (Salalah)", FR: "Dhofar (Salalah)" },
        labelPos: { x: 115, y: 350, align: "end" },
        pinPos: { x: 175, y: 410 },
        hasLine: true,
        linePath: "M 120 350 L 170 405",
        path: "M 250 270 L 320 330 C 290 360, 240 400, 180 440 L 110 460 L 70 400 L 160 260 Z",
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
    oceanLabelPos: { x: 50, y: 310 },
    
    landPath: "M 50 140 L 110 120 L 180 130 C 220 120, 280 140, 310 160 L 330 170 C 370 180, 410 210, 450 310 L 320 390 L 190 410 C 180 380, 160 350, 155 330 C 145 300, 135 270, 125 240 C 105 210, 80 180, 50 140 Z",
    
    extraLandPaths: [
      { path: "M 410 210 L 420 195 L 430 200 L 425 215 Z" } // Qatar Peninsula
    ],
    extraLabels: [
      { text: { EN: "Persian Gulf", FR: "Golfe Persique" }, x: 420, y: 140 },
      { text: { EN: "JORDAN", FR: "JORDANIE" }, x: 35, y: 100 },
      { text: { EN: "IRAQ", FR: "IRAK" }, x: 210, y: 90 },
      { text: { EN: "KUWAIT", FR: "KOWEÏT" }, x: 335, y: 130 },
      { text: { EN: "QATAR", FR: "QATAR" }, x: 445, y: 195 },
      { text: { EN: "UAE", FR: "EAU" }, x: 450, y: 240 },
      { text: { EN: "OMAN", FR: "OMAN" }, x: 410, y: 340 },
      { text: { EN: "YEMEN", FR: "YÉMEN" }, x: 240, y: 440 }
    ],
    
    regions: [
      {
        id: "alula",
        name: { EN: "AlUla & Hegra", FR: "AlUla & Hegra" },
        labelPos: { x: 180, y: 160, align: "start" },
        pinPos: { x: 100, y: 180 },
        hasLine: true,
        linePath: "M 100 180 L 175 160",
        path: "M 50 140 L 110 120 L 160 140 L 125 240 C 105 210, 80 180, 50 140 Z",
        highlights: { EN: "Sandstone Hegra Tombs & Maraya Hall", FR: "Tombes de grès à Hegra & Salle Maraya" },
        description: {
          EN: "Wander through the UNESCO ruins of Hegra, see Elephant Rock, and stand before the world's largest mirrored building, Maraya.",
          FR: "Parcourez les ruines de l'UNESCO à Hegra, admirez le Rocher de l'Éléphant et découvrez le bâtiment miroir de Maraya."
        }
      },
      {
        id: "hejaz",
        name: { EN: "Red Sea & Jeddah", FR: "Mer Rouge & Djeddah" },
        labelPos: { x: 80, y: 270, align: "end" },
        pinPos: { x: 155, y: 280 },
        hasLine: true,
        linePath: "M 85 270 L 150 280",
        path: "M 125 240 L 160 140 L 220 170 L 210 300 L 155 330 C 145 300, 135 270, 125 240 Z",
        highlights: { EN: "Jeddah Al-Balad & Luxury Yachting", FR: "Djeddah Al-Balad & Yachting de Luxe" },
        description: {
          EN: "Explore the coral-brick houses of historic Jeddah Al-Balad, dive pristine Red Sea reefs, and sail on an ultra-luxury private yacht.",
          FR: "Explorez les maisons en corail de Djeddah Al-Balad, plongez dans la Mer Rouge et naviguez sur un yacht de prestige."
        }
      },
      {
        id: "najd",
        name: { EN: "Riyadh & Diriyah", FR: "Riyad & Diriyah" },
        labelPos: { x: 360, y: 220, align: "start" },
        pinPos: { x: 280, y: 240 },
        hasLine: true,
        linePath: "M 280 240 L 355 220",
        path: "M 160 140 L 180 130 C 220 120, 280 140, 310 160 L 330 170 C 370 180, 410 210, 450 310 L 320 390 L 210 300 L 220 170 Z",
        highlights: { EN: "Clay Castle Diriyah & Edge of the World", FR: "Château d'argile de Diriyah & Edge of the World" },
        description: {
          EN: "Visit the clay palaces of Diriyah (the birthplace of the Saudi state), and look out from the dramatic 300m cliffs of the Edge of the World.",
          FR: "Visitez les palais en terre de Diriyah (berceau de l'État saoudien) et admirez les falaises de l'Edge of the World."
        }
      },
      {
        id: "asir",
        name: { EN: "Asir & Abha", FR: "Asir & Abha" },
        labelPos: { x: 135, y: 360, align: "end" },
        pinPos: { x: 215, y: 350 },
        hasLine: true,
        linePath: "M 140 360 L 210 350",
        path: "M 155 330 L 210 300 L 320 390 L 190 410 C 180 380, 160 350, 155 330 Z",
        highlights: { EN: "Cable Cars & Rijal Almaa Stone Village", FR: "Téléphériques & village en pierre de Rijal Almaa" },
        description: {
          EN: "Ascend the misty green mountains of Abha, ride cable cars over deep canyons, and explore the ancient gingerbread stone village of Rijal Almaa.",
          FR: "Montez dans les montagnes brumeuses d'Abha, survolez des canyons en téléphérique et explorez le village traditionnel de Rijal Almaa."
        }
      }
    ]
  }
};

export default function MapSection({ countryId = "1", itineraryId }: { countryId?: string; itineraryId?: string }) {
  const { lang } = useLang();

  // Safe lookup of map configuration based on prop
  const mapConfig = (() => {
    switch (countryId) {
      case "1": return mapsData["1"];
      case "2": return mapsData["2"];
      case "3": return mapsData["3"];
      case "4": return mapsData["4"];
      default: return mapsData["1"];
    }
  })();

  const itineraryTheme = itineraryId ? itineraryThemes[itineraryId] : null;
  const itineraryPins = itineraryTheme?.mapPins || null;

  const [activeRegion, setActiveRegion] = useState<typeof mapConfig.regions[number] | null>(null);
  const [activeItineraryPin, setActiveItineraryPin] = useState<MapPinDetail | null>(null);

  // Dev-only pin calibration mode — visit an itinerary page with ?pinDebug=1 in development
  // to click/drag on the map and read off the exact top%/left% for a pin.
  const [pinDebugEnabled, setPinDebugEnabled] = useState(false);
  const [debugClickCoord, setDebugClickCoord] = useState<{ top: number; left: number } | null>(null);
  const [debugPinOverrides, setDebugPinOverrides] = useState<Record<number, { top: number; left: number }>>({});
  const [draggingPinIndex, setDraggingPinIndex] = useState<number | null>(null);
  const mapBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && new URLSearchParams(window.location.search).get("pinDebug") === "1") {
      setPinDebugEnabled(true);
    }
  }, []);

  const coordFromPointer = (clientX: number, clientY: number) => {
    const rect = mapBoxRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const left = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    const top = Math.min(100, Math.max(0, ((clientY - rect.top) / rect.height) * 100));
    return { top: Math.round(top * 10) / 10, left: Math.round(left * 10) / 10 };
  };

  const handleDebugMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pinDebugEnabled || draggingPinIndex !== null) return;
    const coord = coordFromPointer(e.clientX, e.clientY);
    if (!coord) return;
    setDebugClickCoord(coord);
    console.log(`[pinDebug] top: "${coord.top}%", left: "${coord.left}%"`);
  };

  const handlePinDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingPinIndex === null) return;
    const coord = coordFromPointer(e.clientX, e.clientY);
    if (!coord) return;
    setDebugPinOverrides((prev) => ({ ...prev, [draggingPinIndex]: coord }));
  };

  const handlePinDragEnd = (index: number) => {
    setDraggingPinIndex(null);
    const coord = debugPinOverrides[index];
    if (coord) {
      console.log(`[pinDebug] pin ${index} dropped at top: "${coord.top}%", left: "${coord.left}%"`);
    }
  };

  // Determine current active text elements
  const currentTitle = activeRegion 
    ? translate(activeRegion.name, lang) 
    : (activeItineraryPin 
        ? translate(activeItineraryPin.name, lang) 
        : (itineraryTheme 
            ? translate(itineraryTheme.discoverTitle, lang) 
            : translate(mapConfig.discoverTitle, lang)));

  const currentDesc = activeRegion 
    ? translate(activeRegion.description, lang) 
    : (itineraryTheme 
        ? translate(itineraryTheme.discoverDesc, lang) 
        : translate(mapConfig.defaultDesc, lang));

  const currentSubtitle = activeRegion 
    ? translate(mapConfig.exploringRegions, lang) 
    : (itineraryTheme 
        ? translate(itineraryTheme.heroTitle, lang) 
        : translate(mapConfig.discoverRealm, lang));

  return (
    <div className="relative max-w-[1200px] mx-auto my-20 px-6 sm:px-12 py-16 rounded-[2.5rem] overflow-hidden bg-[#faf9f5] border border-zinc-200/80 shadow-card-soft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-zinc-900 select-none">
      
      {/* Absolute Soft Watercolor Blots for visual layout depth */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A880]/15 rounded-full filter blur-[55px] pointer-events-none -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/10 rounded-full filter blur-[70px] pointer-events-none -translate-x-20 translate-y-20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C5A880]/15 rounded-full filter blur-[60px] pointer-events-none translate-x-12 -translate-y-12" />

      {/* Map Column (lg:col-span-7) */}
      <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[520px] bg-white rounded-3xl border border-zinc-200/40 p-4 shadow-sm overflow-hidden flex items-center justify-center z-10">

        {/* aspect-[3/2] box keeps the SVG/pins and any future swappable MAP_BACKGROUND_IMAGE in lockstep across viewports */}
        <div
          ref={mapBoxRef}
          onClick={handleDebugMapClick}
          onPointerMove={handlePinDragMove}
          onPointerUp={() => draggingPinIndex !== null && handlePinDragEnd(draggingPinIndex)}
          className={`aspect-[3/2] w-full max-h-full max-w-full relative flex items-center justify-center ${pinDebugEnabled ? "cursor-crosshair" : ""}`}
        >
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
          <rect width="100%" height="100%" fill="url(#ocean-grid)" opacity="0.8" />
          
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
              {translate(label.text, lang)}
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
            const isActive = !itineraryId && activeRegion?.id === reg.id;
            return (
              <path
                key={reg.id}
                d={reg.path}
                fill={isActive ? "#C5A880" : "transparent"}
                fillOpacity={isActive ? "0.6" : "0"}
                stroke={isActive ? "#A3835B" : "#e4e4e7"}
                strokeWidth={isActive ? "1.5" : "0.5"}
                filter={isActive ? "url(#glow)" : undefined}
                className={itineraryId ? "" : "cursor-pointer transition-all duration-300 ease-in-out hover:fill-[#C5A880]/30"}
                onMouseEnter={itineraryId ? undefined : () => setActiveRegion(reg)}
                onMouseLeave={itineraryId ? undefined : () => setActiveRegion(null)}
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
              {translate({ FR: "SAHARA", EN: "SAHARA" }, lang)}
            </text>
          )}

          {/* Connection Lines from Label to Pin */}
          {!itineraryId && mapConfig.regions.map((reg) => {
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
          {!itineraryId && mapConfig.regions.map((reg) => {
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
          {!itineraryId && mapConfig.regions.map((reg) => {
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

        {/* Dynamic Itinerary Specific Pins */}
        {itineraryPins && itineraryPins.map((pin, index) => {
          const isHovered = activeItineraryPin === pin;
          const isAnyPinHovered = activeItineraryPin !== null;
          const opacityVal = isHovered ? 1 : (isAnyPinHovered ? 0.25 : 1);
          const scaleVal = isHovered ? 1.25 : (isAnyPinHovered ? 0.8 : 1);
          const zIndexVal = isHovered ? 30 : 20;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: opacityVal, scale: scaleVal }}
              transition={{
                delay: isAnyPinHovered ? 0 : index * 0.1,
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 200, damping: 20 }
              }}
              style={{ top: pin.top, left: pin.left, zIndex: zIndexVal }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto cursor-pointer"
              onMouseEnter={() => setActiveItineraryPin(pin)}
              onMouseLeave={() => setActiveItineraryPin(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" overflow="visible">
                {/* Pulsing outer ring — only when hovered */}
                {isHovered && (
                  <circle
                    cx="12" cy="12" r="10"
                    fill="#8B2635"
                    opacity="0.35"
                    className="animate-ping"
                    style={{ transformOrigin: '12px 12px' }}
                  />
                )}
                {/* Outer ring circle */}
                <circle
                  cx="12" cy="12" r="6"
                  fill={isHovered ? "#8B2635" : "#FAF8F5"}
                  stroke={isHovered ? "#FAF8F5" : "#A3835B"}
                  strokeWidth="1.5"
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* Inner center dot */}
                <circle
                  cx="12" cy="12" r="2.2"
                  fill={isHovered ? "#FAF8F5" : "#A3835B"}
                  style={{ transition: 'all 0.3s ease' }}
                />
              </svg>
              {/* Tooltip label — always visible */}
              <div className="bg-zinc-950/85 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-[#faf9f5] text-[9px] font-sans font-medium tracking-wide whitespace-nowrap mt-0.5 shadow-sm pointer-events-none">
                {translate(pin.name, lang)}
              </div>
            </motion.div>
          );
        })}

        {/* Dev-only pin calibration overlay (?pinDebug=1) */}
        {pinDebugEnabled && (
          <>
            {/* Reference background — swap MAP_BACKGROUND_IMAGE once the client picks a final map photo on the call */}
            <img
              src={MAP_BACKGROUND_IMAGE}
              alt="Calibration reference"
              className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
            />

            {itineraryPins && itineraryPins.map((pin, index) => {
              const override = debugPinOverrides[index];
              const top = override ? `${override.top}%` : pin.top;
              const left = override ? `${override.left}%` : pin.left;
              return (
                <div
                  key={`debug-${index}`}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setDraggingPinIndex(index);
                  }}
                  style={{ top, left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500/80 border-2 border-white shadow-lg cursor-grab active:cursor-grabbing z-40"
                  title={translate(pin.name, lang)}
                />
              );
            })}

            {/* Live coordinate readout */}
            <div className="absolute top-2 left-2 z-50 bg-black/85 text-white text-[10px] font-mono px-2 py-1.5 rounded-md pointer-events-none space-y-0.5">
              <div>pinDebug: click map or drag red dots</div>
              {debugClickCoord && (
                <div>last click → top: "{debugClickCoord.top}%", left: "{debugClickCoord.left}%"</div>
              )}
              {draggingPinIndex !== null && debugPinOverrides[draggingPinIndex] && (
                <div>
                  dragging pin {draggingPinIndex} → top: "{debugPinOverrides[draggingPinIndex].top}%", left: "{debugPinOverrides[draggingPinIndex].left}%"
                </div>
              )}
            </div>
          </>
        )}
        </div>

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
            ) : itineraryPins ? (
              <motion.div
                key="itinerary-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 gap-x-4 gap-y-2.5"
              >
                {itineraryPins.map((pin, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-2 cursor-pointer group"
                    onMouseEnter={() => setActiveItineraryPin(pin)}
                    onMouseLeave={() => setActiveItineraryPin(null)}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 group-hover:bg-[#8B2635] transition-colors shrink-0" />
                    <span className="font-sans text-[11px] font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">
                      {translate(pin.name, lang)}
                    </span>
                  </div>
                ))}
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
          <Link
            href="/#portfolios"
            className="w-full sm:w-auto border border-zinc-900 bg-zinc-900 text-white hover:bg-transparent hover:text-zinc-900 font-semibold text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury rounded-full shadow-sm text-center cursor-pointer"
          >
            {translate(mapConfig.exploreBtn, lang)}
          </Link>
        </div>
      </div>

    </div>
  );
}
