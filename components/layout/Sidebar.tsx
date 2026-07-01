"use client";

import { X, SlidersHorizontal } from "lucide-react";
import { FilterState } from "@/types";
import { MAX_PRICE, CATEGORIES } from "@/lib/data/products";

interface SidebarProps {
  filters: FilterState;
  onUpdate: (updates: Partial<FilterState>) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

function SidebarFilters({
  filters,
  onUpdate,
}: {
  filters: FilterState;
  onUpdate: (updates: Partial<FilterState>) => void;
}) {
  const handlePriceSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = parseInt(e.target.value, 10);
    onUpdate({ priceRange: [filters.priceRange[0], max] });
  };

  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = parseInt(e.target.value, 10) || 0;
    onUpdate({ priceRange: [filters.priceRange[0], max] });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Blue Filters Card */}
      <div className="rounded-2xl bg-[#0B60B0] p-5 text-white shadow-md">
        <h3 className="mb-4 text-base font-bold">Filters</h3>

        {/* Category Radios */}
        <fieldset className="mb-6">
          <legend className="mb-3 text-sm font-semibold text-white/90">Category</legend>
          <div className="space-y-2.5">
            {CATEGORIES.map((cat) => (
              <label
                key={cat.value}
                className="flex cursor-pointer items-center gap-3 text-sm text-white/90 transition-opacity hover:opacity-80"
              >
                <input
                  type="radio"
                  name="category-blue"
                  value={cat.value}
                  checked={filters.category === cat.value}
                  onChange={() => onUpdate({ category: cat.value })}
                  className="h-4 w-4 cursor-pointer border-white/40 bg-transparent text-[#002d62] accent-[#002d62] focus:ring-0"
                />
                <span>{cat.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Price Slider */}
        <div>
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-white/90">
            <span>Price</span>
          </div>
          <input
            type="range"
            min={0}
            max={MAX_PRICE}
            step={10}
            value={filters.priceRange[1]}
            onChange={handlePriceSliderChange}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/30 accent-white"
            aria-label="Filter by max price"
          />
          <div className="mt-2 flex justify-between text-xs text-white/80">
            <span>0</span>
            <span>{MAX_PRICE}</span>
          </div>
        </div>
      </div>

      {/* 2. White Cacyroy Card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
        <h3 className="mb-4 text-base font-bold text-gray-900">Cacyroy</h3>

        {/* Category Radios */}
        <fieldset className="mb-6">
          <div className="space-y-2.5">
            {CATEGORIES.map((cat) => (
              <label
                key={cat.value}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700 transition-colors hover:text-gray-900"
              >
                <input
                  type="radio"
                  name="category-white"
                  value={cat.value}
                  checked={filters.category === cat.value}
                  onChange={() => onUpdate({ category: cat.value })}
                  className="h-4 w-4 cursor-pointer border-gray-300 text-[#0B60B0] accent-[#0B60B0] focus:ring-[#0B60B0]/20"
                />
                <span>{cat.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Price Input */}
        <div>
          <label htmlFor="price-number-input" className="mb-2.5 block text-sm font-semibold text-gray-800">
            Price
          </label>
          <input
            id="price-number-input"
            type="number"
            min={0}
            max={5000}
            value={filters.priceRange[1]}
            onChange={handlePriceInputChange}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-[#0B60B0] focus:outline-none focus:ring-2 focus:ring-[#0B60B0]/20"
          />
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ filters, onUpdate, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-24 flex flex-col gap-6">
          <SidebarFilters filters={filters} onUpdate={onUpdate} />
        </div>
      </aside>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-hidden="true"
          />
          <aside className="absolute left-0 top-0 h-full w-72 max-w-[85vw] overflow-y-auto bg-[#F5F8FC] p-5 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-800">
                <SlidersHorizontal className="h-4 w-4 text-[#0B60B0]" />
                Filters
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-200"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarFilters filters={filters} onUpdate={onUpdate} />
          </aside>
        </div>
      )}
    </>
  );
}

export function MobileFilterButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mb-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-card transition-colors hover:bg-gray-50 lg:hidden"
      aria-label="Open filters"
    >
      <SlidersHorizontal className="h-4 w-4 text-[#0B60B0]" />
      Filters
    </button>
  );
}
