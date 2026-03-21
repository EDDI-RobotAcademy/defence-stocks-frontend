"use client";

import { Provider } from "jotai";
import Navbar from "@/ui/components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <Navbar />
      <main>{children}</main>
    </Provider>
  );
}
