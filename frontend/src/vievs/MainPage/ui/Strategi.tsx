"use client";

import { useState } from "react";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Text } from "@/shared/ui/Text";

const Strategi = () => {
  const [strategi, setStrategi] = useState<number>(1);

  // Об'єкт зі стратегіями
  const strategiData: Record<number, { title: string; points: string[] }> = {
    1: {
      title:
        "Ми прагнемо, щоб комерційно успішних підприємців у сфері візуального мистецтва ставало більше. Для цього ми:",
      points: [
        "Розвиваємо інфраструктуру для вашої роботи, оскільки знаємо як важливо мати доступ до юристів, бухгалтерів, виставкових просторів, майстерень тощо.",
        "Проводимо освітні заходи для вдосконалення ваших підприємницьких навичок, щоб ви вміли будувати життєздатні бізнес-моделі, коректно оцінювати вартість робіт, ефективно управління фінансами та багато іншого.",
        "Підтримуємо вас на шляху підвищення конкурентоспроможності на міжнародному рівні та експорту мистецьких продуктів та послуг.",
      ],
    },
    2: {
      title: "Заголовок для Стратегії 2",
      points: [
        "Пункт 1 для Стратегії 2",
        "Пункт 2 для Стратегії 2",
        "Пункт 3 для Стратегії 2",
      ],
    },
    3: {
      title: "Заголовок для Стратегії 3",
      points: [
        "Пункт 1 для Стратегії 3",
        "Пункт 2 для Стратегії 3",
        "Пункт 3 для Стратегії 3",
      ],
    },
  };

  const changeStrategi = (strategi: number) => {
    setStrategi(strategi);
  };

  return (
    <section className="py-10 px-10 mt-[180px]">
      <header className="flex justify-between items-center">
        <Text
          font="serif"
          text="Стратегічні напрямки фонду"
          color="base/text_accent"
          textType="Desktop/H2"
          Tag="h2"
        />
        <ButtonLink variant="textBlue" to="/404" text="Відкрите обговорення" />
      </header>

      <div className="grid grid-cols-2 border-t-[#DCDCDC] border-t-2 mt-10 pt-10">
        <nav>
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              onClick={() => changeStrategi(num)}
              className={`h-[116px] ${
                num !== 1 ? "border-t-[#DCDCDC] border-t-2" : ""
              } flex items-center cursor-pointer`}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && changeStrategi(num)}
            >
              <Text
                Tag="h5"
                text={`0${num}`}
                textType="Desktop/title-s"
                color={strategi === num ? "icons_symbols/blue_500" : "base/text_light_2"}
                className="ml-10 font-medium"
              />
              <Text
                Tag="h5"
                text="Зростання"
                textType="Desktop/H3"
                color={strategi === num ? "icons_symbols/blue_500" : "base/text_accent"}
                className="ml-10 font-medium"
              />
            </div>
          ))}
        </nav>
        <div className="pl-[30px]">
          {strategiData[strategi] && (
            <div className="gap-6 flex flex-col">
              <h6 className="font-sans text-[28px] font-medium text-[#151515]">
                {strategiData[strategi].title}
              </h6>
              {strategiData[strategi].points.map((point, index) => (
                <div key={index} className="flex items-center">
                  <ButtonLink variant="ArrowVectorGray" to="/404" />
                  <Text Tag="p" textType="Desktop/Body" text={point} />
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
