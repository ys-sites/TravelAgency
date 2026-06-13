export interface TourCard {
  id: number;
  image: string;
  category: { FR: string; EN: string };
  badge: { FR: string; EN: string };
  title: { FR: string; EN: string };
  description: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  flight: { FR: string; EN: string };
  meals: { FR: string; EN: string };
  oldPrice: string;
  price: string;
  tag: string;
  promoText?: { FR: string; EN: string };
  iconType: "mountain" | "water" | "lighthouse";
}

export interface DealCard {
  id: number;
  image: string;
  badge: { FR: string; EN: string };
  title: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  flight: { FR: string; EN: string };
  meals: { FR: string; EN: string };
  inclusions: { FR: string; EN: string };
  oldPrice: string;
  newPrice: string;
  tag: string;
  promoText?: { FR: string; EN: string };
}

export interface DayPlan {
  day: number;
  title: { FR: string; EN: string };
  desc: { FR: string; EN: string };
}

export interface HotelDetail {
  name: string;
  stars: number;
  desc: { FR: string; EN: string };
  link: string;
}

export interface ActivityDetail {
  title: { FR: string; EN: string };
  desc: { FR: string; EN: string };
}

export interface ItineraryDetail {
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

export interface MapPinDetail {
  name: { FR: string; EN: string };
  top: string;
  left: string;
}

export interface ExperienceCard {
  label: { FR: string; EN: string };
  img: string;
}

export interface ItineraryTheme {
  country: string;
  heroTitle: { FR: string; EN: string };
  heroSub: { FR: string; EN: string };
  heroBtn: { FR: string; EN: string };
  heroBg: string;
  themeColor: string;
  themeColorHover: string;
  watercolorColor: string;
  mapImage: string;
  discoverTitle: { FR: string; EN: string };
  discoverDesc: { FR: string; EN: string };
  experienceTitle: { FR: string; EN: string };
  experienceDesc: { FR: string; EN: string };
  mapPins: MapPinDetail[];
  experienceGrid: ExperienceCard[];
}

export const toursList: TourCard[] = [
  {
    id: 1,
    image: "/images/morocco-marrakech-riad.png",
    category: {
      FR: "glamping sahara - suites royal mansour - vol privé montgolfière",
      EN: "sahara glamping - royal mansour suites - private balloon flight"
    },
    title: {
      FR: "Morocco Prestige – Voyage de Luxe Ultime",
      EN: "Morocco Prestige – Ultimate Luxury Journey"
    },
    description: {
      FR: "Vivez le summum du luxe marocain : suites du Royal Mansour, ateliers d'art avec des maîtres, et un vol en montgolfière au coucher du soleil.",
      EN: "Experience the peak of Moroccan luxury: stay in Royal Mansour riads, learn from master artisans, and fly over Marrakech at sunrise."
    },
    duration: {
      FR: "10 jours / 9 nuits",
      EN: "10 days / 9 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Pension complète",
      EN: "Full board"
    },
    oldPrice: "C$ 14,500",
    price: "C$ 12,500",
    tag: "Sovereign Privilege — C$2,000 included",
    badge: {
      FR: "ULTRA LUXE",
      EN: "ULTRA LUXURY"
    },
    promoText: {
      FR: "Réservez avant le 15 août 2026 — C$2 000 en inclusions complémentaires / pers.",
      EN: "Reserve before August 15, 2026 — C$2,000 in complimentary inclusions per guest"
    },
    iconType: "mountain"
  },
  {
    id: 2,
    image: "/images/moroco.webp",
    category: {
      FR: "médinas impériales - ville bleue - immersion 2 nuits sahara",
      EN: "imperial medinas - blue city walk - sahara 2-night immersion"
    },
    title: {
      FR: "Maroc Impérial & Découverte Sahara",
      EN: "Imperial Morocco & Sahara Discovery"
    },
    description: {
      FR: "Découvrez les secrets du Maroc : de Casablanca à la perle bleue de Chefchaouen, Fès historique, et deux nuits de magie dans le Sahara.",
      EN: "Discover the secrets of Morocco: from Casablanca to the blue city of Chefchaouen, historic Fes, and two full nights under Sahara stars."
    },
    duration: {
      FR: "12 jours / 11 nuits",
      EN: "12 days / 11 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Pension complète",
      EN: "Full board"
    },
    oldPrice: "C$ 6,800",
    price: "C$ 5,800",
    tag: "Cultural Privilege — C$1,000 included",
    badge: {
      FR: "SIGNATURE",
      EN: "SIGNATURE"
    },
    promoText: {
      FR: "Réservez avant le 15 sept 2026 — C$1 000 en inclusions complémentaires / pers.",
      EN: "Reserve before Sept 15, 2026 — C$1,000 in complimentary inclusions per guest"
    },
    iconType: "water"
  },
  {
    id: 3,
    image: "/images/morocco-sahara-dunes.png",
    category: {
      FR: "gorges de canyons - camp de désert de luxe - astronomie & nomades",
      EN: "canyon gorges - luxury desert camps - stargazing & nomads"
    },
    title: {
      FR: "Sahara Deep Dive – Immersion Désert",
      EN: "Sahara Deep Dive – Desert Immersion"
    },
    description: {
      FR: "Un voyage exclusif axé sur le Sahara. Traversez l'Atlas et la vallée des roses, et passez trois nuits mémorables dans le désert.",
      EN: "A dedicated desert experience. Cross the high Atlas, explore Valley of Roses, and sleep 3 full nights in deep Sahara desert camps."
    },
    duration: {
      FR: "8 jours / 7 nuits",
      EN: "8 days / 7 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Pension complète",
      EN: "Full board"
    },
    oldPrice: "C$ 5,700",
    price: "C$ 4,900",
    tag: "Desert Explorer — C$800 included",
    badge: {
      FR: "AVENTURE",
      EN: "ADVENTURE"
    },
    promoText: {
      FR: "Réservez avant le 1er oct 2026 — C$800 en inclusions complémentaires / pers.",
      EN: "Reserve before Oct 1, 2026 — C$800 in complimentary inclusions per guest"
    },
    iconType: "lighthouse"
  },
  {
    id: 4,
    image: "/images/hilton_taghazout_5.avif",
    category: {
      FR: "séjour golf - complexe face à l'océan - parcours de prestige",
      EN: "golf getaway - oceanfront resort - premium courses"
    },
    title: {
      FR: "Golf de Prestige à Taghazout Bay",
      EN: "Bespoke Golf Escape in Taghazout Bay"
    },
    description: {
      FR: "Forfait golf sur la côte atlantique : séjournez 7 nuits face à la mer au Hilton Taghazout 5★ et jouez 4 parties sur des terrains de prestige.",
      EN: "Elite golf package along the Atlantic coast: stay 7 nights at the 5★ Hilton Taghazout and play 4 rounds on Taghazout's scenic courses."
    },
    duration: {
      FR: "8 jours / 7 nuits",
      EN: "8 days / 7 nights"
    },
    flight: {
      FR: "Vol direct Transat inclus",
      EN: "Direct flight Transat included"
    },
    meals: {
      FR: "Demi-pension gourmande",
      EN: "Gourmet half board"
    },
    oldPrice: "C$ 4,200",
    price: "C$ 3,600",
    tag: "Oceanfront Privilege — C$600 included",
    badge: {
      FR: "GOLF EXCLUSIF",
      EN: "PREMIUM GOLF"
    },
    promoText: {
      FR: "Réservez avant le 1er sept 2026 — C$600 d'inclusions complémentaires / pers.",
      EN: "Reserve before Sept 1, 2026 — C$600 in complimentary inclusions per guest"
    },
    iconType: "water"
  },
  {
    id: 5,
    image: "/images/marrakech_sunset_hero.png",
    category: {
      FR: "golf royal - tout-inclus - bien-être & spa",
      EN: "royal golf - all-inclusive board - wellness & spa"
    },
    title: {
      FR: "Séjour Golf Royal à Marrakech",
      EN: "Royal Golf & All-Inclusive Wellness"
    },
    description: {
      FR: "Échappée golf tout-inclus à Marrakech : 11 nuits au Hôtel du Golf 5★ et 6 parties de golf sur les plus prestigieux parcours de la ville.",
      EN: "Ultimate golf escape in Marrakech: 11 nights in Deluxe rooms at the 5★ Hôtel du Golf and 6 rounds of golf on Marrakech's finest courses."
    },
    duration: {
      FR: "12 jours / 11 nuits",
      EN: "12 days / 11 nights"
    },
    flight: {
      FR: "Vol direct Transat inclus",
      EN: "Direct flight Transat included"
    },
    meals: {
      FR: "Tout-inclus prestige",
      EN: "All-inclusive board"
    },
    oldPrice: "C$ 6,200",
    price: "C$ 5,200",
    tag: "Marrakech Royalty — C$1,000 included",
    badge: {
      FR: "GOLF ROYAL",
      EN: "ROYAL GOLF"
    },
    promoText: {
      FR: "Réservez avant le 1er nov 2026 — C$1 000 d'inclusions complémentaires / pers.",
      EN: "Reserve before Nov 1, 2026 — C$1,000 in complimentary inclusions per guest"
    },
    iconType: "mountain"
  },
  {
    id: 6,
    image: "/images/moroco.webp",
    category: {
      FR: "villes impériales - trek chameau sahara - ruines de volubilis",
      EN: "imperial cities - sahara camel trek - volubilis ruins"
    },
    title: {
      FR: "Villes Impériales & Découverte du Désert",
      EN: "Imperial Cities & Desert Discovery"
    },
    description: {
      FR: "Un grand voyage historique à travers les villes impériales du Maroc: Casablanca, Rabat, Fès et Meknès, agrémenté d'une nuit magique en bivouac à Merzouga.",
      EN: "Embark on a grand historical tour of Morocco's imperial cities: Casablanca, Rabat, Fes, and Meknes, combined with a magical desert camp stay in Merzouga."
    },
    duration: {
      FR: "12 jours / 11 nuits",
      EN: "11 days / 10 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Demi-pension & dîners désert",
      EN: "Half board & desert dinners"
    },
    oldPrice: "C$ 5,500",
    price: "C$ 4,800",
    tag: "Imperial Privilege — C$700 included",
    badge: {
      FR: "CULTURE",
      EN: "CULTURE"
    },
    promoText: {
      FR: "Réservez avant le 1er oct 2026 — C$700 en inclusions complémentaires / pers.",
      EN: "Reserve before Oct 1, 2026 — C$700 in complimentary inclusions per guest"
    },
    iconType: "water"
  },
  {
    id: 7,
    image: "/images/morocco-marrakech-riad.png",
    category: {
      FR: "chefchaouen perle bleue - tanger détroit de gibraltar - essaouira plage",
      EN: "blue pearl chefchaouen - tangier gibraltar view - essaouira beach"
    },
    title: {
      FR: "Villes Impériales, Chefchaouen & Côte Atlantique",
      EN: "Imperial Cities, Chefchaouen & Atlantic Coast"
    },
    description: {
      FR: "Le grand tour du Maroc par excellence: explorez les ruelles bleues de Chefchaouen, Tanger, Fès, le désert de Merzouga, Marrakech, et les remparts d'Essaouira.",
      EN: "Morocco's ultimate grand tour: discover Chefchaouen's blue streets, historic Tangier, Fes, dunes of Merzouga, Marrakech, and the ocean ramparts of Essaouira."
    },
    duration: {
      FR: "15 jours / 14 nuits",
      EN: "15 days / 14 nights"
    },
    flight: {
      FR: "Vol inclus",
      EN: "Flight included"
    },
    meals: {
      FR: "Demi-pension & dîners gourmets",
      EN: "Half board & desert dinners"
    },
    oldPrice: "C$ 8,400",
    price: "C$ 7,200",
    tag: "Grand Voyage — C$1,200 included",
    badge: {
      FR: "GRAND VOYAGE",
      EN: "GRAND VOYAGE"
    },
    promoText: {
      FR: "Réservez avant le 15 août 2026 — C$1 200 en inclusions complémentaires / pers.",
      EN: "Reserve before August 15, 2026 — C$1,200 in complimentary inclusions per guest"
    },
    iconType: "lighthouse"
  }
];

export const dealsList: DealCard[] = [
  {
    id: 1,
    image: "/images/morocco-marrakech-riad.png",
    badge: { FR: "PRESTIGE DE LUXE", EN: "Prestige Access" },
    title: { FR: "Morocco Prestige – Luxe Ultime", EN: "Morocco Prestige – Ultimate Luxury" },
    duration: { FR: "10 jours / 9 nuits", EN: "10 days / 9 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Pension complète", EN: "Full board" },
    inclusions: { FR: "Suites Royal Mansour & Montgolfière Privée", EN: "Royal Mansour Suites & Private Balloon" },
    oldPrice: "C$ 14,500",
    newPrice: "C$ 12,500",
    tag: "Sovereign Privilege — C$2,000 included",
    promoText: {
      FR: "Réservez avant le 15 août 2026 — C$2 000 en inclusions complémentaires / pers.",
      EN: "Reserve before August 15, 2026 — C$2,000 in complimentary inclusions per guest"
    }
  },
  {
    id: 2,
    image: "/images/moroco.webp",
    badge: { FR: "DECOUVERTE IMPÉRIALE", EN: "Imperial Discovery" },
    title: { FR: "Maroc Impérial & Découverte Sahara", EN: "Imperial Morocco & Sahara Discovery" },
    duration: { FR: "12 jours / 11 nuits", EN: "12 days / 11 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Pension complète", EN: "Full board" },
    inclusions: { FR: "Ville Bleue & 2 nuits Sahara Camp", EN: "Blue City & 2 nights Sahara Camp" },
    oldPrice: "C$ 6,800",
    newPrice: "C$ 5,800",
    tag: "Cultural Privilege — C$1,000 included",
    promoText: {
      FR: "Réservez avant le 15 sept 2026 — C$1 000 en inclusions complémentaires / pers.",
      EN: "Reserve before Sept 15, 2026 — C$1,000 in complimentary inclusions per guest"
    }
  },
  {
    id: 3,
    image: "/images/morocco-sahara-dunes.png",
    badge: { FR: "IMMERSION DESERT", EN: "Desert Immersion" },
    title: { FR: "Sahara Deep Dive – Immersion Désert", EN: "Sahara Deep Dive – Desert Immersion" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Pension complète", EN: "Full board" },
    inclusions: { FR: "Traversée de Canyons & Camp de Luxe", EN: "Canyon Gorges & Luxury Camp" },
    oldPrice: "C$ 5,700",
    newPrice: "C$ 4,900",
    tag: "Desert Explorer — C$800 included",
    promoText: {
      FR: "Réservez avant le 1er oct 2026 — C$800 en inclusions complémentaires / pers.",
      EN: "Reserve before Oct 1, 2026 — C$800 in complimentary inclusions per guest"
    }
  }
];

export const itinerariesData: Record<string, ItineraryDetail> = {
  "1": {
    id: 1,
    image: "/images/morocco-marrakech-riad.png",
    contentImage: "/images/morocco-marrakech-riad.png",
    title: { FR: "Morocco Prestige – Voyage de Luxe Ultime", EN: "Morocco Prestige – Ultimate Luxury Journey" },
    duration: { FR: "10 jours / 9 nuits", EN: "10 days / 9 nights" },
    cost: "C$ 12,500",
    overview: {
      FR: "Vivez le summum du luxe marocain. Des suites somptueuses du Royal Mansour à Casablanca et Marrakech aux ateliers privés de calligraphie à Fès, une balade à dos de chameau à Merzouga au coucher du soleil et un vol majestueux en montgolfière au-dessus de Marrakech — un chef-d'œuvre de culture, détente et prestige.",
      EN: "Experience the pinnacle of Moroccan luxury. From the grand suites of Royal Mansour in Casablanca and Marrakech to private calligraphy workshops in Fes, a sunset camel ride in Merzouga, and a spectacular hot air balloon flight over Marrakech — this is a curated masterpiece of culture, leisure, and lifestyle."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée VIP à Casablanca", EN: "VIP Arrival in Casablanca" }, desc: { FR: "Accueil VIP à l'aéroport, assistance prioritaire, transfert privé de luxe vers le Royal Mansour Casablanca, suivi d'un dîner de bienvenue.", EN: "VIP meet and greet at the airport, fast-track assistance, private luxury transfer to the Royal Mansour Casablanca, followed by a welcome dinner." } },
      { day: 2, title: { FR: "Casablanca à Rabat", EN: "Casablanca to Rabat" }, desc: { FR: "Visite de la magnifique mosquée Hassan II, transfert à Rabat (~1h). Explorez la tour Hassan, le mausolée de Mohammed V et la kasbah des Oudayas, avec un apéritif au coucher du soleil sur le fleuve Bouregreg. Nuit au Fairmont La Marina Salé.", EN: "Visit the stunning Hassan II Mosque, transfer to Rabat (~1h). Explore Hassan Tower, Mausoleum of Mohammed V, and Kasbah des Oudayas, ending with a sunset aperitif overlooking the Bouregreg River. Stay at Fairmont La Marina Rabat Salé." } },
      { day: 3, title: { FR: "Rabat à Fès & Spa", EN: "Rabat to Fes & Spa" }, desc: { FR: "Route vers Fès (~2h30). Après-midi de détente au riad avec un soin spa haut de gamme, suivi d'un dîner gastronomique marocain privé. Nuit au Palais Faraj Suites & Spa.", EN: "Drive to Fes (~2h30). Enjoy an afternoon of relaxation at the riad with a premium spa treatment, followed by a private gourmet Moroccan dinner. Stay at Palais Faraj Suites & Spa." } },
      { day: 4, title: { FR: "Immersion Patrimoine Privé à Fès", EN: "Fes Private Heritage Experience" }, desc: { FR: "Visite guidée de l'ancienne médina (UNESCO), des ateliers d'artisans et des tanneries Chouara. Profitez d'un atelier privé de calligraphie ou de poterie avec un maître artisan, suivi d'un dîner sur le toit.", EN: "Guided tour of the Ancient Medina (UNESCO), artisan workshops, and Chouara Tanneries. Enjoy a private calligraphy or pottery workshop with a local master artisan, followed by a scenic rooftop dinner." } },
      { day: 5, title: { FR: "Fès à Merzouga (Sahara)", EN: "Fes to Merzouga (Sahara)" }, desc: { FR: "Route panoramique (~7h) avec arrêts haut de gamme à Ifrane, la forêt de cèdres d'Azrou et la vallée du Ziz. Arrivée à Merzouga pour une promenade privée à chameau au coucher du soleil vers le camp Tiziri.", EN: "Scenic drive (~7h) with premium stops in Ifrane, the cedar forest of Azrou, and Ziz Valley. Arrive in Merzouga for a private sunset camel ride to Tiziri Camp." } },
      { day: 6, title: { FR: "Expérience Sahara de Luxe", EN: "Luxury Sahara Experience" }, desc: { FR: "Petit-déjeuner au lever du soleil dans les dunes, excursion privée en 4x4, rencontres nomades et séance de photos dans le désert. Dîner privé au milieu des dunes avec musique traditionnelle.", EN: "Sunrise breakfast in the dunes, private 4x4 desert excursion, nomadic encounters, and a desert photography session. Enjoy a private dinner setup among the dunes with live traditional music." } },
      { day: 7, title: { FR: "Merzouga à l'Oasis de Skoura", EN: "Merzouga to Skoura Oasis" }, desc: { FR: "Route vers Skoura (~5h) avec arrêts aux gorges du Todra et à la vallée des roses. Installation au Ksar El Kabbaba pour une soirée de détente au bord de la piscine.", EN: "Drive to Skoura (~5h) with stops at the dramatic Todra Gorges and the Valley of Roses. Check in at Ksar El Kabbaba for a relaxed evening by the pool." } },
      { day: 8, title: { FR: "Skoura à Marrakech via Aït-Ben-Haddou", EN: "Skoura to Marrakech via Ait Ben Haddou" }, desc: { FR: "Route vers Marrakech (~4h30) avec visite du site historique d'Aït-Ben-Haddou (UNESCO). Installation au célèbre Royal Mansour Marrakech.", EN: "Drive to Marrakech (~4h30) with a visit to the historic UNESCO World Heritage site Ait Ben Haddou. Check in at the world-renowned Royal Mansour Marrakech." } },
      { day: 9, title: { FR: "Art de Vivre de Prestige à Marrakech", EN: "Marrakech Luxury Lifestyle" }, desc: { FR: "Volez en montgolfière au lever du soleil au-dessus de Marrakech. Visitez le jardin Majorelle, profitez d'une privatisation spa de luxe et d'un dîner d'adieu sur le toit.", EN: "Experience a magical sunrise hot air balloon flight over Marrakech. Visit the Majorelle Garden, enjoy a luxury spa buyout experience, and have a fine dining farewell rooftop evening." } },
      { day: 10, title: { FR: "Départ Souverain", EN: "Sovereign Departure" }, desc: { FR: "Transfert privé de luxe avec assistance prioritaire à l'aéroport pour votre vol de départ.", EN: "Private luxury transfer with dedicated airport fast-track assistance for your departure flight." } }
    ],
    inclusions: {
      FR: [
        "Vols aller-retour Montréal-Casablanca / Marrakech en classe Affaires",
        "9 nuits dans des suites de luxe (Royal Mansour, Fairmont, Palais Faraj, Ksar El Kabbaba)",
        "Transferts privés avec véhicule de luxe et chauffeur-guide",
        "Atelier privé avec un maître artisan calligraphe ou potier à Fès",
        "Vol panoramique exclusif en montgolfière au lever du soleil",
        "Assistance conciergerie VIP bilingue 24/7"
      ],
      EN: [
        "Round-trip Business Class flights Montreal-Casablanca / Marrakech",
        "9 nights in luxury properties (Royal Mansour, Fairmont, Palais Faraj, Ksar El Kabbaba)",
        "Private transfers in luxury vehicle with dedicated driver-guide",
        "Private calligaphy or pottery masterclass with a master artisan in Fes",
        "Exclusive sunrise scenic hot air balloon flight over Marrakech",
        "24/7 dedicated VIP bilingual private concierge service"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage personnelle obligatoire",
        "Pourboires pour les chauffeurs, guides et personnel hôtelier",
        "Dépenses de shopping et repas de midi non listés"
      ],
      EN: [
        "Mandatory personal travel insurance",
        "Gratuities for drivers, guides, and hotel staff",
        "Personal expenditures and lunches not listed in the program"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Jet Privé", price: "C$ 12,000" },
        { name: "Rituel Hammam de Luxe Supplémentaire (2h)", price: "C$ 380" }
      ],
      EN: [
        { name: "Private Jet Charter Upgrade", price: "C$ 12,000" },
        { name: "Additional Luxury Hammam Treatment (2h)", price: "C$ 380" }
      ]
    },
    hotels: [
      {
        name: "Royal Mansour Marrakech & Casablanca",
        stars: 5,
        desc: {
          FR: "Palaces de renommée mondiale, offrant des riads de prestige privés et un luxe inégalé.",
          EN: "World-renowned palaces offering ultimate privacy in historic riads and unparalleled luxury."
        },
        link: "https://www.royalmansour.com/"
      },
      {
        name: "Palais Faraj Suites & Spa (Fes)",
        stars: 5,
        desc: {
          FR: "Splendide riad historique surplombant la médina de Fès avec spa et cuisine d'exception.",
          EN: "A gorgeous historic riad overlooking the Fes medina with signature spa and dining."
        },
        link: "https://www.palaisfaraj.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Montgolfière Privée", EN: "Private Sunrise Balloon Flight" },
        desc: {
          FR: "Un vol majestueux au-dessus de la campagne de Marrakech au lever du soleil avec thé traditionnel.",
          EN: "A majestic flight over Marrakech countryside at sunrise with traditional tea."
        }
      },
      {
        title: { FR: "Atelier Calligraphie avec un Maître", EN: "Master Calligraphy Workshop" },
        desc: {
          FR: "Apprenez les secrets de l'écriture arabe traditionnelle avec un maître artisan dans la médina.",
          EN: "Learn the secrets of traditional Arabic writing from a master artisan in the medina."
        }
      }
    ]
  },
  "2": {
    id: 2,
    image: "/images/moroco.webp",
    contentImage: "/images/moroco.webp",
    title: { FR: "Maroc Impérial & Découverte Sahara", EN: "Imperial Morocco & Sahara Discovery" },
    duration: { FR: "12 jours / 11 nuits", EN: "12 days / 11 nights" },
    cost: "C$ 5,800",
    overview: {
      FR: "Embarquez pour une exploration culturelle approfondie du Maroc. Découvrez les merveilles de Casablanca, Rabat, Fès et Meknès, explorez la ville bleue de Chefchaouen, passez deux nuits complètes dans un camp du Sahara et visitez Aït-Ben-Haddou et Marrakech.",
      EN: "Embark on an extensive cultural exploration of Morocco. Discover the architectural wonders of Casablanca, Rabat, Fes, and Meknes, explore the famous blue city of Chefchaouen, spend two full nights in a Sahara Desert camp, and visit historic Ait Ben Haddou and Marrakech."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Casablanca → Rabat", EN: "Casablanca Arrival to Rabat" }, desc: { FR: "Arrivée, visite de la mosquée Hassan II, transfert à Rabat (~1h) et visite de la tour Hassan. Nuit à Rabat.", EN: "Arrival, tour the Hassan II Mosque, transfer to Rabat (~1h) and visit the Hassan Tower. Overnight in Rabat." } },
      { day: 2, title: { FR: "Rabat → Chefchaouen (Ville Bleue)", EN: "Rabat to Chefchaouen (Blue City)" }, desc: { FR: "Départ pour la perle bleue du Rif, après-midi de marche dans la médina, coucher du soleil depuis la mosquée espagnole. Nuit à Chefchaouen.", EN: "Departure to the blue pearl of the Rif. Afternoon walk in the medina, sunset view from the Spanish Mosque. Overnight in Chefchaouen." } },
      { day: 3, title: { FR: "Immersion Chefchaouen", EN: "Chefchaouen Immersion" }, desc: { FR: "Visite guidée, petit-déjeuner traditionnel, après-midi libre ou randonnée dans les montagnes du Rif. Nuit à Chefchaouen.", EN: "Guided walking tour, traditional breakfast experience, afternoon free for photography or hiking. Overnight in Chefchaouen." } },
      { day: 4, title: { FR: "Chefchaouen → Fès", EN: "Chefchaouen to Fes" }, desc: { FR: "Départ pour Fès (~4h) à travers de magnifiques paysages de montagne, après-midi libre pour exploration. Nuit à Fès.", EN: "Drive to Fes (~4h) through beautiful mountain slopes, checking in with free time for exploration. Overnight in Fes." } },
      { day: 5, title: { FR: "Découverte Culturelle de Fès", EN: "Fes Guided Immersion" }, desc: { FR: "Visite complète de la médina (UNESCO), des tanneries Chouara et des ateliers d'artisans. Soirée hammam en option. Nuit à Fès.", EN: "Full guided tour of Fes Medina (UNESCO), tanneries, and craft workshops. Street food lunch and optional hammam. Overnight in Fes." } },
      { day: 6, title: { FR: "Meknès & Volubilis", EN: "Meknes & Roman Ruins" }, desc: { FR: "Excursion à Meknès (Bab Mansour) puis visite des ruines romaines de Volubilis classées à l'UNESCO. Retour à Fès.", EN: "Drive to Meknes (Bab Mansour, Lahdim Square), continue to Volubilis for a guided tour of Roman ruins. Return to Fes." } },
      { day: 7, title: { FR: "Fès → Midelt → Merzouga (Sahara)", EN: "Fes to Merzouga Desert" }, desc: { FR: "Longue route vers le Sahara avec arrêts à Ifrane, forêt d'Azrou et déjeuner à Midelt. Balade à chameau au coucher du soleil. Nuit en camp de désert.", EN: "Drive through Midelt, stopping in Ifrane and Azrou Cedar Forest. Arrive in Merzouga for a sunset camel trek. Night in Sahara Camp." } },
      { day: 8, title: { FR: "Immersion au Sahara", EN: "Sahara Immersion Day" }, desc: { FR: "Lever du soleil sur les dunes, excursion 4x4, visites de familles nomades, musique Gnawa traditionnelle et sandboard. Soirée autour du feu. Nuit en camp.", EN: "Sunrise over the dunes, 4x4 desert safari, nomadic encounters, Gnawa music in Khamlia, and sandboarding. Campfire night. Night in camp." } },
      { day: 9, title: { FR: "Merzouga → Gorges du Todra → Vallée du Dadès", EN: "Merzouga to Dades Valley" }, desc: { FR: "Départ du désert vers les majestueuses gorges du Todra, marche dans les canyons et transfert vers la vallée du Dadès. Nuit à Dadès.", EN: "Leave the desert for the dramatic Todra Gorges, short canyon hike, and drive to the scenic Dades Valley. Dinner at hotel." } },
      { day: 10, title: { FR: "Vallée du Dadès → Aït-Ben-Haddou → Marrakech", EN: "Dades to Marrakech via Ait Ben Haddou" }, desc: { FR: "Passage par la vallée des roses et Ouarzazate, visite guidée de la kasbah d'Aït-Ben-Haddou (UNESCO) et arrivée à Marrakech. Nuit à Marrakech.", EN: "Drive through Roses Valley, Ouarzazate, and tour the UNESCO site Ait Ben Haddou. Cross the Atlas to Marrakech. Night in Marrakech." } },
      { day: 11, title: { FR: "Découverte de Marrakech", EN: "Marrakech Guided Tour" }, desc: { FR: "Visite guidée du palais de la Bahia, des tombeaux saadiens et du jardin Majorelle. Souks et dîner d'adieu. Nuit à Marrakech.", EN: "Guided tour of Bahia Palace, Saadian Tombs, and Majorelle Garden. Free time in the souks and farewell dinner. Night in Marrakech." } },
      { day: 12, title: { FR: "Départ de Marrakech", EN: "Sovereign Departure" }, desc: { FR: "Transfert privé vers l'aéroport de Marrakech pour votre vol de retour. Fin des services.", EN: "Private transfer to Marrakech Menara Airport for your departure flight home. End of services." } }
    ],
    inclusions: {
      FR: [
        "11 nuits d'hébergement en hôtels premium et riads de charme",
        "Transport terrestre privé en véhicule climatisé avec chauffeur",
        "Guides locaux certifiés à Rabat, Fès et Marrakech",
        "Randonnée à chameau à Erg Chebbi et safari 4x4",
        "Petits-déjeuners quotidiens et dîners dans le désert et à Dadès",
        "Frais d'entrée aux monuments et sites historiques listés"
      ],
      EN: [
        "11 nights accommodation in premium riads and hotels",
        "All land transportation in private air-conditioned vehicle",
        "Professional local guides in Rabat, Fes, and Marrakech",
        "Sunset camel trek in Erg Chebbi and 4x4 desert excursion",
        "Daily breakfast and designated dinners in the desert and Dades",
        "Entrance fees to monuments and historical sites"
      ]
    },
    exclusions: {
      FR: [
        "Vols internationaux",
        "Assurance voyage personnelle obligatoire",
        "Repas du midi et dîners non mentionnés",
        "Pourboires et dépenses personnelles"
      ],
      EN: [
        "International flights",
        "Mandatory personal travel insurance",
        "Lunches and dinners not listed in the program",
        "Tips for guides/drivers and personal purchases"
      ]
    },
    options: {
      FR: [
        { name: "Rituel Hammam Traditionnel (2h)", price: "C$ 180" },
        { name: "Cours de Cuisine Traditionnelle à Fès", price: "C$ 150" }
      ],
      EN: [
        { name: "Traditional Hammam Ritual (2h)", price: "C$ 180" },
        { name: "Traditional Cooking Masterclass in Fes", price: "C$ 150" }
      ]
    },
    hotels: [
      {
        name: "Riad Lina & Spa (Chefchaouen)",
        stars: 4,
        desc: {
          FR: "Riad d'exception avec spa niché au cœur de la ville bleue de Chefchaouen.",
          EN: "A gorgeous boutique riad and spa set in the heart of the blue town of Chefchaouen."
        },
        link: "https://www.riadlina.com/"
      },
      {
        name: "Riad Fes (Fes)",
        stars: 5,
        desc: {
          FR: "Membre Relais & Châteaux, combinant design moderne et héritage andalou exceptionnel.",
          EN: "Relais & Châteaux member combining contemporary design and Andalusian heritage."
        },
        link: "https://www.riadfes.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Randonnée à Chameau à Erg Chebbi", EN: "Sunset Erg Chebbi Camel Trek" },
        desc: {
          FR: "Une promenade magique à dos de chameau dans les dunes géantes de Merzouga au coucher du soleil.",
          EN: "A magical camel trek into the giant dunes of Merzouga at sunset."
        }
      },
      {
        title: { FR: "Visite Romaine de Volubilis", EN: "Volubilis Roman Ruins Tour" },
        desc: {
          FR: "Exploration des superbes mosaïques et vestiges romains avec un guide archéologue local.",
          EN: "Explore the ancient Roman ruins and stunning mosaics with an expert local guide."
        }
      }
    ]
  },
  "3": {
    id: 3,
    image: "/images/morocco-sahara-dunes.png",
    contentImage: "/images/morocco-sahara-dunes.png",
    title: { FR: "Sahara Deep Dive – Immersion Désert", EN: "Sahara Deep Dive – Desert Immersion Experience" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: "C$ 4,900",
    overview: {
      FR: "Un voyage exclusif axé sur le Sahara. De Marrakech, traversez le Haut Atlas via le col du Tichka, explorez Aït-Ben-Haddou et Ouarzazate, puis passez trois nuits complètes dans le désert avec randonnées à chameau, sandboard, rencontres nomades et observation des étoiles.",
      EN: "A specialized itinerary focusing on the magic of the Sahara. From Marrakech, cross the High Atlas Mountains via Tizi n'Tichka and traverse Ait Ben Haddou and Ouarzazate. Spend three full nights in the desert, experiencing camel treks, sandboarding, nomadic encounters, and stargazing."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Marrakech", EN: "Arrival in Marrakech" }, desc: { FR: "Accueil à l'aéroport, transfert privé vers votre riad, après-midi libre sur la place Jemaa el-Fna et dîner. Nuit à Marrakech.", EN: "Meet and greet at airport, private transfer to boutique riad, free time in Jemaa el-Fna square and welcome dinner." } },
      { day: 2, title: { FR: "Marrakech → Ouarzazate", EN: "Marrakech to Ouarzazate" }, desc: { FR: "Route à travers l'Atlas (col du Tichka), visite de la kasbah fortifiée d'Aït-Ben-Haddou (UNESCO) et des studios de cinéma. Nuit à Ouarzazate.", EN: "Drive across High Atlas (Tichka pass), guided tour of UNESCO site Ait Ben Haddou, optional Atlas Studios. Overnight in Ouarzazate." } },
      { day: 3, title: { FR: "Ouarzazate → Vallée du Dadès", EN: "Ouarzazate to Dades Valley" }, desc: { FR: "Passage par la palmeraie de Skoura, la vallée des roses et les villages berbères traditionnels. Nuit dans la vallée du Dadès.", EN: "Scenic drive through Skoura oasis, Valley of Roses, and old Berber villages. Dinner at hotel. Overnight in Dades Valley." } },
      { day: 4, title: { FR: "Vallée du Dadès → Gorges du Todra → Merzouga", EN: "Dades to Merzouga Desert" }, desc: { FR: "Marche dans les impressionnantes gorges du Todra, route vers le désert et randonnée à chameau à Erg Chebbi. Dîner et nuit en camp.", EN: "Explore Todra Gorges, continue to Merzouga for a sunset camel trek into Erg Chebbi dunes. Campfire dinner. Overnight in Camp." } },
      { day: 5, title: { FR: "Immersion au Sahara (Jour 1)", EN: "Sahara Desert Immersion" }, desc: { FR: "Lever du soleil dans les dunes, excursion 4x4, rencontre avec les familles nomades et concert de musique Gnawa à Khamlia. Nuit en camp.", EN: "Sunrise dune experience, breakfast, 4x4 desert excursion, nomadic encounters, Khamlia village Gnawa music, sandboarding. Night in Camp." } },
      { day: 6, title: { FR: "Détente & Vie Nomade (Jour 2)", EN: "Desert Relaxation & Life" }, desc: { FR: "Séance de yoga dans les dunes, marche guidée, session de photos de désert et dîner d'adieu sous les étoiles. Nuit en camp de luxe.", EN: "Optional dune yoga, leisure breakfast, desert walk with local guide, private sunset setup, and farewell desert dinner. Night in Camp." } },
      { day: 7, title: { FR: "Merzouga → Marrakech", EN: "Merzouga back to Marrakech" }, desc: { FR: "Route retour via Midelt, la forêt de cèdres d'Azrou (singes de Barbarie) et Ifrane vers Marrakech. Nuit à Marrakech.", EN: "Long return drive through Ziz Valley, Midelt, Azrou cedar forest (monkeys), and Ifrane to Marrakech. Overnight in Marrakech." } },
      { day: 8, title: { FR: "Départ", EN: "Departure" }, desc: { FR: "Petit-déjeuner à l'hôtel, transfert privé vers l'aéroport pour votre vol de retour.", EN: "Breakfast at the riad, private SUV transfer to Marrakech Menara Airport for departure. End of services." } }
    ],
    inclusions: {
      FR: [
        "7 nuits d'hébergement (dont 3 nuits en camp de désert de luxe Erg Chebbi)",
        "Véhicule 4x4 privé climatisé avec chauffeur-guide professionnel",
        "Randonnée à chameau guidée et matériel de sandboard",
        "Visites guidées de Marrakech et de la kasbah d'Aït-Ben-Haddou",
        "Petits-déjeuners quotidiens et dîners spéciaux au désert et à Dadès"
      ],
      EN: [
        "7 nights accommodation (including 3 nights in luxury desert camp)",
        "Private 4x4 transport with experienced professional driver-guide",
        "Guided tours in Marrakech and Ait Ben Haddou",
        "Camel trekking experience and sandboarding equipment",
        "Daily breakfast and designated dinners in the desert and Dades"
      ]
    },
    exclusions: {
      FR: [
        "Vols internationaux",
        "Assurance voyage personnelle obligatoire",
        "Dîners non spécifiés et dépenses personnelles",
        "Pourboires pour les guides et chauffeurs"
      ],
      EN: [
        "International flights",
        "Travel insurance and personal health expenses",
        "Unspecified meals, drinks, and personal purchases",
        "Gratuities for drivers and local guides"
      ]
    },
    options: {
      FR: [
        { name: "Aventure en Buggy dans les Dunes (2h)", price: "C$ 320" },
        { name: "Tour Gastronomique Médina de Marrakech", price: "C$ 120" }
      ],
      EN: [
        { name: "Dune Buggy Adventure (2h)", price: "C$ 320" },
        { name: "Marrakech Medina Food Tour", price: "C$ 120" }
      ]
    },
    hotels: [
      {
        name: "La Maison Arabe (Marrakech)",
        stars: 5,
        desc: {
          FR: "Riad de grand luxe légendaire dans la médina de Marrakech avec jardin et piscine d'exception.",
          EN: "A legendary luxury riad in Marrakech medina featuring exquisite gardens and pool."
        },
        link: "https://www.lamaisonarabe.com/"
      },
      {
        name: "Tiziri Desert Camp (Sahara)",
        stars: 5,
        desc: {
          FR: "Camp écologique de luxe niché au milieu des dunes de l'Erg Chebbi, offrant calme et élégance.",
          EN: "An eco-luxury camp set in Erg Chebbi dunes, offering quiet elegance and starry nights."
        },
        link: "https://tiziricamp.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Excursion Désert en 4x4", EN: "4x4 Desert Safari" },
        desc: {
          FR: "Exploration des dunes, visites de campements nomades et découverte géologique des fossiles.",
          EN: "Explore the deep dunes, meet nomadic families, and check out historical fossil sites."
        }
      },
      {
        title: { FR: "Musique Gnawa à Khamlia", EN: "Gnawa Music in Khamlia" },
        desc: {
          FR: "Rencontre avec les musiciens locaux du village de Khamlia pour un concert de musique Gnawa.",
          EN: "Experience a live performance of traditional Gnawa music in the village of Khamlia."
        }
      }
    ]
  },
  "4": {
    id: 4,
    image: "/images/hilton_taghazout_5.avif",
    contentImage: "/images/hilton_taghazout_1.avif",
    title: { FR: "Golf de Prestige à Taghazout Bay", EN: "Bespoke Golf Escape in Taghazout Bay" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: "C$ 3,600",
    overview: {
      FR: "Un forfait de golf haut de gamme sur la côte atlantique. Volez directement de Montréal à Agadir et séjournez 7 nuits en chambre vue piscine au Hilton Taghazout 5★. Jouez 4 parties de golf sur les parcours de Tazegzout, du Soleil et des Dunes, avec voiturette électrique et demi-pension gastronomique.",
      EN: "An elite golf package along the Atlantic coast. Fly directly from Montreal to Agadir and stay 7 nights in a pool-view room at the 5★ Hilton Taghazout. Play 4 rounds of golf at the scenic Tazegzout, du Soleil, and Les Dunes courses, complete with shared electric carts, half-board gourmet dining, and 24/7 concierge assistance."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Agadir & Taghazout", EN: "Arrival in Agadir & Taghazout" }, desc: { FR: "Vol direct Montréal-Agadir, transfert privé depuis l'aéroport vers le Hilton Taghazout 5★. Cocktail de bienvenue et installation en chambre vue piscine.", EN: "Direct flight Montreal to Agadir, VIP airport transfer to the 5★ Hilton Taghazout. Welcome cocktail and check-in to your Pool View guest room." } },
      { day: 2, title: { FR: "Partie 1 : Tazegzout Golf", EN: "Round 1: Tazegzout Golf Club" }, desc: { FR: "Jouez votre première partie au Golf de Tazegzout, perché à 80m au-dessus de la mer avec une vue spectaculaire sur l'océan. Voiturette électrique incluse.", EN: "Play your first round at Tazegzout Golf, perched 80m above sea level with dramatic ocean views on every hole. Shared electric cart included." } },
      { day: 3, title: { FR: "Détente & Découverte Côtière", EN: "Sightseeing & Coastal Leisure" }, desc: { FR: "Journée libre pour vous détendre sur les plages de Taghazout, essayer le surf ou explorer les souks locaux et coopératives d'huile d'argan.", EN: "Free day to relax on the sandy beaches of Taghazout, try surfing, or explore the local souks and traditional argan oil cooperatives." } },
      { day: 4, title: { FR: "Partie 2 : Golf du Soleil", EN: "Round 2: Golf du Soleil" }, desc: { FR: "Deuxième partie de golf au Golf du Soleil, niché au cœur d'un domaine d'eucalyptus avec cascades et lacs.", EN: "Play your second round at Golf du Soleil, set in a lush landscape of lakes, eucalyptus trees, and professional-grade fairways." } },
      { day: 5, title: { FR: "Partie 3 : Golf Les Dunes", EN: "Round 3: Golf Les Dunes" }, desc: { FR: "Troisième partie de golf au Golf Les Dunes, un superbe parcours de 27 trous dessiné par Cabell B. Robinson.", EN: "Play your third round at Golf Les Dunes, a wonderful 27-hole championship layout designed by Cabell B. Robinson." } },
      { day: 6, title: { FR: "Partie 4 : Tazegzout Golf - Deuxième Session", EN: "Round 4: Tazegzout Golf - Second Session" }, desc: { FR: "Quatrième et dernière partie de golf de retour au Golf de Tazegzout, en se concentrant sur les trous de falaise signature.", EN: "Play your final round back at Tazegzout Golf, focusing on the challenging signature cliffside finishing holes." } },
      { day: 7, title: { FR: "Détente & Dîner Gastronomique", EN: "Leisure & Gourmet Half-Board Dinner" }, desc: { FR: "Journée libre de détente au spa de l'hôtel, suivie d'un dîner gastronomique de 3 services avec vin fin et thé.", EN: "A free day for ocean spa relaxation, followed by a final gourmet 3-course dinner with premium wine and tea." } },
      { day: 8, title: { FR: "Départ d'Agadir", EN: "Departure" }, desc: { FR: "Transfert privé vers l'aéroport d'Agadir pour votre vol direct de retour vers Montréal. Fin des services.", EN: "VIP airport transfer for your direct return flight to Montreal. End of services." } }
    ],
    inclusions: {
      FR: [
        "Vols directs Montréal-Agadir aller-retour avec Air Transat (classe Économie)",
        "7 nuits en Chambre Vue Piscine double au Hilton Taghazout 5★",
        "Demi-pension gourmande (dîner 3 services, 1/2 bouteille de vin/eau, café/thé)",
        "4 parties de golf (Tazegzout, du Soleil, Les Dunes) avec voiturette",
        "Réservations des temps de départ et assistance 24/7",
        "Couverture par le fonds d'indemnisation FICAV"
      ],
      EN: [
        "Direct round-trip flights Montreal-Agadir with Air Transat (Standard Economy)",
        "7 nights in double occupancy Pool View Room at Hilton Taghazout 5★",
        "Half-board dining (3-course dinner, 1/2 bottle of wine & water, coffee/tea)",
        "4 rounds of golf (Tazegzout, du Soleil, Les Dunes) with electric cart",
        "Tee time reservations and 24/7 assistance",
        "FICAV travel protection fund coverage"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage personnelle obligatoire",
        "Pourboires pour les caddies et le personnel hôtelier",
        "Dîners non spécifiés et boissons premium hors formule",
        "Achats personnels"
      ],
      EN: [
        "Mandatory personal travel insurance",
        "Gratuities for caddies and hotel staff",
        "Lunches and alcoholic drinks outside of half-board package",
        "Personal shopping expenses"
      ]
    },
    options: {
      FR: [
        { name: "Spa Hammam Riad Privatisé (3h)", price: "C$ 220" },
        { name: "Visite guidée privée d'Agadir", price: "C$ 120" }
      ],
      EN: [
        { name: "Riad Spa Hammam Buyout (3h)", price: "C$ 220" },
        { name: "Agadir City Tour with Private Guide", price: "C$ 120" }
      ]
    },
    hotels: [
      {
        name: "Hilton Taghazout Bay Beach Resort & Spa",
        stars: 5,
        desc: {
          FR: "Hôtel 5★ exceptionnel face à l'océan Atlantique avec piscine, spa et plages magnifiques.",
          EN: "Stunning 5★ beachfront hotel facing the Atlantic ocean with pools, spa, and sandy beaches."
        },
        link: "https://www.hilton.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Golf à Tazegzout", EN: "Tazegzout Golfing Session" },
        desc: {
          FR: "Parcours de golf magnifique dessiné par Kyle Phillips sur une falaise dominant l'océan.",
          EN: "Stunning Kyle Phillips-designed cliffside course overlooking the Atlantic ocean."
        }
      },
      {
        title: { FR: "Spa & Hammam de l'Hôtel", EN: "Hotel Spa & Hammam" },
        desc: {
          FR: "Soin d'eucalyptus et massage traditionnel argan dans le spa haut de gamme du Hilton.",
          EN: "Gourmet argan oil massage and eucalyptus steam in the Hilton's high-end spa."
        }
      }
    ]
  },
  "5": {
    id: 5,
    image: "/images/marrakech_sunset_hero.png",
    contentImage: "/images/marrakech_sunset_hero.png",
    title: { FR: "Séjour Golf Royal à Marrakech", EN: "Royal Golf & All-Inclusive Wellness" },
    duration: { FR: "12 jours / 11 nuits", EN: "12 days / 11 nights" },
    cost: "C$ 5,200",
    overview: {
      FR: "L'échappée golf tout-inclus ultime à Marrakech. Volez directement de Montréal à Marrakech et séjournez 11 nuits en Chambre Deluxe Vue Jardin au prestigieux Hôtel du Golf 5★. Jouez 6 parties de golf sur les plus beaux parcours de Marrakech (Royal Golf, Amelkis, Palm Ourika, Assoufid, Samanah, Noria).",
      EN: "An ultimate all-inclusive golf escape in Marrakech. Fly directly from Montreal to Marrakech with Air Transat and spend 11 nights in a Deluxe Garden View room at the 5★ Hôtel du Golf. Play 6 rounds of golf across Marrakech's finest courses (Royal Golf, Amelkis, Palm Ourika, Assoufid, Samanah, Noria) with shared electric carts, gourmet dining, and full premium leisure."
    },
    timeline: [
      { day: 1, title: { FR: "Accueil Royal à Marrakech", EN: "Royal Welcome in Marrakech" }, desc: { FR: "Vol direct Montréal-Marrakech, transfert privé de luxe en SUV vers l'Hôtel du Golf 5★. Installation en Chambre Deluxe Vue Jardin avec formule tout-inclus.", EN: "Direct flight Montreal to Marrakech, private luxury SUV transfer to the 5★ Hôtel du Golf. Check in to your Deluxe Garden View room with all-inclusive access." } },
      { day: 2, title: { FR: "Partie 1 : Royal Golf de Marrakech", EN: "Round 1: Royal Golf de Marrakech" }, desc: { FR: "Première partie de golf au Royal Golf de Marrakech, un parcours légendaire dessiné dans les années 1920 et fréquenté par la royauté.", EN: "Play your first round at the historic Royal Golf de Marrakech, a legendary course designed in the 1920s and frequented by royalty." } },
      { day: 3, title: { FR: "Partie 2 : Golf Amelkis", EN: "Round 2: Golf Amelkis" }, desc: { FR: "Deuxième partie de golf au Golf Amelkis, dessiné par Cabell B. Robinson, avec des palmiers superbes et des obstacles de sable stimulants.", EN: "Play your second round at Golf Amelkis, designed by Cabell B. Robinson, featuring beautiful palms and challenging bunkers." } },
      { day: 4, title: { FR: "Souks & Découverte Culturelle de Marrakech", EN: "Marrakech Souks & Cultural Discovery" }, desc: { FR: "Journée libre pour découvrir les sites historiques de Marrakech, y compris le palais de la Bahia et les tombeaux saadiens avec guide privé.", EN: "Free day to discover Marrakech's historical sites, including Bahia Palace and Saadian Tombs, with a private guide." } },
      { day: 5, title: { FR: "Partie 3 : Golf Palm Ourika", EN: "Round 3: Golf Palm Ourika" }, desc: { FR: "Troisième partie de golf au Golf Palm Ourika, tracé dans une oliveraie avec vue sur les cimes enneigées de l'Atlas.", EN: "Play your third round at Golf Palm Ourika, set in an olive grove with spectacular views of the snow-capped Atlas peaks." } },
      { day: 6, title: { FR: "Partie 4 : Golf Assoufid", EN: "Round 4: Golf Assoufid" }, desc: { FR: "Quatrième partie au Golf Assoufid, un parcours de style désert primé à plusieurs reprises, avec vue sur l'Atlas.", EN: "Play your fourth round at Assoufid Golf Club, an award-winning desert-style design with magnificent Atlas views." } },
      { day: 7, title: { FR: "Détente & Spa Hammam Traditionnel", EN: "Wellness & Spa Hammam Day" }, desc: { FR: "Journée de détente absolue au spa de l'hôtel avec rituel hammam marocain traditionnel et massage à l'huile d'argan.", EN: "Relax at the hotel's luxury spa with a traditional Moroccan hammam ritual and argan oil massage." } },
      { day: 8, title: { FR: "Partie 5 : Golf Samanah", EN: "Round 5: Golf Samanah" }, desc: { FR: "Cinquième partie au Samanah Golf Club, un parcours de championnat Jack Nicklaus Signature exigeant.", EN: "Play your fifth round at Samanah Golf Club, a challenging Jack Nicklaus Signature course with wide fairways." } },
      { day: 9, title: { FR: "Partie 6 : Golf Noria", EN: "Round 6: Golf Noria" }, desc: { FR: "Sixième et dernière partie de golf au Golf Noria, un tracé unique intégrant une noria traditionnelle.", EN: "Play your final round at Golf Noria, a unique design featuring a traditional Moroccan waterwheel and modern layout." } },
      { day: 10, title: { FR: "Excursion de la Vallée de l'Ourika", EN: "Ourika Valley Sightseeing Excursion" }, desc: { FR: "Excursion panoramique dans la vallée de l'Ourika, explorez les villages berbères et découvrez les cascades.", EN: "Take a scenic drive to the Ourika Valley, explore local Berber villages, and walk along waterfalls." } },
      { day: 11, title: { FR: "Détente & Restauration Tout-Inclus", EN: "Leisure & All-Inclusive Gourmet Dining" }, desc: { FR: "Journée complète pour profiter des piscines et savourer les dîners, boissons premium et soins tout-compris.", EN: "A full day to relax at the pools and enjoy all-inclusive dining, premium drinks, and high-quality services." } },
      { day: 12, title: { FR: "Départ de Marrakech", EN: "Sovereign Departure" }, desc: { FR: "Transfert privé vers l'aéroport Marrakech Ménara pour votre vol direct de retour. Fin des services.", EN: "Private transfer to Marrakech Menara Airport for your direct return flight to Montreal. End of services." } }
    ],
    inclusions: {
      FR: [
        "Vols directs Montréal-Marrakech aller-retour avec Air Transat (classe Économie)",
        "11 nuits en Chambre Deluxe Vue Jardin au Hôtel du Golf 5★",
        "Formule tout-inclus (dîners gourmets, boissons illimitées, café/thé)",
        "6 parties de golf (Royal Golf, Amelkis, Palm Ourika, Assoufid, Samanah, Noria) avec voiturette",
        "Réservations des temps de départ et assistance 24/7",
        "Couverture par le fonds d'indemnisation FICAV"
      ],
      EN: [
        "Direct round-trip flights Montreal-Marrakech with Air Transat (Standard Economy)",
        "11 nights in Deluxe Garden View Room at 5★ Hôtel du Golf",
        "All-inclusive board (unlimited gourmet dining, premium drinks, coffee/tea)",
        "6 rounds of golf (Royal Golf, Amelkis, Palm Ourika, Assoufid, Samanah, Noria) with electric cart",
        "Tee time reservations and 24/7 concierge assistance",
        "FICAV compensation fund coverage"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage personnelle obligatoire",
        "Pourboires pour les chauffeurs et caddies",
        "Excursions facultatives non listées",
        "Achats personnels"
      ],
      EN: [
        "Personal travel insurance",
        "Tips for drivers and caddies",
        "Unlisted optional excursions",
        "Personal shopping"
      ]
    },
    options: {
      FR: [
        { name: "Visite guidée privée Médina (Journée)", price: "C$ 150" },
        { name: "Vol en montgolfière au-dessus de l'Atlas", price: "C$ 450" }
      ],
      EN: [
        { name: "Private Guided Medina Tour (Full Day)", price: "C$ 150" },
        { name: "Hot Air Balloon Flight over Atlas Mountains", price: "C$ 450" }
      ]
    },
    hotels: [
      {
        name: "Hôtel du Golf Rotana Marrakech Palmeraie",
        stars: 5,
        desc: {
          FR: "Hôtel 5★ prestigieux au cœur de la Palmeraie offrant détente tout-inclus et golf d'exception.",
          EN: "A prestigious 5★ hotel in the heart of the Palmeraie offering all-inclusive relaxation."
        },
        link: "https://www.rotana.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Royal Golf de Marrakech", EN: "Royal Golf Session" },
        desc: {
          FR: "Jouez sur l'un des plus anciens et mythiques terrains de golf du Maroc sous les eucalyptus.",
          EN: "Play on one of the oldest and most legendary golf courses in Morocco amidst eucalyptus trees."
        }
      },
      {
        title: { FR: "Détente Palmeraie Spa", EN: "Palmeraie Spa Wellness" },
        desc: {
          FR: "Soin oriental de 2 heures avec hammam privé et gommage traditionnel.",
          EN: "Gourmet 2-hour oriental spa treatment with private hammam steam and scrub."
        }
      }
    ]
  },
  "6": {
    id: 6,
    image: "/images/moroco.webp",
    contentImage: "/images/moroco.webp",
    title: { FR: "Villes Impériales & Découverte du Désert", EN: "Imperial Cities & Desert Discovery" },
    duration: { FR: "12 jours / 11 nuits", EN: "11 days / 10 nights" },
    cost: "C$ 4,800",
    overview: {
      FR: "Découvrez l'histoire impériale et l'âme du désert marocain. Explorez les trésors de Casablanca, la capitale de Rabat, la ville romaine de Volubilis et la médina de Fès avant de traverser l'Atlas pour monter à chameau et dormir au milieu des dunes de l'Erg Chebbi à Merzouga.",
      EN: "Discover the imperial history and desert soul of Morocco. Explore the architectural treasures of Casablanca, the capital Rabat, the Roman ruins of Volubilis, and the historic medina of Fes, before crossing the Atlas to ride camels and sleep under the stars in the Merzouga desert."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Casablanca", EN: "Arrival in Casablanca" }, desc: { FR: "Accueil à l'aéroport de Casablanca, transfert privé vers votre hôtel et installation. Soirée libre.", EN: "Meet and greet at Casablanca airport, private transfer to your hotel, and check-in. Evening at leisure." } },
      { day: 2, title: { FR: "Visite de Casablanca", EN: "Casablanca Guided Tour" }, desc: { FR: "Découvrez la mosquée Hassan II (visite extérieure), la place Mohammed V, le quartier des Habous et la Corniche.", EN: "Guided tour of Casablanca, featuring the Hassan II Mosque (exterior), Mohammed V Square, and the scenic Corniche." } },
      { day: 3, title: { FR: "Casablanca vers Rabat", EN: "Casablanca to Rabat" }, desc: { FR: "Départ pour Rabat. Visite guidée incluant la Tour Hassan, le somptueux Mausolée de Mohammed V et la pittoresque Kasbah des Oudayas.", EN: "Drive to Rabat. Take a guided tour of the capital, including the Hassan Tower, Mohammed V Mausoleum, and Kasbah of the Oudayas." } },
      { day: 4, title: { FR: "Rabat vers Fès via Meknès & Volubilis", EN: "Rabat to Fes via Meknes & Volubilis" }, desc: { FR: "Route vers Meknès et découverte des ruines romaines de Volubilis classées UNESCO. Continuation vers Fès.", EN: "Travel to Meknes for a panoramic tour, visit the ancient Roman site of Volubilis (UNESCO), and check in to your riad in Fes." } },
      { day: 5, title: { FR: "Découverte Culturelle de Fès", EN: "Fes Guided Medina Exploration" }, desc: { FR: "Journée complète dans la médina de Fès (UNESCO), l'Université Al Quaraouiyine, la tannerie Chouara et la médersa Bou Inania.", EN: "Enjoy a full-day guided walking tour of Fes El Bali medina, visiting the historic tanneries, artisan workshops, and ancient schools." } },
      { day: 6, title: { FR: "Fès vers le Désert de Merzouga", EN: "Fes to Merzouga Desert" }, desc: { FR: "Longue route vers l'Erg Chebbi via Ifrane, la forêt d'Azrou (singes de Barbarie) et Midelt. Arrivée à Merzouga en fin de journée.", EN: "Drive through Middle Atlas forests, stop in Ifrane and Azrou, lunch in Midelt, and continue through the Ziz Valley to Merzouga." } },
      { day: 7, title: { FR: "Merzouga & Coucher de Soleil à Chameau", EN: "Sahara Sunset Camel Trek" }, desc: { FR: "Matinée libre pour vous reposer ou explorer. L'après-midi, départ à dos de chameau pour voir le coucher du soleil. Dîner traditionnel et nuit en bivouac.", EN: "Free morning in Merzouga. Afternoon sunset camel ride across Erg Chebbi dunes. Enjoy a nomadic campfire dinner and sleep in a desert camp." } },
      { day: 8, title: { FR: "Merzouga vers Ouarzazate via Aït-Ben-Haddou", EN: "Merzouga to Ouarzazate via Ait Ben Haddou" }, desc: { FR: "Route par Rissani et la vallée du Drâa. Visite guidée de la Kasbah fortifiée d'Aït-Ben-Haddou (UNESCO) avant d'arriver à Ouarzazate.", EN: "Drive through the palm-filled Draa Valley. Visit the world-famous fortified Kasbah of Ait Ben Haddou (UNESCO) before reaching Ouarzazate." } },
      { day: 9, title: { FR: "Ouarzazate vers Marrakech", EN: "Ouarzazate to Marrakech" }, desc: { FR: "Traversée du Haut Atlas par le col spectaculaire du Tizi n'Tichka. Arrivée et nuit à Marrakech.", EN: "Cross the High Atlas Mountains via the panoramic Tizi n'Tichka Pass. Arrive and check in to your hotel in Marrakech." } },
      { day: 10, title: { FR: "Visite de Marrakech", EN: "Marrakech Guided Tour" }, desc: { FR: "Visite de la place Jemaa el-Fna, la Koutoubia, le palais de la Bahia et les souks. Balade en calèche au coucher du soleil.", EN: "Discover the Koutoubia Mosque, Bahia Palace, Saadian Tombs, and the lively souks of the medina. Sunset horse carriage ride." } },
      { day: 11, title: { FR: "Journée Libre à Marrakech / Retour Casablanca", EN: "Marrakech Free Day / Return to Casablanca" }, desc: { FR: "Pour le forfait FR (11 nuits): Journée complète libre à Marrakech pour détente, souks ou hammam. Pour le forfait EN (10 nuits): Transfert direct vers Casablanca.", EN: "Enjoy a free day in Marrakech to relax, or transfer back to Casablanca Airport according to your departure flights." } },
      { day: 12, title: { FR: "Transfert vers l'Aéroport", EN: "Departure" }, desc: { FR: "Petit-déjeuner et transfert privé vers l'aéroport de Casablanca pour votre vol de retour. Fin des services.", EN: "Breakfast and private transfer to Casablanca airport for your flight home. End of services." } }
    ],
    inclusions: {
      FR: [
        "11 nuits d'hébergement en hôtels premium et riads de charme (dont 1 nuit au désert)",
        "Transport terrestre privé en véhicule climatisé avec chauffeur professionnel",
        "Guides locaux à Rabat, Volubilis, Fès et Marrakech",
        "Randonnée à chameau à Erg Chebbi et dîner sous les étoiles",
        "Petits-déjeuners quotidiens et dîners désignés"
      ],
      EN: [
        "10 nights in premium riads and hotels (including 1 night in desert camp)",
        "All land transport in private air-conditioned vehicle with dedicated driver",
        "Local expert guides in Rabat, Volubilis, Fes, and Marrakech",
        "Erg Chebbi sunset camel trek and desert stargazing camp",
        "Daily breakfast and designated dinners"
      ]
    },
    exclusions: {
      FR: [
        "Vols internationaux",
        "Assurance voyage personnelle obligatoire",
        "Repas du midi et boissons non mentionnés",
        "Pourboires et dépenses personnelles"
      ],
      EN: [
        "International flights",
        "Mandatory personal travel insurance",
        "Lunches and beverages outside of set dinners",
        "Tips for guides/drivers and personal expenditures"
      ]
    },
    options: {
      FR: [
        { name: "Excursion quad dans le désert (2h)", price: "C$ 180" },
        { name: "Rituel Hammam Traditionnel (2h)", price: "C$ 150" }
      ],
      EN: [
        { name: "Desert Quad Biking Adventure (2h)", price: "C$ 180" },
        { name: "Traditional Hammam Treatment (2h)", price: "C$ 150" }
      ]
    },
    hotels: [
      {
        name: "Riad Fes (Fes)",
        stars: 5,
        desc: {
          FR: "Membre Relais & Châteaux, combinant design moderne et héritage andalou exceptionnel.",
          EN: "Relais & Châteaux member combining contemporary design and Andalusian heritage."
        },
        link: "https://www.riadfes.com/"
      },
      {
        name: "La Maison Arabe (Marrakech)",
        stars: 5,
        desc: {
          FR: "Riad de grand luxe légendaire dans la médina de Marrakech avec jardin et piscine d'exception.",
          EN: "A legendary luxury riad in Marrakech medina featuring exquisite gardens and pool."
        },
        link: "https://www.lamaisonarabe.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Randonnée à Chameau à Erg Chebbi", EN: "Erg Chebbi Camel Trek" },
        desc: {
          FR: "Une promenade magique à dos de chameau dans les dunes géantes de Merzouga au coucher du soleil.",
          EN: "A magical camel trek into the giant dunes of Merzouga at sunset."
        }
      },
      {
        title: { FR: "Ruines Romaines de Volubilis", EN: "Volubilis Roman Ruins" },
        desc: {
          FR: "Exploration des superbes mosaïques et vestiges romains avec un guide archéologue local.",
          EN: "Explore the ancient Roman ruins and stunning mosaics with an expert local guide."
        }
      }
    ]
  },
  "7": {
    id: 7,
    image: "/images/morocco-marrakech-riad.png",
    contentImage: "/images/morocco-marrakech-riad.png",
    title: { FR: "Villes Impériales, Chefchaouen & Côte Atlantique", EN: "Imperial Cities, Chefchaouen & Atlantic Coast" },
    duration: { FR: "15 jours / 14 nuits", EN: "15 days / 14 nights" },
    cost: "C$ 7,200",
    overview: {
      FR: "L'itinéraire ultime de 15 jours. Explorez le nord historique à Tanger, flânez dans les ruelles bleues de Chefchaouen, visitez le patrimoine impérial de Fès et de Rabat, chevauchez des chameaux au Sahara, visitez Marrakech et profitez du port de pêche d'Essaouira sur l'Atlantique.",
      EN: "Morocco's ultimate grand tour. A comprehensive 15-day itinerary covering the blue town of Chefchaouen, the northern coast of Tangier, the imperial heritage of Rabat and Fes, the dunes of Erg Chebbi, the palaces of Marrakech, and the relaxing seaside ramparts of Essaouira."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Casablanca", EN: "Arrival in Casablanca" }, desc: { FR: "Accueil à l'aéroport de Casablanca, transfert privé vers votre hôtel et installation. Nuit à Casablanca.", EN: "Meet and greet at Casablanca Airport and private transfer to your hotel. Overnight in Casablanca." } },
      { day: 2, title: { FR: "Casablanca vers Rabat", EN: "Casablanca to Rabat" }, desc: { FR: "Visite de la célèbre Mosquée Hassan II et promenade sur la Corniche, puis route vers Rabat. Visite guidée incluant la Tour Hassan et Kasbah des Oudayas.", EN: "Tour the Hassan II Mosque, then transfer to Rabat. Explore Hassan Tower and Kasbah of the Oudayas." } },
      { day: 3, title: { FR: "Rabat vers Tanger", EN: "Rabat to Tangier" }, desc: { FR: "Voyage vers le nord à Tanger. Découverte de Cap Spartel, des Grottes d'Hercule et de la Kasbah surplombant le détroit de Gibraltar.", EN: "Travel north to Tangier. Explore Cap Spartel, the Hercules Caves, and the historic Kasbah overlooking the Strait of Gibraltar." } },
      { day: 4, title: { FR: "Excursion à Chefchaouen la Bleue", EN: "Day Trip to Chefchaouen" }, desc: { FR: "Route vers Chefchaouen dans le Rif. Temps libre pour flâner et prendre des photos dans les ruelles bleues de la médina. Retour à Tanger.", EN: "Drive to Chefchaouen in the Rif Mountains. Explore the famous blue streets of the medina, then return to Tangier in the afternoon." } },
      { day: 5, title: { FR: "Tanger vers Fès", EN: "Tangier to Fes" }, desc: { FR: "Départ matinal pour Fès. Installation au riad et temps libre pour commencer votre exploration.", EN: "Depart Tangier and drive south to Fes. Check in to your riad and enjoy a free evening." } },
      { day: 6, title: { FR: "Visite Guidée de Fès", EN: "Fes Guided Medina Exploration" }, desc: { FR: "Journée complète de visite guidée de la médina Fès El Bali, l'Université Al Quaraouiyine, la tannerie Chouara et la médersa Bou Inania.", EN: "Guided tour of Fes Medina (UNESCO), Chouara tanneries, Al Quaraouiyine University, and Bou Inania Madrasa." } },
      { day: 7, title: { FR: "Fès vers le Désert de Merzouga", EN: "Fes to Merzouga Sahara" }, desc: { FR: "Route vers le Sahara avec arrêts à Ifrane, la forêt de cèdres d'Azrou et déjeuner à Midelt. Nuit à l'hôtel à Merzouga.", EN: "Drive through Middle Atlas forest, Azrou cedar forest, and Midelt. Arrive in Merzouga in the late afternoon. Overnight at hotel." } },
      { day: 8, title: { FR: "Désert & Coucher de Soleil à Chameau", EN: "Sahara Sunset Camel Trek" }, desc: { FR: "Matinée libre. L'après-midi, départ à dos de chameau dans les dunes géantes d'Erg Chebbi pour admirer le coucher du soleil. Dîner nomade et nuit en camp.", EN: "Free morning in Merzouga. Afternoon camel trek into Erg Chebbi dunes for sunset. Campfire dinner and overnight at desert camp." } },
      { day: 9, title: { FR: "Merzouga vers Ouarzazate via Aït-Ben-Haddou", EN: "Merzouga to Ouarzazate" }, desc: { FR: "Départ du désert via Rissani, la vallée du Drâa et visite de la Kasbah classée UNESCO d'Aït-Ben-Haddou. Nuit à Ouarzazate.", EN: "Drive through the Draa Valley. Visit the historic UNESCO site of Ait Ben Haddou before continuing to Ouarzazate." } },
      { day: 10, title: { FR: "Ouarzazate vers Marrakech", EN: "Ouarzazate to Marrakech" }, desc: { FR: "Route à travers le Haut Atlas par le col spectaculaire du Tizi n'Tichka. Arrivée et nuit à Marrakech.", EN: "Cross the High Atlas Mountains via the scenic Tizi n'Tichka Pass. Check in to your hotel in Marrakech." } },
      { day: 11, title: { FR: "Visite Guidée de Marrakech", EN: "Marrakech Guided Discovery" }, desc: { FR: "Découvrez le palais de la Bahia, les tombeaux saadiens, la place Jemaa el-Fna et flânez dans les souks de la médina.", EN: "Guided city tour including Bahia Palace, Saadian Tombs, Jemaa el-Fna, and free time in the souks." } },
      { day: 12, title: { FR: "Marrakech Journée Libre", EN: "Marrakech Leisure Day" }, desc: { FR: "Profitez d'une journée libre pour vous détendre au riad, faire un spa hammam traditionnel ou explorer les jardins Majorelle.", EN: "Free day to enjoy Marrakech at your own pace. Optional traditional hammam experience or Majorelle Garden visit." } },
      { day: 13, title: { FR: "Marrakech vers Essaouira", EN: "Marrakech to Essaouira" }, desc: { FR: "Départ pour Essaouira. Découvrez la charmante médina fortifiée, le port de pêche et profitez de la plage. Nuit à Essaouira.", EN: "Drive to Essaouira on the Atlantic coast. Discover the charming medina, the fishing port, and the historic ramparts." } },
      { day: 14, title: { FR: "Essaouira vers Casablanca", EN: "Essaouira to Casablanca" }, desc: { FR: "Route de retour vers Casablanca. Installation à l'hôtel et temps libre en soirée. Nuit à Casablanca.", EN: "Return drive to Casablanca. Check in to your hotel and enjoy a final free evening in Casablanca." } },
      { day: 15, title: { FR: "Départ de Casablanca", EN: "Casablanca Departure" }, desc: { FR: "Transfert privé vers l'aéroport Mohammed V selon l'horaire de votre vol. Fin des services.", EN: "Private transfer to Mohammed V International Airport for your departure flight. End of services." } }
    ],
    inclusions: {
      FR: [
        "14 nuits d'hébergement en hôtels premium et riads de charme (dont 1 nuit au désert)",
        "Transport terrestre privé en véhicule climatisé avec chauffeur professionnel",
        "Guides locaux à Rabat, Tanger, Fès, Marrakech et Essaouira",
        "Randonnée à chameau à Erg Chebbi et dîner sous les étoiles",
        "Petits-déjeuners quotidiens et dîners désignés"
      ],
      EN: [
        "14 nights in premium riads and hotels (including 1 night in desert camp)",
        "All land transport in private air-conditioned vehicle with dedicated driver",
        "Local expert guides in Rabat, Tangier, Fes, Marrakech, and Essaouira",
        "Erg Chebbi sunset camel trek and desert stargazing camp",
        "Daily breakfast and designated dinners"
      ]
    },
    exclusions: {
      FR: [
        "Vols internationaux",
        "Assurance voyage personnelle obligatoire",
        "Repas du midi et boissons non mentionnés",
        "Pourboires et dépenses personnelles"
      ],
      EN: [
        "International flights",
        "Mandatory personal travel insurance",
        "Lunches and beverages outside of set dinners",
        "Tips for guides/drivers and personal expenditures"
      ]
    },
    options: {
      FR: [
        { name: "Cours de cuisine à Marrakech", price: "C$ 120" },
        { name: "Vol en Montgolfière au lever du soleil", price: "C$ 420" }
      ],
      EN: [
        { name: "Cooking Masterclass in Marrakech", price: "C$ 120" },
        { name: "Sunrise Hot Air Balloon Flight", price: "C$ 420" }
      ]
    },
    hotels: [
      {
        name: "Riad Fes (Fes)",
        stars: 5,
        desc: {
          FR: "Riad d'exception combinant design moderne et héritage andalou.",
          EN: "A boutique riad combining contemporary design and Andalusian heritage."
        },
        link: "https://www.riadfes.com/"
      },
      {
        name: "Riad Lina & Spa (Chefchaouen)",
        stars: 4,
        desc: {
          FR: "Riad d'exception avec spa niché au cœur de la ville bleue.",
          EN: "Boutique riad and spa set in the heart of the blue town of Chefchaouen."
        },
        link: "https://www.riadlina.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Exploration de Chefchaouen la Bleue", EN: "Exploring Chefchaouen Medina" },
        desc: {
          FR: "Découverte des ruelles bleues de Chefchaouen et coucher de soleil depuis la mosquée espagnole.",
          EN: "Walk through the iconic blue pathways and enjoy a sunset view from the Spanish Mosque."
        }
      },
      {
        title: { FR: "Découverte d'Essaouira", EN: "Essaouira Seaside Ramble" },
        desc: {
          FR: "Exploration des remparts maritimes d'Essaouira et de son port de pêche dynamique.",
          EN: "Explore the maritime ramparts of Essaouira and its busy traditional fishing port."
        }
      }
    ]
  }
};

