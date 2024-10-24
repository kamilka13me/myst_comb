import { create } from 'zustand';
// State types
interface State {
  filters: string[];
  addItem: (item: string) => void;
  removeItem:(name: string) => void;
  clean: ()=> void
}

interface Props{
  data:string[];
  item:string
}

const addNewItem = ({data, item}:Props):string[] =>{
  if(data.includes(item)){
    return [...data]
  }else{
    return [...data, item]
  }
}

export const useSelectedFiltersStore = create<State>((set, get) => ({
  filters: [],
  addItem: (item) => set({filters: addNewItem({data:get().filters,item})}),
  removeItem:(name) => set({filters: get().filters.filter((el) => el !==name )}),
  clean: ()=> set({filters: []})
}));