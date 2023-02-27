import { Header } from "./components/header.react";
import { Panel } from "./components/panel.react";
import backgroundImage from "./assets/background.svg";
import "./styles/App.css";
import { PlanetView } from "./entity/planet/PlanetView.react";
import { BearView } from "./entity/bear/BearView.react";
import { FishView } from "./entity/fish/FishView.react";
import { AnimalView } from "./entity/AnimalView.react";

function App() {
  return (
    <div
      className="app"
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Panel />
      <PlanetView />
      <BearView />
      <FishView />
      <AnimalView />
    </div>
  );
}

export default App;
