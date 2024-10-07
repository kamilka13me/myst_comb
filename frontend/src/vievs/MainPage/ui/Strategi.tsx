'use client';

import { useState } from 'react';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';

const Strategi = () => {
  const [strategi, setStrategi] = useState<string>('Зростання');

  // Об'єкт зі стратегіями
  const strategiData: Record<
    string,
    { title: string; points: string[]; pointsHead: string[] }
  > = {
    Зростання: {
      title:
        'Ми прагнемо, щоб комерційно успішних підприємців у сфері візуального мистецтва ставало більше. Для цього ми:',
      pointsHead: [
        'Розвиваємо інфраструктуру для вашої роботи, ',
        'Проводимо освітні заходи для вдосконалення ваших підприємницьких навичок, ',
        'Підтримуємо вас на шляху підвищення конкурентоспроможності на міжнародному рівні ',
      ],
      points: [
        'оскільки знаємо як важливо мати доступ до юристів, бухгалтерів, виставкових просторів, майстерень тощо.',
        'щоб ви вміли будувати життєздатні бізнес-моделі, коректно оцінювати вартість робіт, ефективно управління фінансами та багато іншого.',
        'та експорту мистецьких продуктів та послуг.',
      ],
    },
    Популяризація: {
      title: 'Для збільшення попиту на українські культурні продукти ми:',
      pointsHead: [
        'Популяризуємо культурно-мистецьке надбання в Україні,',
        'Сприяємо популяризації культурно-мистецького надбання за кордоном.',
      ],
      points: [
        'що сприяє не тільки формуванню спільних цінностей, а й розвитку різних когнітивних навичок в українців.',
        ' ',
      ],
    },
    Реформа: {
      title:
        'Разом ми можемо покращити умови ведення мистецького бізнесу в Україні та стимулювати позабюджетні інвестиції в культурну сферу',
      pointsHead: [],
      points: [],
    },
  };

  const changeStrategi = (strategi: string) => {
    setStrategi(strategi);
  };

  return (
    <section className="mt-[180px] px-10 py-10">
      <header className="flex items-center justify-between">
        <Text
          font="serif"
          text="Стратегічні напрямки фонду"
          color="base/text_accent"
          textType="Desktop/H2"
          Tag="h2"
        />
        <ButtonLink variant="textBlue" to="/404" text="Відкрите обговорення" />
      </header>

      <div className="mt-10 grid grid-cols-2 border-t-2 border-t-[#DCDCDC] pt-10">
        <nav>
          {Object.keys(strategiData).map((key, index) => (
            <div
              key={key}
              onClick={() => changeStrategi(key)}
              className={`h-[116px] ${
                key !== 'Зростання' ? 'border-t-2 border-t-[#DCDCDC]' : ''
              } flex cursor-pointer items-center`}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && changeStrategi(key)}
            >
              <Text
                Tag="h5"
                text={`0${index + 1}`}
                textType="Desktop/title-s"
                color={
                  strategi === key
                    ? 'icons_symbols/blue_500'
                    : 'base/text_light_2'
                }
                className="ml-10 font-medium"
              />
              <Text
                Tag="h5"
                text={key}
                textType="Desktop/H3"
                color={
                  strategi === key
                    ? 'icons_symbols/blue_500'
                    : 'base/text_accent'
                }
                className="ml-10 font-medium"
              />
            </div>
          ))}
        </nav>
        <div className="pl-[30px]">
          {strategiData[strategi] && (
            <div className="flex flex-col gap-6">
              <h6 className="font-sans text-[28px] font-medium text-[#151515]">
                {strategiData[strategi].title}
              </h6>
              {strategiData[strategi].points.map((point, index) => (
                <div key={index} className="flex items-center">
                  <ButtonLink variant="ArrowVectorGray" to="/404" />

                  <div className="text-s font-normal leading-135 tracking-[-0.18px] text-base-text_dark">
                    <span className="font-semibold">
                      {strategiData[strategi].pointsHead[index]}
                    </span>
                    {point}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Strategi;
