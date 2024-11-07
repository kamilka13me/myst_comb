import { Icon } from '@/shared/ui/Icon';
import serch from '@/shared/assets/icons/icon-serch.svg?react';

interface Props {
  serchValue: string;
  setSerchValue: (value: string) => void;
}

export default function InputSerch({ serchValue, setSerchValue }: Props) {
  return (
    <label
      htmlFor="media"
      className="flex gap-x-1 rounded-[30px] border border-base-text_dark px-6 py-3"
    >
      <Icon Svg={serch} width={24} height={24} />
      <input
        className="w-full border-none bg-transparent pl-1 text-[16px] font-medium text-base-stroke-btn-act outline-none"
        type="search"
        name="search media"
        id="media"
        placeholder="Пошук..."
        value={serchValue}
        onInput={(ev) => {
          setSerchValue((ev.target as HTMLInputElement).value);
        }}
      />
    </label>
  );
}
