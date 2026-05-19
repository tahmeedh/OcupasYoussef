"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  UserX, Home, AlertTriangle, Scale, Users, Shield, Camera, Eye, Lock, Phone, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: UserX,
    title: "Desokupación Urgente",
    shortDesc: "Expulsión legal e inmediata",
    desc: "Nuestro servicio estrella. Intervención táctica y legal para la recuperación de inmuebles ocupados ilegalmente. Actuamos con rapidez y profesionalidad, minimizando el conflicto y garantizando el cumplimiento de toda la normativa vigente.",
    features: ["Evaluación de situación en 2h", "Plan de acción personalizado", "Intervención coordinada", "Documentación completa"],
    highlight: true,
    tag: "Más Solicitado",
  },
  {
    icon: Home,
    title: "Recuperación de Inmueble",
    shortDesc: "Tu propiedad, devuelta",
    desc: "Proceso completo de recuperación de viviendas, locales comerciales, terrenos y cualquier tipo de inmueble. Coordinamos todos los aspectos: legal, operativo y de seguridad.",
    features: ["Análisis de titularidad", "Estrategia personalizada", "Coordinación judicial si necesario", "Entrega documentada"],
    highlight: false,
    tag: null,
  },
  {
    icon: AlertTriangle,
    title: "Intervención de Emergencia",
    shortDesc: "Respuesta en horas",
    desc: "Equipo de respuesta rápida disponible las 24 horas. Para casos urgentes donde cada minuto cuenta: ocupaciones recientes, accesos forzados, o situaciones de riesgo.",
    features: ["Activación en <1 hora", "Equipo en zona en pocas horas", "Gestión de incidentes", "Informe post-intervención"],
    highlight: false,
    tag: "24/7",
  },
  {
    icon: Scale,
    title: "Asistencia Legal",
    shortDesc: "Expertos en derecho de propiedad",
    desc: "Departamento jurídico interno especializado en desahucio exprés, procedimientos civiles y administrativos relacionados con la ocupación ilegal de inmuebles.",
    features: ["Consulta legal gratuita", "Desahucio exprés (Ley 5/2018)", "Representación judicial", "Recursos y apelaciones"],
    highlight: false,
    tag: null,
  },
  {
    icon: Users,
    title: "Mediación Profesional",
    shortDesc: "Resolución pacífica cuando es posible",
    desc: "Mediadores certificados que buscan acuerdos que eviten el conflicto y aceleren la resolución. En muchos casos, la mediación es la vía más rápida y económica.",
    features: ["Mediadores certificados", "Negociación estratégica", "Acuerdos vinculantes", "Sin juicio si es posible"],
    highlight: false,
    tag: null,
  },
  {
    icon: Shield,
    title: "Seguridad Preventiva",
    shortDesc: "Protección activa de inmuebles",
    desc: "Servicio de seguridad para propiedades vacías y en riesgo de ocupación. Rondas de seguridad, presencia disuasoria y respuesta inmediata ante intentos de entrada.",
    features: ["Vigilancia periódica", "Agentes de seguridad certificados", "Informe diario", "Protocolo de respuesta"],
    highlight: false,
    tag: null,
  },
  {
    icon: Camera,
    title: "Sistemas de Vigilancia",
    shortDesc: "Ojos en tu propiedad 24/7",
    desc: "Instalación y configuración de sistemas de videovigilancia profesional. Cámaras HD, grabación en nube, acceso remoto y alertas en tiempo real.",
    features: ["Cámaras HD exterior/interior", "Grabación en nube 30 días", "App de monitorización", "Alertas por movimiento"],
    highlight: false,
    tag: null,
  },
  {
    icon: Lock,
    title: "Sistemas de Alarma",
    shortDesc: "Disuasión inteligente",
    desc: "Instalación de sistemas de alarma conectados a central receptora con respuesta de seguridad. Protección perimetral e interior con las últimas tecnologías.",
    features: ["Detectores perimetrales", "Central receptora 24/7", "Respuesta en 5 minutos", "Conectividad total"],
    highlight: false,
    tag: null,
  },
  {
    icon: Eye,
    title: "Patrullas de Seguridad",
    shortDesc: "Presencia física regular",
    desc: "Equipos de seguridad que realizan rondas programadas por tu propiedad. Presencia física que disuade intentos de ocupación y detecta problemas a tiempo.",
    features: ["Rondas diurnas y nocturnas", "Agentes uniformados", "Informe de cada ronda", "Comunicación en tiempo real"],
    highlight: false,
    tag: null,
  },
  {
    icon: Phone,
    title: "Consultoría de Prevención",
    shortDesc: "Antes de que sea un problema",
    desc: "Auditamos tu propiedad e identificamos vulnerabilidades. Diseñamos un plan de protección integral para evitar que tu inmueble sea objetivo de ocupación ilegal.",
    features: ["Auditoría de seguridad", "Plan personalizado", "Recomendaciones técnicas", "Seguimiento periódico"],
    highlight: false,
    tag: null,
  },
];

export default function ServicesGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 px-4 bg-[#060606]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={`relative rounded-2xl p-7 border transition-all duration-300 group hover:-translate-y-1
                ${service.highlight
                  ? "bg-gradient-to-br from-red-900/30 to-black border-red-700/40 hover:border-red-500/60 hover:shadow-[0_0_40px_rgba(229,62,62,0.15)]"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-red-600/20 hover:bg-white/[0.04]"
                }`}
            >
              {service.tag && (
                <div className="absolute top-5 right-5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase ${
                    service.highlight ? "bg-red-600 text-white" : "bg-red-600/20 text-red-400 border border-red-600/30"
                  }`}>
                    {service.tag}
                  </span>
                </div>
              )}

              <div className={`w-13 h-13 rounded-xl flex items-center justify-center mb-5 w-12 h-12 transition-all duration-300 group-hover:scale-110 ${
                service.highlight ? "bg-red-600/30 border border-red-500/40" : "bg-white/[0.07] border border-white/[0.07]"
              }`}>
                <service.icon className={`w-6 h-6 ${service.highlight ? "text-red-300" : "text-gray-300"}`} />
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
              <div className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
                {service.shortDesc}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/contacto"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${
                  service.highlight
                    ? "text-white bg-red-600 hover:bg-red-500 px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(229,62,62,0.4)]"
                    : "text-red-400 hover:text-red-300"
                }`}
              >
                Solicitar servicio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
