"use client";

import { Shield } from "lucide-react";

const items = [
  "SIN RECUPERACIÓN = SIN PAGO",
  "INTERVENCIÓN EN MENOS DE 24H",
  "PROCESO 100% LEGAL",
  "COBERTURA EN TODA ESPAÑA",
  "DISPONIBLES 24/7",
  "98% TASA DE ÉXITO",
  "500+ PROPIEDADES RECUPERADAS",
  "EXPERTOS ANTI-OKUPA",
];

export default function TickerBanner() {
  const doubled = [...items, ...items];

  return (
    <div className="relative bg-red-700 border-y border-red-600/50 py-3.5 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span
                className="text-white font-bold text-sm tracking-[0.15em] uppercase whitespace-nowrap"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.15em" }}
              >
                {item}
              </span>
              <Shield className="w-4 h-4 text-red-300 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
