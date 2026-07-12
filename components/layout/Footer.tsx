import * as React from "react";
import Link from "next/link";
import { H3, Body } from "@/components/ui/typography";

export function Footer() {
  return (
    <footer className="bg-brand-onyx text-brand-ivory pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <H3 className="mb-6 text-brand-ivory">GLAMMYN</H3>
          <Body className="text-brand-sand max-w-sm">
            Premium 316L Stainless Steel jewellery with PVD Gold Plating. Understated luxury for the modern woman.
          </Body>
        </div>
        <div>
          <h4 className="font-body text-xs font-medium uppercase tracking-[1.5px] text-brand-gold mb-6">
            Shop
          </h4>
          <ul className="space-y-4">
            <li><Link href="/collections" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">All Collections</Link></li>
            <li><Link href="/products?category=necklaces" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">Necklaces & Chains</Link></li>
            <li><Link href="/products?category=rings" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">Rings</Link></li>
            <li><Link href="/products?category=bracelets" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">Bracelets & Cuffs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs font-medium uppercase tracking-[1.5px] text-brand-gold mb-6">
            Help
          </h4>
          <ul className="space-y-4">
            <li><Link href="/contact" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">Contact Us</Link></li>
            <li><Link href="/faq" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">FAQ</Link></li>
            <li><Link href="/shipping" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">Shipping & Returns</Link></li>
            <li><Link href="/care" className="text-brand-sand hover:text-brand-ivory transition-colors text-sm">Jewellery Care</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs font-medium uppercase tracking-[1.5px] text-brand-gold mb-6">
            Newsletter
          </h4>
          <Body className="text-brand-sand mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </Body>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-brand-charcoal text-brand-ivory border border-brand-graphite px-4 py-3 rounded-l-subtle w-full focus:outline-none focus:border-brand-gold text-sm"
            />
            <button type="submit" className="bg-brand-gold text-brand-onyx px-6 py-3 font-medium text-xs tracking-widest uppercase rounded-r-subtle hover:bg-brand-antiqueGold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 border-t border-brand-graphite pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="font-body text-xs text-brand-graphite mb-4 md:mb-0">
          © {new Date().getFullYear()} GLAMMYN. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="font-body text-xs text-brand-graphite hover:text-brand-sand transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="font-body text-xs text-brand-graphite hover:text-brand-sand transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
