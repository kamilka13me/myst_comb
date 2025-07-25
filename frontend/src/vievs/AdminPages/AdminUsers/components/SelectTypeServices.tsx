import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import { createKey } from '@/shared/hooks/createKey';
import { Item, useSelectedFiltersStore } from '@/store/useSelectedFiltersStore';
import checkbox from '@/shared/assets/icons/checkbox.svg?react';

interface Props {
  filterName: string;
  hendleSetFilterName: (name?: string) => void;
  onChange: (val: string) => void;
}

export default function SelectTypeServices({
  filterName,
  hendleSetFilterName,
}: Props): JSX.Element {
  const name = 'select-type-services';
  const removeItem = useSelectedFiltersStore((state) => state.removeItem);
  const addItem = useSelectedFiltersStore((state) => state.addItem);
  const services = useSelectedFiltersStore((state) => state.services);

  const isActive = (name: Item): boolean => {
    if (services.find((el) => el.title === name.title)) {
      return true;
    } else return false;
  };
  const options: Item[] = [
    { title: 'Послуги', type: 'services' },
    { title: 'Рев’ю', type: 'services' },
    { title: 'Обговорення', type: 'services' },
    { title: 'Англійська', type: 'services' },
    { title: 'Долучитись', type: 'services' },
  ];

  const isName = (): boolean => {
    return filterName === name;
  };

  const openClose = (close: boolean = false): void => {
    if (close) {
      hendleSetFilterName();
    } else hendleSetFilterName(isName() ? 'close' : name);
  };

  const hendleCheckbox = (name: Item): void => {
    if (services.find((el) => el.title === name.title)) {
      removeItem(name);
    } else if (services.length < 3) {
      addItem(name);
    }
  };
  return (
    <div className="relative flex gap-3 py-6">
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={'Тип послуг'}
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
        <div className="absolute left-[-20%] top-[102%] z-20 flex flex-col gap-2 rounded-[30px] bg-base-text_accent p-4">
          <ul className="scrollbar flex max-h-[275px] flex-col gap-2 overflow-y-auto">
            {options.length &&
              options.map((el) => {
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
                        // openClose(true)
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
                        className="block w-full max-w-[160px] overflow-hidden text-nowrap font-medium"
                      />
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
