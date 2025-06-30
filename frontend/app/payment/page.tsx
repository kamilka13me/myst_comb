'use client';

import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';
import { FormEvent, useState, useEffect, useRef } from 'react';

export default function PaymentPage() {
  const [amount, setAmount] = useState<string>('');
  const [selectedType, setSelectedType] = useState<'once' | 'subscription'>(
    'once',
  );
  const [selectedMethod, setSelectedMethod] = useState<
    'inUkraine' | 'legaEntity' | 'payPal'
  >('inUkraine');
  const [isReadyToRedirect, setIsReadyToRedirect] = useState(false); // тригер для сабміту
  const description = 'благодійний безповоротній внесок';

  const [data, setData] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  interface PaymentResponse {
    data: string;
    signature: string;
  }

  const handleCreatePayment = async (e: FormEvent) => {
    e.preventDefault();

    if (!amount || !description) {
      alert('Будь ласка, заповніть всі поля.');
      return;
    }

    try {
      const res = await fetch('/api/liqpay/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, description, selectedType }),
      });

      if (!res.ok) {
        throw new Error('Помилка при створенні платежу');
      }

      const json: PaymentResponse = await res.json();
      setData(json.data);
      setSignature(json.signature);

      // після отримання підпису готовий до редіректу
      setIsReadyToRedirect(true);
    } catch (error) {
      console.error(error);
      alert('Сталася помилка при запиті до сервера.');
    }
  };

  useEffect(() => {
    if (isReadyToRedirect && data && signature && formRef.current) {
      formRef.current.submit();
    }
  }, [isReadyToRedirect, data, signature]);
  return (
    <section
      id="payment"
      className="flex min-h-screen flex-col items-start justify-center px-5 md:px-10"
    >
      <div className="flex w-full md:translate-x-[-27%] md:justify-center">
        <h1 className="font-ibm-plex-serif text-3xl text-white md:text-5xl">
          Підтримати нас
        </h1>
      </div>
      <div className="flex w-full flex-col justify-center gap-7 py-10 md:flex-row md:px-6">
        {/* liq pay */}
        <form
          onSubmit={handleCreatePayment}
          className="flex flex-col gap-20 rounded-[30px] bg-BG_card_dark px-6 py-10 md:w-1/2 md:max-w-[600px]"
        >
          <div className="border-text-l flex gap-[66px] border-b-2 border-base-text_light_2">
            <label className="relative inline-block cursor-pointer">
              <input
                type="radio"
                id="once"
                name="paymentType"
                value="once"
                checked={selectedType === 'once'}
                onChange={() => setSelectedType('once')}
                className="peer hidden"
              />
              <span className="mb-[-3px] inline-block border-b-4 border-transparent text-base-text_light_2 peer-checked:border-icons_symbols-blue_500 peer-checked:text-white">
                <Text
                  Tag="p"
                  textType="Desktop/Body"
                  text="Разовий внесок"
                  align="center"
                  className="mb-3 text-xs md:text-s"
                />
              </span>
            </label>
            <label className="relative inline-block cursor-pointer">
              <input
                type="radio"
                id="subscription"
                name="paymentType"
                value="subscription"
                checked={selectedType === 'subscription'}
                onChange={() => setSelectedType('subscription')}
                className="peer hidden"
              />
              <span className="mb-[-3px] inline-block border-b-4 border-transparent text-base-text_light_2 peer-checked:border-icons_symbols-blue_500 peer-checked:text-white">
                <Text
                  Tag="p"
                  textType="Desktop/Body"
                  text="Підписка"
                  align="center"
                  className="mb-3 text-xs md:text-s"
                />
              </span>
            </label>
          </div>
          {/* summ */}
          <div className="w-full">
            <label className="flex items-center border-b-2 border-dashed border-base-text_light_2">
              <input
                type="text"
                min="1"
                placeholder="0"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value.replace(/[^0-9.]/g, ''))
                }
                className="w-full bg-transparent font-fixel-display text-[72px] font-semibold text-white placeholder:text-white focus:outline-none focus:ring-0"
              />
              <div className="flex min-w-[110px] items-center gap-2 font-fixel-display text-[36px] font-medium text-white">
                <img src="/ArrowDown.svg" alt="Copy icon" className="h-7 w-7" />
                <span>UAH</span>
              </div>
            </label>
          </div>
          <div className="flex justify-between gap-2 text-[14px] font-medium md:text-xs">
            <button
              type="button"
              onClick={() => setAmount(String((Number(amount) || 0) + 200))}
              className="w-1/3 rounded-md bg-icons-symbols-orange-500 px-[10px] py-[10px] opacity-35 md:px-10"
            >
              +200 UAH
            </button>
            <button
              type="button"
              onClick={() => setAmount(String((Number(amount) || 0) + 500))}
              className="w-1/3 rounded-md bg-icons-symbols-yellow-300 px-[10px] py-[10px] opacity-35 md:px-10"
            >
              +500 UAH
            </button>
            <button
              type="button"
              onClick={() => setAmount(String((Number(amount) || 0) + 1000))}
              className="w-1/3 rounded-md bg-icons-symbols-purple-300 px-[10px] py-[10px] opacity-35 md:px-10"
            >
              +1000 UAH
            </button>
          </div>
          {/* submit */}

          <ButtonLink
            type="submit"
            long={true}
            variant="arrowTextBlue"
            text="Підтримати проєкт"
            className="flex w-full"
          />
        </form>

        {/* iban */}
        <form
          onSubmit={handleCreatePayment}
          className="flex flex-col rounded-[30px] bg-BG_card_dark py-10 pl-[21px] pr-6 md:w-1/2 md:max-w-[800px]"
        >
          <Text
            Tag="h3"
            textType="Desktop/H3"
            color="base/BG_block"
            text="Реквізити"
            align="left"
            className="mb-10 text-[28px] md:text-[36px]"
          />
          <div className="border-text-l flex gap-[10px] border-b-2 border-base-text_light_2 md:justify-between md:gap-[66px]">
            <label className="relative inline-block cursor-pointer">
              <input
                type="radio"
                id="inUkraine"
                name="paymentMethod"
                value="inUkraine"
                checked={selectedMethod === 'inUkraine'}
                onChange={() => setSelectedMethod('inUkraine')}
                className="peer hidden"
              />
              <span className="mb-[-3px] inline-block border-b-4 border-transparent text-base-text_light_2 peer-checked:border-icons_symbols-blue_500 peer-checked:text-white md:mb-[-5px]">
                <div className="mb-4 font-ibm-plex-sans text-3xs md:text-s">
                  <span className="md:hidden">
                    Банківський переказ по Україні
                  </span>
                  <span className="hidden md:block">Переказ по Україні</span>
                </div>
              </span>
            </label>
            <label className="relative inline-block cursor-pointer">
              <input
                type="radio"
                id="legaEntity"
                name="paymentMethod"
                value="legaEntity"
                checked={selectedMethod === 'legaEntity'}
                onChange={() => setSelectedMethod('legaEntity')}
                className="peer hidden"
              />
              <span className="mb-[-3px] inline-block border-b-4 border-transparent text-base-text_light_2 peer-checked:border-icons_symbols-blue_500 peer-checked:text-white md:mb-[-5px]">
                <div className="mb-4 font-ibm-plex-sans text-3xs md:text-s">
                  Для юридичних осіб
                </div>
              </span>
            </label>
            <label className="relative hidden cursor-pointer md:inline-block">
              <input
                type="radio"
                id="payPal"
                name="paymentMethod"
                value="payPal"
                checked={selectedMethod === 'payPal'}
                onChange={() => setSelectedMethod('payPal')}
                className="peer hidden"
              />
              <span className="mb-[-3px] inline-block border-b-4 border-transparent text-base-text_light_2 peer-checked:border-icons_symbols-blue_500 peer-checked:text-white md:mb-[-5px]">
                <Text
                  Tag="p"
                  textType="Desktop/Body"
                  text="PayPal"
                  align="center"
                  className="mb-3 text-xs md:text-s"
                />
              </span>
            </label>
          </div>
          <div className="mt-10">
            <div className="flex flex-col gap-5">
              <Text
                Tag="p"
                textType="Desktop/Body"
                color="base/BG_block"
                text="БО Фонд Мистецький Комбінат"
                align="left"
                className="text-xs font-normal md:text-[18px]"
              />
              <div className="font-ibm-plex-sans text-xs text-white md:text-s">
                <span className="font-semibold">ЄДРПОУ:</span> 12345678
              </div>
              <div className="font-ibm-plex-sans text-xs text-white md:text-s">
                <span className="font-semibold">Призначення платежу: </span>{' '}
                благодійний безповоротній внесок
              </div>
            </div>
            {/* iban */}
            <div className="relative mt-10 flex h-20 w-full flex-col justify-center md:h-[124px]">
              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText('UA12345678900001295867449679')
                }
                className="absolute h-full w-full rounded-[20px] bg-white opacity-5 md:rounded-[30px]"
              ></button>
              <div className="flex items-center justify-between gap-2 px-3 font-ibm-plex-sans text-3xs text-white md:px-6 md:text-s">
                <span>
                  <span className="font-semibold">IBAN: </span>
                  UA12345678900001295867449679
                </span>
                <div className="flex items-center gap-1 text-white transition hover:text-gray-300">
                  <span className="hidden text-xs font-medium md:block">
                    Скопіювати
                  </span>
                  <img
                    src="/copy.svg"
                    alt="Copy icon"
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Прихована форма для автоматичної відправки */}
        {data && signature && (
          <form
            ref={formRef}
            method="POST"
            action="https://www.liqpay.ua/api/3/checkout"
            className="hidden"
          >
            <input type="hidden" name="data" value={data} />
            <input type="hidden" name="signature" value={signature} />
            <button type="submit">Перейти до оплати</button>
          </form>
        )}
      </div>
    </section>
  );
}
