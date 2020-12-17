import React, { createContext, useState } from "react";

export const GamestashContext = createContext();

export const ContextProvider = (props) => {
  const [consoles, setConsoles] = useState([]);
  const [games, setGames] = useState([]);

  return (
    <GamestashContext.Provider
      value={{
        consoles,
        setConsoles,
        games,
        setGames,
      }}
    >
      {props.children}
    </GamestashContext.Provider>
  );
};
