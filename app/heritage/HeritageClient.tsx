'use client';

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Plane, 
  Compass, 
  Sparkles, 
  Music, 
  Camera, 
  ArrowRight, 
  Award, 
  Globe2, 
  CheckCircle2,
  Briefcase,
  Palmtree,
  Star
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MapSection from "../components/map-section";
import SmartVideo from "../components/smart-video";
import { useLang, translate } from "../context/lang-context";
import { videoAsset } from "@/data/videoSources";

// Heritage Photo Gallery Items
const GALLERY_ITEMS = [
  {
    id: "1",
    category: "architecture",
    title: { EN: "Marrakech Royal Riad Architecture", FR: "Architecture des Riads Royaux de Marrakech" },
    location: { EN: "Marrakech Medina", FR: "Médina de Marrakech" },
    image: "/images/morocco-marrakech-riad.png",
    tag: { EN: "UNESCO Heritage", FR: "Patrimoine UNESCO" }
  },
  {
    id: "2",
    category: "architecture",
    title: { EN: "Ancient Tanneries & Blue Alleys of Fes", FR: "Tanneries Anciennes & Rueles de Fès" },
    location: { EN: "Fes el Bali", FR: "Fès el-Bali" },
    image: "/images/imperial_cities_fes.jpg",
    tag: { EN: "Imperial City", FR: "Ville Impériale" }
  },
  {
    id: "3",
    category: "culture",
    title: { EN: "Chefchaouen Blue Pearl Medina", FR: "Médina Bleue de Chefchaouen" },
    location: { EN: "Rif Mountains", FR: "Montagnes du Rif" },
    image: "/images/chefchaouen.png",
    tag: { EN: "Cultural Icon", FR: "Icône Culturelle" }
  },
  {
    id: "4",
    category: "hotels",
    title: { EN: "Pickalbatros White Beach Resort", FR: "Hôtel Pickalbatros White Beach" },
    location: { EN: "Agadir Atlantic Ocean", FR: "Agadir Océan Atlantique" },
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    tag: { EN: "5★ Luxury Resort", FR: "Resort 5★ de Luxe" }
  },
  {
    id: "5",
    category: "hotels",
    title: { EN: "Hilton Taghazout Bay Beachfront", FR: "Hilton Taghazout Bay Front de Mer" },
    location: { EN: "Taghazout Coast", FR: "Côte de Taghazout" },
    image: "/images/hilton_taghazout_1.avif",
    tag: { EN: "Luxury Oceanfront", FR: "Front de Mer de Luxe" }
  },
  {
    id: "6",
    category: "beaches",
    title: { EN: "Taghazout Golden Atlantic Bay", FR: "Baie Dorée de Taghazout" },
    location: { EN: "Agadir Coast", FR: "Côte d'Agadir" },
    image: "/images/beach-area.jpg",
    tag: { EN: "Atlantic Coast", FR: "Côte Atlantique" }
  },
  {
    id: "7",
    category: "culture",
    title: { EN: "Erg Chebbi Desert Camp & Sahara Sunset", FR: "Campement Erg Chebbi & Coucher de Soleil Sahara" },
    location: { EN: "Merzouga Sahara", FR: "Désert de Merzouga" },
    image: "/images/morocco-sahara-dunes.png",
    tag: { EN: "Sahara Odyssey", FR: "Odyssée Saharienne" }
  },
  {
    id: "8",
    category: "culture",
    title: { EN: "Moroccan Gastronomy & Tea Ceremonies", FR: "Gastronomie Marocaine & Cérémonie du Thé" },
    location: { EN: "National Heritage", FR: "Patrimoine National" },
    image: "/images/tagine-restaurant.jpg",
    tag: { EN: "Culinary Heritage", FR: "Patrimoine Culinaire" }
  }
];

// Direct Flight Departure Cities
const DEPARTURE_CITIES = [
  { code: "YUL", name: "Montréal", country: "Canada", note: { EN: "Direct regular flights", FR: "Vols directs réguliers" } },
  { code: "JFK / EWR", name: "New York", country: "USA", note: { EN: "Direct non-stop service", FR: "Service direct sans escale" } },
  { code: "IAD", name: "Washington D.C.", country: "USA", note: { EN: "Direct capital hub", FR: "Hub de la capitale" } },
  { code: "LAX", name: "Los Angeles", country: "USA", note: { EN: "West coast connection", FR: "Connexion Côte Ouest" } },
  { code: "YYZ", name: "Toronto", country: "Canada", note: { EN: "Direct & connecting flights", FR: "Vols directs et correspondances" } },
];

