import { MockRepository } from "@/repositories/MockRepository";
import { Collection } from "@/types/product";

class CollectionService {
  private repository = new MockRepository<Collection>("collections");

  async getAllCollections(): Promise<Collection[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return this.repository.findAll();
  }

  async getCollectionById(id: string): Promise<Collection | undefined> {
    return this.repository.findById(id);
  }

  async getFeaturedCollections(): Promise<Collection[]> {
    const collections = await this.getAllCollections();
    return collections.filter((c) => c.isFeatured);
  }
}

export const collectionService = new CollectionService();
