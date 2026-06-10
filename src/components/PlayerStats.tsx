"use client";

const resumeSkills = [
  {
    name: "React",
    icon: (
      <svg className="w-10 h-10" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 1.5v21h21v-21H1.5zm19.5 15.75c0 .35-.07.7-.22 1.03a2.38 2.38 0 0 1-.61.82c-.27.23-.6.41-.98.53a4.42 4.42 0 0 1-2.43 0 2.97 2.97 0 0 1-1.07-.57 2.76 2.76 0 0 1-.67-.93c-.16-.38-.23-.84-.23-1.38h2.09c0 .32.05.58.14.77.09.19.22.35.39.46.17.11.37.18.6.21.23.03.48.01.75-.06a.93.93 0 0 0 .5-.29c.12-.13.18-.32.18-.56v-6.38h2.12v6.38zm-6.19 1.15c-.24.36-.58.63-1.01.81-.43.18-.94.27-1.54.27a4.67 4.67 0 0 1-1.9-.37 3.51 3.51 0 0 1-1.35-.99 3.65 3.65 0 0 1-.77-1.46c-.16-.54-.23-1.12-.23-1.72h2.12c0 .48.06.87.18 1.17.12.3.29.53.51.68s.48.22.78.22c.28 0 .51-.06.69-.18.18-.12.31-.27.38-.45a1.27 1.27 0 0 0 .1-.56c0-.28-.06-.51-.18-.69s-.29-.33-.52-.46-.5-.26-.81-.39l-.86-.36c-.45-.19-.85-.42-1.19-.69a2.76 2.76 0 0 1-.82-1.01c-.19-.41-.29-.93-.29-1.57 0-.54.09-1.01.27-1.4a2.91 2.91 0 0 1 .77-1c.33-.26.74-.45 1.22-.57a5.53 5.53 0 0 1 2.45.06c.44.11.82.29 1.13.54a2.7 2.7 0 0 1 .74.9c.16.36.25.79.25 1.3h-2.06c0-.3-.06-.54-.18-.72a.85.85 0 0 0-.46-.35c-.2-.07-.44-.1-.72-.1-.28 0-.52.05-.71.15-.19.1-.33.23-.42.4a1.05 1.05 0 0 0-.13.53c0 .24.05.44.15.6.1.16.24.29.43.39.19.1.41.2.66.29l.9.38c.52.22.96.47 1.32.77.36.3.63.66.82 1.07.19.41.29.93.29 1.56 0 .58-.1 1.09-.3 1.53z"/>
      </svg>
    )
  },
  {
    name: "HTML",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 22L0 2h24l-1.5 20L12 24z"/>
        <path d="M12 22.2l8.8-2.4L22.2 4H12z" opacity="0.15"/>
        <path d="M12 10.7H7.8l-.3-3.1H12V4.5H4.2l.9 9.3H12zm0 6.6l-4-1.1-.3-2.8H4.6l.5 5.6 6.9 1.9z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 10.7v3.1h4.2l-.4 4.4-3.8 1v-3.1zm0-6.2v3.1h7.5l-.3 3.1H12v3.1h7.2l-.7 7.7-6.5 1.8v-3.1z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    name: "CSS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 22L0 2h24l-1.5 20L12 24z"/>
        <path d="M12 22.2l8.8-2.4L22.2 4H12z" opacity="0.15"/>
        <path d="M12 10.7H7.8l-.3-3.1H12V4.5H4.2l.9 9.3H12zm0 6.6l-4-1.1-.3-2.8H4.6l.5 5.6 6.9 1.9z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 10.7v3.1h4.2l-.4 4.4-3.8 1v-3.1zm0-6.2v3.1h7.5l-.3 3.1H12v3.1h7.2l-.7 7.7-6.5 1.8v-3.1z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C8.7 4.7 6 9.4 6 12.9c0 3.3 2.7 6.1 6 6.1s6-2.8 6-6.1C18 9.4 15.3 4.7 12 0zm0 15.8c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z"/>
      </svg>
    )
  },
  {
    name: "Express",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M3 12h18M3 6h18M3 18h18" strokeDasharray="2.5 2.5"/>
        <text x="12" y="15.5" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="monospace">ex</text>
      </svg>
    )
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L2.25 5.625v12.75L12 24l9.75-5.625v-12.75L12 0zm7.5 16.875l-7.5 4.312-7.5-4.312v-9.75l7.5-4.312 7.5 4.312v9.75z"/>
      </svg>
    )
  },
  {
    name: "SQL",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    )
  },
  {
    name: "C",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.14 0 7.7-2.52 9.2-6.13l-3.66-1.5c-.88 2.05-2.92 3.5-5.54 3.5-3.31 0-6-2.69-6-6s2.69-6 6-6c2.62 0 4.66 1.45 5.54 3.5l3.66-1.5C19.7 4.52 16.14 2 12 2z"/>
      </svg>
    )
  },
  {
    name: "Java",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.3 16.7c.3 1.2-1.3 2.1-3.2 2.1-1.9 0-3.5-.9-3.2-2.1.3-1.2 2.1-.9 3.2-.9 1.1 0 2.9-.3 3.2.9zm-4.3-5.2c-1.3 0-2.2.6-2.2 1.3 0 .7.9 1.3 2.2 1.3 1.3 0 2.2-.6 2.2-1.3 0-.7-.9-1.3-2.2-1.3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm6.7 13.9c-.3 1.1-1.6 1.9-3.4 1.9-1.8 0-3.1-.8-3.4-1.9-.3-1.1.9-1.7 2.7-1.7 1.8 0 4.4.6 4.1 1.7z"/>
      </svg>
    )
  },
  {
    name: "Data Structures",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M12 8l-4 7m4-7l4 7" />
      </svg>
    )
  }
];

