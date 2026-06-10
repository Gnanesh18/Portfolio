"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
  { id: "training-camp", label: "Training Camp", targets: ["home", "training-arc"], href: "#home" },
  { id: "practice-matches", label: "Practice Matches", targets: ["player-stats"], href: "#player-stats" },
  { id: "regional-qualifiers", label: "Regional Qualifiers", targets: ["match-highlights"], href: "#match-highlights" },
  { id: "nationals", label: "Nationals", targets: ["achievements"], href: "#achievements" },
  { id: "victory", label: "Victory", targets: ["contact", "player-profile"], href: "#contact" }
];

export default function SeasonJourney() {
  const [activeMilestone, setActiveMilestone] = useState("training-camp");
  const [visible, setVisible] = useState(false);

  // Monitor scroll height to determine active milestone and hide/show hud
  useEffect(() => {
    const handleScroll = () => {
      // Show HUD only after scrolling past 100px
      setVisible(window.scrollY > 150);

      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      for (const milestone of milestones) {
        let isMatched = false;
        for (const targetId of milestone.targets) {
          const element = document.getElementById(targetId);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              isMatched = true;
              break;
            }
          }
        }
        if (isMatched) {
          setActiveMilestone(milestone.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial computation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-6"
        >
          {/* Label indicating HUD category */}
          <div className="font-oswald text-[8px] uppercase tracking-[0.3em] text-soft-gray/40 rotate-90 origin-center translate-y-[-20px] select-none whitespace-nowrap">
            SEASON JOURNEY
          </div>

          <div className="relative flex flex-col items-center gap-8 py-4">
            {/* Background vertical connector line */}
            <div className="absolute top-2 bottom-2 w-[1px] bg-white/10"></div>
            
            {/* Highlighted active tracker path */}
            <div className="absolute top-2 bottom-2 w-[1px] bg-orange-karasuno/10"></div>

            {milestones.map((milestone, idx) => {
              const isActive = activeMilestone === milestone.id;
              
              return (
                <div key={milestone.id} className="relative flex items-center group">
                  
                  {/* Floating Tooltip Label (hover & active states) */}
                  <span
                    className={`absolute right-7 font-oswald text-[9px] uppercase tracking-widest py-0.5 px-2 whitespace-nowrap transition-all duration-300 pointer-events-none select-none border ${
                      isActive 
                        ? "text-orange-karasuno border-orange-karasuno/30 bg-[#0B0B0B]" 
                        : "text-soft-gray/40 border-transparent bg-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[-4px]"
                    }`}
                  >
                    {milestone.label}
                  </span>

                  {/* Bullet Node */}
                  <a
                    href={milestone.href}
                    onClick={(e) => handleClick(e, milestone.href)}
                    className="relative flex items-center justify-center cursor-pointer"
                    aria-label={`Jump to ${milestone.label}`}
                  >
                    {/* Ring highlight container */}
                    <span 
                      className={`w-5 h-5 rounded-none border border-transparent flex items-center justify-center transition-all duration-300 ${
                        isActive ? "border-orange-karasuno rotate-45 shadow-[0_0_8px_#FF6B00]" : "group-hover:border-white/30"
                      }`}
                    >
                      {/* Inner dot */}
                      <span 
                        className={`w-1.5 h-1.5 transition-all duration-300 ${
                          isActive 
                            ? "bg-orange-karasuno" 
                            : "bg-white/20 group-hover:bg-white"
                        }`}
                      ></span>
                    </span>
                  </a>

                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
