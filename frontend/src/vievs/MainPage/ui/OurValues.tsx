import { Text } from '@/shared/ui/Text';
import { SVGProps, VFC } from 'react';
import Coop from '@/shared/assets/icons/coop.svg?react';
import MIcon from '@/shared/assets/icons/mIcon.svg?react';
import KIcon from '@/shared/assets/icons/kIcon.svg?react';
import PeopleIcon from '@/shared/assets/icons/peopleIcon.svg?react';
import GreenHeart from '@/shared/assets/icons/greenHeart.svg?react';
import PurpleRomb from '@/shared/assets/icons/purpleRomb.svg?react';
import { Icon } from '@/shared/ui/Icon';

const ValuesData = [
  {
    color: 'bg-[#151515]',
    text: 'Кооперація',
    Svg: Coop,
    textColor: 'text-white',
  },
  {
    color: 'bg-base/BG_card',
    text: 'Експеримент',
    Svg: MIcon,
    textColor: 'text-[#151515]',
  },
  {
    color: 'bg-base/BG_card',
    text: 'Нові можливості',
    Svg: KIcon,
    textColor: 'text-[#151515]',
  },
  {
    color: 'bg-base/BG_card',
    text: 'Повага до людської гідності',
    Svg: PeopleIcon,
    textColor: 'text-[#151515]',
  },
  {
    color: 'bg-base/BG_card',
    text: 'Бережливе ставлення до природи',
    Svg: GreenHeart,
    textColor: 'text-[#151515]',
  },
  {
    color: 'bg-base/BG_card',
    text: 'Примноження українського мистецтва',
    Svg: PurpleRomb,
    textColor: 'text-[#151515]',
  },
];

interface ValuesProps {
  textColor: string;
  color: string;
  Svg: VFC<SVGProps<SVGSVGElement>> | string;
  text: string;
  index: number;
}

const Values = ({ color, text, Svg, index, textColor }: ValuesProps) => {
  return (
    <div
      className={`flex h-[360px] w-[360px] flex-col justify-between rounded-[30px] p-10 ${color}`}
    >
      <div className="flex justify-between">
        <Icon Svg={Svg} width={100} height={100} />
        <Text
          textType="Desktop/title-s"
          Tag="p"
          text={'0' + (++index).toString()}
          color="base/stroke_btn_act"
        />
      </div>

      <Text
        Tag="p"
        text={text}
        textType="Desktop/title-l"
        className={`${textColor}`}
      />
    </div>
  );
};

const OurValues = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mx-10 my-10 flex w-full max-w-[1128px] flex-col items-center justify-center">
        <div className="w-full">
          <Text
            Tag="h1"
            textType="Desktop/H2"
            font="serif"
            text="Наші цінності"
            color="base/text_accent"
            className="mb-[35px]"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {ValuesData.map((value, index) => (
            <Values
              key={index}
              color={value.color}
              Svg={value.Svg}
              text={value.text}
              textColor={value.textColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
