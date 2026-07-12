import { MockRepository } from "@/repositories/MockRepository";
import { Product } from "@/types/product";

class ProductService {
  private repository = new MockRepository<Product>("products");

  async getAllProducts(): Promise<Product[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return this.repository.findAll();
  }

  async getProductById(id: string): Promise<Product | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.repository.findById(id);
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    const products = await this.getAllProducts();
    return products.filter((p) => p.categoryId === categoryId);
  }

  async getProductsByCollection(collectionId: string): Promise<Product[]> {
    const products = await this.getAllProducts();
    return products.filter((p) => p.collectionId === collectionId);
  }

  // Admin operations
  async createProduct(product: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
    return this.repository.create(product);
  }

  async updateProduct(id: string, payload: Partial<Product>): Promise<Product | undefined> {
    return this.repository.update(id, payload);
  }
}

export const productService = new ProductService();
