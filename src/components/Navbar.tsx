"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Training Arc", href: "#training-arc" },
  { name: "Player Stats", href: "#player-stats" },
  { name: "Match Highlights", href: "#match-highlights" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll height to add darker background and update active sections
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const scrollPosition = window.scrollY + 200; // Offset for header trigger

      for (const item of navItems) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky nav
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 font-bebas text-2xl tracking-wider hover:text-orange-karasuno transition-colors group"
          >
            <span>GNANESH</span>
            <span className="text-orange-karasuno group-hover:text-white transition-colors">K C</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 glass-panel px-6 py-2 rounded-full border border-white/5 bg-[#0B0B0B]/40">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative font-oswald text-xs uppercase tracking-widest py-1 px-2 transition-all duration-200 hover:text-white ${
                        isActive ? "text-orange-karasuno font-semibold" : "text-soft-gray"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-orange-karasuno rounded-full shadow-[0_0_8px_#FF6B00]"></span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Recruiter CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group flex items-center gap-1.5 bg-orange-karasuno text-white font-oswald text-xs uppercase tracking-widest px-5 py-2.5 rounded-none border border-orange-karasuno hover:bg-transparent hover:text-orange-karasuno transition-all duration-300"
            >
              <span>Draft Player</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-orange-karasuno transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#0B0B0B] z-30 transition-all duration-500 lg:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Decorative Grid Line in mobile drawer */}
        <div className="absolute inset-0 tactical-grid opacity-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-1/4 w-[1px] bg-orange-karasuno/10"></div>

        <div className="flex flex-col gap-8 max-w-sm mx-auto w-full z-10">
          <div className="text-[10px] tracking-[0.3em] font-oswald text-soft-gray uppercase">
            NAVIGATION ARCHIVE
          </div>
          <ul className="flex flex-col gap-6">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block font-bebas text-5xl tracking-wide uppercase transition-all duration-300 hover:translate-x-2 ${
                      isActive ? "text-orange-karasuno text-glow" : "text-white"
                    }`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-[1px] bg-white/10 my-4"></div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center justify-between bg-orange-karasuno text-white font-oswald text-sm uppercase tracking-widest px-6 py-4 rounded-none hover:bg-white hover:text-[#0B0B0B] transition-colors"
          >
            <span>JOIN THE TEAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
