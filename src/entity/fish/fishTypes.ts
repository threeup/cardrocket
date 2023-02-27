export interface FishSlice {}

export type FishState = {
  fishes: number;
};

export type FishActions = {
  addFish: () => void;
};

export interface FishSlice extends FishState, FishActions {}

export const InitialFishState: FishState = {
  fishes: 10,
};
