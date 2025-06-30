/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import { createKey } from '@/shared/hooks/createKey';
import InputSerch from './InputSerch';
import { Item, useSelectedFiltersStore } from '@/store/useSelectedFiltersStore';

interface Props {
  filterName: string;
  hendleSetFilterName: (name?: string) => void;
  onChange: (val: string) => void;
}

export default function SelectEmail({
  filterName,
  hendleSetFilterName,
}: Props): JSX.Element {
  const name = 'select-email';
  const options: Item[] = [
    { title: 'ivan.kovalenko@example.com', type: 'email' },
    { title: 'olena.shevchenko@mail.com', type: 'email' },
    { title: 'andriy.bondarenko@test.com', type: 'email' },
    { title: 'kateryna.zhuk@domain.com', type: 'email' },
    { title: 'mykola.petriv@webmail.com', type: 'email' },
    { title: 'anastasiya.ivanova@service.com', type: 'email' },
    { title: 'oleh.kravchuk@site.com', type: 'email' },
    { title: 'yulia.tkachuk@provider.com', type: 'email' },
    { title: 'serhiy.danilenko@mailservice.com', type: 'email' },
    { title: 'natalia.melnyk@inbox.com', type: 'email' },
  ];
  const removeItem = useSelectedFiltersStore((state) => state.removeItem);
  const addItem = useSelectedFiltersStore((state) => state.addItem);
  const email = useSelectedFiltersStore((state) => state.email);

  const [optionsData, setOptionsData] = useState<Item[]>(options);

  const [serchValue, setSerchValue] = useState<string>('');

  const isActive = (name: Item): boolean => {
    return email?.title === name.title;
  };

  useEffect(() => {
    if (filterName !== name) {
      setSerchValue('');
    }
  }, [filterName]);

  useEffect(() => {
    if (serchValue) {
      const newArr = options.filter((el) =>
        el.title.toUpperCase().includes(serchValue.toUpperCase()),
      );
      setOptionsData(newArr);
    } else setOptionsData(options);
  }, [serchValue]);

  const isName = (): boolean => {
    return filterName === name;
  };

  const openClose = (close: boolean = false): void => {
    if (close) {
      hendleSetFilterName();
    } else hendleSetFilterName(isName() ? 'close' : name);
  };

  const hendleCheckbox = (name: Item): void => {
    if (email?.title === name.title) {
      removeItem(name);
    } else {
      addItem(name);
    }
  };
  return (
    <div className="relative flex gap-3 py-6">
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={'Email'}
        font="sans"
        color="base/BG_block"
        className="font-medium"
      />
      <button
        type="button"
        onClick={() => {
          openClose();
        }}
      >
        <Icon
          className={clsx(isName() && 'rotate-180')}
          Svg={arrow_down}
          width={24}
          height={24}
        />
      </button>

      {isName() && (
        <div className="absolute left-[-50%] top-[102%] z-20 flex flex-col gap-2 rounded-[30px] bg-base-text_accent p-4">
          <InputSerch serchValue={serchValue} setSerchValue={setSerchValue} />

          <ul className="scrollbar flex max-h-[275px] flex-col gap-2 overflow-y-auto pr-2">
            {optionsData.length ? (
              optionsData.map((el) => {
                return (
                  <li className="" key={createKey()}>
                    <button
                      type="button"
                      className={clsx(
                        'w-full rounded-[30px] px-6 py-3 duration-300 hover:bg-base-text_light_2',
                        isActive(el) && 'bg-base-text_light_2',
                      )}
                      onClick={() => {
                        hendleCheckbox(el);
                        openClose(true);
                      }}
                    >
                      <Text
                        Tag="span"
                        textType="Desktop/Body"
                        text={el.title}
                        font="sans"
                        color="base/text"
                        className="block w-full max-w-[250px] overflow-hidden text-nowrap font-medium"
                      />
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="w-full rounded-[30px] px-6 py-3">
                <Text
                  Tag="span"
                  textType="Desktop/Body"
                  text={'Даних не знайдено'}
                  font="sans"
                  color="base/text"
                  className="block w-full text-nowrap font-medium"
                />
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
