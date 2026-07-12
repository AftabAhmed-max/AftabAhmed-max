"use client";

import * as React from "react";
import { collectionService } from "@/services/CollectionService";
import { Collection } from "@/types/product";
import { CollectionCard } from "@/components/cards/CollectionCard";
import { H1, BodyLarge } from "@/components/ui/typography";

export default function CollectionsPage() {
  const [collections, setCollections] = React.useState<Collection[]>([]);

  React.useEffect(() => {
    collectionService.getAllCollections().then(setCollections);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <H1 className="mb-6">Our Collections</H1>
        <BodyLarge className="text-brand-graphite">
          Discover our curated ranges of premium 316L Stainless Steel jewellery.
          Designed for the modern woman who values timeless sophistication.
        </BodyLarge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.name}
            image={collection.image}
            link={`/collections/${collection.id}`}
          />
        ))}
      </div>
    </div>
  );
}
