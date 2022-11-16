import Head from "next/head";

import React, { useState, createContext } from "react";

import SinglePage from "../modules/SinglePage";

interface GlobalContext {
  hasGameStarted: boolean;
  username: string;
  initialColors: any;
  score: number;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext<GlobalContext>({
  score: 0,
  hasGameStarted: false,
  username: "",
  initialColors: [],
  setGameStarted: () => {},
  setUsername: () => {},
  setScore: () => {},
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
      }}
    >
      <SinglePage />
    </Context.Provider>
  );
}
