'use client';

import React, { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Shield, CheckCircle, Mail, MapPin } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useLang } from "../../context/lang-context";

interface DayPlan {
  day: number;
  title: { FR: string; EN: string };
  desc: { FR: string; EN: string };
}

interface ItineraryDetail {
  id: number;
  image: string;
  title: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  cost: string;
  overview: { FR: string; EN: string };
  timeline: DayPlan[];
}

const itinerariesData: Record<string, ItineraryDetail> = {
  "1": {
    id: 1,
    image: "/images/morocco-sahara-dunes.png",
    title: { FR: "Expédition Marrakech & Sahara", EN: "Marrakech & Sahara Expedition" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: "C$ 12,400",
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
    ]
  },
  "2": {
    id: 2,
    image: "/images/gulf-desert-sunset.png",
    title: { FR: "Oasis Moderne de Dubaï & Abou Dabi", EN: "Dubai & Abu Dhabi Modern Oasis" },
    duration: { FR: "10 jours / 9 nuits", EN: "10 days / 9 nights" },
    cost: "C$ 16,500",
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
    ]
  },
  "3": {
    id: 3,
    image: "/images/oman-wadi-canyon.png",
    title: { FR: "Héritage du Sultanat d'Oman", EN: "Sultanate of Oman Heritage" },
    duration: { FR: "12 jours / 11 nuits", EN: "12 days / 11 nights" },
    cost: "C$ 14,800",
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
    ]
  },
  "4": {
    id: 4,
    image: "/images/saudi-alula-canyon.png",
    title: { FR: "Merveilles d'AlUla & Mer Rouge", EN: "AlUla & Red Sea Wonders" },
    duration: { FR: "14 jours / 13 nuits", EN: "14 days / 13 nights" },
    cost: "C$ 24,900",
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

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <img
          src={itinerary.image}
          alt={itinerary.title[lang]}
          className="absolute inset-0 w-full h-full object-cover"
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

      {/* Main Content Layout */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 bg-white">
        
        {/* Left Side: Overview and Day-by-Day Timeline (Span 8) */}
        <div className="lg:col-span-8 space-y-16">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
              {lang === "FR" ? "Aperçu de l'Itinéraire" : "Trip Overview"}
            </h3>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-zinc-600 font-light">
              {itinerary.overview[lang]}
            </p>
          </div>

          <div className="space-y-10">
            <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
              {lang === "FR" ? "Programme Jour par Jour" : "Day-by-Day Journey"}
            </h3>
            
            <div className="relative border-l border-zinc-200 pl-6 md:pl-10 ml-4 space-y-12">
              {itinerary.timeline.map((item) => (
                <div key={item.day} className="relative group">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Booking Panel Widget (Span 4) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
          {id === "1" ? (
            /* Morocco Contact Form Card with Video Header */
            <div className="bg-white border border-zinc-200/60 shadow-md rounded-[1.5rem] overflow-hidden relative h-[680px] flex flex-col">
              {/* Video Header at the top (stable, doesn't move when scrolling form) */}
              <div className="relative w-full h-[260px] shrink-0 overflow-hidden border-b border-zinc-100">
                <video
                  src="https://v1.pinimg.com/videos/iht/expMp4/81/24/b8/8124b8c7cd11c22123a7b75cfabf32fc_720w.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Scrollable Form Container below the video */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin bg-zinc-50/10">
                {!isSubmitted ? (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="text-center md:text-left border-b border-zinc-200/60 pb-4">
                      <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase block mb-1">
                        {lang === "FR" ? "Frais de Voyage Estimés" : "Estimated Trip Cost"}
                      </span>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-3xl font-bold text-zinc-900 font-serif tabular-nums">{itinerary.cost} <span className="text-[10px] font-mono text-zinc-400">CAD</span></h3>
                        <span className="text-[9px] font-mono text-brand-gold uppercase bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20 rounded">
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
                        className="w-full bg-brand-gold hover:bg-zinc-900 hover:text-white text-black font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-luxury hover:-translate-y-0.5 border border-brand-gold shadow-md cursor-pointer"
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
              </div>
            </div>
          ) : (
            /* Standard Widget Form Card */
            <div className="bg-zinc-50/50 p-6 md:p-8 border border-zinc-200/80 shadow-md rounded-[1.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />
              
              {!isSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="text-center md:text-left border-b border-zinc-200/60 pb-4">
                    <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase block mb-1">
                      {lang === "FR" ? "Frais de Voyage Estimés" : "Estimated Trip Cost"}
                    </span>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-3xl font-bold text-zinc-900 font-serif tabular-nums">{itinerary.cost} <span className="text-[10px] font-mono text-zinc-400">CAD</span></h3>
                      <span className="text-[9px] font-mono text-brand-gold uppercase bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20 rounded">
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
                      className="w-full bg-brand-gold hover:bg-zinc-900 hover:text-white text-black font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-luxury hover:-translate-y-0.5 border border-brand-gold shadow-md cursor-pointer"
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
            </div>
          )}

      </section>

      <Footer />
    </div>
  );
}
