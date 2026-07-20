'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLang, translate } from "../context/lang-context";

const t = {
  tagline: { FR: "Questions Fréquentes", EN: "Frequently Asked Questions" },
  heading: { FR: "Tout Ce Que Vous Devez Savoir", EN: "Everything You Need to Know" },
  subheading: {
    FR: "Retrouvez les réponses à vos questions sur nos forfaits de voyage au Maroc.",
    EN: "Find answers to your questions about our Morocco travel packages.",
  },
};

const faqs = [
  {
    q: { FR: "Quelles destinations proposez-vous au Maroc ?", EN: "Which destinations do you offer in Morocco?" },
    a: {
      FR: "Nous proposons des séjours dans toutes les grandes villes du Maroc : Marrakech, Agadir, Rabat, Casablanca, Fès, Chefchaouen, Tanger, Essaouira et Ouarzazate. Nous couvrons également des destinations de golf spécifiques comme le Royal Golf Dar Es Salam à Rabat et les prestigieux parcours de Taghazout Bay à Agadir.",
      EN: "We offer stays in all major Moroccan cities: Marrakech, Agadir, Rabat, Casablanca, Fes, Chefchaouen, Tangier, Essaouira, and Ouarzazate. We also cover specific golf destinations like the Royal Golf Dar Es Salam in Rabat and the prestigious courses at Taghazout Bay in Agadir.",
    },
  },
  {
    q: { FR: "Vos forfaits incluent-ils les vols depuis Montréal ?", EN: "Do your packages include flights from Montreal?" },
    a: {
      FR: "Oui, nous pouvons organiser vos vols réguliers au départ de Montréal (YUL) vers le Maroc. Nous travaillons avec les principales compagnies aériennes desservant cette route pour vous proposer les meilleures options selon votre budget et vos dates.",
      EN: "Yes, we can arrange your scheduled flights departing from Montreal (YUL) to Morocco. We work with the main airlines serving this route to offer you the best options based on your budget and dates.",
    },
  },
  {
    q: { FR: "Quelle est la meilleure période pour jouer au golf au Maroc ?", EN: "What is the best time to play golf in Morocco?" },
    a: {
      FR: "La meilleure saison pour le golf au Maroc s'étend de mars à mai et de septembre à novembre. Les températures sont idéales, les parcours sont en parfait état et le ciel est dégagé. L'hiver (décembre à février) est également agréable dans le sud du pays, notamment à Agadir.",
      EN: "The best season for golf in Morocco runs from March to May and September to November. Temperatures are ideal, courses are in perfect condition and skies are clear. Winter (December to February) is also pleasant in the south of the country, particularly in Agadir.",
    },
  },
  {
    q: { FR: "Proposez-vous des voyages de groupe ou des événements MICE ?", EN: "Do you offer group travel or MICE events?" },
    a: {
      FR: "Absolument. Nous sommes spécialisés dans l'organisation d'événements corporatifs MICE au Maroc : séminaires, voyages d'incentive, congrès, team-building et retraites de direction. Notre équipe prend en charge l'intégralité de la logistique de A à Z.",
      EN: "Absolutely. We specialize in organizing corporate MICE events in Morocco: seminars, incentive travel, conferences, team-building and executive retreats. Our team handles all the logistics from A to Z.",
    },
  },
  {
    q: { FR: "Comment puis-je demander un devis personnalisé ?", EN: "How can I request a personalized quote?" },
    a: {
      FR: "Utilisez le formulaire de contact ci-dessous ou appelez-nous directement au +1 514 919 6381. Notre conciergerie bilingue vous répondra dans les 24 heures pour discuter de vos besoins et vous préparer un itinéraire sur mesure.",
      EN: "Use the contact form below or call us directly at +1 514 919 6381. Our bilingual concierge will respond within 24 hours to discuss your needs and prepare a tailor-made itinerary for you.",
    },
  },
  {
    q: { FR: "Les forfaits golf comprennent-ils l'hébergement ?", EN: "Do golf packages include accommodation?" },
    a: {
      FR: "Oui, tous nos forfaits de golf incluent l'hébergement dans des hôtels 4 ou 5 étoiles soigneusement sélectionnés, les green fees, les transferts aéroport, et l'assistance d'un accompagnateur local dédié. Tout est inclus pour que vous n'ayez qu'à vous concentrer sur votre jeu.",
      EN: "Yes, all our golf packages include accommodation in carefully selected 4 or 5-star hotels, green fees, airport transfers, and assistance from a dedicated local guide. Everything is included so you only have to focus on your game.",
    },
  },
];

export default function HomeFaqSection() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200/60" id="faq">
      <div className="max-w-[860px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-brand-gold">
            {translate(t.tagline, lang)}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            {translate(t.heading, lang)}
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
            {translate(t.subheading, lang)}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-gold/40 bg-white shadow-sm"
                    : "border-zinc-200/70 bg-white/70 hover:bg-white hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-sm md:text-base font-semibold text-zinc-900 leading-snug pr-4">
                    {translate(faq.q, lang)}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-brand-gold text-white" : "bg-zinc-100 text-zinc-500"
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-zinc-100">
                        <p className="text-zinc-600 text-sm font-light leading-relaxed pt-4">
                          {translate(faq.a, lang)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
