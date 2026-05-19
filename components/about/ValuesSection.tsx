"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Shield, Scale, Zap, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Efectividad",
    desc: "Cada caso que aceptamos tiene solución. Nuestro 98% de tasa de éxito no es marketing — es la realidad de nuestro trabajo.",
  },
  {
    icon: Scale,
    title: "Legalidad Total",
    desc: "Operamos exclusivamente dentro del marco legal español. Sin excepciones, sin atajos, sin riesgos para el propietario.",
  },
  {
    icon: Zap,
    title: "Rapidez",
    desc: "Entendemos que cada día de ocupación ilegal es un día de pérdida. Por eso respondemos en horas, no en semanas.",
  },
  {
    icon: Heart,
    title: "Empatía",
    desc: "Detrás de cada propiedad hay una historia. Tratamos a cada cliente con la atención y el respeto que merece.",
  },
  {
    icon: Shield,
    title: "Discreción",
    desc: "Máxima confidencialidad en cada operación. Tu privacidad y seguridad son nuestra prioridad.",
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    desc: "Operamos en todas las comunidades autónomas de España. Donde hay un okupa, hay un equipo Youssef OK.",
  },
];

export default function ValuesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-[#080808]" ref={ref}>
      <div className="max-w-7xl mx-auto">
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
            NUESTROS{" "}
            <span className="text-red-500">VALORES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Los principios que guían cada intervención que realizamos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/[0.02] border border-white/[0.07] hover:border-red-600/25 rounded-2xl p-7 group transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div className="w-12 h-12 bg-red-600/15 border border-red-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600/25 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
