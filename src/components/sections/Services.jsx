"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import React from "react";

export default function Services() {
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

  return (
    <section
      id="services"
      className="py-24 relative z-10 bg-gray-50/50 dark:bg-[#050505] transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col items-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight uppercase drop-shadow-sm">
            {content.services.title}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
        </motion.div>

        <div className="space-y-32">
          {content.services.items.map((service, index) => {
            const isEven = index % 2 === 0;
            const layoutDirection = isEven
              ? "lg:flex-row"
              : "lg:flex-row-reverse";

            const descParts = service.desc
              .split(".")
              .map((part) => part.trim())
              .filter((part) => part.length > 0);

            return (
              <div
                key={index}
                className={`flex flex-col ${layoutDirection} gap-12 lg:gap-16 items-center`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: isEven ? (isRtl ? 40 : -40) : isRtl ? -40 : 40,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <h3
                    className={`text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-8 uppercase tracking-wide ${isRtl ? "text-right" : "text-left"}`}
                  >
                    {service.name}
                  </h3>

                  <div className="relative rounded-[2rem] overflow-hidden p-[3px] w-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.03)]">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0_180deg,#3b82f6_270deg,#818cf8_360deg)]"
                    />

                    <div className="relative bg-white dark:bg-[#0c0c0c] rounded-[calc(2rem-3px)] p-6 md:p-8 h-full z-10 flex flex-col gap-4">
                      {descParts.map((part, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: i * 0.15, duration: 0.5 }}
                          className="relative flex items-start gap-4 p-4 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden"
                        >
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.8,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 bg-blue-50/80 dark:bg-blue-900/20 z-0 pointer-events-none"
                          />

                          <div className="mt-0.5 text-blue-500 shrink-0 relative z-10">
                            <CheckCircle2 size={18} strokeWidth={2.5} />
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed font-medium relative z-10">
                            {part}.
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.9,
                      x: isEven ? (isRtl ? -40 : 40) : isRtl ? 40 : -40,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                  className="w-full lg:w-1/2 relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-[3rem] group-hover:bg-blue-500/40 transition-colors duration-700"></div>

                  <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-white/10 bg-black">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    >
                      <source src={`/service-${index}.mp4`} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0px 0px 0px rgba(255,255,255,0)",
                            "0px 0px 25px rgba(255,255,255,0.6)",
                            "0px 0px 0px rgba(255,255,255,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg"
                      >
                        <Play
                          className="text-white fill-white ml-1.5"
                          size={32}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
