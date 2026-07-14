"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Structure() {
  const { content } = useLanguage();
  if (!content) return null;

  return (
    <section
      id="structure"
      className="py-24 px-6 bg-gray-100/50 dark:bg-[#111]/50 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.structure.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.structure.team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-blue-500/30 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {member.role}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
