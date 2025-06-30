import { useState } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import Arrow from '@/shared/assets/icons/ArrowInCircleBlueLeft.svg?react';

const ConnectToday = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (!email) return; // можна додати валідацію email

    try {
      const response = await fetch('/api/forms/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // обробка помилки, наприклад alert
        console.error('Помилка відправки');
        return;
      }

      // Очистити поле або показати повідомлення
      setEmail('');
      alert('Підписка успішно оформлена');
    } catch (error) {
      console.error('Помилка мережі', error);
    }
  };

  return (
    <div className="mx-5 flex max-w-[1128px] justify-center border-t-2 border-t-[#DCDCDC] pb-[180px] md:mx-[156px]">
      <div className="mt-10 flex w-full flex-col justify-between gap-[60px] md:flex-row">
        <div className="w-full">
          <Text
            Tag="h3"
            textType="H3"
            text="Приєднуйся до спільноти вже сьогодні."
            font="sans"
            color="base/text_accent"
            className="font-medium"
          />
          <Text
            Tag="p"
            textType="Body"
            text="Підписуйся на нашу розсилку корисних новин."
            font="sans"
            className="mt-2"
            color="base/text_dark"
          />
        </div>
        <div className="flex w-full items-center">
          <div className="flex min-h-[55px] w-full items-center justify-between rounded-[30px] bg-[#ededed] px-6">
            <input
              placeholder="Ваш email"
              className="placeholder:base/stroke_btn_act h-full w-full bg-transparent py-2 placeholder:font-normal focus:outline-none focus:ring-0 active:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <button
              type="button"
              onClick={handleSubmit}
              aria-label="Відправити email"
            >
              <Icon Svg={Arrow} width={28} height={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToday;
