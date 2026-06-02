'use client';

import React, { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Hotel } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useLang } from "../../context/lang-context";

interface DayPlan {
  day: number;
  title: { FR: string; EN: string };
  desc: { FR: string; EN: string };
}

interface HotelDetail {
  name: string;
  stars: number;
  desc: { FR: string; EN: string };
  link: string;
}

interface ActivityDetail {
  title: { FR: string; EN: string };
  desc: { FR: string; EN: string };
}

interface ItineraryDetail {
  id: number;
  image: string;
  contentImage: string;
  title: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  cost: string;
  overview: { FR: string; EN: string };
  timeline: DayPlan[];
  inclusions: { FR: string[]; EN: string[] };
  exclusions: { FR: string[]; EN: string[] };
  options: {
    FR: { name: string; price: string }[];
    EN: { name: string; price: string }[];
  };
  hotels: HotelDetail[];
  activities: ActivityDetail[];
}

const itinerariesData: Record<string, ItineraryDetail> = {
  "1": {
    id: 1,
    image: "/images/moroco.webp",
    contentImage: "/images/moroco.webp",
    title: { FR: "Expédition Marrakech & Sahara", EN: "Marrakech & Sahara Expedition" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: "C$ 6,200",
    overview: {
      FR: "Embarquez pour un voyage impérial à travers les joyaux du Maroc. Découvrez le charme mystique des palais de Marrakech, traversez les montagnes de l'Atlas en hélicoptère et logez dans un bivouac ultra-privé au milieu des dunes de sable fin du Sahara.",
      EN: "Embark on an imperial journey through the crown jewels of Morocco. Experience the mystical charm of Marrakech medinas, soar over the high Atlas mountains by private helicopter, and sleep in an ultra-luxury private desert camp in the heart of the Sahara."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée Impériale à Marrakech", EN: "Imperial Arrival in Marrakech" }, desc: { FR: "Accueil VIP à la sortie de l'avion, transfert privé en SUV de luxe vers votre riad exclusif dans l'Hivernage.", EN: "VIP tarmac greeting, private luxury SUV transfer to your exclusive boutique riad buyout in the Hivernage district." } },
      { day: 2, title: { FR: "Les Secrets de la Médina", EN: "Secrets of the Medina" }, desc: { FR: "Visite guidée privée du Palais de la Bahia et du Jardin Majorelle, suivie d'un dîner gastronomique marocain.", EN: "Private guided tour of Bahia Palace and Majorelle Garden, followed by a bespoke Moroccan culinary dinner." } },
      { day: 3, title: { FR: "Vol Privé vers le Sahara", EN: "Private Heli-flight to Sahara" }, desc: { FR: "Décollage en hélicoptère privé au-dessus des cimes de l'Atlas vers les dunes géantes de Merzouga.", EN: "Board a private helicopter, flying over snow-capped Atlas peaks directly to the towering dunes of Merzouga." } },
      { day: 4, title: { FR: "Dunes & Nuit Étoilée", EN: "Dunes & Starry Night" }, desc: { FR: "Safari en quad haut de gamme, promenade à chameau au coucher du soleil et nuit de prestige sous tente de luxe.", EN: "Premium quad safari, camel trek at sunset, and an ultra-private night stargazing in a luxury desert dome." } },
      { day: 5, title: { FR: "Oasis Secrète de Skoura", EN: "Secret Oasis of Skoura" }, desc: { FR: "Voyage retour via la palmeraie de Skoura, hébergement dans une kasbah fortifiée d'exception.", EN: "Return journey through the Skoura palm oasis, checking into a gorgeous fortified kasbah reserve." } },
      { day: 6, title: { FR: "Vol Parallaxe & Canyon", EN: "Parallax Flight & Canyons" }, desc: { FR: "Survol des gorges du Dadès et déjeuner privé au-dessus des canyons.", EN: "Scenic flight over the Gorges du Dadès with a private cliffside tasting menu." } },
      { day: 7, title: { FR: "Sérénité Royale Hammam", EN: "Royal Hammam Serenity" }, desc: { FR: "Retour à Marrakech pour un rituel spa hammam de 3 heures entièrement privatisé.", EN: "Return to Marrakech for a fully privatized 3-hour luxury spa hammam and wellness treatment." } },
      { day: 8, title: { FR: "Passage de Retour", EN: "Sovereign Departure" }, desc: { FR: "Transfert privé vers le terminal VIP de l'aéroport pour votre vol de retour.", EN: "Private transfer to the airport VIP lounge and dedicated check-in desk for your flight home." } }
    ],
    inclusions: {
      FR: [
        "Vol direct aller-retour Montréal-Marrakech en classe Affaires",
        "7 nuits d'hébergement dans des établissements ultra-luxe",
        "Transferts en hélicoptère privé et SUV haut de gamme",
        "Formule pension complète avec dîners gastronomiques",
        "Concierge privé bilingue disponible 24/7"
      ],
      EN: [
        "Round-trip Business Class flight Montreal-Marrakech",
        "7 nights accommodation in ultra-luxury boutique properties",
        "Private helicopter and premium SUV transfers",
        "Gourmet full board dining package",
        "24/7 dedicated bilingual private concierge service"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage personnelle obligatoire",
        "Pourboires pour les chauffeurs, guides et personnel du camp",
        "Dépenses personnelles et boissons alcoolisées premium hors formule"
      ],
      EN: [
        "Mandatory personal travel insurance",
        "Gratuities for drivers, guides, and camp staff",
        "Personal expenditures and premium alcoholic beverages"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Jet Privé", price: "C$ 8,500" },
        { name: "Rituel de Spa Impérial Additionnel (2h)", price: "C$ 450" },
        { name: "Extension de 3 jours à Essaouira", price: "C$ 2,200" }
      ],
      EN: [
        { name: "Private Jet Charter Upgrade", price: "C$ 8,500" },
        { name: "Additional Imperial Spa Treatment (2h)", price: "C$ 450" },
        { name: "3-Day Coastal Extension in Essaouira", price: "C$ 2,200" }
      ]
    },
    hotels: [
      {
        name: "La Villa des Orangers (Marrakech)",
        stars: 5,
        desc: {
          FR: "Riad historique d'exception dans la médina, membre Relais & Châteaux, avec cour parfumée d'orangers, piscines chauffées et soins de spa traditionnels.",
          EN: "Exceptional historic riad in the medina, Relais & Châteaux member, featuring orange-blossom courtyards, heated pools, and authentic hammam treatments."
        },
        link: "#"
      },
      {
        name: "Royal Mansour Desert Camp (Sahara)",
        stars: 5,
        desc: {
          FR: "Oasis privée nomade nichée au creux des dunes du Sahara. Tentes de toile royale avec majordome dédié, salon d'apparat et vue infinie sur le désert.",
          EN: "A private nomadic sanctuary set deep in the Sahara dunes. Royal canvas tents with private butler service, dining salon, and endless desert views."
        },
        link: "#"
      }
    ],
    activities: [
      {
        title: { FR: "Survol Privé de l'Atlas", EN: "Private Atlas Heli-Flight" },
        desc: {
          FR: "Une traversée aérienne spectaculaire des sommets de l'Atlas en hélicoptère privé, reliant Marrakech au désert en un instant magique.",
          EN: "A dramatic scenic flight over the snow-capped Atlas peaks in a private helicopter, connecting Marrakech to the desert in style."
        }
      },
      {
        title: { FR: "Gastronomie chez l'Habitant", EN: "Gastronomic Cooking Masterclass" },
        desc: {
          FR: "Cours de haute cuisine marocaine mené par un chef étoilé local, suivi d'une dégustation dans les jardins du riad.",
          EN: "Bespoke Moroccan culinary masterclass led by a renowned chef, followed by a degustation dinner in the riad's lush gardens."
        }
      }
    ]
  },
  "2": {
    id: 2,
    image: "/images/dubai_skyline_hero.png",
    contentImage: "/images/dubai_skyline_hero.png",
    title: { FR: "Oasis Moderne de Dubaï & Abou Dabi", EN: "Dubai & Abu Dhabi Modern Oasis" },
    duration: { FR: "10 jours / 9 nuits", EN: "10 days / 9 nights" },
    cost: "C$ 8,250",
    overview: {
      FR: "Plongez dans le luxe contemporain et l'opulence du Golfe. De la suite penthouse surplombant la marina de Dubaï aux safaris exclusifs sous les dunes rouges d'Abou Dabi, vivez une expérience sans aucun compromis.",
      EN: "Immerse yourself in contemporary luxury and Arabian Gulf opulence. From a private penthouse suite overlooking Dubai Marina to exclusive desert glamping under the red dunes of Abu Dhabi, live an experience with zero compromises."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée VIP à Dubaï", EN: "VIP Arrival in Dubai" }, desc: { FR: "Arrivée en jet privé ou première classe, limousine avec chauffeur privé vers votre hôtel de la Marina.", EN: "VIP terminal reception, private luxury limousine transfer to your high-floor Marina penthouse suite." } },
      { day: 2, title: { FR: "L'Héli-Vol de la Marina", EN: "Marina Heli-Flight" }, desc: { FR: "Survol en hélicoptère privé de Palm Jumeirah et Burj Al Arab, suivi d'un thé de l'après-midi VIP.", EN: "Private helicopter flight over Palm Jumeirah and Burj Al Arab, followed by a VIP afternoon high tea." } },
      { day: 3, title: { FR: "Yacht de Prestige en Mer", EN: "Prestige Yacht Cruise" }, desc: { FR: "Croisière de 4 heures sur un superyacht de 100 pieds avec équipage complet et sommelier à bord.", EN: "Sailing on a 100ft superyacht with full private crew, champagne lounge, and sunset dinner." } },
      { day: 4, title: { FR: "Désert de Prestige", EN: "Prestige Desert Dunes" }, desc: { FR: "Safari privé dans les dunes rouges et dîner gastronomique de 6 plats sous les étoiles.", EN: "Private dune drive in a classic SUV, falconry show, and a 6-course gourmet dinner under the desert sky." } },
      { day: 5, title: { FR: "Transfert vers Abou Dabi", EN: "Abu Dhabi Sovereign Transfer" }, desc: { FR: "SUV privé de luxe vers le Qasr Al Sarab, le complexe hôtelier de luxe niché dans l'Empty Quarter.", EN: "SUV transfer to Qasr Al Sarab, an ultra-luxury fortress resort nestled deep in the empty quarter desert dunes." } },
      { day: 6, title: { FR: "Le Désert Majestueux", EN: "The Empty Quarter Majesty" }, desc: { FR: "Randonnée privée au lever du soleil et soin spa d'exception inspiré de l'Arabie ancienne.", EN: "Sunrise desert trek, private dune archery, and luxury spa treatments with organic honey and dates." } },
      { day: 7, title: { FR: "L'Héritage Culturel", EN: "Cultural Sovereign Heritage" }, desc: { FR: "Visite privée hors horaires du Musée du Louvre Abou Dabi et de la Mosquée Sheikh Zayed.", EN: "After-hours private guided tour of the Louvre Abu Dhabi and Sheikh Zayed Grand Mosque." } },
      { day: 8, title: { FR: "Yas Island & Golf Dunes", EN: "Yas Island & Sunset Cruise" }, desc: { FR: "Journée de détente sur l'île de Yas, dîner au coucher du soleil à bord d'un catamaran privé.", EN: "Relaxing day at Yas Marina, with a private catamaran sunset cruise around the mangroves." } },
      { day: 9, title: { FR: "Plage & Spa Privé", EN: "Beach & Royal Spa Buyout" }, desc: { FR: "Journée exclusive au Saadiyat Beach Club avec cabane privée et massage royal.", EN: "Exclusive cabana at Saadiyat Beach Club, royal message, and private chef beachside dinner." } },
      { day: 10, title: { FR: "Départ Sécurisé", EN: "Sovereign Departure" }, desc: { FR: "Transfert sécurisé vers le terminal VIP de l'aéroport d'Abou Dabi pour votre retour.", EN: "Limousine transfer to Abu Dhabi VIP terminal for your private checkout protocols." } }
    ],
    inclusions: {
      FR: [
        "Vols aller-retour Montréal-Dubaï en classe Affaires",
        "9 nuits dans des suites Penthouse et forteresses de désert",
        "Chauffeur privé en limousine haut de gamme pour tous les transferts",
        "Dîners gastronomiques inclus dans des restaurants étoilés Michelin",
        "Accès VIP prioritaire au Musée du Louvre et à la Mosquée Sheikh Zayed"
      ],
      EN: [
        "Round-trip Business Class flights Montreal-Dubai",
        "9 nights in sky penthouse suites and desert fortress resorts",
        "Dedicated private chauffeur in luxury limousine for all journeys",
        "Gourmet dining experiences at Michelin-starred restaurants",
        "VIP fast-track entries to the Louvre Museum and Sheikh Zayed Mosque"
      ]
    },
    exclusions: {
      FR: [
        "Assurances voyage et frais de santé personnels",
        "Dépenses de shopping et activités de loisirs hors programme",
        "Repas de midi non spécifiés"
      ],
      EN: [
        "Travel insurance and personal health expenses",
        "Shopping expenditures and leisure activities not in the itinerary",
        "Lunch meals not explicitly specified"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Suite Présidentielle (Qasr Al Sarab)", price: "C$ 3,100" },
        { name: "Expérience de Pilotage Formule 1 (Yas Marina)", price: "C$ 950" },
        { name: "Survol de la ville en Hélicoptère Privé (30 min)", price: "C$ 1,400" }
      ],
      EN: [
        { name: "Presidential Suite Upgrade (Qasr Al Sarab)", price: "C$ 3,100" },
        { name: "Formula 1 Driving Experience (Yas Marina Circuit)", price: "C$ 950" },
        { name: "Private City Helicopter Tour (30 min)", price: "C$ 1,400" }
      ]
    },
    hotels: [
      {
        name: "The Lana - Dorchester Collection (Dubai)",
        stars: 5,
        desc: {
          FR: "Élégance ultime au cœur de la ville avec piscine à débordement sur le toit et intérieurs signés par de grands designers.",
          EN: "Ultimate architectural elegance in the city center with a rooftop infinity pool and bespoke designer interiors."
        },
        link: "#"
      },
      {
        name: "Anantara Qasr Al Sarab (Abu Dhabi)",
        stars: 5,
        desc: {
          FR: "Forteresse de luxe digne des Mille et Une Nuits érigée au milieu des plus grandes dunes de sable du monde.",
          EN: "Majestic luxury fortress straight from the Arabian Nights, perched amidst the largest sand dunes in the world."
        },
        link: "#"
      }
    ],
    activities: [
      {
        title: { FR: "Croisière en Superyacht Privé", EN: "Private Superyacht Sailing" },
        desc: {
          FR: "Une après-midi de croisière exclusive sur un yacht de 100 pieds avec équipage complet, chef et dégustation de champagne au coucher du soleil.",
          EN: "An afternoon sailing on a private 100ft superyacht with a full crew, private chef, and sunset champagne tasting."
        }
      },
      {
        title: { FR: "Safari dans les Dunes Rouges", EN: "Red Dunes Desert Safari" },
        desc: {
          FR: "Traversée des dunes en SUV de luxe, spectacle privé de fauconnerie et dîner gastronomique traditionnel sous les étoiles.",
          EN: "Thrilling dune drive in a luxury 4x4, private falconry show, and traditional gourmet dinner under the desert sky."
        }
      }
    ]
  },
  "3": {
    id: 3,
    image: "/images/oman_mountain_hero.png",
    contentImage: "/images/oman_mountain_hero.png",
    title: { FR: "Héritage du Sultanat d'Oman", EN: "Sultanate of Oman Heritage" },
    duration: { FR: "12 jours / 11 nuits", EN: "12 days / 11 nights" },
    cost: "C$ 7,400",
    overview: {
      FR: "Découvrez la sérénité pure d'Oman. Traversez les impressionnants wadis de calcaire, séjournez dans des complexes haut de gamme perchés à 2 000 mètres d'altitude dans le Jebel Akhdar et naviguez sur les fjords de Musandam.",
      EN: "Discover the pure serenity of Oman. Hike through spectacular limestone wadi canyons, lodge in elite mountain resorts perched 2,000 meters high on Jebel Akhdar, and cruise the fjords of Musandam by private luxury dhow."
    },
    timeline: [
      { day: 1, title: { FR: "Accueil à Mascate", EN: "Muscat Royal Welcome" }, desc: { FR: "Rencontre VIP à l'aéroport de Mascate, transfert privé vers l'hôtel The Chedi.", EN: "VIP airport fast-track, private transfer to the beachfront luxury of The Chedi Muscat." } },
      { day: 2, title: { FR: "Grande Mosquée & Souk", EN: "Grand Mosque & Mutrah Souq" }, desc: { FR: "Visite matinale privée de la Grande Mosquée du Sultan Qaboos et découverte exclusive des parfums du souk.", EN: "Morning private tour of Sultan Qaboos Grand Mosque, followed by perfume custom blending in the Souq." } },
      { day: 3, title: { FR: "Ascension du Jebel Akhdar", EN: "Ascent to Jebel Akhdar" }, desc: { FR: "Départ en 4x4 de luxe vers la montagne verte, hébergement à l'hôtel Alila.", EN: "Bespoke 4x4 drive up the mountain cliffs, checking into a ridge-view suite at the award-winning Alila." } },
      { day: 4, title: { FR: "Les Canyons Omani", EN: "Canyon Cliff Walk" }, desc: { FR: "Randonnée privée avec guide local à travers les villages en pierre suspendus au bord de la falaise.", EN: "Guided cliff hike through stone mountain villages, rosewater distilleries, and scenic canyon outlooks." } },
      { day: 5, title: { FR: "Wadi Bani Khalid", EN: "Wadi Bani Khalid Oasis" }, desc: { FR: "Baignade privée dans les piscines naturelles d'eau turquoise du wadi.", EN: "Private swimming in the natural crystal-clear turquoise spring pools of Wadi Bani Khalid." } },
      { day: 6, title: { FR: "Moorish Desert Glamping", EN: "Wahiba Sands Luxury Safari" }, desc: { FR: "Nuit magique dans un camp de tentes de luxe au milieu du désert de Wahiba.", EN: "Sunset dune bashing, camel riding, and a private night in a luxury glamping camp at Wahiba Sands." } },
      { day: 7, title: { FR: "Vol Musandam", EN: "Fly to Musandam Peninsula" }, desc: { FR: "Vol charter privé vers Khasab, la capitale de la péninsule de Musandam.", EN: "Board a private charter flight to Khasab, checking into an oceanside luxury villa." } },
      { day: 8, title: { FR: "Dhow Privé dans les Fjords", EN: "Private Fjord Dhow Cruise" }, desc: { FR: "Croisière privée à bord d'un dhow traditionnel, observation des dauphins et plongée en apnée.", EN: "Spend the day on a traditional wooden dhow, watching dolphins, snorkeling, and fresh seafood dining." } },
      { day: 9, title: { FR: "Fjords de Musandam", EN: "Musandam Fjord Trekking" }, desc: { FR: "Randonnée sur les sommets de Musandam pour une vue plongeante spectaculaire sur les fjords.", EN: "Climb the scenic heights of Musandam for a spectacular aerial overlook of the fjords." } },
      { day: 10, title: { FR: "Dîner de Homard en Mer", EN: "Sunset Lobster Dhow Dinner" }, desc: { FR: "Dîner de homards grillés au coucher du soleil à bord de votre yacht privé.", EN: "Private chef dinner with locally caught grilled lobsters and fresh oysters on your dhow yacht." } },
      { day: 11, title: { FR: "Sérénité Spa & Wellness", EN: "Retreat Spa & Wellness" }, desc: { FR: "Journée de détente absolue et de yoga surplombant la baie.", EN: "Sunrise coastal yoga, custom herbal treatments, and absolute relaxation." } },
      { day: 12, title: { FR: "Départ de Mascate", EN: "Sovereign Departure" }, desc: { FR: "Vol retour de Khasab et transfert VIP vers votre vol international.", EN: "Charter flight to Muscat and VIP fast-track to your international departure." } }
    ],
    inclusions: {
      FR: [
        "Vols aller-retour Montréal-Mascate en classe Affaires",
        "11 nuits en éco-resorts de falaise et hôtels de plage haut de gamme",
        "Véhicule 4x4 de luxe avec chauffeur-guide professionnel francophone",
        "Vol charter intérieur privé vers la péninsule de Musandam",
        "Croisière d'une journée en dhow traditionnel privatisé"
      ],
      EN: [
        "Round-trip Business Class flights Montreal-Muscat",
        "11 nights in high-end cliffside eco-resorts and beachfront hotels",
        "Luxury private 4x4 vehicle with professional English-speaking guide",
        "Private internal charter flight to the Musandam Peninsula",
        "Full-day cruise on a privatized traditional wooden dhow"
      ]
    },
    exclusions: {
      FR: [
        "Frais de visa touristique à l'arrivée",
        "Assurance annulation et bagages",
        "Pourboires et dépenses personnelles"
      ],
      EN: [
        "Tourist visa fees on arrival",
        "Cancellation and baggage travel insurance",
        "Gratuities and personal expenditures"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Villa avec Piscine Privée (Six Senses)", price: "C$ 4,500" },
        { name: "Séance Photo Professionnelle Privée dans les Canyons", price: "C$ 600" }
      ],
      EN: [
        { name: "Pool Villa Upgrade at Six Senses Zighy Bay", price: "C$ 4,500" },
        { name: "Private Professional Photoshoot in the Canyons", price: "C$ 600" }
      ]
    },
    hotels: [
      {
        name: "The Chedi Muscat",
        stars: 5,
        desc: {
          FR: "Élégant sanctuaire en bord de mer alliant le minimalisme asiatique zen à la splendeur de l'architecture omanaise traditionnelle.",
          EN: "Elegant beachfront sanctuary combining Asian minimalist zen aesthetics with the splendor of Omani architecture."
        },
        link: "#"
      },
      {
        name: "Alila Jabal Akhdar",
        stars: 5,
        desc: {
          FR: "Eco-resort de luxe spectaculaire sculpté dans la roche de la Montagne Verte, suspendu à 2 000 mètres d'altitude.",
          EN: "Spectacular luxury eco-resort sculpted from the green mountainside rock, perched 2,000 meters above sea level."
        },
        link: "#"
      }
    ],
    activities: [
      {
        title: { FR: "Randonnée Secrète des Wadis", EN: "Secret Wadi Canyons Swim" },
        desc: {
          FR: "Baignade privée et randonnée guidée à travers les piscines naturelles d'eau émeraude du Wadi Bani Khalid.",
          EN: "Private swimming and guided hiking through the pristine emerald spring pools of Wadi Bani Khalid."
        }
      },
      {
        title: { FR: "Croisière en Dhow à Musandam", EN: "Fjord Dhow Sailing" },
        desc: {
          FR: "Une navigation majestueuse dans les fjords omani surnommés la Norvège d'Arabie, avec plongée au milieu des coraux.",
          EN: "A majestic sailing journey in the spectacular Omani fjords, with snorkeling amongst vibrant coral reefs."
        }
      }
    ]
  },
  "4": {
    id: 4,
    image: "/images/alula_canyon_hero.png",
    contentImage: "/images/alula_canyon_hero.png",
    title: { FR: "Merveilles d'AlUla & Mer Rouge", EN: "AlUla & Red Sea Wonders" },
    duration: { FR: "14 jours / 13 nuits", EN: "14 days / 13 nights" },
    cost: "C$ 12,450",
    overview: {
      FR: "Découvrez les trésors cachés de l'Arabie Saoudite. Des impressionnants canyons de grès d'AlUla et des tombes nabatéennes de Hegra aux eaux cristallines et îles privées de la Mer Rouge, vivez un séjour majestueux.",
      EN: "Discover the hidden treasures of Saudi Arabia. From the jaw-dropping sandstone canyons of AlUla and ancient Nabataean Hegra tombs to the pristine turquoise waters and private islands of the Red Sea, live a truly majestic voyage."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Riyad", EN: "Riyadh Royal Greeting" }, desc: { FR: "Accueil VIP à l'aéroport de Riyad, limousine privée vers l'hôtel Ritz-Carlton.", EN: "VIP airport greeting, luxury private limousine transfer to the Ritz-Carlton Riyadh." } },
      { day: 2, title: { FR: "Héritage de Diriyah", EN: "Diriyah & At-Turaif Heritage" }, desc: { FR: "Visite privée exclusive du site de l'UNESCO At-Turaif à Diriyah, suivie d'un dîner au bord de l'oasis.", EN: "Bespoke guided tour of the UNESCO World Heritage site At-Turaif, with premium dinner overlooking the oasis." } },
      { day: 3, title: { FR: "Vol Privé AlUla & Concert", EN: "Fly to AlUla & Maraya Concert" }, desc: { FR: "Vol charter privé vers AlUla, hébergement dans une villa de luxe à Banyan Tree. Soirée concert VIP au complexe de miroirs Maraya.", EN: "Charter flight to AlUla, check-in to a luxury pool villa at Banyan Tree. VIP concert access at the mirrored Maraya hall." } },
      { day: 4, title: { FR: "Hegra: Les Canyons Sacrés", EN: "Hegra & Ancient Tombs" }, desc: { FR: "Visite guidée exclusive en voiture de collection des tombes nabatéennes de Hegra sans aucun autre visiteur.", EN: "Exclusive vintage Land Rover tour of the ancient Nabataean Hegra sandstone tombs." } },
      { day: 5, title: { FR: "Le Rocher de l'Éléphant", EN: "Elephant Rock Sunset" }, desc: { FR: "Coucher de soleil exclusif au Rocher de l'Éléphant, suivi d'une nuit d'observation des étoiles dans le désert.", EN: "Sunset lounge at the iconic Elephant Rock, followed by private astronomers guiding you through the desert night." } },
      { day: 6, title: { FR: "Sérénité Oasis Wellness", EN: "Oasis Wellness & Spa Buyout" }, desc: { FR: "Soin bien-être signature dans l'oasis millénaire d'AlUla entouré de palmiers.", EN: "Signature herbal hot stones massage inside the ancient date-palm oasis of AlUla." } },
      { day: 7, title: { FR: "Glamping de Canyons", EN: "Luxury Canyon Glamping" }, desc: { FR: "Nuit magique dans un camp de tentes de prestige niché dans les profonds canyons de grès.", EN: "Overnight luxury glamping in desert canyons, with a live traditional oud musical performance around the campfire." } },
      { day: 8, title: { FR: "Héli-Transfert Mer Rouge", EN: "Heli-Transfer to Red Sea" }, desc: { FR: "Vol en hélicoptère privé vers le complexe côtier exclusif de la Mer Rouge.", EN: "Private helicopter flight to the exclusive, high-end Red Sea Project island resort." } },
      { day: 9, title: { FR: "L'Île Privée de Prestige", EN: "Private Island Sanctuary" }, desc: { FR: "Hébergement dans une villa sur pilotis de luxe avec piscine et plage de sable blanc privées.", EN: "Overwater luxury pool villa stay, with complete seclusion, private beach, and personalized butler service." } },
      { day: 10, title: { FR: "Récifs de Corail & Plongée", EN: "Prisine Reef Diving" }, desc: { FR: "Plongée privée et snorkeling guidés par des biologistes marins dans des récifs intacts.", EN: "Private yacht charter for scuba diving and snorkeling in pristine, untouched Red Sea coral reefs." } },
      { day: 11, title: { FR: "Yacht de Prestige Coucher de Soleil", EN: "Sunset Yacht Sailing" }, desc: { FR: "Dîner gastronomique de fruits de mer frais pêchés préparé par un chef à bord de votre yacht privé.", EN: "Gourmet seafood dining prepared by a private chef on board your chartered catamaran at sunset." } },
      { day: 12, title: { FR: "L'Histoire de Djeddah", EN: "Jeddah Historic Al-Balad" }, desc: { FR: "Vol vers Djeddah, visite guidée privée du quartier historique Al-Balad.", EN: "Fly to Jeddah, private guided tour of the historic coral-stone houses of Al-Balad." } },
      { day: 13, title: { FR: "La Mosquée Flottante", EN: "Floating Mosque Lounge" }, desc: { FR: "Visite exclusive de la Mosquée Flottante au coucher du soleil et accès lounge privé.", EN: "Sunset lounge at the Corniche, overlooking the Floating Mosque with traditional coffee." } },
      { day: 14, title: { FR: "Départ Souverain", EN: "Sovereign Departure" }, desc: { FR: "SUV privé de luxe vers le terminal VIP de Riyad ou Djeddah pour votre vol de retour.", EN: "Private transfer to the airport VIP lounge and dedicated check-in desk for your flight home." } }
    ],
    inclusions: {
      FR: [
        "Vols internationaux en classe Affaires vers Riyad / de Djeddah",
        "13 nuits dans des propriétés ultra-luxe (Banyan Tree & Mer Rouge)",
        "Vol charter intérieur privé pour AlUla et transferts en jet/hélicoptère",
        "Visites privées exclusives guidées par des archéologues d'État",
        "Service complet de majordome privé et de concierge 24h/24"
      ],
      EN: [
        "International Business Class flights to Riyadh / from Jeddah",
        "13 nights in ultra-luxury properties (Banyan Tree & Red Sea)",
        "Private internal charter flights to AlUla and heli/jet transfers",
        "Exclusive private tours guided by state archaeologists",
        "24/7 dedicated butler service and private concierge protocols"
      ]
    },
    exclusions: {
      FR: [
        "Tourism fees and e-visa application costs",
        "Medical and repatriation travel insurance",
        "Unspecified meals in Riyadh and Jeddah"
      ],
      EN: [
        "Tourism fees and e-visa application costs",
        "Medical and repatriation travel insurance",
        "Unspecified meals in Riyadh and Jeddah"
      ]
    },
    options: {
      FR: [
        { name: "Survol Privé d'AlUla en Montgolfière", price: "C$ 1,200" },
        { name: "Dîner Spectacle Privé dans un Canyon Caché", price: "C$ 1,800" },
        { name: "Extension Vol d'une journée à Riyad avec Jet Privé", price: "C$ 4,900" }
      ],
      EN: [
        { name: "Private Hot Air Balloon Flight over AlUla", price: "C$ 1,200" },
        { name: "Private Bespoke Dinner Setup in a Hidden Canyon", price: "C$ 1,800" },
        { name: "Private Jet Day-Trip Extension to Riyadh", price: "C$ 4,900" }
      ]
    },
    hotels: [
      {
        name: "Banyan Tree AlUla",
        stars: 5,
        desc: {
          FR: "Sanctuaire de villas sous tente exclusives nichées au cœur des formations rocheuses de la vallée d'Ashar.",
          EN: "A high-end sanctuary of tented pool villas nestled within the stunning rock formations of the Ashar Valley."
        },
        link: "#"
      },
      {
        name: "The St. Regis Red Sea Resort",
        stars: 5,
        desc: {
          FR: "Paradis d'île privée avec villas de luxe sur l'eau, plages de sable blanc et récifs coralliens préservés.",
          EN: "Private island paradise featuring luxury overwater villas, white sand beaches, and untouched coral reefs."
        },
        link: "#"
      }
    ],
    activities: [
      {
        title: { FR: "Exploration Vintage de Hegra", EN: "Vintage Land Rover Hegra Tour" },
        desc: {
          FR: "Visite guidée exclusive à bord d'une Land Rover décapotable de collection des tombes nabatéennes classées à l'UNESCO.",
          EN: "An exclusive guided tour in a vintage open-top Land Rover through the spectacular UNESCO Nabataean tombs."
        }
      },
      {
        title: { FR: "Plongée dans la Mer Rouge", EN: "Red Sea Yacht & Coral Diving" },
        desc: {
          FR: "Affrètement de yacht privé avec biologiste marin pour explorer les récifs coralliens les plus préservés au monde.",
          EN: "Private yacht charter with an expert marine biologist to dive and snorkel the world's most pristine coral reefs."
        }
      }
    ]
  }
};


interface MapPinDetail {
  name: { FR: string; EN: string };
  top: string;
  left: string;
}

interface ExperienceCard {
  label: string;
  img: string;
}

interface ItineraryTheme {
  country: string;
  heroTitle: string;
  heroSub: string;
  heroBtn: string;
  heroBg: string;
  themeColor: string;
  themeColorHover: string;
  watercolorColor: string;
  mapImage: string;
  discoverTitle: string;
  discoverDesc: string;
  experienceTitle: string;
  experienceDesc: string;
  mapPins: MapPinDetail[];
  experienceGrid: ExperienceCard[];
}

const itineraryThemes: Record<string, ItineraryTheme> = {
  "1": {
    country: "Morocco",
    heroTitle: "Morocco",
    heroSub: "Epic's journey started in Morocco, land of rich diversity, superb landscapes and people who light up the visitor experience.",
    heroBtn: "Get the inside track",
    heroBg: "/images/morocco-sahara-dunes.png",
    themeColor: "#C5A880",
    themeColorHover: "#A3835B",
    watercolorColor: "#C5A880",
    mapImage: "/images/moroco.webp",
    discoverTitle: "Discover Morocco",
    discoverDesc: "We are adventurers at heart, so uncovering the secrets of Morocco is something we've had a lot of experience in. Find out more about what the regions of Morocco have to offer.",
    experienceTitle: "Experience Morocco",
    experienceDesc: "Morocco has many different aspects to its personality. Adventure, Culinary, Culture; it's all here. Experience the many different, rich, exciting layers of Morocco. Experience it your way.",
    mapPins: [
      { name: { FR: "Palais de Marrakech", EN: "Marrakech Palace" }, top: "65%", left: "32%" },
      { name: { FR: "Dunes du Sahara", EN: "Sahara Dunes" }, top: "78%", left: "75%" },
      { name: { FR: "Mont Toubkal (Atlas)", EN: "Mount Toubkal" }, top: "52%", left: "45%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Benhaddou Kasbah" }, top: "45%", left: "58%" },
      { name: { FR: "Chefchaouen la Bleue", EN: "Chefchaouen Blue City" }, top: "18%", left: "62%" }
    ],
    experienceGrid: [
      { label: "Adventure", img: "/images/morocco_adventure.png" },
      { label: "Culinary", img: "/images/morocco_culinary.png" },
      { label: "Culture", img: "/images/morocco-marrakech-riad.png" },
      { label: "Off Beat", img: "/images/morocco-sahara-dunes.png" },
      { label: "Go Local", img: "/images/people-cliff.png" }
    ]
  },
  "2": {
    country: "UAE",
    heroTitle: "Dubaï & Abou Dabi",
    heroSub: "Experience the contemporary luxury, futuristic architecture, and timeless deserts of the Arabian Gulf.",
    heroBtn: "Explore the Emirates",
    heroBg: "/images/dubai_skyline_hero.png",
    themeColor: "#00A3C4",
    themeColorHover: "#00839C",
    watercolorColor: "#00A3C4",
    mapImage: "/images/uae_map.png",
    discoverTitle: "Discover the Emirates",
    discoverDesc: "From the sparkling skyscrapers of Dubai Marina to the tranquil desert fortresses of Abu Dhabi, discover a land where modern dreams meet heritage.",
    experienceTitle: "Experience the Gulf",
    experienceDesc: "The UAE brings together unmatched luxury, world-class culinary art, and ancient Bedouin culture. Explore the dynamic contrast between sky-high heights and pristine dunes.",
    mapPins: [
      { name: { FR: "Dubaï Marina", EN: "Dubai Marina" }, top: "30%", left: "60%" },
      { name: { FR: "Burj Al Arab", EN: "Burj Al Arab" }, top: "38%", left: "58%" },
      { name: { FR: "Palm Jumeirah", EN: "Palm Jumeirah" }, top: "45%", left: "50%" },
      { name: { FR: "Île de Yas", EN: "Yas Island" }, top: "55%", left: "35%" },
      { name: { FR: "Mosquée Sheikh Zayed", EN: "Sheikh Zayed Mosque" }, top: "62%", left: "30%" },
      { name: { FR: "Qasr Al Sarab", EN: "Qasr Al Sarab" }, top: "80%", left: "25%" }
    ],
    experienceGrid: [
      { label: "Adventure", img: "/images/gulf-desert-sunset.png" },
      { label: "Culinary", img: "/images/gulf-city-skyline.png" },
      { label: "Culture", img: "/images/dubai.webp" },
      { label: "Off Beat", img: "/images/dubai_skyline_hero.png" },
      { label: "Go Local", img: "/images/people-cliff.png" }
    ]
  },
  "3": {
    country: "Oman",
    heroTitle: "Sultanat d'Oman",
    heroSub: "Discover pure serenity. Hike through spectacular wadi canyons, lodge in elite mountain resorts, and sail the fjords of Musandam.",
    heroBtn: "Discover Oman",
    heroBg: "/images/oman_mountain_hero.png",
    themeColor: "#5A8266",
    themeColorHover: "#476851",
    watercolorColor: "#5A8266",
    mapImage: "/images/oman_map.png",
    discoverTitle: "Discover Oman",
    discoverDesc: "Immerse yourself in the authentic heritage and breathtaking landscapes of the Sultanate, where rugged mountain peaks meet turquoise waters.",
    experienceTitle: "Experience Oman",
    experienceDesc: "Oman offers an escape into pure nature and deep culture. From ancient forts and traditional souqs to green mountain canyons and ocean dhow voyages.",
    mapPins: [
      { name: { FR: "The Chedi Mascate", EN: "The Chedi Muscat" }, top: "35%", left: "68%" },
      { name: { FR: "Alila Jebel Akhdar", EN: "Alila Jebel Akhdar" }, top: "45%", left: "58%" },
      { name: { FR: "Wadi Bani Khalid", EN: "Wadi Bani Khalid" }, top: "58%", left: "65%" },
      { name: { FR: "Désert de Wahiba", EN: "Wahiba Sands" }, top: "68%", left: "62%" },
      { name: { FR: "Péninsule de Musandam", EN: "Musandam Peninsula" }, top: "15%", left: "50%" }
    ],
    experienceGrid: [
      { label: "Adventure", img: "/images/oman-wadi-canyon.png" },
      { label: "Culinary", img: "/images/oman-real.jpg" },
      { label: "Culture", img: "/images/oman_mountain_hero.png" },
      { label: "Off Beat", img: "/images/people-cliff.png" },
      { label: "Go Local", img: "/images/oman-real.jpg" }
    ]
  },
  "4": {
    country: "Saudi Arabia",
    heroTitle: "Arabie Saoudite",
    heroSub: "Embark on a majestic journey from the sandstone canyons of AlUla to the untouched coral reefs of the Red Sea.",
    heroBtn: "Unveil the Kingdom",
    heroBg: "/images/alula_canyon_hero.png",
    themeColor: "#C2593F",
    themeColorHover: "#A14833",
    watercolorColor: "#C2593F",
    mapImage: "/images/saudi_map.png",
    discoverTitle: "Discover Saudi Arabia",
    discoverDesc: "Explore Saudi Arabia's heritage, from the ancient Nabataean Hegra tombs of AlUla to the modern skyline of Riyadh and the pristine islands of the Red Sea.",
    experienceTitle: "Experience the Kingdom",
    experienceDesc: "Saudi Arabia is a land of wonder. Walk through ancient history, experience ultimate desert serenity, and dive into the spectacular coral reefs of the Red Sea.",
    mapPins: [
      { name: { FR: "Riyad Diriyah", EN: "Riyadh Diriyah" }, top: "55%", left: "65%" },
      { name: { FR: "Banyan Tree AlUla", EN: "Banyan Tree AlUla" }, top: "35%", left: "28%" },
      { name: { FR: "Tombes de Hegra", EN: "Hegra Tombs" }, top: "30%", left: "25%" },
      { name: { FR: "Rocher de l'Éléphant", EN: "Elephant Rock" }, top: "40%", left: "32%" },
      { name: { FR: "Complexe de la Mer Rouge", EN: "Red Sea Resort" }, top: "50%", left: "20%" }
    ],
    experienceGrid: [
      { label: "Adventure", img: "/images/alula-redsea.jpg" },
      { label: "Culinary", img: "/images/saudi-alula-canyon.png" },
      { label: "Culture", img: "/images/alula_canyon_hero.png" },
      { label: "Off Beat", img: "/images/saudi-alula-canyon.png" },
      { label: "Go Local", img: "/images/people-cliff.png" }
    ]
  }
};

