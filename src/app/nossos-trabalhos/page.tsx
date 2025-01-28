'use client'

import ImageCarousel from "@/app/components/Carousel"; // Ensure the path is correct
const images = [
  "/slide1/01.jpg",
  "/slide1/02.jpg",
  "/slide1/03.jpg",
  "/slide1/04.jpg",
  "/slide1/05.jpg",
  "/slide1/06.jpg",
  "/slide1/07.jpg",
  "/slide1/08.jpg",
  "/slide1/09.jpg",
  "/slide1/10.jpg",
  "/slide1/11.jpg",
  "/slide1/12.jpg",
  "/slide1/13.jpg",
  "/slide1/14.jpg",
  "/slide1/15.jpg",
  "/slide1/16.jpg",
  "/slide1/17.jpg",
  "/slide1/18.jpg",
];





const trabalhos = [
  {
    title: "Automação Residencial Inteligente",
    description: "Transforme sua casa em um lar inteligente com controle de iluminação, temperatura e segurança, tudo acessível pelo seu smartphone.",
    images: images,
  },
  {
    title: "Sistema de Som Multiambiente",
    description: "Desfrute de música em todos os cômodos da sua casa com um sistema de som integrado que pode ser controlado por voz ou aplicativo.",
    images: images,
  },
  {
    title: "Controle de Segurança Avançado",
    description: "Monitore sua casa em tempo real com câmeras de segurança inteligentes e alarmes que podem ser gerenciados remotamente.",
    images: images,
  },
  
]

export default function NossosTrabalhos() {
  return (
    <section id="nossos-trabalhos" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nossos Trabalhos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trabalhos.map((trabalho, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <ImageCarousel images={trabalho.images} alt={trabalho.title} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{trabalho.title}</h3>
                <p className="text-gray-700">{trabalho.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

