'use client';

import { useLang, translate } from "../context/lang-context";
import { itinerariesData } from "@/data/itineraries";
import Link from "next/link";
import { motion } from "motion/react";
import { Globe, Download, ChevronRight } from "lucide-react";

const SOCIALS = {
  instagram: "TODO_INSTAGRAM_URL",
  tiktok: "TODO_TIKTOK_URL",
  facebook: "TODO_FACEBOOK_URL",
  website: "https://www.mevoyages.com",
};
const WHATSAPP_URL = "https://wa.me/1TODO_REAL_NUMBER";
const PHONE = "5149196381";

const SIGNATURE_IDS = ["10", "11", "6"];

const QUICK_LINKS = [
  {
    label: { FR: "Golf Marrakech", EN: "Golf Marrakech" },
    url: "/golf-itineraries/marrakech",
  },
  {
    label: { FR: "Golf Agadir", EN: "Golf Agadir" },
    url: "/golf-itineraries/agadir",
  },
  {
    label: { FR: "Circuits & Tours", EN: "Tours & Circuits" },
    url: "/itineraries",
  },
  {
    label: { FR: "MICE & Corporatif", EN: "MICE & Corporate" },
    url: "/mice",
  },
  {
    label: { FR: "Voyage sur mesure", EN: "Custom Journey" },
    url: "/custom-trip",
  },
];

const TikTokIcon = () => (
  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-.77-.56-1.39-1.31-1.81-2.15-.08 3.51-.04 7.02-.04 10.53-.13 5.46-4.64 10.01-10.12 9.9-5.13-.1-9.5-4.22-9.31-9.45.17-4.58 3.85-8.5 8.43-8.73v4.05c-2.28.21-4.28 2.02-4.41 4.34-.17 2.87 2.19 5.43 5.08 5.25 2.53-.16 4.54-2.26 4.54-4.79.02-4.77.01-9.55.01-14.33-.01 0-.01-.01-.01-.02Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } },
};

export default function PortfolioClient() {
  const { lang, setLang } = useLang();

  return (
    <div className="min-h-screen w-full bg-zinc-950 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08),transparent_65%)] flex items-center justify-center font-sans antialiased text-white selection:bg-[#C5A880]/30 selection:text-white">
      <div className="w-full max-w-[430px] mx-auto min-h-screen md:min-h-[850px] md:my-10 md:rounded-[2.5rem] md:border md:border-white/10 md:shadow-2xl bg-zinc-950 overflow-hidden flex flex-col">
        
        {/* Cover Strip */}
        <div className="relative w-full h-[180px] flex-shrink-0">
          <img 
            src="/images/rgdes_parcours_rouge_18.jpg" 
            alt="Royal Golf Dar Es Salam" 
            className="w-full h-full object-cover" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />
        </div>

        {/* Animated Contents */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 flex flex-col px-6 -mt-12 pb-8 relative z-10"
        >
          {/* Logo & Header Info */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-3">
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-2 border-[#C5A880] bg-zinc-950 p-1 flex items-center justify-center shadow-lg">
              <img 
                src="/images/logo.png" 
                alt="Merveilles et Voyages Logo" 
                className="w-full h-full object-contain" 
                loading="lazy" 
              />
            </div>
            <div className="space-y-1">
              <h1 className="font-serif text-2xl font-bold tracking-wide text-white">
                Merveilles et Voyages
              </h1>
              <p className="text-[#C5A880] font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-medium">
                {lang === "FR" ? "Golf & Voyages de Prestige — Maroc" : "Prestige Golf & Travel — Morocco"}
              </p>
              <p className="text-zinc-400 text-xs font-light">
                Montréal · Canada
              </p>
            </div>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3.5 mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-semibold uppercase text-[11px] tracking-wider rounded-full py-3.5 text-center transition-all shadow-md active:scale-95 duration-200"
            >
              {lang === "FR" ? "Écrivez-nous" : "Chat with us"}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="border border-white/20 hover:border-[#C5A880] hover:bg-white/5 text-white font-semibold uppercase text-[11px] tracking-wider rounded-full py-3.5 text-center transition-all active:scale-95 duration-200"
            >
              {lang === "FR" ? "Appelez-nous" : "Call us"}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex justify-center gap-3.5 mt-6">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] transition-colors"
            >
              <TikTokIcon />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href={SOCIALS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] transition-colors"
            >
              <Globe className="w-[18px] h-[18px]" />
            </a>
          </motion.div>

          {/* Signature Packages */}
          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-[#C5A880] font-mono text-[10px] tracking-widest uppercase mb-4">
              {lang === "FR" ? "Nos Signatures" : "Signature Journeys"}
            </h3>
            <div className="space-y-3">
              {SIGNATURE_IDS.map((id) => {
                const pkg = itinerariesData[id];
                if (!pkg) return null;
                return (
                  <Link
                    key={id}
                    href={`/itineraries/${id}`}
                    className="bg-zinc-900/80 border border-white/10 hover:border-[#C5A880]/30 rounded-2xl p-3 flex items-center gap-3.5 transition-colors group"
                  >
                    <div className="w-[72px] h-[72px] rounded-xl overflow-hidden flex-shrink-0 bg-zinc-950">
                      <img
                        src={pkg.image}
                        alt={translate(pkg.title, lang)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-white truncate leading-tight">
                        {translate(pkg.title, lang)}
                      </h4>
                      <p className="text-zinc-400 text-xs mt-1.5 font-light">
                        {translate(pkg.duration, lang)}
                      </p>
                    </div>
                    <ChevronRight className="text-[#C5A880] w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="mt-8 space-y-3">
            {QUICK_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                className="block w-full bg-zinc-900/50 hover:bg-zinc-900 border border-white/10 hover:border-[#C5A880] rounded-full py-3.5 text-center text-sm font-medium text-white transition-colors"
              >
                {translate(link.label, lang)}
              </Link>
            ))}
          </motion.div>

          {/* Save Contact */}
          <motion.div variants={itemVariants} className="mt-8">
            <a
              href="/mevoyages.vcf"
              download
              className="flex items-center justify-center gap-2.5 w-full border border-[#C5A880] hover:bg-[#C5A880]/10 text-[#C5A880] rounded-full py-3.5 text-center font-semibold text-sm transition-colors active:scale-95 duration-200"
            >
              <Download className="w-4 h-4" />
              <span>{lang === "FR" ? "Enregistrer notre contact" : "Save our contact"}</span>
            </a>
          </motion.div>

          {/* Footer Micro */}
          <motion.div variants={itemVariants} className="mt-auto pt-12 flex flex-col items-center gap-4">
            <div className="flex gap-4 text-xs font-mono">
              <button
                onClick={() => setLang("FR")}
                className={`transition-colors uppercase cursor-pointer font-bold ${
                  lang === "FR" ? "text-[#C5A880]" : "text-zinc-500 hover:text-white"
                }`}
              >
                FR
              </button>
              <span className="text-zinc-700">|</span>
              <button
                onClick={() => setLang("EN")}
                className={`transition-colors uppercase cursor-pointer font-bold ${
                  lang === "EN" ? "text-[#C5A880]" : "text-zinc-500 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
            <p className="text-zinc-500 text-[10px] tracking-widest uppercase font-mono">
              © Merveilles et Voyages
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
