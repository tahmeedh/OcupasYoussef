"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";

const categories = [
  {
    title: "Legal y Proceso",
    faqs: [
      {
        q: "¿El proceso de desokupación es completamente legal?",
        a: "Sí, absolutamente. Todas nuestras intervenciones se realizan estrictamente dentro del marco legal español. Utilizamos la Ley 5/2018 de desahucio exprés, procedimientos civiles y, cuando es necesario, coordinamos con las fuerzas de orden público. Nunca empleamos métodos al margen de la ley, lo que protege tanto al propietario como a nosotros.",
      },
      {
        q: "¿Qué ocurre si los ocupantes se resisten al desalojo?",
        a: "En caso de resistencia, activamos el procedimiento judicial correspondiente con total apoyo de nuestro equipo legal. Coordinamos con la policía nacional o local y el juzgado competente para ejecutar el desalojo de forma forzosa pero completamente legal. Nuestros abogados gestionan todo el proceso judicial.",
      },
      {
        q: "¿Necesito abogado propio o Youssef OK lo gestiona todo?",
        a: "Disponemos de un departamento jurídico interno. No necesitas contratar abogado por separado para la mayoría de los casos. Nuestros abogados especializados en derecho de propiedad y desahucio gestionan todo el proceso legal incluido en nuestro servicio.",
      },
      {
        q: "¿Puedo actuar contra los ocupantes si han dañado mi propiedad?",
        a: "Sí. Documentamos todos los daños durante el proceso y te asesoramos para interponer las reclamaciones civiles o penales correspondientes. La ocupación ilegal puede conllevar delitos de usurpación, daños y allanamiento que pueden denunciarse.",
      },
    ],
  },
  {
    title: "Tiempos y Cobertura",
    faqs: [
      {
        q: "¿Con qué rapidez pueden responder a una emergencia?",
        a: "Nuestra línea de emergencias está disponible 24/7. Tras el primer contacto, un especialista evalúa tu caso en los siguientes 30 minutos. Podemos tener un equipo en tu localidad en pocas horas para casos urgentes. La intervención completa suele completarse en un plazo de 24 a 72 horas según la complejidad.",
      },
      {
        q: "¿En qué zonas de España operáis?",
        a: "Operamos en todo el territorio nacional: todas las comunidades autónomas, incluyendo Canarias, Baleares, Ceuta y Melilla. Disponemos de equipos locales en Madrid, Barcelona, Valencia, Sevilla, Bilbao, Málaga, Zaragoza y muchas otras ciudades, con red de colaboradores en el resto.",
      },
      {
        q: "¿Cuánto tarda normalmente una desokupación?",
        a: "Depende del caso. Las ocupaciones recientes (menos de 48 horas) pueden resolverse en 24-36 horas aplicando el protocolo de flagrante. Las ocupaciones establecidas con proceso legal completo tardan entre 3 y 15 días. Casos con resistencia judicial pueden extenderse más, aunque siempre trabajamos para acortar plazos.",
      },
    ],
  },
  {
    title: "Costes y Condiciones",
    faqs: [
      {
        q: "¿De verdad no pago nada hasta recuperar mi propiedad?",
        a: "Correcto. Este es nuestro compromiso principal. Solo cobramos honorarios cuando la propiedad está efectivamente en tu posesión de nuevo. Hay gastos judiciales y notariales que son obligatorios legalmente y que pueden ser necesarios, pero los honorarios de Youssef OK solo se abonan al recuperar la propiedad.",
      },
      {
        q: "¿Cuánto cuesta el servicio?",
        a: "Cada caso es diferente y el coste depende de factores como: localización, tipo de inmueble, número de ocupantes, necesidad de proceso judicial, etc. Ofrecemos una consulta inicial completamente gratuita donde evaluamos el caso y presentamos un presupuesto detallado sin compromiso.",
      },
      {
        q: "¿Qué pasa si no consiguen recuperar mi propiedad?",
        a: "En los raros casos en que no podemos completar la recuperación (algo que ocurre en menos del 2% de los casos que aceptamos), no cobramos honorarios por nuestro trabajo. Aceptamos los casos que tenemos certeza de poder resolver; si tenemos dudas, te lo comunicamos antes de empezar.",
      },
    ],
  },
  {
    title: "Tipos de Propiedades",
    faqs: [
      {
        q: "¿Trabajáis con propiedades comerciales además de viviendas?",
        a: "Sí, trabajamos con todo tipo de inmuebles: viviendas, pisos, casas unifamiliares, locales comerciales, naves industriales, terrenos, garajes y cualquier otro tipo de propiedad inmobiliaria susceptible de ocupación ilegal.",
      },
      {
        q: "¿Podéis ayudar con inquilinos que no pagan pero tienen contrato?",
        a: "Sí. Aunque técnicamente no son 'okupas', ofrecemos servicios de desahucio por impago de renta. Gestionamos el procedimiento judicial de forma ágil y te asesoramos sobre la protección del alquiler mediante seguros y contratos blindados para el futuro.",
      },
      {
        q: "¿Y si los ocupantes tienen menores o personas vulnerables?",
        a: "Esta situación requiere un protocolo especial que siempre respetamos. Coordinamos con servicios sociales cuando hay menores, pero esto no paraliza el proceso legal. El juez y los servicios sociales trabajan en paralelo. La ocupación ilegal sigue siendo ilegal independientemente de la situación familiar de los ocupantes.",
      },
    ],
  },
  {
    title: "Prevención y Seguridad",
    faqs: [
      {
        q: "¿Podéis proteger mi propiedad vacía para que no la ocupen?",
        a: "Sí, ofrecemos servicios de seguridad preventiva para inmuebles vacíos: vigilancia periódica, instalación de alarmas y cámaras, sellado de accesos, y protocolo de respuesta rápida ante cualquier intento de entrada no autorizada.",
      },
      {
        q: "¿La mediación está incluida en el servicio?",
        a: "Sí. En todos los casos evaluamos primero si la mediación puede resolver la situación de forma más rápida y menos costosa. Contamos con mediadores certificados que en muchos casos logran acuerdos voluntarios que evitan el proceso judicial completo.",
      },
    ],
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? "border-red-600/30 bg-red-900/10" : "border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${open ? "text-white" : "text-gray-200"}`}>
          {q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? "bg-red-600 rotate-0" : "bg-white/5"
          }`}
        >
          {open ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 px-4 bg-[#060606]" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: ci * 0.1, duration: 0.6 }}
            className="mb-12"
          >
            <h2
              className="text-2xl font-black text-white mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.05em" }}
            >
              <span className="w-8 h-0.5 bg-red-600" />
              {cat.title}
            </h2>
            <div className="space-y-3">
              {cat.faqs.map((faq, fi) => (
                <FAQItem key={fi} q={faq.q} a={faq.a} index={fi} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-br from-red-900/20 to-black border border-red-800/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-white font-bold text-xl mb-3">¿Tienes más preguntas?</h3>
          <p className="text-gray-400 text-sm mb-6">
            Nuestro equipo está disponible 24/7 para resolver cualquier duda sobre tu caso específico.
            La consulta inicial es completamente gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+34600893591"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(229,62,62,0.4)] text-sm"
            >
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/34600893591"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-full transition-all duration-200 text-sm"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
