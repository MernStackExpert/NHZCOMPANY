"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const { content } = useLanguage();
  if (!content) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 relative z-10 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-t-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          className="w-full h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-white/10 mb-16 group relative"
        >
          <div className="absolute inset-0 bg-blue-500/10 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <iframe
            src="https://maps.google.com/maps?q=Abi%20Muhammad%20Al%20Attar,%20Al%20Andalus,%20Riyadh&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 transition-transform duration-1000 group-hover:scale-105"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative p-[2px] rounded-[2.2rem] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-500 h-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_180deg,#3b82f6_270deg,transparent_360deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative bg-white dark:bg-[#0c0c0c] h-full rounded-[2rem] p-10 flex flex-col items-center text-center z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                <MapPin
                  className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
                {content.footer.addressTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium relative z-10">
                {content.footer.address}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative p-[2px] rounded-[2.2rem] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-500 h-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_180deg,#3b82f6_270deg,transparent_360deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative bg-white dark:bg-[#0c0c0c] h-full rounded-[2rem] p-10 flex flex-col items-center text-center z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                <Phone
                  className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
                {content.footer.phoneTitle}
              </h3>
              <div className="relative z-10 space-y-2">
                <p
                  className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  dir="ltr"
                >
                  {content.footer.phone1}
                </p>
                <p
                  className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  dir="ltr"
                >
                  {content.footer.phone2}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative p-[2px] rounded-[2.2rem] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-500 h-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_180deg,#3b82f6_270deg,transparent_360deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative bg-white dark:bg-[#0c0c0c] h-full rounded-[2rem] p-10 flex flex-col items-center text-center z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                <Mail
                  className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
                {content.footer.contactTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer relative z-10">
                {content.footer.email}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 text-center md:text-left">
            {content.footer.copyright}
          </p>
          <div className="px-6 py-2 bg-blue-50 dark:bg-white/5 rounded-full border border-blue-100 dark:border-white/10">
            <p className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 tracking-wide uppercase">
              Designed by NHZ COMPANY LTD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
