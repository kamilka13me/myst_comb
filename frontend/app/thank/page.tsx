import { Metadata } from 'next';
import { ThankPage } from '@/vievs/ThankPage';

export const metadata: Metadata = {
  title: 'Дякуємо Вам!',
  description: 'Інформаційна сторінка подяки',
};

export default function thankPage() {
  return <ThankPage />;
}
