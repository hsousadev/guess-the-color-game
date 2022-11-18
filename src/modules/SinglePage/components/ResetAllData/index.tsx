import React from "react";

import { Container } from "./styles";

const ResetAllData = () => {
  function handleResetAllData() {
    localStorage.setItem("username", "");
    localStorage.setItem("highscore", "");
    window.location.reload();
  }

  return (
    <Container>
      <button onClick={() => handleResetAllData()}>Reset all data</button>
    </Container>
  );
};

export default ResetAllData;
