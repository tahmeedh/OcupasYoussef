"use client";

import { motion } from "framer-motion";

export default function CasesHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0000] to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-900/15 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6"
        >
          <span className="text-red-400 text-xs font-bold tracking-[0.2em] uppercase">
            Resultados Reales
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
        >
          500+ PROPIEDADES{" "}
          <span className="text-red-500">RECUPERADAS</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Casos reales, resultados reales. Cada historia representa una familia o empresario
          que recuperó lo que era suyo.
        </motion.p>
      </div>
    </section>
  );
}
