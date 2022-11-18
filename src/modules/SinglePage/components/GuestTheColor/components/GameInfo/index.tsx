import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../../../pages/index";

import AutoCounter from "./components/AutoCounter";

import { Container } from "./styles";

const GameInfo = () => {
  const {
    hasGameStarted,
    setGameStarted,
    username,
    score,
    setScore,
    highScore,
    setHighScore,
    setGameLogs,
  } = useContext(Context);
  const [user, setUser] = useState<String | null>();

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, [username]);

  useEffect(() => {
    const highScore = localStorage.getItem("highscore");
    if (highScore) {
      setHighScore(JSON.parse(highScore));
    }
  }, []);

  useEffect(() => {
    if (hasGameStarted) {
      setScore(0);
      setGameLogs([]);
    }
  }, [hasGameStarted]);

  function handleEndGame() {
    localStorage.setItem("hasgamestarted", "false");
    setGameStarted(false);
  }

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
        <button className="restart" onClick={() => handleEndGame()}>
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

          <strong>{highScore.score}</strong>

          <h3>{highScore.username}</h3>
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
