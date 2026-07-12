"use client";

import * as React from "react";
import { productService } from "@/services/ProductService";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/cards/ProductCard";
import { H1, BodyLarge } from "@/components/ui/typography";

export default function ProductsPage() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    productService.getAllProducts().then(setProducts);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <H1 className="mb-6">Shop All</H1>
        <BodyLarge className="text-brand-graphite">
          Discover our full range of premium 316L Stainless Steel jewellery.
        </BodyLarge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
  );
}
