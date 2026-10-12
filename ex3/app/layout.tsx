import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Exercises",
  description: "Server Action form handling exercises",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <a href="/" className="brand">
              Form Lab
            </a>
            <div className="nav-links">
              <a href="/forms/basic">Basic</a>
              <a href="/forms/password">Password</a>
              <a href="/forms/greeting">Greeting</a>
            </div>
          </nav>
        </header>
        <main className="container page-content">{children}</main>
      </body>
    </html>
  );
}
