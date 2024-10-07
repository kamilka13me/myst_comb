import { Metadata } from "next";
import { ThankPage } from "@/vievs/ThankPage";

export const metadata: Metadata = {
  title: "Дякуємо Вам!",
  description: "Інформаційна сторінка подяки",
  icons: {
    icon: ["/LogoDark.svg"],
  },
};

export default function thankPage() {
  return <ThankPage/>
}