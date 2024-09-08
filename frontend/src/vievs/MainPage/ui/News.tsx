import Charlesdeluvio from '@/shared/assets/img/charlesdeluvio.png';
import ExhibitionPhoto from '@/shared/assets/img/ExhibitionPhoto.png';
import Uniq from '@/shared/assets/img/Unique_individuals_photo.png';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Image } from '@/shared/ui/Image';
import { Link } from '@/shared/ui/Link';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const News = () => {
  return (
    <HStack className="py-[180px] mx-[156px]">
      <VStack>
        <Text Tag="h2" color="white" text="Новини" font="serif" size="6xl" />
      </VStack>
      <div className="grid grid-cols-2 h-[610px] w-full gap-[30px] ">
        {/* block 1 */}
        <Link to="/404" className="h-full">
          <div className="rounded-[30px] overflow-hidden relative h-full">
            <div className=" absolute w-full h-full bg-white" style={{ opacity: 0.03 }} />
            <div className="flex justify-between flex-col h-full">
              <div className="px-10 py-10 flex flex-col justify-between h-full">
                <Text
                  Tag="h6"
                  size="4xl"
                  text="Показ робіт талановитої української художниці Олени Штепурки"
                  color="white"
                />
                <div className="flex justify-between items-end">
                  <Text
                    className="font-medium text-[#B6B6B6]"
                    Tag="p"
                    size="sm"
                    text="10/10/24"
                  />

                  <ButtonLink variant="arrow" to="/" />
                </div>
              </div>
              <div>
                <Image
                  src={ExhibitionPhoto}
                  alt="ExhibitionPhoto"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* block left */}
        <div className="grid grid-rows-2 gap-10">
          <div className="grid grid-cols-[60%_1fr] rounded-[30px] bg-white  ">
            <div className="flex flex-col justify-between py-10 px-10">
              <Text
                Tag="h6"
                size="2xl"
                text="Ми анонсували запуск проєкту “Унікальні особини”"
                color="dark"
                className="font-medium"
              />
              <div className="flex justify-between items-end">
                <Text
                  className="font-medium text-[#B6B6B6]"
                  Tag="p"
                  size="sm"
                  text="10/10/24"
                />

                <ButtonLink variant="arrow" to="/404" />
              </div>
            </div>
            <div className="h-full bg-red-500 w-full">
              <Image
                src={Uniq}
                width="100%"
                height="100%"
                alt="s"
                objectFit="cover"
                className="h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-[60%_1fr] rounded-[30px] bg-white  ">
            <div className="flex flex-col justify-between py-10 px-10">
              <Text
                Tag="h6"
                size="2xl"
                text="Звітність за 2023 рік"
                color="dark"
                className="font-medium"
              />
              <div className="flex justify-between items-end">
                <Text
                  className="font-medium text-[#B6B6B6]"
                  Tag="p"
                  size="sm"
                  text="10/10/24"
                />

                <ButtonLink variant="arrow" to="/404" />
              </div>
            </div>
            <div className="h-full bg-red-500 w-full">
              <Image
                src={Charlesdeluvio}
                width="100%"
                height="100%"
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
