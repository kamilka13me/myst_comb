import DonutChart from "./DonatChart";

import LogoWhite from "@/shared/assets/icons/LogoWhite.svg?react";
import Facebook from "@/shared/assets/icons/SocialFacebook.svg?react";
import Instagram from "@/shared/assets/icons/SocialInstagram.svg?react";
import YouTube from "@/shared/assets/icons/SocialYouTube.svg?react";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import Link from "next/link";
// import { Link } from '@/shared/ui/Link';

const Footer = () => {
  const About = [
    { title: "Проєкти", link: "/404" },
    { title: "Послуги", link: "/404" },
    { title: "Новини", link: "/404" },
    { title: "Про нас", link: "/404" },
    { title: "Контакти", link: "/404" },
  ];

  return (
    <footer className="flex bg-[#151515] rounded-t-[40px] w-full px-10 pt-20 pb-10 h-[431px]">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap justify-around gap-5">
          {/* <block1> */}
          <div className=" flex flex-col ">
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
          <div className="  flex flex-col">
            <Text
              Tag="h6"
              textType="Desktop/Body"
              color="base/text"
              className="font-semibold"
              text="Про нас"
            />
            <div className="flex flex-col gap-3 mt-6 ">
              {About.map((link, index) => (
                <Link
                  href={link.link}
                  className="text-base/text font-medium text-sm"
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
          <div className="  flex flex-col">
            <Text
              Tag="h6"
              textType="Desktop/Body"
              color="base/text"
              className="font-semibold"
              text="Слідкуй за нами"
            />
            <div className="flex gap-[18px] mt-6">
              <Icon Svg={Instagram} height={40} width={40} />
              <Icon Svg={Facebook} height={40} width={40} />
              <Icon Svg={YouTube} height={40} width={40} />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between">
          <div className="text-[#606060] text-sm font-medium ">
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
