import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import Arrow from '@/shared/assets/icons/ArrowInCircleBlueLeft.svg?react';

const ConnectToday = () => {
  return (
    <div className="mx-[156px] flex max-w-[1128px] justify-center border-t-2 border-t-[#DCDCDC] pb-[180px]">
      <div className="mt-10 flex w-full justify-between gap-[60px]">
        <div className="w-full">
          <Text
            Tag="h3"
            textType="Desktop/H3"
            text="Приєднуйся до спільноти вже сьогодні."
            font="sans"
            color="base/text_accent"
            className="font-medium"
          />
          <Text
            Tag="p"
            textType="Desktop/Body"
            text="Підписуйся на нашу розсилку корисних новин."
            font="sans"
            className="mt-2"
            color="base/text_dark"
          />
        </div>
        <div className="flex w-full items-center">
          <div className="flex min-h-[55px] w-full items-center justify-between rounded-[30px] bg-[#ededed] px-6 py-2">
            <input
              placeholder="Ваш email"
              className="placeholder:base/stroke_btn_act bg-transparent placeholder:font-normal"
            />
            <Icon Svg={Arrow} width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToday;
