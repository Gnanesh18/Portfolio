"use client";

import { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainingArc from "@/components/TrainingArc";
import PlayerStats from "@/components/PlayerStats";
import MatchHighlights from "@/components/MatchHighlights";
import TournamentRecord from "@/components/TournamentRecord";
import PlayerProfile from "@/components/PlayerProfile";
import Contact from "@/components/Contact";
import SeasonJourney from "@/components/SeasonJourney";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 2000], [0.30, 0]);
  const y = useTransform(scrollY, [0, 2000], [0, -100]);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white selection:bg-orange-karasuno selection:text-white relative">
          {/* Subtle Parallax Background Portrait */}
          <motion.div
            style={{ opacity, y }}
            className="fixed left-0 top-0 w-full md:w-[45%] h-screen pointer-events-none z-0 overflow-hidden"
          >
            {/* Grayscale styled portrait image */}
            <div 
              className="absolute inset-0 bg-cover bg-left md:bg-center grayscale contrast-[1.2] brightness-[0.45] mix-blend-luminosity"
              style={{ backgroundImage: "url('/portrait.jpg')" }}
            />
            {/* Edge blending gradients to merge into the dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-karasuno/15 via-transparent to-transparent mix-blend-color"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0B0B]"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B0B0B] w-[15%]"></div>
          </motion.div>

          {/* Main Floating Navbar */}
          <Navbar />

          {/* Floating Vertical HUD Scroll-tracker */}
          <SeasonJourney />

          <main className="flex-1 flex flex-col relative z-10 bg-transparent">
            {/* Hero Section */}
            <Hero />

            {/* Timeline: Training Arc */}
            <TrainingArc />

            {/* Skills: Player Stats */}
            <PlayerStats />

            {/* Projects: Match Highlights */}
            <MatchHighlights />

            {/* Achievements: Tournament Record */}
            <TournamentRecord />

            {/* Resume Details: Player Profile */}
            <PlayerProfile />

            {/* Contact Coordinates: Join the Team */}
            <Contact />
          </main>

          {/* Footer Quote & Signatures */}
          <Footer />
        </div>
      )}
    </>
  );
}
