"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { content } = useLanguage();

  if (!content) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gray-50 dark:bg-[#050505] transition-colors duration-500"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200/50 via-transparent to-transparent dark:from-blue-900/30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-200/50 via-transparent to-transparent dark:from-indigo-900/20"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-white/30 dark:bg-black/40 backdrop-blur-[2px] transition-colors duration-500"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center mt-10"
      >
        <motion.div variants={fadeUp} className="relative mb-8">
          <div className="absolute inset-0 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-white/60 dark:bg-white/5 p-2 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.15)] dark:shadow-[0_0_40px_rgba(37,99,235,0.3)] flex items-center justify-center overflow-hidden transition-all duration-500">
            <Image
              src="/logo.png"
              alt="NHZ Company Logo"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide drop-shadow-sm dark:drop-shadow-lg transition-colors duration-500"
        >
          {content.hero.subtitle}
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-12 uppercase tracking-[0.2em] transition-colors duration-500"
        >
          {content.hero.title}
        </motion.h2>

        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] cursor-pointer"
        >
          {content.hero.btnText}
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
