export interface Planet {
  id: string;
  title: string;
  done: boolean;
}
export type PlanetState = {
  planets: Record<string, Planet>;
  fetchedPlanets: boolean;
};

export type PlanetActions = {
  getPlanetNames: () => Promise<void>;
  toggleTodo: (todoId: string) => void;
};

export interface PlanetSlice extends PlanetState, PlanetActions {}

export const InitialPlanetState: PlanetState = {
  planets: {},
  fetchedPlanets: false,
};
