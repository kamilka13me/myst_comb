import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import icon_close from '@/shared/assets/icons/icon_close.svg?react';
import { useSelectedFiltersStore } from '@/store/useSelectedFiltersStore';

interface Item {
  title: string;
  type: string;
}

interface Props {
  key: string | number;
  name: Item;
}

function SelectedElement({ name }: Props): JSX.Element {
  const removeItem = useSelectedFiltersStore((state) => state.removeItem);
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
    if (name === 'Долучитись' || name === 'Email') {
      return 'border-icons-symbols-blue-200';
    }
    return '';
  };

  return (
    <li
      className={clsx(
        `flex items-center justify-center gap-2 rounded-[30px] border px-3 py-2 duration-300 hover:shadow-user-card`,
        getBorderColor(name.title)
          ? getBorderColor(name.title)
          : 'border-transparent bg-base-text_light_2',
      )}
    >
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={name.title}
        font="sans"
        color="base/text_light"
        className="font-medium"
      />
      <button
        type="button"
        className="duration-200 hover:opacity-70"
        onClick={() => {
          removeItem(name);
        }}
      >
        <Icon Svg={icon_close} width={24} height={24} />
      </button>
    </li>
  );
}

export default function SelectedFilters(): JSX.Element | null {
  const clean = useSelectedFiltersStore((state) => state.clean);
  const media = useSelectedFiltersStore((state) => state.media);
  const services = useSelectedFiltersStore((state) => state.services);
  const email = useSelectedFiltersStore((state) => state.email);

  const itemsData = [...media, ...services];
  if (email) {
    itemsData.push(email);
  }

  if (!itemsData.length) {
    return null;
  }

  return (
    <div className="flex w-full items-end justify-between gap-6">
      <ul className="flex flex-wrap gap-1">
        {itemsData &&
          itemsData.map((el, i) => {
            return <SelectedElement key={i} name={el} />;
          })}
      </ul>

      <button
        type="button"
        className="duration-200 hover:opacity-70"
        onClick={clean}
      >
        <Text
          Tag="span"
          textType="Desktop/Body"
          text={'Очистити все'}
          font="sans"
          color="base/text_light"
          className="text-nowrap font-medium underline"
        />
      </button>
    </div>
  );
}
