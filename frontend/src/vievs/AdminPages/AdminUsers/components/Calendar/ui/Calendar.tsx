import './Calendar.css';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { Text } from '@/shared/ui/Text';
import { uk } from 'date-fns/locale';
import { Icon } from '@/shared/ui/Icon';
import calendar from '@/shared/assets/icons/calendar.svg?react';
import { formatDate } from '@/shared/hooks/formatDate';

interface IRangeDate {
  startDate: Date;
  endDate: Date;
  key: string;
}

// interface Props {
//   calendarIsOpened?: boolean;
//   setDates?: (dates: IRangeDate[]) => void;
// }
interface Props {
  filterName: string;
  hendleSetFilterName: (name?: string) => void;
  onChangeDateFrom?: (val: string) => void;
  onChangeDateTo?: (val: string) => void;
}

export const Calendar: FC<Props> = ({ filterName, hendleSetFilterName }) => {
  const name = 'calendar';

  const dates: IRangeDate[] = [
    {
      startDate: new Date(
        'Mon Sep 09 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)',
      ),
      endDate: new Date(1726693200000),
      key: 'selection',
    },
  ];

  const [date, setDate] = useState<IRangeDate[]>(dates);

  const isName = (): boolean => {
    return filterName === name;
  };

  const openClose = (close: boolean = false): void => {
    if (close) {
      hendleSetFilterName();
    } else hendleSetFilterName(isName() ? 'close' : name);
  };

  const handleOnChange = (ranges: RangeKeyDict): void => {
    if (!ranges.selection.startDate || !ranges.selection.endDate) {
      return;
    }
    const newResult = {
      startDate: new Date(ranges.selection.startDate),
      endDate: new Date(ranges.selection.endDate),
      key: 'selection',
    };
    setDate([newResult]);
  };

  const formatDateDisplay = (dates: IRangeDate): string => {
    const startDate = formatDate(dates.startDate.toString());
    const endDate = formatDate(dates.endDate.toString());
    if (startDate === endDate) {
      return `${startDate}`;
    } else return `${startDate} - ${endDate}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          openClose();
        }}
        className={clsx(
          'flex items-center gap-2 rounded-[30px] border px-3 py-3 duration-300 hover:shadow-hover_btn min-[900px]:px-8',
          filterName === 'calendar'
            ? 'border-base-stroke-btn-act shadow-hover_btn'
            : 'border-[#505050]',
        )}
        type="button"
      >
        <Icon Svg={calendar} width={24} height={24} />
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={formatDateDisplay(date[0])}
          font="sans"
          color="base/text"
          className="font-normal"
        />
      </button>

      {isName() && (
        <div className="absolute left-0 top-[108%] z-20 w-[280px] min-[900px]:right-0 min-[900px]:w-[250px]">
          <DateRange
            locale={uk}
            className="w-full rounded-[30px] p-4"
            date={new Date()}
            weekdayDisplayFormat={'EEEEEE'}
            showMonthAndYearPickers={false}
            editableDateInputs={false}
            showMonthArrow={true}
            showPreview={true}
            showDateDisplay={false}
            ranges={date}
            onChange={handleOnChange}
            rangeColors={['#9e92ee']}
          />
        </div>
      )}
    </div>
  );
};
