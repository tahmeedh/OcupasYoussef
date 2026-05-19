import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Youssef OK | Anti-Okupa Spain | Property Recovery Experts",
    template: "%s | Youssef OK Anti-Okupa",
  },
  description:
    "Youssef OK - Spain's premier anti-okupa and property recovery specialists. Fast, legal, and effective illegal occupant removal. 24/7 emergency response. No payment until you recover your property.",
  keywords: [
    "anti okupa Spain",
    "okupa removal",
    "property recovery Spain",
    "anti squat services",
    "emergency property recovery",
    "illegal occupant removal",
    "desokupación",
    "recuperar propiedad",
    "okupa killer",
    "servicio antiokupa",
    "lanzamiento judicial",
    "mediación okupa",
  ],
  authors: [{ name: "Youssef OK" }],
  creator: "Youssef OK",
  publisher: "Youssef OK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://youssefok.es",
    title: "Youssef OK | Anti-Okupa Spain | Property Recovery Experts",
    description:
      "Spain's fastest anti-okupa team. We recover your property legally and efficiently. 24/7 emergency response. No payment until you get your keys back.",
    siteName: "Youssef OK",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Youssef OK Anti-Okupa Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef OK | Anti-Okupa Spain",
    description:
      "Spain's fastest anti-okupa team. 24/7 emergency response. No payment until you recover your property.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://youssefok.es",
    languages: {
      "es-ES": "https://youssefok.es",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Youssef OK - Anti-Okupa",
              description:
                "Professional anti-okupa and property recovery services across Spain",
              url: "https://youssefok.es",
              telephone: "+34-900-000-000",
              email: "info@youssefok.es",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.4168,
                longitude: -3.7038,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "€€",
              serviceArea: {
                "@type": "Country",
                name: "Spain",
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
