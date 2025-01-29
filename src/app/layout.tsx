import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CasaInteligente - Transforme Sua Casa com Alexa",
  description: "Descubra o futuro da vida inteligente com conforto e conveniência controlados por voz.",
  openGraph: {
    title: "CasaInteligente - Transforme Sua Casa com Alexa",
    description: "Descubra o futuro da vida inteligente com conforto e conveniência controlados por voz.",
    url: "https://home-inteligenses.vercel.app",
    images: [
      {
        url: "https://home-inteligenses.vercel.app/src/assets/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Delicious Burger",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CasaInteligente - Transforme Sua Casa com Alexa",
    description: "Descubra o futuro da vida inteligente com conforto e conveniência controlados por voz.",
    images: ["https://home-inteligenses.vercel.app/src/assets/Logo.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}