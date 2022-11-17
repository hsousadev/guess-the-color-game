import React, { useContext } from "react";
import { Context } from "../../../../pages/index";

import ColorLog from "./components/ColorLog";

import { Container } from "./styles";

const GameLogs = () => {
  const { gameLogs } = useContext(Context);

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

      <div className="logs">
        {gameLogs?.length > 0 &&
          gameLogs?.map((log, index) =>
            !log?.guessedColor ? (
              <ColorLog key={index} colors={[log.correctColor]} />
            ) : (
              <ColorLog
                key={index}
                colors={[log.guessedColor, log.correctColor]}
              />
            )
          )}
      </div>
    </Container>
  );
};

export default GameLogs;
