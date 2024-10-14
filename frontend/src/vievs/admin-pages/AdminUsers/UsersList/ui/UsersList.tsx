'use client';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { UserListItem } from './UserListItem';
import calendar from '@/shared/assets/icons/calendar.svg?react';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import sort from '@/shared/assets/icons/yellow_sort.svg?react';
import data from './fake-data-users.json';

export function UsersList(): JSX.Element {
  return (
    <div className="rounded-[30px] bg-base-text_dark p-6">
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

      <table className="w-full">
        <thead>
          <tr className="border-base-text_ligh h-[56px] border-b">
            <th className="w-[200px] px-3 py-6">
              <div className="flex gap-3">
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
            </th>
            <th className="px-3 py-6">
              <div className="flex min-w-[100px] gap-3">
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
            </th>
            <th className="px-3 py-6">
              <div className="flex gap-3">
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
            </th>
            <th className="px-3 py-6">
              <div className="flex gap-3">
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
            </th>
            <th className="px-3 py-6">
              <div className="flex gap-3">
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
            </th>
          </tr>
        </thead>

        <tbody className="mx-3 my-6">
          <tr className="h-[16px]"></tr>
          {data.users.map((user) => {
            return (
              <>
                <tr
                  key={user.id}
                  className="rounded-[24px] duration-300 hover:shadow-user-card"
                >
                  {UserListItem(user)}
                </tr>
                <tr className="h-[16px]"></tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
