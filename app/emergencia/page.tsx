import type { Metadata } from "next";
import EmergencyPage from "@/components/emergency/EmergencyPage";

export const metadata: Metadata = {
  title: "EMERGENCIA 24/7 | Llama Ahora | Anti-Okupa España",
  description:
    "Propiedad ocupada? Llama ahora. Intervención anti-okupa de emergencia en toda España. Respuesta en horas. Sin pago previo.",
};

export default function Emergency() {
  return <EmergencyPage />;
}
