"use client";

import { useState } from "react";
import Image from "next/image";
import { getProductImages, cn } from "@/lib/utils";
import { Product } from "@/types";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const images = getProductImages(product);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-card">
        <Image
          src={images[selectedIndex]}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-all",
              selectedIndex === index
                ? "border-primary-600 ring-2 ring-primary-200"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={img}
              alt={`${product.title} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
