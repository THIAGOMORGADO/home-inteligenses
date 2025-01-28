"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const passos = [
  {
    title: "Configure seu dispositivo Alexa",
    description: "Conecte seu dispositivo Alexa à rede Wi-Fi e faça o download do aplicativo Alexa.",
  },
  {
    title: "Conecte seus dispositivos de casa inteligente",
    description: "Adicione lâmpadas, termostatos e outros dispositivos compatíveis ao seu sistema Alexa.",
  },
  {
    title: "Personalize suas preferências",
    description: "Configure rotinas, grupos de dispositivos e comandos personalizados para sua conveniência.",
  },
  {
    title: "Comece a usar comandos de voz",
    description: 'Diga "Alexa" seguido de seu comando para controlar sua casa inteligente.',
  },
]

export default function ComoFunciona() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="max-w-4xl mx-auto">
          {passos.map((passo, index) => (
            <Card
              key={index}
              className={`mb-8 transition-all duration-300 ${activeStep === index ? "bg-primary/10 shadow-md" : ""}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <CardHeader className="flex flex-row items-center space-x-4">
                <CheckCircle className={`w-6 h-6 ${activeStep === index ? "text-primary" : "text-muted-foreground"}`} />
                <CardTitle>{passo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-muted-foreground transition-all duration-300 ${
                    activeStep === index ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                  }`}
                >
                  {passo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

