"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    location: "Madrid",
    rating: 5,
    text: "Llevaba 3 meses intentando recuperar mi apartamento sin resultado. Llamé a Youssef OK y en menos de 48 horas mis ocupantes se habían ido. Proceso totalmente legal y sin dramas. Increíble equipo.",
    property: "Apartamento, Carabanchel",
    initials: "CM",
  },
  {
    name: "Ana García",
    location: "Barcelona",
    rating: 5,
    text: "Mi local comercial estuvo ocupado durante 6 semanas. El equipo de Youssef OK lo resolvió de forma pacífica en 72 horas. Profesionales al 100%, siempre comunicando cada paso. Totalmente recomendables.",
    property: "Local Comercial, Gracia",
    initials: "AG",
  },
  {
    name: "Roberto Sánchez",
    location: "Valencia",
    rating: 5,
    text: "Situación de pesadilla: mi piso heredado ocupado por 4 personas. Youssef OK me explicó todo el proceso, actuó rápidamente y con total discreción. En 5 días recuperé mi propiedad. No cobran hasta que recuperas. Así da gusto.",
    property: "Piso Heredado, El Carmen",
    initials: "RS",
  },
  {
    name: "María López",
    location: "Sevilla",
    rating: 5,
    text: "Pensé que tardaría meses en recuperar mi casa. Youssef OK lo hizo en 3 días. Equipo muy profesional, amable y efectivo. El trato personal marca la diferencia. Mil gracias.",
    property: "Casa Unifamiliar, Triana",
    initials: "ML",
  },
  {
    name: "Javier Ruiz",
    location: "Bilbao",
    rating: 5,
    text: "Como propietario de varios inmuebles, he usado su servicio dos veces. Siempre efectivos, siempre legales, siempre rápidos. Son mis especialistas anti-okupa de confianza.",
    property: "Varios Inmuebles",
    initials: "JR",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, current]);

  const next = () => {
    setAutoplay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };
  const prev = () => {
    setAutoplay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 bg-[#060606] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/[0.07] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <span className="text-red-400 text-xs font-bold tracking-[0.2em] uppercase">
              Testimonios
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
          >
            LO QUE DICEN{" "}
            <span className="text-red-500">NUESTROS CLIENTES</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-gray-400 text-sm ml-2">4.9/5 basado en 200+ reseñas</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 sm:p-10 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-red-600/20" />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold text-sm">
                    {testimonials[current].initials}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold">{testimonials[current].name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[current].location} · {testimonials[current].property}
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                    ✓ Verificado
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-red-500"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
