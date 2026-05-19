import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Servicios Anti-Okupa | Desokupación, Seguridad y Mediación",
  description:
    "Servicios completos anti-okupa: desokupación urgente, recuperación de inmuebles, asistencia legal, mediación, seguridad y vigilancia. Cobertura nacional.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
