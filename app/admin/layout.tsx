import * as React from "react";
import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, Users, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Products", href: "/admin/products", icon: Package },
    { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { label: "Customers", href: "/admin/customers", icon: Users },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-brand-ivory">
      <aside className="w-64 bg-brand-onyx text-brand-ivory hidden md:flex flex-col">
        <div className="p-6 border-b border-brand-charcoal">
          <h1 className="font-display text-2xl tracking-widest uppercase">GLAMMYN</h1>
          <p className="font-body text-[10px] tracking-widest uppercase text-brand-gold mt-1">Admin</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-subtle text-sm font-medium hover:bg-brand-charcoal hover:text-brand-gold transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
