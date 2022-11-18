import React from "react";

import { Container } from "./styles";

const ResetAllData = () => {
  function handleResetAllData() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Container>
      <button onClick={() => handleResetAllData()}>Reset all data</button>
    </Container>
  );
};

export default ResetAllData;
