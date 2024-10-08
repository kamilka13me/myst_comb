'use client';
import DonutChart from './DonatChart';

import LogoWhite from '@/shared/assets/icons/LogoWhite.svg?react';
import Facebook from '@/shared/assets/icons/SocialFacebook.svg?react';
import Instagram from '@/shared/assets/icons/SocialInstagram.svg?react';
import YouTube from '@/shared/assets/icons/SocialYouTube.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import Link from 'next/link';
import useMediaQuery from '../../../../app/portfolio/hooks/useMediaQuery';
// import { Link } from '@/shared/ui/Link';

const Footer = () => {
  const isPhone = useMediaQuery('(max-width: 640px)');

  const About = [
    { title: 'Проєкти', link: '/404' },
    { title: 'Послуги', link: '/404' },
    { title: 'Новини', link: '/404' },
    { title: 'Про нас', link: '/404' },
    { title: 'Контакти', link: '/404' },
  ];
  if (isPhone) {
    return <div>not redy yet</div>;
  }
  return (
    <footer className="flex h-[431px] w-full rounded-t-[40px] bg-[#151515] px-10 pb-10 pt-20">
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-wrap justify-around gap-5">
          {/* <block1> */}
          <div className="flex flex-col">
            <Icon Svg={LogoWhite} width={128} height={33} />
            <Text
              Tag="p"
              textType="Desktop/Subtitle"
              color="base/text"
              text="+380-50-111-22-33"
              className="mt-10"
            />

            <Text
              Tag="p"
              textType="Desktop/Subtext"
              color="base/text"
              text="mystetskykombinat@gmail.com"
              className="mt-[14px]"
            />
          </div>
          {/* <block2 */}
          <div className="flex flex-col">
            <Text
              Tag="h6"
              textType="Desktop/Body"
              color="base/text"
              className="font-semibold"
              text="Про нас"
            />
            <div className="mt-6 flex flex-col gap-3">
              {About.map((link, index) => (
                <Link
                  href={link.link}
                  className="text-base/text text-sm font-medium"
                  key={index}
                >
                  <Text
                    Tag="p"
                    textType="Desktop/Subtitle"
                    color="base/text_light"
                    text={link.title}
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* <block 3 */}
          <div className="flex">
            <DonutChart />
          </div>
          {/* <block 4 */}
          <div className="flex flex-col">
            <Text
              Tag="h6"
              textType="Desktop/Body"
              color="base/text"
              className="font-semibold"
              text="Слідкуй за нами"
            />
            <div className="mt-6 flex gap-[18px]">
              <Icon Svg={Instagram} height={40} width={40} />
              <Icon Svg={Facebook} height={40} width={40} />
              <Icon Svg={YouTube} height={40} width={40} />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between">
          <div className="text-sm font-medium text-[#606060]">
            2024, БФ “Мистецький комбінат” <br />
            Київ, Україна
          </div>
          <Text
            Tag="h6"
            textType="Desktop/Subtitle"
            color="base/text_light_2"
            className="font-medium"
            text="© Всі права захищені"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
