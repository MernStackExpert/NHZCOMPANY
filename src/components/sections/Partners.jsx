"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import React, { useState } from "react";

export default function Partners() {
  const { content } = useLanguage();
  const [selectedLogo, setSelectedLogo] = useState(null);

  if (!content) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // এখানে প্রতিটি লোগোর জন্য তার নিজস্ব ব্র্যান্ড কালার সেট করা হয়েছে।
  // আপনি চাইলে আপনার অরিজিনাল লোগোর কালার অনুযায়ী এই Hex Code গুলো পরিবর্তন করে নিতে পারেন।
  const partnerData = [
    { src: "/partners/1.png", color: "#10b981" }, // Green
    { src: "/partners/2.png", color: "#3b82f6" }, // Blue
    { src: "/partners/3.png", color: "#f59e0b" }, // Yellow/Orange
    { src: "/partners/4.png", color: "#ef4444" }, // Red
    { src: "/partners/5.png", color: "#8b5cf6" }, // Purple
    { src: "/partners/6.png", color: "#14b8a6" }, // Teal
    { src: "/partners/7.png", color: "#f97316" }, // Orange
    { src: "/partners/8.png", color: "#0ea5e9" }, // Sky
    { src: "/partners/9.png", color: "#84cc16" }, // Lime
    { src: "/partners/10.png", color: "#eab308" }, // Yellow
    { src: "/partners/11.png", color: "#d946ef" }, // Fuchsia
    { src: "/partners/12.png", color: "#06b6d4" }, // Cyan
    { src: "/partners/13.png", color: "#6366f1" }, // Indigo
    { src: "/partners/14.png", color: "#f43f5e" }, // Rose
    { src: "/partners/15.png", color: "#22c55e" }, // Green
    { src: "/partners/16.png", color: "#3b82f6" }, // Blue
    { src: "/partners/17.png", color: "#f59e0b" }, // Yellow/Orange
    { src: "/partners/18.png", color: "#ef4444" }, // Red
    { src: "/partners/19.png", color: "#8b5cf6" }, // Purple
    { src: "/partners/20.png", color: "#14b8a6" }, // Teal
    { src: "/partners/21.png", color: "#f97316" }, // Orange
  ];

  const duplicatedLogos = [...partnerData, ...partnerData];

  return (
    <section
      id="partners"
      className="py-24 relative z-10 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight uppercase drop-shadow-sm text-center">
            {content.partners.title}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
        </motion.div>
      </div>

      {/* dir="ltr" যুক্ত করা হয়েছে যাতে আরবি ভাষাতেও স্লাইডার ঠিক থাকে */}
      <div className="relative w-full mb-24 overflow-hidden" dir="ltr">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex w-max items-center gap-8 md:gap-12 px-4"
        >
          {duplicatedLogos.map((partner, index) => (
            <div
              key={index}
              className="relative w-36 h-24 md:w-48 md:h-32 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm flex items-center justify-center p-4 md:p-6 flex-shrink-0 transition-transform duration-300 hover:scale-105 group"
            >
              <Image
                src={partner.src}
                alt={`Partner`}
                fill
                className="object-contain p-4 md:p-6"
                onError={(e) => {
                  e.currentTarget.src = "/nhzcompany.png";
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {partnerData.map((partner, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedLogo(partner.src)}
              className="relative aspect-[3/2] rounded-2xl p-[2px] overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(255,255,255,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0 180deg, ${partner.color} 270deg, transparent 360deg)`,
                }}
              />

              <div className="relative w-full h-full bg-white dark:bg-[#0c0c0c] rounded-[calc(1rem-2px)] flex items-center justify-center overflow-hidden z-10">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: partner.color }}
                ></div>
                <Image
                  src={partner.src}
                  alt={`Partner ${idx + 1}`}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/nhzcompany.png";
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLogo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[16/9] md:aspect-auto md:h-[70vh] bg-white dark:bg-[#0c0c0c] rounded-3xl p-8 cursor-default shadow-2xl border border-gray-100 dark:border-white/10 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent dark:from-white/5 pointer-events-none"></div>

              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors z-20 text-gray-700 dark:text-gray-300"
              >
                <X size={24} />
              </button>

              <div className="relative w-full h-full max-w-2xl max-h-[80%]">
                <Image
                  src={selectedLogo}
                  alt="Enlarged Partner Logo"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/nhzcompany.png";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
