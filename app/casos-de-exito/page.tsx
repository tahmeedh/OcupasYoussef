import type { Metadata } from "next";
import CasesHero from "@/components/cases/CasesHero";
import CasesGrid from "@/components/cases/CasesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Casos de Éxito | Propiedades Recuperadas en Toda España",
  description:
    "Casos reales de recuperación de propiedades: pisos, casas y locales comerciales en toda España. Intervenciones rápidas y legales con resultados probados.",
};

export default function CasesPage() {
  return (
    <>
      <CasesHero />
      <CasesGrid />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
