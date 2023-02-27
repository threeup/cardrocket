import { IStore } from "./store";
import { StateCreator } from "zustand";

import {
  Planet,
  PlanetSlice,
  InitialPlanetState,
} from "../entity/planet/planetTypes";
import { toRecord } from "./helpers";

export const createPlanetSlice: StateCreator<IStore, [], [], PlanetSlice> = (
  set
) => ({
  ...InitialPlanetState,
  getPlanetNames: async () => {
    set({ fetchedPlanets: true });
    const planetsData = await (
      await fetch("https://swapi.dev/api/planets")
    ).json();
    const formatted: Array<Planet> = planetsData.results.map((pd: any) => {
      const planet: Planet = {
        id: "001" + pd.name,
        title: pd.name.toString(),
        done: false,
      };
      return planet;
    });
    set({ planets: toRecord(formatted, "id") });
  },
  toggleTodo: (id: string) => {
    set((state: IStore): Partial<IStore> => {
      state.planets[id].done = !state.planets[id].done;
      return state;
    });
  },
});
