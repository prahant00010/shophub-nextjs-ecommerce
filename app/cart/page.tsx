"use client";

import Link from "next/link";
import { CartItem } from "@/components/cart/CartItem";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, getSubtotal, clearCart } = useCartStore();
  const subtotal = getSubtotal();
  const shipping = items.length > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">Shopping Cart</h1>
        <EmptyState
          type="cart"
          onAction={() => {
            window.location.href = "/";
          }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:text-red-600 transition-colors"
          aria-label="Clear cart"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-card">
        <div className="space-y-3 border-b border-gray-100 pb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>{formatPrice(shipping)}</span>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <span className="text-lg font-semibold text-gray-900">Total</span>
          <span className="text-xl font-bold text-primary-700">
            {formatPrice(total)}
          </span>
        </div>
        <Button
          size="lg"
          className="mt-6 w-full"
          aria-label="Proceed to checkout"
        >
          Checkout
        </Button>
        <Link
          href="/"
          className="mt-3 block text-center text-sm text-primary-600 hover:text-primary-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
