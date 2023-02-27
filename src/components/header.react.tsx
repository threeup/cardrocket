import rocketImage from '../assets/rocket.svg';
export function Header(): JSX.Element {
  return (
    <>
      <h1>Card Rocket</h1>
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={rocketImage} className="logo rocket" alt="Rocket" />
      </div>
    </>
  );
}
