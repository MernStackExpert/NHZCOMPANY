"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
  const [hoveredItem, setHoveredItem] = useState(null);
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
          className="pointer-events-auto w-full max-w-7xl bg-white/40 dark:bg-[#0a0a0a]/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 dark:border-white/10 px-4 py-2.5 rounded-full flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.03)]"
        >
          <div
            className="cursor-pointer flex items-center justify-center pl-2 h-8 w-[120px] relative"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/logo.png"
              alt="NHZ Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className="relative z-10">{content.nav[item.id]}</span>

                {hoveredItem === item.id && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-gray-200/50 dark:bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {activeSection === item.id && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute bottom-1 left-4 right-4 h-[3px] bg-blue-600 dark:bg-blue-400 rounded-full z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 pr-1">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="group flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 transition-all bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 px-4 py-2 rounded-full border border-gray-200/50 dark:border-white/5 shadow-sm cursor-pointer"
            >
              <Globe
                size={16}
                className="group-hover:rotate-180 transition-transform duration-500"
              />
              <span>{content.nav.lang}</span>
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group p-2.5 rounded-full bg-white/50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-white/10 transition-all border border-gray-200/50 dark:border-white/5 shadow-sm cursor-pointer"
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
        className="md:hidden fixed top-0 w-full z-50 bg-white/40 dark:bg-[#0a0a0a]/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/40 dark:border-white/10 px-6 py-4 flex items-center justify-between shadow-sm"
      >
        <div
          className="relative h-7 w-[100px] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/logo.png"
            alt="NHZ Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-white/10 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-white/5 cursor-pointer"
          >
            <Globe size={14} />
            <span>{content.nav.lang}</span>
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-full bg-white/60 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/5 cursor-pointer"
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
        className="md:hidden fixed bottom-6 left-6 right-6 z-50 bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 dark:border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)] px-4 py-3 flex items-center justify-between"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative flex flex-col items-center justify-center p-2.5 cursor-pointer"
            >
              <div
                className={`transition-all duration-300 relative z-10 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 scale-110"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 scale-100"
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              {isActive && (
                <motion.div
                  layoutId="mobileActive"
                  className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </motion.nav>
    </>
  );
}
