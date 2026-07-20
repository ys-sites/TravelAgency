'use client';

import { useRef, useEffect } from "react";
import { useLang, translate } from "../context/lang-context";
import { itinerariesData } from "@/data/itineraries";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ChevronRight, Phone } from "lucide-react";

const SOCIALS = {
  instagram: "https://www.instagram.com/merveilles.et.voyages?igsh=MTRzc2xmZDA5dGJxbg%3D%3D&utm_source=qr",
  tiktok: "TODO_TIKTOK_URL",
  facebook: "https://www.facebook.com/share/1K4URaBPHt/?mibextid=wwXIfr",
  website: "https://www.mevoyages.com",
};
const WHATSAPP_URL = "https://wa.me/15149196381";
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
  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }, 1500); // Pause cover video after 1.5 seconds (1500 ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FAF9F5] bg-[radial-gradient(circle_at_75%_20%,rgba(197,168,128,0.12),transparent_55%),radial-gradient(circle_at_25%_80%,rgba(197,168,128,0.08),transparent_55%)] flex items-center justify-center font-sans antialiased text-zinc-900 selection:bg-[#C5A880]/20 selection:text-zinc-900">
      <div className="w-full max-w-[430px] mx-auto min-h-screen md:min-h-[850px] md:my-10 md:rounded-[2.5rem] md:border md:border-zinc-200/80 md:shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white overflow-hidden flex flex-col relative">
        
        {/* Dark Green / Black Top Section */}
        <div className="bg-[#020704] text-white relative overflow-hidden flex flex-col pb-8 border-b border-zinc-200/5">
          {/* Glow Spots inside the card for dual-tone texture */}
          <div className="absolute top-[-30px] right-[-60px] w-[220px] h-[220px] bg-[#C5A880]/8 rounded-full blur-[65px] pointer-events-none z-0" />
          <div className="absolute top-[320px] left-[-90px] w-[240px] h-[240px] bg-[#C5A880]/6 rounded-full blur-[70px] pointer-events-none z-0" />

          {/* Cover Strip */}
          <div className="relative w-full h-[180px] flex-shrink-0 bg-[#020704] overflow-hidden z-10">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75 pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="https://cdn.mevoyages.com/MEvoyages/Golf_in_Morocco_New_tmjx9s.jpg"
            >
              <source src="https://cdn.mevoyages.com/MEvoyages/Golf_in_Morocco_New_tmjx9s_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
              <source src="https://cdn.mevoyages.com/MEvoyages/Golf_in_Morocco_New_tmjx9s.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020704]/40 to-[#020704] z-10" />
          </div>

          {/* Animated Contents Column */}
          <div className="px-6 -mt-12 relative z-10 flex flex-col">
            
            {/* Logo & Header Info */}
            <motion.div {...premiumFadeUp(0)} className="flex flex-col items-center text-center space-y-3">
              <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-2 border-[#C5A880] bg-[#020704] p-1 flex items-center justify-center shadow-lg">
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
                <p className="text-[#C5A880] font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-medium">
                  {lang === "FR" ? "Golf & Voyages de Prestige — Maroc" : "Prestige Golf & Travel — Morocco"}
                </p>
                <p className="text-zinc-400 text-xs font-light">
                  Canada
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
                className="border border-[#C5A880]/30 bg-[#C5A880]/5 hover:bg-[#C5A880]/15 text-white font-semibold uppercase text-[11px] tracking-wider rounded-full py-3.5 text-center transition-all hover:scale-[1.03] active:scale-95 duration-300"
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
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] hover:scale-110 transition-all duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] hover:scale-110 transition-all duration-300"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-white hover:text-[#C5A880] hover:scale-110 transition-all duration-300"
              >
                <Phone className="w-[18px] h-[18px] stroke-2" />
              </a>
            </motion.div>

            {/* Save Contact (Positioned immediately after social icons) */}
            <motion.div {...premiumFadeUp(0.24)} className="mt-6">
              <a
                href="/mevoyages.vcf"
                download
                className="flex items-center justify-center gap-2.5 w-full border border-[#C5A880] hover:bg-[#C5A880]/10 text-[#C5A880] rounded-full py-3.5 text-center font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 duration-300"
              >
                <Download className="w-4 h-4" />
                <span>{lang === "FR" ? "Enregistrer notre contact" : "Save our contact"}</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* White / Light Bottom Section */}
        <div className="flex-1 flex flex-col px-6 pt-6 pb-8 bg-white relative">
          <div className="absolute bottom-[80px] right-[-70px] w-[220px] h-[220px] bg-[#C5A880]/4 rounded-full blur-[65px] pointer-events-none z-0" />
          
          <div className="relative z-10 flex-1 flex flex-col">
            {/* Signature Packages */}
            <div className="space-y-4">
              <motion.h3 {...premiumFadeUp(0.32)} className="text-[#C5A880] font-mono text-[10px] tracking-[0.15em] font-bold uppercase mb-1">
                {lang === "FR" ? "Nos Signatures" : "Signature Journeys"}
              </motion.h3>
              <div className="space-y-3">
                {SIGNATURE_IDS.map((id, index) => {
                  const pkg = itinerariesData[id];
                  if (!pkg) return null;
                  return (
                    <motion.div key={id} {...premiumFadeUp(0.38 + index * 0.08)}>
                      <Link
                        href={`/itineraries/${id}`}
                        className="bg-zinc-50/60 backdrop-blur-xl border border-zinc-200/80 hover:border-[#C5A880]/40 rounded-2xl p-3 flex items-center gap-3.5 transition-all hover:scale-[1.02] duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                      >
                        <div className="w-[72px] h-[72px] rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100">
                          <img
                            src={pkg.image}
                            alt={translate(pkg.title, lang)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-semibold text-zinc-800 truncate leading-tight">
                            {translate(pkg.title, lang)}
                          </h4>
                          <p className="text-zinc-500 text-xs mt-1.5 font-light">
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
                <motion.div key={idx} {...premiumFadeUp(0.62 + idx * 0.06)}>
                  <Link
                    href={link.url}
                    className="block w-full bg-zinc-50/70 hover:bg-zinc-100/90 border border-zinc-200/80 hover:border-[#C5A880] rounded-full py-3.5 text-center text-sm font-medium text-zinc-800 transition-all hover:scale-[1.02] duration-300 shadow-sm"
                  >
                    {translate(link.label, lang)}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Micro */}
            <motion.div {...premiumFadeUp(0.92)} className="mt-auto pt-12 flex flex-col items-center gap-4">
              <div className="flex gap-4 text-xs font-mono">
                <button
                  onClick={() => setLang("FR")}
                  className={`transition-colors uppercase cursor-pointer font-bold ${
                    lang === "FR" ? "text-[#C5A880]" : "text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  FR
                </button>
                <span className="text-zinc-200">|</span>
                <button
                  onClick={() => setLang("EN")}
                  className={`transition-colors uppercase cursor-pointer font-bold ${
                    lang === "EN" ? "text-[#C5A880]" : "text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  EN
                </button>
              </div>
              <p className="text-zinc-400 text-[10px] tracking-widest uppercase font-mono">
                © Merveilles et Voyages
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