// Duplicate list multiple times for seamless, infinite looping wrapper
const scrollingSkills = [...resumeSkills, ...resumeSkills, ...resumeSkills, ...resumeSkills];

export default function PlayerStats() {
  return (
    <section id="player-stats" className="py-24 relative overflow-hidden bg-[#0B0B0B] border-y border-white/5">
      {/* Custom keyframe styles for single line infinite ribbon */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollLeftSingle {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-scroll-single {
          display: flex;
          width: max-content;
          animation: scrollLeftSingle 25s linear infinite;
        }
      `}} />

      {/* Background court lines overlay */}
      <div className="absolute inset-0 tactical-grid opacity-[0.03] pointer-events-none"></div>
      
      {/* Left divider line */}
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 lg:ml-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-orange-karasuno"></span>
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-orange-karasuno font-bold">
              PLAYER COMPETENCE & SKILLS
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wide">
            TECHNICAL SKILLS
          </h2>
          <p className="text-soft-gray text-sm max-w-lg mt-2 font-light">
            Continuous real-time ribbon tracking core programming languages, UI frameworks, databases, and structural skills. Hover to pause.
          </p>
        </div>
      </div>

      {/* Ticker Container with mask */}
      <div className="relative select-none w-full py-4">
        {/* Left and Right edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0B0B] to-transparent z-20 pointer-events-none"></div>

        {/* Single Scroll Line */}
        <div className="overflow-hidden flex w-full">
          <div className="animate-scroll-single gap-6 px-3">
            {scrollingSkills.map((skill, idx) => (
              <div 
                key={`${skill.name}-${idx}`} 
                className="w-32 sm:w-36 flex flex-col items-center justify-center p-5 glass-panel border border-white/5 bg-[#0D0D0D]/60 relative group shrink-0 transition-colors hover:border-orange-karasuno/40"
              >
                {/* Tech logo frame (Uniform orange theme coloring) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#070707] border border-white/5 flex items-center justify-center rounded-xl shadow-inner text-orange-karasuno group-hover:scale-105 group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                {/* Tech label */}
                <span className="font-oswald text-[10px] sm:text-xs text-soft-gray uppercase tracking-widest mt-4 group-hover:text-orange-karasuno transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
