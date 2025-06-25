'use client';

import { FormEvent, useState } from 'react';

export default function PaymentPage() {
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [data, setData] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

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
        body: JSON.stringify({ amount, description }),
      });

      if (!res.ok) {
        throw new Error('Помилка при створенні платежу');
      }

      const json: PaymentResponse = await res.json();
      console.log(json.data);
      console.log(json.signature);

      setData(json.data);
      setSignature(json.signature);
    } catch (error) {
      console.error(error);
      alert('Сталася помилка при запиті до сервера.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-2xl font-bold">Оплата через LiqPay</h1>

      {/* Форма для вводу */}
      <form
        onSubmit={handleCreatePayment}
        className="flex w-full max-w-md flex-col gap-4"
      >
        <input
          type="number"
          min="1"
          placeholder="Сума (UAH)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded border p-2"
        />
        <input
          type="text"
          placeholder="Опис платежу"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded border p-2"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Створити платіж
        </button>
      </form>

      {/* Прихована форма для відправки до LiqPay */}
      {data && signature && (
        <form method="POST" action="https://www.liqpay.ua/api/3/checkout">
          <input type="hidden" name="data" value={data} />
          <input type="hidden" name="signature" value={signature} />
          <button
            type="submit"
            className="mt-4 rounded bg-green-600 p-2 text-white hover:bg-green-700"
          >
            Перейти до оплати
          </button>
        </form>
      )}
    </div>
  );
}
