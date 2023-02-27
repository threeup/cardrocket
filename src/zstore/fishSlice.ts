import { IStore } from "./store";
import { StateCreator } from "zustand";

import { FishSlice, InitialFishState } from "../entity/fish/fishTypes";

export const createFishSlice: StateCreator<IStore, [], [], FishSlice> = (
  set
) => ({
  ...InitialFishState,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});
