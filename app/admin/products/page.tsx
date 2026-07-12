"use client";

import * as React from "react";
import { H2, Body } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { productService } from "@/services/ProductService";
import { Product } from "@/types/product";

export default function AdminProductsPage() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    productService.getAllProducts().then(setProducts);
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <H2 className="mb-2">Products</H2>
          <Body className="text-brand-graphite">Manage your product inventory.</Body>
        </div>
        <Button>Add New Product</Button>
      </div>

      <div className="bg-white rounded-default border border-brand-sand shadow-card overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-brand-linen border-b border-brand-sand">
            <tr>
              <th className="px-6 py-4 font-body text-xs font-medium uppercase tracking-widest text-brand-graphite">Product</th>
              <th className="px-6 py-4 font-body text-xs font-medium uppercase tracking-widest text-brand-graphite">Status</th>
              <th className="px-6 py-4 font-body text-xs font-medium uppercase tracking-widest text-brand-graphite">Inventory</th>
              <th className="px-6 py-4 font-body text-xs font-medium uppercase tracking-widest text-brand-graphite">Price</th>
              <th className="px-6 py-4 font-body text-xs font-medium uppercase tracking-widest text-brand-graphite text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-sand">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-brand-ivory/50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-body text-sm font-medium">{product.title}</p>
                  <p className="font-body text-xs text-brand-graphite">{product.slug}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-[10px] font-medium tracking-wider uppercase rounded-subtle">
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-body text-sm">{product.inventory} in stock</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-body text-sm font-medium">₹{product.price.toLocaleString("en-IN")}</p>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
