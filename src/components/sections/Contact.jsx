"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { content } = useLanguage();
  if (!content) return null;

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-[#0a0a0a] relative z-10 border-t border-gray-200 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-start bg-gray-50 dark:bg-[#111] p-10 rounded-3xl"
        >
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              {content.footer.addressTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {content.footer.address}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              {content.footer.phoneTitle}
            </h3>
            <p
              className="text-gray-600 dark:text-gray-400 text-sm mb-1"
              dir="ltr"
            >
              {content.footer.phone1}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm" dir="ltr">
              {content.footer.phone2}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              {content.footer.contactTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {content.footer.email}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400 dark:text-gray-500"
        >
          <p>{content.footer.copyright}</p>
          <p>{content.footer.credit}</p>
        </motion.div>
      </div>
    </section>
  );
}
