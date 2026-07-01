"use client";

import Link from "next/link";
import { Suspense } from "react";
import { ShoppingCart } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { useCartStore } from "@/store/cartStore";
import { useHydration } from "@/hooks/useHydration";
import { useProductFilters } from "@/hooks/useProductFilters";
import { usePathname } from "next/navigation";

function HeaderSearch() {
  const { filters, updateFilters } = useProductFilters();

  return (
    <SearchBar
      value={filters.search}
      onChange={(search) => updateFilters({ search })}
      placeholder="Search for products..."
      className="w-full max-w-lg mx-auto"
    />
  );
}

function CartButton() {
  const hydrated = useHydration();
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <Link
      href="/cart"
      className="relative flex h-10 items-center gap-2 rounded-lg bg-[#002d62] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#001c3d]"
      aria-label="View cart"
    >
      <ShoppingCart className="h-4 w-4 fill-white" />
      <span className="hidden sm:inline">Cart</span>
      <Badge count={hydrated ? totalItems : 0} className="!-top-1 !-right-1 bg-red-500 text-white" />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-[#0B60B0] shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div
          className={
            isHome
              ? "grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] items-center gap-x-4 gap-y-3 md:grid-rows-1"
              : "flex items-center justify-between"
          }
        >
          <Link
            href="/"
            className="col-start-1 row-start-1 flex shrink-0 items-center text-white"
            aria-label="ShopHub home"
          >
            <span className="text-3xl font-extrabold tracking-tight font-sans">Logo</span>
          </Link>

          {isHome && (
            <div className="col-span-3 row-start-2 border-t border-white/10 pt-3 md:col-span-1 md:col-start-2 md:row-start-1 md:border-t-0 md:pt-0">
              <Suspense
                fallback={
                  <div className="h-10 animate-pulse rounded-lg bg-white/20" />
                }
              >
                <HeaderSearch />
              </Suspense>
            </div>
          )}

          <div className="col-start-3 row-start-1 flex items-center gap-3 sm:gap-4">
            <CartButton />
            <Avatar alt="User profile" />
          </div>
        </div>
      </div>
    </header>
  );
}
