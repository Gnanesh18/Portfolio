"use client";

import Image from "next/image";
import { motion as motionFramer } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";

const matches = [
  {
    id: "match-01",
    name: "Petrol Bunk Management System",
    headline: "RECORD ACCURACY BOOSTED BY 30% VIA SECURED MERN ENGINE",
    role: "Frontend Developer (React UI & Express CRUD Hooks)",
    summary: "A user-interactive web application built to record daily fuel sales, automate profits/losses calculations, and manage records with administrative database roles.",
    features: [
      "Implemented real-time analytics dashboard of fuel sales and automated calculations",
      "Designed a secured role-based login system, restricting access to managers only",
      "Created transactional CRUD operations for daily ledger updates in MongoDB"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    stats: [
      { label: "Record Accuracy", value: "~30% Increase" },
      { label: "Database Operations", value: "MongoDB CRUD" },
      { label: "Security Layer", value: "Role-Based" },
      { label: "Team Phase", value: "Oct 2025 - Apr 2026" }
    ],
    maturitySpecs: {
      git: "Collaborative Branching & PRs",
      api: "Express RESTful endpoints",
      auth: "Role-based login gates",
      deployment: "Vercel (UI) & Render (DB)",
      responsiveness: "Fluid Flexbox/Grid layout",
      state: "React hooks & Context API"
    },
    tacticalBreakdown: "Engineered responsive manager panels and streamlined transaction routes. Restricting inputs via role gates eliminated recording errors and elevated transaction logging integrity by 30%.",
    github: "https://github.com/darshan-gowdaa/petrol-bunk-management-system",
    live: "https://petrol-bunk-management-system-alpha.vercel.app/",
    imageAccentText: "MATCH_DAY_01 // FUEL_SALES",
    image: "/petrolbunk.png"
  },
  {
    id: "match-02",
    name: "Crypto Currency Dashboard",
    headline: "REAL-TIME MARKET SCRAPING DELIVERS 30% FASTER LOADING SPEED",
    role: "Individual Developer (Next.js & React Architect)",
    summary: "A responsive cryptocurrency tracking application visualizing real-time market changes, price charts, and trading trends for up to 100 cryptocurrencies.",
    features: [
      "Integrated real-time API data fetching with state management to reduce request overhead",
      "Optimized load times by ~30% with client caching and component lazy loading",
      "Ensured pixel-perfect cross-device rendering across mobile, tablet, and desktop viewports"
    ],
    tech: ["React", "Next.js"],
    stats: [
      { label: "Load Time Speedup", value: "~30% Boost" },
      { label: "Tokens Tracked", value: "100 Assets" },
      { label: "Architecture", value: "Next.js / React" },
      { label: "Dev Duration", value: "Mar 2026 - Apr 2026" }
    ],
    maturitySpecs: {
      git: "Feature branch workflow",
      api: "CoinGecko live market API",
      auth: "Public endpoint access",
      deployment: "Vercel Continuous Deploy",
      responsiveness: "Tailwind media breakports",
      state: "React hooks & Local Cache"
    },
    tacticalBreakdown: "Implemented client-side cache state limits and data throttling for active APIs. Structured lightweight price chart graphics to avoid main-thread blocks.",
    github: "https://github.com/Gnanesh18/CryptoSight",
    live: "https://crypto-sight-five.vercel.app/",
    imageAccentText: "MATCH_DAY_02 // COIN_DATA",
    image: "/cryptosight.png"
  },
  {
    id: "match-03",
    name: "SkillMatrix AI Dashboard",
    headline: "AI-DRIVEN EDTECH ENGINE ENGAGES REAL-TIME ROADMAPS & ASSESSMENTS",
    role: "Frontend Developer (React UI, Gemini API & State Optimization)",
    summary: "An interactive, AI-powered learning dashboard featuring custom skill assessments, real-time Gemini AI roadmap generation, chatbot assistance, and persistent progress logs.",
    features: [
      "Integrated Gemini API endpoints to generate custom, actionable step-by-step career learning roadmaps",
      "Developed secure authentication architecture and MongoDB endpoints for persistent user state",
      "Built interactive assessment modules enforcing anti-hallucination and question-variety rules"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "MongoDB", "Express", "Gemini API"],
    stats: [
      { label: "API Response", value: "Sub-second AI" },
      { label: "Data Persistence", value: "MongoDB State" },
      { label: "Build Target", value: "Vercel Deploy" },
      { label: "Dev Duration", value: "May 2026" }
    ],
    maturitySpecs: {
      git: "GitHub actions CI pipelines",
      api: "Google Gemini AI model",
      auth: "Secure JWT & DB sessions",
      deployment: "Vercel Serverless hosting",
      responsiveness: "Mobile-first glassmorphism",
      state: "Persistent progress state"
    },
    tacticalBreakdown: "Optimized prompt engineering inputs and response schemas for the Gemini API, reducing roadmap generation failures. Configured persistent MongoDB storage to maintain user progress and assessment logs across serverless sessions.",
    github: "https://github.com/Gnanesh18/skillmatrix",
    live: "https://skillmatrix-chi.vercel.app/",
    imageAccentText: "MATCH_DAY_03 // SKILL_MATRIX",
    image: "/skillmatrix.png"
  },
  {
    id: "match-04",
    name: "AthleteOS",
    headline: "FULL-STACK SPORTS TECHNOLOGY ENGINE BOOSTS COACHING & TRAINING EFFICIENCY",
    role: "Full Stack Developer (React UI, Node.js & MongoDB)",
    summary: "A comprehensive sports performance management platform for athletes and coaches to track training sessions, match performance, rankings, and injury history.",
    features: [
      "Developed role-based workflows for athletes and coaches, improving training management efficiency",
      "Built responsive dashboards and analytics modules to visualize athlete progress and performance trends",
      "Designed a scalable architecture using React, Node.js, Express, and MongoDB, deployed on Vercel"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    stats: [
      { label: "System Workflows", value: "Role-Based" },
      { label: "Architecture", value: "Scalable MERN" },
      { label: "Cloud Deploy", value: "Vercel Hosted" },
      { label: "Dev Duration", value: "June 2026" }
    ],
    maturitySpecs: {
      git: "Branch & PR workflow",
      api: "Express RESTful endpoints",
      auth: "Role-based workflows",
      deployment: "Vercel Continuous Deploy",
      responsiveness: "Mobile & Desktop UI Grid",
      state: "React state & Analytics"
    },
    tacticalBreakdown: "Engineered responsive dashboard structures and role-based views. Optimized MongoDB data operations and Express endpoints to maintain quick page loading and analytics rendering across devices.",
    github: "https://github.com/Gnanesh18/sports_ai",
    live: "https://athleteos-app.vercel.app/",
    imageAccentText: "MATCH_DAY_04 // ATHLETE_OS",
    image: "/athleteos.png"
  }
];

export default function MatchHighlights() {
  return (
    <section id="match-highlights" className="py-24 relative overflow-hidden bg-[#0F0F0F] border-b border-white/5">
      <div className="absolute inset-0 tactical-grid opacity-[0.02] pointer-events-none"></div>
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 lg:ml-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-orange-karasuno"></span>
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-orange-karasuno font-bold">
              DOMINANT SPRINT RECORD // HIGHLIGHTS
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wide">
            MATCH HIGHLIGHTS
          </h2>
          <p className="text-soft-gray text-sm max-w-lg mt-2 font-light">
            Real-world codebases presented as competitive tournament match recaps. Engineered with clean structures and validated analytics.
          </p>
        </div>

        {/* Project Spreads */}
        <div className="space-y-20 lg:ml-12">
          {matches.map((match, idx) => (
            <motionFramer.div
              key={match.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel border border-white/10 relative p-8 lg:p-12 hover:border-orange-karasuno/30 transition-all duration-300"
            >
              {/* Top Magazine Label */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-8 text-[10px] font-oswald text-soft-gray tracking-widest">
                <span>SPORTS ENGINEERING MONTHLY // PAGE {idx * 2 + 12}</span>
                <span className="text-orange-karasuno font-bold">MATCH RECORD: {idx + 1}</span>
              </div>

              {/* Layout Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Column 1: Match Stats & Image Placeholder (lg:col-span-4) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Premium screenshot placeholder */}
                  <div className="relative aspect-video w-full bg-[#0B0B0B] border border-white/15 overflow-hidden flex items-center justify-center group/img">
                    {match.image ? (
                      <Image 
                        src={match.image} 
                        alt={match.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500"
                      />
                    ) : (
                      <>
                        {/* SVG court texture overlay inside image */}
                        <div className="absolute inset-0 tactical-grid opacity-[0.08]"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-orange-karasuno/20"></div>
                        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-orange-karasuno/20"></div>
                        
                        {/* Camera lens indicator / crosshair */}
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center relative group-hover/img:scale-110 transition-transform duration-300">
                          <Eye className="w-4.5 h-4.5 text-white/20 group-hover/img:text-orange-karasuno transition-colors" />
                        </div>
                      </>
                    )}
                    
                    <span className="absolute bottom-2 left-3 font-oswald text-[8px] text-white/30 tracking-widest bg-black/60 px-1.5 py-0.5 z-10">
                      {match.imageAccentText}
                    </span>
                    <span className="absolute top-2 right-3 font-oswald text-[8px] text-orange-karasuno font-bold tracking-widest bg-black/60 px-1.5 py-0.5 z-10">
                      [SYS_ONLINE]
                    </span>
                  </div>

                  {/* Match Stats Table */}
                  <div className="bg-[#0B0B0B] border border-white/5 p-4">
                    <h4 className="font-bebas text-lg text-white tracking-widest mb-3 border-b border-white/10 pb-1">
                      MATCH STATISTICS
                    </h4>
                    <div className="space-y-2">
                      {match.stats.map((stat) => (
                        <div key={stat.label} className="flex justify-between items-center text-xs">
                          <span className="text-soft-gray font-light uppercase">{stat.label}</span>
                          <span className="font-oswald text-white font-semibold">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Main Story (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="font-bebas text-4xl text-white tracking-wide leading-none group-hover:text-orange-karasuno transition-colors">
                    {match.name}
                  </h3>
                  <div className="font-oswald text-xs text-orange-karasuno uppercase tracking-widest font-bold">
                    {match.headline}
                  </div>
                  <div className="text-[10px] font-oswald text-white/60 tracking-wider uppercase">
                    Role: {match.role}
                  </div>
                  <p className="text-soft-gray text-sm leading-relaxed font-light">
                    {match.summary}
                  </p>

                  <div className="space-y-2.5 pt-4">
                    <h5 className="font-oswald text-xs uppercase tracking-widest text-white font-semibold">
                      Key Highlights & Tactics:
                    </h5>
                    <ul className="space-y-2">
                      {match.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-soft-gray font-light">
                          <span className="w-1.5 h-1.5 bg-orange-karasuno mt-1.5 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {match.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-white/5 border border-white/5 text-[9px] font-oswald uppercase text-white/80 tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Engineering Maturity Specs Grid */}
                  <div className="pt-5 border-t border-white/10 mt-5">
                    <h5 className="font-oswald text-[10px] uppercase tracking-widest text-orange-karasuno font-bold mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-orange-karasuno"></span>
                      ENGINEERING SPECIFICATIONS // MATURITY
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <div className="bg-[#0B0B0B]/60 border border-white/5 p-2 hover:border-orange-karasuno/20 transition-colors duration-200">
                        <span className="block text-[8px] uppercase tracking-wider text-soft-gray font-light">Git Workflow</span>
                        <span className="block text-[9.5px] font-semibold text-white/90 mt-0.5 font-oswald uppercase tracking-wide truncate" title={match.maturitySpecs.git}>{match.maturitySpecs.git}</span>
                      </div>
                      <div className="bg-[#0B0B0B]/60 border border-white/5 p-2 hover:border-orange-karasuno/20 transition-colors duration-200">
                        <span className="block text-[8px] uppercase tracking-wider text-soft-gray font-light">API Integrations</span>
                        <span className="block text-[9.5px] font-semibold text-white/90 mt-0.5 font-oswald uppercase tracking-wide truncate" title={match.maturitySpecs.api}>{match.maturitySpecs.api}</span>
                      </div>
                      <div className="bg-[#0B0B0B]/60 border border-white/5 p-2 hover:border-orange-karasuno/20 transition-colors duration-200">
                        <span className="block text-[8px] uppercase tracking-wider text-soft-gray font-light">Authentication</span>
                        <span className="block text-[9.5px] font-semibold text-white/90 mt-0.5 font-oswald uppercase tracking-wide truncate" title={match.maturitySpecs.auth}>{match.maturitySpecs.auth}</span>
                      </div>
                      <div className="bg-[#0B0B0B]/60 border border-white/5 p-2 hover:border-orange-karasuno/20 transition-colors duration-200">
                        <span className="block text-[8px] uppercase tracking-wider text-soft-gray font-light">Deployment</span>
                        <span className="block text-[9.5px] font-semibold text-white/90 mt-0.5 font-oswald uppercase tracking-wide truncate" title={match.maturitySpecs.deployment}>{match.maturitySpecs.deployment}</span>
                      </div>
                      <div className="bg-[#0B0B0B]/60 border border-white/5 p-2 hover:border-orange-karasuno/20 transition-colors duration-200">
                        <span className="block text-[8px] uppercase tracking-wider text-soft-gray font-light">Responsive Design</span>
                        <span className="block text-[9.5px] font-semibold text-white/90 mt-0.5 font-oswald uppercase tracking-wide truncate" title={match.maturitySpecs.responsiveness}>{match.maturitySpecs.responsiveness}</span>
                      </div>
                      <div className="bg-[#0B0B0B]/60 border border-white/5 p-2 hover:border-orange-karasuno/20 transition-colors duration-200">
                        <span className="block text-[8px] uppercase tracking-wider text-soft-gray font-light">State Management</span>
                        <span className="block text-[9.5px] font-semibold text-white/90 mt-0.5 font-oswald uppercase tracking-wide truncate" title={match.maturitySpecs.state}>{match.maturitySpecs.state}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Tactical breakdown sidebar (lg:col-span-3) */}
                <div className="lg:col-span-3 h-full flex flex-col justify-between gap-6 lg:border-l lg:border-white/10 lg:pl-6">
                  {/* Coach Playbook Notes */}
                  <div className="p-4 bg-[#1F2937]/10 border border-white/5 notebook-lines relative">
                    <div className="absolute top-2 right-2 font-oswald text-[7px] text-white/20 tracking-wider">
                      PLAYBOOK_ARCH_FILE
                    </div>
                    <h5 className="font-oswald text-xs uppercase tracking-widest text-orange-karasuno font-bold mb-2.5">
                      Tactical Retrospective:
                    </h5>
                    <p className="text-soft-gray text-[11px] leading-relaxed font-light">
                      {match.tacticalBreakdown}
                    </p>
                  </div>

                  {/* Match Highlights CTAs */}
                  <div className="flex flex-col gap-2">
                    <a
                      href={match.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 font-oswald text-[10px] text-white uppercase tracking-widest hover:bg-orange-karasuno hover:border-orange-karasuno transition-all duration-300 group"
                    >
                      <span>Inspect Codebase</span>
                      <Github className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                    </a>
                    <a
                      href={match.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-[#0B0B0B] border border-orange-karasuno/20 font-oswald text-[10px] text-orange-karasuno uppercase tracking-widest hover:border-orange-karasuno hover:bg-orange-karasuno hover:text-white transition-all duration-300 group"
                    >
                      <span>Demo Link</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </motionFramer.div>
          ))}
        </div>

      </div>
    </section>
  );
}
