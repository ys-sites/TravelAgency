'use client';

import { Search, Calendar } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full rounded-[2rem] bg-white p-3 shadow-card-soft flex flex-col md:flex-row items-center justify-between gap-2 border border-wonderland-cream">
      {/* Left Input */}
      <div className="flex-1 flex items-center gap-3 px-4 border-r border-wonderland-cream/60 w-full">
        <Search className="h-5 w-5 text-wonderland-gray/60" />
        <input
          type="text"
          placeholder="Enter tour name"
          className="w-full border-none bg-transparent py-3 text-[13px] text-wonderland-brown placeholder:text-wonderland-gray/60 focus:outline-none"
        />
      </div>

      {/* Center Input (Date) */}
      <div className="flex-1 flex items-center gap-3 px-4 border-r border-wonderland-cream/60 w-full">
        <Calendar className="h-5 w-5 text-wonderland-gray/60" />
        <span className="text-[13px] font-medium text-wonderland-brown/80 py-3">
          14.03.2022 - 14.04.2022
        </span>
      </div>

      {/* CTA Button */}
      <button className="rounded-full bg-wonderland-brown px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-wonderland-brown-dark transition-all duration-300 w-full md:w-auto cursor-pointer">
        SEARCH TOURS
      </button>
    </div>
  );
}
