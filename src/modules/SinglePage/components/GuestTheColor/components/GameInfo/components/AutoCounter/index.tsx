import { useEffect, useState, useContext } from "react";
import { Context } from "../../../../../../../../pages/index";

const AutoCounter = () => {
  const { setGameStarted, hasGameStarted, score } = useContext(Context);

  const [time, setTime] = useState(30);

  useEffect(() => {
    time > 0
      ? setTimeout(() => setTime(time - 1), 1000)
      : setGameStarted(false);
  }, [time]);

  return (
    <h3>
      REMANING <br /> TIME (S) <br /> <strong>{time}</strong>
    </h3>
  );
};

export default AutoCounter;
