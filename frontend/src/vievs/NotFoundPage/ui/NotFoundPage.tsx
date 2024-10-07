import React from "react";
import LogoWhit from "@/shared/assets/icons/LogoWhiteNoText.svg?react";
import { Icon } from "@/shared/ui/Icon";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Text } from "@/shared/ui/Text";
import content from './content.json';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-base-text_accent fixed z-30 flex flex-col gap-7 items-center justify-center p-4">
      <Text
        Tag="h1"
        textType="Desktop/title-l"
        text={content.NotFoundPage.title}
        font="sans"
        align="center"
        color="base/text"
        className="font-normal text-7xl"
      />
      <div className="flex gap-6 items-baseline flex-wrap justify-center">
        <Text
          Tag="p"
          textType="Desktop/H3"
          text={content.NotFoundPage.text}
          font="sans"
          align="center"
          color="base/BG_block"
          className="font-normal text-2xl md:text-4xl "
        />
        <Icon Svg={LogoWhit} height={33} width={63} />
      </div>
      <ButtonLink 
        variant="arrowTextBlue" 
        text={content.NotFoundPage.btn_text} 
        to="/" />
    </div>
  );
};
