"use client";

import * as React from "react";
import { H1, H2, BodyLarge, Body } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const [step, setStep] = React.useState(1);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-3xl">
      <div className="mb-12 text-center">
        <H1 className="mb-2">Checkout</H1>
        <BodyLarge className="text-brand-graphite">Complete your secure purchase.</BodyLarge>
      </div>

      {/* Mock Progress */}
      <div className="flex justify-between items-center mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-brand-sand -z-10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-brand-gold -z-10 transition-all duration-500" style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }} />

        {['Information', 'Shipping', 'Payment'].map((label, index) => (
          <div key={label} className="flex flex-col items-center bg-brand-ivory px-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium mb-2 ${step > index ? 'bg-brand-gold text-white' : 'bg-brand-sand text-brand-graphite'}`}>
              {index + 1}
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-graphite">{label}</span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="bg-white p-8 rounded-default border border-brand-sand shadow-card">
          <H2 className="mb-6">Contact Information</H2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-widest text-brand-graphite mb-2">Email</label>
              <input type="email" className="w-full border border-brand-sand rounded-subtle px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" placeholder="you@example.com" />
            </div>
            <Button className="w-full mt-6" onClick={() => setStep(2)}>Continue to Shipping</Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-8 rounded-default border border-brand-sand shadow-card">
          <H2 className="mb-6">Shipping Address</H2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-widest text-brand-graphite mb-2">First Name</label>
              <input type="text" className="w-full border border-brand-sand rounded-subtle px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-widest text-brand-graphite mb-2">Last Name</label>
              <input type="text" className="w-full border border-brand-sand rounded-subtle px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium uppercase tracking-widest text-brand-graphite mb-2">Address</label>
              <input type="text" className="w-full border border-brand-sand rounded-subtle px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            </div>
          </div>
          <div className="flex space-x-4 mt-8">
            <Button variant="outline" className="w-1/2" onClick={() => setStep(1)}>Back</Button>
            <Button className="w-1/2" onClick={() => setStep(3)}>Continue to Payment</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white p-8 rounded-default border border-brand-sand shadow-card text-center">
          <H2 className="mb-4">Mock Payment</H2>
          <Body className="text-brand-graphite mb-8">This is a mockup. Architecture is ready for Razorpay SDK integration.</Body>
          <div className="flex justify-between items-center mb-8 p-4 bg-brand-linen rounded-subtle">
            <span className="font-medium">Total to pay</span>
            <span className="font-medium">₹5,798</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="w-1/2" onClick={() => setStep(2)}>Back</Button>
            <Button className="w-1/2" onClick={() => {
              alert("Payment Success Simulation!");
              window.location.href = "/";
            }}>Simulate Payment</Button>
          </div>
        </div>
      )}
    </div>
  );
}
