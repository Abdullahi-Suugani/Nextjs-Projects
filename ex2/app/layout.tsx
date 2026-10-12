import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Rendering Exercises",
  description: "Examples of server, client, static, dynamic, and streaming rendering."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <a href="/" className="brand">Rendering Lab</a>
            <div className="nav-links">
              <a href="/products">Products</a>
              <a href="/counter">Counter</a>
              <a href="/ssr">SSR</a>
              <a href="/about">About</a>
              <a href="/streaming">Streaming</a>
            </div>
          </nav>
        </header>
        <main className="container page-content">{children}</main>
      </body>
    </html>
  );
}
