import LogoWhit from '@/shared/assets/icons/LogoWhiteNoText.svg?react';
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";

export function UnderDevelopment(): JSX.Element {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-4">
    <Text
      Tag="h1"
      textType="Desktop/H2"
      text={'Under development'}
      font="sans"
      align="center"
      color="base/text"
      className="font-normal"
    />
    <div className="flex flex-wrap items-baseline justify-center gap-6">
      <Text
        Tag="p"
        textType="Desktop/H3"
        text={'Ця сторінка в розробці'}
        font="sans"
        color="base/text"
        className="font-normal text-[28px]"
      />
      <Icon Svg={LogoWhit} height={33} width={63} />
    </div>
    <ButtonLink
      variant="arrowTextBlue"
      text={'На головну'}
      to="/"
      className='duration-300 hover:opacity-70'
    />
  </div>
  )
}