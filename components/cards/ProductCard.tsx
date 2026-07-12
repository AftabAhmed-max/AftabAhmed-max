import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  material: string;
  category: string;
  isNewArrival?: boolean;
}

export function ProductCard({
  id,
  title,
  price,
  image,
  material,
  category,
  isNewArrival,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-white rounded-default border border-[#E0DCD6] shadow-card hover:shadow-cardHover transition-all duration-300 ease-in-out hover:-translate-y-[2px] overflow-hidden max-w-[380px]">
      <Link href={`/products/${id}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        {isNewArrival && (
          <div className="absolute top-4 left-4 bg-brand-ivory px-2 py-1">
            <span className="font-body text-[10px] font-medium tracking-[1.5px] uppercase text-brand-onyx">
              New Arrival
            </span>
          </div>
        )}
      </Link>
      <div className="p-5 md:p-8 flex flex-col flex-1">
        <div className="flex flex-col mb-4">
          <h3 className="font-display text-[28px] font-light leading-[1.2] mb-1">
            {title}
          </h3>
          <p className="font-body text-sm font-light text-brand-graphite">
            {material} · {category}
          </p>
          <p className="font-body text-base font-medium mt-2">
            ₹{price.toLocaleString("en-IN")}
          </p>
        </div>
        <div className="mt-auto">
          <Button variant="primary" className="w-full">
            Add to Bag
          </Button>
        </div>
      </div>
    </div>
  );
}
