'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import { MediaProps, TypeBgColors, User } from './TypesProps';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import icon_add from '@/shared/assets/icons/icon_add.svg?react';
import minus from '@/shared/assets/icons/icon_minus.svg?react';

export function UserListItem(user: User) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getBorderColor = (name: string): string => {
    if (name === 'Рев’ю') {
      return 'border-icons-symbols-mint-500';
    }
    if (name === 'Послуги') {
      return 'border-icons-symbols-purple-400';
    }
    if (name === 'Англійська') {
      return 'border-icons-symbols-orange-500';
    }
    if (name === 'Обговорення') {
      return 'border-icons-symbols-yellow-500';
    }
    if (name === 'Долучитись') {
      return 'border-icons-symbols-blue-200';
    }
    return '';
  };

  const mediaDropDownList = ({ media }: MediaProps): JSX.Element => {
    const bgColors: TypeBgColors = {
      yellow: 'bg-icons-symbols-yellow-300',
      purple: 'bg-icons-symbols-purple-300',
      orange: 'bg-icons-symbols-orange-200',
      blue: 'bg-icons-symbols-blue-200',
    };

    const getBgColor = (name: string): string => {
      if (bgColors[name as keyof typeof bgColors]) {
        return bgColors[name as keyof typeof bgColors];
      }
      return bgColors['yellow'];
    };

    return (
      <ul className="flex min-[900px]:flex-col flex-wrap items-start justify-start gap-0.5 min-[900px]:px-3 py-6">
        {media?.length == 1 ? (
          <li className="flex items-center gap-0.5">
            <div
              className={clsx("rounded-[6px]", getBgColor(media[0].idColor))}
            >
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={media[0].name}
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
                      className={clsx("rounded-[6px]", getBgColor(media[i].idColor))}
                    >
                      <Text
                        Tag="p"
                        textType="Desktop/Button-menu"
                        text={el.name}
                        align="center"
                        font="sans"
                        color="base/text_accent"
                        className="px-4 py-2 font-normal"
                      />
                    </div>
                    <button
                      type="button"
                      className={clsx(
                        'flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-icons-symbols-blue-200 duration-300 hover:opacity-70',
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
                      className={clsx("rounded-[6px]", getBgColor(media[i].idColor))}
                    >
                      <Text
                        Tag="p"
                        textType="Desktop/Button-menu"
                        text={el.name}
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
                          'flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-icons-symbols-blue-200 duration-300 hover:opacity-70',
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
      <div className={clsx(isOpen ? 'align-top' : 'align-center')}>
        <Text
          Tag="p"
          textType="Desktop/Body"
          text={user.name}
          font="sans"
          color="base/text"
          className="py-4 min-[900px]:py-6 text-[16px] font-normal xl:text-[18px]"
        />
      </div>
      <div className={clsx(isOpen ? 'align-top' : 'align-center')}>
        <Text
          Tag="p"
          textType="Desktop/Body"
          text={user.date}
          font="sans"
          color="base/text"
          className="py-4 min-[900px]:py-6 font-normal"
        />
      </div>
      <div className={clsx(isOpen && 'align-top')}>
        {mediaDropDownList({ media: user.media })}
      </div>
      <div
        className={clsx(
          'overflow-hidden',
          isOpen ? 'align-top' : 'align-center',
        )}
      >
        <Text
          Tag="p"
          textType="Desktop/Body"
          text={user.email}
          font="sans"
          color="base/text"
          className="py-4 min-[900px]:py-6 font-normal"
        />
      </div>
      <div className={clsx('py-4', isOpen ? 'align-top' : 'align-center')}>
        <div
          className={clsx("min-[900px]:mx-auto w-[132px] rounded-[30px] border py-2", getBorderColor(user.type_services))}
        >
          <Text
            Tag="p"
            textType="Desktop/Button"
            text={user.type_services}
            font="sans"
            align="center"
            color="base/text"
            className="font-normal"
          />
        </div>
      </div>
    </>
  );
}