export default function ItinerarySubpage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { lang } = useLang();
  const id = resolvedParams.id;
  const itinerary = itinerariesData[id];

  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center items-center">
        <h2 className="font-serif text-2xl mb-4 text-zinc-800">Itinerary Not Found</h2>
        <Link href="/" className="text-brand-gold hover:underline">Return to Home</Link>
      </div>
    );
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const theme = itineraryThemes[id];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Hero Header Section */}
      {theme ? (
        <section className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[500px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden bg-zinc-950 flex flex-col justify-end">
          <img
            src={theme.heroBg}
            alt={theme.heroTitle}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-24 max-w-7xl mx-auto z-10">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase mb-6 transition-colors font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
            </Link>
            <div className="max-w-2xl space-y-6">
              <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/30 px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase rounded-full inline-block">
                {itinerary.duration[lang]}
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase leading-tight font-bold text-brand-gold">
                {theme.heroTitle}
              </h1>
              <p className="text-[14px] sm:text-[16px] leading-relaxed text-zinc-300 font-light max-w-lg">
                {theme.heroSub}
              </p>
              <a 
                href="#itinerary-details"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 font-semibold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
                style={{
                  backgroundColor: theme.themeColor,
                  color: "#faf9f5",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.themeColorHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.themeColor;
                }}
              >
                <span>{theme.heroBtn}</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Watercolor Divider Mask */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 select-none pointer-events-none">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[60px] md:h-[100px]"
              style={{ fill: "#faf9f5" }}
            >
              <path d="M0,0 C150,90 350,10 500,70 C650,110 850,20 1000,80 C1100,110 1150,90 1200,60 L1200,120 L0,120 Z" />
              <path d="M0,20 C180,70 320,30 480,90 C620,10 800,100 950,50 C1080,20 1150,80 1200,40 L1200,120 L0,120 Z" opacity="0.3" />
              <path d="M0,40 C200,30 380,80 520,40 C700,90 880,30 1020,70 C1120,40 1160,60 1200,50 L1200,120 L0,120 Z" opacity="0.15" />
            </svg>
          </div>
        </section>
      ) : (
        <section className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[400px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden bg-zinc-950 flex flex-col justify-end">
          <img
            src={itinerary.image}
            alt={itinerary.title[lang]}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
          
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-7xl mx-auto z-10">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase mb-6 transition-colors font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
            </Link>
            <div className="space-y-4">
              <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/30 px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase rounded-full inline-block">
                {itinerary.duration[lang]}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl tracking-wide uppercase leading-tight font-bold text-white">
                {itinerary.title[lang]}
              </h1>
            </div>
          </div>
        </section>
      )}

      {/* Themed Map & Experience Sections */}
      {theme && (
        <div className="bg-[#faf9f5]">
          {/* Discover Map Section */}
          <section className="py-16 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Map on the left (col-span-7) */}
              <div className="lg:col-span-7 relative flex items-center justify-center min-h-[400px] w-full rounded-[2rem] border border-zinc-200/80 overflow-hidden shadow-inner bg-white">
                <img
                  src={theme.mapImage}
                  className="absolute inset-0 w-full h-full object-cover brightness-95 contrast-[1.05]"
                  alt={theme.discoverTitle}
                />
                {/* Interactive Location Pins */}
                {theme.mapPins.map((pin, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}
                    style={{ top: pin.top, left: pin.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-30"
                  >
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold/40 opacity-75"></span>
                      <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-black border border-brand-gold cursor-pointer shadow-sm">
                        <div className="h-1 w-1 rounded-full bg-brand-gold animate-pulse"></div>
                      </div>
                    </div>
                    <span className="mt-1 bg-black/90 border border-white/10 text-white text-[9px] px-2 py-0.5 rounded shadow-md pointer-events-none group-hover:scale-105 transition-transform duration-300 font-heading font-medium tracking-wide">
                      {pin.name[lang]}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Description on the right (col-span-5) */}
              <div className="lg:col-span-5 flex flex-col items-start space-y-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]" style={{ color: theme.themeColor }}>
                  {lang === "FR" ? "DÉCOUVREZ LE ROYAUME" : "DISCOVER THE REALM"}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight uppercase">
                  {theme.discoverTitle}
                </h2>
                <p className="text-[14px] leading-relaxed text-zinc-600 font-light max-w-[460px]">
                  {theme.discoverDesc}
                </p>
              </div>
            </div>
          </section>

          {/* Experience Grid Section */}
          <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Text block */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start space-y-6">
                <span className="w-12 h-1 border-t-2" style={{ borderColor: theme.themeColor }} />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 leading-tight uppercase">
                  {theme.experienceTitle}
                </h2>
                <p className="text-[14px] leading-relaxed text-zinc-600 font-light">
                  {theme.experienceDesc}
                </p>
              </div>
              {/* Adventure card */}
              <div className="lg:col-span-8 rounded-[2rem] overflow-hidden relative group min-h-[300px] md:min-h-[400px] shadow-md border border-zinc-200/50">
                <img
                  src={theme.experienceGrid[0].img}
                  alt={theme.experienceGrid[0].label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide uppercase">
                    {theme.experienceGrid[0].label}
                  </h3>
                </div>
              </div>
            </div>

            {/* Other 4 Experience Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {theme.experienceGrid.slice(1).map((card, idx) => (
                <div key={idx} className="rounded-[1.5rem] overflow-hidden relative group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-sm border border-zinc-200/50">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
                      {card.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Main Content Layout */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 bg-white">
        
        {/* Left Side: Overview and Day-by-Day Timeline (Span 8) */}
        <div className="lg:col-span-8 space-y-16" id="itinerary-details">
          {!theme ? (
            <>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
                  {lang === "FR" ? "Aperçu de l'Itinéraire" : "Trip Overview"}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-zinc-600 font-light">
                  {itinerary.overview[lang]}
                </p>
                <a 
                  href="#booking-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8B2635] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury hover:bg-[#72202b] shadow-md cursor-pointer mt-4"
                >
                  {lang === "FR" ? "Réserver ce voyage" : "Book this Journey"} &rarr;
                </a>
              </div>

              {/* Destination Showcase Image with animation */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full rounded-2xl overflow-hidden border border-zinc-100 shadow-sm"
              >
                <img
                  src={itinerary.contentImage}
                  alt={itinerary.title[lang]}
                  className="w-full h-[320px] md:h-[420px] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </motion.div>
            </>
          ) : null}


          <div className="space-y-10">
            <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
              {lang === "FR" ? "Programme Jour par Jour" : "Day-by-Day Journey"}
            </h3>
            
            <div className="relative border-l border-zinc-200 pl-6 md:pl-10 ml-4 space-y-12">
              {itinerary.timeline.map((item, idx) => (
                <motion.div 
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-gold group-hover:bg-brand-gold transition-colors duration-300 z-10" />
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase font-semibold">
                      {lang === "FR" ? `JOUR ${item.day}` : `DAY ${item.day}`}
                    </span>
                    <h4 className="font-serif text-lg md:text-xl text-zinc-800 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                      {item.title[lang]}
                    </h4>
                    <p className="text-[12px] md:text-[13px] leading-relaxed text-zinc-500 font-light pt-1">
                      {item.desc[lang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ce qui est compris / Non inclus (Inclusions & Exclusions) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-10 border-t border-zinc-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{lang === "FR" ? "Ce qui est compris" : "What's Included"}</span>
                </h4>
                <ul className="space-y-3 pl-1">
                  {itinerary.inclusions[lang].map((item, idx) => (
                    <li key={idx} className="text-zinc-600 text-[13px] md:text-[14px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl md:text-2xl text-red-600 flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full border border-red-400 flex items-center justify-center text-[10px] text-red-500 font-bold shrink-0">✕</span>
                  <span>{lang === "FR" ? "Non inclus" : "Not Included"}</span>
                </h4>
                <ul className="space-y-3 pl-1">
                  {itinerary.exclusions[lang].map((item, idx) => (
                    <li key={idx} className="text-zinc-700 text-[13px] md:text-[14px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="text-zinc-400 mt-1 text-sm">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Premium Options */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 pt-10 border-t border-zinc-100"
          >
            <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
              <span className="bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded">$$$</span>
              <span>{lang === "FR" ? "Options à la carte" : "A La Carte Options"}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {itinerary.options[lang].map((opt, idx) => (
                <div key={idx} className="p-5 bg-zinc-50/50 border border-zinc-200/60 rounded-2xl flex flex-col justify-between hover:border-brand-gold/40 transition-luxury duration-300">
                  <span className="text-zinc-800 text-[13px] font-medium leading-snug">{opt.name}</span>
                  <span className="text-brand-gold font-mono text-xs font-semibold mt-3 tabular-nums">{opt.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Accommodations */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-10 border-t border-zinc-100"
          >
            <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
              <Hotel className="w-5 h-5 text-brand-gold shrink-0" />
              <span>{lang === "FR" ? "Hébergements d'Exception" : "Featured Accommodations"}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itinerary.hotels.map((hotel, idx) => (
                <div key={idx} className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden hover:shadow-md transition-luxury duration-300 flex flex-col h-full">
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-900 font-serif text-[16px] font-bold leading-tight">{hotel.name}</span>
                        <div className="flex items-center gap-0.5 text-brand-gold text-[11px]">
                          {"★".repeat(hotel.stars)}
                        </div>
                      </div>
                      <p className="text-zinc-500 text-[13px] leading-relaxed font-light">
                        {hotel.desc[lang]}
                      </p>
                    </div>
                    {hotel.link && (
                      <a href={hotel.link} className="text-brand-gold hover:text-zinc-950 font-mono text-[9px] tracking-widest uppercase inline-flex items-center gap-1.5 transition-colors pt-2">
                        <span>{lang === "FR" ? "DÉCOUVRIR LE SITE" : "VIEW PROPERTY"}</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Booking CTA for the end of details */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center pt-8 border-t border-zinc-100"
          >
            <a 
              href="#booking-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B2635] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-10 py-5 transition-luxury hover:bg-[#72202b] shadow-md cursor-pointer"
            >
              {lang === "FR" ? "RÉSERVER VOTRE PASSAGE" : "RESERVE YOUR JOURNEY"} &rarr;
            </a>
          </motion.div>

        </div>

        {/* Right Side: Video + Booking Panel (Span 4) */}
        <div className="lg:col-span-4 space-y-6">

          {/* Video Block — only for Marrakech & Sahara Expedition (ID 1) */}
          {itinerary.id === 1 && (
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-200/60 shadow-md bg-black">
              <video
                src="https://v1.pinimg.com/videos/iht/expMp4/81/24/b8/8124b8c7cd11c22123a7b75cfabf32fc_720w.mp4"
                className="w-full h-auto block bg-black"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          )}

          {/* Contact Form Block — sticky only with scroll entrance */}
          <motion.div 
            id="booking-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-50/50 p-6 md:p-8 border border-zinc-200/80 shadow-md rounded-[1.5rem] relative overflow-hidden lg:sticky lg:top-28"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="text-center md:text-left border-b border-zinc-200/60 pb-4">
                  <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase block mb-1">
                    {lang === "FR" ? "Frais de Voyage Estimés" : "Estimated Trip Cost"}
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-3xl font-bold text-zinc-900 font-serif tabular-nums">{itinerary.cost} <span className="text-[10px] font-mono text-zinc-400">CAD / pers.</span></h3>
                    <span className="text-[9px] font-mono text-[#faf9f5] uppercase bg-[#8B2635] px-2 py-0.5 rounded shadow-sm">
                      {lang === "FR" ? "Haut de Gamme" : "All Inclusive"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Nom Complet" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Sterling Hunt"
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Adresse Courriel" : "Secure Email"}
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="e.g. sterling@portfolio.com"
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Exigences Circadiennes ou de Sécurité" : "Specialized Requirements / Remarks"}
                    </label>
                    <textarea
                      rows={4}
                      value={bookingMessage}
                      onChange={(e) => setBookingMessage(e.target.value)}
                      placeholder={lang === "FR" ? "Ex. Régimes alimentaires, hélicoptère privé..." : "e.g. Jet charter transfers, close protection, dietaries..."}
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[10px] text-zinc-500 font-mono">
                    <Shield className="text-brand-gold w-4 h-4" />
                    <span>{lang === "FR" ? "Règlement Escrow Sécurisé" : "Secure 256-Bit Escrow Portal"}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-luxury hover:-translate-y-0.5 border border-[#8B2635] shadow-md cursor-pointer"
                  >
                    {lang === "FR" ? "RÉSERVER LE SANCTUAIRE" : "RESERVE SANCTUARY"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                  <CheckCircle className="text-brand-gold w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-brand-gold font-mono text-[10px] tracking-[0.25em] uppercase block">
                    {lang === "FR" ? "Transmission Chiffrée" : "Transmission Secured"}
                  </span>
                  <h3 className="font-serif text-2xl text-zinc-900 tracking-wide uppercase">
                    {lang === "FR" ? "Réservation Initiée" : "Reservation Active"}
                  </h3>
                </div>
                <p className="text-zinc-600 text-xs leading-relaxed max-w-[240px] mx-auto font-light">
                  {lang === "FR"
                    ? `Merci, ${bookingName}. Votre conseiller en voyages prépare les protocoles pour ${itinerary.title.FR}.`
                    : `Thank you, ${bookingName}. Your dedicated travel architect is initiating protocols for ${itinerary.title.EN}.`
                  }
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-zinc-200 bg-white hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-700 font-mono text-[9px] tracking-[0.15em] uppercase px-6 py-2.5 transition-luxury rounded-full shadow-sm"
                >
                  {lang === "FR" ? "Modifier la requête" : "Modify inquiry"}
                </button>
              </div>
            )}

            {/* Conditions Disclaimer */}
            <div className="mt-8 pt-6 border-t border-zinc-200/60 text-center select-none">
              <h4 className="font-serif text-sm font-bold text-zinc-900 mb-3 uppercase tracking-wider">
                {lang === "FR" ? "Conditions" : "Terms & Conditions"}
              </h4>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 italic font-light mb-4">
                {lang === "FR" 
                  ? "Tarif calculé le 1 juin 2026, pour un séjour du 13 au 20 janvier 2027 (à destination). Les dates et composantes sont modifiables à votre guise. Les hôtels et activités proposés le sont à titre indicatif et peuvent être modifiés selon vos besoins."
                  : "Rate calculated on June 1, 2026, for a stay from January 13 to 20, 2027 (at destination). Dates and components can be modified at your convenience. Proposed hotels and activities are indicative and can be modified according to your needs."
                }
              </p>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 italic font-light mb-4">
                {lang === "FR"
                  ? "Les tarifs sont sujets à changement selon la tarification dynamique du jour. Aucune place n'est réservée d'avance et les disponibilités sont sujettes à changement selon les fournisseurs."
                  : "Rates are subject to change based on daily dynamic pricing. No spots are reserved in advance and availability is subject to change by suppliers."
                }
              </p>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 font-light">
                {lang === "FR" ? (
                  <>
                    Consultez nos conditions complètes au{" "}
                    <Link href="/conditions" className="text-brand-gold hover:underline font-semibold">
                      lien suivant
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Consult our full conditions at the{" "}
                    <Link href="/conditions" className="text-brand-gold hover:underline font-semibold">
                      following link
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
