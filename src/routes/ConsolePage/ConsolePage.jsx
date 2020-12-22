/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GamestashContext } from "../../context/GamestashContext";
import Main from "../../api/Main";
import GameCard from "../../components/GameCard/GameCard";
import AddGameForm from "../../components/AddGameForm/AddGameForm";

const ConsolePage = () => {
  const { id } = useParams();
  const { selectedConsole, setSelectedConsole } = useContext(GamestashContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Main.get(`/consoles/${id}`);
        setSelectedConsole(response.data.data);
        console.log(selectedConsole.games)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div>{selectedConsole && (
      <>
      <h1>{selectedConsole.consoles.name}</h1>
      <AddGameForm/>
      {selectedConsole.games.map((game) => {
          return (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                condition={game.condition}
                />
          )
      })}
      </>
  )}</div>; 
};

export default ConsolePage;
