import { Metadata } from 'next';
import { AdminLoginPage } from '@/vievs/AdminPages/Login';

export const metadata: Metadata = {
  title: 'admin login',
  description: 'Інформаційна сторінка подяки',
  icons: {
    icon: ['/LogoDark.svg'],
  },
};

export default function adminLoginPage() {
  return <AdminLoginPage />;
}
