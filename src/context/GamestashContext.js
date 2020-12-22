import React, { createContext, useState } from "react";

export const GamestashContext = createContext();

export const ContextProvider = (props) => {
  const [consoles, setConsoles] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedConsole, setSelectedConsole] = useState(null);

  const addConsole = (console) => {
      setConsoles([...consoles, console])
  }

  const deleteConsole = (id) => {
      const consoleResult = consoles.filter(console => console.id !== id)
      const gameResult = games.filter(game => game.console_id !== id)    
      setConsoles(consoleResult)
      setGames(gameResult)
  }

  const deleteGame = (id) => {
      const gameResult = games.filter(game => game.id !== id)
      const selectedRes = selectedConsole.games.filter(game => game.id !== id)
      setGames(gameResult)
      setSelectedConsole([...selectedConsole.consoles, selectedRes])   //will this crash?
  }

  return (
    <GamestashContext.Provider
      value={{
        consoles,
        setConsoles,
        addConsole,
        deleteConsole,
        selectedConsole,
        setSelectedConsole,
        games,
        setGames,
        deleteGame
      }}
    >
      {props.children}
    </GamestashContext.Provider>
  );
};
