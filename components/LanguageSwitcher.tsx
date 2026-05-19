"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Locale, localeConfig } from "@/lib/translations";

const locales = Object.entries(localeConfig) as [Locale, (typeof localeConfig)[Locale]][];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = localeConfig[locale];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 transition-all duration-200 text-sm font-medium text-gray-300 hover:text-white"
        aria-label="Change language"
      >
        <Globe className="w-3.5 h-3.5 text-red-400" />
        <span className="hidden sm:inline">{current.flag}</span>
        <span className="hidden md:inline">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full mt-2 end-0 w-44 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.7)] overflow-hidden z-50"
          >
            {locales.map(([code, config]) => (
              <button
                key={code}
                onClick={() => { setLocale(code); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150
                  ${locale === code
                    ? "bg-red-600/20 text-white font-semibold"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span className="text-base">{config.flag}</span>
                <span>{config.label}</span>
                {locale === code && (
                  <span className="ms-auto w-1.5 h-1.5 bg-red-500 rounded-full" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
