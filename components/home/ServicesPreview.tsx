"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Home, AlertTriangle, Scale, Users, Shield, Camera, Eye, ArrowRight, UserX
} from "lucide-react";

const services = [
  {
    icon: UserX,
    title: "Desokupación Urgente",
    desc: "Expulsión legal e inmediata de ocupantes ilegales con mínimo conflicto.",
    highlight: true,
  },
  {
    icon: Home,
    title: "Recuperación de Inmueble",
    desc: "Recuperamos tu piso, casa, local o terreno de forma segura y documentada.",
    highlight: false,
  },
  {
    icon: AlertTriangle,
    title: "Intervención de Emergencia",
    desc: "Equipo de respuesta rápida disponible 24/7. Actuamos en horas, no en semanas.",
    highlight: false,
  },
  {
    icon: Scale,
    title: "Asistencia Legal",
    desc: "Abogados especializados en derecho de propiedad y desahucio exprés.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Mediación Profesional",
    desc: "Negociación estratégica para resoluciones pacíficas cuando es posible.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Seguridad Preventiva",
    desc: "Protección activa de inmuebles vacíos para prevenir ocupaciones.",
    highlight: false,
  },
  {
    icon: Camera,
    title: "Sistemas de Vigilancia",
    desc: "Instalación de cámaras y alarmas para disuadir futuros accesos ilegales.",
    highlight: false,
  },
  {
    icon: Eye,
    title: "Consultoría de Prevención",
    desc: "Auditamos tu propiedad y diseñamos un plan de protección personalizado.",
    highlight: false,
  },
];

export default function ServicesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-[#080808] relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-red-900/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <span className="text-red-400 text-xs font-bold tracking-[0.2em] uppercase">
              Nuestros Servicios
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
          >
            SOLUCIONES{" "}
            <span className="text-red-500">COMPLETAS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desde la primera llamada hasta la entrega de llaves — cubrimos todo el proceso
            con expertos certificados en cada etapa.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: "easeOut" }}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-default
                ${service.highlight
                  ? "bg-gradient-to-br from-red-600/20 to-red-900/10 border-red-600/30 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(229,62,62,0.2)]"
                  : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-red-500/20"
                }`}
            >
              {service.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                    Popular
                  </span>
                </div>
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110
                  ${service.highlight ? "bg-red-600/30" : "bg-white/[0.07]"}`}
              >
                <service.icon
                  className={`w-6 h-6 ${service.highlight ? "text-red-300" : "text-gray-300"}`}
                />
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-red-300 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>

              <div className="mt-4 flex items-center gap-1 text-red-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Más información
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,62,62,0.4)] hover:scale-105"
          >
            Ver Todos los Servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
