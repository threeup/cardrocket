export interface Bear {
  id: string;
  eaten: number;
}
export type BearState = {
  bears: Record<string, Bear>;
};

export type BearActions = {
  addBear: (id: string) => void;
  removeBear: (id: string) => void;
  eatFish: (id: string) => void;
  bearCount: () => number;
  animalCount: () => number;
  animals: () => number;
};

export interface BearSlice extends BearState, BearActions {}

export const InitialBearState: BearState = {
  bears: {},
};
