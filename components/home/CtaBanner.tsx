"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Phone, ArrowRight, Shield } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CtaBanner() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const c = t.cta;

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-red-900/30 via-[#1a0505] to-black border border-red-800/30 rounded-3xl p-10 sm:p-14 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-red-600/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl shadow-red-glow mb-6">
            <Shield className="w-8 h-8 text-white" strokeWidth={2} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
            {c.headline1}{" "}<span className="text-red-400">{c.headline2}</span>
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl mb-3">{c.sub}</p>
          <p className="text-gray-500 mb-10">{c.note}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/emergencia"
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,62,62,0.6)] hover:scale-105 emergency-pulse">
              <Phone className="w-5 h-5" />
              {c.btn1}
            </Link>
            <Link href="/contacto"
              className="flex items-center justify-center gap-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300">
              {c.btn2}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-8">{c.phone}</p>
        </motion.div>
      </div>
    </section>
  );
}
