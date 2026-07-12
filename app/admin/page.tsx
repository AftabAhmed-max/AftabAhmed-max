"use client";

import * as React from "react";
import { H1, H2, Body } from "@/components/ui/typography";
import { BarChart3, Package, ShoppingBag, Users } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "₹1,24,500", icon: BarChart3, trend: "+12%" },
    { title: "Orders", value: "45", icon: ShoppingBag, trend: "+5%" },
    { title: "Products", value: "12", icon: Package, trend: "0%" },
    { title: "Customers", value: "89", icon: Users, trend: "+18%" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="mb-12">
        <H1 className="mb-2">Dashboard</H1>
        <Body className="text-brand-graphite">Welcome to the GLAMMYN administrative panel.</Body>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-default border border-brand-sand shadow-card flex items-start justify-between">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-[1.5px] text-brand-graphite mb-2">
                {stat.title}
              </p>
              <H2>{stat.value}</H2>
            </div>
            <div className="bg-brand-linen p-3 rounded-full">
              <stat.icon className="w-5 h-5 text-brand-gold" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-default border border-brand-sand shadow-card p-6 min-h-[400px]">
          <H3 className="mb-6">Revenue Overview</H3>
          <div className="flex items-center justify-center h-[300px] bg-brand-linen/50 rounded-subtle border border-brand-sand border-dashed">
            <Body className="text-brand-graphite">Chart visualization mock (Architecture Ready)</Body>
          </div>
        </div>
        <div className="bg-white rounded-default border border-brand-sand shadow-card p-6 min-h-[400px]">
          <H3 className="mb-6">Recent Orders</H3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-brand-sand last:border-0">
                <div>
                  <p className="font-body text-sm font-medium">Order #GLM-00{i}</p>
                  <p className="font-body text-xs text-brand-graphite">2 hours ago</p>
                </div>
                <div className="text-right">
                  <p className="font-body text-sm font-medium">₹3,299</p>
                  <span className="inline-block px-2 py-1 bg-brand-linen text-brand-onyx text-[10px] font-medium tracking-wider uppercase rounded-subtle mt-1">
                    Paid
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function H3({ className, children }: { className?: string, children: React.ReactNode }) {
  return <h3 className={`font-display text-2xl font-light ${className || ''}`}>{children}</h3>;
}
