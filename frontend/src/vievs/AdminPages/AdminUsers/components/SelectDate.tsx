import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import sort from '@/shared/assets/icons/yellow_sort.svg?react';
import { useState } from 'react';
import clsx from 'clsx';
import { createKey } from '@/shared/hooks/createKey';

interface Props {
  filterName: string;
  hendleSetFilterName: (name?: string) => void;
  onChangeDateFrom: (val: string) => void;
  onChangeDateTo: (val: string) => void;
}

export default function SelectDate({
  filterName,
  hendleSetFilterName,
}: Props): JSX.Element {
  const name = 'select-date';

  interface Opption {
    name: string;
    key: string;
  }

  const options: Opption[] = [
    {
      name: 'Від найстарішої до найновішої дати',
      key: 'max-min',
    },
    {
      name: 'Від найновішої до найстарішої дати',
      key: 'min-max',
    },
  ];
  const isName = (): boolean => {
    return filterName === name;
  };

  const openClose = (close: boolean = false): void => {
    if (close) {
      hendleSetFilterName();
    } else hendleSetFilterName(isName() ? 'close' : name);
  };

  const [select, setSelect] = useState<string>('min-max');

  return (
    <div className="relative flex max-w-[100px] gap-3 py-6">
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={'Дата'}
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
        <Icon Svg={sort} width={24} height={24} />
      </button>

      {isName() && (
        <ul className="absolute left-[-130%] top-[102%] z-20 flex min-w-fit flex-col gap-2 rounded-[30px] bg-base-text_accent p-4">
          {options.map((el) => {
            return (
              <li
                key={createKey()}
                className={clsx(
                  'cursor-pointer text-nowrap rounded-[40px] px-6 py-2.5 duration-300 hover:bg-[#616161] hover:opacity-70 hover:shadow-hover_btn',
                  select == el.key && 'bg-[#616161]',
                )}
                onClick={() => {
                  setSelect(el.key);
                  openClose(true);
                }}
              >
                <Text
                  Tag="p"
                  align="center"
                  textType="Desktop/Body"
                  text={el.name}
                  font="sans"
                  color="base/text"
                  className="font-medium"
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
