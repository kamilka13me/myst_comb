import Epam from '@/shared/assets/icons/epam.svg?react';
import JaGalereya from '@/shared/assets/icons/jaGalereya.svg?react';
import Numu from '@/shared/assets/icons/namu.svg?react';
import Okko from '@/shared/assets/icons/okko.svg?react';
import Projector from '@/shared/assets/icons/projector.svg?react';
import Skellar from '@/shared/assets/icons/skellar.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const Donors = () => {
  return (
    <VStack align="center" className="px-10 w-full " justify="start">
      <VStack align="center" justify="around" className="w-full" wrap="wrap">
        <Text
          Tag="p"
          size="lg"
          text="Наші донори:"
          color="gray-light"
          className=" whitespace-nowrap"
        />
        <Icon Svg={Skellar} width={180} height={40} />
        <Icon Svg={Epam} width={180} height={40} />
        <Icon Svg={Projector} width={180} height={40} />
        <Icon Svg={Okko} width={180} height={40} />
        <Icon Svg={JaGalereya} width={180} height={40} />
        <Icon Svg={Numu} width={180} height={40} />
      </VStack>
    </VStack>
  );
};

export default Donors;
