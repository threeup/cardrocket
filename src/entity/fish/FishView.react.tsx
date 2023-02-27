import React from "react";
import { useStore } from "../../zstore/store";

export function FishView(): React.ReactElement {
  const fishes = useStore((state) => state.fishes);
  const addFish = useStore((state) => state.addFish);

  return (
    <div>
      <button
        onClick={() => {
          addFish();
          return;
        }}
      >
        Add Fish {fishes}
      </button>
    </div>
  );
}
