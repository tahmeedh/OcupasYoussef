"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono / Emergencias",
    value: "+34 600 89 35 91",
    sub: "Disponible 24 horas al día",
    href: "tel:+34600893591",
    color: "red",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@youssefok.es",
    sub: "Respuesta en menos de 2 horas",
    href: "mailto:info@youssefok.es",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Cobertura",
    value: "Toda España",
    sub: "50 provincias · Canarias · Baleares",
    href: null,
    color: "green",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "24/7 - 365",
    sub: "Sin descansos, sin festivos",
    href: null,
    color: "purple",
  },
];

export default function ContactContent() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 bg-[#060606]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Emergency banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-red-900/40 border border-red-700/40 rounded-2xl p-6 sm:p-8 mb-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/5 to-transparent" />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-300 font-bold uppercase tracking-widest text-sm">
                Necesita Ayuda Urgente
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-2"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
            >
              NUESTRO EQUIPO ESTÁ DISPONIBLE AHORA MISMO
            </h2>
            <p className="text-gray-300 mb-5 text-sm">
              Para emergencias, llama directamente. No pierdas ni un minuto.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+34600893591"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(229,62,62,0.5)] emergency-pulse text-lg"
              >
                <Phone className="w-5 h-5" />
                +34 600 89 35 91
              </a>
              <a
                href="https://wa.me/34600893591?text=Emergencia%20okupa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-lg"
              >
                WhatsApp Urgente
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2
              className="text-3xl font-black text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
            >
              INFORMACIÓN DE CONTACTO
            </h2>

            {contactInfo.map((info) => {
              const content = (
                <div
                  className={`bg-white/[0.02] border border-white/[0.07] hover:border-red-600/20 rounded-xl p-5 flex items-start gap-4 transition-all duration-200 ${info.href ? "hover:bg-white/[0.04] cursor-pointer" : ""}`}
                >
                  <div className="w-10 h-10 bg-red-600/15 border border-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{info.title}</div>
                    <div className="text-white font-bold text-base">{info.value}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{info.sub}</div>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.title} href={info.href}>{content}</a>
              ) : (
                <div key={info.title}>{content}</div>
              );
            })}

            {/* Map placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/[0.07] h-56 bg-[#111] relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <MapPin className="w-10 h-10 text-red-500" />
                <span className="text-gray-400 text-sm">Madrid · Barcelona · Valencia</span>
                <span className="text-gray-600 text-xs">y toda España</span>
              </div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-xl p-5">
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Horario de Oficina</div>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lunes – Viernes</span>
                  <span className="text-white font-medium">9:00 – 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sábado</span>
                  <span className="text-white font-medium">10:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingo</span>
                  <span className="text-white font-medium">12:00 – 16:00</span>
                </div>
                <div className="pt-2 border-t border-white/5 text-red-400 text-xs font-semibold">
                  Emergencias: disponible 24/7 todos los días
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">
                    Mensaje recibido
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Un especialista se pondrá en contacto contigo en los próximos 30 minutos.
                    Si es urgente, llama directamente al +34 600 89 35 91.
                  </p>
                </div>
              ) : (
                <>
                  <h2
                    className="text-2xl font-black text-white mb-2"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                  >
                    SOLICITA TU CONSULTA GRATUITA
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">
                    Completa el formulario y un especialista te contactará en menos de 30 minutos.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                          Localización del inmueble *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200"
                          placeholder="Ciudad, provincia"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                          Tipo de propiedad
                        </label>
                        <select
                          value={form.type}
                          onChange={(e) => setForm({ ...form, type: e.target.value })}
                          className="w-full bg-[#111] border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors duration-200"
                        >
                          <option value="">Seleccionar...</option>
                          <option value="vivienda">Vivienda / Piso</option>
                          <option value="casa">Casa Unifamiliar</option>
                          <option value="local">Local Comercial</option>
                          <option value="nave">Nave / Almacén</option>
                          <option value="terreno">Terreno</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Describe tu situación *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200 resize-none"
                        placeholder="¿Cuándo empezó la ocupación? ¿Cuántas personas hay? ¿Han habido amenazas? Cualquier detalle relevante..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-70 text-white font-bold py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(229,62,62,0.4)] flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Consulta Gratuita
                        </>
                      )}
                    </button>

                    <p className="text-gray-600 text-xs text-center">
                      Al enviar, aceptas nuestra{" "}
                      <a href="/privacidad" className="text-gray-400 hover:text-red-400">
                        política de privacidad
                      </a>
                      . No compartimos tus datos con terceros.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
