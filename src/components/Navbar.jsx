"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import {
  Home,
  Info,
  Network,
  Briefcase,
  Handshake,
  Phone,
  Moon,
  Sun,
  Globe,
} from "lucide-react";

export default function Navbar() {
  const { lang, setLang, content } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { id: "home", icon: Home },
    { id: "about", icon: Info },
    { id: "structure", icon: Network },
    { id: "services", icon: Briefcase },
    { id: "partners", icon: Handshake },
    { id: "contact", icon: Phone },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          const offsetBottom = bottom + window.scrollY;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <>
      <div className="hidden md:flex fixed top-5 left-0 right-0 z-50 justify-center px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-7xl bg-[#e0e5ec]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl px-4 py-2.5 rounded-full flex items-center justify-between shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(25,25,25,0.5)] border border-white/20 dark:border-white/5"
        >
          <div
            className="cursor-pointer flex items-center justify-center pl-2 h-8 w-[120px] relative rounded-full hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(25,25,25,0.5)] transition-shadow duration-300"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/logo.png"
              alt="NHZ Logo"
              fill
              className="object-contain object-left p-1"
              priority
            />
          </div>

          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group rounded-full cursor-pointer p-[2px] overflow-hidden"
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, rotate: 360 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                          opacity: { duration: 0.3 }
                        }}
                        className="absolute inset-0 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_180deg,#3b82f6_270deg,transparent_360deg)]"
                      />
                    )}
                  </AnimatePresence>
                  
                  <div
                    className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 z-10 flex items-center justify-center
                    ${
                      isActive
                        ? "bg-[#e0e5ec] dark:bg-[#0a0a0a] text-blue-600 dark:text-blue-400 shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8),inset_-4px_-4px_8px_rgba(25,25,25,0.6)]"
                        : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <span>{content.nav[item.id]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 pr-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="group flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full cursor-pointer bg-[#e0e5ec] dark:bg-[#0a0a0a] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.8)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(25,25,25,0.5)] hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(25,25,25,0.5)] transition-all duration-300"
            >
              <Globe
                size={16}
                className="group-hover:rotate-180 transition-transform duration-500"
              />
              <span>{content.nav.lang}</span>
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group p-2.5 rounded-full text-gray-700 dark:text-gray-300 cursor-pointer bg-[#e0e5ec] dark:bg-[#0a0a0a] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.8)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(25,25,25,0.5)] hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(25,25,25,0.5)] transition-all duration-300"
            >
              <div className="group-hover:rotate-12 transition-transform duration-300">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed top-0 w-full z-50 bg-[#e0e5ec] dark:bg-[#0a0a0a] px-6 py-4 flex items-center justify-between shadow-[0_4px_10px_rgba(163,177,198,0.3)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-b border-white/20 dark:border-white/5"
      >
        <div
          className="relative h-8 w-[110px] cursor-pointer rounded-full hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(25,25,25,0.5)] transition-all duration-300 p-1"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/logo.png"
            alt="NHZ Logo"
            fill
            className="object-contain object-left p-1"
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 bg-[#e0e5ec] dark:bg-[#0a0a0a] px-3 py-1.5 rounded-full cursor-pointer shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(25,25,25,0.5)] hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(25,25,25,0.5)] transition-all duration-300"
          >
            <Globe size={14} />
            <span>{content.nav.lang}</span>
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 cursor-pointer bg-[#e0e5ec] dark:bg-[#0a0a0a] shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(25,25,25,0.5)] hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(25,25,25,0.5)] transition-all duration-300"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </motion.nav>

      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 120, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed bottom-6 left-6 right-6 z-50 bg-[#e0e5ec]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(25,25,25,0.5)] border border-white/20 dark:border-white/5 px-2 py-2 flex items-center justify-between"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative rounded-full cursor-pointer p-[2px] overflow-hidden"
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute inset-0 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_180deg,#3b82f6_270deg,transparent_360deg)]"
                  />
                )}
              </AnimatePresence>

              <div
                className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-300 z-10 
                ${
                  isActive
                    ? "bg-[#e0e5ec] dark:bg-[#0a0a0a] text-blue-600 dark:text-blue-400 shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8),inset_-4px_-4px_8px_rgba(25,25,25,0.6)]"
                    : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
              </div>
            </button>
          );
        })}
      </motion.nav>
    </>
  );
}