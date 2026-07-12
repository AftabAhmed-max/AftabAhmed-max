import { storageAdapter } from "@/storage/StorageAdapter";
import { BaseEntity, ID } from "@/types";

export class MockRepository<T extends BaseEntity> {
  protected collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  private getItems(): T[] {
    return storageAdapter.getItem<T[]>(this.collectionName) || [];
  }

  private setItems(items: T[]): void {
    storageAdapter.setItem(this.collectionName, items);
  }

  findAll(): T[] {
    return this.getItems();
  }

  findById(id: ID): T | undefined {
    return this.getItems().find((item) => item.id === id);
  }

  create(item: Omit<T, "id" | "createdAt" | "updatedAt">): T {
    const items = this.getItems();
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as T;

    items.push(newItem);
    this.setItems(items);
    return newItem;
  }

  update(id: ID, payload: Partial<T>): T | undefined {
    const items = this.getItems();
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;

    const updatedItem = {
      ...items[index],
      ...payload,
      updatedAt: new Date().toISOString(),
    };

    items[index] = updatedItem;
    this.setItems(items);
    return updatedItem;
  }

  delete(id: ID): boolean {
    const items = this.getItems();
    const filteredItems = items.filter((item) => item.id !== id);
    if (items.length === filteredItems.length) return false;

    this.setItems(filteredItems);
    return true;
  }

  // Used for initial seeding
  seed(items: T[]): void {
    if (this.getItems().length === 0) {
      this.setItems(items);
    }
  }
}
