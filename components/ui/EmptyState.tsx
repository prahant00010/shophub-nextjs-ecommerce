"use client";

import { PackageOpen, ShoppingCart } from "lucide-react";
import { Button } from "./Button";

interface EmptyStateProps {
  type: "cart" | "products";
  onAction?: () => void;
}

export function EmptyState({ type, onAction }: EmptyStateProps) {
  const isCart = type === "cart";

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
        {isCart ? (
          <ShoppingCart className="h-12 w-12 text-gray-300" />
        ) : (
          <PackageOpen className="h-12 w-12 text-gray-300" />
        )}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {isCart ? "Your cart is empty" : "No Products Found"}
      </h3>
      <p className="mb-6 max-w-sm text-sm text-gray-500">
        {isCart
          ? "Looks like you haven't added anything to your cart yet."
          : "Try adjusting your filters or search terms to find what you're looking for."}
      </p>
      {onAction && (
        <Button onClick={onAction} aria-label={isCart ? "Continue shopping" : "Clear filters"}>
          {isCart ? "Continue Shopping" : "Clear Filters"}
        </Button>
      )}
    </div>
  );
}
