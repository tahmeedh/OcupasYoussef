import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import TeamSection from "@/components/about/TeamSection";
import TimelineSection from "@/components/about/TimelineSection";
import ValuesSection from "@/components/about/ValuesSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Equipo Experto Anti-Okupa",
  description:
    "Conoce al equipo de Youssef OK. Más de 10 años de experiencia en recuperación de propiedades, mediación legal y soluciones anti-okupa en toda España.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CtaBanner />
    </>
  );
}
