import OrangeArch from '@/shared/assets/icons/orange-arch.svg?react';
import PurpleElipse from '@/shared/assets/icons/purple-elipse.svg?react';
import YellowSphere from '@/shared/assets/icons/yellow-spheres.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const Hero = () => {
  return (
    <VStack className="py-10 px-10">
      <div className="bg-white h-[600px] w-full rounded-[30px] flex justify-center items-center flex-col px-5 ">
        <div className="mb-4 max-w-[893px]">
          <div className="inline-flex w-auto items-baseline">
            <Icon Svg={YellowSphere} width={89} height="auto" />
            <span className="text-7xl font-ibm-plex-serif">Незалежній</span>
          </div>
          <div className="inline-flex w-auto items-baseline">
            <Icon Svg={OrangeArch} width={97} height="auto" />
            <span className="text-[70px]  font-ibm-plex-serif">країні -</span>
          </div>
          <div className="flex w-auto gap-4 text-7xl items-end flex-wrap">
            <div> незалежну </div>
            <div> культуру </div>
            <Icon Svg={PurpleElipse} width={153} height={59} />
          </div>
        </div>
        <VStack className="max-w-[726px] mt-[14px]">
          <Text
            Tag="p"
            size="2xl"
            text="Ми прагнемо до сталого розвитку галузі, тому допомогаємо підприємцям, що в ній працюють, бути комерційно успішними."
            align="center"
          />
        </VStack>
      </div>
    </VStack>
  );
};

export default Hero;
