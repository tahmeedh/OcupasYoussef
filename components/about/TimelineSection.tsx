"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const milestones = [
  {
    year: "2014",
    title: "Fundación",
    desc: "Youssef OK se funda en Madrid como primera empresa especializada en desokupación rápida y legal.",
  },
  {
    year: "2016",
    title: "Expansión Nacional",
    desc: "Apertura de delegaciones en Barcelona, Valencia y Sevilla. Primeras 100 propiedades recuperadas.",
  },
  {
    year: "2018",
    title: "Equipo Legal Interno",
    desc: "Incorporamos nuestro propio departamento jurídico especializado en derecho de propiedad y desahucio.",
  },
  {
    year: "2020",
    title: "Servicio 24/7",
    desc: "Lanzamos la línea de emergencia nacional 24 horas. El equipo de respuesta rápida opera sin interrupciones.",
  },
  {
    year: "2022",
    title: "Reconocimiento Sectorial",
    desc: "Reconocidos como líderes del sector anti-okupa en España. 300+ propiedades recuperadas acumuladas.",
  },
  {
    year: "2024",
    title: "500+ Casos Resueltos",
    desc: "Superamos los 500 casos resueltos con un 98% de tasa de éxito. Expansión a Canarias y Baleares.",
  },
];

export default function TimelineSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-black" ref={ref}>
      <div className="max-w-4xl mx-auto">
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
            NUESTRA{" "}
            <span className="text-red-500">HISTORIA</span>
          </h2>
          <p className="text-gray-400 text-lg">Una década construyendo confianza.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-red-600/50 via-red-600/20 to-transparent" />

          <div className="space-y-10">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-red-600 rounded-full border-2 border-black shadow-[0_0_10px_rgba(229,62,62,0.6)] mt-1.5 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                  }`}
                >
                  <div
                    className="text-red-500 font-black text-2xl mb-1"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                  >
                    {milestone.year}
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                    <h3 className="text-white font-bold text-base mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
