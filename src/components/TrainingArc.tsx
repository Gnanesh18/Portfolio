"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Terminal, Code2, Rocket } from "lucide-react";

const milestones = [
  {
    phase: "PHASE 01",
    title: "Foundational Practice",
    subtitle: "CLASS X & CLASS XII",
    description: "Formed strong analytical fundamentals during school. Completed Class X at BGS Rural English School (97.28%) and Class XII at St Joseph's Pre University College (80.33%). Recognized as Best Sports Person of the Year (2022) at SJPUC.",
    details: "Class X: 97.28% // Class XII: 80.33%",
    icon: Terminal,
    diagram: (
      <svg className="w-full h-full max-w-[150px] opacity-40" viewBox="0 0 100 100" fill="none">
        <circle cx="20" cy="50" r="6" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 26 50 L 74 50" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M 70 45 L 80 50 L 70 55 Z" fill="#FF6B00" />
        <text x="50" y="40" fill="white" fontSize="6" fontFamily="var(--font-oswald)" letterSpacing="1" textAnchor="middle">LEARNING LOOP</text>
        <circle cx="80" cy="50" r="4" fill="white" />
      </svg>
    )
  },
  {
    phase: "PHASE 02",
    title: "BCA League Play",
    subtitle: "ST JOSEPH'S UNIVERSITY",
    description: "Graduated with a Bachelor of Computer Applications (BCA) at St Joseph's University, Bengaluru. Built core competencies in C, Java, JavaScript, and SQL database query systems.",
    details: "CGPA: 7.2 // Best Tennis Player (2022-2025)",
    icon: BookOpen,
    diagram: (
      <svg className="w-full h-full max-w-[150px] opacity-40" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="25" width="20" height="20" stroke="white" strokeWidth="1.5" />
        <rect x="65" y="25" width="20" height="20" stroke="white" strokeWidth="1.5" />
        <path d="M 35 35 Q 50 15 65 35" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 60 25 L 65 35 L 53 32 Z" fill="#FF6B00" />
        <path d="M 65 40 Q 50 60 35 40" stroke="white" strokeWidth="1" />
        <text x="50" y="75" fill="white" fontSize="6" fontFamily="var(--font-oswald)" letterSpacing="1" textAnchor="middle">ACADEMIC SET</text>
      </svg>
    )
  },
  {
    phase: "PHASE 03",
    title: "Championship Matches",
    subtitle: "FULL STACK WEB DEVELOPMENT",
    description: "Engineered web-based applications including a Petrol Bunk Management System (MERN Stack) and an interactive, API-driven Crypto Currency Dashboard using React and Next.js.",
    details: "React, Next.js, Node.js, Express, MongoDB",
    icon: Code2,
    diagram: (
      <svg className="w-full h-full max-w-[150px] opacity-40" viewBox="0 0 100 100" fill="none">
        <path d="M 10 20 L 90 20 L 90 80 L 10 80 Z" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M 25 35 L 75 65" stroke="#FF6B00" strokeWidth="2" />
        <circle cx="25" cy="35" r="5" fill="white" />
        <circle cx="75" cy="65" r="5" fill="#FF6B00" />
        <path d="M 70 52 L 75 65 L 62 61" fill="#FF6B00" />
        <text x="50" y="55" fill="white" fontSize="6" fontFamily="var(--font-oswald)" letterSpacing="1" textAnchor="middle" transform="rotate(31, 50, 55)">DEPLOYMENT SPIKE</text>
      </svg>
    )
  },
  {
    phase: "PHASE 04",
    title: "MCA Advanced Division",
    subtitle: "BMSIT // BENGALURU",
    description: "Enrolled in Master of Computer Applications (MCA) at BMS Institute of Technology and Management, Bengaluru. Mastering advanced computation concepts and system structures.",
    details: "CGPA: 8.0 // 2026 - 2027",
    icon: Award,
    diagram: (
      <svg className="w-full h-full max-w-[150px] opacity-40" viewBox="0 0 100 100" fill="none">
        <line x1="50" y1="15" x2="50" y2="85" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="50" cy="50" r="25" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M 20 20 L 80 80" stroke="white" strokeWidth="1.5" />
        <path d="M 72 78 L 80 80 L 78 72" fill="white" />
        <text x="75" y="35" fill="white" fontSize="6" fontFamily="var(--font-oswald)" letterSpacing="1">COURT VISION</text>
      </svg>
    )
  },
  {
    phase: "PHASE 05",
    title: "Professional Draft Prep",
    subtitle: "SQE SYSTEMS & SOLUTIONS",
    description: "Completed offline technical training at SQE Systems and Solutions, validating practical frontend skills, testing protocols, and version control procedures.",
    details: "Status: Verified Candidate",
    icon: Rocket,
    diagram: (
      <svg className="w-full h-full max-w-[150px] opacity-40" viewBox="0 0 100 100" fill="none">
        <path d="M 50 90 L 50 20" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 45 30 L 50 15 L 55 30 Z" fill="#FF6B00" />
        <circle cx="50" cy="55" r="12" fill="#0B0B0B" stroke="#FF6B00" strokeWidth="2" />
        <text x="50" y="58" fill="white" fontSize="7" fontFamily="var(--font-bebas)" textAnchor="middle">GOAL</text>
        <text x="50" y="82" fill="white" fontSize="5" fontFamily="var(--font-oswald)" textAnchor="middle">VICTORY ARC</text>
      </svg>
    )
  }
];

