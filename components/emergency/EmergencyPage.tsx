"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, CheckCircle, Shield, Zap, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

function UrgencyTimer({ units }: { units: readonly string[] }) {
  const [time, setTime] = useState({ h: 0, m: 14, s: 59 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return { h: 0, m: 14, s: 59 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center gap-3 justify-center">
      {[{ val: pad(time.h), label: units[0] }, { val: pad(time.m), label: units[1] }, { val: pad(time.s), label: units[2] }].map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black text-white bg-red-900/30 border border-red-600/40 rounded-xl px-5 py-3 min-w-[80px] tabular-nums"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
              {unit.val}
            </div>
            <div className="text-red-400 text-xs font-bold mt-1 tracking-widest">{unit.label}</div>
          </div>
          {i < 2 && <div className="text-red-500 text-3xl font-black mb-4">:</div>}
        </div>
      ))}
    </div>
  );
}

export default function EmergencyPage() {
  const { t } = useLanguage();
  const e = t.emergency;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", location: "" });

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black pt-20 overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-50" style={{ boxShadow: "0 0 20px rgba(229,62,62,0.8)" }} />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#150000] to-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-900/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(229,62,62,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(229,62,62,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="flex justify-center mb-8">
          <div className="flex items-center gap-3 bg-red-600/20 border border-red-500/40 rounded-full px-6 py-3 emergency-pulse">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-300 font-bold uppercase tracking-widest text-sm">{e.activeLine}</span>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-4"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
            <span className="block text-white">{e.headline1}</span>
            <span className="block text-red-500 drop-shadow-[0_0_40px_rgba(229,62,62,0.5)]">{e.headline2}</span>
            <span className="block text-white">{e.headline3}</span>
          </h1>
          <p className="text-gray-300 text-xl sm:text-2xl">{e.sub}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="tel:+34600893591"
            className="flex items-center justify-center gap-4 bg-red-600 hover:bg-red-500 text-white px-10 py-6 rounded-2xl transition-all duration-200 hover:shadow-[0_0_60px_rgba(229,62,62,0.6)] hover:scale-105 emergency-pulse">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-start">
              <div className="text-white/70 text-xs uppercase tracking-wider font-semibold">{e.callNow}</div>
              <div className="text-2xl font-black" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.05em" }}>
                +34 600 89 35 91
              </div>
            </div>
          </a>
          <a href="https://wa.me/34600893591?text=EMERGENCIA%3A%20Necesito%20intervención%20urgente%20anti-okupa"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-green-600 hover:bg-green-500 text-white px-10 py-6 rounded-2xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-105">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-start">
              <div className="text-white/70 text-xs uppercase tracking-wider font-semibold">WhatsApp</div>
              <div className="text-2xl font-black" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>{e.whatsapp}</div>
            </div>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-br from-red-900/25 to-black border border-red-800/30 rounded-2xl p-8 mb-10 text-center">
          <p className="text-red-300 text-sm font-semibold uppercase tracking-widest mb-2">{e.countdown.label}</p>
          <UrgencyTimer units={e.units} />
          <p className="text-gray-400 text-sm mt-4">{e.countdown.sub}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[Zap, Shield, Clock].map((Icon, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">{e.promises[i].label}</div>
                <div className="text-gray-500 text-xs">{e.promises[i].sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{e.successTitle}</h3>
              <p className="text-gray-400 text-sm">
                {e.successSub}{" "}
                <a href="tel:+34600893591" className="text-red-400 font-bold">+34 600 89 35 91</a>
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-black text-white mb-1" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                {e.formTitle}
              </h2>
              <p className="text-gray-400 text-sm mb-6">{e.formSub}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder={e.fields.name} value={form.name}
                    onChange={(ev) => setForm({ ...form, name: ev.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200" />
                  <input type="tel" required placeholder={e.fields.phone} value={form.phone}
                    onChange={(ev) => setForm({ ...form, phone: ev.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200" />
                </div>
                <input type="text" required placeholder={e.fields.location} value={form.location}
                  onChange={(ev) => setForm({ ...form, location: ev.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200" />
                <button type="submit" disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(229,62,62,0.5)] flex items-center justify-center gap-3 text-lg">
                  {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="w-5 h-5" />{e.submit}</>}
                </button>
              </form>
            </>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-center mt-8">
          <p className="text-gray-600 text-sm">{e.note}</p>
        </motion.div>
      </div>
    </div>
  );
}
