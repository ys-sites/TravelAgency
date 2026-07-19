'use client';

import { useLang, translate } from "../context/lang-context";
import { itinerariesData } from "@/data/itineraries";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ChevronRight, Phone } from "lucide-react";

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
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .77.1v-3.5a6.39 6.39 0 0 0-.77-.05 6.33 6.33 0 0 0-6.32 6.33 6.33 0 0 0 10.74 4.54 6.27 6.27 0 0 0 1.95-4.54V9.08a10.84 10.84 0 0 0 6.32 2.05V7.63a7.42 7.42 0 0 1-2.58-.94Z" />
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

// Premium fadeUp with blur dissolve from hyliox-pixel-perfect
const premiumFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, ease: "easeOut" as any, delay },
});

export default function PortfolioClient() {
  const { lang, setLang } = useLang();

  return (
    <div className="min-h-screen w-full bg-[#030c08] bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.12),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_60%)] flex items-center justify-center font-sans antialiased text-white selection:bg-[#C5A880]/30 selection:text-white">
      <div className="w-full max-w-[430px] mx-auto min-h-screen md:min-h-[850px] md:my-10 md:rounded-[2.5rem] md:border md:border-emerald-950/60 md:shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.02)] bg-[#030906]/95 overflow-hidden flex flex-col">
        
        {/* Cover Strip */}
        <div className="relative w-full h-[180px] flex-shrink-0 bg-[#030906] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://cdn.mevoyages.com/MEvoyages/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw.jpg"
          >
            <source src="https://cdn.mevoyages.com/MEvoyages/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
            <source src="https://cdn.mevoyages.com/MEvoyages/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030906]/40 to-[#030906] z-10" />
        </div>

        {/* Animated Contents Column */}
        <div className="flex-1 flex flex-col px-6 -mt-12 pb-8 relative z-10">
          
          {/* Logo & Header Info */}
          <motion.div {...premiumFadeUp(0)} className="flex flex-col items-center text-center space-y-3">
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-2 border-[#C5A880] bg-[#030906] p-1 flex items-center justify-center shadow-lg">
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
          <motion.div {...premiumFadeUp(0.08)} className="grid grid-cols-2 gap-3.5 mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-semibold uppercase text-[11px] tracking-wider rounded-full py-3.5 text-center transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-300"
            >
              {lang === "FR" ? "Écrivez-nous" : "Chat with us"}
            </a>
            <a
              href={SOCIALS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-[#C5A880] hover:bg-white/5 text-white font-semibold uppercase text-[11px] tracking-wider rounded-full py-3.5 text-center transition-all hover:scale-[1.03] active:scale-95 duration-300"
            >
              {lang === "FR" ? "Visiter le site" : "Visit website"}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div {...premiumFadeUp(0.16)} className="flex justify-center gap-3.5 mt-6">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] hover:scale-110 transition-all duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] hover:scale-110 transition-all duration-300"
            >
              <TikTokIcon />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] hover:scale-110 transition-all duration-300"
            >
              <FacebookIcon />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] hover:scale-110 transition-all duration-300"
            >
              <Phone className="w-[18px] h-[18px]" />
            </a>
          </motion.div>

          {/* Signature Packages */}
          <div className="mt-8 space-y-4">
            <motion.h3 {...premiumFadeUp(0.24)} className="text-[#C5A880] font-mono text-[10px] tracking-widest uppercase mb-1">
              {lang === "FR" ? "Nos Signatures" : "Signature Journeys"}
            </motion.h3>
            <div className="space-y-3">
              {SIGNATURE_IDS.map((id, index) => {
                const pkg = itinerariesData[id];
                if (!pkg) return null;
                return (
                  <motion.div key={id} {...premiumFadeUp(0.3 + index * 0.08)}>
                    <Link
                      href={`/itineraries/${id}`}
                      className="bg-[#071710]/50 border border-emerald-500/10 hover:border-[#C5A880]/30 rounded-2xl p-3 flex items-center gap-3.5 transition-all hover:scale-[1.02] duration-300 group"
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
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 space-y-3">
            {QUICK_LINKS.map((link, idx) => (
              <motion.div key={idx} {...premiumFadeUp(0.54 + idx * 0.06)}>
                <Link
                  href={link.url}
                  className="block w-full bg-[#071710]/30 hover:bg-[#071710]/50 border border-emerald-500/10 hover:border-[#C5A880] rounded-full py-3.5 text-center text-sm font-medium text-white transition-all hover:scale-[1.02] duration-300"
                >
                  {translate(link.label, lang)}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Save Contact */}
          <motion.div {...premiumFadeUp(0.86)} className="mt-8">
            <a
              href="/mevoyages.vcf"
              download
              className="flex items-center justify-center gap-2.5 w-full border border-[#C5A880] hover:bg-[#C5A880]/10 text-[#C5A880] rounded-full py-3.5 text-center font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 duration-300"
            >
              <Download className="w-4 h-4" />
              <span>{lang === "FR" ? "Enregistrer notre contact" : "Save our contact"}</span>
            </a>
          </motion.div>

          {/* Footer Micro */}
          <motion.div {...premiumFadeUp(0.94)} className="mt-auto pt-12 flex flex-col items-center gap-4">
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

        </div>
      </div>
    </div>
  );
}
