import { HStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

const WhoAreWe = () => {
  return (
    <HStack justify="center" align="center" className="mt-44">
      <HStack justify="center" align="center" className="max-w-[822px]">
        <Text
          Tag="p"
          textType="Desktop/Body"
          text="Хто ми такі?"
          color="base/stroke_btn_act"
        />
        <Text
          Tag="p"
          textType="Desktop/H3"
          text="Благодійний фонд “Мистецький Комбінат” – організація підтримки підприємництва у сфері візуального мистецтва"
          color="base/BG_block"
          align="center"
          className="mt-3"
        />
      </HStack>
    </HStack>
  );
};

export default WhoAreWe;
