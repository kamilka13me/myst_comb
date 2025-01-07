// import Epam from '@/shared/assets/icons/epam.svg?react';
// import JaGalereya from '@/shared/assets/icons/jaGalereya.svg?react';
// import Numu from '@/shared/assets/icons/namu.svg?react';
// import Okko from '@/shared/assets/icons/okko.svg?react';
// import Projector from '@/shared/assets/icons/projector.svg?react';
// import Skellar from '@/shared/assets/icons/skellar.svg?react';
// import { Icon } from '@/shared/ui/Icon';
// import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import Carousel from './Carousel';

const Donors = () => {
  return (
    <section className="flex w-full flex-col items-center justify-start px-0">
      <Text
        Tag="h2"
        textType="Desktop/Body"
        text="Наші донори:"
        color="base/stroke_btn_act"
        className="mb-5 flex w-full justify-center self-center whitespace-nowrap md:mb-6 md:block md:w-auto md:justify-normal"
      />
      <div className="flex h-8 w-full overflow-hidden">
        <Carousel />
      </div>
    </section>
  );
};

export default Donors;
