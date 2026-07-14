"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import React from "react";

export default function About() {
  const { content, lang } = useLanguage();

  if (!content) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const isRtl = lang === "ar";

  const highlightNHZ = (text) => {
    if (!text) return text;
    const regex =
      /(NHZ Contracting Company|شركة نهز للمقاولات|NHZ General Contractors|شركة نهز للمقاولات العامة)/gi;
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <strong key={i} className="font-bold text-blue-600 dark:text-blue-400">
          {part}
        </strong>
      ) : (
        part
      ),
    );
  };

  return (
    <section
      id="about"
      className="py-20 relative z-10 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            {content.about.title}
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scaleUp}
          className="relative w-full aspect-video max-h-[500px] rounded-3xl overflow-hidden mb-20 group bg-black shadow-2xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          >
            <source src="/about-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500"></div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 20px rgba(255,255,255,0.5)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40"
            >
              <Play className="text-white fill-white ml-1" size={28} />
            </motion.div>
          </div>

          <div
            className={`absolute bottom-6 md:bottom-10 ${isRtl ? "right-6 md:right-10" : "left-6 md:left-10"} text-white z-10 max-w-2xl`}
          >
            <p className="inline-block px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white font-bold tracking-wider uppercase mb-3 text-[10px] md:text-xs rounded-full">
              NHZ General Contractors
            </p>
            <h3 className="text-xl md:text-3xl font-bold leading-tight drop-shadow-lg text-white">
              {content.hero.subtitle}
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed text-justify">
              {highlightNHZ(content.about.desc1)}
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
              {highlightNHZ(content.about.desc2)}
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
              {highlightNHZ(content.about.desc3)}
            </p>

            <div className="mt-8 p-5 bg-gray-50 dark:bg-white/5 rounded-xl border-l-4 border-blue-600">
              <p className="italic text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
                {content.about.desc5}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-5 bg-white dark:bg-[#0a0a0a] p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] border border-gray-100 dark:border-white/10 flex flex-col h-full relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 blur-[50px] group-hover:bg-blue-500/30 transition-colors duration-700 pointer-events-none"></div>

            <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 dark:text-white relative z-10">
              {content.about.projectsTitle}
            </h3>

            <div className="space-y-2 mb-10 flex-1 relative z-10">
              {content.about.projectsList.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{
                    x: isRtl ? -8 : 8,
                    backgroundColor: "rgba(37, 99, 235, 0.05)",
                  }}
                  className="flex items-start gap-3 p-3 rounded-xl cursor-default transition-colors duration-300"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      filter: [
                        "drop-shadow(0 0 0px rgba(59,130,246,0))",
                        "drop-shadow(0 0 8px rgba(59,130,246,0.6))",
                        "drop-shadow(0 0 0px rgba(59,130,246,0))",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                    className="mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                  >
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </motion.div>
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-snug font-medium">
                    {project}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative z-10 group/btn flex items-center justify-center gap-2 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer ${isRtl ? "flex-row-reverse" : ""}`}
            >
              <span>{content.about.profileBtn}</span>
              <ArrowRight
                className={`transition-transform duration-300 ${isRtl ? "group-hover/btn:-translate-x-1 rotate-180" : "group-hover/btn:translate-x-1"}`}
                size={18}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
