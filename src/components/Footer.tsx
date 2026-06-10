"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/5 py-12 relative overflow-hidden select-none">
      <div className="absolute inset-0 tactical-grid opacity-[0.01] pointer-events-none"></div>
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 lg:pl-28 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Copyright & Quote */}
        <div className="text-center md:text-left space-y-2.5">
          <div className="font-bebas text-2xl tracking-wider text-white">
            GNANESH <span className="text-orange-karasuno">K C</span>
          </div>
          <p className="font-oswald text-xs uppercase tracking-[0.25em] text-orange-karasuno font-bold">
            "Today's effort becomes tomorrow's victory."
          </p>
          <div className="text-[10px] text-soft-gray font-light uppercase tracking-widest">
            © 2027 Gnanesh K C • ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Center/Right: Framework detail */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="text-[10px] text-soft-gray/60 font-light uppercase tracking-widest text-center md:text-right max-w-xs leading-relaxed">
            Built with Next.js, React, Tailwind CSS, and a relentless growth mindset.
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 font-oswald text-[9px] uppercase tracking-[0.2em] text-orange-karasuno hover:text-white transition-colors cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <span>Top of Court</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
