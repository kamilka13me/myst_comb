import { Text } from "@/shared/ui/Text";
import { Icon } from '@/shared/ui/Icon';
import calendar from '@/shared/assets/icons/calendar.svg?react';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import sort from '@/shared/assets/icons/yellow_sort.svg?react';

export function UsersList(): JSX.Element {
  return (
    <div className="rounded-[30px] bg-base-text_dark p-6">
      <header className="flex items-center justify-between mb-5">
        <Text
          Tag="h1"
          textType="Desktop/H3"
          text={'Отримувачі послуг'}
          font="sans"
          color="base/BG_block"
          className="font-normal text-[28px]"
        />
        <div className="rounded-[30px] border border-base-text_light py-3 px-8 flex gap-2 items-center">
          <Icon Svg={calendar} width={24} height={24} />
          <Text
          Tag="span"
          textType="Desktop/Subtitle"
          text={'16.09.2024 - 22.09.2024'}
          font="sans"
          color="base/text"
          className="font-normal"
        />
        </div>
      </header>

      <div className="grid grid-cols-5 gap-2 py-4 px-2 border-b border-base-text_light mb-4">
        <div className="flex gap-3 min-w-[175px]">
          <Text
            Tag="h3"
            textType="Desktop/Body"
            text={'Ім’я та прізвище'}
            font="sans"
            color="base/BG_block"
            className="font-medium"
          />
          <button type="button">
            <Icon Svg={arrow_down} width={24} height={24}/>
          </button>
        </div>

        <div className="flex gap-3 min-w-[100px]">
          <Text
            Tag="h3"
            textType="Desktop/Body"
            text={'Дата'}
            font="sans"
            color="base/BG_block"
            className="font-medium"
          />
          <button type="button">
            <Icon Svg={sort} width={24} height={24} />
          </button>
        </div>
        <div className="flex gap-3 min-w-[240px]">
          <Text
            Tag="h3"
            textType="Desktop/Body"
            text={'Медіа'}
            font="sans"
            color="base/BG_block"
            className="font-medium"
          />
          <button type="button">
            <Icon Svg={arrow_down} width={24} height={24}/>
          </button>
        </div>
        <div className="flex gap-3 min-w-[190px]">
          <Text
            Tag="h3"
            textType="Desktop/Body"
            text={'Email'}
            font="sans"
            color="base/BG_block"
            className="font-medium"
          />
          <button type="button">
            <Icon Svg={arrow_down} width={24} height={24} />
          </button>
        </div>
        <div className="flex gap-3 min-w-[150px]">
          <Text
            Tag="h3"
            textType="Desktop/Body"
            text={'Тип послуг'}
            font="sans"
            color="base/BG_block"
            className="font-medium"
          />
          <button type="button">
            <Icon Svg={arrow_down} width={24} height={24}/>
          </button>
        </div> 
 


      </div>

      UsersList
    </div>
  )
}