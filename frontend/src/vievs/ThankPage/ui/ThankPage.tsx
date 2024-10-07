import React from 'react';
import heart from '@/shared/assets/icons/heart.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import content from './content.json';

export function ThankPage(): React.JSX.Element {
  return (
    <div className="min-w-[320px] px-4 py-[150px]" lang="uk-UA">
      <div className="flex w-full flex-col items-center justify-center gap-11">
        <div>
          <Text
            Tag="p"
            textType="Desktop/H3"
            text={content.ThankPage.text}
            font="sans"
            align="center"
            color="base/BG_block"
            className="text-2xl font-normal md:text-4xl"
          />
          <Text
            Tag="h1"
            textType="Desktop/H3"
            text={content.ThankPage.title}
            font="sans"
            align="center"
            color="base/BG_block"
            className="text-2xl font-normal md:text-4xl"
          />
        </div>
        <Icon className="animate-pulse" Svg={heart} width={150} height={150} />
      </div>
    </div>
  );
}
