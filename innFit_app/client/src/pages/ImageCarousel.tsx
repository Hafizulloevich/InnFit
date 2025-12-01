import React, { useState } from "react";
import { Product } from "@/data/products";

interface ImageCarouselProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageCarousel({ product, isOpen, onClose }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [product.image, product.image]; // Can extend with more images

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center safe-top safe-bottom" onClick={onClose}>
      <div className="relative w-full max-w-md bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-100 active:scale-95 transition-all"
        >
          ✕
        </button>

        <div className="aspect-square bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 active:scale-95 transition-all"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 active:scale-95 transition-all"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-white w-8" : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="p-6">
          <h2 className="font-bold text-xl mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-4">{product.fullDescription}</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">${product.price}</span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="font-medium">{product.rating}</span>
              <span className="text-xs text-green-600 font-semibold">{product.fit}% fit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
