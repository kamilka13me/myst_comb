'use client';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { UserListItem } from './UserListItem';
import calendar from '@/shared/assets/icons/calendar.svg?react';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import sort from '@/shared/assets/icons/yellow_sort.svg?react';
import data from './fake-data-users.json';
import Pagination from './Pagination';
import { User } from './TypesProps';

interface DataProps {
  data: User[];
}

function ListItem({ data }: DataProps): JSX.Element {
  return (
    <>
      {data.map((user) => {
        return (
          <li
            key={user.id}
            className="grid grid-cols-[minmax(160px,_185px)_minmax(80px,_120px)_minmax(200px,_250px)_minmax(70px,_1fr)_minmax(128px,_165px)] gap-1 rounded-[24px] px-3 duration-300 hover:bg-base-text_accent hover:shadow-user-card"
          >
            {UserListItem(user)}
          </li>
        );
      })}
    </>
  );
}

export function UsersList(): JSX.Element {
  return (
    <div>
      <div className="mb-6 rounded-[30px] bg-base-text_dark p-4 lg:p-4 xl:p-6">
        <header className="mb-5 flex items-center justify-between">
          <Text
            Tag="h1"
            textType="Desktop/H3"
            text={'Отримувачі послуг'}
            font="sans"
            color="base/BG_block"
            className="block text-[28px] font-normal"
          />
          <button
            className="flex items-center gap-2 rounded-[30px] border border-transparent px-8 py-3 duration-300 hover:shadow-hover_btn focus:border-base-text_light"
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
        </header>

        <ul className="flex w-full flex-col gap-3 xl:gap-4">
          <li className="border-base-text_ligh grid grid-cols-[minmax(170px,_185px)_minmax(80px,_120px)_minmax(200px,_250px)_minmax(80px,_1fr)_minmax(128px,_165px)] gap-1 border-b px-3 xl:gap-3">
            <div className="flex w-[200px] gap-3 py-6">
              <Text
                Tag="span"
                textType="Desktop/Body"
                text={'Ім’я та прізвище'}
                font="sans"
                color="base/BG_block"
                className="font-medium"
              />
              <button type="button">
                <Icon Svg={arrow_down} width={24} height={24} />
              </button>
            </div>

            <div className="flex max-w-[100px] gap-3 py-6">
              <Text
                Tag="span"
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

            <div className="flex gap-3 py-6">
              <Text
                Tag="span"
                textType="Desktop/Body"
                text={'Медіа'}
                font="sans"
                color="base/BG_block"
                className="font-medium"
              />
              <button type="button">
                <Icon Svg={arrow_down} width={24} height={24} />
              </button>
            </div>
            <div className="flex gap-3 py-6">
              <Text
                Tag="span"
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
            <div className="flex gap-3 py-6">
              <Text
                Tag="span"
                textType="Desktop/Body"
                text={'Тип послуг'}
                font="sans"
                color="base/BG_block"
                className="font-medium"
              />
              <button type="button">
                <Icon Svg={arrow_down} width={24} height={24} />
              </button>
            </div>
          </li>
          <ListItem data={data.users} />
        </ul>
      </div>
      <Pagination />
    </div>
  );
}
