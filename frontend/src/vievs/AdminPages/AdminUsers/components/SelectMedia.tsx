import { useEffect, useState } from "react";
import clsx from "clsx";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import arrow_down from '@/shared/assets/icons/yellow_arrow_down.svg?react';
import { createKey } from "@/shared/hooks/createKey";
import InputSerch from "./InputSerch";

interface Props{
  filterName: string;
  hendleSetFilterName:(name?: string)=>void
}

export default function SelectMedia({filterName, hendleSetFilterName }: Props): JSX.Element {
  const name = 'select-media'
  const options: string[] = ['Куратори', 'Культурологи', 'Митці', 'Історики мистецтва', 'Скульптура', 'Стріт арт', 'Живопис', 'Архітектура', 'Графічний дизайн', 'Арт-директори', 'Декоративне мистецтво', 'Графіка', 'Мозаїка', 'Ілюстрація', 'Digital-art', 'Арт-дилери', 'Текстильне мистецтво', 'Мистецтвознавці', 'Кераміка']

  const [select, setSelect] = useState<string | null>(null);

  const [ optionsData, setOptionsData ] = useState<string[]>(options);

  const [ serchValue, setSerchValue ] = useState<string>('');

  useEffect(()=>{
    if(serchValue){
      const newArr = options.filter((el)=>(el.toUpperCase().includes(serchValue.toUpperCase())))
      setOptionsData(newArr)
    }else setOptionsData(options)
  },[serchValue])

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
        text={'Медіа'}
        font="sans"
        color="base/BG_block"
        className="font-medium"
      />
      <button type="button" onClick={()=>{openClose()}}>
        <Icon className={clsx(isName() && "rotate-180")} Svg={arrow_down} width={24} height={24} />
      </button>

    { isName() && <div className="absolute left-[-50%] top-[102%] z-20 rounded-[30px] p-4 flex flex-col gap-2  bg-base-text_accent">

        <InputSerch 
          serchValue={serchValue} 
          setSerchValue={setSerchValue}/>

        <ul className=" flex flex-col gap-2 max-h-[275px] overflow-y-auto scrollbar pr-2">

          {optionsData.length ? optionsData.map((el)=>{
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
                  className="font-medium block w-full text-nowrap max-w-[250px] overflow-hidden"
                />
                </button>
              </li>
            )
          }):
            <li className="w-full rounded-[30px] px-6 py-3">
              <Text
                Tag="span"
                textType="Desktop/Body"
                text={'Даних не знайдено'}
                font="sans"
                color="base/text"
                className="font-medium block w-full"
              />
            </li>
          }
        </ul>
      </div>
    }
    </div>
  )
}