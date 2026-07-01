"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Category, FilterState, Product } from "@/types";
import { MAX_PRICE, products } from "@/lib/data/products";

const DEFAULT_FILTERS: FilterState = {
  category: "all",
  priceRange: [0, MAX_PRICE],
  brand: "All Brands",
  search: "",
};

function parseCategory(value: string | null): Category {
  const valid: Category[] = ["all", "electronics", "clothing", "home"];
  if (value && valid.includes(value as Category)) {
    return value as Category;
  }
  return "all";
}

function parsePrice(value: string | null): [number, number] {
  if (!value) return [0, MAX_PRICE];
  const match = value.match(/^(\d+)-(\d+)$/);
  if (match) {
    return [parseInt(match[1], 10), parseInt(match[2], 10)];
  }
  return [0, MAX_PRICE];
}

function parseFiltersFromParams(searchParams: URLSearchParams): FilterState {
  return {
    category: parseCategory(searchParams.get("category")),
    priceRange: parsePrice(searchParams.get("price")),
    brand: searchParams.get("brand") ?? "All Brands",
    search: searchParams.get("search") ?? "",
  };
}

function buildQueryString(filters: FilterState): string {
  const params = new URLSearchParams();

  if (filters.category !== "all") {
    params.set("category", filters.category);
  }
  if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== MAX_PRICE) {
    params.set("price", `${filters.priceRange[0]}-${filters.priceRange[1]}`);
  }
  if (filters.brand !== "All Brands") {
    params.set("brand", filters.brand);
  }
  if (filters.search.trim()) {
    params.set("search", filters.search.trim());
  }

  return params.toString();
}

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters: FilterState = useMemo(
    () => parseFiltersFromParams(searchParams),
    [searchParams]
  );

  const updateFilters = useCallback(
    (updates: Partial<FilterState>) => {
      const next = { ...parseFiltersFromParams(searchParams), ...updates };
      const query = buildQueryString(next);
      router.replace(query ? `/?${query}` : "/", { scroll: false });
    },
    [searchParams, router]
  );

  const filteredProducts: Product[] = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        filters.category === "all" || product.category === filters.category;

      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      const matchesBrand =
        filters.brand === "All Brands" || product.brand === filters.brand;

      const matchesSearch =
        !filters.search.trim() ||
        product.title.toLowerCase().includes(filters.search.toLowerCase());

      return matchesCategory && matchesPrice && matchesBrand && matchesSearch;
    });
  }, [filters]);

  const resetFilters = useCallback(() => {
    router.replace("/", { scroll: false });
  }, [router]);

  return {
    filters,
    filteredProducts,
    updateFilters,
    resetFilters,
    defaultFilters: DEFAULT_FILTERS,
  };
}
