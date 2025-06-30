/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import { createKey } from '@/shared/hooks/createKey';
import InputSerch from './InputSerch';
import { Item, useSelectedFiltersStore } from '@/store/useSelectedFiltersStore';
import checkbox from '@/shared/assets/icons/checkbox.svg?react';

interface Props {
  filterName: string;
  hendleSetFilterName: (name?: string) => void;
  onChange: (val: string) => void;
}

export default function SelectMedia({
  filterName,
  hendleSetFilterName,
}: Props): JSX.Element {
  const name = 'select-media';
  const options: Item[] = [
    { title: 'Куратори', type: 'media' },
    { title: 'Культурологи', type: 'media' },
    { title: 'Митці', type: 'media' },
    { title: 'Історики мистецтва', type: 'media' },
    { title: 'Скульптура', type: 'media' },
    { title: 'Стріт арт', type: 'media' },
    { title: 'Живопис', type: 'media' },
    { title: 'Архітектура', type: 'media' },
    { title: 'Графічний дизайн', type: 'media' },
    { title: 'Арт-директори', type: 'media' },
    { title: 'Декоративне мистецтво', type: 'media' },
    { title: 'Графіка', type: 'media' },
    { title: 'Мозаїка', type: 'media' },
    { title: 'Ілюстрація', type: 'media' },
    { title: 'Digital-art', type: 'media' },
    { title: 'Арт-дилери', type: 'media' },
    { title: 'Текстильне мистецтво', type: 'media' },
    { title: 'Мистецтвознавці', type: 'media' },
    { title: 'Кераміка', type: 'media' },
  ];
  const removeItem = useSelectedFiltersStore((state) => state.removeItem);
  const addItem = useSelectedFiltersStore((state) => state.addItem);
  const media = useSelectedFiltersStore((state) => state.media);

  const isActive = (name: Item): boolean => {
    if (media.find((el) => el.title === name.title)) {
      return true;
    } else return false;
  };
  const [optionsData, setOptionsData] = useState<Item[]>(options);

  const [serchValue, setSerchValue] = useState<string>('');

  useEffect(() => {
    if (serchValue) {
      const newArr = options.filter((el) =>
        el.title.toUpperCase().includes(serchValue.toUpperCase()),
      );
      setOptionsData(newArr);
    } else setOptionsData(options);
  }, [serchValue]);

  useEffect(() => {
    if (filterName !== name) {
      setSerchValue('');
    }
  }, [filterName]);

  const isName = (): boolean => {
    return filterName === name;
  };

  const openClose = (close: boolean = false): void => {
    if (close) {
      hendleSetFilterName();
    } else hendleSetFilterName(isName() ? 'close' : name);
  };

  const hendleCheckbox = (name: Item): void => {
    if (media.find((el) => el.title === name.title)) {
      removeItem(name);
    } else if (media.length < 3) {
      addItem(name);
    }
  };

  return (
    <div className="relative flex gap-3 py-6">
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={'Медіа'}
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
                        'flex w-full items-center gap-2 rounded-[30px] px-6 py-3 duration-300 hover:bg-base-text_light_2',
                        isActive(el) && 'bg-base-text_light_2',
                      )}
                      onClick={() => {
                        hendleCheckbox(el);
                      }}
                    >
                      <span
                        className={clsx(
                          'flex h-[18px] w-[20px] items-center justify-center rounded-[4px] border hover:shadow-hover_btn',
                          isActive(el)
                            ? 'border-icons-symbols-yellow-500'
                            : 'border-base-stroke-btn-act',
                        )}
                      >
                        <Icon
                          className={clsx(!isActive(el) && 'hidden')}
                          Svg={checkbox}
                          width={10}
                          height={6}
                        />
                      </span>
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
