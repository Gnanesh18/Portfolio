"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("match-highlights");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Background Grid & Court lines */}
      <div className="absolute inset-0 tactical-grid opacity-[0.03] pointer-events-none"></div>
      
      {/* Decorative vertical/horizontal line dividers mimicking sports magazines */}
      <div className="absolute top-0 left-16 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block"></div>
      <div className="absolute top-0 right-1/3 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block"></div>
      <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white/[0.03] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center lg:items-end lg:text-right relative z-10 lg:pr-16">
        
        {/* Editorial Typography */}
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right w-full lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 mb-4 justify-center lg:justify-end"
          >
            <span className="w-2.5 h-2.5 bg-orange-karasuno rounded-none"></span>
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-orange-karasuno font-bold">
              SCOUTING PROFILE // ACTIVE PROSPECT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02, 
              color: "#FF6B00"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-white tracking-wide cursor-default select-none"
          >
            GNANESH K C
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-oswald text-xl sm:text-2xl md:text-3xl text-soft-gray uppercase tracking-widest mt-2 mb-6 flex flex-wrap gap-x-4 gap-y-2 items-center justify-center lg:justify-end"
          >
            <span>MCA Student</span>
            <span className="text-orange-karasuno">•</span>
            <span className="text-white">Full Stack Developer</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl space-y-4 mx-auto lg:mx-0 lg:ml-auto"
          >
            <p className="font-oswald text-lg sm:text-xl text-orange-karasuno uppercase tracking-wide leading-relaxed font-medium">
              &quot;Building software with the discipline of an athlete.&quot;
            </p>
            <p className="text-soft-gray text-base sm:text-lg leading-relaxed font-light">
              MCA student with hands-on experience building full-stack applications using React, Node.js, Express, and MongoDB. Interested in frontend engineering and creating performant user experiences.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-end"
          >
            <a
              href="#match-highlights"
              onClick={handleScrollToProjects}
              className="bg-orange-karasuno text-white font-oswald text-xs uppercase tracking-widest px-8 py-4 border border-orange-karasuno hover:bg-transparent hover:text-orange-karasuno transition-all duration-300 shadow-[0_4px_20px_rgba(255,107,0,0.15)] hover:shadow-[0_4px_30px_rgba(255,107,0,0.3)]"
            >
              View Projects
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white font-oswald text-xs uppercase tracking-widest px-8 py-4 border border-white/20 hover:border-orange-karasuno hover:text-orange-karasuno transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity">
        <span className="font-oswald text-[9px] uppercase tracking-[0.2em] text-soft-gray">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-orange-karasuno" />
        </motion.div>
      </div>
    </section>
  );
}
