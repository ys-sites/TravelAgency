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
    id: 10,
    image: "/images/royal_golf_aerial_1.jpg",
    category: { FR: "Golf & Prestige", EN: "Golf & Prestige" },
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Royal Golf de Marrakech", EN: "Royal Golf de Marrakech" },
    description: {
      FR: "Le plus ancien club de golf d'Afrique, fondé en 1933. Trois parcours légendaires — Rouge, Bleu, Jaune — au cœur de la palmeraie de Marrakech.",
      EN: "The oldest golf club in Africa, founded in 1933. Three legendary courses — Rouge, Bleu, Yellow — nestled within Marrakech's iconic palm grove."
    },
    duration: { FR: "5 à 10 nuits", EN: "5 to 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner inclus", EN: "Breakfast included" },
    oldPrice: "",
    price: "Sur devis",
    tag: "golf",
    iconType: "mountain",
  },
  {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    category: { FR: "Golf & Océan", EN: "Golf & Ocean" },
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Akenza Golf — Taghazout Bay", EN: "Akenza Golf — Taghazout Bay" },
    description: {
      FR: "Un parcours Championship de 18 trous face à l'Atlantique. Séjour au Hilton Taghazout Bay 5★ avec spa et accès direct à la plage.",
      EN: "An 18-hole Championship course overlooking the Atlantic. Stay at the 5★ Hilton Taghazout Bay with spa and direct beach access."
    },
    duration: { FR: "5 à 7 nuits", EN: "5 to 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension", EN: "Half board" },
    oldPrice: "",
    price: "Sur devis",
    tag: "golf",
    iconType: "water",
  },
  {
    id: 12,
    image: "/images/almaaden_golf_1.jpg",
    category: { FR: "Golf & Luxe", EN: "Golf & Luxury" },
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "Al Maaden Golf Resort", EN: "Al Maaden Golf Resort" },
    description: {
      FR: "Parcours de 18 trous signé Kyle Phillips au pied de l'Atlas. Hôtel 5★ sur place, spa et restaurants gastronomiques.",
      EN: "An 18-hole course designed by Kyle Phillips at the foot of the Atlas Mountains. On-site 5★ hotel, spa and fine dining."
    },
    duration: { FR: "4 à 7 nuits", EN: "4 to 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner inclus", EN: "Breakfast included" },
    oldPrice: "",
    price: "Sur devis",
    tag: "golf",
    iconType: "lighthouse",
  }
];

export const dealsList: DealCard[] = [
  {
    id: 10,
    image: "/images/royal_golf_aerial_1.jpg",
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Royal Golf de Marrakech", EN: "Royal Golf de Marrakech" },
    duration: { FR: "5 à 10 nuits", EN: "5 to 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner inclus", EN: "Breakfast included" },
    inclusions: { FR: "3 parcours légendaires (Rouge, Bleu, Jaune) & caddie", EN: "3 legendary courses (Rouge, Blue, Yellow) & caddie" },
    oldPrice: "",
    newPrice: "Sur devis",
    tag: "golf",
    promoText: {
      FR: "Offre Spéciale — Caddie & buggy inclus pour chaque ronde",
      EN: "Special Offer — Complimentary caddie & buggy for each round"
    }
  },
  {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Akenza Golf — Taghazout Bay", EN: "Akenza Golf — Taghazout Bay" },
    duration: { FR: "5 à 7 nuits", EN: "5 to 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension", EN: "Half board" },
    inclusions: { FR: "Hilton 5★ & parcours Championship face à l'océan", EN: "Hilton 5★ & Championship oceanfront course" },
    oldPrice: "",
    newPrice: "Sur devis",
    tag: "golf",
    promoText: {
      FR: "Accès Spa Hilton — Soin marocain de 60 minutes offert",
      EN: "Hilton Spa Access — Complimentary 60-minute Moroccan treatment"
    }
  },
  {
    id: 12,
    image: "/images/almaaden_golf_1.jpg",
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "Al Maaden Golf Resort", EN: "Al Maaden Golf Resort" },
    duration: { FR: "4 à 7 nuits", EN: "4 to 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Breakfast inclus", EN: "Breakfast included" },
    inclusions: { FR: "Hôtel 5★ & parcours Kyle Phillips au pied de l'Atlas", EN: "5★ hotel & Kyle Phillips course at the foot of the Atlas" },
    oldPrice: "",
    newPrice: "Sur devis",
    tag: "golf",
    promoText: {
      FR: "Dîner gastronomique — Dîner de bienvenue offert",
      EN: "Gourmet Dining — Complimentary welcome dinner included"
    }
  }
];

