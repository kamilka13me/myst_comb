import { Metadata } from 'next';
import { NotFoundPage } from '@/vievs/NotFoundPage';

export const metadata: Metadata = {
  title: '404',
  description: 'Ця сторінка в розробці',
  icons: {
    icon: ['/LogoDark.svg'],
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
