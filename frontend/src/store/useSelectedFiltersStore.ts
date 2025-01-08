import { create } from 'zustand';
// State types

export interface Item {
  title: string;
  type: string;
}

interface State {
  media: Item[];
  services: Item[];
  email: Item | null;
  addItem: (item: Item) => void;
  removeItem: (name: Item) => void;
  clean: () => void;
}

interface Props {
  data: Item[];
  item: Item;
}

const addNewItem = ({ data, item }: Props): Item[] => {
  if (data.find((el) => el.title === item.title)) {
    return [...data];
  } else {
    return [...data, item];
  }
};

export const useSelectedFiltersStore = create<State>((set, get) => ({
  media: [],
  services: [],
  email: null,
  addItem: (item) => {
    if (item.type === 'media') {
      set({ media: addNewItem({ data: get().media, item }) });
    }
    if (item.type === 'services') {
      set({ services: addNewItem({ data: get().services, item }) });
    }
    if (item.type === 'email') {
      set({ email: item });
    }
  },
  removeItem: (name) => {
    if (name.type === 'media') {
      set({ media: get().media.filter((el) => el.title !== name.title) });
    }
    if (name.type === 'services') {
      set({ services: get().services.filter((el) => el.title !== name.title) });
    }
    if (name.type === 'email') {
      set({ email: null });
    }
  },
  clean: () => {
    set({ media: [] });
    set({ services: [] });
    set({ email: null });
  },
}));
