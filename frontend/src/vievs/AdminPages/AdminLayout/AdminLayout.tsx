'use client';
import React from 'react';
import Dashboard from './ui/Dashboard';

export function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-2 overflow-hidden p-5 lg:p-5 xl:gap-5 xl:p-10">
      <Dashboard />
      <section className="min-h-[70vh] w-full">{children}</section>
    </div>
  );
}
