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
        console.log(response)
        setSelectedConsole(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div>{selectedConsole && (
      <>
      <h1>{selectedConsole.consoles.name}</h1>
      <p>Add A New Game</p>
      <AddGameForm/>
      <GameCard games={selectedConsole.games}/>
      </>
  )}</div>; //twice because only when selectedConsole is defined will we render the name, avoids hang ups
};

export default ConsolePage;
