import { useState } from "react";
import clsx from "clsx";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import { createKey } from "@/shared/hooks/createKey";

interface Props{
  filterName: string;
  hendleSetFilterName:(name?: string)=>void
}

export default function SelectTypeServices({filterName, hendleSetFilterName }: Props): JSX.Element {
  const name = 'select-type-services'

  const options: string[] = ['Послуги', 'Ревʼю', 'Обговорення', 'Англійська', 'Долучитись']

  const [select, setSelect] = useState<string | null>(null);

  const isName = (): boolean =>{
    return filterName === name
  }

  const openClose =(close: boolean = false): void=>{
    if(close){
      hendleSetFilterName()
    }else hendleSetFilterName(isName() ? 'close': name)
  }

  return (
    <div className="relative flex gap-3 py-6">
      <Text
        Tag="span"
        textType="Desktop/Body"
        text={'Тип послуг'}
        font="sans"
        color="base/BG_block"
        className="font-medium"
      />
      <button type="button" onClick={()=>{openClose()}}>
        <Icon 
          className={clsx(isName() && "rotate-180")} 
          Svg={arrow_down} width={24} height={24} />
      </button>

      { isName() && <div className="absolute left-[-10%] top-[102%] z-20 rounded-[30px] p-4 flex flex-col gap-2  bg-base-text_accent">

        <ul className=" flex flex-col gap-2 max-h-[275px] overflow-y-auto scrollbar">

          {options.length && options.map((el)=>{
              return (
                <li className="" key={createKey()}>
                  <button type="button" 
                    className={clsx("w-full rounded-[30px] px-6 py-3 duration-300 hover:bg-base-text_light_2",select===el && 'bg-base-text_light_2')}
                    onClick={()=>{
                      setSelect(el)
                      openClose(true)
                    }}>
                    <Text
                    Tag="span"
                    textType="Desktop/Body"
                    text={el}
                    font="sans"
                    color="base/text"
                    className="font-medium block w-full text-nowrap max-w-[160px] overflow-hidden"
                  />
                  </button>
                </li>
              )
            })
          }
          </ul>
        </div>
      }
    </div>
  )
}