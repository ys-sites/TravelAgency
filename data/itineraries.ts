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
    image: "/images/gulf-city-skyline.png",
    category: {
      FR: "villas de luxe - croisière privée en yacht - hélicoptère & désert",
      EN: "luxury villas - private yacht cruise - helicopter & desert"
    },
    title: {
      FR: "Splendeurs du Golfe : Dubaï & Abou Dabi",
      EN: "Gulf Splendors: Dubai & Abu Dhabi"
    },
    description: {
      FR: "Un séjour ultra-luxe entre modernité et traditions : 7 nuits en suite d'exception, croisière privée au coucher du soleil et dîner de prestige dans les dunes.",
      EN: "An ultra-luxury escape balancing futuristic wonder and desert heritage: 7 nights in elite suites, private sunset yacht cruise, and dune dining."
    },
    duration: {
      FR: "8 jours / 7 nuits",
      EN: "8 days / 7 nights"
    },
    flight: {
      FR: "Vol en classe Affaires inclus",
      EN: "Business Class flight included"
    },
    meals: {
      FR: "Pension complète gastronomique",
      EN: "Gourmet full board"
    },
    oldPrice: "C$ 18,500",
    price: "C$ 16,500",
    tag: "Gulf Privilege — C$2,000 included",
    badge: {
      FR: "GOLFE DE PRESTIGE",
      EN: "GULF PRESTIGE"
    },
    promoText: {
      FR: "Réservez avant le 1er sept 2026 — C$2 000 d'inclusions complémentaires / pers.",
      EN: "Reserve before Sept 1, 2026 — C$2,000 in complimentary inclusions per guest"
    },
    iconType: "water"
  },
  {
    id: 5,
    image: "/images/gulf-desert-sunset.png",
    category: {
      FR: "glamping de luxe - canyons du hajar - fjords du musandam",
      EN: "luxury glamping - hajar canyons - musandam fjords"
    },
    title: {
      FR: "Oman Souverain : Désert & Canyons",
      EN: "Sovereign Oman: Desert & Canyons"
    },
    description: {
      FR: "Une immersion royale dans le Sultanat d'Oman : 11 nuits d'exception dans des wadis sauvages, glamping sous les étoiles et croisière dans les fjords du Musandam.",
      EN: "A royal immersion in the Sultanate of Oman: 11 nights of wonders across wild wadis, stargazing glamping, and private Musandam fjord cruise."
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
    oldPrice: "C$ 12,200",
    price: "C$ 10,800",
    tag: "Oman Royalty — C$1,400 included",
    badge: {
      FR: "GOLFE DE LUXE",
      EN: "LUXURY GULF"
    },
    promoText: {
      FR: "Réservez avant le 1er nov 2026 — C$1 400 d'inclusions complémentaires / pers.",
      EN: "Reserve before Nov 1, 2026 — C$1,400 in complimentary inclusions per guest"
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
    image: "/images/gulf-city-skyline.png",
    contentImage: "/images/gulf-city-skyline.png",
    title: { FR: "Splendeurs du Golfe : Dubaï & Abou Dabi", EN: "Gulf Splendors: Dubai & Abu Dhabi" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: "C$ 16,500",
    overview: {
      FR: "Vivez l'ultra-luxe au cœur des Émirats Arabes Unis. Séjournez dans des suites somptueuses, survolez Dubaï en hélicoptère privé, naviguez à bord d'un yacht haut de gamme à Palm Jumeirah et dînez dans les dunes infinies sous les étoiles.",
      EN: "Experience the peak of contemporary luxury in the United Arab Emirates. Stay in spectacular suites, fly over Dubai on a private helicopter charter, cruise Palm Jumeirah on a premium yacht, and enjoy gourmet dining in the dunes."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée VIP à Dubaï", EN: "VIP Arrival in Dubai" }, desc: { FR: "Accueil personnalisé sur le tarmac, assistance rapide à l'aéroport et transfert privé en véhicule de luxe vers l'hôtel. Nuit à Dubaï.", EN: "VIP meet and greet at the plane door, fast-track customs clearance, and private luxury transfer to your hotel. Stay in Dubai." } },
      { day: 2, title: { FR: "Survol en Hélicoptère & Vieux Dubaï", EN: "Helicopter Flight & Old Dubai" }, desc: { FR: "Vol privé de 22 minutes en hélicoptère pour admirer les îles Palm et le Burj Khalifa. Après-midi dans les souks de l'or et des épices. Nuit à Dubaï.", EN: "Private 22-minute helicopter flight over Palm Jumeirah and Burj Khalifa. Afternoon private guided tour of the historic gold and spice souks. Stay in Dubai." } },
      { day: 3, title: { FR: "Croisière en Yacht Privé à Palm Jumeirah", EN: "Private Yacht Cruise & Beach Club" }, desc: { FR: "Demi-journée à bord d'un yacht privé de 50 pieds avec capitaine et équipage. Soirée détente au club de plage. Nuit à Dubaï.", EN: "Half-day private luxury yacht charter around Palm Jumeirah with catering and crew. Evening at a premier beach club. Stay in Dubai." } },
      { day: 4, title: { FR: "Désert de Liwa & Dîner sous les Étoiles", EN: "Liwa Desert & Dunes Safari" }, desc: { FR: "Excursion privée en 4x4 de luxe dans le désert. Dîner gastronomique préparé par un chef privé au milieu des dunes de sable rouge. Nuit à Dubaï.", EN: "Private luxury SUV desert safari. Custom gourmet dinner prepared by a private chef in the red dunes. Stay in Dubai." } },
      { day: 5, title: { FR: "Dubaï à Abou Dabi & Musée du Louvre", EN: "Dubai to Abu Dhabi & Louvre" }, desc: { FR: "Transfert privé vers Abou Dabi (~1h30). Visite guidée privée du Louvre Abou Dabi et installation à l'hôtel. Nuit à Abou Dabi.", EN: "Private luxury transfer to Abu Dhabi (~1.5h). Guided tour of the Louvre Abu Dhabi and check-in to your resort. Stay in Abu Dhabi." } },
      { day: 6, title: { FR: "Grande Mosquée Cheikh Zayed", EN: "Sheikh Zayed Grand Mosque" }, desc: { FR: "Visite guidée privée exclusive de la Grande Mosquée Cheikh Zayed, puis après-midi libre pour le shopping ou le spa. Nuit à Abou Dabi.", EN: "Exclusive private guided tour of the Sheikh Zayed Grand Mosque, followed by an afternoon of luxury or spa relaxation. Stay in Abu Dhabi." } },
      { day: 7, title: { FR: "Île de Yas & Circuit de Formule 1", EN: "Yas Island & F1 Track Experience" }, desc: { FR: "Explorez l'île de Yas, jouez sur le parcours Yas Links Club ou faites des tours de piste privés sur le circuit Yas Marina. Nuit à Abou Dabi.", EN: "Explore Yas Island, play at the scenic Yas Links Club or enjoy private track laps at the Yas Marina F1 Circuit. Stay in Abu Dhabi." } },
      { day: 8, title: { FR: "Départ d'Abou Dabi", EN: "Departure" }, desc: { FR: "Transfert privé vers l'aéroport d'Abou Dabi pour votre vol de retour. Fin des services.", EN: "Private luxury transfer to Abu Dhabi International Airport for your departure flight. End of services." } }
    ],
    inclusions: {
      FR: [
        "Vols aller-retour Montréal-Dubaï en classe Affaires",
        "7 nuits d'hébergement dans des hôtels ultra-luxe 5★ (Suites)",
        "Toutes les excursions privées avec guides francophones certifiés",
        "Survol de 22 minutes en hélicoptère privé et yacht privé de 4 heures",
        "Tous les transferts et transports terrestres privés en SUV de luxe"
      ],
      EN: [
        "Round-trip Business Class flights Montreal-Dubai",
        "7 nights in luxury 5★ properties (Suites occupancy)",
        "All excursions with professional local guides and drivers",
        "Private 22-minute helicopter charter and 4-hour yacht cruise",
        "All private land transfers in luxury SUVs"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage personnelle obligatoire",
        "Pourboires pour les chauffeurs, guides et personnel",
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
        { name: "Surclassement en Suite Présidentielle", price: "C$ 4,500" },
        { name: "Accès Privé aux Coulisses F1", price: "C$ 1,200" }
      ],
      EN: [
        { name: "Presidential Suite Upgrade", price: "C$ 4,500" },
        { name: "Behind-the-Scenes F1 Track Pass", price: "C$ 1,200" }
      ]
    },
    hotels: [
      {
        name: "One&Only One Za'abeel (Dubai)",
        stars: 5,
        desc: {
          FR: "Une icône architecturale moderne offrant un luxe vertical exceptionnel.",
          EN: "A modern architectural marvel offering high-end vertical luxury."
        },
        link: "https://www.oneandonlyresorts.com/"
      },
      {
        name: "The St. Regis Saadiyat Island (Abu Dhabi)",
        stars: 5,
        desc: {
          FR: "Complexe de plage de classe mondiale surplombant les eaux turquoise du Golfe.",
          EN: "A world-class beachfront resort overlooking the turquoise waters of the Gulf."
        },
        link: "https://www.marriott.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Hélicoptère Privé", EN: "Private Helicopter Charter" },
        desc: {
          FR: "Un vol majestueux au-dessus de Dubaï avec vue sur Palm Jumeirah et Burj Khalifa.",
          EN: "A spectacular aerial flight over Dubai sky landmarks."
        }
      },
      {
        title: { FR: "Grande Mosquée Privée", EN: "Grand Mosque Private Tour" },
        desc: {
          FR: "Visite guidée privée de la mosquée pour admirer les marbres et lustres monumentaux.",
          EN: "A dedicated guided discovery of Abu Dhabi's monumental architecture."
        }
      }
    ]
  },
  "5": {
    id: 5,
    image: "/images/gulf-desert-sunset.png",
    contentImage: "/images/gulf-desert-sunset.png",
    title: { FR: "Oman Souverain : Désert & Canyons", EN: "Sovereign Oman: Desert & Canyons" },
    duration: { FR: "12 jours / 11 nuits", EN: "12 days / 11 nights" },
    cost: "C$ 10,800",
    overview: {
      FR: "Découvrez l'âme authentique de l'Arabie à travers le Sultanat d'Oman. Explorez les montagnes du Djebel Akhdar, baignez-vous dans des wadis sauvages aux eaux turquoise, passez des nuits de glamping sous les étoiles et naviguez dans les fjords spectaculaires du Musandam.",
      EN: "Discover the authentic soul of Arabia in the Sultanate of Oman. Explore the canyons of Jebel Akhdar, swim in wild wadis with emerald waters, sleep in luxury desert camps, and sail through the majestic fjords of Musandam."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Mascate", EN: "Arrival in Muscat" }, desc: { FR: "Accueil privé à l'aéroport et transfert vers l'hôtel The Chedi Muscat. Soirée libre au bord de la plage.", EN: "Private airport meet and luxury transfer to The Chedi Muscat. Enjoy a relaxed beachside evening." } },
      { day: 2, title: { FR: "Mascate & Mosquée Sultan Qaboos", EN: "Muscat City Exploration" }, desc: { FR: "Visite privée de la Grande Mosquée du Sultan Qaboos, du marché de Mutrah et du palais royal d'Al Alam. Nuit à Mascate.", EN: "Private tour of the Sultan Qaboos Grand Mosque, Mutrah Souq, and Al Alam Palace. Stay in Muscat." } },
      { day: 3, title: { FR: "Fjords de Musandam & Dauphins", EN: "Musandam Fjords Cruise" }, desc: { FR: "Vol local vers le Musandam. Croisière privée d'une journée en dhow traditionnel à travers les fjords et observation des dauphins. Nuit au Musandam.", EN: "Local flight to Musandam. Full-day private cruise in a traditional wooden dhow through fjord cliffs with dolphin watching. Stay in Musandam." } },
      { day: 4, title: { FR: "Musandam à Mascate", EN: "Musandam back to Muscat" }, desc: { FR: "Retour à Mascate. Après-midi de détente au spa et hammam traditionnel. Nuit à Mascate.", EN: "Return flight to Muscat. Enjoy a premium spa and traditional hammam session. Stay in Muscat." } },
      { day: 5, title: { FR: "Mascate vers les Monts Hajar via Nizwa", EN: "Muscat to Hajar Mountains via Nizwa" }, desc: { FR: "Route vers Nizwa, visite du fort médiéval en terre et du marché aux bétails. Montée dans les montagnes du Djebel Akhdar. Nuit au Djebel Akhdar.", EN: "Drive to Nizwa, tour the historic clay fort and souq. Ascend into the Hajar Mountains range to Jebel Akhdar. Stay in Jebel Akhdar." } },
      { day: 6, title: { FR: "Randonnée dans les Canyons", EN: "Canyon Hiking Experience" }, desc: { FR: "Randonnée privée guidée à travers les villages de montagne en terrasses, les vergers de grenades et les canyons. Nuit au Djebel Akhdar.", EN: "Private guided hike through mountain farming terraces, rose gardens, and deep sandstone canyons. Stay in Jebel Akhdar." } },
      { day: 7, title: { FR: "Djebel Akhdar vers Wadi Bani Khalid", EN: "Jebel Akhdar to Wadi Bani Khalid" }, desc: { FR: "Descente vers le Wadi Bani Khalid, baignade dans les piscines naturelles d'eau turquoise. Route vers le désert de Wahiba Sands. Nuit en camp de désert.", EN: "Drive to Wadi Bani Khalid. Swim in the deep emerald natural rock pools. Continue into the Wahiba Sands desert. Stay in Desert Camp." } },
      { day: 8, title: { FR: "Glamping dans le Désert de Wahiba", EN: "Desert Glamping & Sunset" }, desc: { FR: "Journée libre dans le désert : surf des sables, rencontre avec les bédouins et coucher de soleil sur les dunes géantes. Nuit en camp de désert.", EN: "Free day in the desert: try sandboarding, meet local Bedouins, and watch sunset over giant dunes. Stay in Desert Camp." } },
      { day: 9, title: { FR: "Wahiba Sands vers la Côte de Sur", EN: "Desert to Sur Coastal Plain" }, desc: { FR: "Route vers la ville côtière de Sur. Visite du chantier de dhows traditionnels et observation nocturne des tortues de mer. Nuit à Sur.", EN: "Drive to the seaside town of Sur. Visit the traditional dhow shipyard and watch green sea turtles nest on the beach. Stay in Sur." } },
      { day: 10, title: { FR: "Wadi Shab & Retour à Mascate", EN: "Wadi Shab Hike & Muscat Return" }, desc: { FR: "Randonnée spectaculaire dans le canyon de Wadi Shab, baignade dans la grotte secrète, puis route vers Mascate. Nuit à Mascate.", EN: "Hike through the sandstone gorge of Wadi Shab, swim into the hidden waterfall cave, and drive back to Muscat. Stay in Muscat." } },
      { day: 11, title: { FR: "Détente Tout-Compris", EN: "Muscat Relaxation & Fine Dining" }, desc: { FR: "Journée complète pour profiter des piscines de l'hôtel, savourer la haute gastronomie omanaise et faire du shopping de souvenirs. Nuit à Mascate.", EN: "Enjoy a final free day at your resort, swimming in infinity pools, and dining on fine Arabian cuisine. Stay in Muscat." } },
      { day: 12, title: { FR: "Départ de Mascate", EN: "Departure" }, desc: { FR: "Transfert privé vers l'aéroport international de Mascate pour votre vol de retour. Fin des services.", EN: "Private luxury transfer to Muscat International Airport for your flight home. End of services." } }
    ],
    inclusions: {
      FR: [
        "Vols aller-retour Montréal-Mascate en classe Économie Premium",
        "11 nuits d'hébergement en hôtels 5★ et camps écologiques de luxe",
        "Tous les transferts terrestres en véhicule 4x4 privé avec chauffeur-guide",
        "Vols intérieurs Mascate-Musandam-Mascate",
        "Toutes les activités guidées et excursions mentionnées"
      ],
      EN: [
        "Round-trip Montreal-Muscat flights in Premium Economy",
        "11 nights in 5★ properties and eco-luxury desert camps",
        "All land travel in private 4x4 vehicles with driver-guide",
        "Domestic return flights Muscat-Musandam-Muscat",
        "All guided activities and entry fees listed"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage personnelle obligatoire",
        "Pourboires pour les chauffeurs et guides locaux",
        "Boissons alcoolisées non incluses dans les formules"
      ],
      EN: [
        "Personal travel insurance",
        "Gratuities for local guides and drivers",
        "Alcoholic beverages where not package-inclusive"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Classe Affaires", price: "C$ 3,800" },
        { name: "Nuit Supplémentaire au Camp de Désert", price: "C$ 650" }
      ],
      EN: [
        { name: "Business Class Flights Upgrade", price: "C$ 3,800" },
        { name: "Additional Night at Desert Camp", price: "C$ 650" }
      ]
    },
    hotels: [
      {
        name: "The Chedi Muscat",
        stars: 5,
        desc: {
          FR: "Un complexe hôtelier d'exception alliant design zen et architecture omanaise.",
          EN: "A stunning luxury resort combining minimalist design and Omani heritage."
        },
        link: "https://www.ghmhotels.com/"
      },
      {
        name: "Alila Jabal Akhdar",
        stars: 5,
        desc: {
          FR: "Hôtel de luxe perched à 2000 mètres d'altitude surplombant les gorges du Hajar.",
          EN: "A spectacular clifftop resort set 2,000 meters above sea level in the canyons."
        },
        link: "https://www.alilahotels.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Fjords du Musandam en Dhow", EN: "Musandam Fjord Cruise" },
        desc: {
          FR: "Croisière en bateau de bois traditionnel à travers les canyons marins et dauphins.",
          EN: "Sailing in a traditional wooden boat among dramatic coastal cliffs."
        }
      },
      {
        title: { FR: "Baignade à Wadi Bani Khalid", EN: "Wadi Bani Khalid Swimming" },
        desc: {
          FR: "Une baignade magique dans les oasis de roches et d'eau turquoise au cœur du désert.",
          EN: "Swim in pristine emerald pools surrounded by palms and red sands."
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
      FR: "Maroc Prestige – Voyage de Luxe Ultime. Vivez comme des rois avec des séjours au Royal Mansour, des ateliers de calligraphie privés et un vol en montgolfière au lever du soleil.",
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
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "36%", left: "53%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "32%", left: "56%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "32%", left: "66%" },
      { name: { FR: "Merzouga (Sahara)", EN: "Merzouga" }, top: "85%", left: "42%" },
      { name: { FR: "Skoura", EN: "Skoura" }, top: "60%", left: "61%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60%", left: "58%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "55%", left: "53%" }
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
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "36%", left: "53%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "32%", left: "56%" },
      { name: { FR: "Chefchaouen", EN: "Chefchaouen" }, top: "21%", left: "63%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "32%", left: "66%" },
      { name: { FR: "Meknès & Volubilis", EN: "Meknes & Volubilis" }, top: "33%", left: "63%" },
      { name: { FR: "Merzouga", EN: "Merzouga" }, top: "85%", left: "42%" },
      { name: { FR: "Gorges du Todra", EN: "Todra Gorges" }, top: "55%", left: "66%" },
      { name: { FR: "Vallée du Dadès", EN: "Dades Valley" }, top: "56%", left: "63%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "55%", left: "53%" }
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
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "55%", left: "53%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60%", left: "58%" },
      { name: { FR: "Ouarzazate", EN: "Ouarzazate" }, top: "61%", left: "59%" },
      { name: { FR: "Vallée du Dadès", EN: "Dades Valley" }, top: "56%", left: "63%" },
      { name: { FR: "Gorges du Todra", EN: "Todra Gorges" }, top: "55%", left: "66%" },
      { name: { FR: "Merzouga — 3 nuits désert", EN: "Merzouga — 3 desert nights" }, top: "85%", left: "42%" }
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
    country: "UAE",
    heroTitle: { FR: "Dubaï & Abou Dabi", EN: "Dubai & Abu Dhabi" },
    heroSub: {
      FR: "Splendeurs du Golfe : Dubaï & Abou Dabi. Un voyage ultra-luxe entre modernité et traditions.",
      EN: "Gulf Splendors: Dubai & Abu Dhabi. An ultra-luxury escape balancing futuristic wonder and desert heritage."
    },
    heroBtn: { FR: "Découvrir le Golfe", EN: "Explore the Gulf" },
    heroBg: "/images/gulf-city-skyline.png",
    themeColor: "#C5A880",
    themeColorHover: "#A3835B",
    watercolorColor: "#C5A880",
    mapImage: "/images/gulf-city-skyline.png",
    discoverTitle: { FR: "Découvrir les Émirats", EN: "Discover UAE" },
    discoverDesc: {
      FR: "Découvrez le luxe contemporain, l'architecture futuriste et les déserts intemporels.",
      EN: "Experience the contemporary luxury, futuristic architecture, and timeless deserts."
    },
    experienceTitle: { FR: "Vivre le Golfe", EN: "Experience the Gulf" },
    experienceDesc: {
      FR: "Vivez des moments inoubliables : croisière sur yacht privé, survol en hélicoptère et dîners d'exception dans le désert.",
      EN: "Create unforgettable memories: private yacht cruises, helicopter flights, and gourmet desert safaris."
    },
    mapPins: [
      { name: { FR: "Dubaï", EN: "Dubai" }, top: "32.2%", left: "66.6%" },
      { name: { FR: "Abou Dabi", EN: "Abu Dhabi" }, top: "48.9%", left: "51.6%" },
      { name: { FR: "Désert de Liwa", EN: "Liwa Desert" }, top: "72.9%", left: "40%" },
      { name: { FR: "Yas Island", EN: "Yas Island" }, top: "41.6%", left: "58.3%" }
    ],
    experienceGrid: [
      { label: { FR: "Dubaï Marina", EN: "Dubai Marina" }, img: "/images/gulf-city-skyline.png" },
      { label: { FR: "Yacht Privé", EN: "Private Yacht" }, img: "/images/gulf-city-skyline.png" },
      { label: { FR: "Safari Désert", EN: "Desert Safari" }, img: "/images/gulf-desert-sunset.png" },
      { label: { FR: "Vol Hélicoptère", EN: "Helicopter Charter" }, img: "/images/gulf-city-skyline.png" },
      { label: { FR: "Musée du Louvre", EN: "Louvre Abu Dhabi" }, img: "/images/gulf-city-skyline.png" }
    ]
  },
  "5": {
    country: "Oman",
    heroTitle: { FR: "Oman Souverain", EN: "Sovereign Oman" },
    heroSub: {
      FR: "Oman Souverain : Désert & Canyons. Une immersion royale dans le Sultanat d'Oman, entre wadis sauvages et glamping étoilé.",
      EN: "Sovereign Oman: Desert & Canyons. A royal immersion in the Sultanate of Oman, across wild wadis and stargazing glamping."
    },
    heroBtn: { FR: "Découvrir l'Oman", EN: "Explore Oman" },
    heroBg: "/images/gulf-desert-sunset.png",
    themeColor: "#C5A880",
    themeColorHover: "#A3835B",
    watercolorColor: "#C5A880",
    mapImage: "/images/gulf-desert-sunset.png",
    discoverTitle: { FR: "Découvrir l'Oman", EN: "Discover Oman" },
    discoverDesc: {
      FR: "Explorez les wadis de montagne, les forts médiévaux et naviguez dans les fjords du Musandam.",
      EN: "Explore mountain wadis, ancient converted forts, and cruise Musandam fjords."
    },
    experienceTitle: { FR: "Vivre l'Oman", EN: "Experience Oman" },
    experienceDesc: {
      FR: "Une immersion profonde dans le désert pour observer les étoiles sous le ciel le plus pur au monde, dormir sous tente et explorer les wadis.",
      EN: "Deep desert immersion allows you to stargaze under the cleanest skies, sleep in luxury camps, and swim in turquoise wadis."
    },
    mapPins: [
      { name: { FR: "Mascate", EN: "Muscat" }, top: "31%", left: "71%" },
      { name: { FR: "Djebel Akhdar", EN: "Jebel Akhdar" }, top: "33%", left: "53%" },
      { name: { FR: "Désert de Wahiba", EN: "Wahiba Desert" }, top: "47%", left: "71%" },
      { name: { FR: "Fjords de Musandam", EN: "Musandam Fjords" }, top: "4%", left: "50%" }
    ],
    experienceGrid: [
      { label: { FR: "Wahiba Sands", EN: "Wahiba Sands" }, img: "/images/gulf-desert-sunset.png" },
      { label: { FR: "Mascate", EN: "Muscat Coast" }, img: "/images/gulf-city-skyline.png" },
      { label: { FR: "Djebel Akhdar", EN: "Jebel Akhdar" }, img: "/images/gulf-desert-sunset.png" },
      { label: { FR: "Fjords Musandam", EN: "Musandam Fjords" }, img: "/images/gulf-city-skyline.png" },
      { label: { FR: "Wadi Bani Khalid", EN: "Wadi Bani Khalid" }, img: "/images/gulf-desert-sunset.png" }
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
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "36%", left: "53%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "32%", left: "56%" },
      { name: { FR: "Meknès", EN: "Meknes" }, top: "33%", left: "63%" },
      { name: { FR: "Volubilis", EN: "Volubilis" }, top: "32%", left: "63%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "32%", left: "66%" },
      { name: { FR: "Merzouga", EN: "Merzouga" }, top: "85%", left: "42%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60%", left: "58%" },
      { name: { FR: "Ouarzazate", EN: "Ouarzazate" }, top: "61%", left: "59%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "55%", left: "53%" }
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
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "36%", left: "53%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "32%", left: "56%" },
      { name: { FR: "Tanger", EN: "Tangier" }, top: "15%", left: "60%" },
      { name: { FR: "Chefchaouen", EN: "Chefchaouen" }, top: "21%", left: "63%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "32%", left: "66%" },
      { name: { FR: "Merzouga", EN: "Merzouga" }, top: "85%", left: "42%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60%", left: "58%" },
      { name: { FR: "Ouarzazate", EN: "Ouarzazate" }, top: "61%", left: "59%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "55%", left: "53%" },
      { name: { FR: "Essaouira", EN: "Essaouira" }, top: "56%", left: "44%" }
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
