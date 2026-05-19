import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso | Youssef OK",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-5xl font-black text-white mb-8"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
        >
          TÉRMINOS DE USO
        </h1>
        <div className="space-y-6 text-gray-300">
          <p>
            El acceso y uso de este sitio web implica la aceptación de los presentes
            términos y condiciones de uso, que podrán ser modificados sin previo aviso.
          </p>
          <h2 className="text-2xl font-bold text-white">Objeto</h2>
          <p>
            Este sitio web tiene como finalidad presentar los servicios de Youssef OK
            y facilitar el contacto con clientes potenciales.
          </p>
          <h2 className="text-2xl font-bold text-white">Propiedad Intelectual</h2>
          <p>
            Todos los contenidos de este sitio web son propiedad de Youssef OK y están
            protegidos por las leyes de propiedad intelectual e industrial vigentes en España.
          </p>
          <h2 className="text-2xl font-bold text-white">Limitación de Responsabilidad</h2>
          <p>
            Youssef OK no se hace responsable de los daños derivados del uso incorrecto
            de este sitio web ni de la información contenida en él.
          </p>
          <h2 className="text-2xl font-bold text-white">Ley Aplicable</h2>
          <p>
            Los presentes términos se rigen por la legislación española. Para cualquier
            controversia, las partes se someten a los juzgados de Madrid.
          </p>
        </div>
      </div>
    </div>
  );
}
