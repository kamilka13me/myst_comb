"use client"
import { Text } from "@/shared/ui/Text";
import { Icon } from '@/shared/ui/Icon';
import { UserListItem } from "./UserListItem";
import calendar from '@/shared/assets/icons/calendar.svg?react';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import sort from '@/shared/assets/icons/yellow_sort.svg?react';
import data from './fake-data-users.json'
import Pagination from "./Pagination";

interface User {
  id: string;
  name: string;
  date: string;
  media: string[];
  email: string;
  type_services: string;
}

interface DataProps{
  data:User[]
}


function ListItem({data}: DataProps): JSX.Element {
  return (
    <>
    {data.map((user)=>{
        return (
          <li key={user.id} className="rounded-[24px] px-3 grid 
          grid-cols-[minmax(160px,_185px)_minmax(80px,_120px)_minmax(235px,_250px)_minmax(70px,_1fr)_minmax(128px,_165px)] gap-1
          duration-300 hover:shadow-user-card hover:bg-base-text_accent">
          {UserListItem(user)}
          </li>
        )
      })
    }
  </>
  )
}

export function UsersList(): JSX.Element {

  return (
    <div>
      <div className="rounded-[30px] bg-base-text_dark p-6 mb-6">
        <header className="flex items-center justify-between mb-5">
          <Text
            Tag="h1"
            textType="Desktop/H3"
            text={'Отримувачі послуг'}
            font="sans"
            color="base/BG_block"
            className="font-normal block text-[28px]"
          />
          <button 
            className="rounded-[30px] py-3 px-8 flex gap-2 
            border border-transparent items-center duration-300 hover:shadow-hover_btn focus:border-base-text_light" 
            type="button">
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

        <ul className="w-full flex flex-col gap-4">
          <li className=" grid grid px-3
          grid-cols-[minmax(170px,_185px)_minmax(80px,_120px)_minmax(235px,_250px)_minmax(70px,_1fr)_minmax(128px,_165px)] gap-3
          border-b border-base-text_ligh">
            <div className="flex gap-3 w-[200px] py-6">
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

            <div className="flex gap-3 max-w-[100px] py-6">
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
                <Icon Svg={arrow_down} width={24} height={24}/>
              </button>
            </div>
          </li>
          <ListItem data={data.users}/>
        </ul>
      </div>
      <Pagination/>
    </div>
  )
}