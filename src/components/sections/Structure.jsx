"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

// Typing Effect Component
const TypeWriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset when language changes
  useEffect(() => {
    setDisplayedText("");
    setIsDeleting(false);
  }, [text]);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < text.length) {
            setDisplayedText(text.slice(0, displayedText.length + 1));
          } else {
            // Pause for 2 seconds before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(text.slice(0, displayedText.length - 1));
          } else {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 30 : 100,
    ); // Typing speed and Deleting speed

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

  return (
    <span className="inline-flex items-center min-h-[1.5em]">
      <span>{displayedText}</span>
      <span className="h-[1.2em] w-[2.5px] bg-blue-600 dark:bg-blue-400 ms-1 animate-pulse rounded-full"></span>
    </span>
  );
};

export default function Structure() {
  const { content, lang } = useLanguage();
  if (!content) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const isRtl = lang === "ar";

  // Dividing the team into Founders (First 2) and Rest of the Team
  const founders = content.structure.team.slice(0, 2);
  const teamMembers = content.structure.team.slice(2);

  // Card Component for Reusability
  const TeamCard = ({ member, idx }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="relative rounded-3xl p-[2px] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-shadow duration-500 h-full"
    >
      {/* Rotating Border Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0 180deg, #3b82f6 270deg, transparent 360deg)",
        }}
      />

      {/* Card Content */}
      <div className="relative bg-white dark:bg-[#0c0c0c] rounded-[calc(1.5rem-2px)] p-8 h-full z-10 flex flex-col">
        <div className="absolute inset-0 bg-blue-50/30 dark:bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[calc(1.5rem-2px)]"></div>

        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-2 h-16 md:h-8">
            <TypeWriter text={member.name} />
          </h3>
          <h4 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-5 leading-snug">
            {member.role}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            {member.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="structure"
      className="py-24 relative z-10 bg-gray-50/50 dark:bg-[#050505] transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight uppercase drop-shadow-sm text-center">
            {content.structure.title}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
        </motion.div>

        {/* Founders Row (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-5xl mx-auto">
          {founders.map((member, idx) => (
            <TeamCard key={`founder-${idx}`} member={member} idx={idx} />
          ))}
        </div>

        {/* Rest of the Team Row (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={`team-${idx}`} member={member} idx={idx + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
