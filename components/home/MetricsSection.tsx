"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Home, TrendingUp, Clock, Phone } from "lucide-react";

const metrics = [
  {
    icon: Home,
    value: 500,
    suffix: "+",
    label: "Propiedades Recuperadas",
    desc: "Inmuebles devueltos a sus legítimos propietarios",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Tasa de Éxito",
    desc: "De los casos que aceptamos, los resolvemos",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "h",
    label: "Tiempo de Respuesta",
    desc: "Máximo tiempo hasta el inicio de la intervención",
  },
  {
    icon: Phone,
    value: 247,
    suffix: "",
    label: "Disponibilidad",
    desc: "24 horas, 7 días, 365 días al año",
  },
];

export default function MetricsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Red glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-red-900/10 rounded-full blur-[80px]" />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
          >
            RESULTADOS QUE{" "}
            <span className="text-red-500">HABLAN SOLOS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Números reales de casos reales. Sin promesas vacías.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              className="relative group text-center p-8 bg-white/[0.02] border border-white/[0.06] hover:border-red-600/30 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-red-600/20 transition-colors duration-300">
                <metric.icon className="w-7 h-7 text-red-400" />
              </div>

              {/* Number */}
              <div className="mb-2">
                <span
                  className="text-5xl sm:text-6xl font-black text-white"
                  style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                >
                  {metric.value === 247 ? (
                    "24/7"
                  ) : (
                    <AnimatedCounter
                      end={metric.value}
                      suffix={metric.suffix}
                      duration={2000}
                    />
                  )}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-2">{metric.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{metric.desc}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-1/2 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
