import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contacto | Consulta Gratuita Anti-Okupa",
  description:
    "Contáctanos para una consulta gratuita. Disponibles 24/7 por teléfono, WhatsApp o formulario. Respuesta inmediata garantizada.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  );
}
