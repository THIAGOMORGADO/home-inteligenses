import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Thermometer, Lock, Music } from "lucide-react"

const features = [
  { title: "Smart Lighting", icon: Lightbulb, description: "Control your lights with your voice or smartphone." },
  {
    title: "Climate Control",
    icon: Thermometer,
    description: "Adjust temperature for optimal comfort and energy savings.",
  },
  { title: "Security", icon: Lock, description: "Monitor and secure your home from anywhere." },
  { title: "Entertainment", icon: Music, description: "Play music, podcasts, and more with simple voice commands." },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Smart Home Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

