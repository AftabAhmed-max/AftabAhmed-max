import { BaseEntity } from "./index";

export interface Product extends BaseEntity {
  title: string;
  slug: string;
  price: number;
  comparePrice?: number;
  images: string[];
  categoryId: string;
  collectionId?: string;
  tags: string[];
  description: string;
  features: string[];
  material: string;
  inventory: number;
  status: "active" | "draft" | "archived";
}

export interface Collection extends BaseEntity {
  name: string;
  slug: string;
  description: string;
  image: string;
  isFeatured: boolean;
  seoMetadata: {
    title: string;
    description: string;
  };
}

export interface Category extends BaseEntity {
  name: string;
  slug: string;
  description: string;
  image?: string;
}
