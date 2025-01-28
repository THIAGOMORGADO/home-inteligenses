'use client'

import { Carousel } from "@/components/ui/carousel"; // Adjust the import based on your setup
import { cn } from "@/lib/utils";

interface CarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, alt }) => {
  return (
    <Carousel
      className="w-full"
      autoPlay={true} // Enable automatic rotation
      interval={3000} // Set the interval for rotation
      showArrows={true} // Show navigation arrows
      showIndicators={true} // Show bullet indicators
    >
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <img src={image} alt={alt} className="object-cover w-full h-80" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel; 