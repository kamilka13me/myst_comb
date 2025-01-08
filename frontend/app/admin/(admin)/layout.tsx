import React from 'react';
import { Metadata } from 'next';
import { AdminLayout } from '@/vievs/AdminPages/AdminLayout';

export const metadata: Metadata = {
  title: 'Адмін панель',
  description: 'Адмін панель сайту',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <AdminLayout>{children}</AdminLayout>;
}
