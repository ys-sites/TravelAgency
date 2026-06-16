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
  price: { FR: string; EN: string };
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
  newPrice: { FR: string; EN: string };
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
  cost: { FR: string; EN: string };
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
  dates?: { FR: string[]; EN: string[] };
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
    id: 10,
    image: "/images/rgdes_parcours_rouge_18.jpg",
    category: { FR: "Golf & Prestige", EN: "Golf & Prestige" },
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Royal Golf Dar Es Salam", EN: "Royal Golf Dar Es Salam" },
    description: {
      FR: "Le joyau de Rabat conçu par Robert Trent Jones Sr, s'étendant sur 440 hectares de forêt. Un parcours légendaire qui accueille les compétitions internationales.",
      EN: "Rabat's masterpiece designed by Robert Trent Jones Sr, set on 440 hectares of forest. A legendary course that hosts international competitions."
    },
    duration: { FR: "5 jours / 4 nuits", EN: "5 days / 4 nights" },
    flight: { FR: "Vol optionnel", EN: "Flight optional" },
    meals: { FR: "Petit-déjeuner inclus", EN: "Breakfast included" },
    oldPrice: "",
    price: { FR: "Sur devis", EN: "On request" },
    tag: "golf",
    iconType: "lighthouse",
  },
  {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    category: { FR: "Golf & Océan", EN: "Golf & Ocean" },
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Hilton Taghazout Hôtel", EN: "Hilton Taghazout Hotel" },
    description: {
      FR: "Forfait comprenant vols de Montréal, 7 nuits au Hilton Taghazout 5★ en chambre vue piscine et 4 rondes sur les plus beaux parcours d'Agadir (Tazegzout, du Soleil, Les Dunes).",
      EN: "Package including Montreal flights, 7 nights at the 5★ Hilton Taghazout in a pool view room, and 4 rounds on Agadir's top courses (Tazegzout, du Soleil, Les Dunes)."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension ou Petit-déjeuner", EN: "Half board or Breakfast" },
    oldPrice: "",
    price: { FR: "3 879 $", EN: "C$ 3,879" },
    tag: "golf",
    iconType: "water",
  },
  {
    id: 12,
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    category: { FR: "Golf & Luxe", EN: "Golf & Luxury" },
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "White Beach Hôtel", EN: "White Beach Hotel" },
    description: {
      FR: "Séjour de luxe ultime tout compris (adulte seulement) au White Beach Resort 5★ en chambre vue jardin, vols de Montréal et 4 rondes de golf incluses.",
      EN: "Ultimate luxury all-inclusive stay (adults only) at the 5★ White Beach Resort in a garden view room, Montreal flights, and 4 rounds of golf included."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension ou Petit-déjeuner", EN: "Half board or Breakfast" },
    oldPrice: "",
    price: { FR: "4 255 $", EN: "C$ 4,255" },
    tag: "golf",
    iconType: "lighthouse",
  }
];

export const dealsList: DealCard[] = [
  {
    id: 10,
    image: "/images/rgdes_parcours_rouge_18.jpg",
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Royal Golf Dar Es Salam", EN: "Royal Golf Dar Es Salam" },
    duration: { FR: "5 jours / 4 nuits", EN: "5 days / 4 nights" },
    flight: { FR: "Vol optionnel", EN: "Flight optional" },
    meals: { FR: "Petit-déjeuner inclus", EN: "Breakfast included" },
    inclusions: { FR: "Parcours légendaires Rouge (18T) & Bleu (18T), séjour au Ritz-Carlton", EN: "Legendary Red (18H) & Blue (18H) courses, stay at Ritz-Carlton" },
    oldPrice: "",
    newPrice: { FR: "Sur devis", EN: "On request" },
    tag: "golf",
    promoText: {
      FR: "Chef-d'œuvre légendaire de Robert Trent Jones Sr.",
      EN: "Legendary Robert Trent Jones Sr. Masterpiece"
    }
  },
  {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Hilton Taghazout Hôtel", EN: "Hilton Taghazout Hotel" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension ou Petit-déjeuner", EN: "Half board or Breakfast" },
    inclusions: { FR: "4 rondes (Tazegzout, du Soleil, Les Dunes) & voiturette", EN: "4 rounds (Tazegzout, du Soleil, Les Dunes) & buggy" },
    oldPrice: "",
    newPrice: { FR: "3 879 $", EN: "C$ 3,879" },
    tag: "golf",
    promoText: {
      FR: "Tarif spécial — Vue piscine & vol Air Transat inclus",
      EN: "Special Rate — Pool View & Air Transat Included"
    }
  },
  {
    id: 12,
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "White Beach Hôtel", EN: "White Beach Hotel" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension ou Petit-déjeuner", EN: "Half board or Breakfast" },
    inclusions: { FR: "4 rondes (Tazegzout, du Soleil, Les Dunes) & voiturette", EN: "4 rounds (Tazegzout, du Soleil, Les Dunes) & buggy" },
    oldPrice: "",
    newPrice: { FR: "4 255 $", EN: "C$ 4,255" },
    tag: "golf",
    promoText: {
      FR: "Séjour de luxe — Vue jardin & vol Air Transat inclus",
      EN: "Luxury Stay — Garden View & Air Transat Included"
    }
  }
];

