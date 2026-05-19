"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const cases = [
  {
    id: "01",
    location: "Madrid, Vallecas",
    type: "Vivienda Familiar",
    duration: "36 horas",
    situation:
      "Familia con 3 menores ocupó una vivienda de un particular mientras estaba de vacaciones. Habían cambiado la cerradura y se negaban a abandonar el inmueble.",
    strategy:
      "Aplicación inmediata de la Ley 5/2018 de desahucio exprés. Coordinación con fuerzas del orden. Documentación completa de la ocupación ilegal.",
    outcome:
      "Propiedad recuperada en 36 horas sin violencia ni daños. Inquilinos desalojados con toda la documentación en regla.",
    tags: ["Ley 5/2018", "Desahucio Exprés", "Sin Violencia"],
  },
  {
    id: "02",
    location: "Barcelona, Poble Sec",
    type: "Local Comercial",
    duration: "72 horas",
    situation:
      "Local comercial de 200m² ocupado por un grupo organizado. Llevaban 4 semanas en el inmueble y habían modificado la instalación eléctrica.",
    strategy:
      "Negociación inicial fallida → proceso judicial coordinado → intervención de desalojo con presencia de autoridades y equipo técnico.",
    outcome:
      "Local recuperado al 100% en 72 horas. Daños documentados para reclamación civil posterior. Propietario de nuevo en posesión.",
    tags: ["Local Comercial", "Proceso Judicial", "Recuperación Total"],
  },
  {
    id: "03",
    location: "Valencia, El Carmen",
    type: "Piso Heredado",
    duration: "48 horas",
    situation:
      "Inmueble heredado vacante durante 6 meses, ocupado por ex-inquilino que no pagaba y se negaba a abandonar alegando contrato no rescindido.",
    strategy:
      "Análisis legal del contrato → demostración de impago → procedimiento de desahucio exprés reforzado con asesoramiento continuo al propietario.",
    outcome:
      "Ex-inquilino desalojado en 48 horas. Contrato legalmente rescindido. Propiedad lista para nueva arrendación con contrato blindado.",
    tags: ["Desahucio por Impago", "Herencia", "Asesoramiento Legal"],
  },
  {
    id: "04",
    location: "Sevilla, Triana",
    type: "Casa Unifamiliar",
    duration: "24 horas",
    situation:
      "Casa unifamiliar ocupada durante el proceso de venta. El comprador descubrió la ocupación en el día de la firma notarial.",
    strategy:
      "Intervención de emergencia a las 6h del aviso. Aplicación de protocolo de ocupación reciente (menos de 48h) para actuación inmediata.",
    outcome:
      "Ocupantes desalojados en menos de 24 horas. Operación de compraventa completada ese mismo día. Caso resuelto sin implicación judicial.",
    tags: ["Emergencia", "Ocupación Reciente", "Resolución Rápida"],
  },
  {
    id: "05",
    location: "Málaga, Centro",
    type: "Apartamento Turístico",
    duration: "5 días",
    situation:
      "Apartamento de alquiler vacacional con inquilinos que se negaron a abandonar al final del contrato, bloqueando las reservas del verano.",
    strategy:
      "Mediación inicial para acuerdo voluntario. Al fracasar, procedimiento judicial acelerado con paralización de la nueva ocupación mediante medidas cautelares.",
    outcome:
      "Inquilinos desalojados en 5 días. Temporada vacacional recuperada. Propietario recibió compensación económica por los días perdidos.",
    tags: ["Alquiler Vacacional", "Mediación", "Compensación Económica"],
  },
  {
    id: "06",
    location: "Bilbao, Deusto",
    type: "Inmueble Comercial",
    duration: "4 días",
    situation:
      "Empresa con 8 empleados ocupó ilegalmente un inmueble en proceso de renovación, alegando contrato oral de arrendamiento no demostrable.",
    strategy:
      "Investigación documental completa, demostrando la inexistencia de cualquier acuerdo. Procedimiento civil urgente. Notificación fehaciente y desalojo judicial.",
    outcome:
      "Inmueble recuperado en 4 días. Empresa desalojada con todos sus bienes. Propietario retomó las obras sin más demoras.",
    tags: ["Local Empresa", "Contrato Oral", "Desalojo Judicial"],
  },
];

export default function CasesGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 px-4 bg-[#060606]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/[0.02] border border-white/[0.07] hover:border-red-600/20 rounded-2xl overflow-hidden group transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-900/20 to-transparent border-b border-white/5 p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span
                      className="text-red-500/40 text-5xl font-black leading-none"
                      style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                    >
                      #{c.id}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-green-400 text-sm font-semibold justify-end">
                      <CheckCircle className="w-4 h-4" />
                      Resuelto
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm justify-end mt-1">
                      <Clock className="w-3.5 h-3.5" />
                      {c.duration}
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg">{c.type}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {c.location}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Situación
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.situation}</p>
                </div>
                <div>
                  <div className="text-yellow-500/80 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Estrategia
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.strategy}</p>
                </div>
                <div>
                  <div className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Resultado
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">{c.outcome}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/[0.04] border border-white/[0.08] text-gray-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: "98%", label: "Tasa de éxito" },
            { value: "<24h", label: "Respuesta media" },
            { value: "0€", label: "Pago previo" },
            { value: "500+", label: "Casos resueltos" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-red-600/10 border border-red-600/20 rounded-xl p-5 text-center"
            >
              <div
                className="text-3xl font-black text-red-400 mb-1"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
