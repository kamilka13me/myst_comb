import React from "react";
import heart from "@/shared/assets/icons/heart.svg?react";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import content from './content.json';

export function ThankPage (): React.JSX.Element {
  return( 
    <div className="py-[150px] px-4 min-w-[320px]" lang="uk-UA">
      <div  className="w-full flex flex-col gap-11 justify-center items-center">
        <Text
          Tag="h1"
          textType="Desktop/H3"
          text={content.ThankPage.title}
          font="sans"
          align="center"
          color="base/BG_block"
          className="font-normal max-w-[420px] text-2xl md:text-4xl md:max-w-[560px]"
        />
        <Icon className='animate-pulse' Svg={heart} width={150} height={150} />
      </div>
    </div>
  )
}