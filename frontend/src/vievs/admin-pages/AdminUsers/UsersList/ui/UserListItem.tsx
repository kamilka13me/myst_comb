"use client"
import React, { useState } from "react"
import clsx from "clsx"
import { MediaProps, User } from "./TypesProps"
import { Icon } from "@/shared/ui/Icon"
import { Text } from "@/shared/ui/Text"
import icon_add from '@/shared/assets/icons/icon_add.svg?react';
import minus from '@/shared/assets/icons/icon_minus.svg?react';

// "Рев’ю": '#0f9',
// "Послуги": '#d633ff',
// "Англійська": '#ff4e00',
// "Обговорення": '#e7ff00',
// "Долучитись": '#9e92ee',

export function UserListItem(user:User) {
  const[ isOpen, setIsOpen ] = useState<boolean>(false);

  const mediaDropDownList = ({media}:MediaProps) :JSX.Element =>{

    const colors: string[] = ["#f1ff66",'#E066FF','#9E92EE','#FFB899'];

    const getBgColor = (id:number): string =>{
      if(colors.length > id && colors[id]){
        return colors[id]
      }else if(colors.length <= id && colors[id - colors.length] ) {
         return colors[id - colors.length]
      }else return colors[0]
    }

    return(
      <ul className="flex items-start justify-start flex-col gap-0.5 py-6 px-3">
        {media?.length == 1 ? 
          <li className="flex gap-0.5 items-center">
            <div style={{background:getBgColor(0)}} className="rounded-[6px] ">
            <Text
              Tag="p"
              textType="Desktop/Button-menu"
              text={media[0]}
              align="center"
              font="sans"
              color="base/text_accent"
              className="font-normal py-2 px-4"
            />
            </div>
          </li> : null
        }
  
        {media?.length > 1 ? 
          media.map((el,i)=>{
            if(i==0){
              return (
                <li key={i} className="flex gap-0.5 items-center">
                  <div style={{background:getBgColor(i)}} className={"rounded-[6px]"}>
                    <Text
                      Tag="p"
                      textType="Desktop/Button-menu"
                      text={el}
                      align="center"
                      font="sans"
                      color="base/text_accent"
                      className="font-normal py-2 px-4"
                    />
                  </div>
                  <button 
                    type="button" 
                    className={clsx("bg-[#9e92ee] w-[32px] h-[32px] flex items-center justify-center rounded-[6px] duration-300 hover:opacity-70", isOpen && 'hidden')} onClick={()=>{setIsOpen(true)}}>
                    <Icon Svg={icon_add} width={24} height={24} />
                  </button>
                </li>
              )
            }else{
              return (
                <li key={i} className={clsx("flex gap-0.5 items-center", !isOpen && 'hidden')}>
                <div style={{background:getBgColor(i)}} 
                  className={"rounded-[6px]"}>
                  <Text
                    Tag="p"
                    textType="Desktop/Button-menu"
                    text={el}
                    align="center"
                    font="sans"
                    color="base/text_accent"
                    className="font-normal py-2 px-4"
                  />
                  </div>
                  {i == media.length-1 ?
                    <button 
                      type="button" 
                      className={clsx("bg-[#9e92ee] w-[32px] h-[32px] flex items-center justify-center rounded-[6px] duration-300 hover:opacity-70", !isOpen && 'hidden')} 
                      onClick={()=>{setIsOpen(false)}}>
                      <Icon Svg={minus} width={24} height={24} />
                    </button> : 
                    null
                  }
                </li>
              )
            }
          }): 
          null
        }
      </ul>
    )
  }

  return(
    <>
      <td className={clsx(isOpen && "align-top")}>
        <Text
          Tag="span"
          textType="Desktop/Body"
          text={user.name}
          font="sans"
          color="base/text"
          className="font-normal block py-6 px-3"
        />
      </td>
      <td className={clsx(isOpen && "align-top")}>
        <Text
          Tag="span"
          textType="Desktop/Body"
          text={user.date}
          font="sans"
          color="base/text"
          className="font-normal block py-6 px-3"
        />
      </td>
      <td className={clsx(isOpen && "align-top")}>
        { mediaDropDownList({media:user.media})}
      </td>
      <td className={clsx(isOpen && "align-top")}>
        <Text
          Tag="span"
          textType="Desktop/Body"
          text={user.email}
          font="sans"
          color="base/text"
          className="font-normal block py-6 px-3"
        />
      </td>
      <td className={clsx('py-5 px-3', isOpen && "align-top")}>
        <Text
          Tag="span"
          textType="Desktop/Button"
          text={user.type_services}
          font="sans"
          align="center"
          color="base/text"
          className={"font-normal block border rounded-[30px] w-[132px] py-2 mx-auto"}
        />
      </td>
    </> 
  )
}