'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/lib/utils"


export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-800 via-blue-600 to-purple-700">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Transforme Sua Casa com Alexa</h1>
            <p className="text-xl mb-8 text-gray-100">
              Descubra o futuro da vida inteligente com conforto e conveniência controlados por voz.
            </p>
            <a href="#recursos" onClick={(e) => { e.preventDefault(); smoothScroll(e); }}>
              <Button variant="secondary" size="lg" asChild>
                Saiba Mais
              </Button>
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Casa inteligente com Alexa"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="text-primary font-semibold">Controle por voz</p>
                <p className="text-muted-foreground">Simplificando sua vida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

