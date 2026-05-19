"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Star, Award, Users } from "lucide-react";

export default function AboutPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main card */}
              <div className="w-full h-full bg-gradient-to-br from-charcoal to-[#1a0a0a] border border-white/5 rounded-3xl overflow-hidden relative">
                {/* Urban tactical pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 30px,
                      rgba(229,62,62,0.3) 30px,
                      rgba(229,62,62,0.3) 31px
                    )`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white text-lg font-bold mb-1">
                    "Recuperé mi piso en 48 horas"
                  </p>
                  <p className="text-gray-400 text-sm">— Carlos M., Madrid</p>
                </div>

                {/* Decorative large text */}
                <div
                  className="absolute top-8 left-8 text-[120px] font-black text-white/[0.03] leading-none"
                  style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                >
                  OK
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-red-600 rounded-2xl p-4 shadow-red-glow">
                <Award className="w-8 h-8 text-white" />
              </div>

              {/* Floating badge bottom-left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                      500+
                    </div>
                    <div className="text-gray-400 text-xs">Clientes Satisfechos</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <span className="text-red-400 text-xs font-bold tracking-[0.2em] uppercase">
                Sobre Nosotros
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
            >
              TU PROPIEDAD,{" "}
              <span className="text-red-500">
                NUESTRA MISIÓN
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Youssef OK es el especialista anti-okupa más eficaz de España. Combinamos
              intervención táctica, experiencia legal y negociación estratégica para
              recuperar tu propiedad de forma rápida, legal y sin drama.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Con más de una década en el sector, nuestro equipo multidisciplinar — formado
              por expertos legales, mediadores profesionales y agentes de seguridad
              certificados — ofrece soluciones integrales ante cualquier tipo de ocupación ilegal.
              Operamos en toda España con respuesta en menos de 24 horas.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Años de experiencia", value: "10+" },
                { label: "Provincias cubiertas", value: "50" },
                { label: "Casos resueltos", value: "500+" },
                { label: "Tasa de éxito", value: "98%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4"
                >
                  <div
                    className="text-3xl font-black text-red-400 mb-1"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center gap-3 text-white font-semibold group"
            >
              <span className="border-b border-white/20 group-hover:border-red-500 transition-colors duration-200 pb-0.5">
                Conoce Nuestro Equipo
              </span>
              <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-2 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
