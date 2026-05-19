import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TickerBanner from "@/components/home/TickerBanner";
import TrustBadges from "@/components/home/TrustBadges";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import MetricsSection from "@/components/home/MetricsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Youssef OK | Anti-Okupa Spain | Recuperación de Propiedades",
  description:
    "Youssef OK — No pagás hasta recuperar tus llaves. Servicio anti-okupa líder en España. Intervención rápida, proceso legal, disponibles 24/7.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBanner />
      <TrustBadges />
      <AboutPreview />
      <ServicesPreview />
      <MetricsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
