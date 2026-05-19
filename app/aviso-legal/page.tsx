import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Youssef OK",
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-5xl font-black text-white mb-8"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
        >
          AVISO LEGAL
        </h1>
        <div className="space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">Datos Identificativos</h2>
          <p>
            En cumplimiento con el deber de información dispuesto en la Ley 34/2002
            de Servicios de la Sociedad de la Información y el Comercio Electrónico,
            se facilitan los siguientes datos:
          </p>
          <ul className="space-y-2">
            <li><strong className="text-white">Denominación social:</strong> Youssef OK S.L.</li>
            <li><strong className="text-white">CIF:</strong> B00000000</li>
            <li><strong className="text-white">Domicilio:</strong> Madrid, España</li>
            <li><strong className="text-white">Email:</strong> info@youssefok.es</li>
            <li><strong className="text-white">Teléfono:</strong> +34 900 000 000</li>
          </ul>
          <h2 className="text-2xl font-bold text-white">Objeto</h2>
          <p>
            Youssef OK S.L. es una empresa dedicada a la prestación de servicios de
            recuperación de propiedades, desokupación legal, mediación y seguridad
            inmobiliaria en España.
          </p>
          <h2 className="text-2xl font-bold text-white">Registro Mercantil</h2>
          <p>
            Inscrita en el Registro Mercantil de Madrid, Tomo 0000, Folio 000,
            Sección 0, Hoja M-000000, Inscripción 1ª.
          </p>
        </div>
      </div>
    </div>
  );
}
