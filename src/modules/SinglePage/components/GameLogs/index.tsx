import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../../../../pages/index";

import ColorLog from "./components/ColorLog";

import { Container } from "./styles";

const GameLogs = () => {
  const { gameLogs } = useContext(Context);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ref?.current?.scroll({ top: -1000 });
  }, [gameLogs]);

  return (
    <Container>
      <h2>Current/Latest game</h2>

      <div className="columns">
        <h3>
          Guessed <br /> color
        </h3>
        <h3>
          Correct <br /> color
        </h3>
        <h3>Score</h3>
      </div>

      <div ref={ref} id="logs" className="logs">
        {gameLogs?.length > 0 &&
          gameLogs?.map((log, index) =>
            !log?.guessedColor ? (
              <ColorLog
                key={index}
                colors={[log.correctColor]}
                seconds={log.seconds}
              />
            ) : (
              <ColorLog
                key={index}
                colors={[log.guessedColor, log.correctColor]}
                seconds={log.seconds}
              />
            )
          )}
      </div>
    </Container>
  );
};

export default GameLogs;
