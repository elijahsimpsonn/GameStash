import React, { createContext, useState } from "react";

export const GamestashContext = createContext();

export const ContextProvider = (props) => {
  const [consoles, setConsoles] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedConsole, setSelectedConsole] = useState(null);

  const addConsole = (console) => {
      setConsoles([...consoles, console])
  }

  const deleteConsole = (console) => {
      const result = consoles.filter(e => e !== console)    //I need to pass in the ID to delete from state and render at the same time
      setConsoles(result)
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
      }}
    >
      {props.children}
    </GamestashContext.Provider>
  );
};
