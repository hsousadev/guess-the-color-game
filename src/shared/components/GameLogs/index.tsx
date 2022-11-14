import React from "react";

import ColorLog from "./components/ColorLog";

import { Container } from "./styles";

const GameLogs = () => {
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
        <ColorLog colors={["#784587", "#456320"]} />
        <ColorLog colors={["#784587"]} />
      </div>
    </Container>
  );
};

export default GameLogs;
