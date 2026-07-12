"use client";

import * as React from "react";
import { X, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H3, Body } from "@/components/ui/typography";
import Link from "next/link";
import { create } from "zustand";
import { Product } from "@/types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
  toggle: () => void;
  open: () => void;
  close: () => void;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  isOpen: false,
  items: [],
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  addItem: (product) => set((state) => {
    const existing = state.items.find((i) => i.product.id === product.id);
    if (existing) {
      return { items: state.items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i), isOpen: true };
    }
    return { items: [...state.items, { product, quantity: 1 }], isOpen: true };
  }),
  removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.product.id !== id) })),
  updateQuantity: (id, q) => set((state) => ({ items: state.items.map(i => i.product.id === id ? { ...i, quantity: Math.max(1, q) } : i) }))
}));

export function CartDrawer() {
  const { isOpen, close, items, updateQuantity, removeItem } = useCartStore();

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-brand-onyx/50 backdrop-blur-sm z-50 transition-opacity"
          onClick={close}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-ivory shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-brand-sand">
          <H3 className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-gold" />
            Your Bag ({items.length})
          </H3>
          <Button variant="icon" size="icon" onClick={close}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-brand-sand mb-4" />
              <Body className="text-brand-graphite text-center mb-6">
                Your shopping bag is empty.
              </Body>
              <Button variant="outline" onClick={close}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 border-b border-brand-sand pb-6">
                  <div className="w-20 h-24 bg-brand-linen rounded-subtle relative overflow-hidden flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <p className="font-body text-sm font-medium">{item.product.title}</p>
                        <button onClick={() => removeItem(item.product.id)} className="text-brand-graphite hover:text-brand-onyx"><X className="w-4 h-4" /></button>
                      </div>
                      <p className="font-body text-xs text-brand-graphite mt-1">{item.product.material}</p>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-brand-sand rounded-subtle overflow-hidden">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2 py-1 hover:bg-brand-linen"><Minus className="w-3 h-3" /></button>
                        <span className="font-body text-sm px-2">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 hover:bg-brand-linen"><Plus className="w-3 h-3" /></button>
                      </div>
                      <p className="font-body text-sm font-medium">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-brand-sand bg-brand-linen/50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body text-sm font-medium uppercase tracking-[1.5px] text-brand-graphite">Subtotal</span>
              <span className="font-body text-lg font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <Link href="/checkout" onClick={close}>
              <Button className="w-full">Proceed to Checkout</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
