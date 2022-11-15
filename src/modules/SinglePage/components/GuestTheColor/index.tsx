import { useContext } from "react";
import { Context } from "../../../../pages/index";

import GameInfo from "./components/GameInfo";

import { Container } from "./styles";

const GuestTheColor = () => {
  const { hasGameStarted, setGameStarted } = useContext(Context);

  return (
    <Container>
      {hasGameStarted ? <h1>Game has started</h1> : <h1>Guess the color</h1>}

      <GameInfo />

      <div className="color-view">
        <div className="bar" />
        <div className="color">
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            maxLength={15}
            minLength={3}
          />

          <button onClick={() => setGameStarted(!hasGameStarted)}>START</button>
        </div>
      </div>

      <div className="answers">
        <button>#F2FBA5</button>
        <button>#F85497</button>
        <button>#F25214</button>
      </div>
    </Container>
  );
};

export default GuestTheColor;
