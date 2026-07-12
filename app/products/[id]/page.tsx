"use client";

import * as React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { productService } from "@/services/ProductService";
import { Product } from "@/types/product";
import { H1, BodyLarge } from "@/components/ui/typography";
import { useCartStore } from "@/components/layout/CartDrawer";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    if (params.id) {
      productService.getProductById(params.id as string).then((data) => {
        if (data) setProduct(data);
      });
    }
  }, [params.id]);

  if (!product) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Product Images */}
        <div className="flex flex-col space-y-4">
          <div className="relative aspect-[4/5] bg-brand-linen rounded-default overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="font-body text-xs font-medium tracking-[2px] uppercase text-brand-gold mb-4">
            GLAMMYN
          </p>
          <H1 className="mb-4">{product.title}</H1>
          <p className="font-body text-2xl font-medium mb-8">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <BodyLarge className="mb-12 text-brand-graphite">
            {product.description}
          </BodyLarge>

          <div className="space-y-6 mb-12">
            <Button variant="primary" size="lg" className="w-full" onClick={() => useCartStore.getState().addItem(product)}>
              Add to Bag
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              Add to Wishlist
            </Button>
          </div>

          <div className="border-t border-brand-sand pt-8">
            <h3 className="font-body text-sm font-medium uppercase tracking-[1.5px] mb-4">
              Details
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm font-light text-brand-graphite">
                <span className="w-2 h-2 bg-brand-gold rounded-full mr-3" />
                Material: {product.material}
              </li>
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm font-light text-brand-graphite">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
