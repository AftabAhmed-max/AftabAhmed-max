"use client";

import { useEffect } from "react";
import { seedMockData } from "@/data/seed";

export function AppInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    seedMockData();
  }, []);

  return <>{children}</>;
}
