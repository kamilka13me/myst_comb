import React from "react";

import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Text } from "@/shared/ui/Text";

const HowWeWork = () => {
  return (
    <div className="mt-[244px] flex justify-center items-center flex-col  mx-auto max-w-[822px] pb-[180px]">
      <Text
        Tag="h2"
        text="Як ми працюємо"
        textType="Desktop/Body"
        className="font-medium"
        color="base/stroke_btn_act"
      />
      <Text
        Tag="h1"
        text="Наш фонд – це велика родина, яка об’єднує українські таланти та ініціативи з різних куточків країни та з-за кордону. Реєструйтеся на послуги, беріть участь у проєктах та залишайте пропозиції щодо покращення нашої роботи."
        textType="Desktop/H3"
        font="serif"
        align="center"
        color="base/text_accent"
        className="mt-3 "
      />
      <ButtonLink
        variant="arrowTextBlue"
        text="Перейти до послуг"
        to="/404"
        className="mt-10"
      />
    </div>
  );
};

export default HowWeWork;
