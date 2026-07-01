import { ProductDetailContent } from "@/components/product/ProductDetailContent";
import { getProductById, products } from "@/lib/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);
  return {
    title: product ? `${product.title} | ShopHub` : "Product | ShopHub",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return <ProductDetailContent id={id} />;
}
