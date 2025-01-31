import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CasaInteligente - Transforme Sua Casa com Alexa",
  description: "Descubra o futuro da vida inteligente com conforto e conveniência controlados por voz.",
  keywords: "Casa Inteligente, Alexa, Automação, Tecnologia, Conforto, Conveniência",
  openGraph: {
    title: "CasaInteligente - Transforme Sua Casa com Alexa",
    description: "Descubra o futuro da vida inteligente com conforto e conveniência controlados por voz.",
    url: "https://www.casainteligente.com",
    images: [
      "https://www.casainteligente.com/Logo.png", // URL absoluta da imagem
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CasaInteligente - Transforme Sua Casa com Alexa",
    description: "Descubra o futuro da vida inteligente com conforto e conveniência controlados por voz.",
    images: [
      "https://www.casainteligente.com/Logo.png", // URL absoluta da imagem
    ],
  },
}

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