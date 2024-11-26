import React, { VFC, SVGProps } from 'react';

import ArrowInCircle from '@/shared/assets/icons/ArrowInCircle.svg?react';
import Bricks from '@/shared/assets/icons/bricks.svg?react';
import Heart from '@/shared/assets/icons/heart.svg?react';
import SphereSqure from '@/shared/assets/icons/sphereSqure.svg?react';
import Star from '@/shared/assets/icons/star.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import ArrowInCircleBlue from '@/shared/assets/icons/ArrowInCircleBlue.svg?react';

import Link from 'next/link';

export type TextColors =
  | 'primary'
  | 'gray'
  | 'gray-light'
  | 'orange'
  | 'red'
  | 'green'
  | 'white'
  | 'dark';

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
    <VStack className="relative h-[400px] w-full max-w-[549px] rounded-[30px]">
      <div
        className="absolute h-full w-full rounded-[30px] bg-white"
        style={{ opacity }}
      />
      <div className="relative flex h-full flex-col justify-between p-10">
        <div className="h-[80px] w-[80px]">
          <Icon Svg={img} width={100} height={100} />
        </div>
        <VStack>
          <p
            className={`max-w-[408px] break-words font-ibm-plex-sans text-2xl font-medium leading-10 text-${titleColor}`}
          >
            {title}
          </p>
        </VStack>
        <VStack align="end">
          <p
            className={`max-w-[392px] text-s font-normal leading-135 tracking-[-0.18px] text-${textColor}`}
          >
            {text}
          </p>
          {link ? (
            <Icon
              Svg={ArrowInCircle}
              width={45}
              height={45}
              className="ml-8 min-w-[45px]"
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
      titleColor: 'base-text_accent',
      textColor: 'base-text_dark',
      img: Star,
    },
    {
      opacity: '0.05',
      title: 'Бухгалтерська та юридична допомога',
      text: 'Усні та письмові консультації щодо правових питань, обліку та оподаткування від професіоналів.',
      titleColor: 'base-bg-block',
      textColor: 'base-text',
      img: Bricks,
      link: 'linkTo',
    },
    {
      opacity: '0.05',
      title: 'Портфоліо ревʼю',
      text: 'Можливість отримати фідбек про свої роботи від провідних експертів галузі та сформувати шляхи для подальшого вдосконалення.',
      titleColor: 'base-bg-block',
      textColor: 'base-text',
      img: Heart,
      link: 'linkTo',
    },
    {
      opacity: '0.05',
      title: 'Курси англійської мови',
      text: 'Групові онлайн-курси англійської мови від рівня А0 до В2. Мета – зміцнення потенціалу підприємців щодо міжнародної співпраці.',
      titleColor: 'base-bg-block',
      textColor: 'base-text',
      img: SphereSqure,
      link: 'linkTo',
    },
  ];

  return (
    <HStack className="relative z-20 mt-44 px-5 md:px-[156px]">
      <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
        <Text
          text="Послуги, які  ми надаємо"
          textType="H2"
          Tag="h2"
          color="base/BG_block"
        />
        {/* btn */}
        <Link
          href="/services"
          className="mt-6 flex items-center justify-between gap-6 md:mt-0 md:justify-end"
        >
          <span className="items-center font-ibm-plex-sans text-base text-xs font-medium leading-tight text-white">
            Послуга на запит
          </span>
          <Icon Svg={ArrowInCircleBlue} className="h-12 w-12" />
        </Link>
      </div>

      <div className="flex w-full justify-center">
        <div className="mt-10 grid auto-rows-auto grid-cols-1 items-center justify-center gap-[30px] xl:grid-cols-2">
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
