import { Icon } from '@/shared/ui/Icon';
import ArrowInCircleBlue from '@/shared/assets/icons/ArrowInCircleBlue.svg?react';
import { Text } from '@/shared/ui/Text';
import { useState } from 'react';
import clsx from 'clsx';

export default function Pagination(): JSX.Element {
  const [pageNum, setPageNum] = useState<number>(1);

  const prevPage = (): void => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const nextPage = (): void => {
    if (pageNum < 10) {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <button
          type="button"
          className={clsx(
            'duration-300 hover:opacity-70',
            pageNum < 2 && 'hidden',
          )}
          onClick={prevPage}
        >
          <Icon
            Svg={ArrowInCircleBlue}
            width={28}
            height={28}
            className="min-w-[28px] rotate-[-135deg]"
          />
        </button>
      </div>
      <div className="flex items-center justify-center gap-0.5">
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={pageNum.toString()}
          align="center"
          font="sans"
          color="base/text"
          className="font-normal"
        />
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={'/'}
          align="center"
          font="sans"
          color="base/text"
          className="font-normal"
        />
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={'10'}
          align="center"
          font="sans"
          color="base/text"
          className="font-normal"
        />
      </div>

      <button
        type="button"
        className="duration-300 hover:opacity-70"
        onClick={nextPage}
      >
        <Icon
          Svg={ArrowInCircleBlue}
          width={48}
          height={48}
          className="min-w-[48px]"
        />
      </button>
    </div>
  );
}
