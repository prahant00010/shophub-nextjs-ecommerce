"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="flex h-10 w-10 items-center justify-center rounded-l-lg text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span
        className="flex h-10 w-12 items-center justify-center border-x border-gray-200 text-sm font-semibold"
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="flex h-10 w-10 items-center justify-center rounded-r-lg text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-40"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
