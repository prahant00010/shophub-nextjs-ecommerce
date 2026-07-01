import { Product } from "@/types";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function capitalizeCategory(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export function getProductImages(product: Product): string[] {
  const base = product.image;
  return [
    base,
    base.replace("w=600", "w=601"),
    base.replace("w=600", "w=602"),
    base.replace("w=600", "w=603"),
  ];
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