export default function TrainingArc() {
  return (
    <section id="training-arc" className="py-24 relative overflow-hidden bg-transparent border-y border-white/5">
      {/* Background Chalk overlay */}
      <div className="absolute inset-0 tactical-grid opacity-[0.02] pointer-events-none"></div>
      
      {/* Left/Right Section Margins */}
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 lg:ml-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-orange-karasuno"></span>
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-orange-karasuno font-bold">
              PLAYER GROWTH TIMELINE
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wide">
            THE TRAINING ARC
          </h2>
          <p className="text-soft-gray text-sm max-w-lg mt-2 font-light">
            Every elite developer starts at training camp. Here is how I practice, evolve, and step up my game to deliver production-ready software.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative mt-12 lg:ml-12">
          {/* Vertical Chalk line (timeline core spine) */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 border-dashed border-l border-white/10 -translate-x-[1px]"></div>

          {/* Timeline Cards */}
          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={milestone.title} 
                  className={`flex flex-col lg:flex-row items-stretch w-full relative ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet indicator */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-120px" }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-6 lg:left-1/2 w-6 h-6 -translate-x-3 bg-[#0B0B0B] border-2 border-orange-karasuno flex items-center justify-center rounded-none z-20 top-4"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-karasuno"></span>
                  </motion.div>

                  {/* Left Side: Card Container */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 flex justify-start lg:justify-end">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -5, 
                        borderColor: "rgba(255, 107, 0, 0.4)",
                        boxShadow: "0px 10px 30px rgba(255, 107, 0, 0.12)"
                      }}
                      viewport={{ once: false, margin: "-120px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      className="w-full max-w-lg glass-panel p-6 border border-white/5 bg-[#0D0D0D]/60 hover:bg-[#0F0F0F] transition-colors duration-300 relative flex flex-col justify-between group cursor-default"
                    >
                      {/* Technical Blueprint Accent Lines */}
                      <div className="absolute top-0 left-0 w-3 h-[1px] bg-orange-karasuno"></div>
                      <div className="absolute top-0 left-0 w-[1px] h-3 bg-orange-karasuno"></div>

                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="font-oswald text-[10px] tracking-widest text-orange-karasuno font-bold block mb-1">
                            {milestone.phase} // {milestone.subtitle}
                          </span>
                          <h3 className="font-bebas text-3xl text-white tracking-wide group-hover:text-orange-karasuno transition-colors">
                            {milestone.title}
                          </h3>
                        </div>
                        <div className="p-2 bg-white/5 border border-white/10 text-white group-hover:text-orange-karasuno transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <p className="text-soft-gray text-sm leading-relaxed mb-6 font-light">
                        {milestone.description}
                      </p>

                      <div className="pt-4 border-t border-white/5 text-[10px] font-oswald text-soft-gray uppercase tracking-wider">
                        <span>{milestone.details}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer / Blackboard Diagram side for desktops */}
                  <div className="hidden lg:flex w-1/2 px-12 items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, rotate: isEven ? 8 : -8 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.08, rotate: isEven ? 3 : -3 }}
                      viewport={{ once: false, margin: "-120px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      className="w-full max-w-[150px] aspect-square flex items-center justify-center relative bg-[#0B0B0B] border border-white/5 p-4"
                    >
                      {/* Coach board style diagram */}
                      {milestone.diagram}
                      {/* Blueprint grid tag */}
                      <span className="absolute bottom-1 right-2 text-[8px] font-oswald text-white/20">
                        DRW_NO_{idx + 1}
                      </span>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
