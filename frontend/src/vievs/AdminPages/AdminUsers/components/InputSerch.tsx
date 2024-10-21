import { Icon } from "@/shared/ui/Icon"
import serch from '@/shared/assets/icons/icon-serch.svg?react';

interface Props{
  serchValue:string;
  setSerchValue:(value: string)=>void
}

export default function InputSerch({ serchValue, setSerchValue }: Props) {
  return (
    <label htmlFor="media" className="flex gap-x-1 border border-base-text_dark rounded-[30px] px-6 py-3">
      <Icon Svg={serch} width={24} height={24} />
      <input className="bg-transparent w-full pl-1 border-none outline-none text-base-stroke-btn-act text-[16px] font-medium" 
      type="search" 
      name="search media" 
      id="media" 
      placeholder="Пошук..." 
      value={serchValue} 
      onInput={(ev)=>{setSerchValue((ev.target as HTMLInputElement).value)}}/>
    </label>
  )
}