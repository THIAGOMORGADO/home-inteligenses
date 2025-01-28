import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projetos = [
  {
    titulo: "Casa Moderna",
    descricao: "Automação completa com controle de iluminação, temperatura e segurança, proporcionando conforto e eficiência.",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    titulo: "Apartamento Inteligente",
    descricao: "Automatização de sistemas de áudio multiroom e assistente de voz em todos os cômodos, integrando tecnologia ao seu dia a dia.",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    titulo: "Escritório Conectado",
    descricao: "Automação de dispositivos IoT para maior produtividade e eficiência energética, transformando seu espaço de trabalho.",
    imagem: "/placeholder.svg?height=200&width=300",
  },
]

export default function NossoTrabalho() {
  return (
    <section id="nosso-trabalho" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nosso Trabalho</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={projeto.imagem || "/placeholder.svg"}
                alt={projeto.titulo}
                width={400} // Increased width
                height={300} // Increased height
                className="w-full object-cover"
              />
              <CardContent className="p-6"> // Increased padding
                <h3 className="text-2xl font-semibold mb-3">{projeto.titulo}</h3> // Increased font size and margin
                <p className="text-muted-foreground text-lg">{projeto.descricao}</p> // Increased font size
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

