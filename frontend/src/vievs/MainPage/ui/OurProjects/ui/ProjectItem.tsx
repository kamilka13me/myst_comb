import React from 'react';
import { StaticImageData } from 'next/image';
import Arrow from '@/shared/assets/icons/Arrow.svg?react';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Icon } from '@/shared/ui/Icon';
import { Image } from '@/shared/ui/Image';
import { Text } from '@/shared/ui/Text';

export interface BoxProps {
  src: string | StaticImageData;
  title: string;
  subTitle: string;
}

export function ProjectItem({ src, title, subTitle }: BoxProps): React.JSX.Element{
  return (
    <li className="w-full 
      rounded-[30px] 
      bg-white 
      overflow-hidden 
      flex flex-col gap-2.5 lg:flex-row ">

      <div className='relative 
        h-auto min-w-[320px] min-h-[280px] 
        md:min-w-[430px] md:min-h-[360px]'>
        {/* <Image 
          src={src} 
          fill 
          alt={title} 
          className='object-cover object-center'/> */}
        <Image 
          src={src} 
          fill ={true}
          alt={title} 
          className='object-center'/>

      </div>
        
      <div className="min-h-full flex flex-col justify-between p-6 lg:p-10">
        <div className="grid grid-cols-[1fr] gap-[24px] 
          xl:grid-cols-[50%_1fr] xl:gap-[30px] ">
          <Text
            Tag="h3"
            text={title}
            textType="Desktop/title-l"
            className="leading-10 text-xl md:text-2xl"
            color="base/text_accent"
          />
          <div className="flex flex-col gap-10 mb-10">
            <Text
              className="leading-5 text-[16px] md:text-[18px]"
              Tag="p"
              text={subTitle}
              textType="Desktop/Body"
              color="base/text_dark"
            />
            <div className="flex items-center gap-[10px]">
              <Text
                Tag="p"
                text="Деталі проєкту"
                textType="Desktop/Body"
                color="base/text_dark"
                className="font-[600] leading-5"
              />
              <Icon Svg={Arrow} width={12} height={12} />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-[1fr] gap-[24px] 
          xl:grid-cols-[50%_1fr] xl:gap-[30px] ">

          <div className="flex flex-col lg:justify-end">
            <div className="h-[8px] w-full overflow-hidden rounded-full bg-gray-300 md:h-[10px]">
              <div
                className="h-full rounded-full bg-[#FF4E00]"
                style={{ width: '30%' }}
              />
            </div>

            <div className="mt-2 flex justify-between">
              <div className="flex flex-col">
                <Text
                  Tag="h4"
                  textType="Desktop/Subtitle"
                  color="base/stroke_btn_act"
                  text="Зібрано"
                />
                <Text
                  Tag="p"
                  textType="Desktop/numeric-s"
                  color="base/text_accent"
                  text="5 000 USD"
                  className="font-semibold text-black text-[22px] md:text-[24px]"
                />
              </div>

              <div className="flex flex-col">
                <Text
                  Tag="h4"
                  textType="Desktop/Subtitle"
                  color="base/stroke_btn_act"
                  text="Залишилось зібрати"
                />
                <Text
                  Tag="p"
                  textType="Desktop/numeric-s"
                  color="base/text_accent"
                  className="font-semibold text-[22px] md:text-[24px]"
                  text="45 000 USD"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center
            lg:items-end lg:justify-end">
            <ButtonLink
              to="/404"
              variant="arrowTextBlue"
              text="Підтримати проєкт"
            />
          </div>
        </div>
      </div>
    </li>
  )
}