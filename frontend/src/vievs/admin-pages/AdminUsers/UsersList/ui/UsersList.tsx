"use client"
import { Text } from "@/shared/ui/Text";
import { Icon } from '@/shared/ui/Icon';
import clsx from "clsx";
import calendar from '@/shared/assets/icons/calendar.svg?react';
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import sort from '@/shared/assets/icons/yellow_sort.svg?react';
import icon_add from '@/shared/assets/icons/icon_add.svg?react';
import minus from '@/shared/assets/icons/icon_minus.svg?react';
import { useState } from "react";
//border border-base-text_light
export function UsersList(): JSX.Element {

const[ isOpen, setIsOpen ] = useState(false)

const colors:string[] =['#f1ff66','#e066ff','#FFB899','#EB99FF','#9E92EE','#f1ff66','#e066ff','#FFB899','#EB99FF','#9E92EE'];

interface User {
  name: string;
  date: string;
  media: string[];
  email: string;
  type_services: string;
}

const usersData:User[] = [
  {
    name: 'Віктор Шевченко',
    date: '12.03.2024',
    media: ['Текстильне мистецтво','Культурологія', 'Мистецтвознавці'],
    email: 'emailemail@gmail.com',
    type_services: 'Рев’ю',
  },
  {
    name: 'Віктор Шевченко-Шевченко',
    date: '12.03.2024',
    media: ['Текстильне мистецтво','Культурологія', 'Мистецтвознавці','Архітектура','Скульптура','Стріт-арт'],
    email: 'emailemail@gmail.com',
    type_services: 'Обговорення',
  },
  {
    name: 'Віктор Шевченко',
    date: '12.03.2024',
    media: ['Історики мистецтва'],
    email: 'emailemail@gmail.com',
    type_services: 'Англійська',
  },
  {
    name: 'Віктор Шевченко',
    date: '12.03.2024',
    media: ['Текстильне мистецтво','Графічний дизайн'],
    email: 'emailemail@gmail.com',
    type_services: 'Долучитись',
  },
]

const mediaDropDownList =():JSX.Element => {



  return(
    <ul className="flex items-start justify-start flex-col gap-0.5 py-6 px-3">

      <li className="flex gap-0.5">
        <Text
          Tag="p"
          textType="Desktop/Button-menu"
          text={'Текстильне мистецтво'}
          align="center"
          font="sans"
          color="base/text_accent"
          className={clsx("font-normal rounded-[6px] py-2 px-4",`bg-[${colors[0]}]`)}
        />
        <button 
          type="button" 
          className={clsx("bg-[#9e92ee] w-[32px] h-[32px] flex items-center justify-center rounded-[6px] duration-300 hover:opacity-70", isOpen && 'hidden')} onClick={()=>{setIsOpen(true)}}>
          <Icon Svg={icon_add} width={24} height={24} />
        </button>
      </li>

     {isOpen && <><li className="flex gap-0.5">
        <Text
          Tag="p"
          textType="Desktop/Button-menu"
          text={'Культурологія'}
          align="center"
          font="sans"
          color="base/text_accent"
          className={clsx("font-normal rounded-[6px] py-2 px-4",`bg-[${colors[1]}]`)}
        />
      </li>

      <li className="flex gap-0.5">
        <Text
          Tag="p"
          textType="Desktop/Button-menu"
          text={'Мистецтвознавці'}
          align="center"
          font="sans"
          color="base/text_accent"
          className={clsx("font-normal rounded-[6px] py-2 px-4",`bg-[${colors[2]}]`)}
        />
        <button 
          type="button" 
          className={clsx("bg-[#9e92ee] w-[32px] h-[32px] flex items-center justify-center rounded-[6px] duration-300 hover:opacity-70", !isOpen && 'hidden')} 
          onClick={()=>{setIsOpen(false)}}>
          <Icon Svg={minus} width={24} height={24} />
        </button>
      </li> </>}

{/* 
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={'Культурологія'}
                align="center"
                font="sans"
                color="base/text_accent"
                className="font-normal rounded-[6px] py-2 px-4 bg-[#e066ff]"
              />
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={'Мистецтвознавці'}
                align="center"
                font="sans"
                color="base/text_accent"
                className="font-normal rounded-[6px] py-2 px-4 bg-[#9e92ee]"
              /> */}

    </ul>
  )
}

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
        <button className="rounded-[30px] py-3 px-8 flex gap-2 border border-transparent items-center duration-300 hover:shadow-calendar  focus:border-base-text_light" type="button">
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
                Tag="h3"
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
          </th>
          <th className="py-6 px-3">
            <div className="flex gap-3">
              <Text
                Tag="h3"
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
          </th>
          <th className="py-6 px-3">
            <div className="flex gap-3 ">
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
          </th>
        </tr>
        </thead>

        <tbody className="my-6 mx-3 ">
          <tr className="h-[16px]"></tr>
          <tr className="rounded-[24px] duration-300 hover:shadow-user-card">
            <td className={clsx(isOpen && "align-top")}>
              {/* <div className="h-full flex items-start justify-start py-6 px-3"> */}
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'Віктор Шевченко Віктор Шевченко'}
                font="sans"
                color="base/text"
                className="font-normal py-6 px-3"
              />
              {/* </div> */}
            </td>
            <td className={clsx(isOpen && "align-top")}>
              {/* <div className="flex items-start justify-start py-6 px-3"> */}
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'12.03.2024'}
                font="sans"
                color="base/text"
                className="font-normal py-6 px-3"
              />
              {/* </div> */}
            </td>
            <td className={clsx(isOpen && "align-top")}>
              { mediaDropDownList()}
            {/* <div className="flex items-start justify-start flex-col gap-0.5 py-6 px-3">
              <div className="flex gap-0.5 ">
                <Text
                  Tag="p"
                  textType="Desktop/Button-menu"
                  text={'Текстильне мистецтво'}
                  align="center"
                  font="sans"
                  color="base/text_accent"
                  className="font-normal rounded-[6px] py-2 px-4 bg-[#f1ff66]"
                />
                <button type="button" className="bg-[#9e92ee] w-[32px] h-[32px] flex items-center justify-center rounded-[6px] duration-300 hover:opacity-70">
                  <Icon Svg={icon_add} width={24} height={24} />
                </button>
              </div>

              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={'Культурологія'}
                align="center"
                font="sans"
                color="base/text_accent"
                className="font-normal rounded-[6px] py-2 px-4 bg-[#e066ff]"
              />
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={'Мистецтвознавці'}
                align="center"
                font="sans"
                color="base/text_accent"
                className="font-normal rounded-[6px] py-2 px-4 bg-[#9e92ee]"
              />
              </div> */}


            </td>
            <td className={clsx(isOpen && "align-top")}>
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'emailemail@gmail.com'}
                font="sans"
                color="base/text"
                className="font-normal py-6 px-3"
              />
            </td>
            <td className={clsx('py-5 px-3', isOpen && "align-top")}>
              <Text
                Tag="p"
                textType="Desktop/Button"
                text={'Рев’ю'}
                font="sans"
                align="center"
                color="base/text"
                className="font-normal border rounded-[30px] w-[132px] py-2 mx-auto"
              />
            </td>
          </tr>
          <tr className="h-[16px]"></tr>

          <tr className="rounded-[24px] duration-300 hover:shadow-user-card">
            <td>
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'Віктор Шевченко'}
                font="sans"
                color="base/text"
                className="font-normal py-6 px-3"
              />
            </td>
            <td>
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'12.03.2024'}
                font="sans"
                color="base/text"
                className="font-normal  py-6 px-3"
              />
            </td>
            <td>
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={'Декоративне мистецтво'}
                align="center"
                font="sans"
                color="base/text_accent"
                className="font-normal rounded-[6px] py-2 px-4 bg-[#FFB899]"
              />
            </td>
            <td>
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'emailemail@gmail.com'}
                font="sans"
                color="base/text"
                className="font-normal py-6 px-3"
              />
            </td>
            <td >
              <Text
                Tag="p"
                textType="Desktop/Button"
                text={'Рев’ю'}
                font="sans"
                align="center"
                color="base/text"
                className="font-normal border rounded-[30px] w-[132px] py-2 mx-auto"
              />
            </td>
          </tr>
        </tbody>


      </table>


      {/* <div className="grid grid-cols-5 gap-2 py-4 px-2 border-b border-base-text_light mb-4">
        <div className="flex gap-3 max-w-[175px]">
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

        <div className="flex gap-3 max-w-[100px]">
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
        <div className="flex gap-3 max-w-[240px]">
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
        <div className="flex gap-3 max-w-[190px]">
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
      
      <ul>

        <li  className="grid grid-cols-5 gap-2 py-4 px-2 border-b border-base-text_light mb-4">
        <div className="grid grid-cols-5 gap-2 py-4 px-2 border-b border-base-text_light mb-4">
        <div className="flex gap-3 max-w-[175px]">
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

        <div className="flex gap-3 w-[100px]  border border-base-text_light">
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
        <div className="flex gap-3  border border-base-text_light ">
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
        <div className="flex gap-3 max-w-[190px]">
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
        </li>
    
        <li className="py-6 px-3 rounded-[24px] duration-300 hover:shadow-user-card grid grid-flow-col  auto-cols-5 items-center gap-2">
          <div className="grid grid-flow-col  auto-cols-5 items-center gap-2">
            <div className="max-w-[175px]">
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'Віктор Шевченко Віктор Шевченко'}
                font="sans"
                color="base/text"
                className="font-normal"
              />
            </div>

            <div className="max-w-[100px]">
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'12.03.2024'}
                font="sans"
                color="base/text"
                className="font-normal"
              />
            </div>
            <div className="w-[250px] flex flex-col">
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={'Декоративне мистецтво'}
                align="center"
                font="sans"
                color="base/text_accent"
                className="font-normal rounded-[6px] py-2 px-4 bg-[#FFB899]"
              />
              <Text
                Tag="p"
                textType="Desktop/Button-menu"
                text={'Декоративне мистецтво'}
                align="center"
                font="sans"
                color="base/text_accent"
                className="font-normal rounded-[6px] py-2 px-4 bg-[#FFB899]"
              />

            </div> 
            <div className="">
              <Text
                Tag="p"
                textType="Desktop/Body"
                text={'emailemail@gmail.com'}
                font="sans"
                color="base/text"
                className="font-normal"
              />
            </div>

            <div className="">
              <Text
                Tag="p"
                textType="Desktop/Button"
                text={'Рев’ю'}
                font="sans"
                align="center"
                color="base/text"
                className="font-normal border rounded-[30px] w-[132px] py-2 mx-auto"
              />
            </div> 
          </div>
        </li>
      </ul> */}

    </div>
  )
}