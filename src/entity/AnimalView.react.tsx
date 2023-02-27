import React from "react";
import { useStore } from "../zstore/store";

export function AnimalView(): React.ReactElement {
  const bears = useStore((state) => state.bears);
  const fishes = useStore((state) => state.fishes);
  const total = fishes + Object.keys(bears).length;

  return <div>Animals:{total}</div>;
}
