"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0000] to-black" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-red-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-900/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent w-full"
            style={{ top: `${20 + i * 30}%` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, repeatType: "loop", ease: "linear", delay: i * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.div
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">{h.badge}</span>
          </motion.div>

          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="font-black leading-none mb-6"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
          >
            <span className="block text-[clamp(3rem,9vw,7.5rem)] text-white tracking-tight leading-none">
              {h.headline1}
            </span>
            <span className="block text-[clamp(3rem,9vw,7.5rem)] leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 drop-shadow-[0_0_30px_rgba(229,62,62,0.5)]">
                {h.headline2}
              </span>
            </span>
          </motion.h1>

          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="text-xl sm:text-2xl text-gray-300 font-medium mb-4 max-w-3xl leading-relaxed">
            {h.sub}
          </motion.p>

          <motion.p custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="text-gray-500 text-lg mb-10 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
            {h.trust}
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/contacto"
              className="group flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,62,62,0.5)] hover:scale-105 active:scale-95">
              {h.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/emergencia"
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-red-500/40 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,62,62,0.2)]">
              <Phone className="w-5 h-5 text-red-400 group-hover:animate-bounce" />
              {h.cta2}
            </Link>
          </motion.div>

          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-wrap gap-5">
            {h.badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/4 w-64"
        >
          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">{h.statsCard.active}</span>
            </div>
            {[
              { label: h.statsCard.props, value: "500+" },
              { label: h.statsCard.rate, value: "98%" },
              { label: h.statsCard.response, value: "24h" },
              { label: h.statsCard.years, value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="py-3 border-b border-white/5 last:border-0">
                <div className="text-2xl font-black text-white" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>{stat.value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
      >
        <span className="text-gray-600 text-xs font-medium tracking-[0.2em] uppercase">{h.scrollLabel}</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-red-600/60 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