export const itinerariesData: Record<string, ItineraryDetail> = {
  "10": {
    id: 10,
    image: "/images/rgdes_parcours_rouge_18.jpg",
    contentImage: "/images/rgdes_parcours_rouge_09_17.jpg",
    title: { FR: "Royal Golf Dar Es Salam", EN: "Royal Golf Dar Es Salam" },
    duration: { FR: "5 jours / 4 nuits", EN: "5 days / 4 nights" },
    cost: { FR: "Sur devis", EN: "On request" },
    overview: {
      FR: "Né de la vision de Feu SM Le Roi Hassan II et dessiné par Robert Trent Jones Sr, le Royal Golf Dar Es Salam est un écosystème naturel somptueux de 440 hectares à seulement 15 minutes du centre de Rabat. Avec son légendaire Parcours Rouge (18 trous, parcours signature), son Parcours Bleu (18 trous) et son Parcours Vert (9 trous), ce site d'exception accueille chaque année le prestigieux Trophée Hassan II. Un séjour inoubliable alliant passion du golf, biodiversité riche et hébergement de très haut standing au Ritz-Carlton Rabat Dar Es Salam.",
      EN: "Born under the vision of His Majesty the late King Hassan II and designed by Robert Trent Jones Sr, Royal Golf Dar Es Salam is a majestic natural ecosystem spanning 440 hectares of forest, just 15 minutes from Rabat city center. Featuring the legendary Red Course (18H, signature), the Blue Course (18H), and the Green Course (9H), this exceptional venue hosts the annual Hassan II Golf Trophy. An unforgettable journey blending golf passion, rich biodiversity, and ultra-luxury stay at The Ritz-Carlton Rabat Dar Es Salam."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Arrivée à Rabat & Ritz-Carlton", EN: "Arrival in Rabat & Ritz-Carlton" },
        desc: { FR: "Accueil VIP à l'aéroport Rabat-Salé (ou Casablanca), transfert privé et installation au Ritz-Carlton Rabat Dar Es Salam 5★. Dîner gastronomique de bienvenue.", EN: "VIP welcome at Rabat-Salé (or Casablanca) airport, private transfer and check-in at The Ritz-Carlton Rabat Dar Es Salam 5★. Gourmet welcome dinner." }
      },
      {
        day: 2,
        title: { FR: "Parcours Rouge — Le Signature (18 Trous)", EN: "Red Course — The Signature (18 Holes)" },
        desc: { FR: "Une journée complète sur le parcours signature. Voiturette électrique et caddie inclus pour relever les défis de ce chef-d'œuvre restauré par James Duncan.", EN: "A full day on the signature course. Electric cart and caddie included to challenge this masterpiece restored by James Duncan." }
      },
      {
        day: 3,
        title: { FR: "Parcours Bleu (18 Trous) & Détente", EN: "Blue Course (18 Holes) & Relaxation" },
        desc: { FR: "Matinée sur le Parcours Bleu. Après-midi détente au Spa et à la piscine du Ritz-Carlton ou visite guidée de la médina de Rabat.", EN: "Morning round on the Blue Course. Afternoon relaxation at the Ritz-Carlton Spa and pool, or guided visit of Rabat's medina." }
      },
      {
        day: 4,
        title: { FR: "Parcours Vert (9 Trous) & Practice", EN: "Green Course (9 Holes) & Practice Session" },
        desc: { FR: "Ronde matinale sur le Parcours Vert (9 trous), suivie d'une séance d'entraînement sur le Practice de l'Académie Nationale de Golf. Soirée libre au Ritz-Carlton.", EN: "Morning round on the Green Course (9 holes), followed by a training session at the National Golf Academy driving range. Free evening at the Ritz-Carlton." }
      },
      {
        day: 5,
        title: { FR: "Départ", EN: "Departure" },
        desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport pour votre vol de retour.", EN: "Breakfast, private transfer to the airport for your return flight." }
      }
    ],
    inclusions: {
      FR: [
        "Hébergement 5★ de luxe au Ritz-Carlton Rabat Dar Es Salam",
        "Petit-déjeuner quotidien inclus (BB)",
        "Green fees pour les parcours Rouge, Bleu et Vert",
        "Voiturette électrique partagée et buggy de practice inclus",
        "Accès complet au Driving Range, Chipping & Putting greens",
        "Transferts privés aéroport ↔ hôtel",
        "Assistance conciergerie bilingue 24/7"
      ],
      EN: [
        "Luxury 5★ accommodation at The Ritz-Carlton Rabat Dar Es Salam",
        "Daily breakfast included (BB)",
        "Green fees on the Red, Blue, and Green courses",
        "Shared electric golf cart and practice buggy included",
        "Full access to Driving Range, Chipping & Putting greens",
        "Private airport ↔ hotel transfers",
        "24/7 bilingual concierge assistance"
      ]
    },
    exclusions: {
      FR: [
        "Vols internationaux",
        "Assurance voyage",
        "Repas et boissons non spécifiés",
        "Frais de caddie (env. 30$ USD par ronde)",
        "Dépenses personnelles et pourboires"
      ],
      EN: [
        "International flights",
        "Travel insurance",
        "Meals and beverages not specified",
        "Caddie fee (approx. $30 USD per round)",
        "Personal expenses and gratuities"
      ]
    },
    options: {
      FR: [
        { name: "Upgrade Suite Ritz-Carlton", price: "Sur devis" },
        { name: "Excursion historique guidée de Rabat", price: "Sur devis" },
        { name: "Leçon privée avec un pro PGA", price: "Sur devis" }
      ],
      EN: [
        { name: "Ritz-Carlton Suite Upgrade", price: "On request" },
        { name: "Guided historical tour of Rabat", price: "On request" },
        { name: "Private pro PGA lesson", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "The Ritz-Carlton Rabat Dar Es Salam",
        stars: 5,
        desc: {
          FR: "Un havre de paix 5★ niché au cœur d'une forêt de chênes, à côté du prestigieux golf. Spa de classe mondiale, restaurants raffinés et service d'exception.",
          EN: "A 5★ oasis nestled in an oak forest adjacent to the prestigious golf course. World-class spa, fine dining, and legendary service."
        },
        link: "https://www.ritzcarlton.com/en/hotels/rbarz-the-ritz-carlton-rabat-dar-es-salam/overview/"
      }
    ],
    activities: [
      {
        title: { FR: "Parcours Rouge Signature (18T)", EN: "Red Signature Course (18H)" },
        desc: {
          FR: "Dessiné par Robert Trent Jones Sr. Un tracé technique et majestueux bordé d'arbres.",
          EN: "Designed by Robert Trent Jones Sr. A technical and majestic tree-lined layout."
        }
      },
      {
        title: { FR: "Parcours Bleu (18T)", EN: "Blue Course (18H)" },
        desc: {
          FR: "Parcours de championnat technique, très apprécié pour son tracé varié.",
          EN: "Technical championship course, highly appreciated for its varied layout."
        }
      },
      {
        title: { FR: "Practice de l'Académie Nationale", EN: "National Academy Practice" },
        desc: {
          FR: "Installations de pratique haut de gamme pour affiner votre swing.",
          EN: "Premium practice facilities to perfect your swing."
        }
      }
    ]
  },
  "11": {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    contentImage: "/images/hilton_taghazout_1.avif",
    title: { FR: "Hilton Taghazout Hôtel", EN: "Hilton Taghazout Hotel" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: { FR: "À partir de 3 879\u00A0$", EN: "Starting from C$\u00A03,879" },
    overview: {
      FR: "Offrez-vous un séjour de golf inoubliable à Agadir en résidant au prestigieux Hilton Taghazout Bay Beach Resort 5★. Ce forfait complet comprend les vols directs aller-retour de Montréal à Agadir avec Air Transat. Vous profiterez de 7 nuits d'hébergement en chambre double vue piscine, avec formule petit-déjeuner ou option demi-pension. Jouez 4 rondes de golf de classe mondiale sur les plus beaux parcours de la région : Tazegzout Golf (Championship face à l'océan), Golf du Soleil et Golf Les Dunes. Une voiturette électrique partagée est comprise pour chaque ronde.",
      EN: "Indulge in an unforgettable golf trip in Agadir, staying at the prestigious 5★ Hilton Taghazout Bay Beach Resort. This complete package includes direct round-trip flights from Montreal to Agadir with Air Transat. You'll enjoy 7 nights of accommodation in a double occupancy room with pool view, on a daily breakfast (BB) or optional half-board (HB) basis. Play 4 rounds of golf on Agadir's premier courses: Tazegzout Golf (oceanfront Championship course), Golf du Soleil, and Golf Les Dunes. A shared electric cart is included for each round."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Vol Montréal – Agadir & Installation", EN: "Montreal – Agadir Flight & Check-In" },
        desc: { FR: "Vol direct avec Air Transat. Accueil à l'aéroport d'Agadir-Al Massira, transfert privé et installation au Hilton Taghazout Bay 5★. Soirée détente.", EN: "Direct flight with Air Transat. Welcome at Agadir-Al Massira Airport, private transfer and check-in at 5★ Hilton Taghazout Bay. Relaxing evening." }
      },
      {
        day: 2,
        title: { FR: "Tazegzout Golf — Face à l'Océan", EN: "Tazegzout Golf — Oceanfront Challenge" },
        desc: { FR: "Première ronde à Tazegzout Golf, un parcours spectaculaire surplombant l'Atlantique. Voiturette électrique incluse.", EN: "First golf round at Tazegzout Golf, a spectacular course overlooking the Atlantic. Electric cart included." }
      },
      {
        day: 3,
        title: { FR: "Golf du Soleil — Parcours de Prestige", EN: "Golf du Soleil — Prestige Round" },
        desc: { FR: "Deuxième ronde au Golf du Soleil, niché au cœur d'une végétation eucalyptus et de lacs. Voiturette électrique incluse.", EN: "Second golf round at Golf du Soleil, nestled in eucalyptus trees and lakes. Electric cart included." }
      },
      {
        day: 4,
        title: { FR: "Détente au Spa Hilton & Plage", EN: "Hilton Spa Relaxation & Beach" },
        desc: { FR: "Journée libre. Profitez de la plage privée du Hilton ou réservez un soin relaxant au Spa.", EN: "Free day. Enjoy Hilton's private beach or book a soothing treatment at the Spa." }
      },
      {
        day: 5,
        title: { FR: "Golf Les Dunes — Parcours Varié", EN: "Golf Les Dunes — Varied Layout" },
        desc: { FR: "Troisième ronde au Golf Les Dunes, offrant trois parcours de 9 trous dessinés par Cabell B. Robinson.", EN: "Third golf round at Golf Les Dunes, offering three 9-hole courses designed by Cabell B. Robinson." }
      },
      {
        day: 6,
        title: { FR: "Deuxième Ronde Tazegzout & Vue Océan", EN: "Second Tazegzout Round & Ocean Views" },
        desc: { FR: "Quatrième ronde sur le parcours de Tazegzout pour parfaire votre score sur ce tracé côtier unique.", EN: "Fourth golf round at Tazegzout course to perfect your score on this unique coastal layout." }
      },
      {
        day: 7,
        title: { FR: "Relaxation & Shopping Souk El Had", EN: "Relaxation & Souk El Had Shopping" },
        desc: { FR: "Dernière journée libre pour faire du shopping au souk local, vous détendre en piscine ou faire une excursion.", EN: "Final free day for local souk shopping, poolside relaxation, or optional excursions." }
      },
      {
        day: 8,
        title: { FR: "Vol de retour", EN: "Return Flight" },
        desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport d'Agadir et vol de retour direct vers Montréal.", EN: "Breakfast, private transfer to Agadir airport and direct return flight to Montreal." }
      }
    ],
    inclusions: {
      FR: [
        "Vols directs aller-retour Montréal – Agadir avec Air Transat (1er bagage enregistré inclus)",
        "7 nuits au Hilton Taghazout Hôtel 5★ en Chambre double Vue Piscine",
        "Petit-déjeuner quotidien ou option Demi-pension (dîner 3 services, vin, eau, café/thé)",
        "4 rondes de golf sur Tazegzout, Golf du Soleil et Golf Les Dunes",
        "Réservations de Tee times & Voiturette électrique partagée",
        "Assistance conciergerie 24/7 sur place",
        "Toutes les taxes de vol et contribution au FICAV incluse"
      ],
      EN: [
        "Direct round-trip flights Montreal – Agadir with Air Transat (first checked bag included)",
        "7 nights at the 5★ Hilton Taghazout Hotel in a double occupancy Pool View Room",
        "Daily breakfast (BB) or Half Board (HB) with 3-course dinner, wine, water, coffee/tea",
        "4 rounds of golf on Tazegzout, Golf du Soleil, and Golf Les Dunes",
        "Tee time reservations & Shared electric golf cart",
        "24/7 on-site concierge assistance",
        "All flight taxes & FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Repas et boissons non spécifiés",
        "Pourboires",
        "Frais de caddie (env. 30$ USD par ronde)",
        "Taxes d'hôtel (env. 5$ CAD par nuit)"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Meals and beverages not specified",
        "Gratuities",
        "Caddie fee (approx. $30 USD per round)",
        "Hotel taxes (approx. $5 CAD per night)"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Chambre Vue Océan", price: "Sur devis" },
        { name: "Formule Demi-pension Premium", price: "Sur devis" },
        { name: "Ronde de golf supplémentaire", price: "Sur devis" }
      ],
      EN: [
        { name: "Ocean View Room Upgrade", price: "On request" },
        { name: "Premium Half-Board Upgrade", price: "On request" },
        { name: "Extra golf round", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Hilton Taghazout Bay Beach Resort & Spa",
        stars: 5,
        desc: {
          FR: "Resort 5★ haut de gamme en bord de mer, proposant un spa primé, plusieurs piscines, un accès direct à la plage et des restaurants de renom.",
          EN: "Premium 5★ beachfront resort, featuring an award-winning spa, multiple pools, direct beach access, and top-tier dining."
        },
        link: "https://www.hilton.com/en/hotels/agbhihi-hilton-taghazout-bay-beach-resort-and-spa/"
      }
    ],
    activities: [
      {
        title: { FR: "Tazegzout Golf (18T)", EN: "Tazegzout Golf (18H)" },
        desc: {
          FR: "Dessiné par Kyle Phillips. Greens spectaculaires suspendus au-dessus de l'océan.",
          EN: "Designed by Kyle Phillips. Spectacular greens suspended right over the ocean."
        }
      },
      {
        title: { FR: "Golf du Soleil (18T)", EN: "Golf du Soleil (18H)" },
        desc: {
          FR: "Un oasis de verdure de 85 hectares niché au cœur d'eucalyptus centenaires.",
          EN: "An 85-hectare green oasis nestled in century-old eucalyptus trees."
        }
      },
      {
        title: { FR: "Golf Les Dunes (18T)", EN: "Golf Les Dunes (18H)" },
        desc: {
          FR: "Tracé vallonné de 27 trous dessiné par Cabell B. Robinson.",
          EN: "Hilly 27-hole layout designed by Cabell B. Robinson."
        }
      }
    ],
    dates: {
      FR: [
        "25 septembre 2026 – 3 octobre 2026",
        "2 octobre 2026 – 10 octobre 2026",
        "9 octobre 2026 – 17 octobre 2026",
        "16 octobre 2026 – 24 octobre 2026"
      ],
      EN: [
        "September 25, 2026 – October 3, 2026",
        "October 2, 2026 – October 10, 2026",
        "October 9, 2026 – October 17, 2026",
        "October 16, 2026 – October 24, 2026"
      ]
    }
  },
  "12": {
    id: 12,
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    contentImage: "/images/deluxe-room-sea-view.jpg",
    title: { FR: "White Beach Hôtel", EN: "White Beach Hotel" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: { FR: "À partir de 4 255\u00A0$", EN: "Starting from C$\u00A04,255" },
    overview: {
      FR: "Découvrez le summum du confort tout compris au Pickalbatros White Beach Resort 5★ (Adults Only) à Agadir. Ce forfait exclusif de 8 jours comprend des vols directs Montréal – Agadir avec Air Transat. Séjournez 7 nuits en Chambre Vue Jardin de luxe avec pension tout compris haut de gamme. Profitez de 4 rondes de golf sur les parcours incontournables d'Agadir (Tazegzout Golf, Golf du Soleil et Golf Les Dunes) avec voiturette électrique partagée incluse. Un voyage d'exception alliant relaxation absolue en bord de mer et golf passionnant.",
      EN: "Discover the pinnacle of adults-only all-inclusive comfort at the 5★ Pickalbatros White Beach Resort in Agadir. This exclusive 8-day package features direct flights from Montreal to Agadir with Air Transat. Stay 7 nights in a luxury Garden View Room with premium all-inclusive boarding. Enjoy 4 rounds of golf on Agadir's premier courses (Tazegzout Golf, Golf du Soleil, and Golf Les Dunes) with a shared electric cart included. A perfect blend of absolute seaside relaxation and exceptional golf."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Vol Montréal – Agadir & Accueil VIP", EN: "Montreal – Agadir Flight & VIP Welcome" },
        desc: { FR: "Vol direct avec Air Transat. Transfert privé et installation au White Beach Resort 5★. Dîner gastronomique inclus.", EN: "Direct flight with Air Transat. Private transfer and check-in at 5★ White Beach Resort. Gourmet dinner included." }
      },
      {
        day: 2,
        title: { FR: "Golf du Soleil — Ronde d'Ouverture", EN: "Golf du Soleil — Opening Round" },
        desc: { FR: "Ronde sur le parcours soigné du Golf du Soleil. Buggy et practice inclus.", EN: "Opening round on the pristine Golf du Soleil course. Buggy and practice range included." }
      },
      {
        day: 3,
        title: { FR: "Tazegzout Golf — Face à l'Atlantique", EN: "Tazegzout Golf — Oceanfront Challenge" },
        desc: { FR: "Ronde à Tazegzout Golf. Défiez ses trous spectaculaires suspendus au-dessus des falaises côtières.", EN: "Golf round at Tazegzout Golf. Challenge its spectacular holes suspended over coastal cliffs." }
      },
      {
        day: 4,
        title: { FR: "Spa de Luxe & Plage Privée", EN: "Luxury Spa & Private Beach" },
        desc: { FR: "Journée libre. Détendez-vous au spa du resort ou profitez du service tout compris sur la plage privée.", EN: "Free day. Relax at the resort's premium spa or enjoy all-inclusive services on the private beach." }
      },
      {
        day: 5,
        title: { FR: "Golf Les Dunes — 18 Trous Robinson", EN: "Golf Les Dunes — 18 Holes Robinson" },
        desc: { FR: "Troisième ronde de golf au Golf Les Dunes sur un tracé varié bordé de genêts et de palmiers.", EN: "Third golf round at Golf Les Dunes on a varied layout bordered by palm trees and broom." }
      },
      {
        day: 6,
        title: { FR: "Deuxième Ronde Tazegzout", EN: "Second Tazegzout Round" },
        desc: { FR: "Dernière ronde à Tazegzout Golf pour apprécier à nouveau les vues imprenables et peaufiner vos coups.", EN: "Final round at Tazegzout Golf to enjoy the stunning ocean views again and polish your shots." }
      },
      {
        day: 7,
        title: { FR: "Détente Tout Compris & Shopping", EN: "All-Inclusive Relaxation & Shopping" },
        desc: { FR: "Journée libre au resort. Cocktails à la piscine, activités de détente ou visite des souks d'Agadir.", EN: "Free day at the resort. Poolside cocktails, relaxing activities, or optional Agadir souks shopping." }
      },
      {
        day: 8,
        title: { FR: "Vol de retour", EN: "Return Flight" },
        desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport d'Agadir pour votre vol direct vers Montréal.", EN: "Breakfast, private transfer to Agadir airport for your direct return flight to Montreal." }
      }
    ],
    inclusions: {
      FR: [
        "Vols directs aller-retour Montréal – Agadir avec Air Transat (1er bagage enregistré inclus)",
        "7 nuits à l'hôtel 5★ White Beach Resort en Chambre double Vue Jardin",
        "Pension Tout Compris (All-Inclusive) incluant repas, collations et boissons",
        "4 rondes de golf sur Tazegzout, Golf du Soleil et Golf Les Dunes",
        "Voiturette électrique partagée pour chaque ronde",
        "Assistance conciergerie 24/7 sur place",
        "Toutes les taxes de vol et contribution au FICAV incluse"
      ],
      EN: [
        "Direct round-trip flights Montreal – Agadir with Air Transat (first checked bag included)",
        "7 nights at the 5★ White Beach Resort in a double occupancy Garden View Room",
        "Premium All-Inclusive boarding including meals, snacks, and drinks",
        "4 rounds of golf on Tazegzout, Golf du Soleil, and Golf Les Dunes",
        "Shared electric golf cart for each round",
        "24/7 on-site concierge assistance",
        "All flight taxes & FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Frais de caddie (env. 30$ USD par ronde)",
        "Taxes d'hôtel (env. 5$ CAD par nuit)",
        "Dépenses personnelles et pourboires"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Caddie fee (approx. $30 USD per round)",
        "Hotel taxes (approx. $5 CAD per night)",
        "Personal expenses and gratuities"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Chambre Vue Mer", price: "Sur devis" },
        { name: "Chambre Swim-Up avec accès piscine", price: "Sur devis" },
        { name: "Ronde de golf supplémentaire", price: "Sur devis" }
      ],
      EN: [
        { name: "Sea View Room Upgrade", price: "On request" },
        { name: "Swim-Up Room with pool access", price: "On request" },
        { name: "Extra golf round", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Pickalbatros White Beach Resort Agadir",
        stars: 5,
        desc: {
          FR: "Un resort ultra-moderne 5★ tout compris en bord de mer (réservé aux adultes), offrant des piscines magnifiques, un grand spa et un service d'excellence.",
          EN: "An ultra-modern 5★ adults-only beachfront resort, offering stunning swimming pools, a huge spa, and excellent service."
        },
        link: "https://www.pickalbatros.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Tazegzout Golf (18T)", EN: "Tazegzout Golf (18H)" },
        desc: {
          FR: "Parcours dessiné par Kyle Phillips, mondialement connu pour ses trous côtiers.",
          EN: "Designed by Kyle Phillips, world-renowned for its dramatic coastal holes."
        }
      },
      {
        title: { FR: "Golf du Soleil (18T)", EN: "Golf du Soleil (18H)" },
        desc: {
          FR: "Un oasis magnifique de 85 hectares avec des lacs scintillants.",
          EN: "A beautiful 85-hectare oasis with shimmering lakes."
        }
      },
      {
        title: { FR: "Golf Les Dunes (18T)", EN: "Golf Les Dunes (18H)" },
        desc: {
          FR: "Tracé exceptionnel vallonné dessiné par Cabell B. Robinson.",
          EN: "Exceptional hilly layout designed by Cabell B. Robinson."
        }
      }
    ],
    dates: {
      FR: [
        "25 septembre 2026 – 3 octobre 2026",
        "2 octobre 2026 – 10 octobre 2026",
        "9 octobre 2026 – 17 octobre 2026",
        "16 octobre 2026 – 24 octobre 2026"
      ],
      EN: [
        "September 25, 2026 – October 3, 2026",
        "October 2, 2026 – October 10, 2026",
        "October 9, 2026 – October 17, 2026",
        "October 16, 2026 – October 24, 2026"
      ]
    }
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
