// src/app/layout.tsx
import React from "react";
import { Metadata } from "next";
import "./globals.css"; // Ваші глобальні стилі

export const metadata: Metadata = {
  title: "My App",
  description: "Description of my app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Header Content</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer Content</p>
        </footer>
      </body>
    </html>
  );
}
