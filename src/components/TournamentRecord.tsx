"use client";

import { motion } from "framer-motion";
import { Trophy, CheckCircle, ShieldCheck, Flame, Users, Award } from "lucide-react";

const tournamentRecords = [
  {
    event: "Kannada Ratna Title Award",
    bracket: "Honor / Language League",
    result: "TITLE OF 'KANNADA RATNA'",
    season: "Honor Award",
    icon: Award,
    details: "Honored with the prestigious 'Kannada Ratna' title for excellence and cultural contributions in the Kannada language."
  },
  {
    event: "Best Sports Person of the Year (SJPUC)",
    bracket: "Athletic MVP / Overall",
    result: "BEST SPORTS PERSON",
    season: "Season 2022",
    icon: Trophy,
    details: "Awarded the premier athletic achievement award of the year 2022 by St Joseph's Pre University College, Bengaluru."
  },
  {
    event: "Best Tennis Player of the Year (SJU)",
    bracket: "Athletic MVP / Tennis",
    result: "BEST TENNIS PLAYER // 3 YEARS",
    season: "Season 2022 - 2025",
    icon: Trophy,
    details: "Held the top tennis player ranking for three consecutive years representing St Joseph's University in competitive brackets. Ranked 277 in India and 22 in Karnataka in tennis rankings."
  },
  {
    event: "Offline technical training (SQE Systems)",
    bracket: "Industry Prep / Certification",
    result: "TECHNICAL DRILL COMPLETION",
    season: "Season 2025",
    icon: CheckCircle,
    details: "Completed verified offline workspace training at SQE Systems and Solutions, specializing in application lifecycles and testing."
  }
];

export default function TournamentRecord() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      {/* Background court lines overlay */}
      <div className="absolute inset-0 tactical-grid opacity-[0.03] pointer-events-none"></div>
      
      {/* Left divider line */}
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-20 lg:ml-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-orange-karasuno"></span>
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-orange-karasuno font-bold">
              CHAMPIONSHIP RECORDS // CREDENTIALS
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wide">
            TOURNAMENT RECORD
          </h2>
          <p className="text-soft-gray text-sm max-w-lg mt-2 font-light">
            Timeline of official competitive track records, certificates, academic standings, and team leadership placements.
          </p>
        </div>

        {/* Scorecard Table / Brackets */}
        <div className="lg:ml-12 border border-white/10 bg-[#0B0B0B] relative">
          
          {/* Header row for the Sports Stats board */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-[#1F2937]/25 border-b border-white/10 py-4 px-6 text-[10px] font-oswald text-soft-gray tracking-widest uppercase font-bold">
            <div className="col-span-4">TOURNAMENT / COMPETITION</div>
            <div className="col-span-2">BRACKET TYPE</div>
            <div className="col-span-4">RECORD SCORE / RESULT</div>
            <div className="col-span-2 text-right">SEASON</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/10">
            {tournamentRecords.map((record, idx) => {
              const Icon = record.icon;
              
              return (
                <motion.div
                  key={record.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center py-6 px-6 hover:bg-white/[0.02] transition-colors group relative"
                >
                  {/* Left accent bar on hover */}
                  <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-orange-karasuno scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>

                  {/* Mobile-only tags / Desktop layouts */}
                  <div className="col-span-12 md:col-span-4 flex items-start gap-3">
                    <div className="p-2 bg-white/5 border border-white/10 text-orange-karasuno shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-oswald text-sm font-semibold text-white tracking-wide leading-tight group-hover:text-orange-karasuno transition-colors">
                        {record.event}
                      </h4>
                      <p className="text-soft-gray text-[11px] font-light leading-relaxed mt-1 block md:hidden lg:block max-w-sm">
                        {record.details}
                      </p>
                    </div>
                  </div>

                  {/* Bracket type */}
                  <div className="col-span-12 md:col-span-2 flex items-center md:block">
                    <span className="text-[10px] md:hidden font-oswald text-soft-gray uppercase tracking-widest mr-2">Bracket:</span>
                    <span className="font-oswald text-[11px] text-soft-gray uppercase tracking-wider">
                      {record.bracket}
                    </span>
                  </div>

                  {/* Result score */}
                  <div className="col-span-12 md:col-span-4 flex items-center md:block">
                    <span className="text-[10px] md:hidden font-oswald text-soft-gray uppercase tracking-widest mr-2">Result:</span>
                    <span className="font-bebas text-lg text-orange-karasuno tracking-wider text-glow font-bold">
                      {record.result}
                    </span>
                  </div>

                  {/* Season year */}
                  <div className="col-span-12 md:col-span-2 flex items-center md:block md:text-right">
                    <span className="text-[10px] md:hidden font-oswald text-soft-gray uppercase tracking-widest mr-2">Season:</span>
                    <span className="font-oswald text-[11px] text-white/80 uppercase tracking-widest font-medium">
                      {record.season}
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
