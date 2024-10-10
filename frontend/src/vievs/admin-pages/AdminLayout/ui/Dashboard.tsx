"use client";
import { FC, SVGProps } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/ui/Icon';
import { Text } from "@/shared/ui/Text";
import services from '@/shared/assets/icons/icon_services.svg?react';
import news from '@/shared/assets/icons/icon_news.svg?react';
import projects from '@/shared/assets/icons/icon_projects.svg?react';
import people from '@/shared/assets/icons/icon_people.svg?react';
import content from '@/shared/assets/icons/icon_content.svg?react';
import settings from '@/shared/assets/icons/icon_settings.svg?react';

export default function Dashboard(): JSX.Element {
  const pathname = usePathname()

  interface ItemProps {
    pathName: string;
    href: string;
    text: string;
    icon: FC<SVGProps<SVGSVGElement>>;
  }

  const items:ItemProps[] =[
    {
      pathName:'services',
      href: '/admin/services',
      text: 'Послуги',
      icon: services
    },
    {
      pathName:'news',
      href: '/admin/news',
      text: 'Новини',
      icon: news
    },
    {
      pathName:'projects',
      href: '/admin/projects',
      text: 'Проєкти',
      icon: projects
    },
    {
      pathName:'people',
      href: '/admin/people',
      text: 'Отримувачі',
      icon: people
    },
    {
      pathName:'content',
      href: '/admin/content',
      text: 'Контент',
      icon: content
    },
    {
      pathName:'settings',
      href: '/admin/settings',
      text: 'Налаштування',
      icon: settings
    }
  ]

  const isActive = (name:string): boolean =>{
    return pathname.split('/').includes(name)
  }

  const ItemLinks =({pathName, href, text, icon}: ItemProps): JSX.Element => {
    return (  
      <li>
        <Link href={href} 
          className={`px-4 py-2.5 flex gap-2.5 duration-300 hover:bg-icons_symbols-blue_500 hover:opacity-70 
          rounded-[40px] 
          ${isActive(pathName) ? 'bg-icons_symbols-blue_500 hover:opacity-70' : ""}`}>
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
    )
  }

  return(
    <div className='w-[236px] bg-base-text_dark rounded-[30px] p-6 hidden lg:block'>
      <ul className='w-full flex flex-col gap-4'>
        <li>
          <Text
            Tag="h2"
            textType="Desktop/title-s"
            text='Адмін панель'
            font="sans"
            align="center"
            color="base/BG_block"
            className="font-normal"
          />
        </li>

        { items.map((el:ItemProps)=>{
            return <ItemLinks {...el} key={el.pathName}/>
          })
        }
        
        <li>
          <button type="button" 
            className='w-full rounded-[40px] px-4 py-2.5
              duration-300 hover:bg-icons_symbols-blue_500 hover:opacity-80'>
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
    </div>
  )
}