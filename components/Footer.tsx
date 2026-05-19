"use client";

import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const services = [
  { label: "Desokupación Urgente", href: "/servicios" },
  { label: "Recuperación de Propiedad", href: "/servicios" },
  { label: "Mediación Legal", href: "/servicios" },
  { label: "Intervención de Emergencia", href: "/servicios" },
  { label: "Servicios de Seguridad", href: "/servicios" },
  { label: "Sistemas de Vigilancia", href: "/servicios" },
];

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
  { label: "Línea de Emergencia", href: "/emergencia" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-white/5 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Emergency Banner */}
      <div className="bg-red-900/30 border-b border-red-800/30 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white font-bold text-sm tracking-wide">
              LÍNEA DE EMERGENCIA 24/7
            </span>
          </div>
          <a
            href="tel:+34900000000"
            className="text-red-400 hover:text-red-300 font-black text-xl tracking-wider transition-colors duration-200"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
          >
            +34 900 000 000
          </a>
          <a
            href="/emergencia"
            className="bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200"
          >
            Llamar Ahora
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 bg-red-600 rounded-xl blur-md opacity-40" />
              </div>
              <div>
                <div
                  className="text-white font-black text-2xl"
                  style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.05em" }}
                >
                  YOUSSEF OK
                </div>
                <div className="text-red-500 text-[9px] font-bold tracking-[0.2em] uppercase">
                  OKUPA KILLER
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Líderes en recuperación de propiedades ocupadas ilegalmente en toda España.
              Soluciones rápidas, legales y efectivas — no cobras hasta recuperar tus llaves.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-600/40 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-red-500" />
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-red-500/50 rounded-full group-hover:bg-red-400 transition-colors duration-200" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-red-500" />
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-red-500/50 rounded-full group-hover:bg-red-400 transition-colors duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-red-500" />
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+34900000000"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-red-600/10 border border-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors duration-200">
                    <Phone className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">Teléfono / Emergencias</div>
                    <div className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200">
                      +34 900 000 000
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@youssefok.es"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-red-600/10 border border-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors duration-200">
                    <Mail className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">Email</div>
                    <div className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-200">
                      info@youssefok.es
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/10 border border-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">Cobertura</div>
                  <div className="text-white text-sm font-semibold">
                    Toda España
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-900/20 border border-green-700/30 rounded-xl">
              <a
                href="https://wa.me/34900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">WhatsApp Directo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Youssef OK. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200">
              Términos de Uso
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200">
              Política de Cookies
            </Link>
            <Link href="/aviso-legal" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
