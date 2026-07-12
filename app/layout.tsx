import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "GLAMMYN | Premium Jewellery",
  description: "GLAMMYN is a premium fashion jewellery brand specializing in 316L Stainless Steel jewellery with PVD Gold Plating.",
};

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { AppInitializer } from "@/components/layout/AppInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased font-body bg-brand-ivory text-brand-onyx selection:bg-brand-gold selection:text-white flex flex-col min-h-screen">
        <Header />
        <AppInitializer><SmoothScroll><main className="flex-grow pt-[100px]">
          {children}
        </main></SmoothScroll></AppInitializer>
        <Footer /><CartDrawer />
      </body>
    </html>
  );
}
