'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import { MediaProps, User } from './TypesProps';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import icon_add from '@/shared/assets/icons/icon_add.svg?react';
import minus from '@/shared/assets/icons/icon_minus.svg?react';

// "Рев’ю": '#0f9',
// "Послуги": '#d633ff',
// "Англійська": '#ff4e00',
// "Обговорення": '#e7ff00',
// "Долучитись": '#9e92ee',

export function UserListItem(user: User) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getBborderColor = (name: string): string =>{
    if(name === "Рев’ю"){ return '#0f9' };
    if(name === "Послуги"){ return '#d633ff' };
    if(name === "Англійська"){ return '#ff4e00' };
    if(name === "Обговорення"){ return '#e7ff00' };
    if(name === "Долучитись"){ return '#9e92ee' };
    return '#9e92ee'
  }

  const mediaDropDownList = ({media}: MediaProps) :JSX.Element =>{

    const colors: string[] = ["#f1ff66",'#E066FF','#9E92EE'];

    const getBgColor = (id:number): string =>{
      if(colors[id]){
        return colors[id]
      }else return colors[0]
    }

    return (
      <ul className="flex flex-col items-start justify-start gap-0.5 px-3 py-6">
        {media?.length == 1 ? (
          <li className="flex items-center gap-0.5">
            <div
              style={{ background: getBgColor(0) }}
              className="rounded-[6px]"
            >
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={media[0]}
                align="center"
                font="sans"
                color="base/text_accent"
                className="px-4 py-2 font-normal"
              />
            </div>
          </li>
        ) : null}

        {media?.length > 1
          ? media.map((el, i) => {
              if (i == 0) {
                return (
                  <li key={i} className="flex items-center gap-0.5">
                    <div
                      style={{ background: getBgColor(i) }}
                      className={'rounded-[6px]'}
                    >
                      <Text
                        Tag="p"
                        textType="Desktop/Button-menu"
                        text={el}
                        align="center"
                        font="sans"
                        color="base/text_accent"
                        className="px-4 py-2 font-normal"
                      />
                    </div>
                    <button
                      type="button"
                      className={clsx(
                        'flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-[#9e92ee] duration-300 hover:opacity-70',
                        isOpen && 'hidden',
                      )}
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      <Icon Svg={icon_add} width={24} height={24} />
                    </button>
                  </li>
                );
              } else {
                return (
                  <li
                    key={i}
                    className={clsx(
                      'flex items-center gap-0.5',
                      !isOpen && 'hidden',
                    )}
                  >
                    <div
                      style={{ background: getBgColor(i) }}
                      className={'rounded-[6px]'}
                    >
                      <Text
                        Tag="p"
                        textType="Desktop/Button-menu"
                        text={el}
                        align="center"
                        font="sans"
                        color="base/text_accent"
                        className="px-4 py-2 font-normal"
                      />
                    </div>
                    {i == media.length - 1 ? (
                      <button
                        type="button"
                        className={clsx(
                          'flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-[#9e92ee] duration-300 hover:opacity-70',
                          !isOpen && 'hidden',
                        )}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <Icon Svg={minus} width={24} height={24} />
                      </button>
                    ) : null}
                  </li>
                );
              }
            })
          : null}
      </ul>
    );
  };

  return (
    <>
      <div className={clsx(isOpen ? "align-top" : "align-center")}>
        <Text
          Tag="p"
          textType="Desktop/Body"
          text={user.name}
          font="sans"
          color="base/text"
          className="font-normal py-6"
        />
      </div>
      <div className={clsx(isOpen ? "align-top" : "align-center")}>
        <Text
          Tag="p"
          textType="Desktop/Body"
          text={user.date}
          font="sans"
          color="base/text"
          className="font-normal py-6"
        />
      </div>
      <div className={clsx(isOpen && "align-top")}>
        {mediaDropDownList({ media: user.media })}
      </div>
      <div className={clsx('overflow-hidden', isOpen ? "align-top" : "align-center")}>
        <Text
          Tag="p"
          textType="Desktop/Body"
          text={user.email}
          font="sans"
          color="base/text"
          className="font-normal py-6"
        />
      </div>
      <div className={clsx('py-4', isOpen ? "align-top" : "align-center")}>

        <div style={{borderColor: getBborderColor(user.type_services)}}   
          className="border rounded-[30px] w-[132px] py-2 mx-auto">
          <Text
            Tag="p"
            textType="Desktop/Button"
            text={user.type_services}
            font="sans"
            align="center"
            color="base/text"
            className={"font-normal"}
          />
        </div>
      </div>
    </>
  );
}
