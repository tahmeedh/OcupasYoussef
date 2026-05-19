"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Youssef Amrani",
    role: "Fundador & Director General",
    bio: "15 años de experiencia en seguridad y recuperación de propiedades. Experto en negociación táctica y resolución de conflictos.",
    initials: "YA",
    accent: "from-red-600 to-red-800",
  },
  {
    name: "Carmen Iglesias",
    role: "Directora Legal",
    bio: "Abogada especialista en derecho inmobiliario y desahucio exprés. Ha gestionado más de 200 casos judiciales con éxito.",
    initials: "CI",
    accent: "from-gray-600 to-gray-800",
  },
  {
    name: "Marco Torres",
    role: "Jefe de Intervenciones",
    bio: "Ex-agente de seguridad privada con formación en mediación. Lidera el equipo operativo de respuesta rápida.",
    initials: "MT",
    accent: "from-red-800 to-black",
  },
  {
    name: "Laura Martín",
    role: "Coordinadora de Operaciones",
    bio: "Gestiona la logística de todas las intervenciones asegurando tiempos de respuesta óptimos en toda España.",
    initials: "LM",
    accent: "from-gray-700 to-gray-900",
  },
];

export default function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-[#060606]" ref={ref}>
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
            NUESTRO{" "}
            <span className="text-red-500">EQUIPO</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Profesionales certificados comprometidos al 100% con la recuperación de tu propiedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white/[0.02] border border-white/[0.07] hover:border-red-600/25 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className={`h-48 bg-gradient-to-br ${member.accent} flex items-center justify-center relative`}>
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-white text-2xl font-black" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                    {member.initials}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-base mb-1">{member.name}</h3>
                <div className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  {member.role}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center gap-2">
                  <a href="#" className="w-8 h-8 bg-white/5 hover:bg-blue-600/20 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-200">
                    <Linkedin className="w-3.5 h-3.5 text-gray-400 hover:text-blue-400" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/5 hover:bg-sky-600/20 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-200">
                    <Twitter className="w-3.5 h-3.5 text-gray-400 hover:text-sky-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
