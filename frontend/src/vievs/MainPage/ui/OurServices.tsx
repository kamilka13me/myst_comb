import React, { VFC, SVGProps } from 'react';

import ArrowInCircle from '@/shared/assets/icons/ArrowInCircle.svg?react';
import Bricks from '@/shared/assets/icons/bricks.svg?react';
import Heart from '@/shared/assets/icons/heart.svg?react';
import SphereSqure from '@/shared/assets/icons/sphereSqure.svg?react';
// import Star1 from '@/shared/assets/icons/star.svg?react';
import Star from '@/shared/assets/icons/star.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

export type TextColors =
  | 'primary'
  | 'gray'
  | 'gray-light'
  | 'orange'
  | 'red'
  | 'green'
  | 'white'
  | 'dark'; // Переконайтеся, що всі значення включені

interface ServiceBrickProps {
  opacity: string;
  title: string;
  text: string;
  titleColor?: TextColors;
  textColor?: TextColors;
  img: VFC<SVGProps<SVGSVGElement>>;
  link?: string;
}

const ServiceBrick: React.FC<ServiceBrickProps> = ({
  opacity,
  title,
  text,
  titleColor,
  textColor,
  img,
  link,
}) => {
  return (
    <VStack className="w-full h-[400px] max-w-[549px] rounded-[30px] relative">
      <div
        className="absolute w-full h-full bg-white rounded-[30px]"
        style={{ opacity }}
      />
      <div className="relative flex flex-col justify-between h-full p-10">
        <Icon Svg={img} width={100} height={100} />
        <VStack>
          <Text
            text={title}
            size="4xl"
            Tag="p"
            color={titleColor}
            className=" max-w-[408px]"
            bold
            font="sans"
          />
        </VStack>
        <VStack align="end">
          <Text
            text={text}
            color={textColor}
            size="lg"
            Tag="p"
            className="text-[#474747]  tracking-[-0.1rem] leading-5 max-w-[469px]"
          />
          {link ? (
            <Icon
              Svg={ArrowInCircle}
              width={45}
              height={45}
              className="min-w-[45px] ml-8"
            />
          ) : (
            ''
          )}
        </VStack>
      </div>
    </VStack>
  );
};

const OurServices = () => {
  const blocksData = [
    {
      opacity: '1',
      title: 'Мистецький комбінат – агент турботи',
      text: 'Ми розуміємо наскільки підприємцю важливо мати консалтингову інфраструктуру, навички для виходу на міжнародні ринки та можливість порадитися з досвідченими колегами.',
      titleColor: 'dark',
      textColor: '[#474747]',
      img: Star,
    },
    {
      opacity: '0.05',
      title: 'Бухгалтерська та юридична допомога',
      text: 'Усні та письмові консультації щодо правових питань, обліку та оподаткування від професіоналів.',
      titleColor: 'white',
      textColor: 'gray-light',
      img: Bricks,
      link: 'linkTo',
    },
    {
      opacity: '0.05',
      title: 'Портфоліо ревʼю',
      text: 'Можливість отримати фідбек про свої роботи від провідних експертів галузі та сформувати шляхи для подальшого вдосконалення.',
      titleColor: 'white',
      textColor: 'gray-light',
      img: Heart,
      link: 'linkTo',
    },
    {
      opacity: '0.05',
      title: 'Курси англійської мови',
      text: 'Групові онлайн-курси англійської мови від рівня А0 до В2. Мета – зміцнення потенціалу підприємців щодо міжнародної співпраці.',
      titleColor: 'white',
      textColor: 'gray-light',
      img: SphereSqure,
      link: 'linkTo',
    },
  ];

  return (
    <HStack className="px-[156px] mt-44 z-20 relative">
      <VStack justify="between" align="center" className="container">
        <Text text="Послуги, які ми надаємо" size="6xl" Tag="p" color="white" />
        <VStack>
          <Text text="Послуга на запит" size="md" Tag="p" color="white" />
        </VStack>
      </VStack>
      <div className="flex justify-center w-full">
        <div className="mt-10 grid grid-cols-1 gap-[30px] auto-rows-auto justify-center items-center  xl:grid-cols-2 ">
          {blocksData.map((block, index) => (
            <ServiceBrick
              key={index}
              opacity={block.opacity}
              title={block.title}
              text={block.text}
              // @ts-expect-error : library
              titleColor={block.titleColor}
              // @ts-expect-error : library
              textColor={block.textColor}
              img={block.img}
              link={block.link}
            />
          ))}
        </div>
      </div>
    </HStack>
  );
};

export default OurServices;
