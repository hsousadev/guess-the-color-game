import { FormEvent, useContext, useEffect, useState } from "react";
import { Context } from "../../../../pages/index";

import GameInfo from "./components/GameInfo";

import { Container } from "./styles";

interface ColorProps {
  hex?: string;
}

const GuestTheColor = () => {
  const {
    hasGameStarted,
    setGameStarted,
    username,
    setUsername,
    initialColors,
    score,
    setScore,
  } = useContext(Context);

  const [user, setUser] = useState<String | null>();
  const [selectColors, setSelectColors] = useState(initialColors);

  useEffect(() => {
    selectColors.sort(() => Math.random() - 0.5);
  }, selectColors);

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, [username]);

  async function getColors() {
    const res = await fetch(
      "https://x-colors.herokuapp.com/api/random?number=3"
    );

    const data = await res.json();
    const colors = data;

    setSelectColors(colors);
  }

  function handleNewColor(color: HTMLInputElement) {
    getColors();

    if (color.value === selectColors[0].hex) setScore(score + 1);
    else setScore(score - 1);
  }

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
    <Container hasGameStarted={hasGameStarted} selectColors={selectColors[0]}>
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
          {selectColors.map((color: ColorProps, index: number) => (
            <input
              className="answer"
              type="button"
              key={index}
              onClick={(event) =>
                handleNewColor(event.target as HTMLInputElement)
              }
              value={color?.hex}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default GuestTheColor;
