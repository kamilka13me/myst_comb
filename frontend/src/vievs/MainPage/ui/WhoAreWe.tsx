import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const WhoAreWe = () => {
  return (
    <section className="mt-44 flex flex-col items-center justify-center">
      <HStack justify="center" align="center" className="max-w-[822px] px-5">
        <Text
          Tag="h2"
          textType="Body"
          text="Хто ми такі?"
          color="base/stroke_btn_act"
        />
        <Text
          Tag="p"
          textType="H3"
          text="Благодійний фонд “Мистецький Комбінат” – організація підтримки підприємництва у сфері візуального мистецтва"
          color="base/BG_block"
          align="center"
          className="mt-3"
        />
      </HStack>
    </section>
  );
};

export default WhoAreWe;
