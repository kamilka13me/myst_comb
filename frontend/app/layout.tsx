// src/app/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import './globals.css'; // Ваші глобальні стилі
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const metadata: Metadata = {
  title: 'Мистецький Комбінат',
  description: 'Благодійний фонд “Мистецький Комбінат” – організація підтримки підприємництвау сфері візуального мистецтва',
  icons: {
    icon: ['/favicon.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk-UA">
      <body className="bg-base-text_accent">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
