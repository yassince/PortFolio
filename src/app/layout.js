import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yassin Charrouf Errynda · Junior SOC Analyst",
  description:
    "Portfolio de Yassin Charrouf Errynda, analista SOC junior. Ciberseguridad, Blue Team, DAW y redes.",
  metadataBase: new URL("https://yassin-ce.vercel.app"),
  openGraph: {
    title: "Yassin Charrouf Errynda · Junior SOC Analyst",
    description:
      "Ciberseguridad, Blue Team, análisis de incidentes y base en desarrollo web.",
    url: "https://yassin-ce.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
