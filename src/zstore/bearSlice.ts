import { IStore } from "./store";
import { StateCreator } from "zustand";

import { Bear, BearSlice, InitialBearState } from "../entity/bear/bearTypes";

export const createBearSlice: StateCreator<IStore, [], [], BearSlice> = (
  set,
  get
) => ({
  ...InitialBearState,
  addBear: (id: string) =>
    set((state: IStore) => {
      state.bears[id] = { id, eaten: 0 } as Bear;
      return state;
    }),
  removeBear: (id: string) =>
    set((state: IStore) => {
      delete state.bears[id];
      return state;
    }),
  eatFish: (id: string) =>
    set((state: IStore) => {
      state.bears[id].eaten++;
      state.fishes--;
      return state;
    }),
  bearCount: () => {
    return Object.keys(get().bears).length;
  },
  animalCount: () => get().fishes + get().bearCount(),
  animals: () => get().fishes + Object.keys(get().bears).length,
});
