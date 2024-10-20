import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import sort from '@/shared/assets/icons/yellow_sort.svg?react';
import { useState } from "react";
import clsx from "clsx";
import { createKey } from "@/shared/hooks/createKey";


interface Props{
  filterName: string;
  hendleSetFilterName:(name?: string)=>void
}

export default function SelectDate({filterName, hendleSetFilterName }: Props): JSX.Element {

  interface Opption{
    name: string;
    key: string;
  }

  const options: Opption[]=[
    {
      name:'Від найстарішої до найновішої дати',
      key:'max-min'
    },
    {
      name:'Від найновішої до найстарішої дати',
      key:'min-max'
    },
  ]

  const openClose =(close:boolean = false): void=>{
    if(close){
      hendleSetFilterName()
    }else hendleSetFilterName(filterName ==='select-date'?'close':'select-date')
  }

  // const [isOpened, setIsOpened] = useState<boolean>(false);
  const [select, setSelect] = useState<string>('min-max');

  return (
    <div className="relative flex max-w-[100px] gap-3 py-6">
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={'Дата'}
        font="sans"
        color="base/BG_block"
        className="font-medium"
      />
      <button type="button" onClick={()=>{
        openClose()}}>
        <Icon Svg={sort} width={24} height={24} />
      </button>

      { filterName==='select-date' && <ul className="absolute left-[-130%] top-[102%] z-20 min-w-fit bg-base-text_accent rounded-[30px] p-4 flex flex-col gap-2">
        {options.map((el)=>{
          return (
            <li key={createKey()} className={clsx("px-6 py-2.5 rounded-[40px] text-nowrap cursor-pointer duration-300 hover:shadow-hover_btn hover:bg-[#616161] hover:opacity-70", select == el.key && 'bg-[#616161]')}  
            onClick={()=>{
              setSelect(el.key)
              openClose(true)
              }}>
              <Text
                Tag="p"
                align="center"
                textType="Desktop/Body"
                text={el.name}
                font="sans"
                color="base/text"
                className="font-medium"
              />
            </li>
          )
        })}
      </ul>
    }
  </div>
  )
}