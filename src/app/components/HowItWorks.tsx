'use client'

import { CheckCircle } from "lucide-react"

const steps = [
  "Set up your Alexa device",
  "Connect your smart home devices",
  "Customize your preferences",
  "Start using voice commands",
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