export const itinerariesData: Record<string, ItineraryDetail> = {
  "10": {
    id: 10,
    image: "/images/royal_golf_aerial_1.jpg",
    contentImage: "/images/royal_golf_sunset.jpg",
    title: { FR: "Royal Golf de Marrakech", EN: "Royal Golf de Marrakech" },
    duration: { FR: "5 à 10 nuits", EN: "5 to 10 nights" },
    cost: "Sur devis / On request",
    overview: {
      FR: "Fondé en 1933, le Royal Golf de Marrakech est le plus ancien club de golf d'Afrique. Niché dans la palmeraie mythique, il offre trois parcours distincts — Rouge (18T), Bleu (9T) et Jaune (9T) — entourés de palmiers centenaires et de roses. Un séjour golf d'exception alliant sport et art de vivre marocain.",
      EN: "Founded in 1933, Royal Golf de Marrakech is the oldest golf club in Africa. Nestled in the iconic palm grove, it offers three distinct courses — Rouge (18H), Blue (9H) and Yellow (9H) — surrounded by century-old palms and rose gardens. An exceptional golf stay blending sport and Moroccan art de vivre."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée & Installation", EN: "Arrival & Check-In" }, desc: { FR: "Accueil à l'aéroport Marrakech-Menara, transfert privé vers l'hôtel 5★, dîner de bienvenue.", EN: "Private airport transfer from Marrakech-Menara, 5★ hotel check-in, welcome dinner." } },
      { day: 2, title: { FR: "Parcours Rouge — 18 Trous", EN: "Rouge Course — 18 Holes" }, desc: { FR: "Journée sur le légendaire Parcours Rouge. Caddie, buggy et déjeuner au club-house inclus.", EN: "Full day on the legendary Rouge Course. Caddie, buggy and club-house lunch included." } },
      { day: 3, title: { FR: "Parcours Bleu & Jaune", EN: "Blue & Yellow Courses" }, desc: { FR: "Matinée sur le Parcours Bleu (9T) et après-midi sur le Parcours Jaune (9T). Pause déjeuner en terrasse.", EN: "Morning on the Blue Course (9H) and afternoon on the Yellow Course (9H). Terrace lunch break." } },
      { day: 4, title: { FR: "Journée Libre — Marrakech", EN: "Free Day — Marrakech" }, desc: { FR: "Souks, Jardins Majorelle, hammam traditionnel ou excursion vers l'Atlas au choix.", EN: "Souks, Majorelle Garden, traditional hammam or Atlas Mountains excursion — your choice." } },
      { day: 5, title: { FR: "Départ", EN: "Departure" }, desc: { FR: "Petit-déjeuner, dernier tour optionnel, transfert aéroport.", EN: "Breakfast, optional final round, airport transfer." } },
    ],
    inclusions: {
      FR: ["Vol aller-retour depuis Montréal (Classe économique ou Business sur demande)", "Transferts privés aéroport ↔ hôtel", "Hébergement 5★ en chambre double (petit-déjeuner inclus)", "Green fees sur les parcours Rouge, Bleu et Jaune", "Buggy & caddie pour chaque ronde", "Déjeuner au club-house chaque jour de golf", "Assistance concierge bilingue 24/7"],
      EN: ["Round-trip flight from Montreal (Economy or Business on request)", "Private airport ↔ hotel transfers", "5★ double room accommodation (breakfast included)", "Green fees on Rouge, Blue and Yellow courses", "Buggy & caddie for each round", "Club-house lunch on each golf day", "Bilingual concierge assistance 24/7"]
    },
    exclusions: {
      FR: ["Dîners (sauf dîner de bienvenue)", "Activités optionnelles hors programme", "Assurance voyage", "Dépenses personnelles"],
      EN: ["Dinners (except welcome dinner)", "Optional activities outside the programme", "Travel insurance", "Personal expenses"]
    },
    options: {
      FR: [
        { name: "Upgrade Business Class", price: "Sur devis" },
        { name: "Excursion Atlas Mountains (journée complète)", price: "Sur devis" },
        { name: "Hammam & Spa privatisé", price: "Sur devis" },
        { name: "Cours privé avec pro", price: "Sur devis" },
      ],
      EN: [
        { name: "Business Class Upgrade", price: "On request" },
        { name: "Atlas Mountains Excursion (full day)", price: "On request" },
        { name: "Private Hammam & Spa", price: "On request" },
        { name: "Private pro lesson", price: "On request" },
      ]
    },
    hotels: [
      { name: "Hôtel 5★ Marrakech (Palmeraie ou Médina)", stars: 5, desc: { FR: "Sélection de l'hôtel selon vos préférences et disponibilités — Palmeraie ou Médina.", EN: "Hotel selection based on your preferences and availability — Palmeraie or Medina." }, link: "" }
    ],
    activities: [
      { title: { FR: "Parcours Rouge (18T)", EN: "Rouge Course (18H)" }, desc: { FR: "Le parcours signature, fondé en 1933. Idéal pour tous niveaux.", EN: "The signature course, founded in 1933. Suitable for all levels." } },
      { title: { FR: "Parcours Bleu & Jaune (9T chacun)", EN: "Blue & Yellow Courses (9H each)" }, desc: { FR: "Deux 9 trous complémentaires dans la palmeraie.", EN: "Two complementary 9-hole courses in the palm grove." } },
      { title: { FR: "Médina & Souks", EN: "Medina & Souks" }, desc: { FR: "Exploration libre ou guidée des souks et palais de Marrakech.", EN: "Free or guided exploration of Marrakech's souks and palaces." } },
    ]
  },
  "11": {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    contentImage: "/images/hilton_taghazout_1.avif",
    title: { FR: "Akenza Golf — Taghazout Bay", EN: "Akenza Golf — Taghazout Bay" },
    duration: { FR: "5 à 7 nuits", EN: "5 to 7 nights" },
    cost: "Sur devis / On request",
    overview: {
      FR: "Taghazout Bay abrite l'un des plus beaux parcours Championship d'Afrique : l'Akenza Golf Club, 18 trous face à l'Atlantique. Séjour au Hilton Taghazout Bay 5★, entre mer et montagne, avec accès direct à la plage et spa de prestige.",
      EN: "Taghazout Bay is home to one of Africa's most stunning Championship courses: Akenza Golf Club, 18 holes overlooking the Atlantic. Stay at the 5★ Hilton Taghazout Bay, between sea and mountain, with direct beach access and a world-class spa."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Agadir", EN: "Arrival in Agadir" }, desc: { FR: "Transfert privé depuis l'aéroport Al Massira vers le Hilton Taghazout Bay. Dîner en bord de mer.", EN: "Private transfer from Al Massira Airport to Hilton Taghazout Bay. Seaside welcome dinner." } },
      { day: 2, title: { FR: "Akenza — Parcours Championship", EN: "Akenza — Championship Round" }, desc: { FR: "18 trous sur l'Akenza avec vue panoramique sur l'Atlantique. Buggy, caddie et déjeuner inclus.", EN: "18 holes on the Akenza with panoramic Atlantic views. Buggy, caddie and lunch included." } },
      { day: 3, title: { FR: "Deuxième Ronde & Plage", EN: "Second Round & Beach" }, desc: { FR: "Matinée golf, après-midi libre sur la plage de Taghazout Bay.", EN: "Morning golf round, free afternoon on Taghazout Bay beach." } },
      { day: 4, title: { FR: "Spa & Journée Libre", EN: "Spa & Free Day" }, desc: { FR: "Soin spa privatisé au Hilton, surf ou excursion Agadir en option.", EN: "Private Hilton spa treatment, optional surf session or Agadir excursion." } },
      { day: 5, title: { FR: "Départ", EN: "Departure" }, desc: { FR: "Petit-déjeuner, transfert aéroport.", EN: "Breakfast, airport transfer." } },
    ],
    inclusions: {
      FR: ["Vol aller-retour depuis Montréal", "Transferts privés aéroport ↔ Hilton Taghazout", "Séjour au Hilton Taghazout Bay 5★ (demi-pension)", "Green fees Akenza Golf (2 rondes minimum)", "Buggy & caddie inclus", "Accès spa & piscine Hilton"],
      EN: ["Round-trip flight from Montreal", "Private airport ↔ Hilton Taghazout transfers", "Stay at Hilton Taghazout Bay 5★ (half board)", "Akenza Golf green fees (2 rounds minimum)", "Buggy & caddie included", "Hilton spa & pool access"]
    },
    exclusions: {
      FR: ["Rondes supplémentaires", "Activités de surf ou excursions", "Assurance voyage", "Dépenses personnelles"],
      EN: ["Additional rounds", "Surf activities or excursions", "Travel insurance", "Personal expenses"]
    },
    options: {
      FR: [
        { name: "Rondes supplémentaires Akenza", price: "Sur devis" },
        { name: "Leçon avec pro certifié", price: "Sur devis" },
        { name: "Excursion surf Taghazout", price: "Sur devis" },
        { name: "Upgrade suite vue mer", price: "Sur devis" },
      ],
      EN: [
        { name: "Extra Akenza rounds", price: "On request" },
        { name: "Certified pro lesson", price: "On request" },
        { name: "Taghazout surf excursion", price: "On request" },
        { name: "Ocean view suite upgrade", price: "On request" },
      ]
    },
    hotels: [
      { name: "Hilton Taghazout Bay Beach Resort & Spa", stars: 5, desc: { FR: "Resort 5★ en bord de mer avec accès direct à la plage, spa primé et plusieurs restaurants.", EN: "5★ beachfront resort with direct beach access, award-winning spa and multiple restaurants." }, link: "https://www.hilton.com/en/hotels/agbhihi-hilton-taghazout-bay-beach-resort-and-spa/" }
    ],
    activities: [
      { title: { FR: "Akenza Golf Club (18T)", EN: "Akenza Golf Club (18H)" }, desc: { FR: "Parcours Championship avec vue Atlantique. Niveau intermédiaire à expert.", EN: "Championship course with Atlantic views. Intermediate to expert level." } },
      { title: { FR: "Spa Hilton", EN: "Hilton Spa" }, desc: { FR: "Soins marocains, hammam, piscine intérieure.", EN: "Moroccan treatments, hammam, indoor pool." } },
      { title: { FR: "Plage de Taghazout", EN: "Taghazout Beach" }, desc: { FR: "Spot de surf et détente en bord de mer.", EN: "Surf spot and beach relaxation." } },
    ]
  },
  "12": {
    id: 12,
    image: "/images/almaaden_golf_1.jpg",
    contentImage: "/images/almaaden_golf_3.jpg",
    title: { FR: "Al Maaden Golf Resort", EN: "Al Maaden Golf Resort" },
    duration: { FR: "4 à 7 nuits", EN: "4 to 7 nights" },
    cost: "Sur devis / On request",
    overview: {
      FR: "Al Maaden Golf Resort est un complexe 5★ intégré avec un parcours de 18 trous signé Kyle Phillips, au pied des montagnes de l'Atlas. Restaurant gastronomique, spa de luxe et hébergement sur le parcours pour une expérience golf resort complète à Marrakech.",
      EN: "Al Maaden Golf Resort is an integrated 5★ resort with an 18-hole course designed by Kyle Phillips, at the foot of the Atlas Mountains. Fine dining, luxury spa and on-course accommodation for a complete golf resort experience in Marrakech."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée & Accueil", EN: "Arrival & Welcome" }, desc: { FR: "Transfert depuis Marrakech-Menara, installation à l'Al Maaden Resort 5★, dîner au restaurant gastronomique.", EN: "Transfer from Marrakech-Menara, check-in at Al Maaden Resort 5★, fine dining welcome dinner." } },
      { day: 2, title: { FR: "Parcours Kyle Phillips — 18 Trous", EN: "Kyle Phillips Course — 18 Holes" }, desc: { FR: "Ronde complète sur le parcours signé Kyle Phillips avec vue sur l'Atlas. Buggy et déjeuner inclus.", EN: "Full round on the Kyle Phillips-designed course with Atlas Mountain views. Buggy and lunch included." } },
      { day: 3, title: { FR: "Deuxième Ronde & Spa", EN: "Second Round & Spa" }, desc: { FR: "Matinée golf, après-midi spa et hammam au resort.", EN: "Morning golf round, afternoon spa and hammam at the resort." } },
      { day: 4, title: { FR: "Départ", EN: "Departure" }, desc: { FR: "Petit-déjeuner, transfert aéroport.", EN: "Breakfast, airport transfer." } },
    ],
    inclusions: {
      FR: ["Vol aller-retour depuis Montréal", "Transferts privés", "Hébergement 5★ Al Maaden (petit-déjeuner inclus)", "Green fees (2 rondes minimum)", "Buggy inclus", "Accès spa & piscine", "Dîner de bienvenue"],
      EN: ["Round-trip flight from Montreal", "Private transfers", "5★ Al Maaden accommodation (breakfast included)", "Green fees (2 rounds minimum)", "Buggy included", "Spa & pool access", "Welcome dinner"]
    },
    exclusions: {
      FR: ["Rondes supplémentaires", "Déjeuners et dîners hors programme", "Assurance voyage", "Dépenses personnelles"],
      EN: ["Additional rounds", "Lunches and dinners outside the program", "Travel insurance", "Personal expenses"]
    },
    options: {
      FR: [
        { name: "Rondes supplémentaires", price: "Sur devis" },
        { name: "Excursion Médina Marrakech guidée", price: "Sur devis" },
        { name: "Leçon avec pro", price: "Sur devis" },
      ],
      EN: [
        { name: "Additional rounds", price: "On request" },
        { name: "Guided Marrakech Medina excursion", price: "On request" },
        { name: "Pro lesson", price: "On request" },
      ]
    },
    hotels: [
      { name: "Al Maaden Golf Resort & Spa", stars: 5, desc: { FR: "Resort 5★ avec parcours intégré, restaurant gastronomique et spa au pied de l'Atlas.", EN: "5★ resort with integrated course, fine dining restaurant and spa at the foot of the Atlas." }, link: "https://www.almaaden.com/" }
    ],
    activities: [
      { title: { FR: "Parcours 18T Kyle Phillips", EN: "18H Kyle Phillips Course" }, desc: { FR: "Parcours de conception internationale au pied de l'Atlas.", EN: "Internationally-designed course at the foot of the Atlas Mountains." } },
      { title: { FR: "Spa & Hammam Al Maaden", EN: "Al Maaden Spa & Hammam" }, desc: { FR: "Soins exclusifs et hammam traditionnel.", EN: "Exclusive treatments and traditional hammam." } },
      { title: { FR: "Restaurant Gastronomique", EN: "Fine Dining Restaurant" }, desc: { FR: "Cuisine marocaine et internationale avec vue sur le parcours.", EN: "Moroccan and international cuisine with course views." } },
    ]
  }
}

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
