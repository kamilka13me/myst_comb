'use client';

import { useState } from 'react';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';
import useMediaQuery from '../../../../app/portfolio/hooks/useMediaQuery';

const Strategi = () => {
  const isPhone = useMediaQuery('(max-width: 1000px)');
  const [strategi, setStrategi] = useState<string>('Зростання');
  const [isGrowOpen, setGrowOpen] = useState(true);
  const [isPopularOpen, setPopularOpen] = useState(false);
  const [isReformOpen, setReformOpen] = useState(false);

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
  if (isPhone) {
    return (
      <div>
        <div className="px-5 py-[120px]">
          <Text
            font="serif"
            text="Стратегічні напрямки фонду"
            color="base/text_accent"
            textType="H2"
            Tag="h2"
          />
          {/* strategi */}
          <div>
            <div
              className="mt-10 border-t-2 border-base-text_light pt-10"
              onClick={() => setGrowOpen(!isGrowOpen)}
            >
              <div className="flex items-center text-center">
                <Text
                  Tag="h5"
                  text={`0${1}`}
                  textType="Desktop/title-s"
                  color={
                    isGrowOpen ? 'icons_symbols/blue_500' : 'base/text_light_2'
                  }
                  className="font-medium"
                />
                <Text
                  Tag="h5"
                  text="Зростання"
                  textType="H3"
                  color={
                    isGrowOpen ? 'icons_symbols/blue_500' : 'base/text_accent'
                  }
                  className="ml-10 font-medium"
                />
              </div>
            </div>
            {isGrowOpen && (
              <div className="bg-red flex flex-col">
                <Text
                  Tag="p"
                  textType="Title/L-S"
                  text={strategiData['Зростання'].title}
                  className="ml-[63px] mt-6"
                />
                {/* block */}
                <div className="mt-6 flex items-center gap-4">
                  <ButtonLink variant="ArrowVectorGray" to="/404" />

                  <div className="text-xs font-normal leading-125 tracking-[-0.18px] text-base-text_dark">
                    <span className="font-semibold">
                      {strategiData['Зростання'].pointsHead[0]}
                    </span>
                    {strategiData['Зростання'].points[0]}
                  </div>
                </div>
                {/* block */}
                <div className="mt-6 flex items-center gap-4">
                  <ButtonLink variant="ArrowVectorGray" to="/404" />

                  <div className="text-xs font-normal leading-125 tracking-[-0.18px] text-base-text_dark">
                    <span className="font-semibold">
                      {strategiData['Зростання'].pointsHead[1]}
                    </span>
                    {strategiData['Зростання'].points[1]}
                  </div>
                </div>
                {/* block */}
                <div className="mt-6 flex items-center gap-4">
                  <ButtonLink variant="ArrowVectorGray" to="/404" />

                  <div className="text-xs font-normal leading-125 tracking-[-0.18px] text-base-text_dark">
                    <span className="font-semibold">
                      {strategiData['Зростання'].pointsHead[2]}
                    </span>
                    {strategiData['Зростання'].points[2]}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* strategi */}
          <div>
            <div
              className="mt-10 border-t-2 border-base-text_light pt-10"
              onClick={() => setPopularOpen(!isPopularOpen)}
            >
              <div className="flex items-center text-center">
                <Text
                  Tag="h5"
                  text={`0${2}`}
                  textType="Desktop/title-s"
                  color={
                    isPopularOpen
                      ? 'icons_symbols/blue_500'
                      : 'base/text_light_2'
                  }
                  className="font-medium"
                />
                <Text
                  Tag="h5"
                  text="Популяризація"
                  textType="H3"
                  color={
                    isPopularOpen
                      ? 'icons_symbols/blue_500'
                      : 'base/text_accent'
                  }
                  className="ml-10 font-medium"
                />
              </div>
            </div>
            {isPopularOpen && (
              <div className="bg-red flex flex-col">
                <Text
                  Tag="p"
                  textType="Title/L-S"
                  text={strategiData['Популяризація'].title}
                  className="ml-[63px] mt-6"
                />
                {/* block */}
                <div className="mt-6 flex items-center gap-4">
                  <ButtonLink variant="ArrowVectorGray" to="/404" />

                  <div className="text-xs font-normal leading-125 tracking-[-0.18px] text-base-text_dark">
                    <span className="font-semibold">
                      {strategiData['Популяризація'].pointsHead[0]}
                    </span>
                    {strategiData['Популяризація'].points[0]}
                  </div>
                </div>
                {/* block */}
                <div className="mt-6 flex items-center gap-4">
                  <ButtonLink variant="ArrowVectorGray" to="/404" />

                  <div className="text-xs font-normal leading-125 tracking-[-0.18px] text-base-text_dark">
                    <span className="font-semibold">
                      {strategiData['Популяризація'].pointsHead[1]}
                    </span>
                    {strategiData['Популяризація'].points[1]}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* strategi */}
          <div>
            <div
              className="mt-10 border-t-2 border-base-text_light pt-10"
              onClick={() => setReformOpen(!isReformOpen)}
            >
              <div className="flex items-center text-center">
                <Text
                  Tag="h5"
                  text={`0${3}`}
                  textType="Desktop/title-s"
                  color={
                    isReformOpen
                      ? 'icons_symbols/blue_500'
                      : 'base/text_light_2'
                  }
                  className="font-medium"
                />
                <Text
                  Tag="h5"
                  text="Реформа"
                  textType="H3"
                  color={
                    isReformOpen ? 'icons_symbols/blue_500' : 'base/text_accent'
                  }
                  className="ml-10 font-medium"
                />
              </div>
            </div>
            {isReformOpen && (
              <div className="bg-red flex flex-col">
                <Text
                  Tag="p"
                  textType="Title/L-S"
                  text={strategiData['Реформа'].title}
                  className="ml-[63px] mt-6"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="mt-[180px] px-10 py-10">
      <header className="flex items-center justify-between">
        <Text
          font="serif"
          text="Стратегічні напрямки фонду"
          color="base/text_accent"
          textType="H2"
          Tag="h2"
        />
        <div className="hidden md:block">
          <ButtonLink
            variant="textBlue"
            to="/404"
            text="Відкрите обговорення"
          />
        </div>
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
