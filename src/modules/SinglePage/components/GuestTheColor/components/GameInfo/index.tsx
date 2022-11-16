import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../../../pages/index";

import AutoCounter from "./components/AutoCounter";

import { Container } from "./styles";

const GameInfo = () => {
  const { hasGameStarted, setGameStarted, username, score, setScore } =
    useContext(Context);
  const [user, setUser] = useState<String | null>();

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, [username]);

  useEffect(() => {
    if (hasGameStarted) setScore(0);
  }, [hasGameStarted]);

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
      {hasGameStarted ? (
        <button className="restart" onClick={() => setGameStarted(false)}>
          RESTART
        </button>
      ) : (
        <button className="restart" disabled>
          RESTART
        </button>
      )}
      <div className="points">
        <div className="score">
          <h3>
            HIGH <br /> SCORE
          </h3>

          <strong>13</strong>

          <h3>Henrique</h3>
        </div>
        <div className="score">
          <h3>SCORE</h3>
          <strong>{score}</strong>
          <h3>{user}</h3>
        </div>
      </div>
    </Container>
  );
};

export default GameInfo;
