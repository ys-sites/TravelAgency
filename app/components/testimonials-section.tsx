'use client';

import { motion } from "motion/react";
import { useLang, translate } from "../context/lang-context";
import { Check, Shield } from "lucide-react";

interface Testimonial {
  quote: { EN: string; FR: string };
  name: string;
  location: string;
  tripName: { EN: string; FR: string };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: {
      EN: "From the tarmac greeting in Marrakech to the private helicopter over the Atlas — every detail was orchestrated with a level of care I've never experienced from any travel service. Truly sovereign.",
      FR: "De l'accueil sur le tarmac à Marrakech au vol en hélicoptère privé au-dessus de l'Atlas — chaque détail a été orchestré avec un niveau de soin que je n'ai jamais expérimenté auprès d'aucun service de voyages. Véritablement souverain."
    },
    name: "Sophie L.",
    location: "Montréal, QC",
    tripName: { EN: "Marrakech & Sahara Escape", FR: "Fuite Marrakech & Sahara" },
    rating: 5
  },
  {
    quote: {
      EN: "The Royal Mansour Desert Camp was unlike anything in our 20 years of travel. Our concierge anticipated every need before we even knew we had one. We've already reserved our return.",
      FR: "Le Royal Mansour Desert Camp était sans égal en 20 ans de voyage. Notre concierge a anticipé tous nos besoins avant même que nous les connaissions. Nous avons déjà réservé notre retour."
    },
    name: "Karim & Nadia B.",
    location: "Toronto, ON",
    tripName: { EN: "Marrakech & Sahara Escape", FR: "Fuite Marrakech & Sahara" },
    rating: 5
  },
  {
    quote: {
      EN: "Dubai and Oman in 10 days, completely private, completely seamless. The marina penthouse and Musandam dhow were the highlights of our year. Majestic Experiences is simply in a class of its own.",
      FR: "Dubaï et Oman en 10 jours, complètement privé, complètement transparente. Le penthouse Marina et le dhow Musandam ont été les points culminants de notre année. Majestic Experiences est simplement dans une classe à part."
    },
    name: "Marc-André T.",
    location: "Québec City, QC",
    tripName: { EN: "Dubai & Oman Grand Circuit", FR: "Grand Circuit Dubaï & Oman" },
    rating: 5
  }
];

const trustBadges = [
  { label: { EN: "Bilingual Concierge Service", FR: "Service Concierge Bilingue" }, icon: Check },
  { label: { EN: "256-Bit Secure Booking", FR: "Réservation Sécurisée 256-Bit" }, icon: Shield },
  { label: { EN: "100% Tailor-Made Itineraries", FR: "100% Itinéraires Sur Mesure" }, icon: Check },
  { label: { EN: "Canadian-Based, Globally Connected", FR: "Basé au Canada, Mondialement Connecté" }, icon: Check }
];

export default function TestimonialsSection() {
  const { lang } = useLang();

  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-brand-gold font-mono text-[11px] tracking-[0.2em] uppercase block">
            {lang === "EN" ? "GUEST CHRONICLES" : "CHRONIQUES DE NOS VOYAGEURS"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            {lang === "EN" ? "Voices from the Journey" : "Voix du Voyage"}
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur-sm hover:border-brand-gold/20 transition-colors duration-300"
            >
              {/* Quote */}
              <blockquote className="text-[15px] leading-relaxed text-white/90 font-light italic">
                "{translate(testimonial.quote, lang)}"
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-gold text-lg">★</span>
                ))}
              </div>

              {/* Guest Info */}
              <div className="border-t border-white/10 pt-6 space-y-2">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-[13px] text-white/60 font-light">
                  {testimonial.location}
                </p>
                <p className="text-[12px] text-brand-gold font-mono tracking-wide">
                  {translate(testimonial.tripName, lang)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-[12px] text-white/70 font-light"
                >
                  <IconComponent className="text-brand-gold w-4 h-4 shrink-0" />
                  <span>{translate(badge.label, lang)}</span>
                  {index < trustBadges.length - 1 && (
                    <span className="hidden md:inline text-white/20 ml-2">•</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
