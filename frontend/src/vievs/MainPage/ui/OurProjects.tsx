import Rye from '@/shared/assets/img/rye.png';
import Cultbit from '@/shared/assets/img/Cultbit.png';
import UIP from '@/shared/assets/img/Unique_individuals_photo.png';
import Arrow from '@/shared/assets/icons/Arrow.svg?react';
import { Image } from '@/shared/ui/Image';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { StaticImageData } from 'next/image';

interface BoxProps {
  src: string | StaticImageData;
  title: string;
  subTitle: string;
}
const Box = ({ src, title, subTitle }: BoxProps) => {
  return (
    <VStack className="h-[477px] w-full rounded-[30px] bg-white">
      <div className="grid w-full grid-flow-col grid-cols-[auto_1fr] gap-[30px]">
        <div>
          <Image src={src} alt="rye " />
        </div>
        <div className="grid h-full grid-rows-2 pt-10">
          <div className="mr-10 grid grid-cols-[50%_1fr] gap-[30px]">
            <Text
              Tag="h1"
              text={title}
              textType="Desktop/title-l"
              className="leading-10"
              color="base/text_accent"
            />
            <div className="flex flex-col gap-10">
              <Text
                className="leading-5"
                Tag="h6"
                text={subTitle}
                textType="Desktop/Body"
                color="base/text_dark"
              />
              <div className="flex items-center gap-[10px]">
                <Text
                  Tag="p"
                  text="Деталі проєкту"
                  textType="Desktop/Body"
                  color="base/text_dark"
                  className="font-[600] leading-5"
                />
                <Icon Svg={Arrow} width={12} height={12} />
              </div>
            </div>
          </div>
          <div className="mr-10 grid grid-cols-[50%_1fr] gap-[30px] pb-10">
            <div className="flex flex-col justify-end">
              <div className="h-[10px] w-full overflow-hidden rounded-full bg-gray-300">
                <div
                  className="h-full rounded-full bg-[#FF4E00]"
                  style={{ width: '30%' }}
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex flex-col">
                  <Text
                    Tag="h6"
                    textType="Desktop/Subtitle"
                    color="base/stroke_btn_act"
                    text="Зібрано"
                  />
                  <Text
                    Tag="p"
                    textType="Desktop/numeric-s"
                    color="base/text_accent"
                    text="5 000 USD"
                    className="font-semibold text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <Text
                    Tag="h6"
                    textType="Desktop/Subtitle"
                    color="base/stroke_btn_act"
                    text="Залишилось зібрати"
                  />
                  <Text
                    Tag="p"
                    textType="Desktop/numeric-s"
                    color="base/text_accent"
                    className="font-semibold"
                    text="45 000 USD"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end">
              <ButtonLink
                to="/404"
                variant="arrowTextBlue"
                text="Підтримати проєкт"
              />
            </div>
          </div>
        </div>
      </div>
    </VStack>
  );
};

const OurProjects = () => {
  return (
    <HStack className="w-full">
      <VStack className="ml-[156px]">
        <Text
          Tag="h1"
          text="Наші проекти"
          color="base/BG_block"
          textType="Desktop/H2"
        />
      </VStack>
      <HStack className="mt-10 w-full gap-10 px-10">
        {/* box */}
        <Box
          src={UIP}
          title="Унікальні особини"
          subTitle="Ми об’єднали сили науки та мистецтва для збереження біорізноманіття українського степу."
        />
        <Box
          src={Cultbit}
          title="Cultbit: Інтелектуальна пригода у форматі AR"
          subTitle="Це як PokemonGo, тільки у всесвіті української культури."
        />
        <Box
          src={Rye}
          subTitle="Ми сприяємо соціалізації та зниженню психічного напруження родин переселенців через реалізацію заходів культурно-мистецького спрямування."
          title="Жито: проєкт соціальної адаптації внутрішньо переміщеним особам засобами мистецтва"
        />
      </HStack>
    </HStack>
  );
};

export default OurProjects;