export const itineraryThemes: Record<string, ItineraryTheme> = {
  "1": {
    country: "Morocco",
    heroTitle: { FR: "Maroc Prestige", EN: "Morocco Prestige" },
    heroSub: {
      FR: "Morocco Prestige – Voyage de Luxe Ultime. Vivez comme des rois avec des séjours au Royal Mansour, des ateliers de calligraphie privés et un vol en montgolfière au lever du soleil.",
      EN: "Morocco Prestige – Ultimate Luxury Journey. Experience the royal treatment with stay at Royal Mansour riads, private calligraphy masterclass, and hot air balloon over Atlas."
    },
    heroBtn: { FR: "Découvrir le Prestige", EN: "Unveil the Luxury" },
    heroBg: "/images/morocco-marrakech-riad.png",
    themeColor: "#C5A880",
    themeColorHover: "#A3835B",
    watercolorColor: "#C5A880",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Nous sommes des aventuriers dans l'âme. Découvrez ce que les régions du Maroc ont à vous offrir.",
      EN: "We are adventurers at heart, so uncovering the secrets of Morocco is something we've had a lot of experience in. Find out more about what the regions of Morocco have to offer."
    },
    experienceTitle: { FR: "Vivre le Maroc", EN: "Experience Morocco" },
    experienceDesc: {
      FR: "Le Maroc a de nombreuses facettes : Aventure, Gastronomie, Culture... Vivez ces expériences enrichissantes et passionnantes à votre manière.",
      EN: "Morocco has many different aspects to its personality. Adventure, Culinary, Culture; it's all here. Experience the many different, rich, exciting layers of Morocco. Experience it your way."
    },
    mapPins: [
      { name: { FR: "Palais de Marrakech", EN: "Marrakech Palace" }, top: "65%", left: "32%" },
      { name: { FR: "Dunes du Sahara", EN: "Sahara Dunes" }, top: "78%", left: "75%" },
      { name: { FR: "Mont Toubkal (Atlas)", EN: "Mount Toubkal" }, top: "52%", left: "45%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Benhaddou Kasbah" }, top: "45%", left: "58%" },
      { name: { FR: "Chefchaouen la Bleue", EN: "Chefchaouen Blue City" }, top: "18%", left: "62%" }
    ],
    experienceGrid: [
      { label: { FR: "Aventure", EN: "Adventure" }, img: "/images/morocco_adventure.png" },
      { label: { FR: "Gastronomie", EN: "Culinary" }, img: "/images/morocco_culinary.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Insolite", EN: "Off Beat" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Immersion", EN: "Go Local" }, img: "/images/people-cliff.png" }
    ]
  },
  "2": {
    country: "Morocco",
    heroTitle: { FR: "Maroc Impérial", EN: "Imperial Morocco" },
    heroSub: {
      FR: "Maroc Impérial & Découverte du Sahara. Découvrez Casablanca, Rabat, la ville bleue de Chefchaouen, l'ancienne médina de Fès, et passez deux nuits sous les étoiles du Sahara.",
      EN: "Imperial Morocco & Sahara Discovery. Discover Casablanca, Rabat, Chefchaouen blue city, Fes ancient medina, and spend two nights under the Sahara desert stars."
    },
    heroBtn: { FR: "Découvrir la Culture", EN: "Unveil the Culture" },
    heroBg: "/images/moroco.webp",
    themeColor: "#5A8266",
    themeColorHover: "#476851",
    watercolorColor: "#5A8266",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Explorez les villes impériales historiques, les montagnes du Rif, les ruines romaines de Volubilis et les dunes de Merzouga.",
      EN: "Explore historical imperial cities, the high Rif mountains, Roman ruins of Volubilis, and the vast dunes of Merzouga desert."
    },
    experienceTitle: { FR: "Vivre le Maroc", EN: "Experience Morocco" },
    experienceDesc: {
      FR: "Vivez l'expérience des racines architecturales et des traditions profondes du Maroc. Découvrez des récits historiques, goûtez à la cuisine de rue et visitez les tanneries.",
      EN: "Experience the deep architectural roots and traditions of Morocco. Learn historical stories, taste street foods, and see how tanneries still operate."
    },
    mapPins: [
      { name: { FR: "Casablanca Mosquée", EN: "Casablanca Mosque" }, top: "35%", left: "40%" },
      { name: { FR: "Rabat Capitale", EN: "Rabat Capital" }, top: "30%", left: "45%" },
      { name: { FR: "Chefchaouen Bleue", EN: "Chefchaouen Blue" }, top: "18%", left: "62%" },
      { name: { FR: "Fès Médina", EN: "Fes Medina" }, top: "40%", left: "65%" },
      { name: { FR: "Sahara Désert", EN: "Sahara Desert" }, top: "78%", left: "75%" }
    ],
    experienceGrid: [
      { label: { FR: "Aventure", EN: "Adventure" }, img: "/images/morocco_adventure.png" },
      { label: { FR: "Gastronomie", EN: "Culinary" }, img: "/images/morocco_culinary.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Insolite", EN: "Off Beat" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Immersion", EN: "Go Local" }, img: "/images/people-cliff.png" }
    ]
  },
  "3": {
    country: "Morocco",
    heroTitle: { FR: "Immersion Sahara", EN: "Sahara Deep Dive" },
    heroSub: {
      FR: "Sahara Deep Dive – Immersion Désert. Passez trois nuits complètes dans les dunes de l'Erg Chebbi avec chameaux, sandboard, musique Gnawa locale et bivouac étoilé.",
      EN: "Sahara Deep Dive – Desert Immersion Experience. Spend three full nights in Erg Chebbi desert dunes with camels, sandboarding, local Gnawa music, and campfire stars."
    },
    heroBtn: { FR: "Découvrir le Sahara", EN: "Unveil the Sahara" },
    heroBg: "/images/morocco-sahara-dunes.png",
    themeColor: "#C2593F",
    themeColorHover: "#A14833",
    watercolorColor: "#C2593F",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Désert", EN: "Discover the Desert" },
    discoverDesc: {
      FR: "Vivez au rythme du Sahara : marche guidée dans les dunes silencieuses, photographie du désert et échanges culturels avec les communautés berbères.",
      EN: "Focus completely on the Sahara life: walk guided through silent dunes, do desert photography, and exchange culture with local Berber communities."
    },
    experienceTitle: { FR: "Vivre le Désert", EN: "Experience Desert Life" },
    experienceDesc: {
      FR: "Une immersion profonde dans le désert pour observer les étoiles sous le ciel le plus pur au monde, dormir sous tente et explorer les gorges du Todra et du Dadès.",
      EN: "Deep desert immersion allows you to stargaze under the world's cleanest skies, sleep in tents, and travel the sandstone gorges of Todra and Dades."
    },
    mapPins: [
      { name: { FR: "Marrakech Riad", EN: "Marrakech Riad" }, top: "65%", left: "32%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Benhaddou" }, top: "45%", left: "58%" },
      { name: { FR: "Vallée du Dadès", EN: "Dades Valley" }, top: "55%", left: "68%" },
      { name: { FR: "Gorges du Todra", EN: "Todra Gorges" }, top: "60%", left: "72%" },
      { name: { FR: "Merzouga Dunes", EN: "Merzouga Dunes" }, top: "78%", left: "75%" }
    ],
    experienceGrid: [
      { label: { FR: "Aventure", EN: "Adventure" }, img: "/images/morocco_adventure.png" },
      { label: { FR: "Gastronomie", EN: "Culinary" }, img: "/images/morocco_culinary.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Insolite", EN: "Off Beat" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Immersion", EN: "Go Local" }, img: "/images/people-cliff.png" }
    ]
  },
  "4": {
    country: "Morocco",
    heroTitle: { FR: "Golf à Taghazout", EN: "Golf in Taghazout" },
    heroSub: {
      FR: "Forfait Golf de Prestige à Taghazout Bay. Séjournez 7 nuits au Hilton Taghazout 5★ et jouez 4 parties de golf sur les parcours de Tazegzout, du Soleil et des Dunes.",
      EN: "Bespoke Golf Escape in Taghazout Bay. Stay 7 nights at the 5★ Hilton Taghazout and play 4 rounds of golf at Tazegzout, du Soleil, and Les Dunes courses."
    },
    heroBtn: { FR: "Découvrir le Forfait", EN: "Explore Golf Escape" },
    heroBg: "/images/hilton_taghazout_5.avif",
    themeColor: "#00A3C4",
    themeColorHover: "#00839C",
    watercolorColor: "#00A3C4",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir Taghazout", EN: "Discover Taghazout" },
    discoverDesc: {
      FR: "Vivez le golf de premier choix face à l'océan Atlantique, avec des plages de sable fin, la découverte de l'argan et le bien-être.",
      EN: "Experience first-class golf facing the Atlantic ocean, with pristine sandy beaches, argan oil discovery, and premium wellness."
    },
    experienceTitle: { FR: "Vivre le Golf Côtier", EN: "Experience Atlantic Golf" },
    experienceDesc: {
      FR: "Jouez sur des fairways dessinés par Kyle Phillips au sommet des falaises côtières, savourez des dîners gastronomiques et détendez-vous à Taghazout.",
      EN: "Play on Kyle Phillips-designed fairways carved into seaside cliffs, enjoy gourmet dining with wine, and relax at Taghazout Bay."
    },
    mapPins: [
      { name: { FR: "Hilton Taghazout", EN: "Hilton Taghazout" }, top: "75%", left: "15%" },
      { name: { FR: "Tazegzout Golf", EN: "Tazegzout Golf" }, top: "72%", left: "12%" },
      { name: { FR: "Golf du Soleil", EN: "Golf du Soleil" }, top: "82%", left: "20%" },
      { name: { FR: "Golf Les Dunes", EN: "Golf Les Dunes" }, top: "85%", left: "18%" }
    ],
    experienceGrid: [
      { label: { FR: "Golf de Rêve", EN: "Golfing" }, img: "/images/hilton_taghazout_1.avif" },
      { label: { FR: "Face à la Mer", EN: "Beachfront" }, img: "/images/hilton_taghazout_2.avif" },
      { label: { FR: "Bien-être", EN: "Wellness" }, img: "/images/hilton_taghazout_3.avif" },
      { label: { FR: "Suites de Luxe", EN: "Luxury Rooms" }, img: "/images/hilton_taghazout_4.avif" },
      { label: { FR: "Coucher de Soleil", EN: "Sunset" }, img: "/images/hilton_taghazout_5.avif" }
    ]
  },
  "5": {
    country: "Morocco",
    heroTitle: { FR: "Golf à Marrakech", EN: "Golf in Marrakech" },
    heroSub: {
      FR: "Séjour Golf Royal & Bien-être Tout-Inclus à Marrakech. Séjournez 11 nuits à l'Hôtel du Golf 5★ et jouez 6 parties sur les plus prestigieux parcours de Marrakech.",
      EN: "Royal Golf & All-Inclusive Wellness in Marrakech. Stay 11 nights at 5★ Hôtel du Golf and play 6 rounds at Royal Golf, Assoufid, Amelkis, Samanah, Ourika, and Noria."
    },
    heroBtn: { FR: "Découvrir le Golf Royal", EN: "Explore Royal Golf" },
    heroBg: "/images/marrakech_sunset_hero.png",
    themeColor: "#8B2635",
    themeColorHover: "#72202b",
    watercolorColor: "#8B2635",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir les Parcours", EN: "Discover Marrakech Golf" },
    discoverDesc: {
      FR: "Jouez sur des parcours de légende aux portes du désert et face aux sommets enneigés de l'Atlas.",
      EN: "Play on some of the world's most historic and design-signature courses located at the gates of the Sahara and facing the Atlas mountains."
    },
    experienceTitle: { FR: "Vivre le Golf de Légende", EN: "Experience Royal Courses" },
    experienceDesc: {
      FR: "Bénéficiez d'un vol direct Transat, d'une formule tout-inclus gourmet, de visites privées de la médina et d'un rituel bien-être hammam privé.",
      EN: "Experience direct flight Transat access, all-inclusive gourmet dining, historic clay medina tours, and wellness spa hammam buyouts."
    },
    mapPins: [
      { name: { FR: "Hôtel du Golf", EN: "Hotel du Golf" }, top: "62%", left: "32%" },
      { name: { FR: "Royal Golf de Marrakech", EN: "Royal Golf Marrakech" }, top: "65%", left: "35%" },
      { name: { FR: "Golf Assoufid", EN: "Golf Assoufid" }, top: "68%", left: "28%" },
      { name: { FR: "Golf Amelkis", EN: "Golf Amelkis" }, top: "66%", left: "37%" }
    ],
    experienceGrid: [
      { label: { FR: "Golf Royal", EN: "Royal Golf" }, img: "/images/marrakech_sunset_hero.png" },
      { label: { FR: "Tout-Inclus", EN: "All-Inclusive" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Vue sur l'Atlas", EN: "Atlas Views" }, img: "/images/people-cliff.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco_adventure.png" },
      { label: { FR: "Bien-être", EN: "Wellness" }, img: "/images/morocco_culinary.png" }
    ]
  },
  "6": {
    country: "Morocco",
    heroTitle: { FR: "Villes Impériales", EN: "Imperial Cities & Desert" },
    heroSub: {
      FR: "Villes Impériales & Découverte du Désert. Explorez Casablanca, Rabat, Fès, Meknès et vivez la magie d'une nuit en bivouac au milieu des dunes de l'Erg Chebbi.",
      EN: "Imperial Cities & Desert Discovery. Explore Casablanca, Rabat, Fes, and Meknes, combined with a magical camel ride and desert overnight under the stars."
    },
    heroBtn: { FR: "Découvrir le Circuit", EN: "Explore the Circuit" },
    heroBg: "/images/moroco.webp",
    themeColor: "#5A8266",
    themeColorHover: "#476851",
    watercolorColor: "#5A8266",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Explorez les cités impériales historiques et passez de l'océan Atlantique aux dunes grandioses du Sahara.",
      EN: "Explore the historic imperial strongholds and transition from the Atlantic ocean to the grand dunes of the Sahara."
    },
    experienceTitle: { FR: "Vivre le Voyage", EN: "Experience the Voyage" },
    experienceDesc: {
      FR: "Découvrez des récits anciens, observez les étoiles depuis le campement du désert et visitez les magnifiques vestiges romains de Volubilis.",
      EN: "Discover ancient historic tales, gaze at infinite stars from the desert camp, and tour the beautiful Roman ruins of Volubilis."
    },
    mapPins: [
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "35%", left: "40%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "30%", left: "45%" },
      { name: { FR: "Volubilis", EN: "Volubilis" }, top: "38%", left: "60%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "40%", left: "65%" },
      { name: { FR: "Merzouga", EN: "Merzouga" }, top: "78%", left: "75%" }
    ],
    experienceGrid: [
      { label: { FR: "Histoire", EN: "History" }, img: "/images/moroco.webp" },
      { label: { FR: "Désert", EN: "Desert" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Monuments", EN: "Monuments" }, img: "/images/people-cliff.png" },
      { label: { FR: "Tradition", EN: "Tradition" }, img: "/images/morocco_culinary.png" }
    ]
  },
  "7": {
    country: "Morocco",
    heroTitle: { FR: "Grand Tour", EN: "Grand Imperial Tour" },
    heroSub: {
      FR: "Villes Impériales, Chefchaouen & Côte Atlantique. Notre grand circuit de 15 jours couvrant Chefchaouen la bleue, Tanger, Fès, le Sahara, Marrakech et Essaouira.",
      EN: "Imperial Cities, Chefchaouen & Atlantic Coast. A comprehensive 15-day itinerary covering Chefchaouen blue city, Tangier, Fes, Sahara camp, Marrakech, and Essaouira."
    },
    heroBtn: { FR: "Découvrir le Grand Voyage", EN: "Explore Grand Voyage" },
    heroBg: "/images/morocco-marrakech-riad.png",
    themeColor: "#C5A880",
    themeColorHover: "#A3835B",
    watercolorColor: "#C5A880",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Explorez tout le Maroc du Nord au Sud, des montagnes du Rif aux plages de l'Atlantique et aux dunes du désert.",
      EN: "Explore the entirety of Morocco from North to South, from Rif mountain peaks to Atlantic beaches and Sahara desert dunes."
    },
    experienceTitle: { FR: "Vivre le Grand Tour", EN: "Experience the Grand Tour" },
    experienceDesc: {
      FR: "Vivez le voyage ultime: ruelles bleues, souks de Marrakech, nuit au camp de désert et air marin d'Essaouira.",
      EN: "Experience the ultimate Moroccan journey: blue pathways, Marrakech souks, desert camp stargazing, and sea air at Essaouira."
    },
    mapPins: [
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "35%", left: "40%" },
      { name: { FR: "Chefchaouen", EN: "Chefchaouen" }, top: "18%", left: "62%" },
      { name: { FR: "Tanger", EN: "Tangier" }, top: "12%", left: "55%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "40%", left: "65%" },
      { name: { FR: "Essaouira", EN: "Essaouira" }, top: "70%", left: "18%" }
    ],
    experienceGrid: [
      { label: { FR: "Chefchaouen la Bleue", EN: "Chefchaouen Blue" }, img: "/images/moroco.webp" },
      { label: { FR: "Essaouira", EN: "Essaouira Coast" }, img: "/images/people-cliff.png" },
      { label: { FR: "Sahara Dunes", EN: "Sahara Desert" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Marrakech Souk", EN: "Marrakech Life" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Volubilis", EN: "Ancient Heritage" }, img: "/images/morocco_culinary.png" }
    ]
  }
};
