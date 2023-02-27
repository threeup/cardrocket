import React, { useState } from "react";
import { Bear } from "./bearTypes";
import { useStore } from "../../zstore/store";

export function BearView(): React.ReactElement {
  const bears = useStore((state) => state.bears);
  const addBear = useStore((state) => state.addBear);
  const eatFish = useStore((state) => state.eatFish);
  const [num, setNum] = useState(100);

  return (
    <div>
      {Object.values(bears).map((bear: Bear) => (
        <li key={bear.id}>
          {bear.id}
          <button onClick={() => eatFish(bear.id)}>Eat</button>
        </li>
      ))}

      <button
        onClick={() => {
          addBear("Bear" + num);
          setNum(num + 1);
          return;
        }}
      >
        Add Bear
      </button>
    </div>
  );
}
