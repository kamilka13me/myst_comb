"use client";
import React from 'react';
import Dashboard from './ui/Dashboard';

export function AdminLayout({children}
  : {
    children: React.ReactNode;
  }): React.JSX.Element
  {
  return (
    <div className='flex flex-row gap-8 p-10 '>
      <div className='w-[236px] bg-base-text_dark rounded-[30px] p-6'>
        <Dashboard/>
        {/* <ul className='w-full flex flex-col gap-4 items-center'>
          <li>
            Адмін панель
          </li>
          <li>
            Адмін панель
          </li>
          <li>
            Адмін панель
          </li>
        </ul> */}
      </div>

      <div className='mim-h-full w-full'>
       {children}
      </div>
    </div>
  )
}