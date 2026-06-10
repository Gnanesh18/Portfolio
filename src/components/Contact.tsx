"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Copy, Check, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactOptions = [
  {
    id: "email",
    label: "Draft via Email",
    value: "appugnanesh655@gmail.com",
    display: "appugnanesh655@gmail.com",
    icon: Mail,
    link: "mailto:appugnanesh655@gmail.com"
  },
  {
    id: "phone",
    label: "Scout Hotline (Phone)",
    value: "+919535197496",
    display: "+91 95351 97496",
    icon: Phone,
    link: "tel:+919535197496"
  },
  {
    id: "linkedin",
    label: "Professional Scouting",
    value: "https://linkedin.com/in/gnanesh-kc",
    display: "linkedin.com/in/gnanesh-kc",
    icon: Linkedin,
    link: "https://linkedin.com/in/gnanesh-kc"
  },
  {
    id: "github",
    label: "Inspect Practice Repos",
    value: "https://github.com/Gnanesh18",
    display: "github.com/Gnanesh18",
    icon: Github,
    link: "https://github.com/Gnanesh18"
  },
  {
    id: "location",
    label: "Training Court Location",
    value: "Bengaluru, India",
    display: "Bengaluru, India",
    icon: MapPin,
    link: "https://maps.google.com/?q=Bengaluru"
  }
];

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleCopy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy coordinates:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "37485147-87e3-4050-81e3-59f7460d1f4d",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("SUCCESS");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      {/* Background patterns */}
      <div className="absolute inset-0 tactical-grid opacity-[0.03] pointer-events-none"></div>
      
      {/* Left divider line */}
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 lg:ml-12 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-orange-karasuno"></span>
            <span className="font-oswald text-xs uppercase tracking-[0.3em] text-orange-karasuno font-bold">
              JOIN THE SQUAD // RECRUITMENT
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wide">
            JOIN THE TEAM
          </h2>
          <p className="font-oswald text-xl text-orange-karasuno uppercase tracking-wide mt-2">
            "Let's build something meaningful together."
          </p>
          <p className="text-soft-gray text-sm max-w-lg mt-2 mx-auto lg:mx-0 font-light leading-relaxed">
            Ready to jump in? Draft me as a full-time Full Stack Developer or collaborate on a high-stakes project. Reach out via the playbook form or the coordinates below.
          </p>
        </div>

        {/* Layout Grid: Form on left, Info cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:ml-12">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-6 bg-[#0F0F0F] border border-white/5 p-8 relative flex flex-col justify-between hover:border-orange-karasuno/20 transition-all duration-300">
            {/* Scouter details watermark */}
            <div className="absolute top-2 right-3 font-oswald text-[8px] text-white/20 tracking-wider">
              FORM_TRANSMISSION // REC_01
            </div>

            <div>
              <h3 className="font-bebas text-3xl text-white tracking-wide mb-6">
                DRAFT GNANESH (SEND MESSAGE)
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-oswald text-[9px] uppercase tracking-widest text-soft-gray font-bold mb-2">
                    Player scout name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Organization"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-karasuno focus:ring-1 focus:ring-orange-karasuno transition-colors placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block font-oswald text-[9px] uppercase tracking-widest text-soft-gray font-bold mb-2">
                    Scout email address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="scout@organization.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-karasuno focus:ring-1 focus:ring-orange-karasuno transition-colors placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block font-oswald text-[9px] uppercase tracking-widest text-soft-gray font-bold mb-2">
                    Scout message / offer details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, role, or team specs..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-karasuno focus:ring-1 focus:ring-orange-karasuno transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "SENDING"}
                  className="w-full bg-orange-karasuno text-white font-oswald text-xs uppercase tracking-widest py-4 border border-orange-karasuno hover:bg-transparent hover:text-orange-karasuno transition-all duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>{status === "SENDING" ? "TRANSMITTING..." : "SUBMIT DRAFT FORM"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                {status === "SUCCESS" && (
                  <p className="text-orange-karasuno font-oswald text-xs uppercase tracking-wider text-center mt-2 text-glow">
                    MESSAGE DELIVERED! Gnanesh will get back to you shortly.
                  </p>
                )}
                {status === "ERROR" && (
                  <p className="text-red-500 font-oswald text-xs uppercase tracking-wider text-center mt-2">
                    TRANSMISSION FAILED. Please try copy-pasting the email address directly.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right: Contact Coordinates Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactOptions.map((option, idx) => {
                const Icon = option.icon;
                const isCopied = copiedId === option.id;

                return (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`glass-panel p-6 border border-white/5 relative flex flex-col justify-between hover:border-orange-karasuno/40 transition-all duration-300 group ${
                      idx === contactOptions.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    {/* corner number label */}
                    <div className="absolute top-2 right-3 font-oswald text-[8px] text-white/20 tracking-wider">
                      COORD_0{idx + 1}
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/5 border border-white/10 text-orange-karasuno group-hover:bg-orange-karasuno group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-oswald text-[9px] uppercase tracking-widest text-soft-gray font-bold block mb-1">
                          {option.label}
                        </span>
                        <a
                          href={option.link}
                          target={option.id !== "email" ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-bebas text-2xl text-white tracking-wider hover:text-orange-karasuno transition-colors break-all leading-tight"
                        >
                          {option.display}
                        </a>
                      </div>
                    </div>

                    {/* Clipboard CTA bar */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-oswald tracking-widest uppercase">
                      <span className="text-soft-gray/50">[CLICK TO COPY]</span>
                      <button
                        onClick={() => handleCopy(option.value, option.id)}
                        className="flex items-center gap-1.5 text-orange-karasuno hover:text-white transition-colors cursor-pointer"
                        aria-label={`Copy ${option.label}`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3px]" />
                            <span className="text-glow font-bold">COPIED!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY COORD</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
