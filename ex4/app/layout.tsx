import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Todo Board", description: "A focused, full-stack todo board" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
