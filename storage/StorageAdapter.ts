export interface StorageInterface {
  getItem<T>(key: string): T | null;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  clear(): void;
}

export class LocalStorageAdapter implements StorageInterface {
  getItem<T>(key: string): T | null {
    if (typeof window === "undefined") return null;
    const item = window.localStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch (e) {
      console.error(`Error parsing item from localStorage for key ${key}`, e);
      return null;
    }
  }

  setItem<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error setting item to localStorage for key ${key}`, e);
    }
  }

  removeItem(key: string): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  }

  clear(): void {
    if (typeof window === "undefined") return;
    window.localStorage.clear();
  }
}

// Export a singleton instance for global use in V1.
export const storageAdapter = new LocalStorageAdapter();
