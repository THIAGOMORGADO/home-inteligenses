'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Heart, TrendingUp } from "lucide-react"

const beneficios = [
  { title: "Maior Segurança", icon: Shield, description: "Monitore sua casa e receba alertas em tempo real." },
  {
    title: "Eficiência Energética",
    icon: Zap,
    description: "Reduza o consumo de energia e economize na conta de luz.",
  },
  { title: "Conforto Aprimorado", icon: Heart, description: "Crie ambientes personalizados para cada momento do dia." },
  {
    title: "Valorização do Imóvel",
    icon: TrendingUp,
    description: "Aumente o valor da sua propriedade com tecnologia de ponta.",
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefícios da Casa Inteligente</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className="bg-primary text-primary-foreground p-6 group-hover:bg-primary/90 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <beneficio.icon className="w-8 h-8 mr-4" />
                  <CardTitle className="text-xl font-semibold">{beneficio.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">{beneficio.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

