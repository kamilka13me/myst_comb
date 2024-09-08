import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const WhoAreWe = () => {
  return (
    <HStack justify="center" align="center" className="mt-44">
      <HStack justify="center" align="center" className="max-w-[822px]">
        <Text Tag="p" size="lg" text="Хто ми такі?" color="gray-light" />
        <Text
          Tag="p"
          size="5xl"
          text="Благодійний фонд “Мистецький Комбінат” – організація підтримки підприємництва у сфері візуального мистецтва"
          color="white"
          align="center"
          className="mt-3"
        />
      </HStack>
    </HStack>
  );
};

export default WhoAreWe;


