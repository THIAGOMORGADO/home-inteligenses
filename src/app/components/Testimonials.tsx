'use client'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "John Doe",
    avatar: "JD",
    comment: "Alexa has made my life so much easier. I can control everything in my home with just my voice!",
  },
  {
    name: "Jane Smith",
    avatar: "JS",
    comment: "The smart home features are incredible. I feel safer and more comfortable in my home than ever before.",
  },
  {
    name: "Mike Johnson",
    avatar: "MJ",
    comment: "Setting up was a breeze, and now I can't imagine living without these smart features.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{testimonial.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>&quot;{testimonial.comment}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

