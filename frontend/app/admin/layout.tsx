import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Адмін панель',
  description: 'Адмін панель сайту',
};

export default function AdminLayout(
{children}
: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
