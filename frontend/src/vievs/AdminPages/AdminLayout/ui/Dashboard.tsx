'use client';
import { FC, SVGProps } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useAdminMenuStore } from '@/store/useAdminMenuStore';
import { usePathname } from 'next/navigation';
import { useBodyLock } from '@/shared/hooks/useBodyLock';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import services from '@/shared/assets/icons/icon_services.svg?react';
import news from '@/shared/assets/icons/icon_news.svg?react';
import projects from '@/shared/assets/icons/icon_projects.svg?react';
import users from '@/shared/assets/icons/icon_people.svg?react';
import content from '@/shared/assets/icons/icon_content.svg?react';
import settings from '@/shared/assets/icons/icon_settings.svg?react';
import { createKey } from '@/shared/hooks/createKey';

export default function Dashboard(): JSX.Element {
  const pathname = usePathname();
  // Стан меню адмінки
  const isOpen = useAdminMenuStore((state) => state.isOpen);
  const close = useAdminMenuStore((state) => state.close);
  // Блокування прокрутки сторінки.
  useBodyLock(isOpen);

  interface ItemProps {
    pathName: string;
    href: string;
    text: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    close?: () => void;
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
    close,
  }: ItemProps): JSX.Element => {
    return (
      <li>
        <Link
          href={href}
          onClick={close}
          className={clsx(
            'flex gap-2.5 rounded-[40px] px-4 py-2.5 duration-300 hover:shadow-hover_btn',
            isActive(pathName) && 'bg-icons_symbols-blue_500',
          )}
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
    <div
      className={clsx(
        'fixed top-0 z-20 w-full min-w-[230px] items-center overflow-hidden bg-base-text_accent duration-700 lg:relative lg:block lg:max-w-fit',
        isOpen ? 'h-[100vh]' : 'h-0 lg:h-full',
      )}
    >
      <div className="max-h-full overflow-x-auto pb-20 pt-24 lg:max-h-fit lg:pb-0 lg:pt-0">
        <nav className="max-w-[90vw] rounded-[30px] bg-base-text_dark p-6 sm:max-w-[350px]">
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
              return <ItemLinks {...el} close={close} key={createKey()} />;
            })}

            <li>
              <button
                onClick={close}
                type="button"
                className="w-full rounded-[40px] px-4 py-2.5 duration-300 hover:shadow-hover_btn active:bg-icons_symbols-blue_500"
              >
                <Text
                  Tag="span"
                  textType="Desktop/Subtitle"
                  text="Вихід"
                  font="sans"
                  align="center"
                  color="base/BG_block"
                  className="font-normal"
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
