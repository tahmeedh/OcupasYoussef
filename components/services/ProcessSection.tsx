"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Search, Target, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Contacto de Emergencia",
    desc: "Llámanos o escríbenos. Disponibles 24/7. En minutos tendrás asignado un especialista que analizará tu caso.",
  },
  {
    step: "02",
    icon: Search,
    title: "Evaluación y Plan",
    desc: "Analizamos la situación legal y táctica. En pocas horas diseñamos el plan de acción óptimo para tu caso específico.",
  },
  {
    step: "03",
    icon: Target,
    title: "Intervención",
    desc: "Nuestro equipo actúa de forma coordinada: expertos legales, mediadores y agentes de seguridad según lo requiera el caso.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Entrega de Llaves",
    desc: "Recuperas tu propiedad completamente documentada y lista. Solo en este momento hacemos efectivo el cobro.",
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
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
            CÓMO{" "}
            <span className="text-red-500">TRABAJAMOS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Un proceso probado y refinado en más de 500 casos exitosos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative z-10 text-center"
            >
              {/* Step number */}
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 bg-red-600/10 border-2 border-red-600/30 rounded-2xl flex items-center justify-center mx-auto">
                  <step.icon className="w-7 h-7 text-red-400" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-black"
                  style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                >
                  {i + 1}
                </div>
              </div>

              <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