export default function HeritageClient() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredGallery = activeTab === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  const videoAssetData = videoAsset("Golf_in_Morocco_ssfati");

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-body antialiased selection:bg-brand-gold selection:text-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-end pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-zinc-950">
        {/* Background Image Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/morocco-marrakech-riad.png"
            alt="Morocco Heritage & Architecture"
            className="w-full h-full object-cover object-center opacity-40 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(9,9,11,0.8)_100%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/40 bg-brand-gold/10 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-brand-gold uppercase">
              {lang === "FR" ? "Patrimoine & Culture Exclusifs" : "Exclusive Heritage & Culture"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.1] max-w-4xl"
          >
            {lang === "FR" ? (
              <>Une Seule Destination. <span className="text-brand-gold block italic font-normal font-serif">Une Expertise Sans Limites.</span></>
            ) : (
              <>One Destination. <span className="text-brand-gold block italic font-normal font-serif">Endless Expertise.</span></>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-zinc-300 text-sm sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            {lang === "FR"
              ? "Que vous organisiez un séminaire corporatif de prestige, un circuit culturel immersif ou des vacances classiques d'exception, nous sommes les spécialistes exclusifs du Maroc."
              : "Whether you are planning an executive corporate event, an immersive cultural tour, or an unforgettable classic vacation, we are the dedicated Morocco specialists."
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-4 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/custom-trip"
              className="bg-brand-gold hover:bg-brand-gold-dark text-zinc-950 font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-luxury hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20 flex items-center gap-2"
            >
              <span>{lang === "FR" ? "Créer Mon Voyage Sur Mesure" : "Design Custom Journey"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#gallery"
              className="border border-white/30 hover:border-white text-white font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-luxury hover:bg-white/10"
            >
              {lang === "FR" ? "Explorer la Galerie" : "Explore Gallery"}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Brand Specialization Positioning Strip */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900/60 border-y border-zinc-800/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4 hover:border-brand-gold/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-white">
              {lang === "FR" ? "Spécialisation Exclusive" : "Exclusive Specialization"}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              {lang === "FR"
                ? "Contrairement aux agences généralistes, nous nous consacrons à 100% au Maroc. Notre connaissance intime du terrain vous garantit des privilèges et accès inédits."
                : "Unlike generalist agencies, we focus 100% on Morocco. Our intimate ground knowledge ensures unparalleled access and exclusive privileges."
              }
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4 hover:border-brand-gold/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-white">
              {lang === "FR" ? "Flexibilité Multi-Villes" : "Multi-City Departure Flexibility"}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              {lang === "FR"
                ? "Vols directs et réguliers au départ de Montréal, New York, Washington D.C., Los Angeles et Toronto pour une logistique aérienne adaptée à vos besoins."
                : "Direct scheduled flights departing from Montreal, New York, Washington D.C., Los Angeles, and Toronto tailored to your preferred itinerary."
              }
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4 hover:border-brand-gold/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-white">
              {lang === "FR" ? "Conciergerie Bilingue 24/7" : "24/7 Bilingual Concierge"}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              {lang === "FR"
                ? "Assistance de prestige disponible 24h/24 en français et en anglais, de votre réservation initiale jusqu'à votre retour à la maison."
                : "Round-the-clock prestige assistance available in English and French from initial booking until your safe return home."
              }
            </p>
          </div>
        </div>
      </section>

      {/* UNESCO Cultural & Musical Spotlight Section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-brand-gold font-mono text-[10px] uppercase tracking-[0.25em]">
                <Music className="w-3.5 h-3.5" />
                <span>{lang === "FR" ? "Spotlight Culturel & Musique UNESCO" : "UNESCO Cultural & Musical Spotlight"}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
                {lang === "FR" ? "L'Âme & Le Patrimoine du Maroc" : "The Soul & Heritage of Morocco"}
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
              {lang === "FR"
                ? "Découvrez l'harmonie fascinante entre la musique traditionnelle andalouse, l'architecture séculaire des médinas et le charme intemporel des cités royales."
                : "Experience the mesmerizing harmony between traditional Andalusian music, centuries-old Medina architecture, and the timeless charm of royal cities."
              }
            </p>
          </div>

          {/* Smart Video Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9wfdX2N1RA0?si=38glEpgnrc09By72" 
                  title="UNESCO Moroccan Heritage & Music" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  {lang === "FR" ? "Trésors Vivants UNESCO" : "UNESCO Living Treasures"}
                </span>
                <h3 className="font-serif text-2xl font-bold uppercase text-white">
                  {lang === "FR" ? "Cités Impériales & Médinas Légendaires" : "Imperial Cities & Legendary Medinas"}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  {lang === "FR"
                    ? "De la médina millénaire de Fès el-Bali aux kasbahs spectaculaires d'Aït-Ben-Haddou et aux jardins luxuriants de Marrakech, chaque itinéraire que nous traçons célèbre le patrimoine authentique du royaume."
                    : "From the thousand-year-old Medina of Fes el-Bali to the majestic Kasbahs of Ait Ben Haddou and the lush gardens of Marrakech, every passage we design celebrates the authentic kingdom heritage."
                  }
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{lang === "FR" ? "Visites privées avec historiens du patrimoine agréés" : "Private guided tours with certified heritage historians"}</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{lang === "FR" ? "Séjours exclusifs dans des Riads royaux restaurés" : "Exclusive stays in authentically restored royal Riads"}</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{lang === "FR" ? "Expériences musicales andalouses et nomades privées" : "Private Andalusian and nomadic musical performances"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Heritage Photo Gallery */}
      <section id="gallery" className="py-24 px-6 md:px-12 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              {lang === "FR" ? "Galerie Photographique" : "Photographic Gallery"}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              {lang === "FR" ? "Hôtels, Plages & Architecture" : "Hotels, Beaches & Architecture"}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              {lang === "FR"
                ? "Parcourez une sélection visuelle captivante reflétant la diversité et le prestige du Maroc."
                : "Browse a captivating visual selection reflecting Morocco's diverse landscape and prestige."
              }
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: { EN: "All Photography", FR: "Toutes les Photos" } },
              { id: "architecture", label: { EN: "Architecture & Medinas", FR: "Architecture & Médinas" } },
              { id: "hotels", label: { EN: "Luxury Hotels & Riads", FR: "Hôtels de Luxe & Riads" } },
              { id: "beaches", label: { EN: "Atlantic Beaches", FR: "Plages Atlantiques" } },
              { id: "culture", label: { EN: "Culture & Sahara", FR: "Culture & Sahara" } },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-brand-gold text-zinc-950 font-bold shadow-md"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {translate(tab.label, lang)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredGallery.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/5] shadow-lg cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={translate(item.title, lang)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[8px] font-mono uppercase tracking-widest bg-zinc-950/80 text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                      {translate(item.tag, lang)}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-gold" />
                      {translate(item.location, lang)}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white group-hover:text-brand-gold transition-colors leading-tight">
                      {translate(item.title, lang)}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3-Card Experience Showcase Section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-zinc-800/80">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              {lang === "FR" ? "Offres sur Mesure" : "Tailored Offerings"}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              {lang === "FR"
                ? "Que vous planifiiez un événement d'entreprise, un circuit culturel ou des vacances de luxe..."
                : "Whether you are planning a corporate event, cultural tour, or classic vacation..."
              }
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              {lang === "FR"
                ? "Découvrez nos trois piliers d'excellence conçus sur mesure au Maroc."
                : "Discover our three pillars of tailored travel excellence in Morocco."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Corporate / MICE */}
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gold block">
                  {lang === "FR" ? "Événements d'Entreprise" : "Corporate Events"}
                </span>
                <h3 className="font-serif text-2xl font-bold uppercase text-white">
                  {lang === "FR" ? "MICE & Séminaires de Prestige" : "MICE & Executive Retreats"}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  {lang === "FR"
                    ? "Organisation complète de congrès, voyages d'incentive, retraites exécutives et lancements de produits d'exception à Marrakech et Casablanca."
                    : "End-to-end management of corporate conventions, incentive travel, executive retreats, and product launches in Marrakech and Casablanca."
                  }
                </p>
              </div>
              <Link
                href="/mice"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-brand-gold uppercase tracking-wider hover:text-white transition-colors"
              >
                <span>{lang === "FR" ? "Explorer MICE →" : "Explore MICE →"}</span>
              </Link>
            </div>

            {/* Card 2: Cultural Tours */}
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gold block">
                  {lang === "FR" ? "Immersion Culturelle" : "Cultural Immersion"}
                </span>
                <h3 className="font-serif text-2xl font-bold uppercase text-white">
                  {lang === "FR" ? "Circuits Villes Impériales & Sahara" : "Imperial Cities & Sahara Tours"}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  {lang === "FR"
                    ? "Circuits privés accompagnés à la découverte des 4 cités impériales, des oasis du sud, des dunes de Merzouga et des ateliers d'artisanat ancestral."
                    : "Private guided tours exploring Morocco's 4 imperial cities, southern desert oases, Merzouga sand dunes, and ancestral artisan workshops."
                  }
                </p>
              </div>
              <Link
                href="/custom-trip"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-brand-gold uppercase tracking-wider hover:text-white transition-colors"
              >
                <span>{lang === "FR" ? "Personnaliser Mon Circuit →" : "Customize Cultural Tour →"}</span>
              </Link>
            </div>

            {/* Card 3: Classic Vacations & Golf */}
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                  <Palmtree className="w-7 h-7" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gold block">
                  {lang === "FR" ? "Vacances & Golf" : "Vacations & Golf"}
                </span>
                <h3 className="font-serif text-2xl font-bold uppercase text-white">
                  {lang === "FR" ? "Séjours Golf Royal & Détente 5★" : "Royal Golf & 5★ Relaxation"}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  {lang === "FR"
                    ? "Forfaits golf d'élite sur les parcours royaux de Rabat, Marrakech et Taghazout Bay avec hébergement 5★, buggies inclus et conciergerie 24/7."
                    : "Elite golf packages on royal courses in Rabat, Marrakech, and Taghazout Bay featuring 5★ resorts, included buggies, and 24/7 concierge."
                  }
                </p>
              </div>
              <Link
                href="/itineraries?type=Golf"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-brand-gold uppercase tracking-wider hover:text-white transition-colors"
              >
                <span>{lang === "FR" ? "Voir nos Forfaits Golf →" : "View Golf Packages →"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Flight Hub Trust Strip */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900/70 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              {lang === "FR" ? "Vols Amérique du Nord → Maroc" : "North America → Morocco Direct Flights"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-white">
              {lang === "FR" ? "Envolez-vous Depuis Votre Métropole" : "Depart From Your Preferred North American Gateway"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {DEPARTURE_CITIES.map((city, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2 hover:border-brand-gold/40 transition-colors">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold mx-auto">
                  <Plane className="w-4 h-4" />
                </div>
                <div className="font-mono text-sm font-bold text-brand-gold">{city.code}</div>
                <div className="font-serif text-base font-bold text-white">{city.name}</div>
                <div className="text-[10px] font-mono text-zinc-400">{translate(city.note, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Morocco Map Section */}
      <section className="py-20 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              {lang === "FR" ? "Carte du Royaume" : "Interactive Kingdom Map"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-white">
              {lang === "FR" ? "Explorez les Régions du Maroc" : "Explore Morocco's Regions"}
            </h2>
          </div>
          <MapSection />
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold block">
            {lang === "FR" ? "Conciergerie de Prestige" : "Prestige Concierge"}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-white leading-tight">
            {lang === "FR"
              ? "Prêt à vivre le vrai Maroc avec les spécialistes de la destination ?"
              : "Ready to experience authentic Morocco with true destination specialists?"
            }
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            {lang === "FR"
              ? "Contactez notre équipe d'architectes de voyage pour concevoir votre itinéraire sur mesure en 24h."
              : "Contact our team of travel architects to craft your bespoke passage within 24 hours."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Link
              href="/custom-trip"
              className="bg-brand-gold hover:bg-brand-gold-dark text-zinc-950 font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-luxury hover:-translate-y-0.5 shadow-xl shadow-brand-gold/20"
            >
              {lang === "FR" ? "Demander Mon Devis Sur Mesure" : "Request Custom Quote"}
            </Link>
            <a
              href="tel:5149196381"
              className="border border-zinc-700 hover:border-white text-zinc-300 hover:text-white font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-luxury"
            >
              {lang === "FR" ? "Appeler le 514 919 6381" : "Call +1 (514) 919-6381"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
