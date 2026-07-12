"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useCartStore } from "@/components/layout/CartDrawer";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-brand-ivory/90 backdrop-blur-md border-b border-brand-sand py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="font-body text-sm font-medium tracking-[1.5px] uppercase hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link href="/products" className="font-body text-sm font-medium tracking-[1.5px] uppercase hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link href="/about" className="font-body text-sm font-medium tracking-[1.5px] uppercase hover:text-brand-gold transition-colors">
              Our Story
            </Link>
          </nav>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-display text-2xl md:text-3xl font-medium tracking-widest uppercase">
            GLAMMYN
          </h1>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={useCartStore((state) => state.open)}>
            <ShoppingBag className="w-5 h-5" />
            {useCartStore((state) => state.items.length) > 0 && <span className="absolute top-0 right-0 w-2 h-2 bg-brand-gold rounded-full" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
