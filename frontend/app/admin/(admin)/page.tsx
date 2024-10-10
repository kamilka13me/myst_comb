'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function AdminPage(): void {
  useEffect(() => {
    redirect('/admin/services');
  }, []);
}