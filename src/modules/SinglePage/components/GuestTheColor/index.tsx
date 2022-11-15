import { FormEvent, useContext, useEffect, useState } from "react";
import { Context } from "../../../../pages/index";

import GameInfo from "./components/GameInfo";

import { Container } from "./styles";

const GuestTheColor = () => {
  const { hasGameStarted, setGameStarted, username, setUsername, selectColor } =
    useContext(Context);

  const [user, setUser] = useState<String | null>();

  async function getColors() {
    const res = await fetch(
      "https://x-colors.herokuapp.com/api/random?number=3"
    );

    const data = await res.json();
    const colors = data;

    console.log(colors);
  }

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, [username]);

  useEffect(() => {
    getColors();
  }, []);

  function handleStartGame(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.username) {
      return;
    }

    const username = String(data.username);

    setUsername(username);
    localStorage.setItem("username", username);
    setGameStarted(true);
  }

  return (
    <Container hasGameStarted={hasGameStarted} selectColor={selectColor}>
      <h1>Game has started</h1>

      <GameInfo />

      <div className="color-view">
        <div className="bar" />
        <div className="color">
          {!hasGameStarted && (
            <form onSubmit={handleStartGame} action="">
              <label htmlFor="username"></label>
              {user ? (
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  maxLength={15}
                  minLength={3}
                  defaultValue={String(user)}
                />
              ) : (
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  maxLength={15}
                  minLength={3}
                />
              )}

              <button type="submit">START</button>
            </form>
          )}
        </div>
      </div>

      {hasGameStarted && (
        <div id="answers" className="answers">
          <button id="answer">#F2FBA5</button>
          <button id="answer">#F85497</button>
          <button id="answer">#F25214</button>
        </div>
      )}
    </Container>
  );
};

export default GuestTheColor;
