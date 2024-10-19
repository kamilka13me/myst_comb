import { FC, useState } from 'react';
import './Calendar.css'
import { DateRange, RangeKeyDict } from 'react-date-range';
//import { Button } from '@/shared/ui/Button';
// import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { uk } from 'date-fns/locale';
import { Icon } from '@/shared/ui/Icon';
import calendar from '@/shared/assets/icons/calendar.svg?react';
import clsx from 'clsx';
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file

interface IRangeDate {
  startDate: Date;
  endDate: Date;
  key: string;
}

// interface Props {
//   calendarIsOpened?: boolean;
//   setDates?: (dates: IRangeDate[]) => void;
// }

export const Calendar: FC= () => {

  const dates:IRangeDate[]=[{
    startDate: new Date('Mon Sep 09 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)'),
    endDate: new Date(),
    key: 'selection',
  }]
  const[calendarIsOpened, setCalendarIsOpened]=useState<boolean>(false)
  const[date, setDate]=useState<IRangeDate[]>(dates)

  const handleOnChange = (ranges: RangeKeyDict):void=>{
    if(!ranges.selection.startDate || !ranges.selection.endDate){return}
    const newResult={
      startDate: new Date(ranges.selection.startDate),
      endDate: new Date(ranges.selection.endDate),
      key: 'selection',
    }
    setDate([newResult])
    console.log(ranges.selection)
  }


  // const startDate = dates[0]?.startDate.toString().slice(0, 10);
  // const endDate = dates[0]?.endDate.toString().slice(0, 10);
  //console.log(dates[0]?.endDate)

  return (
    <div className='relative'>
      <button onClick={()=>{setCalendarIsOpened(!calendarIsOpened)}}
        className={clsx("flex items-center gap-2 rounded-[30px] border border-[#505050] px-8 py-3 duration-300 hover:shadow-hover_btn",calendarIsOpened && 'border-[#b6b6b6] shadow-hover_btn')}
        type="button"
      >
        <Icon Svg={calendar} width={24} height={24} />
        <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={'16.09.2024 - 22.09.2024'}
          font="sans"
          color="base/text"
          className="font-normal"
        />
      </button>



      {calendarIsOpened && (
        <div className="absolute  bottom-[-350px] w-[250px] lg:w-[250px] lg:right-0 z-20 hover:drop-shadow-user-card">
            <DateRange
              locale={uk}
              className='rounded-[30px] w-full p-4'
              //classNames={}
              //date={new Date()}
             // months={1}
              weekdayDisplayFormat={'EEEEEE'}
              showMonthAndYearPickers={false}
              editableDateInputs={false}
              showMonthArrow={true}
              showPreview={true}
              showDateDisplay={false}
              ranges={date}
              onChange={handleOnChange}
              //color='#ff0000'
              rangeColors={['#9e92ee']}
            />
        </div>
      )}
    </div>
  );
};


// export default CustomCalendar;
