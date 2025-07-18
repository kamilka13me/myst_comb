import React from 'react';

import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';

const HowWeWork = () => {
  return (
    <div className="mx-5 mt-[244px] flex max-w-[822px] flex-col items-center justify-center pb-[180px] md:mx-auto">
      <Text
        Tag="h2"
        text="Як ми працюємо"
        textType="Body"
        className="font-medium"
        color="base/stroke_btn_act"
      />
      <Text
        Tag="h1"
        text="Наш фонд – це велика родина, яка об’єднує українські таланти та ініціативи з різних куточків країни та з-за кордону. Реєструйтеся на послуги, беріть участь у проєктах та залишайте пропозиції щодо покращення нашої роботи."
        textType="H3"
        font="serif"
        align="center"
        color="base/text_accent"
        className="mt-3"
      />
      <ButtonLink
        variant="arrowTextBlue"
        text="Перейти до послуг"
        to="#services"
        className="mt-10"
      />
    </div>
  );
};

export default HowWeWork;
