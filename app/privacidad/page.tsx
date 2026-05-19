import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Youssef OK",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-5xl font-black text-white mb-8"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
        >
          POLÍTICA DE PRIVACIDAD
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p>
            En Youssef OK tratamos tus datos personales con total responsabilidad y
            de conformidad con el Reglamento General de Protección de Datos (RGPD) y
            la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los
            derechos digitales (LOPDGDD).
          </p>
          <h2 className="text-2xl font-bold text-white">Responsable del Tratamiento</h2>
          <p>Youssef OK S.L. · CIF: B00000000 · info@youssefok.es · +34 900 000 000</p>
          <h2 className="text-2xl font-bold text-white">Datos que Recogemos</h2>
          <p>
            Nombre, teléfono, email y descripción del caso, únicamente cuando nos los
            facilitas voluntariamente a través de nuestros formularios de contacto.
          </p>
          <h2 className="text-2xl font-bold text-white">Finalidad y Base Legal</h2>
          <p>
            Gestión de consultas y prestación del servicio. Base legal: ejecución de un
            contrato o medidas precontractuales a solicitud del interesado.
          </p>
          <h2 className="text-2xl font-bold text-white">Conservación</h2>
          <p>Datos conservados durante el tiempo necesario para la prestación del servicio y las obligaciones legales correspondientes.</p>
          <h2 className="text-2xl font-bold text-white">Tus Derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
            limitación y portabilidad escribiendo a info@youssefok.es con asunto "Protección de Datos".
          </p>
        </div>
      </div>
    </div>
  );
}
