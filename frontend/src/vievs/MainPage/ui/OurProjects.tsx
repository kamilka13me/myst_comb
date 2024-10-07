import Rye from "@/shared/assets/img/rye.png";
import Cultbit from "@/shared/assets/img/Cultbit.png";
import UIP from "@/shared/assets/img/Unique_individuals_photo.png";
import Arrow from "@/shared/assets/icons/Arrow.svg?react";
import { Image } from "@/shared/ui/Image";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Icon } from "@/shared/ui/Icon";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { StaticImageData } from "next/image";

interface BoxProps {
  src: string | StaticImageData;
  title: string;
  subTitle: string;
}
const Box = ({ src, title, subTitle }: BoxProps) => {
  return (
    <VStack className="w-full h-[477px] bg-white rounded-[30px]">
      <div className="grid grid-cols-[auto_1fr] grid-flow-col gap-[30px]  w-full">
        <div>
          <Image src={src} alt="rye " />
        </div>
        <div className="grid grid-rows-2 h-full pt-10 ">
          <div className="grid grid-cols-[50%_1fr] gap-[30px] mr-10 ">
            <Text
              Tag="h1"
              text={title}
              textType="Desktop/title-l"
              className="leading-10"
              color="base/text_accent"
            />
            <div className="gap-10 flex flex-col">
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
                  className="font-[600] leading-5 "
                />
                <Icon Svg={Arrow} width={12} height={12} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[50%_1fr] pb-10 gap-[30px]  mr-10 ">
            <div className="flex flex-col justify-end">
              <div className="w-full bg-gray-300 rounded-full h-[10px] overflow-hidden">
                <div
                  className="bg-[#FF4E00] h-full rounded-full"
                  style={{ width: "30%" }}
                />
              </div>
              <div className="flex justify-between mt-2">
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
            <div className="flex flex-col justify-end items-end">
              <ButtonLink to="/404" variant="arrowTextBlue" text="Підтримати проєкт" />
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
          Tag="h2" 
          text="Наші проекти" 
          color="base/BG_block" 
          textType="Desktop/H2" 
          className="text-3xl md:text-4xl"/>
      </VStack>
      <HStack className="px-10 w-full gap-10 mt-10">
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
