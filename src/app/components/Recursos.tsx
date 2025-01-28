'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Thermometer, Lock, Music } from "lucide-react"

const recursos = [
  { title: "Iluminação Inteligente", icon: Lightbulb, description: "Controle suas luzes com sua voz ou smartphone." },
  {
    title: "Controle de Clima",
    icon: Thermometer,
    description: "Ajuste a temperatura para conforto ideal e economia de energia.",
  },
  { title: "Segurança", icon: Lock, description: "Monitore e proteja sua casa de qualquer lugar." },
  {
    title: "Entretenimento",
    icon: Music,
    description: "Reproduza música, podcasts e mais com simples comandos de voz.",
  },
]

export default function Recursos() {
  return (
    <section id="recursos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recursos da Casa Inteligente</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recursos.map((recurso, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <recurso.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-center">{recurso.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{recurso.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

