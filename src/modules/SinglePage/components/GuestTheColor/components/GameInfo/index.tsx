import { useContext } from "react";
import { Context } from "../../../../../../pages/index";

import AutoCounter from "./components/AutoCounter";

import { Container } from "./styles";

const GameInfo = () => {
  const { hasGameStarted, setGameStarted } = useContext(Context);

  return (
    <Container>
      <div className="time">
        {hasGameStarted ? (
          <AutoCounter />
        ) : (
          <h3>
            REMANING <br /> TIME (S) <br /> <strong>30</strong>
          </h3>
        )}
      </div>
      <div className="restart">
        <button>RESTART</button>
      </div>
      <div className="points">
        <div className="score">
          <h3>
            HIGH <br /> SCORE
          </h3>

          <strong>13</strong>
        </div>
        <div className="score">
          <h3>SCORE</h3>
          <strong>13</strong>
        </div>
      </div>
    </Container>
  );
};

export default GameInfo;
