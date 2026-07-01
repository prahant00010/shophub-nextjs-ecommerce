"use client";

import { useState } from "react";
import { Sidebar, MobileFilterButton } from "@/components/layout/Sidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { FeaturedProduct } from "@/components/product/FeaturedProduct";
import { EmptyState } from "@/components/ui/EmptyState";
import { useProductFilters } from "@/hooks/useProductFilters";
import { FEATURED_PRODUCT_ID } from "@/lib/data/products";

export function HomeContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { filters, filteredProducts, updateFilters, resetFilters } =
    useProductFilters();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <Sidebar
          filters={filters}
          onUpdate={(updates) => {
            updateFilters(updates);
          }}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Product listing section */}
        <div className="flex-1 min-w-0">
          <MobileFilterButton onClick={() => setSidebarOpen(true)} />

          <div className="mb-6 flex items-baseline justify-between border-b border-gray-100 pb-4">
            <h1 className="text-3xl font-extrabold text-[#002d62]">
              Product Listing
            </h1>
            <span className="text-sm text-gray-500 font-medium">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} found
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <EmptyState type="products" onAction={resetFilters} />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                if (product.id === FEATURED_PRODUCT_ID) {
                  return (
                    <FeaturedProduct key={product.id} product={product} />
                  );
                }
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
