'use client';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { UserListItem } from './UserListItem';
import filter from '@/shared/assets/icons/icon_filter.svg?react';

import data from './fake-data-users.json';
import Pagination from '../../components/Pagination';
import { User } from './TypesProps';
import { Calendar } from '../../components/Calendar';
import SelectDate from '../../components/SelectDate';
import { useState } from 'react';
import SelectMedia from '../../components/SelectMedia';
import SelectTypeServices from '../../components/SelectTypeServices';
import SelectName from '../../components/SelectName';
import SelectEmail from '../../components/SelectEmail';
import SelectedFilters from '../../components/SelectedFilters';
import { useRouter } from 'next/navigation';

interface DataProps {
  data: User[];
}

function ListItem({ data }: DataProps): JSX.Element {
  const router = useRouter()

  const toUserPage =(id:string): void=>{
    router.push(`/admin/users/${id}`)
  }

  return (
    <>
      {data.map((user) => {
        return (
          <li
            key={user.id}
            className="flex flex-col p-4 min-[900px]:grid grid-cols-[minmax(160px,_185px)_minmax(80px,_120px)_minmax(200px,_250px)_minmax(70px,_1fr)_minmax(128px,_165px)] min-[900px]:gap-1 rounded-[24px] min-[900px]:px-3 duration-300 hover:bg-base-text_accent hover:shadow-user-card"
            // onClick={()=>{toUserPage(user.id)}}
          >
            {UserListItem(user)}
          </li>
        );
      })}
    </>
  );
}

export function UsersList(): JSX.Element {
  const [ filterName, setFilterName ] = useState<string>('close');

  const hendleSetFilterName =(name?: string):void=>{
    setFilterName(name ? name : 'close')
  }

  return (
    <div>
      <div className="mb-6 rounded-[30px] min-[900px]:bg-base-text_dark min-[900px]:p-4 lg:p-4 xl:p-6">
        <header className="mb-5 flex flex-col min-[900px]:flex-row min-[900px]:items-center justify-between gap-5">
          <Text
            Tag="h1"
            textType="Desktop/H3"
            text={'Отримувачі послуг'}
            font="sans"
            color="base/BG_block"
            className="block text-[28px] font-normal max-[900px]:hidden"
          />
          <Text
            Tag="h1"
            textType="Desktop/H3"
            text={'Отримувачі'}
            font="sans"
            color="base/BG_block"
            className="block text-[24px] font-normal min-[900px]:hidden"
          />
          <div className='flex items-center justify-between gap-2.5'>
            <Calendar 
              filterName={filterName} 
              hendleSetFilterName={hendleSetFilterName}/>

            <button type="button" className='flex py-3 gap-2.5 items-center justify-center min-[900px]:hidden'>
              <Text
                Tag="span"
                textType="Desktop/Body"
                text={'Фільтр'}
                font="sans"
                color="base/BG_block"
                className="font-medium"
              />
              <Icon Svg={filter} width={24} height={24} />
            </button>  
          </div>  
        </header>

        <SelectedFilters/>

        <ul className="flex w-full flex-col gap-3 xl:gap-4 max-[900px]:bg-[#1C1C1C] max-[900px]:rounded-[30px] max-[900px]:px-3 max-[900px]:py-6">
          <li className="hidden min-[900px]:grid grid-cols-[minmax(170px,_185px)_minmax(80px,_120px)_minmax(200px,_250px)_minmax(80px,_1fr)_minmax(128px,_165px)] gap-1 border-base-text_ligh border-b px-3 xl:gap-3">

            <SelectName  
              filterName={filterName} 
              hendleSetFilterName={hendleSetFilterName}/>

            <SelectDate 
              filterName={filterName} 
              hendleSetFilterName={hendleSetFilterName}/>

            <SelectMedia filterName={filterName} 
              hendleSetFilterName={hendleSetFilterName}/>

            <SelectEmail filterName={filterName} 
              hendleSetFilterName={hendleSetFilterName}/>  
            
            <SelectTypeServices  
              filterName={filterName} 
              hendleSetFilterName={hendleSetFilterName}/>
          </li>
          <ListItem data={data.users} />
        </ul>
      </div>
      <Pagination />
    </div>
  );
}
