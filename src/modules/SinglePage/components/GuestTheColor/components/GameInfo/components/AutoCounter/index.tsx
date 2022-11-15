import { useEffect, useState } from "react";

const AutoCounter = () => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  return (
    <h3>
      REMANING <br /> TIME (S) <br /> <strong>{time}</strong>
    </h3>
  );
};

export default AutoCounter;
