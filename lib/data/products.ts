import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    description:
      "Premium athletic running shoes designed for ultimate comfort, durability, and shock absorption during workouts and long runs.",
    price: 99.0,
    category: "clothing",
    rating: 4.5,
    brand: "Active",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Wireless Headphones",
    description:
      "High-fidelity wireless Bluetooth headphones featuring active noise-cancellation and a long-lasting battery for pure audio enjoyment.",
    price: 99.0,
    category: "electronics",
    rating: 4.8,
    brand: "SoundMax",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Backpack",
    description:
      "Spacious and water-resistant everyday backpack with padded compartments, perfect for carrying laptops, textbooks, and travel essentials.",
    price: 129.0,
    category: "clothing",
    rating: 4.6,
    brand: "UrbanStyle",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Smartwatch",
    description:
      "Sleek smartwatch featuring activity tracking, heart rate monitoring, and smart notifications directly on your wrist.",
    price: 249.0,
    category: "electronics",
    rating: 4.7,
    brand: "TechWear",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Sunglasses",
    description:
      "Classic dark-tinted sunglasses with UV protection and a durable lightweight frame for a stylish, comfortable look.",
    price: 149.0,
    category: "clothing",
    rating: 4.4,
    brand: "UrbanStyle",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Digital Camera",
    description:
      "High-resolution compact digital camera featuring optical zoom and smart auto-focus, capturing your memories in stunning detail.",
    price: 499.0,
    category: "electronics",
    rating: 4.6,
    brand: "ViewTech",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
  },
  {
    id: "7",
    title: "T-shirt",
    description:
      "Comfortable and breathable cotton t-shirt in classic blue. Perfect for everyday casual wear.",
    price: 29.0,
    category: "clothing",
    rating: 4.3,
    brand: "EcoWear",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  },
  {
    id: "8",
    title: "Smartphone",
    description:
      "Lorem ipsum dolor amet, conssectetur euisagend.",
    price: 699.0,
    category: "electronics",
    rating: 4.5,
    brand: "TechWear",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
  },
];

export const FEATURED_PRODUCT_ID = "8";

export const MAX_PRICE = 1000;

export const CATEGORIES = [
  { value: "all" as const, label: "All" },
  { value: "electronics" as const, label: "Electronics" },
  { value: "clothing" as const, label: "Clothing" },
  { value: "home" as const, label: "Home" },
];

export const BRANDS = [
  "All Brands",
  ...Array.from(new Set(products.map((p) => p.brand))).sort(),
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProduct(): Product {
  return products.find((p) => p.id === FEATURED_PRODUCT_ID) ?? products[products.length - 1];
}
