import { useEffect, useState, useContext } from "react";
import { Context } from "../../../../../../../../pages/index";

const AutoCounter = () => {
  const { setGameStarted, score, username, setHighScore } = useContext(Context);

  const [time, setTime] = useState(30);

  function handleEndGame() {
    setGameStarted(false);
    localStorage.setItem("hasgamestarted", "false");

    const highScore = localStorage.getItem("highscore");

    if (!highScore) {
      localStorage.setItem("highscore", JSON.stringify({ username, score }));
      setHighScore({ username, score });
    } else if (score > JSON.parse(highScore).score) {
      localStorage.setItem("highscore", JSON.stringify({ username, score }));
      setHighScore({ username, score });
    }
  }

  useEffect(() => {
    time > 0 ? setTimeout(() => setTime(time - 1), 1000) : handleEndGame();
  }, [time]);

  return (
    <h3>
      REMANING <br /> TIME (S) <br /> <strong>{time}</strong>
    </h3>
  );
};

export default AutoCounter;
