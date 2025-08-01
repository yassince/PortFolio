import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
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
  title: "Yassin C.E",
  description: "Portfolio of Yassin Charrouf Errynda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Yassin C.E</title>
        <meta name="description" content="Portfolio of Yassin Charrouf Errynda" />
        <meta name="og:title" content="Yassin C.E" />
        
        <meta name="og:description" content="Portfolio of Yassin Charrouf Errynda" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://yassin-ce.vercel.app" />
        <meta name="og:image" content="https://yassin-ce.vercel-app/og-image.png" />
      </Head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
