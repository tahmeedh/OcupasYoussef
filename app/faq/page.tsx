import type { Metadata } from "next";
import FAQHero from "@/components/faq/FAQHero";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Anti-Okupa España",
  description:
    "Resolvemos tus dudas sobre el proceso anti-okupa: legalidad, plazos, costes, cobertura territorial y más. Consulta gratuita disponible.",
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQAccordion />
      <CtaBanner />
    </>
  );
}
