"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { formatPrice, capitalizeCategory } from "@/lib/utils";
import { getProductById } from "@/lib/data/products";
import { useCartStore } from "@/store/cartStore";

interface ProductDetailContentProps {
  id: string;
}

export function ProductDetailContent({ id }: ProductDetailContentProps) {
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery product={product} />

        <div className="flex flex-col">
          <span className="mb-2 inline-block w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-700">
            {capitalizeCategory(product.category)}
          </span>
          <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
            {product.title}
          </h1>
          <RatingStars rating={product.rating} size="md" />
          <p className="mt-2 text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="mt-6 text-3xl font-bold text-primary-700">
            {formatPrice(product.price)}
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            {product.description}
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Quantity
              </span>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity((q) => Math.min(q + 1, 99))}
                onDecrease={() => setQuantity((q) => Math.max(q - 1, 1))}
              />
            </div>
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="w-full sm:w-auto"
              aria-label={`Add ${quantity} ${product.title} to cart`}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
