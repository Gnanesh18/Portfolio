"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<SVGSVGElement>(null);
  const courtRef = useRef<SVGSVGElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  const triggerServeAnimation = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Trigger parent state update to unmount loading screen
        onComplete();
      }
    });

    // 1. Squash the ball slightly before the serve (anticipation)
    tl.to(ballRef.current, {
      scaleY: 0.7,
      scaleX: 1.2,
      duration: 0.15,
      ease: "power2.inOut",
    });

    // 2. Smash serve upward aggressively with stretch effect
    tl.to(ballRef.current, {
      scaleY: 1.8,
      scaleX: 0.6,
      y: -800,
      duration: 0.4,
      ease: "power3.in",
    }, "+=0.05");

    // 3. Simultaneously reveal orange motion streaks
    tl.fromTo(".motion-streak", 
      { strokeDashoffset: 400, opacity: 0 },
      { strokeDashoffset: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
      "-=0.4"
    );

    // 4. Fade out text and stats
    tl.to([statsRef.current, titleRef.current, percentRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.05
    }, "-=0.3");

    // 5. Swipe screen up (curtain effect)
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power4.inOut"
    }, "-=0.1");
  }, [onComplete]);

  // Progress Counter Simulation
  useEffect(() => {
    const duration = 3000; // 3 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        triggerServeAnimation();
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [triggerServeAnimation]);

  // GSAP animations for incremental reveals
  useEffect(() => {
    if (progress === 0) return;

    // As progress ticks up, animate the volleyball's vertical position
    // Rising from bottom (y: 200) to center (y: 0)
    const yVal = 200 - (progress / 100) * 200;
    const rotateVal = (progress / 100) * 360;
    
    gsap.to(ballRef.current, {
      y: yVal,
      rotation: rotateVal,
      duration: 0.1,
      ease: "power1.out",
    });

    // Animate stats reveal at milestones
    if (progress === 25) {
      gsap.to(".stat-item-1", { opacity: 1, x: 0, duration: 0.5 });
      gsap.to(".court-line-1", { strokeDashoffset: 0, duration: 1 });
    } else if (progress === 50) {
      gsap.to(".stat-item-2", { opacity: 1, x: 0, duration: 0.5 });
      gsap.to(".court-line-2", { strokeDashoffset: 0, duration: 1 });
      gsap.to(".arrow-path-1", { strokeDashoffset: 0, duration: 1 });
    } else if (progress === 75) {
      gsap.to(".stat-item-3", { opacity: 1, x: 0, duration: 0.5 });
      gsap.to(".court-line-3", { strokeDashoffset: 0, duration: 1 });
      gsap.to(".arrow-path-2", { strokeDashoffset: 0, duration: 1 });
    }
  }, [progress]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#0B0B0B] z-50 flex flex-col justify-between items-center py-12 px-6 overflow-hidden select-none"
    >
      {/* Top Header Text */}
      <div 
        ref={titleRef}
        className="text-center font-oswald text-xs uppercase tracking-[0.4em] text-soft-gray space-y-1 z-10"
      >
        <div>MCA Student</div>
        <div className="text-orange-karasuno font-bold">Full Stack Developer</div>
      </div>

      {/* Center Court Lines & Volleyball Animation Area */}
      <div className="relative flex-1 w-full max-w-4xl flex items-center justify-center">
        {/* SVG Tactical Court Overlay */}
        <svg
          ref={courtRef}
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Volleyball Court Outlines */}
          <line
            x1="100" y1="100" x2="700" y2="100"
            className="court-line-1 stroke-white/20 stroke-2"
            strokeDasharray="600"
            strokeDashoffset="600"
          />
          <line
            x1="100" y1="500" x2="700" y2="500"
            className="court-line-1 stroke-white/20 stroke-2"
            strokeDasharray="600"
            strokeDashoffset="600"
          />
          <line
            x1="100" y1="100" x2="100" y2="500"
            className="court-line-2 stroke-white/20 stroke-2"
            strokeDasharray="400"
            strokeDashoffset="400"
          />
          <line
            x1="700" y1="100" x2="700" y2="500"
            className="court-line-2 stroke-white/20 stroke-2"
            strokeDasharray="400"
            strokeDashoffset="400"
          />
          {/* Center Net Line */}
          <line
            x1="400" y1="100" x2="400" y2="500"
            className="court-line-3 stroke-orange-karasuno/40 stroke-2"
            strokeDasharray="400"
            strokeDashoffset="400"
          />
          {/* Attack Lines (3m lines) */}
          <line
            x1="300" y1="100" x2="300" y2="500"
            className="court-line-3 stroke-white/10 stroke-1 stroke-dasharray-[5_5]"
            strokeDasharray="400"
            strokeDashoffset="400"
          />
          <line
            x1="500" y1="100" x2="500" y2="500"
            className="court-line-3 stroke-white/10 stroke-1 stroke-dasharray-[5_5]"
            strokeDasharray="400"
            strokeDashoffset="400"
          />

          {/* Tactical Serve & Spike Arrows */}
          <path
            d="M 150 450 Q 300 200 450 350"
            fill="none"
            className="arrow-path-1 stroke-orange-karasuno stroke-2"
            strokeWidth="2"
            strokeDasharray="500"
            strokeDashoffset="500"
            markerEnd="url(#arrow)"
          />
          <path
            d="M 450 350 L 650 150"
            fill="none"
            className="arrow-path-2 stroke-white stroke-2"
            strokeDasharray="300"
            strokeDashoffset="300"
            markerEnd="url(#arrow-white)"
          />

          {/* Orange Motion Streaks (Serve upwards) */}
          <path
            d="M 400 300 L 400 -200"
            className="motion-streak stroke-orange-karasuno stroke-[8px] opacity-0"
            strokeDasharray="500"
            strokeDashoffset="500"
            strokeLinecap="round"
          />
          <path
            d="M 380 250 L 380 -150"
            className="motion-streak stroke-orange-karasuno/50 stroke-4 opacity-0"
            strokeDasharray="400"
            strokeDashoffset="400"
            strokeLinecap="round"
          />
          <path
            d="M 420 250 L 420 -150"
            className="motion-streak stroke-white/40 stroke-4 opacity-0"
            strokeDasharray="400"
            strokeDashoffset="400"
            strokeLinecap="round"
          />

          {/* Markers definitions */}
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF6B00" />
            </marker>
            <marker
              id="arrow-white"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFFFFF" />
            </marker>
          </defs>
        </svg>

        {/* Dynamic Match Stats Panel (Scouter Interface style) */}
        <div
          ref={statsRef}
          className="absolute left-6 bottom-6 space-y-3 font-oswald text-[10px] tracking-widest text-soft-gray z-10 hidden md:block"
        >
          <div className="stat-item-1 opacity-0 -translate-x-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-karasuno block"></span>
            <span>SYSTEM INIT: SUCCESS</span>
          </div>
          <div className="stat-item-2 opacity-0 -translate-x-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white block"></span>
            <span>STRATEGY: FULL STACK DEPLOYMENT</span>
          </div>
          <div className="stat-item-3 opacity-0 -translate-x-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-karasuno block"></span>
            <span>TEAMWORK: SYNCHRONIZED ARCHITECTURE</span>
          </div>
        </div>

        {/* Tactical board numbers (Scouter style) */}
        <div className="absolute right-6 top-6 text-right font-oswald text-[10px] tracking-wider text-soft-gray/50 hidden md:block select-none">
          <div>MATCH STATUS: TRAINING ARC</div>
          <div>RECORD: 05-00</div>
          <div>POWER LEVEL: MAX</div>
        </div>

        {/* Vector Volleyball Graphic */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg
            ref={ballRef}
            className="w-24 h-24 text-white z-20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transformOrigin: "center center" }}
          >
            {/* Volleyball base outline */}
            <circle cx="50" cy="50" r="46" stroke="#FFFFFF" strokeWidth="2.5" fill="#0B0B0B" />
            
            {/* Panel Lines (Volleyball Seams) */}
            {/* Section 1 */}
            <path
              d="M 12 35 C 28 25, 45 28, 50 50"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <path
              d="M 22 22 C 34 16, 44 20, 50 50"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* Section 2 */}
            <path
              d="M 50 50 C 52 72, 42 84, 18 80"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <path
              d="M 50 50 C 35 65, 25 70, 32 88"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* Section 3 */}
            <path
              d="M 50 50 C 70 42, 80 25, 68 12"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <path
              d="M 50 50 C 60 30, 68 25, 84 25"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* Section 4 */}
            <path
              d="M 50 50 C 72 55, 85 70, 88 50"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <path
              d="M 50 50 C 65 72, 72 82, 55 88"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* Subtle Orange Panel Highlight for Karasuno */}
            <path
              d="M 12 35 C 28 25, 45 28, 50 50 C 35 65, 25 70, 32 88 C 22 84, 15 78, 12 70 Z"
              fill="#FF6B00"
              fillOpacity="0.15"
            />
            
            {/* Tiny volleyball center detail */}
            <circle cx="50" cy="50" r="2.5" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* Bottom Progress Tracker */}
      <div 
        ref={percentRef}
        className="w-full max-w-xs flex flex-col items-center gap-4 z-10"
      >
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-orange-karasuno transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between w-full font-bebas text-2xl tracking-widest">
          <span className="text-soft-gray text-base self-end font-sans uppercase">LOADING ARC</span>
          <span className="text-orange-karasuno text-glow font-bold text-4xl">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
