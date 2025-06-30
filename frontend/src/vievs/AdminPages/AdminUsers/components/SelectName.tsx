/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import { createKey } from '@/shared/hooks/createKey';
import InputSerch from './InputSerch';

interface Props {
  filterName: string;
  hendleSetFilterName: (name?: string) => void;
  onChange: (val: string) => void;
}

export default function SelectName({
  filterName,
  hendleSetFilterName,
}: Props): JSX.Element {
  const name = 'select-name';
  const options: string[] = [
    'Віктор Шевченко',
    'Ольга Петренко',
    'Андрій Бондаренко',
    'Марина Коваленко',
    'Микола Ткаченко',
    'Тетяна Іванова',
    'Олександр Кравченко',
    'Катерина Сидоренко',
    'Богдан Мельник',
    'Наталія Данилюк',
    'Ірина Коваль',
    'Юрій Поліщук',
    'Василь Дорошенко',
    'Софія Лисенко',
    'Ігор Романенко',
    'Людмила Гаврилюк',
    'Максим Олійник',
    'Марія Вороніна',
    'Дмитро Левченко',
    'Ганна Павленко',
  ];

  const [select, setSelect] = useState<string | null>(null);

  const [optionsData, setOptionsData] = useState<string[]>(options);

  const [serchValue, setSerchValue] = useState<string>('');

  useEffect(() => {
    if (filterName !== name) {
      setSerchValue('');
    }
  }, [filterName]);

  useEffect(() => {
    if (serchValue) {
      const newArr = options.filter((el) =>
        el.toUpperCase().includes(serchValue.toUpperCase()),
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

  return (
    <div className="relative flex w-[200px] gap-3 py-6">
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={'Ім’я та прізвище'}
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
        <div className="absolute left-[-10%] top-[102%] z-20 flex flex-col gap-2 rounded-[30px] bg-base-text_accent p-4">
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
                        select === el && 'bg-base-text_light_2',
                      )}
                      onClick={() => {
                        setSelect(el);
                        openClose(true);
                      }}
                    >
                      <Text
                        Tag="span"
                        textType="Desktop/Body"
                        text={el}
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
