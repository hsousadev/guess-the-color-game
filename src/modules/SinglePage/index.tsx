import GameLogs from "./components/GameLogs";
import GuestTheColor from "./components/GuestTheColor";
import ResetAllData from "./components/ResetAllData";

import { Container } from "./styles";

const SinglePage = () => {
  return (
    <Container>
      <GameLogs />
      <GuestTheColor />
      <ResetAllData />
    </Container>
  );
};

export default SinglePage;
