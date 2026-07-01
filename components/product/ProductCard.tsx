"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white mb-3">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </Link>
      
      <div className="flex flex-col flex-1 justify-between">
        <div className="mb-3">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-[#0B60B0] transition-colors">
              {product.title}
            </h3>
          </Link>
          <span className="mt-1 block text-base font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>

        <Button
          onClick={() => addItem(product)}
          className="w-full bg-[#0B60B0] hover:bg-[#0a5297] text-white py-2 px-4 rounded-md text-xs font-semibold shadow-sm transition-colors duration-200"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </Button>
      </div>
    </motion.article>
  );
}
