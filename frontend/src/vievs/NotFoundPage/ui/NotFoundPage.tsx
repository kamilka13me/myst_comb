import React from 'react';
import LogoWhit from '@/shared/assets/icons/LogoWhiteNoText.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';
import content from './content.json';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="fixed top-0 z-30 flex h-full w-full flex-col items-center justify-center gap-7 bg-base-text_accent p-4">
      <Text
        Tag="h1"
        textType="Desktop/title-l"
        text={content.NotFoundPage.title}
        font="sans"
        align="center"
        color="base/text"
        className="text-7xl font-normal"
      />
      <div className="flex flex-wrap items-baseline justify-center gap-6">
        <Text
          Tag="p"
          textType="Desktop/H3"
          text={content.NotFoundPage.text}
          font="sans"
          align="center"
          color="base/BG_block"
          className="text-2xl font-normal md:text-4xl"
        />
        <Icon Svg={LogoWhit} height={33} width={63} />
      </div>
      <ButtonLink
        variant="arrowTextBlue"
        text={content.NotFoundPage.btn_text}
        to="/"
      />
    </div>
  );
};
