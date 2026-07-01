"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types";
import { formatPrice } from "@/lib/utils";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { useCartStore } from "@/store/cartStore";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;
  const lineTotal = product.price * quantity;

  return (
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow-card">
      <Link
        href={`/product/${product.id}`}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              href={`/product/${product.id}`}
              className="text-sm font-semibold text-gray-800 hover:text-primary-600 transition-colors"
            >
              {product.title}
            </Link>
            <p className="mt-0.5 text-sm text-gray-500">
              {formatPrice(product.price)} each
            </p>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label={`Remove ${product.title} from cart`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => increaseQuantity(product.id)}
            onDecrease={() => decreaseQuantity(product.id)}
          />
          <span className="text-base font-bold text-gray-900">
            {formatPrice(lineTotal)}
          </span>
        </div>
      </div>
    </div>
  );
}
