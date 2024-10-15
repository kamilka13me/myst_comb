"use client"
//import { useState } from "react";
import { Text } from "@/shared/ui/Text";
import { Icon } from '@/shared/ui/Icon';
import { UserListItem } from "./UserListItem";
import calendar from '@/shared/assets/icons/calendar.svg?react';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import sort from '@/shared/assets/icons/yellow_sort.svg?react';
import data from './fake-data-users.json'
import Pagination from "./Pagination";

export function UsersList(): JSX.Element {
//  interface User {
//     id: string;
//     name: string;
//     date: string;
//     media: string[];
//     email: string;
//     type_services: string;
//   }


  // const[ pages, setPages ] = useState<[User[]] | null>(null);

  // const createPages =(data: User[]): void =>{
  //   const newData = []

  // }

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

        <table className="w-full">
          <thead>
            <tr className=" h-[56px] border-b border-base-text_ligh">
              <th className="w-[200px] py-6 px-3">
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
              <th className="py-6 px-3">
                <div className="flex gap-3 min-w-[100px]">
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
              <th className="py-6 px-3">
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
              <th className="py-6 px-3">
                <div className="flex gap-3 ">
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
              <th className="py-6 px-3">
                <div className="flex gap-3 ">
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
              </th>
            </tr>
          </thead>

          <tbody className="my-6 mx-3 ">
            <tr className="h-[16px]"></tr>
            { data.users.map((user)=>{
                return (
                  <>
                    <tr key={user.id} className="rounded-[24px] overflow-visible duration-300 hover:shadow-user-card hover:bg-base-text_accent">
                    {UserListItem(user)}
                    </tr>
                    <tr className="h-[16px]"></tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <Pagination/>
    </div>
  )
}