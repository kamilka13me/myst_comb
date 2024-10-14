import { Icon } from "@/shared/ui/Icon";
import ArrowInCircleBlue from '@/shared/assets/icons/ArrowInCircleBlue.svg?react';
import { Text } from "@/shared/ui/Text";

export default function Pagination(): JSX.Element{
  return (
    <div className="w-full flex items-center justify-between">
      <button type="button" className="duration-300 hover:opacity-70">
        <Icon
          Svg={ArrowInCircleBlue}
          width={28}
          height={28}
          className="min-w-[28px] rotate-[-135deg]"
        />
      </button>

      <div className="flex items-center justify-center gap-0.5">
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={'2'}
          align="center"
          font="sans"
          color="base/text"
          className="font-normal"
        />
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={'/'}
          align="center"
          font="sans"
          color="base/text"
          className="font-normal"
        />
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={'10'}
          align="center"
          font="sans"
          color="base/text"
          className="font-normal"
        />
      </div>

      <button type="button" className="duration-300 hover:opacity-70">
        <Icon
          Svg={ArrowInCircleBlue}
          width={48}
          height={48}
          className="min-w-[48px]"
        />
      </button>
    </div>
  )
}