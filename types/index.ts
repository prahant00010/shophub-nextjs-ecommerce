export type Category = "all" | "electronics" | "clothing" | "home";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Exclude<Category, "all">;
  rating: number;
  image: string;
  brand: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: Category;
  priceRange: [number, number];
  brand: string;
  search: string;
}
