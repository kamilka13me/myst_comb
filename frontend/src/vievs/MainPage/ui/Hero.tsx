import OrangeArch from '@/shared/assets/icons/orange-arch.svg?react';
import PurpleElipse from '@/shared/assets/icons/purple-elipse.svg?react';
import YellowSphere from '@/shared/assets/icons/yellow-spheres.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const Hero = () => {
  return (
    <VStack className="px-10 py-10">
      <div className="flex h-[600px] w-full flex-col items-center justify-center rounded-[30px] bg-white px-5">
        <div className="mb-4 max-w-[893px]">
          <div className="inline-flex w-auto items-baseline">
            <Icon Svg={YellowSphere} width={89} height="auto" />
            {/* <span className="text-7xl font-ibm-plex-serif">Незалежній</span> */}
            <Text
              Tag="h1"
              textType="Desktop/H1"
              color="base/text_accent"
              text="Незалежній"
              font="serif"
            />
          </div>
          <div className="inline-flex w-auto items-baseline">
            <Icon Svg={OrangeArch} width={97} height="auto" />
            {/* <span className="text-[70px]  font-ibm-plex-serif">країні -</span> */}
            <Text
              Tag="h1"
              textType="Desktop/H1"
              color="base/text_accent"
              text="країні -"
              font="serif"
            />
          </div>
          <div className="flex w-auto flex-wrap items-end gap-4 text-7xl">
            {/* <div> незалежну </div>
            <div> культуру </div> */}
            <Text
              Tag="h1"
              textType="Desktop/H1"
              color="base/text_accent"
              text="незалежну культуру"
              font="serif"
            />
            <Icon Svg={PurpleElipse} width={153} height={59} />
          </div>
        </div>
        <VStack className="mt-[14px] max-w-[726px]">
          <Text
            Tag="p"
            textType="Desktop/title-s"
            color="base/text_accent"
            text="Ми прагнемо до сталого розвитку галузі, тому допомогаємо підприємцям, що в ній працюють, бути комерційно успішними."
            align="center"
          />
        </VStack>
      </div>
    </VStack>
  );
};

export default Hero;
