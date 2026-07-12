"use client";

import * as React from "react";
import { ProductCard } from "@/components/cards/ProductCard";
import { H2, BodyLarge } from "@/components/ui/typography";
import { productService } from "@/services/ProductService";
import { Product } from "@/types/product";

export function FeaturedProducts() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    productService.getAllProducts().then(setProducts);
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <H2 className="mb-4">Curated Selections</H2>
            <BodyLarge className="text-brand-graphite max-w-xl">
              Discover our most sought-after pieces, crafted with precision and plated in luxurious PVD gold.
            </BodyLarge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.images[0]}
              material={product.material}
              category={product.categoryId === "cat1" ? "Necklace" : "Bracelet"}
              isNewArrival={product.tags.includes("new")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
