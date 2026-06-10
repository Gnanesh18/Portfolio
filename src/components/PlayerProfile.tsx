"use client";

import { motion } from "framer-motion";
import { Eye, GraduationCap, Target, Award, Heart } from "lucide-react";

export default function PlayerProfile() {
  return (
    <section id="player-profile" className="py-24 relative overflow-hidden bg-[#0F0F0F] border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 tactical-grid opacity-[0.02] pointer-events-none"></div>
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 lg:ml-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-orange-karasuno"></span>
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-orange-karasuno font-bold">
              ATHLETE SPECIFICATION // CV
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wide">
            PLAYER PROFILE
          </h2>
          <p className="text-soft-gray text-sm max-w-lg mt-2 font-light">
            Academic coordinates, strategic objectives, and verification stats of Gnanesh K C.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:ml-12 items-stretch">
          
          {/* Left Side: Physical Profile Card (Jersey No. 10 silhouette) (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 border border-white/10 relative overflow-hidden bg-[#0B0B0B]">
            {/* Scouter HUD indicators */}
            <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-6 text-[9px] font-oswald text-soft-gray tracking-wider">
              <span>JERSEY SERIAL: #KA-04-10</span>
              <span className="text-orange-karasuno font-bold">ALL-ROUNDER</span>
            </div>

            {/* Player Photo (Clean, centered) */}
            <div className="relative w-full aspect-[4/5] border border-white/10 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 tactical-grid opacity-[0.05] z-10 pointer-events-none"></div>
              
              <img 
                src="/profile.jpg" 
                alt="Gnanesh K C Profile" 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Card footer details */}
            <div className="mt-6 border-t border-white/5 pt-4 text-center">
              <span className="font-bebas text-2xl text-white tracking-widest block">
                GNANESH K C
              </span>
              <span className="font-oswald text-[10px] text-orange-karasuno uppercase tracking-[0.2em] font-semibold">
                ACTIVE POSITION // FULL STACK DEVELOPER PROSPECT
              </span>
            </div>
          </div>

          {/* Right Side: Educational details & Objective (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section 1: Objective */}
            <div className="glass-panel p-6 border border-white/5 hover:border-white/10 transition-colors relative">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-orange-karasuno" />
                <h3 className="font-bebas text-2xl text-white tracking-wide leading-none">
                  CAREER PLAYBOOK / SUMMARY
                </h3>
              </div>
              <p className="text-soft-gray text-sm leading-relaxed font-light">
                MCA student with hands-on experience building full-stack applications using React, Node.js, Express, and MongoDB. Interested in frontend engineering and creating performant user experiences.
              </p>
            </div>

            {/* Section 2: Education History */}
            <div className="glass-panel p-6 border border-white/5 hover:border-white/10 transition-colors relative">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4.5 h-4.5 text-orange-karasuno" />
                <h3 className="font-bebas text-2xl text-white tracking-wide leading-none">
                  EDUCATION TIMELINE
                </h3>
              </div>

              <div className="space-y-5">
                {/* Item 1: MCA */}
                <div className="border-l-2 border-orange-karasuno pl-4 relative">
                  <span className="font-oswald text-[9px] text-orange-karasuno font-bold uppercase tracking-widest block mb-0.5 animate-pulse">
                    CURRENT LEAGUE // 2026 - 2027
                  </span>
                  <h4 className="font-oswald text-sm font-semibold text-white tracking-wide">
                    Master Of Computer Applications (MCA)
                  </h4>
                  <p className="text-soft-gray text-xs mt-1 font-light">
                    BMS Institute Of Technology And Management, Bengaluru. • CGPA: 8.0
                  </p>
                </div>

                {/* Item 2: BCA */}
                <div className="border-l-2 border-white/20 pl-4 relative">
                  <span className="font-oswald text-[9px] text-soft-gray/80 font-bold uppercase tracking-widest block mb-0.5">
                    COMPLETED LEAGUE // 2022 - 2025
                  </span>
                  <h4 className="font-oswald text-sm font-semibold text-white tracking-wide">
                    Bachelor Of Computer Applications (BCA)
                  </h4>
                  <p className="text-soft-gray text-xs mt-1 font-light">
                    St Joseph’s University, Bengaluru. • GPA: 7.2
                  </p>
                </div>

                {/* Item 3: Class XII */}
                <div className="border-l-2 border-white/15 pl-4 relative">
                  <span className="font-oswald text-[9px] text-soft-gray/60 font-bold uppercase tracking-widest block mb-0.5">
                    COMPLETED LEAGUE // 2020 - 2022
                  </span>
                  <h4 className="font-oswald text-sm font-semibold text-white tracking-wide">
                    Class XII (MSBA)
                  </h4>
                  <p className="text-soft-gray text-xs mt-1 font-light">
                    St Joseph's Pre University College, Bengaluru. • Percentage: 80.33%
                  </p>
                </div>

                {/* Item 4: Class X */}
                <div className="border-l-2 border-white/10 pl-4 relative">
                  <span className="font-oswald text-[9px] text-soft-gray/40 font-bold uppercase tracking-widest block mb-0.5">
                    COMPLETED LEAGUE // 2019
                  </span>
                  <h4 className="font-oswald text-sm font-semibold text-white tracking-wide">
                    Class X
                  </h4>
                  <p className="text-soft-gray text-xs mt-1 font-light">
                    BGS Rural English School, Chickballapur. • Percentage: 97.28%
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Core Disciplines */}
            <div className="glass-panel p-6 border border-white/5 hover:border-white/10 transition-colors relative">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-orange-karasuno" />
                <h3 className="font-bebas text-2xl text-white tracking-wide leading-none">
                  AREAS OF SPECIALTY
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-light text-soft-gray">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-karasuno"></span>
                  <span>Responsive UI / UX Choreography</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-karasuno"></span>
                  <span>React / JavaScript State Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-karasuno"></span>
                  <span>Relational & Document Database Ops</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-karasuno"></span>
                  <span>Git / GitHub Repository Sprints</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
