'use client';

import { useLang } from "../context/lang-context";

export default function Stats() {
  const { lang } = useLang();

  const statsList = [
    {
      value: "8,200+",
      label: {
        FR: "Voyageurs VIP",
        EN: "VIP Travelers"
      },
      subtext: {
        FR: "ont fait confiance à nos services exclusifs.",
        EN: "have trusted our exclusive travel services."
      }
    },
    {
      value: "15",
      label: {
        FR: "Ans d'Expertise",
        EN: "Years of Expertise"
      },
      subtext: {
        FR: "dans la création de voyages sur mesure.",
        EN: "crafting tailored luxury escapes."
      }
    },
    {
      value: "100%",
      label: {
        FR: "Sécurité Escrow",
        EN: "Escrow Secured"
      },
      subtext: {
        FR: "fonds protégés par PGP & escrow.",
        EN: "funds fully cleared via PGP & escrow."
      }
    },
    {
      value: "24/7",
      label: {
        FR: "Canal Dédié",
        EN: "Dedicated Channel"
      },
      subtext: {
        FR: "support concierge chiffré permanent.",
        EN: "permanent encrypted concierge support."
      }
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white text-zinc-900">
      {statsList.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col bg-zinc-50/50 p-6 rounded-[1.5rem] border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-brand-gold/45 transition-luxury"
        >
          <span className="font-heading text-[38px] font-extrabold text-brand-gold tracking-tight leading-none">
            {stat.value}
          </span>
          <span className="font-heading text-[12px] font-bold text-zinc-800 uppercase mt-3 tracking-wider">
            {stat.label[lang]}
          </span>
          <span className="font-body text-[12px] text-zinc-500 mt-1 leading-relaxed">
            {stat.subtext[lang]}
          </span>
        </div>
      ))}
    </div>
  );
}

