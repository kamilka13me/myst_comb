'use client';
import { FC, SVGProps } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import services from '@/shared/assets/icons/icon_services.svg?react';
import news from '@/shared/assets/icons/icon_news.svg?react';
import projects from '@/shared/assets/icons/icon_projects.svg?react';
import users from '@/shared/assets/icons/icon_people.svg?react';
import content from '@/shared/assets/icons/icon_content.svg?react';
import settings from '@/shared/assets/icons/icon_settings.svg?react';

export default function Dashboard(): JSX.Element {
  const pathname = usePathname();

  interface ItemProps {
    pathName: string;
    href: string;
    text: string;
    icon: FC<SVGProps<SVGSVGElement>>;
  }

  const items: ItemProps[] = [
    {
      pathName: 'services',
      href: '/admin/services',
      text: 'Послуги',
      icon: services,
    },
    {
      pathName: 'news',
      href: '/admin/news',
      text: 'Новини',
      icon: news,
    },
    {
      pathName: 'projects',
      href: '/admin/projects',
      text: 'Проєкти',
      icon: projects,
    },
    {
      pathName: 'users',
      href: '/admin/users',
      text: 'Отримувачі',
      icon: users,
    },
    {
      pathName: 'content',
      href: '/admin/content',
      text: 'Контент',
      icon: content,
    },
    {
      pathName: 'settings',
      href: '/admin/settings',
      text: 'Налаштування',
      icon: settings,
    },
  ];

  const isActive = (name: string): boolean => {
    return pathname.split('/').includes(name);
  };

  const ItemLinks = ({
    pathName,
    href,
    text,
    icon,
  }: ItemProps): JSX.Element => {
    return (
      <li>
        <Link
          href={href}
          className={`flex gap-2.5 rounded-[40px] px-4 py-2.5 duration-300 hover:shadow-hover_btn ${isActive(pathName) ? 'bg-icons_symbols-blue_500' : ''}`}
        >
          <Icon Svg={icon} width={24} height={24} />
          <Text
            Tag="span"
            textType="Desktop/Body"
            text={text}
            font="sans"
            color="base/BG_block"
            className="font-normal"
          />
        </Link>
      </li>
    );
  };

  return (
    <div className='hidden overflow-hidden min-w-[230px] lg:block'>
      <nav className=" rounded-[30px] bg-base-text_dark p-6">
        <ul className="flex w-full flex-col gap-4">
          <li>
            <Text
              Tag="h2"
              textType="Desktop/title-s"
              text="Адмін панель"
              font="sans"
              align="center"
              color="base/BG_block"
              className="font-normal"
            />
          </li>

          {items.map((el: ItemProps) => {
            return <ItemLinks {...el} key={el.pathName} />;
          })}

          <li>
            <button type="button" 
              className='w-full rounded-[40px] px-4 py-2.5
                duration-300 active:bg-icons_symbols-blue_500 hover:shadow-hover_btn'>
                <Text
                  Tag="span"
                  textType="Desktop/Subtitle"
                  text='Вихід'
                  font="sans"
                  align='center'
                  color="base/BG_block"
                  className="font-normal"
                />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
