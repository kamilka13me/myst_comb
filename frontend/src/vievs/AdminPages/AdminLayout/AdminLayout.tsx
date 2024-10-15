'use client';
import React from 'react';
import Dashboard from './ui/Dashboard';

export function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="flex flex-row items-start gap-8 p-5 lg:p-10">
      <Dashboard />
      <section className="min-h-[70vh] w-full">{children}</section>
    </div>
  );
}
