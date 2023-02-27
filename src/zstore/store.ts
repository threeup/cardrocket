import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";
import { createPlanetSlice } from "./planetSlice";
import { FishSlice } from "../entity/fish/fishTypes";
import { BearSlice } from "../entity/bear/bearTypes";
import { PlanetSlice } from "../entity/planet/planetTypes";

export interface IStore extends BearSlice, FishSlice, PlanetSlice {}

export const useStore = create<IStore>()(
  devtools(
    immer<IStore>((...setGetApi) => ({
      ...createBearSlice(...setGetApi),
      ...createFishSlice(...setGetApi),
      ...createPlanetSlice(...setGetApi),
    })),
    { enabled: true }
  )
);
