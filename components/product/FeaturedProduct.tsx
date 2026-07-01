"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice, capitalizeCategory } from "@/lib/utils";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="col-span-1 flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md md:col-span-2 lg:col-span-2">
      <div className="grid gap-6 md:grid-cols-[2fr_3fr] h-full items-center">
        {/* Left Side: Image */}
        <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] md:aspect-auto md:h-64 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </Link>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <Link href={`/product/${product.id}`}>
              <h2 className="text-2xl font-bold text-gray-900 hover:text-[#0B60B0] transition-colors">
                {product.title}
              </h2>
            </Link>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            </div>
            
            <div className="mt-2">
              <RatingStars rating={product.rating} size="md" />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {product.description}
            </p>

            <div className="mt-4">
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Category
              </span>
              <span className="text-sm font-medium text-gray-800">
                {capitalizeCategory(product.category)}
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-start">
            <Button
              onClick={() => addItem(product)}
              className="bg-[#0B60B0] hover:bg-[#0a5297] text-white py-2.5 px-8 rounded-md text-sm font-semibold shadow-sm transition-colors duration-200"
              aria-label={`Add ${product.title} to cart`}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
