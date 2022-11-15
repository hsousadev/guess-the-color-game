import Head from "next/head";

import React, { useState, createContext } from "react";

import SinglePage from "../modules/SinglePage";

interface GlobalContext {
  hasGameStarted: boolean;
  username: string;
  selectColor: {
    hex?: string;
    rbg?: string;
    hsl?: string;
  };
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setSelectColor: React.Dispatch<React.SetStateAction<Object>>;
}

export const Context = createContext<GlobalContext>({
  hasGameStarted: false,
  username: "",
  selectColor: {
    hex: "",
    rbg: "",
    hsl: "",
  },
  setGameStarted: () => {},
  setUsername: () => {},
  setSelectColor: () => {},
});

interface colorProps {
  color: {
    hex?: string;
    rbg?: string;
    hsl?: string;
  };
}

export async function getStaticProps() {
  const res = await fetch("https://x-colors.herokuapp.com/api/random");

  const data = await res.json();
  const color = data;

  return {
    props: {
      color,
    },

    revalidate: 30,
  };
}

export default function Home({ color }: colorProps) {
  const [hasGameStarted, setGameStarted] = useState(false);
  const [username, setUsername] = useState("");

  const [selectColor, setSelectColor] = useState(color);

  return (
    <Context.Provider
      value={{
        hasGameStarted,
        setGameStarted,
        username,
        setUsername,
        selectColor,
        setSelectColor,
      }}
    >
      <SinglePage />
    </Context.Provider>
  );
}
