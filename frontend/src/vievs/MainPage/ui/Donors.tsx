import Epam from '@/shared/assets/icons/epam.svg?react';
import JaGalereya from '@/shared/assets/icons/jaGalereya.svg?react';
import Numu from '@/shared/assets/icons/namu.svg?react';
import Okko from '@/shared/assets/icons/okko.svg?react';
import Projector from '@/shared/assets/icons/projector.svg?react';
import Skellar from '@/shared/assets/icons/skellar.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const Donors = () => {
  return (
    <HStack align="center" className="w-full px-10" justify="start">
      {/* <VStack align="center" justify="around" className="w-full" wrap="wrap"> */}
      <Text
        Tag="p"
        textType="Desktop/Body"
        text="Наші донори:"
        color="base/stroke_btn_act"
        className="mb-5 flex w-full justify-center self-center whitespace-nowrap md:mb-6 md:block md:w-auto md:justify-normal"
      />
      <VStack align="center" justify="between" className="w-full" wrap="wrap">
        <div className="flex h-[32px] w-[100px] items-center justify-center md:h-[44px] md:w-[152px]">
          <Icon
            className="h-3 w-[80px] md:h-[18px] md:w-[120px]"
            Svg={Skellar}
          />
        </div>
        <div className="flex h-[32px] w-[100px] items-center justify-center md:h-[44px] md:w-[152px]">
          <Icon className="h-6 w-[64px] md:h-[26px] md:w-[70px]" Svg={Epam} />
        </div>
        <div className="flex h-[32px] w-[100px] items-center justify-center md:h-[44px] md:w-[152px]">
          <Icon
            className="h-6 w-[80px] md:h-[28px] md:w-[87px]"
            Svg={Projector}
          />
        </div>
        <div className="flex h-[32px] w-[100px] items-center justify-center md:h-[44px] md:w-[152px]">
          <Icon className="h-5 w-[70px] md:h-[24px] md:w-[90px]" Svg={Okko} />
        </div>
        <div className="flex h-[32px] w-[100px] items-center justify-center md:h-[44px] md:w-[152px]">
          <Icon
            className="h-[18px] w-[80px] md:h-[28px] md:w-[120px]"
            Svg={JaGalereya}
          />
        </div>

        <div className="flex h-[32px] w-[100px] items-center justify-center md:h-[44px] md:w-[152px]">
          <Icon className="h-5 w-[80px] md:h-[24px] md:w-[90px]" Svg={Numu} />
        </div>
      </VStack>
    </HStack>
  );
};

export default Donors;
