import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Routing Exercises",
  description: "Next.js App Router examples",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
