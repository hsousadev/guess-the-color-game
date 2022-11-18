import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../../pages/index";

import GameInfo from "./components/GameInfo";

import { Container } from "./styles";

interface ColorProps {
  hex?: string;
}

const GuestTheColor = () => {
  const {
    username,
    score,
    gameLogs,
    hasGameStarted,
    initialColors,
    setUsername,
    setScore,
    setGameLogs,
    setGameStarted,
  } = useContext(Context);

  const [btnDisabled, setBtnDisabled] = useState(false);
  const [user, setUser] = useState<String | null>();
  const [selectColors, setSelectColors] = useState(initialColors);
  const [bgColor, setBgColor] = useState(
    initialColors[Math.floor(Math.random() * initialColors.length)].hex
  );

  let timeoutRef: any = useRef(null);

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, [username]);

  function countdown(time: number) {
    if (localStorage.getItem("hasgamestarted") === "true") {
      if (time > 9) {
        getColors();
      } else {
        localStorage.setItem("timesecond", `${time + 1}`);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => countdown(time + 1), 1000);
      }
    }
  }

  async function getColors() {
    const res = await fetch(
      "https://x-colors.herokuapp.com/api/random?number=3"
    );

    const data = await res.json();
    const colors = data;

    setSelectColors(colors);
    setBgColor(colors[Math.floor(Math.random() * colors.length)].hex);
    setBtnDisabled(false);

    countdown(0);
  }

  function handleNewColor(color: HTMLInputElement) {
    setBtnDisabled(true);

    if (color.value === bgColor) {
      setScore(score + 1);

      setGameLogs([
        ...gameLogs,
        {
          correctColor: color.value,
          seconds: localStorage.getItem("timesecond"),
        },
      ]);
    } else {
      setGameLogs([
        ...gameLogs,
        {
          guessedColor: color.value,
          correctColor: bgColor,
          seconds: localStorage.getItem("timesecond"),
        },
      ]);

      if (score > 0) {
        setScore(score - 1);
      }
    }

    getColors();
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
    localStorage.setItem("hasgamestarted", "true");

    countdown(0);
  }

  return (
    <Container hasGameStarted={hasGameStarted} bgColor={bgColor}>
      <h1>Guess the color</h1>

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

      {hasGameStarted && !btnDisabled && (
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
