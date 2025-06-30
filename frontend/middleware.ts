// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Не застосовуємо middleware до /admin/login
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  // Можна додатково перевірити токен, зробивши fetch до бекенду

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
