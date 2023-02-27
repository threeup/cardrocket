import React from "react";
import { useStore } from "../../zstore/store";

export function PlanetView(): React.ReactElement {
  const planets = useStore((state) => state.planets);
  const fetchedPlanets = useStore((state) => state.fetchedPlanets);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const getPlanetNames = useStore((state) => state.getPlanetNames);

  if (!fetchedPlanets) {
    getPlanetNames(); //.then(() => console.log("fetched"));
  }
  return (
    <div>
      {Object.values(planets).map((planet) => (
        <li key={planet.id}>
          <input
            type="checkbox"
            checked={planet.done}
            onChange={(e) => toggleTodo(planet.id)}
          />
          {planet.done ? <s>{planet.title}</s> : planet.title}
        </li>
      ))}
    </div>
  );
}
