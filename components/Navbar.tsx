"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, Menu, X, Shield } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navRoutes = [
  { href: "/", key: "home" as const },
  { href: "/sobre-nosotros", key: "about" as const },
  { href: "/servicios", key: "services" as const },
  { href: "/casos-de-exito", key: "cases" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/contacto", key: "contact" as const },
];

export default function Navbar() {
  const { t, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300 shadow-red-glow">
                  <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 bg-red-600 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="leading-none">
                <div
                  className="text-white font-black text-xl tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.05em" }}
                >
                  YOUSSEF OK
                </div>
                <div className="text-red-500 text-[9px] font-bold tracking-[0.2em] uppercase">
                  OKUPA KILLER
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navRoutes.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {t.nav[link.key]}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Emergency button — desktop only */}
              <Link
                href="/emergencia"
                className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,62,62,0.5)] hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                {t.nav.emergency}
              </Link>

              {/* Language switcher — always visible, sits beside hamburger on mobile */}
              <LanguageSwitcher />

              {/* Hamburger — mobile only, right next to language switcher */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? "-100%" : "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir === "rtl" ? "-100%" : "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-10 px-6">
              <nav className="flex flex-col gap-2">
                {navRoutes.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center py-4 border-b border-white/5 text-2xl font-bold text-white/80 hover:text-white transition-all duration-200"
                      style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.05em" }}
                    >
                      <span className={`text-red-500 text-lg ${dir === "rtl" ? "ms-3" : "me-3"}`}>→</span>
                      {t.nav[link.key]}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="/emergencia"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-red-600 text-white text-lg font-bold py-4 rounded-full emergency-pulse"
                >
                  <Phone className="w-5 h-5" />
                  {t.nav.emergency.toUpperCase()}
                </Link>
                <a
                  href="https://wa.me/34600893591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white text-lg font-bold py-4 rounded-full"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
