import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Youssef OK",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-5xl font-black text-white mb-8"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
        >
          POLÍTICA DE COOKIES
        </h1>
        <div className="space-y-6 text-gray-300">
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la
            experiencia de usuario y analizar el tráfico del sitio.
          </p>
          <h2 className="text-2xl font-bold text-white">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo cuando visitas un sitio web.
          </p>
          <h2 className="text-2xl font-bold text-white">Tipos de cookies que usamos</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
            <li><strong className="text-white">Analíticas:</strong> Google Analytics para entender cómo usas el sitio.</li>
            <li><strong className="text-white">Preferencias:</strong> Recordamos tus preferencias de configuración.</li>
          </ul>
          <h2 className="text-2xl font-bold text-white">Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar tu navegador para rechazar todas las cookies o para que
            te avise cuando se envíe una cookie. Consulta la documentación de tu navegador.
          </p>
        </div>
      </div>
    </div>
  );
}
