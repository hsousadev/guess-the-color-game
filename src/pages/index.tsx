import React, { useState, createContext } from "react";

import SinglePage from "../modules/SinglePage";

interface ColorLogProps {
  guessedColor: string;
  correctColor: string;
  seconds: number;
}
interface GlobalContext {
  hasGameStarted: boolean;
  username: string;
  initialColors: any;
  score: number;
  highScore: {
    username: string;
    score: number;
  };
  gameLogs: Array<ColorLogProps>;
  setGameLogs: any;
  setHighScore: React.Dispatch<
    React.SetStateAction<{ username: string; score: number }>
  >;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext<GlobalContext>({
  score: 0,
  highScore: {
    username: "",
    score: 0,
  },
  hasGameStarted: false,
  username: "",
  initialColors: [],
  gameLogs: [],
  setGameStarted: () => {},
  setUsername: () => {},
  setScore: () => {},
  setHighScore: () => {},
  setGameLogs: () => {},
});

export async function getStaticProps() {
  const res = await fetch("https://x-colors.herokuapp.com/api/random?number=3");

  const data = await res.json();
  const initialColors = data;

  return {
    props: {
      initialColors,
    },

    revalidate: 5,
  };
}

export default function Home({ initialColors }: any) {
  const [hasGameStarted, setGameStarted] = useState(false);
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState({ username: "", score: 0 });
  const [gameLogs, setGameLogs] = useState([]);

  return (
    <Context.Provider
      value={{
        hasGameStarted,
        setGameStarted,
        username,
        setUsername,
        initialColors,
        score,
        setScore,
        highScore,
        setHighScore,
        gameLogs,
        setGameLogs,
      }}
    >
      <SinglePage />
    </Context.Provider>
  );
}
