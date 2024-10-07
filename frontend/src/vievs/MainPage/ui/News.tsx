'use client';
import Charlesdeluvio from '@/shared/assets/img/charlesdeluvio.png';
import ExhibitionPhoto from '@/shared/assets/img/ExhibitionPhoto.png';
import Uniq from '@/shared/assets/img/Unique_individuals_photo.png';
import { ButtonLink } from '@/shared/ui/ButtonLink';
// import { Link } from "@/shared/ui/Link";
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import Image from 'next/image';

const News = () => {
  return (
    <HStack className="mx-[156px] py-[180px]">
      <VStack>
        <Text
          Tag="h2"
          color="base/BG_block"
          text="Новини"
          font="serif"
          textType="Desktop/H2"
        />
      </VStack>
      <div className="grid h-[610px] w-full grid-cols-2 gap-[30px]">
        {/* block 1 */}
        {/* <Link href="/404" className="h-full"> */}
        <div className="h-full">
          <div className="relative h-full overflow-hidden rounded-[30px]">
            <div
              className="absolute h-full w-full bg-white"
              style={{ opacity: 0.03 }}
            />
            <div className="flex h-full flex-col justify-between">
              <div className="flex h-full flex-col justify-between px-10 py-10">
                <Text
                  Tag="h6"
                  textType="Desktop/title-l"
                  text="Показ робіт талановитої української художниці Олени Штепурки"
                  color="base/BG_block"
                />
                <div className="flex items-end justify-between">
                  <Text
                    className="border-b-2"
                    Tag="p"
                    textType="Desktop/Subtitle"
                    color="base/stroke_btn_act"
                    text="10/04/24"
                  />

                  <ButtonLink variant="arrow" to="/" />
                </div>
              </div>
              <div>
                <Image
                  src={ExhibitionPhoto}
                  alt="ExhibitionPhoto"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* </Link> */}

        {/* block left */}
        <div className="grid grid-rows-2 gap-10">
          <div className="grid grid-cols-[60%_1fr] rounded-[30px] bg-white">
            <div className="flex flex-col justify-between px-10 py-10">
              <Text
                Tag="h6"
                textType="Desktop/title-s"
                text="Ми анонсували запуск проєкту “Унікальні особини”"
                color="base/text_accent"
                className="font-medium"
              />
              <div className="flex items-end justify-between">
                <Text
                  className="border-b-2 font-medium"
                  Tag="p"
                  textType="Desktop/Subtitle"
                  color="base/stroke_btn_act"
                  text="05/04/24"
                />

                <ButtonLink variant="arrow" to="/404" />
              </div>
            </div>
            <div className="h-full w-full bg-red-500">
              <Image src={Uniq} alt="s" objectFit="cover" className="h-full" />
            </div>
          </div>
          <div className="grid grid-cols-[60%_1fr] rounded-[30px] bg-white">
            <div className="flex flex-col justify-between px-10 py-10">
              <Text
                Tag="h6"
                textType="Desktop/title-s"
                text="Звітність за 2023 рік"
                color="base/text_accent"
                className="font-medium"
              />
              <div className="flex items-end justify-between">
                <Text
                  className="font-medium text-[#B6B6B6]"
                  Tag="p"
                  textType="Desktop/Subtitle"
                  color="base/stroke_btn_act"
                  text="01/04/24"
                />

                <ButtonLink variant="arrow" to="/404" />
              </div>
            </div>
            <div className="h-full w-full bg-red-500">
              <Image
                src={Charlesdeluvio}
                alt="s"
                objectFit="cover"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </HStack>
  );
};

export default News;
