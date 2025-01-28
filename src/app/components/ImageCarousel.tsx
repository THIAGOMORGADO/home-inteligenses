"use client"
import React from 'react';
import { Carousel } from "@/components/ui/carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect, useMemo } from "react"


interface ImageCarouselProps {
  images: string[]
  alt: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState<boolean[]>(images.map(() => true))

  useEffect(() => {
    if (!api) return
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const handleImageLoad = (index: number) => {
    setLoading((prev) => {
      const newLoading = [...prev]
      newLoading[index] = false
      return newLoading
    })
  }

  return (
    <Carousel autoPlay={true} interval={3000} showArrows={true} showIndicators={true}>
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <img src={image} alt={alt} className="object-cover w-full h-40" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

