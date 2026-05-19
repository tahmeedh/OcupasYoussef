"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => { localStorage.setItem("cookie-consent", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("cookie-consent", "declined"); setVisible(false); };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
        >
          <div className="max-w-4xl mx-auto bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_-4px_30px_rgba(0,0,0,0.6)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-600/20 border border-red-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm mb-1">{t.cookie.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {t.cookie.text}{" "}
                  <a href="/cookies" className="text-red-400 hover:text-red-300 underline">{t.cookie.policy}</a>.
                </p>
              </div>
              <button onClick={decline} aria-label="Close"
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200 flex-shrink-0">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-4 ms-14">
              <button onClick={accept}
                className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:shadow-[0_0_15px_rgba(229,62,62,0.4)]">
                {t.cookie.accept}
              </button>
              <button onClick={decline}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-sm font-medium px-5 py-2 rounded-full transition-all duration-200">
                {t.cookie.decline}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
