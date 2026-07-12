import { Product, Collection, Category } from "@/types/product";
import { MockRepository } from "@/repositories/MockRepository";

const productRepo = new MockRepository<Product>("products");
const collectionRepo = new MockRepository<Collection>("collections");
const categoryRepo = new MockRepository<Category>("categories");

export const seedMockData = () => {
  const collections: Collection[] = [
    {
      id: "c1",
      name: "The Heritage Collection",
      slug: "heritage",
      description: "Timeless pieces inspired by classic luxury.",
      image: "/photos/WhatsApp Image 2026-07-08 at 3.55.38 PM.jpeg",
      isFeatured: true,
      seoMetadata: { title: "Heritage Collection | GLAMMYN", description: "Timeless luxury jewellery." },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "c2",
      name: "Modern Minimalist",
      slug: "modern-minimalist",
      description: "Understated elegance for everyday wear.",
      image: "/photos/WhatsApp Image 2026-07-08 at 3.55.39 PM.jpeg",
      isFeatured: true,
      seoMetadata: { title: "Modern Minimalist | GLAMMYN", description: "Minimalist luxury jewellery." },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ];

  const categories: Category[] = [
    { id: "cat1", name: "Necklaces", slug: "necklaces", description: "Elegant necklaces.", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: "cat2", name: "Bracelets", slug: "bracelets", description: "Premium bracelets.", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];

  const products: Product[] = [
    {
      id: "p1",
      title: "Signature Gold Chain",
      slug: "signature-gold-chain",
      price: 2499,
      images: ["/photos/WhatsApp Image 2026-07-08 at 3.55.37 PM (1).jpeg"],
      categoryId: "cat1",
      collectionId: "c1",
      tags: ["bestseller", "new"],
      description: "Crafted with precision from 316L stainless steel, featuring PVD gold plating.",
      features: ["Tarnish-resistant", "Waterproof", "Hypoallergenic"],
      material: "316L Stainless Steel",
      inventory: 50,
      status: "active",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "p2",
      title: "Minimal Cuff Bracelet",
      slug: "minimal-cuff-bracelet",
      price: 3299,
      images: ["/photos/WhatsApp Image 2026-07-08 at 3.55.36 PM.jpeg"],
      categoryId: "cat2",
      collectionId: "c2",
      tags: ["minimal", "new"],
      description: "A perfect everyday companion that whispers luxury.",
      features: ["Tarnish-resistant", "Sweat-proof"],
      material: "316L Stainless Steel",
      inventory: 30,
      status: "active",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ];

  collectionRepo.seed(collections);
  categoryRepo.seed(categories);
  productRepo.seed(products);
};
