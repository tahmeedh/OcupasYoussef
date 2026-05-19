"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const initials = ["CM", "AG", "RS"];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const ts = t.testimonials;
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Reset to first when language changes
  useEffect(() => { setCurrent(0); }, [ts]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % ts.items.length), 5000);
    return () => clearInterval(timer);
  }, [autoplay, current, ts.items.length]);

  const next = () => { setAutoplay(false); setCurrent((c) => (c + 1) % ts.items.length); };
  const prev = () => { setAutoplay(false); setCurrent((c) => (c - 1 + ts.items.length) % ts.items.length); };

  return (
    <section className="py-24 px-4 bg-[#060606] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <span className="text-red-400 text-xs font-bold tracking-[0.2em] uppercase">{ts.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
            {ts.headline1}{" "}<span className="text-red-500">{ts.headline2}</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            <span className="text-gray-400 text-sm ms-2">4.9/5 {ts.rating}</span>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current}-${ts.badge}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 sm:p-10 relative"
            >
              <Quote className="absolute top-8 end-8 w-10 h-10 text-red-600/20" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 italic">
                "{ts.items[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold text-sm">{initials[current]}</span>
                </div>
                <div>
                  <div className="text-white font-bold">{ts.items[current].name}</div>
                  <div className="text-gray-500 text-sm">
                    {ts.items[current].location} · {ts.items[current].property}
                  </div>
                </div>
                <div className="ms-auto">
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                    ✓ {ts.verified}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6">
            <button onClick={prev} aria-label="Previous"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-full flex items-center justify-center transition-all duration-200">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <div className="flex items-center gap-2">
              {ts.items.map((_, i) => (
                <button key={i} onClick={() => { setAutoplay(false); setCurrent(i); }} aria-label={`Go to ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-red-500" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-full flex items-center justify-center transition-all duration-200">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
